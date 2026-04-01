const workspaceTab = _.rod("overview");
const workspaceCardTab = _.rod("overview");
const accountTab = _.rod("billing");
const journeyTab = _.rod("plan");
const liveTab = _.rod("summary");
const lastEvent = _.rod("Nessuna interazione");

const liveOrientation = _.rod("horizontal");
const liveNavPosition = _.rod("before");
const liveVariant = _.rod("line");
const liveWrap = _.rod(true);
const liveAnimated = _.rod(true);
const liveSwipeable = _.rod(true);
const liveInfinite = _.rod(false);
const liveFill = _.rod(false);

const liveProjectName = _.rod("Spring commerce rollout");
const liveOwner = _.rod("anna");
const liveDensity = _.rod("comfortable");
const liveProgress = _.rod(72);
const liveAlerts = _.rod(true);

const ownerOptions = [
  { label: "Anna Rossi", value: "anna" },
  { label: "Marco Bianchi", value: "marco" },
  { label: "Sara Neri", value: "sara" }
];

const densityOptions = [
  { label: "Compact", value: "compact" },
  { label: "Comfortable", value: "comfortable" },
  { label: "Expanded", value: "expanded" }
];

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

const infoLine = (label, value) => _.div(
  _.b(`${label}: `),
  _.span(value)
);

const metricCard = (title, value, tone, note) => _.Card({
  title,
  subtitle: note,
  class: "cms-h-100"
},
  _.div({ class: "cms-h2" }, value),
  _.Chip({ color: tone, outline: true, size: "sm" }, tone)
);

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

const buildWorkspaceTabs = () => [
  {
    name: "overview",
    label: "Overview",
    note: "KPI, checklist e stato generale",
    icon: "dashboard",
    badge: _.Chip({ size: "xs", color: "success", outline: true }, "live"),
    content: stack(
      _.Row({ style: { gap: "8px", alignItems: "center", marginBottom: "4px" } },
        _.Icon("rocket_launch"),
        _.span("Panoramica rapida del rollout con KPI e task correnti.")
      ),
      _.Grid({ cols: 12, gap: 12 },
        _.GridCol({ span: 4 }, metricCard("Revenue", "€ 128k", "success", "Ultime 24h")),
        _.GridCol({ span: 4 }, metricCard("Orders", "342", "info", "16 in review")),
        _.GridCol({ span: 4 }, metricCard("Refund risk", "2.1%", "warning", "Soglia sotto controllo"))
      ),
      _.Card({
        title: "Release checklist",
        subtitle: "Azioni prioritarie prima del go-live",
        aside: _.Chip({ color: "secondary", size: "sm" }, "5 step")
      },
        _.List({ marker: false, divider: true },
          _.Item({ title: "Hero mobile", subtitle: "Validare crop su iPhone 13 mini", icon: "smartphone" }),
          _.Item({ title: "Pricing banner", subtitle: "Allineare copy con CRM", icon: "campaign" }),
          _.Item({ title: "Marketplace feed", subtitle: "Confermare ultimo delta export", icon: "sync" })
        )
      )
    )
  },
  {
    name: "content",
    label: "Content",
    note: "Asset, editor e densita preview",
    icon: "edit_square",
    badge: "12",
    content: stack(
      row(
        _.Input({ label: "Hero title", model: liveProjectName, icon: "title" }),
        _.Select({ label: "Owner", model: liveOwner, options: ownerOptions, clearable: true }),
        _.Select({ label: "Density", model: liveDensity, options: densityOptions })
      ),
      _.Slider({
        label: "Completezza contenuti",
        model: liveProgress,
        min: 0,
        max: 100,
        step: 1,
        showValue: true
      }),
      row(
        _.Toggle({ model: liveAlerts }, "Alert feed attivi"),
        _.Chip({ color: "info", outline: true }, () => `Owner: ${ownerOptions.find((item) => item.value === liveOwner.value)?.label || "none"}`),
        _.Chip({ color: "secondary", outline: true }, () => `Density: ${liveDensity.value}`)
      )
    )
  },
  {
    name: "automation",
    label: "Automation",
    note: "Regole e canali in esecuzione",
    icon: "bolt",
    badge: _.Badge({ color: "warning" }, "3"),
    content: _.Grid({ cols: 12, gap: 12 },
      _.GridCol({ span: 6 }, _.Card({
        title: "Trigger attivi",
        subtitle: "Azioni automatiche attualmente schedulate"
      },
        _.Checkbox({ model: _.rod(true), color: "success" }, "Restock alert verso CRM"),
        _.Checkbox({ model: _.rod(true), color: "info" }, "Sync prezzo con marketplace"),
        _.Checkbox({ model: _.rod(false), color: "warning" }, "Push coupon VIP")
      )),
      _.GridCol({ span: 6 }, _.Card({
        title: "Canale prioritario",
        subtitle: "Scelta rapida della prossima azione"
      },
        _.Radio({ model: journeyTab, value: "plan", color: "secondary" }, "Pianificazione"),
        _.Radio({ model: journeyTab, value: "build", color: "info" }, "Produzione"),
        _.Radio({ model: journeyTab, value: "review", color: "warning" }, "Review")
      ))
    )
  }
];

