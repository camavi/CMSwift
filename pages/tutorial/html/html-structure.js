const HTML_TUTORIAL_GROUPS = [
  {
    key: "document",
    tags: ["html", "head", "title", "base", "link", "meta", "style"],
  },
  {
    key: "sectioning",
    tags: [
      "body",
      "header",
      "footer",
      "main",
      "section",
      "article",
      "aside",
      "nav",
    ],
  },
  {
    key: "headings",
    tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
  },
  {
    key: "text",
    tags: ["p", "div", "span", "pre", "blockquote", "hr", "br", "address"],
  },
  {
    key: "inline",
    tags: [
      "a",
      "abbr",
      "b",
      "bdi",
      "bdo",
      "cite",
      "code",
      "data",
      "dfn",
      "em",
      "i",
      "kbd",
      "mark",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "small",
      "strong",
      "sub",
      "sup",
      "time",
      "u",
      "var",
      "wbr",
    ],
  },
  {
    key: "lists",
    tags: ["ul", "ol", "li", "dl", "dt", "dd"],
  },
  {
    key: "tables",
    tags: [
      "table",
      "caption",
      "colgroup",
      "col",
      "thead",
      "tbody",
      "tfoot",
      "tr",
      "th",
      "td",
    ],
  },
  {
    key: "forms",
    tags: [
      "form",
      "label",
      "input",
      "textarea",
      "button",
      "select",
      "option",
      "optgroup",
      "fieldset",
      "legend",
      "datalist",
      "output",
      "progress",
      "meter",
    ],
  },
  {
    key: "embedded",
    tags: ["img", "picture", "source", "iframe", "embed", "object", "param"],
  },
  {
    key: "media",
    tags: ["audio", "video", "track"],
  },
  {
    key: "interactive",
    tags: ["details", "summary", "dialog"],
  },
  {
    key: "scripting",
    tags: ["script", "noscript", "canvas", "template", "slot"],
  },
  {
    key: "svg",
    tags: [
      "svg",
      "g",
      "path",
      "circle",
      "ellipse",
      "line",
      "rect",
      "polygon",
      "polyline",
      "text",
      "tspan",
      "defs",
      "linearGradient",
      "radialGradient",
      "stop",
      "use",
      "symbol",
      "clipPath",
      "mask",
      "pattern",
      "filter",
      "feGaussianBlur",
      "feOffset",
      "feBlend",
      "feColorMatrix",
    ],
  },
];

const HTML_VOID_TAGS = new Set([
  "base",
  "link",
  "meta",
  "hr",
  "br",
  "img",
  "source",
  "param",
  "input",
  "track",
  "col",
  "embed",
]);

const HTML_PREVIEW_DISABLED_TAGS = new Set([
  "html",
  "head",
  "title",
  "base",
  "link",
  "meta",
  "style",
  "body",
  "script",
  "noscript",
  "template",
  "slot",
  "embed",
  "object",
  "param",
]);

const GROUP_BY_TAG = new Map();
HTML_TUTORIAL_GROUPS.forEach((group) => {
  group.tags.forEach((tag) => GROUP_BY_TAG.set(tag, group));
});

const DEMO_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180">' +
      '<defs><linearGradient id="g" x1="0%" x2="100%"><stop stop-color="#1648ff"/><stop offset="1" stop-color="#5ad1ff"/></linearGradient></defs>' +
      '<rect width="320" height="180" rx="24" fill="url(#g)"/>' +
      '<circle cx="72" cy="86" r="30" fill="#fff" opacity=".28"/>' +
      '<rect x="118" y="48" width="136" height="16" rx="8" fill="#fff" opacity=".88"/>' +
      '<rect x="118" y="78" width="92" height="12" rx="6" fill="#fff" opacity=".68"/>' +
      '<rect x="118" y="102" width="120" height="12" rx="6" fill="#fff" opacity=".48"/>' +
    "</svg>",
  );

const DEMO_IFRAME_DOC = `<!doctype html>
<html>
  <body style="margin:0;display:grid;place-items:center;height:100vh;font-family:Arial,sans-serif;background:#f3f6fb;color:#1b2a41;">
    <div style="padding:12px 16px;border-radius:14px;background:white;box-shadow:0 8px 30px rgba(19,38,63,.12);">
      iframe preview
    </div>
  </body>
</html>`;

const previewPanel = (...children) =>
  _.div(
    {
      style: {
        display: "grid",
        gap: "10px",
        padding: "14px",
        border: "1px dashed var(--cms-border, rgba(0,0,0,.12))",
        borderRadius: "14px",
        background: "rgba(255,255,255,.66)",
      },
    },
    ...children,
  );

const demoSvg = (...children) =>
  _.svg(
    {
      viewBox: "0 0 180 110",
      width: 240,
      height: 150,
      style: {
        maxWidth: "100%",
        overflow: "visible",
      },
    },
    ...children,
  );

const routeForTag = (tag) => `/demo/html/${tag}`;

function getHtmlTutorialTags() {
  return HTML_TUTORIAL_GROUPS.flatMap((group) =>
    group.tags.map((tag) => ({
      tag,
      group,
      route: routeForTag(tag),
    })),
  );
}

