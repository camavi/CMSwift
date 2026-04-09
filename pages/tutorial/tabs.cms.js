import { getComponentDoc } from "./docs/catalog.js";
const workspaceTab = _.rod("overview");
const queueTab = _.rod("priority");
const settingsTab = _.rod("profile");
const previewTab = _.rod("overview");
const lastEvent = _.rod("Nessuna interazione");

const previewOrientation = _.rod("horizontal");
const previewVariant = _.rod("line");
const previewFill = _.rod(false);
const previewWrap = _.rod(true);
const previewDense = _.rod(false);

const row = (...children) => _.Row({
  style: {
    gap: "12px",
    flexWrap: "wrap",
    alignItems: "center"
  }
}, ...children);

const stack = (...children) => _.div({
  style: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }
}, ...children);

const mountReactiveNode = (deps, render) => {
  const host = _.div();
  const appendValue = (value) => {
    if (value == null) return;
    if (Array.isArray(value)) {
      value.forEach(appendValue);
      return;
    }
    if (value?.nodeType) {
      host.appendChild(value);
      return;
    }
    host.appendChild(document.createTextNode(String(value)));
  };
  const paint = () => {
    host.innerHTML = "";
    appendValue(render());
  };
  deps.forEach((dep) => dep?.action?.(() => paint()));
  paint();
  return host;
};

const metricCard = (title, value, tone, note) => _.Card({
  title,
  subtitle: note,
  class: "cms-h-100"
},
  _.div({ class: "cms-h2" }, value),
  _.Chip({ color: tone, outline: true, size: "sm" }, tone)
);

const workspaceTabs = [
  {
    value: "overview",
    label: "Overview",
    note: "KPI, SLA e stato generale",
    icon: "dashboard",
    badge: _.Chip({ size: "xs", color: "success", outline: true }, "live")
  },
  {
    value: "content",
    label: "Content",
    note: "Asset, owner e revisioni",
    icon: "edit_square",
    badge: "12"
  },
  {
    value: "automation",
    label: "Automation",
    note: "Workflow e trigger attivi",
    icon: "bolt",
    badge: _.Badge({ color: "warning" }, "3")
  }
];

const queueTabs = [
  {
    value: "priority",
    label: "Priority queue",
    note: "Escalation da chiudere entro 30 min",
    icon: "priority_high",
    counter: 4
  },
  {
    value: "shipping",
    label: "Shipping",
    note: "Ordini con ETA fuori soglia",
    icon: "local_shipping",
    counter: 7
  },
  {
    value: "billing",
    label: "Billing",
    note: "SEPA, fatture e anomalie pagamento",
    icon: "credit_card",
    counter: 2
  }
];

const settingsTabs = [
  {
    value: "profile",
    label: "Profile",
    note: "Brand e owner del workspace",
    icon: "badge"
  },
  {
    value: "security",
    label: "Security",
    note: "Accessi e policy 2FA",
    icon: "shield_lock",
    badge: _.Chip({ color: "warning", size: "xs" }, "review")
  },
  {
    value: "team",
    label: "Team",
    note: "Ruoli, editor e permessi",
    icon: "groups"
  },
  {
    value: "integrations",
    label: "Integrations",
    note: "Webhook e provider esterni",
    icon: "hub",
    disabled: true,
    badge: _.Chip({ color: "secondary", size: "xs", outline: true }, "soon")
  }
];