const accountTabs = [
  {
    name: "billing",
    label: "Billing",
    note: "Fatture, metodi e scadenze",
    icon: "credit_card",
    badge: _.Chip({ color: "warning", size: "xs" }, "2 open"),
    content: _.Card({
      title: "Controllo fatturazione",
      subtitle: "Esempio verticale con note e badge"
    },
      row(
        _.Chip({ color: "warning" }, "2 fatture in scadenza"),
        _.Chip({ color: "info", outline: true }, "SEPA attivo")
      ),
      _.List({ marker: false, divider: true },
        _.Item({ title: "Aprile 2026", subtitle: "€ 2.340 • scadenza tra 4 giorni", icon: "receipt_long" }),
        _.Item({ title: "Marzo 2026", subtitle: "Pagata il 28/03/2026", icon: "task_alt" })
      )
    )
  },
  {
    name: "members",
    label: "Members",
    note: "Permessi, owner e accessi",
    icon: "groups",
    badge: "8",
    content: _.Card({
      title: "Team operativo",
      subtitle: "Ruoli e accessi sensibili"
    },
      _.List({ marker: false, divider: true },
        _.Item({ title: "Anna Rossi", subtitle: "Owner • accesso completo", aside: _.Chip({ color: "success", size: "xs" }, "Owner") }),
        _.Item({ title: "Marco Bianchi", subtitle: "Product • pubblicazione contenuti", aside: _.Chip({ color: "info", size: "xs" }, "Editor") }),
        _.Item({ title: "Sara Neri", subtitle: "Support • sola lettura report", aside: _.Chip({ color: "secondary", size: "xs" }, "Viewer") })
      )
    )
  },
  {
    name: "security",
    label: "Security",
    note: "2FA, sessioni e audit log",
    icon: "shield_lock",
    badge: _.Chip({ color: "danger", size: "xs" }, "review"),
    content: _.Card({
      title: "Sicurezza workspace",
      subtitle: "Configurazioni delicate"
    },
      _.Checkbox({ model: _.rod(true), color: "success" }, "2FA obbligatoria"),
      _.Checkbox({ model: _.rod(false), color: "warning" }, "Allow login via shared devices"),
      _.Btn({ color: "danger", outline: true }, "Apri audit log")
    )
  },
  {
    name: "integrations",
    label: "Integrations",
    note: "Webhook, feed e provider esterni",
    icon: "hub",
    disabled: true,
    badge: _.Chip({ color: "secondary", size: "xs", outline: true }, "soon"),
    content: _.Card("Contenuto non disponibile")
  }
];