function getHtmlTagNavigation(tag) {
  const tags = getHtmlTutorialTags().map((item) => item.tag);
  const index = tags.indexOf(tag);
  return {
    previous: index > 0 ? tags[index - 1] : null,
    next: index >= 0 && index < tags.length - 1 ? tags[index + 1] : null,
  };
}

function buildSyntaxLines(tag) {
  switch (tag) {
    case "html":
      return ["_.html(_.head(...), _.body(...));"];
    case "head":
      return ["_.head(...metadataNodes);"];
    case "body":
      return ["_.body(...visibleContent);"];
    case "title":
      return ['_.title("Pagina CMSwift");'];
    case "style":
      return ['_.style(".hero { color: var(--cms-primary); }");'];
    case "script":
      return ['_.script("console.log(\\"Hello\\")");'];
    case "svg":
      return ['_.svg({ viewBox: "0 0 120 80" }, ...children);'];
    default:
      break;
  }

  if (HTML_VOID_TAGS.has(tag)) {
    return [`_.${tag}({ /* props */ });`];
  }
  return [`_.${tag}({ /* props opzionali */ }, ...children);`];
}

function buildExampleLines(tag, groupKey) {
  switch (tag) {
    case "html":
      return [
        "_.html(",
        "  _.head(",
        '    _.title("Pagina CMSwift"),',
        '    _.meta({ charset: "utf-8" })',
        "  ),",
        "  _.body(",
        "    _.main(",
        '      _.h1("Ciao CMSwift"),',
        '      _.p("Documento costruito con helper HTML.")',
        "    )",
        "  )",
        ");",
      ];
    case "head":
      return [
        "_.head(",
        '  _.title("Scheda prodotto"),',
        '  _.meta({ name: "description", content: "Pagina demo" }),',
        '  _.link({ rel: "stylesheet", href: "/assets/site.css" })',
        ");",
      ];
    case "title":
      return ['_.title("Dashboard CMSwift");'];
    case "base":
      return ['_.base({ href: "https://example.com/docs/" });'];
    case "link":
      return ['_.link({ rel: "stylesheet", href: "/assets/docs.css" });'];
    case "meta":
      return ['_.meta({ name: "description", content: "Tutorial HTML CMSwift" });'];
    case "style":
      return [
        "_.style(",
        '  ".hero { padding: 16px; border-radius: 12px; background: #eef4ff; }"',
        ");",
      ];
    case "body":
      return [
        "_.body(",
        "  _.header(_.h1(\"Titolo pagina\")),",
        "  _.main(_.p(\"Contenuto principale\")),",
        "  _.footer(_.small(\"Footer\"))",
        ");",
      ];
    case "hr":
      return ["_.hr();"];
    case "br":
      return ['_.div("Riga uno", _.br(), "Riga due");'];
    case "a":
      return ['_.a({ href: "/demo/component/docs" }, "Apri la documentazione");'];
    case "abbr":
      return ['_.abbr({ title: "HyperText Markup Language" }, "HTML");'];
    case "bdo":
      return ['_.bdo({ dir: "rtl" }, "demo");'];
    case "code":
      return ['_.code("const total = 42;");'];
    case "data":
      return ['_.data({ value: "ORD-48291" }, "Ordine #48291");'];
    case "kbd":
      return ['_.kbd("Cmd + K");'];
    case "q":
      return ['_.q("Tieni la struttura semplice e leggibile.");'];
    case "ruby":
      return ['_.ruby("漢", _.rt("kan"));'];
    case "rp":
      return ['_.ruby("漢", _.rp("("), _.rt("kan"), _.rp(")"));'];
    case "rt":
      return ['_.ruby("漢", _.rt("kan"));'];
    case "time":
      return ['_.time({ datetime: "2026-04-13" }, "13 Aprile 2026");'];
    case "wbr":
      return ['_.div("supercalifragilistic", _.wbr(), "expialidocious");'];
    case "ul":
      return [
        "_.ul(",
        '  _.li("Analisi"),',
        '  _.li("Markup"),',
        '  _.li("Review")',
        ");",
      ];
    case "ol":
      return [
        "_.ol(",
        '  _.li("Apri la pagina"),',
        '  _.li("Inserisci il contenuto"),',
        '  _.li("Controlla il risultato")',
        ");",
      ];
    case "li":
      return ["_.ul(", '  _.li("Elemento di lista")', ");"];
    case "dl":
      return [
        "_.dl(",
        '  _.dt("Helper"),',
        '  _.dd("Funzione che crea il tag HTML"),',
        '  _.dt("Preview"),',
        '  _.dd("Render veloce del risultato")',
        ");",
      ];
    case "dt":
    case "dd":
      return [
        "_.dl(",
        '  _.dt("Termine"),',
        '  _.dd("Descrizione del termine")',
        ");",
      ];
    case "table":
      return [
        "_.table(",
        "  _.thead(_.tr(_.th(\"Tag\"), _.th(\"Uso\"))),",
        "  _.tbody(",
        "    _.tr(_.td(\"header\"), _.td(\"Intestazione\")),",
        "    _.tr(_.td(\"main\"), _.td(\"Contenuto\"))",
        "  )",
        ");",
      ];
    case "caption":
      return [
        "_.table(",
        '  _.caption("Stato tutorial HTML"),',
        "  _.tbody(_.tr(_.td(\"html\"), _.td(\"done\")))",
        ");",
      ];
    case "colgroup":
      return [
        "_.table(",
        "  _.colgroup(",
        '    _.col({ style: { width: "40%" } }),',
        '    _.col({ style: { width: "60%" } })',
        "  ),",
        "  _.tbody(_.tr(_.td(\"Tag\"), _.td(\"Descrizione\")))",
        ");",
      ];
    case "col":
      return [
        "_.table(",
        "  _.colgroup(_.col({ style: { width: \"50%\" } })),",
        "  _.tbody(_.tr(_.td(\"Tag\"), _.td(\"Descrizione\")))",
        ");",
      ];
    case "thead":
      return [
        "_.table(",
        "  _.thead(_.tr(_.th(\"Tag\"), _.th(\"Stato\"))),",
        "  _.tbody(_.tr(_.td(\"html\"), _.td(\"done\")))",
        ");",
      ];
    case "tbody":
      return [
        "_.table(",
        "  _.tbody(",
        "    _.tr(_.td(\"body\"), _.td(\"contenuto\"))",
        "  )",
        ");",
      ];
    case "tfoot":
      return [
        "_.table(",
        "  _.tfoot(_.tr(_.td({ colspan: 2 }, \"Totale: 2 tag\")))",
        ");",
      ];
    case "tr":
      return [
        "_.table(",
        "  _.tbody(",
        "    _.tr(_.td(\"section\"), _.td(\"Area di contenuto\"))",
        "  )",
        ");",
      ];
    case "th":
      return [
        "_.table(",
        "  _.thead(_.tr(_.th(\"Tag\"), _.th(\"Uso\")))",
        ");",
      ];
    case "td":
      return [
        "_.table(",
        "  _.tbody(_.tr(_.td(\"main\"), _.td(\"Contenuto principale\")))",
        ");",
      ];
    case "form":
      return [
        "_.form(",
        "  _.label({ for: \"email\" }, \"Email\"),",
        '  _.input({ id: "email", type: "email", placeholder: "name@example.com" }),',
        '  _.button({ type: "submit" }, "Invia")',
        ");",
      ];
    case "label":
      return ['_.label({ for: "email" }, "Email");'];
    case "input":
      return ['_.input({ type: "text", placeholder: "Cerca..." });'];
    case "textarea":
      return ['_.textarea({ rows: 4, placeholder: "Scrivi qui..." });'];
    case "button":
      return ['_.button({ type: "button" }, "Salva");'];
    case "select":
      return [
        "_.select(",
        '  _.option({ value: "it" }, "Italiano"),',
        '  _.option({ value: "en" }, "English")',
        ");",
      ];
    case "option":
      return ["_.select(", '  _.option({ value: "it" }, "Italiano")', ");"];
    case "optgroup":
      return [
        "_.select(",
        '  _.optgroup({ label: "Lingue" },',
        '    _.option({ value: "it" }, "Italiano"),',
        '    _.option({ value: "en" }, "English")',
        "  )",
        ");",
      ];
    case "fieldset":
      return [
        "_.fieldset(",
        '  _.legend("Preferenze"),',
        '  _.label({ for: "news" }, "Newsletter"),',
        '  _.input({ id: "news", type: "checkbox" })',
        ");",
      ];
    case "legend":
      return [
        "_.fieldset(",
        '  _.legend("Accesso rapido"),',
        '  _.input({ type: "text", placeholder: "Nome" })',
        ");",
      ];
    case "datalist":
      return [
        "_.div(",
        '  _.input({ list: "cities", placeholder: "Scegli una citta" }),',
        '  _.datalist({ id: "cities" },',
        '    _.option({ value: "Roma" }),',
        '    _.option({ value: "Milano" })',
        "  )",
        ");",
      ];
    case "output":
      return ['_.output("42");'];
    case "progress":
      return ['_.progress({ max: 100, value: 68 });'];
    case "meter":
      return ['_.meter({ min: 0, max: 100, value: 72 }, "72%");'];
    case "img":
      return ['_.img({ src: DEMO_IMAGE, alt: "Placeholder demo" });'];
    case "picture":
    case "source":
      return [
        "_.picture(",
        '  _.source({ media: "(min-width: 768px)", srcset: DEMO_IMAGE }),',
        '  _.img({ src: DEMO_IMAGE, alt: "Placeholder demo" })',
        ");",
      ];
    case "iframe":
      return [
        "_.iframe(",
        '  { srcdoc: "<p>Preview iframe</p>", title: "Iframe demo" }',
        ");",
      ];
    case "embed":
      return ['_.embed({ src: "/assets/demo.pdf", type: "application/pdf" });'];
    case "object":
      return [
        "_.object(",
        '  { data: "/assets/demo.svg", type: "image/svg+xml" },',
        '  _.p("Fallback se l\'oggetto non viene caricato.")',
        ");",
      ];
    case "param":
      return [
        "_.object({ data: \"/assets/demo.svg\" },",
        '  _.param({ name: "mode", value: "preview" })',
        ");",
      ];
    case "audio":
      return ['_.audio({ controls: true });'];
    case "video":
      return ['_.video({ controls: true, poster: DEMO_IMAGE, width: 240 });'];
    case "track":
      return [
        "_.video({ controls: true },",
        '  _.track({ kind: "captions", srclang: "it", label: "Italiano" })',
        ");",
      ];
    case "details":
      return [
        "_.details(",
        '  _.summary("Apri dettagli"),',
        '  _.p("Contenuto espandibile")',
        ");",
      ];
    case "summary":
      return [
        "_.details(",
        '  _.summary("Dettagli"),',
        '  _.p("Corpo del pannello")',
        ");",
      ];
    case "dialog":
      return [
        "_.dialog({ open: true },",
        '  _.p("Dialogo nativo aperto in preview")',
        ");",
      ];
    case "script":
      return ['_.script("console.log(\\"Hello from CMSwift\\")");'];
    case "noscript":
      return ['_.noscript("Attiva JavaScript per usare questa funzione.");'];
    case "canvas":
      return ['_.canvas({ width: 180, height: 90 });'];
    case "template":
      return [
        "_.template(",
        '  _.div("Contenuto inert finche non viene clonato")',
        ");",
      ];
    case "slot":
      return ['_.slot({ name: "actions" });'];
    case "svg":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        '  _.circle({ cx: 40, cy: 40, r: 24, fill: "#1f6fff" }),',
        '  _.rect({ x: 70, y: 22, width: 26, height: 36, rx: 8, fill: "#5ad1ff" })',
        ");",
      ];
    case "g":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        '  _.g({ fill: "none", stroke: "#1f6fff", "stroke-width": 6 },',
        "    _.circle({ cx: 34, cy: 40, r: 18 }),",
        "    _.line({ x1: 58, y1: 40, x2: 98, y2: 40 })",
        "  )",
        ");",
      ];
    case "path":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        '  _.path({ d: "M10 60 Q 50 10 110 60", fill: "none", stroke: "#1f6fff", "stroke-width": 6 })',
        ");",
      ];
    case "circle":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        '  _.circle({ cx: 60, cy: 40, r: 26, fill: "#1f6fff" })',
        ");",
      ];
    case "ellipse":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        '  _.ellipse({ cx: 60, cy: 40, rx: 36, ry: 22, fill: "#5ad1ff" })',
        ");",
      ];
    case "line":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        '  _.line({ x1: 12, y1: 68, x2: 108, y2: 12, stroke: "#1f6fff", "stroke-width": 6 })',
        ");",
      ];
    case "rect":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        '  _.rect({ x: 16, y: 16, width: 88, height: 48, rx: 12, fill: "#1f6fff" })',
        ");",
      ];
    case "polygon":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        '  _.polygon({ points: "18,62 60,12 102,62", fill: "#1f6fff" })',
        ");",
      ];
    case "polyline":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        '  _.polyline({ points: "12,58 32,38 54,48 76,20 108,36", fill: "none", stroke: "#1f6fff", "stroke-width": 6 })',
        ");",
      ];
    case "text":
      return [
        "_.svg({ viewBox: \"0 0 160 80\" },",
        '  _.text({ x: 20, y: 48, fill: "#1f6fff", "font-size": 28 }, "SVG")',
        ");",
      ];
    case "tspan":
      return [
        "_.svg({ viewBox: \"0 0 180 90\" },",
        '  _.text({ x: 16, y: 48, fill: "#1f6fff", "font-size": 22 },',
        '    "CMS",',
        '    _.tspan({ dx: 8, fill: "#5ad1ff" }, "wift")',
        "  )",
        ");",
      ];
    case "defs":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        "  _.defs(",
        '    _.linearGradient({ id: "grad" },',
        '      _.stop({ offset: "0%", "stop-color": "#1f6fff" }),',
        '      _.stop({ offset: "100%", "stop-color": "#5ad1ff" })',
        "    )",
        "  ),",
        '  _.rect({ x: 10, y: 10, width: 100, height: 60, fill: "url(#grad)" })',
        ");",
      ];
    case "linearGradient":
      return [
        '_.linearGradient({ id: "grad" },',
        '  _.stop({ offset: "0%", "stop-color": "#1f6fff" }),',
        '  _.stop({ offset: "100%", "stop-color": "#5ad1ff" })',
        ");",
      ];
    case "radialGradient":
      return [
        '_.radialGradient({ id: "radial" },',
        '  _.stop({ offset: "0%", "stop-color": "#5ad1ff" }),',
        '  _.stop({ offset: "100%", "stop-color": "#1f2b52" })',
        ");",
      ];
    case "stop":
      return ['_.stop({ offset: "50%", "stop-color": "#1f6fff" });'];
    case "use":
      return [
        "_.svg({ viewBox: \"0 0 120 80\" },",
        '  _.defs(_.symbol({ id: "pill" }, _.rect({ width: 40, height: 20, rx: 10, fill: "#1f6fff" }))),',
        '  _.use({ href: "#pill", x: 16, y: 18 }),',
        '  _.use({ href: "#pill", x: 64, y: 42 })',
        ");",
      ];
    case "symbol":
      return [
        '_.symbol({ id: "icon-badge" },',
        '  _.circle({ cx: 20, cy: 20, r: 20, fill: "#1f6fff" })',
        ");",
      ];
    case "clipPath":
      return [
        '_.clipPath({ id: "clip-round" },',
        '  _.circle({ cx: 60, cy: 40, r: 26 })',
        ");",
      ];
    case "mask":
      return [
        '_.mask({ id: "fade-mask" },',
        '  _.rect({ width: 120, height: 80, fill: "white" }),',
        '  _.circle({ cx: 80, cy: 40, r: 20, fill: "black" })',
        ");",
      ];
    case "pattern":
      return [
        '_.pattern({ id: "grid-pattern", width: 10, height: 10, patternUnits: "userSpaceOnUse" },',
        '  _.path({ d: "M 10 0 L 0 0 0 10", fill: "none", stroke: "#1f6fff", "stroke-width": 1 })',
        ");",
      ];
    case "filter":
      return [
        '_.filter({ id: "soft-shadow" },',
        '  _.feGaussianBlur({ in: "SourceAlpha", stdDeviation: 3 }),',
        '  _.feOffset({ dx: 3, dy: 3 }),',
        '  _.feBlend({ in: "SourceGraphic", mode: "normal" })',
        ");",
      ];
    case "feGaussianBlur":
      return ['_.feGaussianBlur({ in: "SourceAlpha", stdDeviation: 3 });'];
    case "feOffset":
      return ['_.feOffset({ dx: 3, dy: 3 });'];
    case "feBlend":
      return ['_.feBlend({ in: "SourceGraphic", mode: "normal" });'];
    case "feColorMatrix":
      return [
        '_.feColorMatrix({ type: "matrix", values: "1 0 0 0 0  0 0.7 0 0 0  0 0 1 0 0  0 0 0 1 0" });',
      ];
    default:
      break;
  }

  switch (groupKey) {
    case "sectioning":
      return [
        `_.${tag}(`,
        '  _.h3("Titolo sezione"),',
        '  _.p("Contenuto di esempio")',
        ");",
      ];
    case "headings":
      return [`_.${tag}("Titolo di esempio");`];
    case "text":
      if (tag === "span") return ['_.p("Valore: ", _.span("42"));'];
      if (tag === "pre") return ['_.pre("const total = 42;\\nreturn total;");'];
      if (tag === "blockquote")
        return ['_.blockquote("Il markup semplice e piu facile da mantenere.");'];
      if (tag === "address") return ['_.address("Via Roma 42, Milano");'];
      return [`_.${tag}("Contenuto di esempio");`];
    case "inline":
      return [`_.p("Testo con ", _.${tag}("accento"), ".");`];
    default:
      return buildSyntaxLines(tag);
  }
}