const renderWorkspacePanel = (value) => {
  if (value === "content") {
    return stack(
      row(
        _.Chip({ color: "info", outline: true }, "Owner: Anna Rossi"),
        _.Chip({ color: "secondary", outline: true }, "Density: comfortable"),
        _.Chip({ color: "warning", outline: true }, "2 review aperte")
      ),
      _.Grid({ cols: 3, gap: 12 },
        _.GridCol(metricCard("Hero", "92%", "success", "Completamento contenuti")),
        _.GridCol(metricCard("Copy", "14", "info", "Asset in lavorazione")),
        _.GridCol(metricCard("QA notes", "3", "warning", "Feedback aperti"))
      ),
      _.Card({
        title: "Revisioni prioritarie",
        subtitle: "Task reali per il team contenuti"
      },
        _.List({ marker: false, divider: true },
          _.Item({ title: "Hero mobile", subtitle: "Verificare crop iPhone 13 mini", icon: "smartphone" }),
          _.Item({ title: "Promo banner", subtitle: "Allineare copy con CRM", icon: "campaign" }),
          _.Item({ title: "Marketplace feed", subtitle: "Confermare ultimo delta export", icon: "sync" })
        )
      )
    );
  }

  if (value === "automation") {
    return _.Grid({ cols: 2, gap: 12 },
      _.GridCol(_.Card({
        title: "Trigger attivi",
        subtitle: "Automazioni realmente in esecuzione"
      },
        _.Checkbox({ model: _.rod(true), color: "success" }, "Restock alert verso CRM"),
        _.Checkbox({ model: _.rod(true), color: "info" }, "Sync prezzo con marketplace"),
        _.Checkbox({ model: _.rod(false), color: "warning" }, "Push coupon VIP")
      )),
      _.GridCol(_.Card({
        title: "Canale prioritario",
        subtitle: "Scelta rapida della prossima azione"
      },
        _.Radio({ model: _.rod("plan"), value: "plan", color: "secondary" }, "Pianificazione"),
        _.Radio({ model: _.rod("plan"), value: "build", color: "info" }, "Produzione"),
        _.Radio({ model: _.rod("plan"), value: "review", color: "warning" }, "Review")
      ))
    );
  }

  return stack(
    _.Grid({ cols: 3, gap: 12 },
      _.GridCol(metricCard("Revenue", "€ 128k", "success", "Ultime 24h")),
      _.GridCol(metricCard("Orders", "342", "info", "16 in review")),
      _.GridCol(metricCard("Refund risk", "2.1%", "warning", "Soglia sotto controllo"))
    ),
    _.Card({
      title: "Release checklist",
      subtitle: "Azioni prioritarie prima del go-live",
      aside: _.Chip({ color: "secondary", size: "sm" }, "5 step")
    },
      _.List({ marker: false, divider: true },
        _.Item({ title: "Hero mobile", subtitle: "Validare layout responsive", icon: "smartphone" }),
        _.Item({ title: "Pricing banner", subtitle: "Confermare copy con marketing", icon: "sell" }),
        _.Item({ title: "Customer email", subtitle: "Programmare invio rollback-safe", icon: "mail" })
      )
    )
  );
};

const renderQueuePanel = (value) => {
  if (value === "shipping") {
    return _.List({ marker: false, divider: true },
      _.Item({ title: "Ordine #4421", subtitle: "Spedizione Germania oltre SLA", aside: _.Chip({ color: "warning", size: "xs" }, "ETA +18h") }),
      _.Item({ title: "Ordine #4388", subtitle: "Tracking fermo da 7 ore", aside: _.Chip({ color: "danger", size: "xs" }, "urgent") }),
      _.Item({ title: "Ordine #4350", subtitle: "Priorita premium customer", aside: _.Chip({ color: "info", size: "xs" }, "VIP") })
    );
  }
  if (value === "billing") {
    return _.List({ marker: false, divider: true },
      _.Item({ title: "Fattura aprile", subtitle: "SEPA non confermata", aside: _.Chip({ color: "warning", size: "xs" }, "review") }),
      _.Item({ title: "Marketplace DE", subtitle: "Differenza IVA da validare", aside: _.Chip({ color: "secondary", size: "xs" }, "tax") })
    );
  }
  return _.List({ marker: false, divider: true },
    _.Item({ title: "Ticket #8842", subtitle: "Checkout error in alta priorita", aside: _.Chip({ color: "danger", size: "xs" }, "P1") }),
    _.Item({ title: "Ticket #8821", subtitle: "Marketplace sync delay", aside: _.Chip({ color: "warning", size: "xs" }, "P2") }),
    _.Item({ title: "Ticket #8774", subtitle: "Refund flow verificato", aside: _.Chip({ color: "success", size: "xs" }, "closed") })
  );
};