const journeyTabs = [
  {
    name: "plan",
    label: "Plan",
    note: "Roadmap, scope e owner",
    icon: "fact_check",
    content: _.Card({
      title: "Roadmap sprint",
      subtitle: "Step 1"
    },
      _.p("Definizione scope, dipendenze e milestone."),
      row(
        _.Chip({ color: "secondary" }, "Kickoff"),
        _.Btn({ size: "sm" }, "Apri brief")
      )
    )
  },
  {
    name: "build",
    label: "Build",
    note: "Produzione asset e QA operativo",
    icon: "construction",
    content: _.Card({
      title: "Build in corso",
      subtitle: "Step 2"
    },
      _.p("Produzione contenuti, test integrazioni e check mobile."),
      row(
        _.Chip({ color: "warning" }, "7 task aperti"),
        _.Btn({ size: "sm", outline: true }, "Apri board")
      )
    )
  },
  {
    name: "review",
    label: "Review",
    note: "Stakeholder review e signoff",
    icon: "rate_review",
    content: _.Card({
      title: "Review finale",
      subtitle: "Step 3"
    },
      _.p("Conferma legal, brand e operations prima della release."),
      row(
        _.Chip({ color: "success" }, "Ready"),
        _.Btn({ size: "sm" }, "Richiedi approvazione")
      )
    )
  }
];

const livePreviewTabs = () => [
  {
    name: "summary",
    label: "Summary",
    note: "Overview rapida dello stato",
    icon: "overview",
    badge: _.Chip({ size: "xs", color: "success", outline: true }, "ok"),
    content: _.Card({
      title: liveProjectName.value,
      subtitle: "Preview ricreata in base ai controlli della demo"
    },
      row(
        _.Chip({ color: "secondary", outline: true }, `Owner ${ownerOptions.find((item) => item.value === liveOwner.value)?.label || "n/d"}`),
        _.Chip({ color: "info", outline: true }, `Density ${liveDensity.value}`),
        _.Chip({ color: liveAlerts.value ? "warning" : "success", outline: true }, liveAlerts.value ? "Alert on" : "Alert off")
      ),
      _.Slider({
        label: "Completamento",
        model: liveProgress,
        min: 0,
        max: 100,
        step: 1,
        showValue: true
      })
    )
  },
  {
    name: "ops",
    label: "Ops",
    note: "Azioni rapide e controlli",
    icon: "tune",
    badge: String(Math.max(1, Math.round(liveProgress.value / 20))),
    content: _.Card({
      title: "Azioni operative",
      subtitle: "Controlli che influenzano la preview"
    },
      _.Toggle({ model: liveAlerts }, "Abilita alert automatici"),
      _.Select({ label: "Owner", model: liveOwner, options: ownerOptions }),
      _.Input({ label: "Nome progetto", model: liveProjectName, icon: "edit" })
    )
  },
  {
    name: "report",
    label: "Report",
    note: "Recap workflow e densita",
    icon: "analytics",
    badge: _.Chip({ color: "info", size: "xs" }, liveVariant.value),
    content: _.Card({
      title: "Report sintetico",
      subtitle: "Valori correnti del playground"
    },
      infoLine("Orientation", liveOrientation.value),
      infoLine("Nav position", liveNavPosition.value),
      infoLine("Variant", liveVariant.value),
      infoLine("Wrap", liveWrap.value ? "true" : "false"),
      infoLine("Animated", liveAnimated.value ? "true" : "false"),
      infoLine("Swipeable", liveSwipeable.value ? "true" : "false")
    )
  }
];

