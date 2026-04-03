  CMSwift.overlay = (() => {
    let seq = 0;
    const stack = new Map(); // id -> entry
    let root = null;
    const ensureRoot = () => {
      if (root && root.isConnected) return root;
      let el = document.getElementById("cms-overlay-root");
      if (!el && document?.body) {
        el = document.createElement("div");
        el.id = "cms-overlay-root";
        el.className = "cms-overlay-root";
        document.body.appendChild(el);
      }
      if (!document.body && !el) {
        CMSwift.ready(() => {
          let readyEl = document.getElementById("cms-overlay-root");
          if (!readyEl) {
            readyEl = document.createElement("div");
            readyEl.id = "cms-overlay-root";
            readyEl.className = "cms-overlay-root";
            document.body.appendChild(readyEl);
          }
          root = readyEl;
        });
      }
      root = el;
      return root;
    };

    let scrollLockCount = 0;
    const lockScroll = () => {
      scrollLockCount++;
      if (scrollLockCount === 1) {
        document.documentElement.classList.add("cms-scroll-locked");
      }
    };
    const unlockScroll = () => {
      scrollLockCount = Math.max(0, scrollLockCount - 1);
      if (scrollLockCount === 0) {
        document.documentElement.classList.remove("cms-scroll-locked");
      }
    };

    const getTop = () => {
      let top = null;
      for (const e of stack.values()) top = e; // insertion order
      return top;
    };

    const focusFirst = (container) => {
      const sel = [
        "button:not([disabled])",
        "[href]",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "[tabindex]:not([tabindex='-1'])"
      ].join(",");
      const node = container.querySelector(sel);
      node?.focus?.();
    };

    const trapFocus = (e, container) => {
      if (e.key !== "Tab") return;
      const sel = [
        "button:not([disabled])",
        "[href]",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "[tabindex]:not([tabindex='-1'])"
      ].join(",");
      const nodes = Array.from(container.querySelectorAll(sel)).filter(n => n.offsetParent !== null);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const open = (content, opts = {}) => {
      const id = `ov_${++seq}`;

      const entry = {
        id,
        opts,
        isOpen: true,
        anchorEl: opts.anchorEl || null,
        placement: opts.placement || "bottom-start",
        onClose: typeof opts.onClose === "function" ? opts.onClose : null,
        overlay: null,
        panel: null,
        backdrop: null,
        _positionCleanup: null,
        _cleanup: null
      };

      const overlay = document.createElement("div");
      overlay.className = ["cms-overlay", opts.type ? `type-${opts.type}` : ""].filter(Boolean).join(" ");
      overlay.dataset.id = id;

      const backdrop = document.createElement("div");
      backdrop.className = "cms-overlay-backdrop";
      if (!opts.backdrop) backdrop.style.display = "none";

      const panel = document.createElement("div");
      panel.className = ["cms-overlay-panel", opts.className].filter(Boolean).join(" ");
      panel.tabIndex = -1;

      // mount content
      const node = (typeof content === "function") ? content({ close: () => close(id) }) : content;
      const normalized = CMSwift.ui.slot(node);
      if (Array.isArray(normalized)) normalized.forEach(n => n && panel.appendChild(n));
      else if (normalized) panel.appendChild(normalized);

      overlay.appendChild(backdrop);
      overlay.appendChild(panel);
      const host = ensureRoot();
      if (!host) return { id, close: () => close(id), panel, overlay };
      host.appendChild(overlay);

      // stack bookkeeping
      entry.overlay = overlay;
      entry.panel = panel;
      entry.backdrop = backdrop;
      stack.set(id, entry);

      // scroll lock + focus
      if (opts.lockScroll) lockScroll();
      if (opts.autoFocus !== false) setTimeout(() => focusFirst(panel), 0);

      // positioning (for menus/tooltips)
      const position = () => {
        if (!opts.anchorEl) return;
        const a = opts.anchorEl;
        const r = a.getBoundingClientRect();
        const pr = panel.getBoundingClientRect();

        // naive placement (good enough, you can improve later)
        let top = r.bottom + (opts.offsetY ?? 8);
        let left = r.left + (opts.offsetX ?? 0);

        if (opts.placement?.startsWith("top")) top = r.top - pr.height - (opts.offsetY ?? 8);
        if (opts.placement?.includes("end")) left = r.right - pr.width;

        panel.style.position = "fixed";
        panel.style.top = `${Math.max(8, Math.min(top, window.innerHeight - pr.height - 8))}px`;
        panel.style.left = `${Math.max(8, Math.min(left, window.innerWidth - pr.width - 8))}px`;
      };

      if (opts.anchorEl) {
        position();
        const onResize = () => position();
        window.addEventListener("resize", onResize);
        window.addEventListener("scroll", onResize, true);
        entry._positionCleanup = () => {
          window.removeEventListener("resize", onResize);
          window.removeEventListener("scroll", onResize, true);
        };
      }

      // click outside
      const onDocClick = (e) => {
        const top = getTop();
        if (!top || top.id !== id) return;
        if (opts.closeOnOutside === false) return;
        if (!panel.contains(e.target)) close(id);
      };
      document.addEventListener("mousedown", onDocClick, true);

      // ESC + focus trap
      const onKeyDown = (e) => {
        const top = getTop();
        if (!top || top.id !== id) return;

        if (opts.trapFocus) trapFocus(e, panel);
        if (e.key === "Escape" && opts.closeOnEsc !== false) {
          e.preventDefault();
          close(id);
        }
      };
      document.addEventListener("keydown", onKeyDown, true);

      // backdrop click
      backdrop.addEventListener("click", () => {
        if (opts.closeOnBackdrop === false) return;
        close(id);
      });

      // store cleanup
      entry._cleanup = () => {
        document.removeEventListener("mousedown", onDocClick, true);
        document.removeEventListener("keydown", onKeyDown, true);
        entry._positionCleanup?.();
      };

      // z-index stacking
      const z = 1000 + stack.size * 10;
      overlay.style.zIndex = String(z);

      return {
        id,
        close: () => close(id),
        panel,
        overlay
      };
    };

    const close = (id) => {
      const entry = stack.get(id);
      if (!entry) return;
      stack.delete(id);

      entry._cleanup?.();

      if (entry.opts.lockScroll) unlockScroll();

      entry.overlay?.remove();

      entry.onClose?.();
    };

    const closeTop = () => {
      const top = getTop();
      if (top) close(top.id);
    };

    return { open, close, closeTop, root, _stack: stack };
  })();
