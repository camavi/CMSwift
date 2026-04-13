import { getComponentDoc } from "../docs/catalog.js";
const toolbarRow = (...children) => _.div({
  style: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    alignItems: "center"
  }
}, ...children);

const drawerDemo = (props = {}) => _.Drawer({
  style: {
    height: "auto",
    maxHeight: "560px",
    width: "360px"
  },
  ...props
});

const quickFilters = {
  priority: _.rod(true),
  marketplace: _.rod(false),
  sort: _.rod("eta")
};

const basicItems = [
  {
    label: "Dashboard",
    to: "#dashboard",
    icon: "dashboard",
    active: true,
    note: "Panoramica KPI e trend del giorno",
    badge: _.Chip({ color: "success", size: "xs" }, "live")
  },
  {
    label: "Ordini",
    to: "#orders",
    icon: "shopping_bag",
    note: "12 ordini da validare",
    badge: _.Chip({ color: "warning", size: "xs" }, "12")
  },
  { type: "section", label: "Workspace" },
  {
    label: "Catalogo",
    icon: "inventory_2",
    note: "Feed e schede prodotto",
    expanded: true,
    items: [
      { label: "Prodotti", to: "#products", note: "Assortimento e attributi" },
      { label: "Media", to: "#media", note: "Hero, gallery e bundle" },
      { label: "Traduzioni", to: "#translations", note: "EN, FR, DE" }
    ]
  },
  {
    label: "Report",
    to: "#reports",
    icon: "monitoring",
    note: "Export giornalieri e performance",
    aside: _.Chip({ outline: true, size: "xs" }, "Q2")
  },
  { type: "divider" },
  {
    label: "Knowledge base",
    href: "https://support.example.com",
    icon: "open_in_new",
    note: "Link esterno con target automatico"
  }
];

const operationsItems = [
  {
    label: "Queue in ingresso",
    to: "#queue",
    icon: "move_to_inbox",
    note: "148 ticket aperti",
    badge: _.Chip({ color: "warning", size: "xs" }, "148")
  },
  {
    label: "Playbook",
    icon: "auto_fix_high",
    note: "Procedure e automazioni",
    expanded: true,
    items: [
      { label: "Escalation P1", to: "#p1", note: "4 ticket critici" },
      { label: "Ritardi corrieri", to: "#carrier", note: "ETA superiore a 90 min" },
      { label: "Quality gate", to: "#quality", note: "Smoke test staging" }
    ]
  },
  {
    label: "Audit feed",
    to: "#audit",
    icon: "rule",
    note: "36 SKU con warning",
    aside: _.Chip({ color: "danger", size: "xs" }, "36")
  }
];

const mixedItems = [
  { type: "section", label: "Quick actions" },
  {
    label: "Aggiorna feed",
    type: "button",
    icon: "sync",
    keepOpen: true,
    note: "Azione rapida che non chiude il drawer"
  },
  {
    label: "Nuova regola",
    type: "button",
    icon: "add_circle",
    keepOpen: true,
    note: "Shortcut per automazioni"
  },
  _.Card(
    {
      title: "Quick filters",
      subtitle: "Blocco custom inserito direttamente dentro items"
    },
    _.div({ style: { display: "grid", gap: "8px" } },
      _.Checkbox({ model: quickFilters.priority, color: "danger" }, "Solo priorita alte"),
      _.Checkbox({ model: quickFilters.marketplace, color: "info" }, "Marketplace esterni"),
      toolbarRow(
        _.Radio({ model: quickFilters.sort, value: "eta", color: "secondary" }, "Sort ETA"),
        _.Radio({ model: quickFilters.sort, value: "sla", color: "secondary" }, "Sort SLA")
      )
    )
  ),
  { type: "divider" },
  {
    label: "Connettori",
    icon: "hub",
    expanded: true,
    items: [
      { label: "ERP", note: "Sincronizzazione ogni 15 min", aside: _.Chip({ color: "success", size: "xs" }, "ok") },
      { label: "Marketplace", note: "2 code in retry", aside: _.Chip({ color: "warning", size: "xs" }, "2") },
      { label: "Warehouse", note: "Maintenance window", disabled: true, aside: _.Chip({ outline: true, size: "xs" }, "soon") }
    ]
  }
];

const slotsItems = [
  {
    label: "Release board",
    icon: "rocket_launch",
    note: "Stati di rollout per team e regione",
    expanded: true,
    items: [
      { label: "Italia", note: "Deploy progressivo", badge: "12%" },
      { label: "Francia", note: "Smoke test in corso", badge: "QA" },
      { label: "Germania", note: "Attesa contenuti localizzati", badge: "copy" }
    ]
  },
  {
    label: "Creative sync",
    icon: "imagesmode",
    note: "Asset hero e bundle media",
    badge: "24"
  }
];