const renderSettingsPanel = (value) => {
  if (value === "security") {
    return _.Card({
      title: "Security controls",
      subtitle: "Configurazioni sensibili del workspace"
    },
      _.Checkbox({ model: _.rod(true), color: "success" }, "2FA obbligatoria"),
      _.Checkbox({ model: _.rod(false), color: "warning" }, "Allow login via shared devices"),
      _.Btn({ color: "danger", outline: true, size: "sm" }, "Apri audit log")
    );
  }
  if (value === "team") {
    return _.Card({
      title: "Team operativo",
      subtitle: "Ruoli e permessi sensibili"
    },
      _.List({ marker: false, divider: true },
        _.Item({ title: "Anna Rossi", subtitle: "Owner • accesso completo", aside: _.Chip({ color: "success", size: "xs" }, "Owner") }),
        _.Item({ title: "Marco Bianchi", subtitle: "Product • pubblicazione contenuti", aside: _.Chip({ color: "info", size: "xs" }, "Editor") }),
        _.Item({ title: "Sara Neri", subtitle: "Support • sola lettura report", aside: _.Chip({ color: "secondary", size: "xs" }, "Viewer") })
      )
    );
  }
  return _.Card({
    title: "Workspace profile",
    subtitle: "Configurazione base del brand"
  },
    row(
      _.Chip({ color: "info", outline: true }, "cmswift.com"),
      _.Chip({ color: "secondary", outline: true }, "owner: Anna Rossi")
    ),
    _.Input({ label: "Workspace name", model: _.rod("CMSwift Commerce") }),
    _.Select({ label: "Default density", model: _.rod("comfortable"), options: ["compact", "comfortable", "expanded"] })
  );
};

const previewTabs = () => [
  {
    value: "overview",
    label: "Overview",
    note: "Metriche giornaliere",
    icon: "monitoring",
    badge: "24"
  },
  {
    value: "ops",
    label: "Ops",
    note: "Queue e review attive",
    icon: "construction",
    badge: _.Chip({ size: "xs", color: "warning", outline: true }, "hot")
  },
  {
    value: "qa",
    label: "QA",
    note: "Smoke test e release gate",
    icon: "verified",
    badge: _.Chip({ size: "xs", color: "success", outline: true }, "ok")
  }
];

const renderPreviewPanel = (value) => _.Card({
  title: value === "ops" ? "Operations focus" : (value === "qa" ? "QA focus" : "Overview focus"),
  subtitle: "Il contenuto rimane esterno a _.Tabs e viene orchestrato dal model."
},
  _.p(
    value === "ops"
      ? "Qui puoi agganciare tabelle, liste o filtri reali alla selezione del tab attivo."
      : (value === "qa"
        ? "Utile per checklist, esiti test e CTA contestuali pilotate da un tab model."
        : "Pattern adatto a header di card, toolbar di pagina e switch rapidi tra sezioni operative.")
  ),
  row(
    _.Btn({ size: "sm", outline: true }, "Apri dettaglio"),
    _.Btn({ size: "sm" }, "Continua")
  )
);

