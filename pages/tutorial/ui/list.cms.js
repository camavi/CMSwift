import { getComponentDoc } from "../docs/catalog.js";

const releaseQueue = [
  {
    icon: "rocket_launch",
    title: "Checkout refresh 4.2",
    subtitle: "Canary 20% su Italia e Spagna, monitor error rate per 30 minuti.",
    meta: _.Chip({ color: "info", size: "xs" }, "Rollout"),
    aside: _.Badge({ color: "success", label: "Live" }),
    actions: _.Toolbar({ dense: true, gap: "8px" },
      _.Btn({ size: "xs", outline: true }, "Apri"),
      _.Btn({ size: "xs", color: "primary" }, "Deploy")
    )
  },
  {
    icon: "inventory_2",
    title: "Packaging email di conferma",
    subtitle: "Ultimo controllo copy e fallback mobile prima del merge finale.",
    meta: _.Chip({ color: "warning", size: "xs" }, "Review"),
    aside: _.Badge({ color: "warning", label: "Pending" })
  },
  {
    icon: "payments",
    title: "Sync Stripe webhooks",
    subtitle: "Verifica mapping refund parziali e retry automatico su errori 5xx.",
    meta: _.Chip({ color: "secondary", size: "xs" }, "Backend"),
    aside: _.Badge({ color: "secondary", label: "Ops" })
  }
];

const roadmapItems = [
  {
    title: "Audit funnel attuale",
    subtitle: "Mappa drop-off per step, device e provenienza traffico."
  },
  {
    title: "Ridisegno blocchi chiave",
    subtitle: "Shipping, payment e trust layer con copy più chiaro."
  },
  {
    title: "A/B test con KPI condivisi",
    subtitle: "Monitor conversion rate, AOV e tempo medio per completare l'ordine."
  },
  {
    title: "Rollout progressivo",
    subtitle: "Abilitazione a cluster di paese con rollback rapido."
  }
];

const auditItems = [
  _.Item({
    icon: "design_services",
    title: "Homepage visual QA",
    subtitle: "Confronto con team brand e verifica spacing nei template core.",
    aside: _.Chip({ color: "success", size: "xs" }, "Done")
  }),
  _.Item({
    icon: "rule",
    title: "Validazioni form checkout",
    subtitle: "Controllo regressioni su errori inline e messaggi edge-case.",
    aside: _.Chip({ color: "warning", size: "xs" }, "In corso")
  }),
  _.Item({
    icon: "translate",
    title: "Copy localizzati ES / FR",
    subtitle: "Ultimo pass QA prima della consegna al team CRM.",
    aside: _.Chip({ color: "secondary", size: "xs" }, "Da fare")
  })
];

const customerSegments = [
  {
    name: "New visitors high intent",
    owner: "LR",
    summary: "Traffico paid search con bounce basso e sessione media superiore a 3 minuti.",
    channels: ["Google Ads", "Brand search", "Landing promo"],
    state: "success",
    badge: "Hot"
  },
  {
    name: "Returning buyers dormant",
    owner: "MN",
    summary: "Clienti con ultimo acquisto oltre 120 giorni fa, alto potenziale di reactivation.",
    channels: ["Email", "Push", "Meta retargeting"],
    state: "warning",
    badge: "Watch"
  },
  {
    name: "VIP loyalty members",
    owner: "AR",
    summary: "Cluster premium con ticket medio alto e uso frequente dei benefit esclusivi.",
    channels: ["CRM", "App", "Concierge"],
    state: "info",
    badge: "Priority"
  }
];

