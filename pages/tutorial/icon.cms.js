import { radio } from "./radio.cms";

const render = (options) => _ui.Icon(options);

const renderSample = (options) => `_ui.Icon({${serializeOptions(options)}});`;

const createSection = (entries) => ({
  code: entries.map((options) => render(options)),
  sample: entries.map((options) => renderSample(options))
});

const themeEntries = [
  { label: "Default", color: null, icon: "home" },
  { label: "Success", color: "success", icon: "#bell", radius: "xl" },
  { label: "Warning", color: "warning", icon: "warning", radius: "sm" },
  { label: "Danger", color: "danger", icon: "#heart", radius: 10 },
  { label: "Info", color: "info", icon: "info", radius: "0.7rem" },
  { label: "Primary", color: "primary", icon: "#code" },
  { label: "Secondary", color: "secondary", icon: "palette", radius: "50%" },
  { label: "Dark", color: "dark", icon: "#brand-github" },
  { label: "Light", color: "light", icon: "light_mode", radius: "50%" }
];

const materialShowIcons = [
  "home",
  "verified",
  "warning",
  "error",
  "info",
  "rocket_launch",
  "palette",
  "dark_mode",
  "light_mode"
];

const gradientValues = [true, -90, 90, 1, 25, -25, 270, true, true];

const buildThemeSection = (extraOptions = {}, names = null) => {
  const r = themeEntries.map((theme, index) => ({
    name: names?.[index] || theme.icon,
    size: "xl",
    ...(theme.color ? { color: theme.color } : {}),
    ...(theme.radius ? { radius: theme.radius } : {}),
    ...(typeof extraOptions === "function" ? extraOptions(theme, index) : extraOptions)
  }));
  return createSection(r);
};

