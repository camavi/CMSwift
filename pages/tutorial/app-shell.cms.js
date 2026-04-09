import { getComponentDoc } from "./docs/catalog.js";
const createSection = (code, sample) => ({
  code: Array.isArray(code) ? code : [code],
  sample: Array.isArray(sample) ? sample : [sample]
});

const row = (...children) => _.Row({
  style: {
    gap: "10px",
    flexWrap: "wrap",
    alignItems: "center"
  }
}, ...children);

const metricCard = (title, value, tone, note) => _.Card({
  title,
  subtitle: note,
  class: "cms-h-100"
},
  _.div({ class: "cms-h2" }, value),
  _.Chip({ color: tone, outline: true, size: "sm" }, tone)
);

const controlStatus = _.rod("Drawer pronto");

const operationsItems = [
  { label: "Overview", to: "#overview", icon: "dashboard" },
  {
    label: "Operations",
    icon: "monitoring",
    expanded: true,
    items: [
      { label: "Deploy queue", to: "#deploy", icon: "rocket_launch" },
      { label: "Order review", to: "#orders", icon: "inventory_2" },
      { label: "Finance check", to: "#finance", icon: "payments" }
    ]
  },
  { label: "Assets", to: "#assets", icon: "perm_media" },
  { label: "External status", href: "https://status.example.com", icon: "public", external: true }
];

const supportItems = [
  { label: "Inbox", to: "#inbox", icon: "inbox" },
  { label: "Escalation", to: "#escalation", icon: "priority_high" },
  {
    label: "Playbook",
    icon: "menu_book",
    expanded: true,
    items: [
      { label: "Checkout issue", to: "#checkout" },
      { label: "Refund flow", to: "#refund" },
      { label: "Marketplace sync", to: "#marketplace" }
    ]
  }
];

const shorthandShell = _.AppShell({
  title: "Commerce control room",
  subtitle: "Header, drawer, page e footer generati da shortcut coerenti",
  drawerWidth: 300,
  drawerHeader: _.div(
    _.div({ style: { fontWeight: "700" } }, "Workspace"),
    _.div({ class: "cms-muted", style: { fontSize: "12px" } }, "Rollout operativo aprile 2026")
  ),
  drawerItems: operationsItems,
  right: row(
    _.Chip({ color: "success", outline: true, size: "sm" }, "8 flow live"),
    _.Btn({ size: "sm", outline: true }, "Apri log"),
    _.Btn({ size: "sm" }, "Nuovo ticket")
  ),
  footerProps: { dense: true, align: "right" },
  footerContent: row(
    _.Chip({ color: "warning", size: "sm" }, "ETA review 12 min"),
    _.Btn({ size: "sm", outline: true }, "Esporta report"),
    _.Btn({ size: "sm" }, "Conferma release")
  )
},
  _.Grid({ cols: 3, gap: 12 },
    _.GridCol(metricCard("Revenue", "€ 128k", "success", "Ultime 24h")),
    _.GridCol(metricCard("Orders", "342", "info", "16 in review")),
    _.GridCol(metricCard("Risk", "2.1%", "warning", "Sotto controllo"))
  ),
  _.Card({
    title: "Coda operativa",
    subtitle: "Esempio reale di contenuto applicativo dentro la page"
  },
    _.List({ marker: false, divider: true },
      _.Item({ title: "Rollback guard", subtitle: "Pronto in 90 secondi", aside: _.Chip({ color: "success", size: "xs" }, "ready") }),
      _.Item({ title: "Sync catalogo", subtitle: "36 asset ancora in ottimizzazione", aside: _.Chip({ color: "warning", size: "xs" }, "pending") }),
      _.Item({ title: "Quality gate", subtitle: "Smoke test completati su staging", aside: _.Chip({ color: "info", size: "xs" }, "pass") })
    )
  )
);

