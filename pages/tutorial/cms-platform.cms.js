const infoLine = (label, getter) => _.div({ class: "cms-m-b-xs" }, _.b(`${label}: `), _.span(getter));

const stack = (...children) => _.div({
  style: {
    display: "grid",
    gap: "12px"
  }
}, ...children);

const row = (...children) => _.div({
  style: {
    display: "grid",
    gap: "16px",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    alignItems: "start"
  }
}, ...children);

const actionRow = (...children) => _.div({
  style: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }
}, ...children);

const makeDataJsonUrl = (payload) => new URL(`data:application/json,${encodeURIComponent(JSON.stringify(payload))}`);

const cmsPlatform = _.component((props, ctx) => {
  const storeScope = { prefix: "CMSPlatform:", storage: "session" };
  const storeKey = "__platform_count__";
  const authKey = "__demo_auth__";

  const [getStoreCount, setStoreCount, disposeStoreCount] = _.store.signal(storeKey, 1, storeScope);
  const [getStoreWatchHits, setStoreWatchHits] = _.signal(0);
  const stopStoreWatch = _.store.watch(storeKey, () => {
    setStoreWatchHits(getStoreWatchHits() + 1);
  }, storeScope);

  const router = _.useRouter(ctx);
  const route = _.useRoute(ctx);

  const httpState = _.http.state();
  const [getHttpBeforeHits, setHttpBeforeHits] = _.signal(0);
  const [getHttpAfterHits, setHttpAfterHits] = _.signal(0);
  const [getHttpErrorHits, setHttpErrorHits] = _.signal(0);
  const [getHttpPayload, setHttpPayload] = _.signal("idle");

  const removeHttpBefore = _.http.onBefore((req) => {
    if (req?.meta?.platformDemo) {
      setHttpBeforeHits(getHttpBeforeHits() + 1);
    }
    return req;
  });
  const removeHttpAfter = _.http.onAfter((res, req) => {
    if (req?.meta?.platformDemo) {
      setHttpAfterHits(getHttpAfterHits() + 1);
    }
    if (req?.meta?.forceAfterError) {
      throw new Error("platform demo forced http error");
    }
    return res;
  });
  const removeHttpError = _.http.onError((err, req) => {
    if (req?.meta?.platformDemo) {
      setHttpErrorHits(getHttpErrorHits() + 1);
      setHttpPayload(err?.message || "error");
    }
  });

  const [getOverlayCloseHits, setOverlayCloseHits] = _.signal(0);
  const [getOverlayOpenHits, setOverlayOpenHits] = _.signal(0);

  if (!_.auth && _.plugins?.auth) {
    _.usePlugin(_.plugins.auth, {
      key: authKey,
      protected: [],
      autoRedirect: false,
      endpoints: {
        login: "/demo/auth/login",
        refresh: "/demo/auth/refresh",
        logout: "/demo/auth/logout"
      }
    });
  }

  const [getMetaName, setMetaName] = _.signal("Layout");

  ctx.onDispose(() => {
    disposeStoreCount?.();
    stopStoreWatch?.();
    removeHttpBefore?.();
    removeHttpAfter?.();
    removeHttpError?.();
  });

  const runHttpOk = async () => {
    try {
      const out = await _.http.getJSON(makeDataJsonUrl({ hello: "platform", ok: true }), {
        meta: { platformDemo: true },
        retry: { attempts: 0, delay: 0, factor: 1 }
      });
      setHttpPayload(JSON.stringify(out.data));
    } catch (e) {
      setHttpPayload(e?.message || "http error");
    }
  };

  const runHttpForcedError = async () => {
    try {
      await _.http.getJSON(makeDataJsonUrl({ hello: "platform", ok: false }), {
        meta: { platformDemo: true, forceAfterError: true },
        retry: { attempts: 0, delay: 0, factor: 1 }
      });
    } catch (e) {
      setHttpPayload(e?.message || "forced error");
    }
  };

  const openModalOverlay = () => {
    setOverlayOpenHits(getOverlayOpenHits() + 1);
    _.overlay.open(({ close }) => _.Card(
      { title: "Overlay Modal", subtitle: "lockScroll + trapFocus + backdrop" },
      _.p("Questo pannello usa `_.overlay.open(...)` con cleanup globale, focus iniziale e chiusura esplicita."),
      actionRow(
        _.Btn({ size: "sm", color: "primary", onClick: close }, "Chiudi"),
        _.Btn({ size: "sm", outline: true, onClick: () => _.overlay.closeTop() }, "closeTop")
      )
    ), {
      backdrop: true,
      lockScroll: true,
      trapFocus: true,
      onClose: () => setOverlayCloseHits(getOverlayCloseHits() + 1)
    });
  };

  const openAnchoredOverlay = (event) => {
    setOverlayOpenHits(getOverlayOpenHits() + 1);
    _.overlay.open(({ close }) => _.div({ class: "cms-p-md" },
      _.h4("Anchored overlay"),
      _.p("Qui testiamo `anchorEl`, `placement` e cleanup di `resize/scroll`."),
      _.Btn({ size: "sm", onClick: close }, "Chiudi")
    ), {
      anchorEl: event.currentTarget,
      placement: "bottom-end",
      backdrop: false,
      closeOnOutside: true,
      onClose: () => setOverlayCloseHits(getOverlayCloseHits() + 1)
    });
  };

  const simulateAuthLogin = () => {
    _.store.set(authKey, {
      user: {
        id: 7,
        name: "Platform Demo User",
        roles: ["admin"],
        permissions: ["posts.read", "posts.write"]
      },
      accessToken: "demo-access-token",
      refreshToken: "demo-refresh-token",
      expiresAt: Date.now() + 60_000
    });
  };

  const simulateAuthExpire = () => {
    const current = _.store.get(authKey, null) || {};
    _.store.set(authKey, {
      ...current,
      user: current.user || {
        id: 7,
        name: "Platform Demo User",
        roles: ["admin"],
        permissions: ["posts.read", "posts.write"]
      },
      accessToken: current.accessToken || "demo-access-token",
      refreshToken: current.refreshToken || "demo-refresh-token",
      expiresAt: Date.now() - 5_000
    });
  };

  const simulateAuthLogout = () => {
    _.store.remove(authKey);
  };

  return _.div({ class: "cms-panel cms-page" },
    _.h1("CMS Platform"),
    _.p("Pagina di verifica browser per i moduli `store`, `router`, `http`, `overlay`, `auth` e `ui.meta`. Qui concentriamo sonde pratiche sui moduli applicativi del core, senza uscire dall API pubblica `_.…`."),
    _.Card({ title: "Checklist", subtitle: "Controlli manuali rapidi" },
      _.List(
        _.Item("store: valore persistente, watcher e scope custom restano coerenti"),
        _.Item("router: query/hash cambiano e `_.useRoute(ctx)` segue la route attiva"),
        _.Item("http: hooks before/after/error e state pubblica reagiscono a request ok ed errore"),
        _.Item("overlay: open/close/closeTop rimuovono davvero listener e overlay stack"),
        _.Item("auth: stato simulato, permessi e status devtools restano coerenti"),
        _.Item("ui.meta: `_.docTable(...)` rende documentazione anche con fallback più robusto")
      )
    ),
    row(
      _.Card({ title: "Store", subtitle: "Scope custom + watcher + sessionStorage" },
        stack(
          actionRow(
            _.Btn({ size: "sm", outline: true, onClick: () => setStoreCount(getStoreCount() - 1) }, "count -"),
            _.Btn({ size: "sm", onClick: () => setStoreCount(getStoreCount() + 1) }, "count +"),
            _.Btn({ size: "sm", color: "warning", onClick: () => setStoreCount(0) }, "reset")
          ),
          infoLine("_.store.signal()", () => String(getStoreCount())),
          infoLine("watch hits", () => String(getStoreWatchHits())),
          infoLine("raw sessionStorage", () => sessionStorage.getItem("CMSPlatform:__platform_count__") ?? "null"),
          _.p({ class: "cms-muted" }, "Questa sonda usa `storage=session` e `prefix=CMSPlatform:` per testare lo scope del modulo store.")
        )
      ),
      _.Card({ title: "Router", subtitle: "useRouter + useRoute sul route corrente" },
        stack(
          actionRow(
            _.Btn({ size: "sm", onClick: () => router.navigate("/demo/component/cms-platform?probe=router#state") }, "query + hash"),
            _.Btn({ size: "sm", outline: true, onClick: () => router.navigate("/demo/component/cms-platform") }, "clear route")
          ),
          infoLine("path()", () => route.path()),
          infoLine("query()", () => JSON.stringify(route.query())),
          infoLine("hash()", () => route.hash() || "empty"),
          infoLine("isActive()", () => _.router.isActive("/demo/component/cms-platform") ? "true" : "false")
        )
      )
    ),
    row(
      _.Card({ title: "HTTP", subtitle: "Request hooks + state surface pubblica" },
        stack(
          actionRow(
            _.Btn({ size: "sm", onClick: runHttpOk }, "run ok request"),
            _.Btn({ size: "sm", color: "warning", onClick: runHttpForcedError }, "run forced error")
          ),
          infoLine("status()", () => httpState.status()),
          infoLine("isLoading()", () => httpState.isLoading() ? "true" : "false"),
          infoLine("before hits", () => String(getHttpBeforeHits())),
          infoLine("after hits", () => String(getHttpAfterHits())),
          infoLine("error hits", () => String(getHttpErrorHits())),
          infoLine("payload", () => getHttpPayload()),
          infoLine("lastDuration()", () => String(httpState.lastDuration()))
        )
      ),
      _.Card({ title: "Overlay", subtitle: "Open / close / closeTop + cleanup listener" },
        stack(
          actionRow(
            _.Btn({ size: "sm", onClick: openModalOverlay }, "open modal"),
            _.Btn({ size: "sm", outline: true, onClick: openAnchoredOverlay }, "open anchored"),
            _.Btn({ size: "sm", color: "danger", onClick: () => _.overlay.closeTop() }, "closeTop")
          ),
          infoLine("open hits", () => String(getOverlayOpenHits())),
          infoLine("close hits", () => String(getOverlayCloseHits())),
          infoLine("stack size", () => String(_.overlay._stack.size))
        )
      )
    ),
    row(
      _.Card({ title: "Auth", subtitle: "Plugin auth in modalità demo senza route protette" },
        stack(
          actionRow(
            _.Btn({ size: "sm", color: "success", onClick: simulateAuthLogin }, "simulate login"),
            _.Btn({ size: "sm", color: "warning", onClick: simulateAuthExpire }, "expire token"),
            _.Btn({ size: "sm", color: "danger", onClick: simulateAuthLogout }, "simulate logout")
          ),
          infoLine("isAuth()", () => _.auth?.isAuth?.() ? "true" : "false"),
          infoLine("user()", () => JSON.stringify(_.auth?.user?.() || null)),
          infoLine("hasRole('admin')", () => _.auth?.hasRole?.("admin") ? "true" : "false"),
          infoLine("can('posts.write')", () => _.auth?.can?.("posts.write") ? "true" : "false"),
          infoLine("status()", () => _.auth?.status?.() || "auth plugin not available"),
          _.p({ class: "cms-muted" }, "La demo installa il plugin auth solo se non è già presente, con `protected: []` e `autoRedirect: false`.")
        )
      ),
      _.Card({ title: "UI Meta", subtitle: "Registry + docTable viewer" },
        stack(
          actionRow(
            _.Btn({ size: "sm", onClick: () => setMetaName("Layout") }, "Layout"),
            _.Btn({ size: "sm", outline: true, onClick: () => setMetaName("Btn") }, "Btn"),
            _.Btn({ size: "sm", outline: true, onClick: () => setMetaName("Drawer") }, "Drawer")
          ),
          infoLine("meta key", () => getMetaName()),
          _.div(() => {
            const name = getMetaName();
            return _.untracked(() => _.docTable(name));
          })
        )
      )
    )
  );
});

export { cmsPlatform };