const listSample = {
  basic: {
    code: [
      _.div({ class: "cms-m-b-md" },
        _.b("Ultima azione: "),
        _.span(lastEvent)
      ),
      _.Card({
        title: "Workspace release",
        subtitle: "Tabs come barra di navigazione principale con contenuto orchestrato via model"
      },
        _.Tabs({
          tabs: workspaceTabs,
          model: workspaceTab,
          fill: true,
          color: "primary",
          onChange: (value) => {
            lastEvent.value = `Workspace tab: ${value}`;
          }
        }),
        _.Separator(),
        mountReactiveNode([workspaceTab], () => renderWorkspacePanel(workspaceTab.value))
      )
    ],
    sample: [
      "const workspaceTab = _.rod(\"overview\");",
      "_.Card({ title: \"Workspace release\" },",
      "  _.Tabs({",
      "    tabs: workspaceTabs,",
      "    model: workspaceTab,",
      "    fill: true,",
      "    color: \"primary\",",
      "    onChange: (value) => { lastEvent.value = `Workspace tab: ${value}`; }",
      "  }),",
      "  _.Separator(),",
      "  mountReactiveNode([workspaceTab], () => renderWorkspacePanel(workspaceTab.value))",
      ");"
    ]
  },
  slots: {
    code: [
      _.Card({
        title: "Control room queue",
        subtitle: "Slots custom per badge/label e children usati come area azioni"
      },
        _.Tabs({
          tabs: queueTabs,
          model: queueTab,
          variant: "soft",
          color: "warning",
          slots: {
            badge: ({ tab, active }) => _.Chip({
              size: "xs",
              color: active ? "warning" : "secondary",
              outline: !active
            }, String(tab.counter)),
            label: ({ tab }) => _.span(
              _.b(tab.label),
              _.span({ class: "cms-d-block cms-muted cms-font-size-xs" }, tab.note)
            )
          },
          onChange: (value) => {
            lastEvent.value = `Queue tab: ${value}`;
          }
        },
          _.Btn({ size: "sm", outline: true }, "Esporta"),
          _.Btn({ size: "sm" }, "Nuovo ticket")
        ),
        _.Separator(),
        mountReactiveNode([queueTab], () => renderQueuePanel(queueTab.value))
      )
    ],
    sample: [
      "_.Tabs({",
      "  tabs: queueTabs,",
      "  model: queueTab,",
      "  variant: \"soft\",",
      "  color: \"warning\",",
      "  slots: {",
      "    badge: ({ tab, active }) => _.Chip({ size: \"xs\", color: active ? \"warning\" : \"secondary\", outline: !active }, String(tab.counter)),",
      "    label: ({ tab }) => _.span(_.b(tab.label), _.span({ class: \"cms-d-block cms-muted cms-font-size-xs\" }, tab.note))",
      "  }",
      "}, _.Btn({ size: \"sm\", outline: true }, \"Esporta\"), _.Btn({ size: \"sm\" }, \"Nuovo ticket\"));"
    ]
  },
  vertical: {
    code: [
      _.Grid({ cols: 2, gap: 16 },
        _.GridCol(_.Card({
          title: "Settings nav",
          subtitle: "Variante verticale pills per sidebar operative"
        },
          _.Tabs({
            tabs: settingsTabs,
            model: settingsTab,
            orientation: "vertical",
            variant: "pills",
            fill: true,
            color: "info"
          })
        )),
        _.GridCol(
          mountReactiveNode([settingsTab], () => renderSettingsPanel(settingsTab.value))
        )
      )
    ],
    sample: [
      "_.Tabs({",
      "  tabs: settingsTabs,",
      "  model: settingsTab,",
      "  orientation: \"vertical\",",
      "  variant: \"pills\",",
      "  fill: true,",
      "  color: \"info\"",
      "});"
    ]
  },
  playground: {
    code: [
      _.Card({
        title: "Playground controls",
        subtitle: "Configura orientamento, variant e densita della tab bar"
      },
        _.Grid({ cols: 2, gap: 12 },
          _.GridCol(_.Card({ title: "Layout" },
            _.Radio({ model: previewOrientation, value: "horizontal", color: "primary" }, "Horizontal"),
            _.Radio({ model: previewOrientation, value: "vertical", color: "secondary" }, "Vertical"),
            _.Select({ label: "Variant", model: previewVariant, options: ["line", "pills", "soft"] })
          )),
          _.GridCol(_.Card({ title: "Behavior" },
            _.Checkbox({ model: previewFill, color: "info" }, "Fill"),
            _.Checkbox({ model: previewWrap, color: "secondary" }, "Wrap"),
            _.Checkbox({ model: previewDense, color: "warning" }, "Dense")
          ))
        )
      ),
      mountReactiveNode([
        previewTab,
        previewOrientation,
        previewVariant,
        previewFill,
        previewWrap,
        previewDense
      ], () => _.Card({
        title: "Preview",
        subtitle: "Esempio reattivo del componente in una toolbar reale"
      },
        _.Tabs({
          tabs: previewTabs(),
          model: previewTab,
          orientation: previewOrientation.value,
          variant: previewVariant.value,
          fill: previewFill.value,
          wrap: previewWrap.value,
          dense: previewDense.value,
          color: "success"
        },
          _.Chip({ size: "sm", outline: true, color: "secondary" }, () => `mode: ${previewVariant.value}`),
          _.Btn({ size: "sm", outline: true }, "Apri log"),
          _.Btn({ size: "sm" }, "Nuova azione")
        ),
        _.Separator(),
        renderPreviewPanel(previewTab.value)
      ))
    ],
    sample: [
      "mountReactiveNode([previewTab, previewOrientation, previewVariant, previewFill, previewWrap, previewDense], () => _.Card({ title: \"Preview\" },",
      "  _.Tabs({",
      "    tabs: previewTabs(),",
      "    model: previewTab,",
      "    orientation: previewOrientation.value,",
      "    variant: previewVariant.value,",
      "    fill: previewFill.value,",
      "    wrap: previewWrap.value,",
      "    dense: previewDense.value,",
      "    color: \"success\"",
      "  }),",
      "  _.Separator(),",
      "  renderPreviewPanel(previewTab.value)",
      "));"
    ]
  }
};

const tabs = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Tabs"),
    api: () => _.docTable("Tabs")
  }),
  _.h2("Esempi completi"),
  boxCode("Workspace tabs controllati", listSample.basic, 24),
  boxCode("Slots custom + azioni", listSample.slots, 24),
  boxCode("Sidebar verticale", listSample.vertical, 24),
  boxCode("Playground reattivo", listSample.playground, 24)
);

export { tabs };