const slotShell = _.AppShell({
  drawerWidth: 320,
  gap: 16,
  padding: 16,
  slots: {
    header: ({ toggleDrawer }) => _.Header({
      title: "Support cockpit",
      subtitle: "Header completamente custom via slot",
      right: row(
        _.Chip({ color: "info", outline: true, size: "sm" }, "SLA 17 min"),
        _.Btn({ size: "sm", outline: true, onClick: toggleDrawer }, "Toggle drawer"),
        _.Btn({ size: "sm" }, "Assegna owner")
      )
    }),
    drawer: () => _.Drawer({
      header: _.Card({
        title: "Filtri rapidi",
        subtitle: "Usa Drawer come regione composabile"
      },
        _.Checkbox({ model: _.rod(true), color: "success" }, "Solo ticket live"),
        _.Checkbox({ model: _.rod(false), color: "warning" }, "Richiedono escalation"),
        _.Radio({ model: _.rod("priority"), value: "priority", color: "secondary" }, "Ordina per priorita"),
        _.Radio({ model: _.rod("priority"), value: "eta", color: "info" }, "Ordina per ETA")
      ),
      items: supportItems
    }),
    page: () => _.Page(
      _.Card({
        title: "Desk operativo",
        subtitle: "Page costruita via slot dedicato"
      },
        _.List({ marker: false, divider: true },
          _.Item({ title: "Ticket #8842", subtitle: "Checkout error • high priority", aside: _.Chip({ color: "danger", size: "xs" }, "P1") }),
          _.Item({ title: "Ticket #8821", subtitle: "Marketplace sync delay", aside: _.Chip({ color: "warning", size: "xs" }, "P2") }),
          _.Item({ title: "Ticket #8774", subtitle: "Refund flow verificato", aside: _.Chip({ color: "success", size: "xs" }, "closed") })
        )
      ),
      _.Card({
        title: "Note handoff",
        subtitle: "Footer e action bar possono vivere fuori dalla page"
      },
        _.p("Questo esempio mostra `slots.header`, `slots.drawer`, `slots.page` e `slots.footer` in un unico componente.")
      )
    ),
    footer: () => _.Footer({ dense: true },
      row(
        _.Chip({ color: "secondary", outline: true, size: "sm" }, "handoff ready"),
        _.Btn({ size: "sm", outline: true }, "Apri cronologia"),
        _.Btn({ size: "sm" }, "Chiudi turno")
      )
    )
  }
});

const focusShell = _.AppShell({
  noDrawer: true,
  headerProps: {
    title: "Executive summary",
    subtitle: "Scenario senza drawer, utile per landing interne o report focus"
  },
  pageProps: { dense: true },
  footerProps: { dense: true, align: "center" },
  footerContent: _.Chip({ color: "secondary", outline: true, size: "sm" }, "Ultimo refresh 09:42")
},
  _.Grid({ cols: 2, gap: 12 },
    _.GridCol(_.Card({
      title: "Runbook QA",
      subtitle: "Controlli finali prima del go-live"
    },
      _.Checkbox({ model: _.rod(true), color: "success" }, "Smoke test completati"),
      _.Checkbox({ model: _.rod(true), color: "success" }, "Backup confermato"),
      _.Checkbox({ model: _.rod(false), color: "warning" }, "Contenuti localizzati da validare")
    )),
    _.GridCol(_.Card({
      title: "Decisione rilascio",
      subtitle: "Scelta rapida del canale"
    },
      _.Radio({ model: _.rod("progressive"), value: "progressive", color: "info" }, "Progressive rollout"),
      _.Radio({ model: _.rod("progressive"), value: "full", color: "success" }, "Full rollout"),
      _.Radio({ model: _.rod("progressive"), value: "hold", color: "warning" }, "Hold release")
    ))
  )
);