const listSample = {
  source: {
    code: [
      _ui.Icon("home"),
      _ui.Icon("search"),
      _ui.Icon("favorite"),
      _ui.Icon("bolt"),
      _ui.Icon("#home"),
      _ui.Icon("#search"),
      _ui.Icon("#bell"),
      _ui.Icon("#heart"),
      _ui.Icon("#brand-github"),
      _ui.Icon("#code")
    ],
    sample: [
      '_ui.Icon("home");',
      '_ui.Icon("search");',
      '_ui.Icon("favorite");',
      '_ui.Icon("bolt");',
      '_ui.Icon("#home");',
      '_ui.Icon("#search");',
      '_ui.Icon("#bell");',
      '_ui.Icon("#heart");',
      '_ui.Icon("#brand-github");',
      '_ui.Icon("#code");',
    ]
  },
  signature: {
    code: [
      _ui.Icon("bolt", { textColor: "#f59e0b", size: "lg" }),
      _ui.Icon("check_circle", { textColor: "#16a34a", size: 24 }),
      _ui.Icon({ name: "#plus", textColor: "#2563eb", size: 22 }),
      _ui.Icon({ name: "#heart", textColor: "#e11d48", size: 26 }),
      _ui.Icon({ name: "settings", textColor: "#475569", size: "xl" })
    ],
    sample: [
      '_ui.Icon("bolt", { textColor: "#f59e0b", size: "lg" });',
      '_ui.Icon("check_circle", { textColor: "#16a34a", size: 24 });',
      '_ui.Icon({ name: "#plus", textColor: "#2563eb", size: 22 });',
      '_ui.Icon({ name: "#heart", textColor: "#e11d48", size: 26 });',
      '_ui.Icon({ name: "settings", textColor: "#475569", size: "xl" });',
    ]
  },
  state: buildThemeSection(),
  size: {
    code: [
      _ui.Icon({ name: "home", size: "xs" }),
      _ui.Icon({ name: "home", size: "sm" }),
      _ui.Icon({ name: "home", size: "md" }),
      _ui.Icon({ name: "home", size: "lg" }),
      _ui.Icon({ name: "home", size: "xl" }),
      _ui.Icon({ name: "#plus", size: 20 }),
      _ui.Icon({ name: "#brand-github", size: "clamp(26px, 4vw, 42px)" })
    ],
    sample: [
      '_ui.Icon({ name: "home", size: "xs" });',
      '_ui.Icon({ name: "home", size: "sm" });',
      '_ui.Icon({ name: "home", size: "md" });',
      '_ui.Icon({ name: "home", size: "lg" });',
      '_ui.Icon({ name: "home", size: "xl" });',
      '_ui.Icon({ name: "#plus", size: 20 });',
      '_ui.Icon({ name: "#brand-github", size: "clamp(26px, 4vw, 42px)" });',
    ]
  },
  shadow: buildThemeSection({ shadow: true }),
  lightShadow: buildThemeSection({ lightShadow: true }),
  clickable: buildThemeSection({ clickable: true }),
  border: buildThemeSection({ border: true }),
  glossy: buildThemeSection({ glossy: true }),
  glossyBorder: buildThemeSection({ border: true, glossy: true }),
  glow: buildThemeSection({ glow: true }),
  glass: buildThemeSection({ glass: true }),
  gradient: buildThemeSection((theme, index) => ({ gradient: gradientValues[index] })),
  outline: buildThemeSection({ outline: true }),
  outlineGlow: buildThemeSection({ glow: true, outline: true }),
  outlineGlossy: buildThemeSection({ glossy: true, outline: true }),
  outlineGlass: buildThemeSection({ outline: true, glass: true }),
  outlineLightShadow: buildThemeSection({ lightShadow: true, outline: true }),
  textGradient: buildThemeSection({ textGradient: true }, materialShowIcons),
  outlineTextGradient: buildThemeSection({ textGradient: true, outline: true }, materialShowIcons),
  color: {
    code: [
      _ui.Icon({ name: "home", textColor: "#b1faf3", color: "#2563eb", size: 24 }),
      _ui.Icon({ name: "favorite", textColor: "#f7c272", color: "#db2777", size: 24 }),
      _ui.Icon({ name: "bolt", textColor: "#e801f9", color: "#f59e0b", size: 24 }),
      _ui.Icon({ name: "check_circle", textColor: "#f8f005", color: "#16a34a", size: 24 }),
      _ui.Icon({ name: "#bell", textColor: "#00c7fe", color: "#7c3aed", size: 24 }),
      _ui.Icon({ name: "#heart", textColor: "#d7e3fb", color: "#e11d48", size: 24 }),
      _ui.Icon({ name: "#brand-codepen", textColor: "#ffffff", color: "#0f766e", size: 24 })
    ],
    sample: [
      '_ui.Icon({ name: "home", textColor: "#b1faf3", color: "#2563eb", size: 24 });',
      '_ui.Icon({ name: "favorite", textColor: "#f7c272", color: "#db2777", size: 24 });',
      '_ui.Icon({ name: "bolt", textColor: "#e801f9", color: "#f59e0b", size: 24 });',
      '_ui.Icon({ name: "check_circle", textColor: "#f8f005", color: "#16a34a", size: 24 });',
      '_ui.Icon({ name: "#bell", textColor: "#00c7fe", color: "#7c3aed", size: 24 });',
      '_ui.Icon({ name: "#heart", textColor: "#d7e3fb", color: "#e11d48", size: 24 });',
      '_ui.Icon({ name: "#brand-codepen", textColor: "#ffffff", color: "#0f766e", size: 24 });',
    ]
  },
  custom: {
    code: [
      _ui.Icon(
        _h.span({
          style: {
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.08em"
          }
        }, "AI")
      ),
      _ui.Icon({
        name: _h.span({
          style: {
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.08em"
          }
        }, "LAB"),
        size: 30,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "30px",
          minHeight: "30px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
          color: "#ffffff"
        }
      }),
      _ui.Icon({
        name: _h.span({
          style: {
            fontSize: "10px",
            fontWeight: "700"
          }
        }, "24"),
        size: 28,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "28px",
          minHeight: "28px",
          borderRadius: "999px",
          border: "1px solid #fed7aa",
          background: "#fff7ed",
          color: "#9a3412"
        }
      }),
      _ui.Icon({
        name: _h.span({
          style: {
            width: "18px",
            height: "18px",
            display: "inline-block",
            borderRadius: "6px",
            background: "linear-gradient(180deg, #fef3c7, #f59e0b)"
          }
        }),
        size: 26,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "26px",
          minHeight: "26px"
        }
      })
    ],
    sample: [
      '_ui.Icon(_h.span({ style: { fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em" } }, "AI"));',
      '_ui.Icon({',
      '  name: _h.span({ style: { fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em" } }, "LAB"),',
      '  size: 30,',
      '  style: { display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "30px", minHeight: "30px", borderRadius: "10px", background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)", color: "#ffffff" }',
      '});',
      '_ui.Icon({',
      '  name: _h.span({ style: { fontSize: "10px", fontWeight: "700" } }, "24"),',
      '  size: 28,',
      '  style: { display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "28px", minHeight: "28px", borderRadius: "999px", border: "1px solid #fed7aa", background: "#fff7ed", color: "#9a3412" }',
      '});',
    ]
  },
  showcase: {
    code: [
      _h.div({ style: { display: "grid", gap: "16px" } },
        _ui.Card({ header: "Toolbar mista" },
          _ui.Toolbar({ wrap: true, gap: "18px" },
            _h.div({ style: { display: "inline-flex", alignItems: "center", gap: "10px" } },
              _ui.Icon({ name: "#brand-github", size: 26, textColor: "#ffffff", color: "#111827" }),
              _h.span("Repository")
            ),
            _h.div({ style: { display: "inline-flex", alignItems: "center", gap: "10px" } },
              _ui.Icon({ name: "notifications", size: 26, textColor: "#ffffff", color: "#ea580c" }),
              _h.span("Alert")
            ),
            _h.div({ style: { display: "inline-flex", alignItems: "center", gap: "10px" } },
              _ui.Icon({ name: "#code", size: 26, textColor: "#ffffff", color: "#0f766e" }),
              _h.span("Code")
            ),
            _h.div({ style: { display: "inline-flex", alignItems: "center", gap: "10px" } },
              _ui.Icon({ name: "favorite", size: 26, textColor: "#ffffff", color: "#db2777" }),
              _h.span("Likes")
            )
          )
        ),
        _ui.Card({ header: "Hero icon mix" },
          _h.div({ style: { display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" } },
            _ui.Icon({ name: "#brand-codepen", size: 42, textColor: "#ffffff", color: "#2563eb" }),
            _ui.Icon({ name: "auto_awesome", size: 40, textColor: "#ffff85", color: "#7c3aed" }),
            _ui.Icon({
              name: _h.span({
                style: {
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.08em"
                }
              }, "AI"),
              size: 40,
              style: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "40px",
                minHeight: "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #14b8a6, #0f766e)",
                color: "#ffffff"
              }
            }),
            _h.div(
              _h.div({ style: { fontWeight: "700" } }, "Material + Tabler + custom"),
              _h.div({ style: { color: "#6b7280" } }, "Un'unica API per sprite SVG, Material Icons e contenuto personalizzato.")
            )
          )
        )
      )
    ],
    sample: [
      '_ui.Toolbar({ wrap: true, gap: "18px" },',
      '  _h.div({ style: { display: "inline-flex", alignItems: "center", gap: "10px" } }, _ui.Icon({ name: "#brand-github", size: 26, color: "#111827" }), _h.span("Repository")),',
      '  _h.div({ style: { display: "inline-flex", alignItems: "center", gap: "10px" } }, _ui.Icon({ name: "notifications", size: 26, color: "#ea580c" }), _h.span("Alert")),',
      '  _h.div({ style: { display: "inline-flex", alignItems: "center", gap: "10px" } }, _ui.Icon({ name: "#app", size: 26, color: "#0f766e" }), _h.span("Apps"))',
      ');',
      '',
      '_ui.Icon({',
      '  name: _h.span({ style: { fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em" } }, "AI"),',
      '  size: 40,',
      '  style: { display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "40px", minHeight: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #14b8a6, #0f766e)", color: "#ffffff" }',
      '});',
    ]
  }
};

