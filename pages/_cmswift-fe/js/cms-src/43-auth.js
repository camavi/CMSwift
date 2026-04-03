  // ===============================
  // Auth Plugin (store + router guard)
  // Auth Plugin + Roles / Permissions
  // Auth Plugin (async + refresh token)
  // ===============================
  CMSwift.plugins.auth = {
    install(app, opts = {}) {
      const options = {
        key: opts.key || "auth",
        loginRoute: opts.loginRoute || "/login",
        protected: opts.protected || [],
        autoRedirect: opts.autoRedirect ?? true,

        // async config
        endpoints: opts.endpoints || {
          login: "/api/login",
          refresh: "/api/refresh",
          logout: "/api/logout"
        },

        fetchOptions: opts.fetchOptions || {},
        tokenHeader: opts.tokenHeader || "Authorization",
        tokenPrefix: opts.tokenPrefix || "Bearer ",

        refreshMargin: opts.refreshMargin || 30_000 // ms prima della scadenza
      };

      // ---------- STORE ----------
      const [getAuth, setAuth] = app.store.signal(options.key, null);

      const getUser = () => getAuth()?.user || null;
      const isAuth = () => !!getAuth()?.accessToken;

      // ---------- ROLES / PERMS ----------
      const roles = () => getUser()?.roles || [];
      const perms = () => getUser()?.permissions || [];

      const hasRole = (r) => roles().includes(r);
      const can = (p) => perms().includes(p);
      const canAny = (list) => list.some(x => hasRole(x) || can(x));
      const canAll = (list) => list.every(x => hasRole(x) || can(x));

      // ---------- INTERNAL STATE ----------
      let refreshing = false;
      let refreshQueue = [];

      // ---------- HELPERS ----------
      function needsRefresh() {
        const a = getAuth();
        if (!a?.expiresAt) return false;
        return Date.now() > (a.expiresAt - options.refreshMargin);
      }

      async function doRefresh() {
        if (refreshing) {
          return new Promise((res, rej) => refreshQueue.push({ res, rej }));
        }

        refreshing = true;

        try {
          const r = await fetch(options.endpoints.refresh, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken: getAuth()?.refreshToken })
          });

          if (!r.ok) throw new Error("Refresh failed");

          const data = await r.json();
          setAuth({ ...getAuth(), ...data });

          refreshQueue.forEach(q => q.res(true));
          refreshQueue = [];
          return true;

        } catch (e) {
          refreshQueue.forEach(q => q.rej(e));
          refreshQueue = [];
          setAuth(null);
          if (options.autoRedirect) app.router.navigate(options.loginRoute);
          throw e;

        } finally {
          refreshing = false;
        }
      }

      // ---------- ASYNC AUTH API ----------
      async function loginAsync(credentials) {
        const r = await fetch(options.endpoints.login, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials)
        });

        if (!r.ok) throw new Error("Login failed");
        const data = await r.json();
        setAuth(data);
        return data;
      }

      async function logoutAsync() {
        try {
          await fetch(options.endpoints.logout, { method: "POST" });
        } catch { }
        setAuth(null);
        if (options.autoRedirect) app.router.navigate(options.loginRoute);
      }

      // ---------- AUTH FETCH ----------
      async function authFetch(url, opts = {}) {
        if (needsRefresh()) await doRefresh();

        const a = getAuth();
        const headers = new Headers(opts.headers || {});
        if (a?.accessToken) {
          headers.set(options.tokenHeader, options.tokenPrefix + a.accessToken);
        }

        const r = await fetch(url, { ...options.fetchOptions, ...opts, headers });

        if (r.status === 401 && getAuth()?.refreshToken && !opts._authRetried) {
          await doRefresh();
          return authFetch(url, { ...opts, _authRetried: true });
        }

        return r;
      }

      // ---------- ROUTER GUARD ----------
      app.router.beforeEach((ctx) => {
        const path = ctx.path;
        const protectedMatch = options.protected.some(p =>
          typeof p === "string"
            ? path.startsWith(p)
            : p instanceof RegExp
              ? p.test(path)
              : false
        );

        if (protectedMatch && !isAuth()) {
          return options.loginRoute;
        }
        return true;
      });

      // ---------- PUBLIC API ----------
      app.auth = {
        user: getUser,
        isAuth,
        hasRole,
        can,
        canAny,
        canAll,
        loginAsync,
        logoutAsync,
        fetch: authFetch,
        _getState: getAuth
      };

      // ---------- HOOK ----------
      app.useAuth = function (ctx) {
        if (ctx && typeof ctx.onDispose === "function") {
          // future-proof
        }

        return app.auth;
      };

      // ===============================
      // Auth DevTools
      // ===============================
      (function attachAuthDevTools(app) {
        if (!app || !app.auth) return;

        const auth = app.auth;
        let tracing = false;

        function safeNow() { return Date.now(); }

        function decodeJWT(token) {
          if (!token || typeof token !== "string") return null;
          const parts = token.split(".");
          if (parts.length < 2) return null;
          try {
            const b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
            const json = decodeURIComponent(
              atob(b64).split("").map(c => "%" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("")
            );
            return JSON.parse(json);
          } catch {
            return null;
          }
        }

        function getAuthState() {
          // nel plugin async, lo stato è in store sotto key; ma auth espone user/isAuth/fetch.
          // Se hai accesso diretto a getAuth nel plugin, puoi agganciarlo qui.
          // Qui facciamo best-effort: cerchiamo store key "auth" o "user" non possiamo sapere.
          // Quindi: ci basiamo su auth.user() e (se esiste) auth._getState()
          if (typeof auth._getState === "function") {
            const state = auth._getState();
            return state && typeof state === "object"
              ? state
              : { user: auth.user?.() ?? null };
          }
          return { user: auth.user?.() ?? null };
        }

        function status() {
          const s = getAuthState() || {};
          const user = s.user ?? auth.user?.();
          const name = user?.name || user?.email || user?.id || "anon";
          const ok = !!auth.isAuth?.();
          let exp = s.expiresAt || null;
          let left = null;
          if (exp) left = exp - safeNow();
          return ok
            ? `AUTH ✅ user=${name}${exp ? ` expiresIn=${Math.round(left / 1000)}s` : ""}`
            : `AUTH ❌ user=${name}`;
        }

        function inspect(label = "auth") {
          const s = getAuthState() || {};
          const user = s.user ?? auth.user?.();

          const roles = user?.roles || [];
          const perms = user?.permissions || [];

          const accessToken = s.accessToken || null;
          const refreshToken = s.refreshToken || null;

          const jwt = accessToken ? decodeJWT(accessToken) : null;

          const expiresAt = s.expiresAt || (jwt?.exp ? jwt.exp * 1000 : null);
          const now = safeNow();
          const expiresInMs = expiresAt ? (expiresAt - now) : null;

          const info = {
            label,
            isAuth: !!auth.isAuth?.(),
            user,
            roles,
            permissions: perms,
            has: {
              role: (r) => !!auth.hasRole?.(r),
              can: (p) => !!auth.can?.(p)
            },
            token: {
              hasAccess: !!accessToken,
              hasRefresh: !!refreshToken,
              expiresAt,
              expiresInSec: expiresInMs == null ? null : Math.round(expiresInMs / 1000),
              decodedJWT: jwt
            }
          };

          console.groupCollapsed(`[CMSwift.auth.inspect] ${label}`);
          console.log("status:", status());
          console.log(info);
          if (expiresInMs != null) {
            if (expiresInMs <= 0) console.warn("⚠️ Access token scaduto.");
            else if (expiresInMs < 60_000) console.warn("⚠️ Access token in scadenza (<60s).");
          }
          console.groupEnd();

          return info;
        }

        // tracing: intercetta alcune funzioni se presenti
        function trace(on = true) {
          tracing = !!on;
          console.log("[CMSwift.auth.trace]", tracing ? "ON" : "OFF");
        }

        // wrapper fetch (se esiste) per loggare 401/refresh
        if (typeof auth.fetch === "function" && !auth._fetchWrapped) {
          const orig = auth.fetch.bind(auth);
          auth.fetch = async (...args) => {
            const res = await orig(...args);
            if (tracing) {
              try {
                const url = args[0];
                console.log("[auth.fetch]", res.status, url);
              } catch { }
            }
            return res;
          };
          auth._fetchWrapped = true;
        }

        // aggiungiamo metodi devtools
        auth.decodeJWT = decodeJWT;
        auth.status = status;
        auth.inspect = inspect;
        auth.trace = trace;

      })(CMSwift);
    }
  };