let controlShell = null;
const drawerActionButtons = row(
  _.Btn({
    size: "sm",
    outline: true,
    onClick: () => {
      const open = controlShell?.toggleDrawer();
      controlStatus.value = open ? "Drawer aperto" : "Drawer chiuso";
    }
  }, "Toggle drawer"),
  _.Btn({
    size: "sm",
    outline: true,
    onClick: () => {
      controlShell?.openDrawer();
      controlStatus.value = "Drawer aperto";
    }
  }, "Apri"),
  _.Btn({
    size: "sm",
    onClick: () => {
      controlShell?.closeDrawer();
      controlStatus.value = "Drawer chiuso";
    }
  }, "Chiudi"),
  _.Chip({ color: "info", outline: true, size: "sm" }, () => controlStatus.value)
);

controlShell = _.AppShell({
  headerProps: {
    title: "Drawer control API",
    subtitle: "Il componente espone metodi sul nodo ritornato",
    right: drawerActionButtons
  },
  drawerItems: supportItems,
  drawerWidth: 280
},
  _.Card({
    title: "Uso imperativo",
    subtitle: "Comodo quando il toggle non vive nel solo Header"
  },
    _.p("Usa `shell.openDrawer()`, `shell.closeDrawer()`, `shell.toggleDrawer()` e `shell.isDrawerOpen()` per orchestrare il layout.")
  )
);

const listSample = {
  shorthand: createSection(
    shorthandShell,
    [
      '_.AppShell({',
      '  title: "Commerce control room",',
      '  subtitle: "Header, drawer, page e footer generati da shortcut coerenti",',
      '  drawerWidth: 300,',
      '  drawerHeader: _.div(_.div({ style: { fontWeight: "700" } }, "Workspace"), _.div({ class: "cms-muted", style: { fontSize: "12px" } }, "Rollout operativo aprile 2026")),',
      '  drawerItems: operationsItems,',
      '  right: row(_.Chip({ color: "success", outline: true, size: "sm" }, "8 flow live"), _.Btn({ size: "sm", outline: true }, "Apri log"), _.Btn({ size: "sm" }, "Nuovo ticket")),',
      '  footerProps: { dense: true, align: "right" },',
      '  footerContent: row(_.Chip({ color: "warning", size: "sm" }, "ETA review 12 min"), _.Btn({ size: "sm", outline: true }, "Esporta report"), _.Btn({ size: "sm" }, "Conferma release"))',
      '}, ...pageContent);'
    ]
  ),
  slots: createSection(
    slotShell,
    [
      '_.AppShell({',
      '  drawerWidth: 320,',
      '  slots: {',
      '    header: ({ toggleDrawer }) => _.Header({ title: "Support cockpit", right: _.Btn({ onClick: toggleDrawer }, "Toggle drawer") }),',
      '    drawer: () => _.Drawer({ header: _.Card("Filtri rapidi"), items: supportItems }),',
      '    page: () => _.Page(_.Card("Desk operativo")),',
      '    footer: () => _.Footer({ dense: true }, _.Btn("Chiudi turno"))',
      '  }',
      '});'
    ]
  ),
  noDrawer: createSection(
    focusShell,
    [
      '_.AppShell({',
      '  noDrawer: true,',
      '  headerProps: { title: "Executive summary", subtitle: "Scenario senza drawer" },',
      '  pageProps: { dense: true },',
      '  footerProps: { dense: true, align: "center" },',
      '  footerContent: _.Chip({ color: "secondary", outline: true, size: "sm" }, "Ultimo refresh 09:42")',
      '}, ...children);'
    ]
  ),
  methods: createSection(
    controlShell,
    [
      'let shell = _.AppShell({ headerProps: { title: "Drawer control API" }, drawerItems: supportItems }, _.Card("Contenuto"));',
      'shell.toggleDrawer();',
      'shell.openDrawer();',
      'shell.closeDrawer();',
      'shell.isDrawerOpen();'
    ]
  )
};

const appShell = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("AppShell"),
    api: () => _.docTable("AppShell")
  }),
  _.h2("Esempi reali"),
  boxCode("Shorthand Composition", listSample.shorthand, 24),
  boxCode("Slots And Custom Regions", listSample.slots, 24),
  boxCode("No Drawer Focus Layout", listSample.noDrawer, 24),
  boxCode("Imperative Drawer Methods", listSample.methods, 24)
);

export { appShell };