const listSample = {
  basic: {
    code: [
      _.div({ class: "cms-m-b-md" },
        _.b("Tab attivo: "),
        _.span(workspaceTab)
      ),
      _.TabPanel({
        tabs: buildWorkspaceTabs(),
        model: workspaceTab,
        orientation: "horizontal",
        animated: true,
        onChange: (name) => {
          lastEvent.value = `Workspace tab: ${name}`;
        }
      })
    ],
    sample: [
      "const workspaceTab = _.rod(\"overview\");",
      "_.TabPanel({",
      "  tabs: buildWorkspaceTabs(),",
      "  model: workspaceTab,",
      "  orientation: \"horizontal\",",
      "  animated: true,",
      "  onChange: (name) => {",
      "    lastEvent.value = `Workspace tab: ${name}`;",
      "  }",
      "});"
    ]
  },
  vertical: {
    code: [
      _.div({ class: "cms-m-b-md" },
        _.b("Ultima azione: "),
        _.span(lastEvent)
      ),
      _.TabPanel({
        tabs: accountTabs,
        model: accountTab,
        orientation: "vertical",
        variant: "pills",
        navFill: true,
        animated: true,
        onChange: (name) => {
          lastEvent.value = `Account tab: ${name}`;
        }
      })
    ],
    sample: [
      "const accountTab = _.rod(\"billing\");",
      "_.TabPanel({",
      "  tabs: accountTabs,",
      "  model: accountTab,",
      "  orientation: \"vertical\",",
      "  variant: \"pills\",",
      "  navFill: true,",
      "  animated: true",
      "});"
    ]
  },
  slots: {
    code: [
      _.TabPanel({
        tabs: journeyTabs,
        model: journeyTab,
        variant: "soft",
        animated: true,
        slots: {
          badge: ({ index, active }) => _.Chip({
            size: "xs",
            color: active ? "primary" : "secondary",
            outline: !active
          }, `0${index + 1}`),
          panel: ({ tab, next, prev }) => _.Card({
            title: tab.label,
            subtitle: tab.note,
            aside: _.Chip({ color: "info", size: "sm", outline: true }, tab.name)
          },
            _.p("Slot panel con layout standardizzato e CTA contestuali."),
            tab.content,
            row(
              _.Btn({ size: "sm", outline: true, onClick: prev }, "Prev"),
              _.Btn({ size: "sm", onClick: next }, "Next")
            )
          )
        }
      })
    ],
    sample: [
      "_.TabPanel({",
      "  tabs: journeyTabs,",
      "  model: journeyTab,",
      "  variant: \"soft\",",
      "  animated: true,",
      "  slots: {",
      "    badge: ({ index, active }) => _.Chip({ size: \"xs\", color: active ? \"primary\" : \"secondary\", outline: !active }, `0${index + 1}`),",
      "    panel: ({ tab, next, prev }) => _.Card({ title: tab.label, subtitle: tab.note }, tab.content, _.Btn({ onClick: prev }, \"Prev\"), _.Btn({ onClick: next }, \"Next\"))",
      "  }",
      "});"
    ]
  },
  playground: {
    code: [
      _.Card({
        title: "Playground controls",
        subtitle: "Configura orientamento, variant e comportamento"
      },
        _.Grid({ cols: 12, gap: 12 },
          _.GridCol({ span: 6 }, _.Card({ title: "Orientation / position" },
            _.Radio({ model: liveOrientation, value: "horizontal", color: "primary" }, "Horizontal"),
            _.Radio({ model: liveOrientation, value: "vertical", color: "secondary" }, "Vertical"),
            _.Radio({ model: liveNavPosition, value: "before", color: "info" }, "Nav before"),
            _.Radio({ model: liveNavPosition, value: "after", color: "warning" }, "Nav after")
          )),
          _.GridCol({ span: 6 }, _.Card({ title: "Style / behavior" },
            _.Select({ label: "Variant", model: liveVariant, options: ["line", "pills", "soft"] }),
            _.Checkbox({ model: liveWrap }, "Wrap"),
            _.Checkbox({ model: liveAnimated }, "Animated"),
            _.Checkbox({ model: liveSwipeable }, "Swipeable"),
            _.Checkbox({ model: liveInfinite }, "Infinite"),
            _.Toggle({ model: liveFill }, "Nav fill")
          ))
        )
      ),
      mountReactiveNode([
        liveTab,
        liveOrientation,
        liveNavPosition,
        liveVariant,
        liveWrap,
        liveAnimated,
        liveSwipeable,
        liveInfinite,
        liveFill,
        liveProjectName,
        liveOwner,
        liveDensity,
        liveProgress,
        liveAlerts
      ], () => _.TabPanel({
        tabs: livePreviewTabs(),
        model: liveTab,
        orientation: liveOrientation.value,
        navPosition: liveNavPosition.value,
        variant: liveVariant.value,
        wrap: liveWrap.value,
        animated: liveAnimated.value,
        swipeable: liveSwipeable.value,
        infinite: liveInfinite.value,
        navFill: liveFill.value,
        onChange: (name) => {
          lastEvent.value = `Preview tab: ${name}`;
        }
      }))
    ],
    sample: [
      "mountReactiveNode([liveTab, liveOrientation, liveNavPosition, liveVariant, liveWrap, liveAnimated, liveSwipeable, liveInfinite, liveFill, liveProjectName, liveOwner, liveDensity, liveProgress, liveAlerts], () => _.TabPanel({",
      "  tabs: livePreviewTabs(),",
      "  model: liveTab,",
      "  orientation: liveOrientation.value,",
      "  navPosition: liveNavPosition.value,",
      "  variant: liveVariant.value,",
      "  wrap: liveWrap.value,",
      "  animated: liveAnimated.value,",
      "  swipeable: liveSwipeable.value,",
      "  infinite: liveInfinite.value,",
      "  navFill: liveFill.value",
      "}));"
    ]
  },
  real: {
    code: [
      _.Card({
        title: "Launch room",
        subtitle: "Uso reale del componente dentro una card operativa",
        aside: _.Chip({ color: "success", size: "sm" }, "Ready for review")
      },
        _.TabPanel({
          tabs: buildWorkspaceTabs(),
          model: workspaceCardTab,
          animated: true,
          navFill: true,
          slots: {
            note: ({ tab }) => _.span(tab.note),
            badge: ({ tab }) => tab.badge,
            panel: ({ tab }) => _.div(
              tab.content,
              _.Separator(),
              row(
                _.Btn({ outline: true, size: "sm" }, "Apri dettaglio"),
                _.Btn({ size: "sm", color: "primary" }, `Continua in ${tab.label}`)
              )
            )
          }
        })
      )
    ],
    sample: [
      "_.Card({ title: \"Launch room\", subtitle: \"Uso reale del componente dentro una card operativa\" },",
      "  _.TabPanel({",
      "    tabs: buildWorkspaceTabs(),",
      "    model: workspaceCardTab,",
      "    animated: true,",
      "    navFill: true,",
      "    slots: {",
      "      note: ({ tab }) => _.span(tab.note),",
      "      badge: ({ tab }) => tab.badge,",
      "      panel: ({ tab }) => _.div(tab.content, _.Separator(), _.Btn(`Continua in ${tab.label}`))",
      "    }",
      "  })",
      ");"
    ]
  }
};