const listSample = {
  basic: {
    code: [
      drawerDemo({
        items: basicItems
      })
    ],
    sample: [
      '_.Drawer({',
      '  items: [',
      '    { label: "Dashboard", to: "#dashboard", icon: "dashboard", active: true, note: "Panoramica KPI", badge: _.Chip({ color: "success", size: "xs" }, "live") },',
      '    { label: "Ordini", to: "#orders", icon: "shopping_bag", note: "12 ordini da validare" },',
      '    { type: "section", label: "Workspace" },',
      '    { label: "Catalogo", icon: "inventory_2", expanded: true, items: [{ label: "Prodotti" }, { label: "Media" }] },',
      '    { type: "divider" },',
      '    { label: "Knowledge base", href: "https://support.example.com", icon: "open_in_new" }',
      '  ]',
      '});'
    ]
  },
  structured: {
    code: [
      drawerDemo({
        eyebrow: "Operations / EU-West",
        title: "Fulfillment control room",
        subtitle: "Backlog, playbook, audit feed e code corrieri in una sola sidebar.",
        icon: _.Avatar({ label: "OPS", size: "md" }),
        meta: toolbarRow(
          _.Chip({ color: "warning", size: "sm" }, "12 alert"),
          _.Chip({ color: "info", outline: true, size: "sm" }, "SLA 17 min")
        ),
        actions: toolbarRow(
          _.Btn({ size: "sm", outline: true, icon: "download" }, "Export"),
          _.Btn({ size: "sm", icon: "add" }, "Nuova regola")
        ),
        footer: toolbarRow(
          _.Chip({ color: "success", outline: true, size: "sm" }, "Last sync 14:28"),
          _.Btn({ size: "sm", outline: true }, "Apri board")
        ),
        items: operationsItems
      })
    ],
    sample: [
      '_.Drawer({',
      '  eyebrow: "Operations / EU-West",',
      '  title: "Fulfillment control room",',
      '  subtitle: "Backlog, playbook e audit feed in una sola sidebar",',
      '  icon: _.Avatar({ label: "OPS", size: "md" }),',
      '  meta: _.Chip({ color: "warning", size: "sm" }, "12 alert"),',
      '  actions: _.div(_.Btn({ size: "sm", outline: true }, "Export"), _.Btn({ size: "sm" }, "Nuova regola")),',
      '  footer: _.Chip({ color: "success", outline: true, size: "sm" }, "Last sync 14:28"),',
      '  items: operationsItems',
      '});'
    ]
  },
  mixed: {
    code: [
      drawerDemo({
        title: "Workspace utilities",
        subtitle: "Items standard, button item, blocchi custom e gruppi annidati.",
        icon: "tune",
        closeOnSelect: false,
        items: mixedItems
      })
    ],
    sample: [
      '_.Drawer({',
      '  title: "Workspace utilities",',
      '  closeOnSelect: false,',
      '  items: [',
      '    { label: "Aggiorna feed", type: "button", icon: "sync", keepOpen: true },',
      '    _.Card({ title: "Quick filters" }, _.Checkbox(...), _.Radio(...)),',
      '    { label: "Connettori", icon: "hub", expanded: true, items: [{ label: "ERP" }, { label: "Marketplace" }] }',
      '  ]',
      '});'
    ]
  },
  slots: {
    code: [
      drawerDemo({
        title: "Release cockpit",
        subtitle: "Esempio con slot per modellare label, badge e footer.",
        icon: "rocket_launch",
        footer: toolbarRow(
          _.Btn({ size: "sm", outline: true, icon: "history" }, "Cronologia"),
          _.Btn({ size: "sm", icon: "bolt" }, "Esegui rollout")
        ),
        items: slotsItems,
        slots: {
          groupLabel: ({ item, label }) => _.div(
            _.div({ class: "cms-title" }, label),
            _.div({ class: "cms-muted", style: { fontSize: "12px" } }, item.note)
          ),
          itemLabel: ({ label, item }) => toolbarRow(
            _.span(label),
            ...(item.badge ? [_.Chip({ color: "secondary", size: "xs", outline: true }, item.badge)] : [])
          ),
          itemNote: ({ item }) => _.span(item.note),
          after: () => _.Card(
            { title: "Release checklist", subtitle: "Contenuto aggiunto dopo items" },
            _.div({ style: { display: "grid", gap: "6px" } },
              _.Checkbox({ model: _.rod(true), color: "success" }, "Smoke test completati"),
              _.Checkbox({ model: _.rod(false), color: "warning" }, "Localizzazioni validate")
            )
          )
        }
      })
    ],
    sample: [
      '_.Drawer({',
      '  title: "Release cockpit",',
      '  items: slotsItems,',
      '  slots: {',
      '    groupLabel: ({ item, label }) => _.div(_.div(label), _.div(item.note)),',
      '    itemLabel: ({ label, item }) => _.div(label, _.Chip({ size: "xs", outline: true }, item.badge)),',
      '    itemNote: ({ item }) => _.span(item.note),',
      '    after: () => _.Card({ title: "Release checklist" }, _.Checkbox(...))',
      '  }',
      '});'
    ]
  },
  empty: {
    code: [
      drawerDemo({
        title: "Saved views",
        subtitle: "Stato vuoto con CTA e messaggio guidato.",
        icon: "bookmark_manager",
        items: [],
        slots: {
          empty: () => _.Card(
            {
              title: "Nessuna vista salvata",
              subtitle: "Crea una raccolta per riaprire filtri e gruppi con un click."
            },
            toolbarRow(
              _.Chip({ color: "info", outline: true, size: "sm" }, "0 viste"),
              _.Btn({ size: "sm", icon: "add" }, "Crea vista")
            )
          )
        }
      })
    ],
    sample: [
      '_.Drawer({',
      '  title: "Saved views",',
      '  items: [],',
      '  slots: {',
      '    empty: () => _.Card({ title: "Nessuna vista salvata" }, _.Btn({ size: "sm", icon: "add" }, "Crea vista"))',
      '  }',
      '});'
    ]
  }
};

const drawer = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Drawer"),
    api: () => _.docTable("Drawer")
  }),
  _.h2("Esempi completi"),
  boxCode("Basic Navigation", listSample.basic, 24),
  boxCode("Structured Sidebar", listSample.structured, 24),
  boxCode("Mixed Content", listSample.mixed, 24),
  boxCode("Slots Customization", listSample.slots, 24),
  boxCode("Empty State", listSample.empty, 24)
);

export { drawer };
