  // -- ROUTER --
  CMSwift.router = (() => {
    let mode = "history"; // "history" | "hash" | "auto"
    let routes = [];
    let outlet = null;
    let unmountCurrent = null;
    let base = "";
    let beforeHook = null;

    // --- Router DevTools state ---
    let _currentCtx = null;
    let _history = [];
    let _tracing = false;

    const meta = {
      setOutlet: { description: "imposta il contenitore del router" },
      setBase: { description: "imposta il base path del router" },
      add: { description: "per aggiungere la route" },
      notFound: { description: "imposta la view 404" },
      beforeEach: { description: "hook prima di ogni navigazione" },
      start: { description: "avvia il router" },
      navigate: { description: "naviga verso una route" },
      subscribe: { description: "sottoscrive agli aggiornamenti di route" },
      current: { description: "ritorna l'URL corrente" },
      isActive: { description: "verifica se una route è attiva" },
      status: { description: "stringa di stato router" },
      inspect: { description: "stampa info diagnostiche" },
      trace: { description: "abilita/disabilita tracing" },
      history: { description: "ritorna la history interna" },
      setURLOnly: { description: "aggiorna solo l'URL del browser senza render/meta" }
    };

    function setURLOnly(urlLike, { replace = false } = {}) {
      const url = typeof urlLike === "string" ? new URL(urlLike, window.location.origin) : urlLike;
      const fullPath = url.pathname + url.search + url.hash;

      if (mode === "hash" || mode === "auto") {
        if (history.pushState) {
          const h = "#" + fullPath;
          if (replace) history.replaceState({}, "", h);
          else history.pushState({}, "", h);
          return;
        }
        const h = "#" + fullPath;
        if (replace) window.location.replace(h);
        else window.location.hash = h;
        return;
      }

      if (replace) history.replaceState({}, "", base + fullPath);
      else history.pushState({}, "", base + fullPath);
    }


    function getCurrentURL() {
      if (mode === "hash") {
        const h = window.location.hash || "#/";
        const url = h.startsWith("#") ? h.slice(1) : h;
        return new URL(url, window.location.origin);
      }

      // auto
      if (mode === "auto") {
        if (window.location.hash.startsWith("#/")) {
          const url = window.location.hash.slice(1);
          return new URL(url, window.location.origin);
        }
      }

      return new URL(window.location.href);
    }

    function updateURL(url, replace = false) {
      if (mode === "hash" || (mode === "auto" && !history.pushState)) {
        const h = "#" + (url.pathname + url.search + url.hash);
        if (replace) {
          window.location.replace(h);
        } else {
          window.location.hash = h;
        }
        return;
      }

      if (replace) history.replaceState({}, "", base + url.pathname + url.search + url.hash);
      else history.pushState({}, "", base + url.pathname + url.search + url.hash);
    }

    function setMode(m) {
      mode = m || "history";
    }

    function normalizePath(path) {
      // garantisce leading slash e rimuove trailing slash (tranne root)
      if (!path) return "/";
      if (!path.startsWith("/")) path = "/" + path;
      if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
      return path;
    }

    function stripBase(path) {
      if (base && path.startsWith(base)) {
        const p = path.slice(base.length) || "/";
        return normalizePath(p);
      }
      return normalizePath(path);
    }

    function compilePattern(pattern) {
      // "/users/:id" -> regex + keys
      pattern = normalizePath(pattern);
      const keys = [];
      const regexStr = pattern
        .replace(/([.+*?=^!${}()[\]|/\\])/g, "\\$1") // escape regex, preserve :params
        .replace(/\\\/:([A-Za-z0-9_]+)/g, (_, k) => {
          keys.push(k);
          return "\\/([^\\/]+)";
        });
      const regex = new RegExp("^" + regexStr + "$");
      return { pattern, regex, keys };
    }

    function parseQuery(search) {
      const q = {};
      const sp = new URLSearchParams(search || "");
      sp.forEach((v, k) => {
        if (q[k] === undefined) q[k] = v;
        else if (Array.isArray(q[k])) q[k].push(v);
        else q[k] = [q[k], v];
      });
      return q;
    }

    function flattenRoutes() {
      const all = [];
      for (const r of routes) {
        all.push({ ...r, _parent: null });
        if (r.children && r.children.length) {
          for (const c of r.children) {
            all.push({ ...c, _parent: r });
          }
        }
      }
      // ordina: più specifiche prima (path più lungo)
      all.sort((a, b) => b.path.length - a.path.length);
      return all;
    }

    function match(pathname) {
      const path = normalizePath(pathname);
      const all = flattenRoutes();

      for (const r of all) {
        const m = r._compiled.regex.exec(path);
        if (!m) continue;

        const params = {};
        r._compiled.keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1])));

        return { route: r, params, parent: r._parent || null };
      }
      return null;
    }

    function isActive(path) {
      if (!path) return false;
      const currentPath = _currentCtx ? _currentCtx.path : stripBase(getCurrentURL().pathname);
      let pathname = path;

      if (typeof pathname === "string" && (pathname.includes("?") || pathname.includes("#") || pathname.includes("://"))) {
        pathname = new URL(pathname, window.location.origin).pathname;
      }

      const target = stripBase(pathname);
      if (!target.includes(":")) return target === currentPath;
      const compiled = compilePattern(target);
      return compiled.regex.test(currentPath);
    }

    async function render(urlLike, { replace = false } = {}) {
      if (!outlet) {
        console.warn("[router] outlet non impostato. Usa CMSwift.router.setOutlet('#app').");
        return;
      }

      const url = typeof urlLike === "string" ? new URL(urlLike, window.location.origin) : urlLike;
      if (_tracing) {
        console.log("[router.navigate]", url.toString());
      }
      const fullPath = url.pathname + url.search + url.hash;

      // aggiorna address bar
      updateURL(url, replace);

      const pathname = stripBase(url.pathname);
      const m = match(pathname);

      const ctx = {
        path: pathname,
        fullPath,
        params: m ? m.params : {},
        query: parseQuery(url.search),
        hash: url.hash || "",
        navigate, // per navigare dentro view
        outlet
      };

      // beforeEach (redirect/block)
      if (beforeHook) {
        const res = await beforeHook(ctx);
        if (res === false) return;          // blocca
        if (typeof res === "string") {      // redirect
          navigate(res, { replace: true });
          return;
        }
      }

      // unmount view precedente
      if (typeof unmountCurrent === "function") {
        try { unmountCurrent(); } catch (e) { console.error("[router] unmount error:", e); }
        unmountCurrent = null;
      }

      // 404
      if (!m) {
        const view404 = routes._notFound;
        if (view404) {
          unmountCurrent = CMSwift.mount(outlet, () => view404(ctx), { clear: true });
        } else {
          unmountCurrent = CMSwift.mount(outlet, _.div("404"), { clear: true });
        }
        notifyRoute(ctx);
        _currentCtx = ctx;
        _history.push({
          at: Date.now(),
          path: ctx.path,
          params: ctx.params,
          query: ctx.query,
          hash: ctx.hash
        });
        if (_history.length > 50) _history.shift();
        return;
      }

      // mount view matchata
      // mount view matchata (supporta nested)
      const view = m.route.view;
      const parent = m.parent; // se esiste, questa route è child
      let childMounted = null;

      ctx.renderChild = (target) => {
        if (!ctx._child) return null;

        const childOutlet = typeof target === "string" ? ctx.outlet.querySelector(target) : target;
        if (!childOutlet) {
          console.warn("[router] child outlet non trovato:", target);
          return null;
        }

        // monta child (clear true)
        childMounted = CMSwift.mount(childOutlet, () => ctx._child.view(ctx._child.ctx), { clear: true });
        return childMounted;
      };

      if (parent) {
        // nested: render layout (parent.view) e prepara child
        const childRoute = m.route;

        // ctx child separato (stessi query/hash, params merged)
        const childCtx = {
          ...ctx,
          params: { ...ctx.params }, // include già i params del child match (per come matcha)
        };

        ctx._child = {
          view: childRoute.view,
          ctx: childCtx
        };

        // mount layout sul root outlet
        unmountCurrent = CMSwift.mount(outlet, () => parent.view(ctx), { clear: true });
      } else {
        // non nested
        ctx._child = null;
        unmountCurrent = CMSwift.mount(outlet, () => view(ctx), { clear: true });
      }

      notifyRoute(ctx);
      // devtools state update
      _currentCtx = ctx;
      _history.push({
        at: Date.now(),
        path: ctx.path,
        params: ctx.params,
        query: ctx.query,
        hash: ctx.hash
      });
      if (_history.length > 50) _history.shift(); // cap

    }

    function navigate(to, opts = {}) {
      const url = new URL(to, window.location.origin);
      render(url, opts);
    }

    function start() {
      // back/forward
      window.addEventListener("popstate", () => {
        render(getCurrentURL(), { replace: true });
      });

      window.addEventListener("hashchange", () => {
        if (mode === "hash" || mode === "auto") {
          render(getCurrentURL(), { replace: true });
        }
      });



      // click interception su <a>
      document.addEventListener("click", (e) => {
        const a = e.target?.closest?.("a");
        if (!a) return;

        // rispetta:
        // - new tab / middle click / ctrl/cmd
        if (e.defaultPrevented) return;
        if (e.button !== 0) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        // rispetta download/target
        if (a.hasAttribute("download")) return;
        if (a.target && a.target !== "_self") return;

        const href = a.getAttribute("href");
        if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

        // esterno
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return;

        // hash-only (stessa pagina)
        // se vuoi gestirlo, puoi farlo qui; per ora: lasciamo default se non cambia path
        const current = new URL(window.location.href);
        const samePath = (url.pathname + url.search) === (current.pathname + current.search);
        if (samePath && url.hash) return;

        // prevent e navigate
        e.preventDefault();
        navigate(url.pathname + url.search + url.hash);
      });

      // render iniziale
      render(getCurrentURL(), { replace: true });
    }

    function setOutlet(target) {
      outlet = typeof target === "string" ? CMSwift.dom.q(target) : target;
      return outlet;
    }

    function setBase(b) {
      base = b ? normalizePath(b) : "";
      // base dovrebbe essere "" oppure "/qualcosa"
      if (base === "/") base = "";
    }

    function add(path, view, children = null) {
      const compiled = compilePattern(path);
      const record = { path: compiled.pattern, view, _compiled: compiled, children: [] };

      if (Array.isArray(children)) {
        // children: array di [subPath, subView] o [subPath, subView, subChildren]
        for (const c of children) {
          const [subPath, subView, subChildren] = c;
          // child path relativo al parent
          const full = normalizePath(compiled.pattern + "/" + (subPath || "").replace(/^\//, ""));
          record.children.push({
            path: full,
            view: subView,
            _compiled: compilePattern(full),
            children: Array.isArray(subChildren) ? subChildren : []
          });
        }
      }

      routes.push(record);
    }


    function notFound(view) {
      routes._notFound = view;
    }

    function beforeEach(fn) {
      beforeHook = fn;
    }

    // --- Router reactive state ---
    let _routeListeners = new Set();

    function notifyRoute(ctx) {
      if (_history.length > 50) _history.shift(); // cap
      for (const fn of _routeListeners) {
        try { fn(ctx); } catch (e) { console.error("[router] listener error:", e); }
      }
    }


    // ===============================
    // Router DevTools
    // ===============================
    function routeStatus() {
      if (!_currentCtx) return "ROUTER ⏳ not ready";
      const q = Object.keys(_currentCtx.query || {}).length ? "?" : "";
      return `ROUTER ${_currentCtx.path}${q} ${_currentCtx.hash || ""
        }`;
    }

    function routeInspect(label = "router") {
      if (!_currentCtx) {
        console.warn("[router.inspect] nessuna route attiva");
        return null;
      }

      const info = {
        label,
        mode: typeof mode !== "undefined" ? mode : "unknown",
        base,
        path: _currentCtx.path,
        params: _currentCtx.params,
        query: _currentCtx.query,
        hash: _currentCtx.hash,
        outlet,
        timestamp: new Date().toISOString()
      };

      console.groupCollapsed(`[CMSwift.router.inspect] ${label}`);
      console.log(info);
      console.log("history:", _history.slice());
      console.groupEnd();

      return info;
    }

    function routeTrace(on = true) {
      _tracing = !!on;
      console.log("[CMSwift.router.trace]", _tracing ? "ON" : "OFF");
    }

    function routeHistory() {
      return _history.slice();
    }


    return {
      meta,
      setOutlet, setBase, add, setURLOnly, notFound, beforeEach, start, navigate, isActive, subscribe(fn) {
        _routeListeners.add(fn);
        return () => _routeListeners.delete(fn);
      },
      current() {
        return getCurrentURL ? getCurrentURL() : new URL(window.location.href);
      },
      status: routeStatus,
      inspect: routeInspect,
      trace: routeTrace,
      history: routeHistory
    };
  })();

  if (CMSwift.config?.debug) {
    window.$router = CMSwift.router;
  }