const icon = _h.div({ class: "cms-panel cms-page" },
  _h.h1("Icon"),
  _h.p("`_ui.Icon` e il componente base per tutte le micro-grafie dell'interfaccia: puoi renderizzare icone Google Material, sprite SVG Tabler oppure contenuto custom mantenendo la stessa API."),
  _h.p("Per Tabler usa il prefisso `#` nel nome, per esempio `_ui.Icon(\"#home\")` oppure `_ui.Icon({ name: \"#home\" })`. Per Google Material usa il nome diretto, per esempio `_ui.Icon(\"home\")` oppure `_ui.Icon({ name: \"favorite\" })`."),
  _h.h2("Props principali"),
  _ui.List(
    _ui.Item("name: string, Node o Function; se inizia con `#` usa lo sprite Tabler, altrimenti Material Icons"),
    _ui.Item("size: token (`xs-sm-md-lg-xl`), numero in px o qualsiasi misura CSS"),
    _ui.Item("color: supporta sia colori CSS sia stati standard come `success`, `warning`, `danger`, `info`, `primary`, `secondary`, `dark`, `light`"),
    _ui.Item("shadow, lightShadow, clickable, border, glossy, glow, glass, gradient, outline e textGradient per tutte le varianti decorative standard"),
    _ui.Item("style e class: rifinitura del wrapper quando l'icona diventa parte del layout"),
    _ui.Item("contenuto custom: passa un Node o una Function per creare icone testuali, badge numerici o mini-shape")
  ),
  _h.h2("Documentazione API"),
  CMSwift.ui.DocTable("Icon"),
  _h.h2("Tutorial completo"),
  boxCode("Material + Tabler", listSample.source),
  boxCode("String signature + props", listSample.signature),
  boxCode("State color", listSample.state),
  boxCode("Size", listSample.size),
  boxCode("Shadow", listSample.shadow),
  boxCode("Light Shadow", listSample.lightShadow),
  boxCode("Clickable", listSample.clickable),
  boxCode("Border", listSample.border),
  boxCode("Glossy", listSample.glossy),
  boxCode("Glossy border", listSample.glossyBorder),
  boxCode("Glow", listSample.glow),
  boxCode("Glass", listSample.glass),
  boxCode("Gradient", listSample.gradient),
  boxCode("Outline", listSample.outline),
  boxCode("Outline + Glow", listSample.outlineGlow),
  boxCode("Outline + Glossy", listSample.outlineGlossy),
  boxCode("Outline + Glass", listSample.outlineGlass),
  boxCode("Outline + Light Shadow", listSample.outlineLightShadow),
  boxCode("Text Gradient", listSample.textGradient),
  boxCode("Outline + Text Gradient", listSample.outlineTextGradient),
  boxCode("Raw CSS color", listSample.color),
  boxCode("Custom content", listSample.custom),
  boxCode("Showcase mix", listSample.showcase),
);

export { icon };
