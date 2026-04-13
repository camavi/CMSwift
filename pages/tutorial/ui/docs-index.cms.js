import { getComponentDoc } from "../docs/catalog.js";

const docGroups = [
  {
    title: "Layout & Structure",
    items: [
      ["Layout", "/demo/component/layout"],
      ["Page", "/demo/component/page"],
      ["Header", "/demo/component/header"],
      ["Footer", "/demo/component/footer"],
      ["Container", "/demo/component/container"],
      ["Parallax", "/demo/component/parallax"],
      ["Row", "/demo/component/row"],
      ["Col", "/demo/component/col"],
      ["Grid", "/demo/component/grid"],
      ["GridCol", "/demo/component/gridcol"],
      ["AppShell", "/demo/component/appshell"],
      ["TabPanel", "/demo/component/tap-panel"]
    ]
  },
  {
    title: "Surface & Feedback",
    items: [
      ["Card", "/demo/component/card"],
      ["cardHeader", "/demo/component/cardheader"],
      ["cardBody", "/demo/component/cardbody"],
      ["cardFooter", "/demo/component/cardfooter"],
      ["Tooltip", "/demo/component/tooltip"],
      ["Banner", "/demo/component/banner"],
      ["Notify", "/demo/component/notify"],
      ["Spinner", "/demo/component/spinner"],
      ["Progress", "/demo/component/progress"],
      ["LoadingBar", "/demo/component/loadingbar"],
      ["Badge", "/demo/component/badge"],
      ["Chip", "/demo/component/chip"],
      ["Avatar", "/demo/component/avatar"]
    ]
  },
  {
    title: "Navigation & Actions",
    items: [
      ["Toolbar", "/demo/component/toolbar"],
      ["Tabs", "/demo/component/tabs"],
      ["RouteTab", "/demo/component/routetab"],
      ["Menu", "/demo/component/menu"],
      ["ContextMenu", "/demo/component/contextmenu"],
      ["Breadcrumbs", "/demo/component/breadcrumbs"],
      ["Drawer", "/demo/component/drawer"],
      ["Btn", "/demo/component/btn"],
      ["Icon", "/demo/component/icon"],
      ["Pagination", "/demo/component/pagination"]
    ]
  },
  {
    title: "Forms & Inputs",
    items: [
      ["Form", "/demo/component/form"],
      ["FormField", "/demo/component/formfield"],
      ["Input", "/demo/component/input"],
      ["InputRaw", "/demo/component/inputraw"],
      ["Select", "/demo/component/select"],
      ["Checkbox", "/demo/component/checkbox"],
      ["Radio", "/demo/component/radio"],
      ["Toggle", "/demo/component/toggle"],
      ["Slider", "/demo/component/slider"],
      ["Rating", "/demo/component/rating"],
      ["Date", "/demo/component/date"],
      ["Time", "/demo/component/time"]
    ]
  },
  {
    title: "Data & Collections",
    items: [
      ["List", "/demo/component/list"],
      ["Item", "/demo/component/item"],
      ["Table", "/demo/component/table"],
      ["Separator", "/demo/component/separator"],
      ["Spacer", "/demo/component/spacer"]
    ]
  },
  {
    title: "Overlays",
    items: [
      ["Dialog", "/demo/component/dialog"],
      ["Popover", "/demo/component/popover"]
    ]
  }
];

const docCard = (name, path) => {
  const doc = getComponentDoc(name);
  return _.Card({
    class: "cms-component-docs-index-card",
    clickable: true,
    onClick: () => CMSwift.router.navigate(path)
  },
    _.div({ class: "cms-component-docs-index-card-head" },
      _.Chip({ dense: true, color: doc?.status === "stable" ? "success" : "warning" }, doc?.status || "stable"),
      _.div({ class: "cms-component-docs-index-card-name" }, `_.${name}`)
    ),
    _.div({ class: "cms-component-docs-index-card-summary" }, doc?.summary || `${name} reference`),
    _.div({ class: "cms-component-docs-index-card-tags" },
      ...(Array.isArray(doc?.tags) ? doc.tags.slice(0, 3).map((tag) => _.Chip({ dense: true, outline: true, size: "xs" }, tag)) : [])
    )
  );
};

const docsIndex = _.div({ class: "cms-panel cms-page cms-component-docs-index" },
  _.div({ class: "cms-component-docs-hero" },
    _.div({ class: "cms-component-docs-hero-copy" },
      _.div({ class: "cms-component-docs-eyebrow" },
        _.Chip({ dense: true, color: "primary" }, "docs"),
        _.span({ class: "cms-component-docs-raw-name" }, "CMSwift UI Human Docs")
      ),
      _.h1({ class: "cms-component-docs-title" }, "Component Docs"),
      _.p({ class: "cms-component-docs-summary" }, "Indice centrale della documentazione umana: overview editoriali, patterns e accesso rapido alla tab Full API per ogni componente principale del kit UI."),
      _.div({ class: "cms-component-docs-tags" },
        _.Chip({ dense: true, outline: true }, "human-first"),
        _.Chip({ dense: true, outline: true }, "full api linked"),
        _.Chip({ dense: true, outline: true }, "tutorial driven")
      )
    ),
    _.div({ class: "cms-component-docs-facts" },
      _.div({ class: "cms-component-docs-fact" },
        _.div({ class: "cms-component-docs-fact-label" }, "Coverage"),
        _.div({ class: "cms-component-docs-fact-value" }, "Tutti i tutorial UI principali hanno ora overview umana + Full API.")
      ),
      _.div({ class: "cms-component-docs-fact" },
        _.div({ class: "cms-component-docs-fact-label" }, "How to read"),
        _.div({ class: "cms-component-docs-fact-value" }, "Parti da questa pagina, entra nel singolo tutorial e apri la Full API solo quando ti serve il dettaglio tecnico.")
      )
    )
  ),
  ...docGroups.map((group) => _.div({ class: "cms-component-docs-panel" },
    _.div({ class: "cms-component-docs-surface-head" },
      _.h2({ class: "cms-component-docs-surface-title" }, group.title),
      _.div({ class: "cms-component-docs-surface-note" }, `${group.items.length} componenti`)
    ),
    _.div({ class: "cms-component-docs-index-grid" },
      ...group.items.map(([name, path]) => docCard(name, path))
    )
  ))
);

export { docsIndex };