function buildPreview(tag, groupKey) {
  if (HTML_PREVIEW_DISABLED_TAGS.has(tag)) return null;

  switch (tag) {
    case "header":
    case "footer":
    case "main":
    case "section":
    case "article":
    case "aside":
    case "nav":
      return previewPanel(
        _[tag](
          {
            style: {
              display: "grid",
              gap: "8px",
            },
          },
          _.h4(`Preview ${tag}`),
          _.p("Contenuto di esempio montato con helper CMSwift."),
        ),
      );
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return previewPanel(_[tag]("Titolo di esempio"));
    case "p":
      return previewPanel(_.p("Questo e un semplice paragrafo di esempio."));
    case "div":
      return previewPanel(
        _.div(
          {
            style: {
              padding: "10px 12px",
              borderRadius: "10px",
              background: "rgba(31, 111, 255, .08)",
            },
          },
          "Contenitore generico con contenuto.",
        ),
      );
    case "span":
      return previewPanel(_.p("Valore inline: ", _.span({ style: { fontWeight: 700 } }, "42")));
    case "pre":
      return previewPanel(
        _.pre(
          {
            style: {
              margin: 0,
              padding: "12px",
              borderRadius: "10px",
              background: "#0f172a",
              color: "#e2e8f0",
              overflowX: "auto",
            },
          },
          "const total = 42;\nreturn total;",
        ),
      );
    case "blockquote":
      return previewPanel(
        _.blockquote(
          {
            style: {
              margin: 0,
              paddingLeft: "12px",
              borderLeft: "4px solid #1f6fff",
            },
          },
          "Il markup semplice rimane il piu facile da mantenere.",
        ),
      );
    case "hr":
      return previewPanel(_.div("Prima", _.hr(), "Dopo"));
    case "br":
      return previewPanel(_.div("Riga uno", _.br(), "Riga due"));
    case "address":
      return previewPanel(_.address("Via Roma 42, Milano"));
    case "a":
      return previewPanel(
        _.a(
          { href: "#", onClick: (event) => event.preventDefault() },
          "Apri collegamento",
        ),
      );
    case "abbr":
      return previewPanel(_.abbr({ title: "HyperText Markup Language" }, "HTML"));
    case "b":
      return previewPanel(_.p("Testo con ", _.b("peso"), " visivo."));
    case "bdi":
      return previewPanel(_.p("Ordine: ", _.bdi("AB-124"), " assegnato."));
    case "bdo":
      return previewPanel(_.bdo({ dir: "rtl" }, "demo"));
    case "cite":
      return previewPanel(_.p("Fonte: ", _.cite("CMSwift manual")));
    case "code":
      return previewPanel(_.p("Snippet: ", _.code("const total = 42;")));
    case "data":
      return previewPanel(_.data({ value: "ORD-48291" }, "Ordine #48291"));
    case "dfn":
      return previewPanel(_.p("`_.html` e un ", _.dfn("helper"), " del renderer."));
    case "em":
      return previewPanel(_.p("Serve un po' di ", _.em("enfasi"), " sul testo."));
    case "i":
      return previewPanel(_.p("Stile ", _.i("inline"), " di supporto."));
    case "kbd":
      return previewPanel(_.kbd("Cmd + K"));
    case "mark":
      return previewPanel(_.p("Tag piu usato: ", _.mark("_.html")));
    case "q":
      return previewPanel(_.q("Mantieni semplice la struttura."));
    case "rp":
    case "rt":
    case "ruby":
      return previewPanel(_.ruby("漢", _.rp("("), _.rt("kan"), _.rp(")")));
    case "s":
      return previewPanel(_.p(_.s("vecchio contenuto"), " nuovo contenuto"));
    case "samp":
      return previewPanel(_.samp("HTTP 200 OK"));
    case "small":
      return previewPanel(_.small("Nota secondaria"));
    case "strong":
      return previewPanel(_.p("Punto ", _.strong("importante"), "."));
    case "sub":
      return previewPanel(_.p("H", _.sub("2"), "O"));
    case "sup":
      return previewPanel(_.p("x", _.sup("2")));
    case "time":
      return previewPanel(_.time({ datetime: "2026-04-13" }, "13 Aprile 2026"));
    case "u":
      return previewPanel(_.p("Testo ", _.u("sottolineato"), "."));
    case "var":
      return previewPanel(_.p("Formula con ", _.var("x"), " e ", _.var("y")));
    case "wbr":
      return previewPanel(_.div("supercalifragilistic", _.wbr(), "expialidocious"));
    case "ul":
      return previewPanel(_.ul(_.li("Analisi"), _.li("Markup"), _.li("Review")));
    case "ol":
      return previewPanel(_.ol(_.li("Apri"), _.li("Scrivi"), _.li("Verifica")));
    case "li":
      return previewPanel(_.ul(_.li("Elemento di lista")));
    case "dl":
      return previewPanel(
        _.dl(
          _.dt("Helper"),
          _.dd("Funzione che crea il tag"),
          _.dt("Preview"),
          _.dd("Render rapido del risultato"),
        ),
      );
    case "dt":
    case "dd":
      return previewPanel(_.dl(_.dt("Termine"), _.dd("Descrizione del termine")));
    case "table":
    case "caption":
    case "colgroup":
    case "col":
    case "thead":
    case "tbody":
    case "tfoot":
    case "tr":
    case "th":
    case "td":
      return previewPanel(
        _.table(
          {
            style: {
              width: "100%",
              borderCollapse: "collapse",
            },
          },
          _.caption("Stato tutorial HTML"),
          _.colgroup(
            _.col({ style: { width: "40%" } }),
            _.col({ style: { width: "60%" } }),
          ),
          _.thead(
            _.tr(
              _.th({ style: { textAlign: "left", borderBottom: "1px solid #d7deeb" } }, "Tag"),
              _.th({ style: { textAlign: "left", borderBottom: "1px solid #d7deeb" } }, "Uso"),
            ),
          ),
          _.tbody(
            _.tr(
              _.td({ style: { padding: "8px 0" } }, "header"),
              _.td({ style: { padding: "8px 0" } }, "Area introduttiva"),
            ),
            _.tr(
              _.td({ style: { padding: "8px 0" } }, "main"),
              _.td({ style: { padding: "8px 0" } }, "Contenuto principale"),
            ),
          ),
          _.tfoot(
            _.tr(
              _.td({ colspan: 2, style: { paddingTop: "10px", fontWeight: 700 } }, "Totale: 2 righe"),
            ),
          ),
        ),
      );
    case "form":
    case "label":
    case "input":
    case "textarea":
    case "button":
    case "select":
    case "option":
    case "optgroup":
    case "fieldset":
    case "legend":
    case "datalist":
    case "output":
    case "progress":
    case "meter":
      return previewPanel(
        _.form(
          {
            style: {
              display: "grid",
              gap: "10px",
            },
            onSubmit: (event) => event.preventDefault(),
          },
          _.label({ for: "html-demo-input" }, "Titolo"),
          _.input({
            id: "html-demo-input",
            type: "text",
            placeholder: "Scrivi qualcosa",
          }),
          _.textarea({ rows: 3, placeholder: "Descrizione breve" }),
          _.select(
            _.optgroup(
              { label: "Lingue" },
              _.option({ value: "it" }, "Italiano"),
              _.option({ value: "en" }, "English"),
            ),
          ),
          _.div(
            {
              style: {
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                alignItems: "center",
              },
            },
            _.progress({ max: 100, value: 68 }),
            _.meter({ min: 0, max: 100, value: 72 }, "72%"),
            _.output("42"),
          ),
          _.div(
            _.input({ list: "cities-demo", placeholder: "Citta" }),
            _.datalist(
              { id: "cities-demo" },
              _.option({ value: "Roma" }),
              _.option({ value: "Milano" }),
            ),
          ),
          _.fieldset(
            _.legend("Preferenze"),
            _.label({ for: "notify-demo" }, "Newsletter"),
            _.input({ id: "notify-demo", type: "checkbox" }),
          ),
          _.button({ type: "submit" }, "Invia"),
        ),
      );
    case "img":
      return previewPanel(
        _.img({
          src: DEMO_IMAGE,
          alt: "Placeholder demo",
          style: {
            width: "100%",
            maxWidth: "280px",
            borderRadius: "16px",
            display: "block",
          },
        }),
      );
    case "picture":
    case "source":
      return previewPanel(
        _.picture(
          _.source({ media: "(min-width: 768px)", srcset: DEMO_IMAGE }),
          _.img({
            src: DEMO_IMAGE,
            alt: "Placeholder demo",
            style: {
              width: "100%",
              maxWidth: "280px",
              borderRadius: "16px",
              display: "block",
            },
          }),
        ),
      );
    case "iframe":
      return previewPanel(
        _.iframe({
          srcdoc: DEMO_IFRAME_DOC,
          title: "Iframe demo",
          style: {
            width: "100%",
            minHeight: "140px",
            border: "1px solid #d7deeb",
            borderRadius: "14px",
            background: "white",
          },
        }),
      );
    case "audio":
      return previewPanel(_.audio({ controls: true }));
    case "video":
      return previewPanel(
        _.video({
          controls: true,
          poster: DEMO_IMAGE,
          width: 260,
          style: {
            maxWidth: "100%",
            borderRadius: "14px",
          },
        }),
      );
    case "track":
      return previewPanel(
        _.video(
          {
            controls: true,
            poster: DEMO_IMAGE,
            width: 260,
            style: {
              maxWidth: "100%",
              borderRadius: "14px",
            },
          },
          _.track({ kind: "captions", srclang: "it", label: "Italiano" }),
        ),
      );
    case "details":
      return previewPanel(
        _.details(
          { open: true },
          _.summary("Apri dettagli"),
          _.p("Contenuto espandibile nativo."),
        ),
      );
    case "summary":
      return previewPanel(
        _.details(
          { open: true },
          _.summary("Dettagli"),
          _.p("Corpo del pannello."),
        ),
      );
    case "dialog":
      return previewPanel(
        _.dialog(
          {
            open: true,
            style: {
              position: "static",
              margin: 0,
              maxWidth: "320px",
              border: "1px solid #d7deeb",
              borderRadius: "14px",
              padding: "16px",
            },
          },
          _.p("Dialogo nativo aperto in preview."),
        ),
      );
    case "canvas":
      return previewPanel(
        _.canvas({
          width: 180,
          height: 90,
          style: {
            border: "1px solid #d7deeb",
            borderRadius: "12px",
            background: "linear-gradient(135deg, rgba(31,111,255,.08), rgba(90,209,255,.16))",
          },
        }),
      );
    case "svg":
      return previewPanel(
        demoSvg(
          _.circle({ cx: 44, cy: 56, r: 24, fill: "#1f6fff" }),
          _.rect({ x: 88, y: 32, width: 46, height: 46, rx: 14, fill: "#5ad1ff" }),
        ),
      );
    case "g":
      return previewPanel(
        demoSvg(
          _.g(
            { fill: "none", stroke: "#1f6fff", "stroke-width": 6 },
            _.circle({ cx: 44, cy: 56, r: 20 }),
            _.line({ x1: 72, y1: 56, x2: 140, y2: 56 }),
          ),
        ),
      );
    case "path":
      return previewPanel(
        demoSvg(
          _.path({
            d: "M12 78 Q 60 14 168 62",
            fill: "none",
            stroke: "#1f6fff",
            "stroke-width": 8,
            "stroke-linecap": "round",
          }),
        ),
      );
    case "circle":
      return previewPanel(demoSvg(_.circle({ cx: 90, cy: 55, r: 28, fill: "#1f6fff" })));
    case "ellipse":
      return previewPanel(demoSvg(_.ellipse({ cx: 90, cy: 55, rx: 44, ry: 28, fill: "#5ad1ff" })));
    case "line":
      return previewPanel(
        demoSvg(
          _.line({
            x1: 18,
            y1: 92,
            x2: 160,
            y2: 18,
            stroke: "#1f6fff",
            "stroke-width": 8,
            "stroke-linecap": "round",
          }),
        ),
      );
    case "rect":
      return previewPanel(demoSvg(_.rect({ x: 28, y: 24, width: 120, height: 62, rx: 18, fill: "#1f6fff" })));
    case "polygon":
      return previewPanel(demoSvg(_.polygon({ points: "22,86 90,18 158,86", fill: "#1f6fff" })));
    case "polyline":
      return previewPanel(
        demoSvg(
          _.polyline({
            points: "18,78 48,52 78,60 110,26 162,44",
            fill: "none",
            stroke: "#1f6fff",
            "stroke-width": 8,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          }),
        ),
      );
    case "text":
      return previewPanel(
        demoSvg(
          _.text(
            {
              x: 24,
              y: 62,
              fill: "#1f6fff",
              "font-size": 34,
              "font-family": "Georgia, serif",
              "font-weight": 700,
            },
            "SVG",
          ),
        ),
      );
    case "tspan":
      return previewPanel(
        demoSvg(
          _.text(
            {
              x: 20,
              y: 62,
              fill: "#1f6fff",
              "font-size": 28,
              "font-family": "Georgia, serif",
            },
            "CMS",
            _.tspan({ dx: 8, fill: "#5ad1ff", "font-weight": 700 }, "wift"),
          ),
        ),
      );
    case "defs":
    case "linearGradient":
    case "radialGradient":
    case "stop":
      return previewPanel(
        demoSvg(
          _.defs(
            _.linearGradient(
              { id: "grad-demo", x1: "0%", x2: "100%" },
              _.stop({ offset: "0%", "stop-color": "#1f6fff" }),
              _.stop({ offset: "100%", "stop-color": "#5ad1ff" }),
            ),
          ),
          _.rect({ x: 20, y: 22, width: 140, height: 66, rx: 18, fill: "url(#grad-demo)" }),
        ),
      );
    case "use":
    case "symbol":
      return previewPanel(
        demoSvg(
          _.defs(
            _.symbol({ id: "badge-demo" }, _.rect({ width: 40, height: 24, rx: 12, fill: "#1f6fff" })),
          ),
          _.use({ href: "#badge-demo", x: 30, y: 28 }),
          _.use({ href: "#badge-demo", x: 90, y: 56 }),
        ),
      );
    case "clipPath":
      return previewPanel(
        demoSvg(
          _.defs(_.clipPath({ id: "clip-demo" }, _.circle({ cx: 90, cy: 55, r: 30 }))),
          _.rect({ x: 20, y: 18, width: 140, height: 74, fill: "#d7ebff", "clip-path": "url(#clip-demo)" }),
          _.path({
            d: "M20 76 L160 30",
            stroke: "#1f6fff",
            "stroke-width": 10,
            "clip-path": "url(#clip-demo)",
          }),
        ),
      );
    case "mask":
      return previewPanel(
        demoSvg(
          _.defs(
            _.mask(
              { id: "mask-demo" },
              _.rect({ width: 180, height: 110, fill: "white" }),
              _.circle({ cx: 110, cy: 55, r: 22, fill: "black" }),
            ),
          ),
          _.rect({ width: 180, height: 110, fill: "#1f6fff", mask: "url(#mask-demo)" }),
        ),
      );
    case "pattern":
      return previewPanel(
        demoSvg(
          _.defs(
            _.pattern(
              { id: "pattern-demo", width: 16, height: 16, patternUnits: "userSpaceOnUse" },
              _.path({
                d: "M 16 0 L 0 0 0 16",
                fill: "none",
                stroke: "#1f6fff",
                "stroke-width": 1.5,
              }),
            ),
          ),
          _.rect({ x: 20, y: 20, width: 140, height: 70, fill: "url(#pattern-demo)" }),
        ),
      );
    case "filter":
    case "feGaussianBlur":
    case "feOffset":
    case "feBlend":
    case "feColorMatrix":
      return previewPanel(
        demoSvg(
          _.defs(
            _.filter(
              { id: "filter-demo" },
              _.feGaussianBlur({ in: "SourceAlpha", stdDeviation: 3 }),
              _.feOffset({ dx: 4, dy: 4 }),
              _.feBlend({ in: "SourceGraphic", mode: "normal" }),
            ),
          ),
          _.circle({ cx: 90, cy: 52, r: 26, fill: "#1f6fff", filter: "url(#filter-demo)" }),
        ),
      );
    default:
      break;
  }

  switch (groupKey) {
    case "headings":
      return previewPanel(_[tag]("Titolo di esempio"));
    case "text":
      return previewPanel(_[tag]("Contenuto di esempio"));
    case "inline":
      return previewPanel(_.p("Testo con ", _[tag]("accento"), "."));
    default:
      return null;
  }
}

function getHtmlTagMeta(tag) {
  const group = GROUP_BY_TAG.get(tag) || GROUP_BY_TAG.get("html");
  return {
    tag,
    helper: `_.${tag}`,
    route: routeForTag(tag),
    group,
    isVoid: HTML_VOID_TAGS.has(tag),
    syntaxLines: buildSyntaxLines(tag),
    exampleLines: buildExampleLines(tag, group.key),
    preview: buildPreview(tag, group.key),
    relatedTags: group.tags.filter((item) => item !== tag).slice(0, 5),
  };
}

export {
  HTML_TUTORIAL_GROUPS,
  getHtmlTagMeta,
  getHtmlTagNavigation,
  getHtmlTutorialTags,
};