const listSample = {
  structured: {
    code: [
      _.List({
        marker: false,
        gap: 14,
        items: releaseQueue
      })
    ],
    sample: [
      "const releaseQueue = [",
      "  {",
      '    icon: "rocket_launch",',
      '    title: "Checkout refresh 4.2",',
      '    subtitle: "Canary 20% su Italia e Spagna, monitor error rate per 30 minuti.",',
      '    meta: _.Chip({ color: "info", size: "xs" }, "Rollout"),',
      '    aside: _.Badge({ color: "success", label: "Live" }),',
      '    actions: _.Toolbar({ dense: true, gap: "8px" },',
      '      _.Btn({ size: "xs", outline: true }, "Apri"),',
      '      _.Btn({ size: "xs", color: "primary" }, "Deploy")',
      "    )",
      "  },",
      "  ...",
      "];",
      "_.List({",
      "  marker: false,",
      "  gap: 14,",
      "  items: releaseQueue",
      "});"
    ]
  },
  ordered: {
    code: [
      _.List({
        number: true,
        marker: "decimal-leading-zero",
        items: roadmapItems
      })
    ],
    sample: [
      "const roadmapItems = [",
      '  { title: "Audit funnel attuale", subtitle: "Mappa drop-off per step, device e provenienza traffico." },',
      '  { title: "Ridisegno blocchi chiave", subtitle: "Shipping, payment e trust layer con copy più chiaro." },',
      "  ...",
      "];",
      "_.List({",
      "  number: true,",
      '  marker: "decimal-leading-zero",',
      "  items: roadmapItems",
      "});"
    ]
  },
  divided: {
    code: [
      _.List({
        marker: false,
        divider: true
      }, ...auditItems)
    ],
    sample: [
      "_.List({ marker: false, divider: true },",
      '  _.Item({',
      '    icon: "design_services",',
      '    title: "Homepage visual QA",',
      '    subtitle: "Confronto con team brand e verifica spacing nei template core.",',
      '    aside: _.Chip({ color: "success", size: "xs" }, "Done")',
      "  }),",
      "  ...",
      ");"
    ]
  },
  slots: {
    code: [
      _.List({
        marker: false,
        items: customerSegments,
        slots: {
          item: ({ item }) => _.Item({
            clickable: true,
            icon: _.Avatar({ label: item.owner, size: "sm" }),
            title: item.name,
            subtitle: item.summary,
            aside: _.Chip({ color: item.state, size: "xs" }, item.badge)
          },
            _.Toolbar({ dense: true, gap: "6px", wrap: true },
              ...item.channels.map((channel) => _.Chip({ size: "xs", outline: true }, channel))
            )
          )
        }
      })
    ],
    sample: [
      "const customerSegments = [",
      '  { name: "New visitors high intent", owner: "LR", channels: ["Google Ads", "Brand search"], state: "success", badge: "Hot" },',
      "  ...",
      "];",
      "_.List({",
      "  marker: false,",
      "  items: customerSegments,",
      "  slots: {",
      "    item: ({ item }) => _.Item({",
      "      clickable: true,",
      '      icon: _.Avatar({ label: item.owner, size: "sm" }),',
      "      title: item.name,",
      "      subtitle: item.summary,",
      '      aside: _.Chip({ color: item.state, size: "xs" }, item.badge)',
      "    },",
      '      _.Toolbar({ dense: true, gap: "6px", wrap: true },',
      "        ...item.channels.map((channel) => _.Chip({ size: \"xs\", outline: true }, channel))",
      "      )",
      "    )",
      "  }",
      "});"
    ]
  },
  empty: {
    code: [
      _.List({
        marker: false,
        items: [],
        empty: _.Item({
          icon: "inbox",
          title: "Nessuna notifica in coda",
          subtitle: "Quando arriveranno nuovi task operativi li vedrai qui.",
          outline: true,
          color: "secondary"
        })
      })
    ],
    sample: [
      "_.List({",
      "  marker: false,",
      "  items: [],",
      "  empty: _.Item({",
      '    icon: "inbox",',
      '    title: "Nessuna notifica in coda",',
      '    subtitle: "Quando arriveranno nuovi task operativi li vedrai qui.",',
      "    outline: true,",
      '    color: "secondary"',
      "  })",
      "});"
    ]
  }
};

const list = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: {
      ...getComponentDoc("List"),
      title: "List + Item",
      summary: "`_.List` e `_.Item` coprono sia l'elenco classico sia liste strutturate per feed, queue operative, checklist e overview con azioni.",
      quickFacts: [
        {
          label: "Best for",
          value: "feed operativi, checklist, code di lavoro, elenchi leggibili con meta e azioni"
        },
        {
          label: "Mental model",
          value: "`List` orchestra la collezione, `Item` definisce la singola riga strutturata."
        },
        {
          label: "Read together",
          value: "Su questa pagina i due componenti vanno letti insieme, non come tutorial separati."
        }
      ],
      essentialProps: [
        {
          name: "List.items / slots.item / empty",
          description: "Usa `List` come collection dichiarativa oppure come wrapper puro di `Item`."
        },
        {
          name: "Item.icon / title / subtitle / meta / aside / actions / body",
          description: "Sono le leve che trasformano una riga semplice in una riga operativa completa."
        },
        {
          name: "Item.clickable / to / active / disabled",
          description: "Per rendere le righe navigabili o interattive senza perdere coerenza."
        }
      ]
    },
    api: () => _.div(
      _.docTable("List"),
      _.div({ style: { marginTop: "16px" } }),
      _.docTable("Item")
    )
  }),
  _.h2("Esempio completo"),
  boxCode("Queue operativa con items object", listSample.structured),
  boxCode("Roadmap ordinata", listSample.ordered),
  boxCode("Lista divisa con Item manuali", listSample.divided),
  boxCode("Slots item per rendering custom", listSample.slots),
  boxCode("Empty state", listSample.empty)
);

export { list };
