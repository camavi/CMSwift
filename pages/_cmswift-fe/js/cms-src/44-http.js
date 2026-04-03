  // ===============================
  // HTTP (fetch wrapper)
  // ===============================
  function createHttpReactiveState() {
    const reactive = CMSwift.reactive;
    const [getInFlight, setInFlight] = reactive.signal(0);
    const [getStatus, setStatus] = reactive.signal("idle");
    const [getLastRequest, setLastRequest] = reactive.signal(null);
    const [getLastResponse, setLastResponse] = reactive.signal(null);
    const [getLastError, setLastError] = reactive.signal(null);
    const [getLastDuration, setLastDuration] = reactive.signal(0);
    const [getLastUpdated, setLastUpdated] = reactive.signal(0);
    let lastStartId = 0;

    function markStart(req) {
      const id = ++lastStartId;
      const ts = Date.now();
      setInFlight(getInFlight() + 1);
      setStatus("pending");
      setLastError(null);
      setLastResponse(null);
      setLastRequest({
        id,
        url: req.url,
        method: req.method,
        meta: req.meta,
        timeout: req.timeout,
        retry: req.retry,
        startedAt: ts
      });
      setLastUpdated(ts);
      return id;
    }

    function markEnd(id, res, err, durationMs) {
      const ts = Date.now();
      setInFlight(Math.max(0, getInFlight() - 1));
      if (id === lastStartId) {
        if (err) {
          setStatus("error");
          setLastError(err);
          setLastResponse(null);
        } else if (res) {
          setStatus("success");
          setLastError(null);
          setLastResponse({
            id,
            status: res.status,
            ok: res.ok,
            headers: res.headers,
            url: res.url,
            receivedAt: ts,
            raw: res
          });
        } else {
          setStatus("idle");
          setLastError(null);
          setLastResponse(null);
        }
        setLastDuration(Math.max(0, Number(durationMs || 0)));
      }
      setLastUpdated(ts);
    }

    const state = {
      inFlight: getInFlight,
      status: getStatus,
      isLoading: CMSwift.store?.computed
        ? CMSwift.store.computed(() => getInFlight() > 0)
        : () => getInFlight() > 0,
      lastRequest: getLastRequest,
      lastResponse: getLastResponse,
      lastError: getLastError,
      lastDuration: getLastDuration,
      lastUpdated: getLastUpdated,
      reset() {
        setInFlight(0);
        setStatus("idle");
        setLastRequest(null);
        setLastResponse(null);
        setLastError(null);
        setLastDuration(0);
        setLastUpdated(Date.now());
      }
    };

    return { state, markStart, markEnd };
  }
  const configHTTP = {
    baseURL: CMSwift_setting?.http?.baseURL || "",
    timeout: CMSwift_setting?.http?.timeout ?? 0, // ms, 0 = no timeout
    retry: CMSwift_setting?.http?.retry || { attempts: 0, delay: 250, factor: 2 }, // attempts extra
    headers: CMSwift_setting?.http?.headers || {},
    credentials: CMSwift_setting?.http?.credentials, // "include" etc (optional)
    debug: CMSwift_setting?.debug ?? false
  };
  const httpState = createHttpReactiveState();
  const now = () => (typeof performance !== "undefined" && performance.now ? performance.now() : Date.now());

  const hooksHTTP = {
    beforeRequest: new Set(),  // (req) => req
    afterResponse: new Set(),  // (res, req) => res
    onError: new Set()         // (err, req) => void
  };

  function joinURL(base, path) {
    if (!base) return path;
    if (/^https?:\/\//i.test(path)) return path;
    const b = base.endsWith("/") ? base.slice(0, -1) : base;
    const p = path.startsWith("/") ? path : "/" + path;
    return b + p;
  }

  function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  function isRetryable(err, res) {
    // retry per network error o 5xx o 429
    if (err) return true;
    if (!res) return false;
    return res.status === 429 || (res.status >= 500 && res.status <= 599);
  }

  function makeAbort(timeoutMs, externalSignal) {
    if (!timeoutMs && !externalSignal) return { signal: undefined, cancel: () => { } };

    const controller = new AbortController();
    const signal = controller.signal;

    let t = null;
    if (timeoutMs > 0) {
      t = setTimeout(() => controller.abort(new Error("timeout")), timeoutMs);
    }

    // bridge external abort
    const onAbort = () => controller.abort(externalSignal.reason || new Error("aborted"));
    if (externalSignal) {
      if (externalSignal.aborted) onAbort();
      else externalSignal.addEventListener("abort", onAbort, { once: true });
    }

    const cancel = () => {
      if (t) clearTimeout(t);
      if (externalSignal) externalSignal.removeEventListener?.("abort", onAbort);
    };

    return { signal, cancel };
  }

  function normalizeRequest(input, init = {}) {
    const url = typeof input === "string" ? joinURL(configHTTP.baseURL, input) : input;
    const method = (init.method || "GET").toUpperCase();

    const headers = new Headers(configHTTP.headers);
    if (init.headers) new Headers(init.headers).forEach((v, k) => headers.set(k, v));

    const req = {
      url,
      method,
      headers,
      body: init.body,
      credentials: init.credentials ?? configHTTP.credentials,
      signal: init.signal,
      timeout: init.timeout ?? configHTTP.timeout,
      retry: init.retry ?? configHTTP.retry,
      meta: init.meta || {}
    };

    return req;
  }

  async function runHooks(set, ...args) {
    let x = args[0];
    for (const fn of set) {
      x = (await fn(x, ...args.slice(1))) ?? x;
    }
    return x;
  }

  async function coreFetch(req) {
    // Auth integration: se esiste auth.fetch usa quello
    const f = (CMSwift.auth && typeof CMSwift.auth.fetch === "function")
      ? CMSwift.auth.fetch.bind(CMSwift.auth)
      : fetch;
    const init = {
      method: req.method,
      headers: req.headers,
      body: req.body,
      credentials: req.credentials,
      signal: req.signal
    };
    return f(req.url, init);
  }

  async function request(input, init = {}) {
    let req = normalizeRequest(input, init);

    // hooksHTTP pre
    req = await runHooks(hooksHTTP.beforeRequest, req);
    const requestId = httpState.markStart(req);
    const startAt = now();

    const retryCfg = req.retry || { attempts: 0, delay: 250, factor: 2 };
    const maxAttempts = Math.max(0, Number(retryCfg.attempts || 0));
    let delay = Math.max(0, Number(retryCfg.delay || 0));
    const factor = Math.max(1, Number(retryCfg.factor || 2));

    let lastErr = null;
    let lastRes = null;
    let finalRes = null;
    let finalErr = null;

    try {
      for (let attempt = 0; attempt <= maxAttempts; attempt++) {
        lastErr = null;
        lastRes = null;

        const { signal, cancel } = makeAbort(req.timeout, init.signal);
        const effectiveReq = { ...req, signal };
        const attemptAt = now();

        try {
          if (configHTTP.debug) console.log("[http.request]", effectiveReq.method, effectiveReq.url);

          CMSwift.perf?.inc("httpRequests");
          CMSwift.perf?.mark("http:req", { url: req.url, method: req.method });


          const res = await coreFetch(effectiveReq);
          lastRes = res;

          // hooksHTTP post
          const outRes = await runHooks(hooksHTTP.afterResponse, res, effectiveReq);
          const dt = now() - attemptAt;

          CMSwift.perf?.tick("http:res", dt, { status: res.status, url: req.url });

          // retryable status?
          if (attempt < maxAttempts && isRetryable(null, outRes)) {
            cancel();
            await sleep(delay);
            delay = Math.round(delay * factor);
            continue;
          }

          cancel();
          finalRes = outRes;
          return wrapResponse(outRes, effectiveReq);

        } catch (err) {
          lastErr = err;
          cancel();

          // hooksHTTP error
          for (const fn of hooksHTTP.onError) {
            try { fn(err, effectiveReq); } catch { }
          }

          // retry?
          if (attempt < maxAttempts && isRetryable(err, null)) {
            await sleep(delay);
            delay = Math.round(delay * factor);
            continue;
          }

          finalErr = err;
          throw err;
        }
      }
    } finally {
      const totalDt = now() - startAt;
      httpState.markEnd(requestId, finalRes, finalErr, totalDt);
    }

    // fallback (non dovrebbe arrivare qui)
    if (lastErr) throw lastErr;
    return wrapResponse(lastRes, req);
  }

  function wrapResponse(res, req) {
    // wrapper comodo: res.jsonStrict(), res.textStrict()
    return {
      ok: res.ok,
      status: res.status,
      headers: res.headers,
      raw: res,
      req,

      async json() {
        // non lancia su !ok, ritorna {data, error}
        let data = null;
        let error = null;
        try { data = await res.json(); } catch { data = null; }
        if (!res.ok) error = data ?? { status: res.status };
        return { data, error, ok: res.ok, status: res.status };
      },

      async jsonStrict() {
        const { data, error } = await this.json();

        if (error) {
          const e = new Error(`HTTP error ${res.status} ${req?.method || ""} ${req?.url || ""}`.trim());
          e.status = res.status;
          e.data = data;
          e.req = {
            url: req?.url,
            method: req?.method,
            meta: req?.meta
          };
          throw e;
        }

        return { data, ok: true, status: res.status };
      },

      async text() {
        let t = "";
        try { t = await res.text(); } catch { }
        return { text: t, ok: res.ok, status: res.status };
      },

      async textStrict() {
        const out = await this.text();
        if (!out.ok) {
          const e = new Error("HTTP error " + res.status);
          e.status = res.status;
          e.text = out.text;
          throw e;
        }
        return out;
      }
    };
  }

  // shortcuts
  function withJSON(method, url, body, init = {}) {
    const headers = new Headers(init.headers || {});
    if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");
    return request(url, {
      ...init,
      method,
      headers,
      body: body == null ? undefined : JSON.stringify(body)
    });
  }

  CMSwift.http = {};
  CMSwift.http.request = request;
  CMSwift.http.state = () => httpState.state;
  CMSwift.http.get = (url, init) => request(url, { ...init, method: "GET" });
  CMSwift.http.del = (url, init) => request(url, { ...init, method: "DELETE" });
  CMSwift.http.post = (url, body, init) => withJSON("POST", url, body, init);
  CMSwift.http.put = (url, body, init) => withJSON("PUT", url, body, init);
  CMSwift.http.patch = (url, body, init) => withJSON("PATCH", url, body, init);

  CMSwift.http.getJSON = async (url, init) => (await request(url, { ...init, method: "GET" })).jsonStrict();
  CMSwift.http.delJSON = async (url, init) => (await request(url, { ...init, method: "DELETE" })).jsonStrict();
  CMSwift.http.postJSON = async (url, body, init) => (await withJSON("POST", url, body, init)).jsonStrict();
  CMSwift.http.putJSON = async (url, body, init) => (await withJSON("PUT", url, body, init)).jsonStrict();
  CMSwift.http.patchJSON = async (url, body, init) => (await withJSON("PATCH", url, body, init)).jsonStrict();

  CMSwift.http.onBefore = function (fn) { hooksHTTP.beforeRequest.add(fn); return () => hooksHTTP.beforeRequest.delete(fn); };
  CMSwift.http.onAfter = function (fn) { hooksHTTP.afterResponse.add(fn); return () => hooksHTTP.afterResponse.delete(fn); };
  CMSwift.http.onError = function (fn) { hooksHTTP.onError.add(fn); return () => hooksHTTP.onError.delete(fn); };

  // shortcuts per browser global
  window._http = CMSwift.http;
  // ===============================