const tapPanel = _.div({ class: "cms-panel cms-page" },
  _.h1("TabPanel"),
  _.p("TabPanel e il contenitore standard per navigazioni a sezioni: supporta model reattivo, slot strutturati, accessibilita tastiera, swipe, animazioni e layout orizzontali o verticali."),
  _.h2("Props principali"),
  _.List(
    _.Item("tabs | items: array di tab con alias `label/title`, `content/panel/body`, `note/subtitle`, `icon`, `badge`, `disabled`, `hidden`"),
    _.Item("model, value, defaultValue: gestione del tab attivo in modalita controllata o iniziale"),
    _.Item("orientation, navPosition, variant, navFill, wrap: controllano struttura e look della navigazione"),
    _.Item("animated, swipeable, infinite, transitionDuration, transitionEasing: definiscono il comportamento"),
    _.Item("slots: nav, tab, label, icon, note, badge, panel, empty, default"),
    _.Item("API sul nodo ritornato: `_getValue()`, `_setValue(value)`, `_select(value)`, `_next()`, `_prev()`")
  ),
  _.h2("Documentazione API"),
  _.docTable("TabPanel"),
  _.h2("Esempi completi"),
  boxCode("Controlled workspace tabs", listSample.basic, 24),
  boxCode("Vertical nav con badge e note", listSample.vertical, 24),
  boxCode("Slots per badge e panel", listSample.slots, 24),
  boxCode("Playground reattivo", listSample.playground, 24),
  boxCode("Card finale con uso reale", listSample.real, 24)
);

export { tapPanel };
