const releaseMetrics = [
  { title: "Ordini a rischio", value: "184", note: "12 ticket sotto SLA", tone: "warning", progress: 72 },
  { title: "Deploy completati", value: "27", note: "Ultima build 08:42", tone: "success", progress: 91 },
  { title: "Asset in revisione", value: "46", note: "Media pack primavera", tone: "info", progress: 58 }
];

const assortmentCards = [
  {
    title: "Sneaker Nova X",
    channel: "Marketplace EU",
    price: "EUR 129",
    tone: "success",
    note: "Sell-out +18% vs settimana scorsa",
    progress: 84,
    tags: ["Top seller", "Ready stock", "ADV attiva"]
  },
  {
    title: "Weekend Duffel",
    channel: "Retail omnichannel",
    price: "EUR 89",
    tone: "warning",
    note: "Restock pianificato per venerdi",
    progress: 46,
    tags: ["Restock", "Bundle", "In vetrina"]
  },
  {
    title: "Trail Jacket",
    channel: "Wholesale B2B",
    price: "EUR 169",
    tone: "info",
    note: "Campagna visual approvata",
    progress: 67,
    tags: ["Lookbook", "B2B", "Dropship"]
  },
  {
    title: "City Pack Pro",
    channel: "Flagship store",
    price: "EUR 149",
    tone: "secondary",
    note: "Nuova hero card in homepage",
    progress: 73,
    tags: ["Cross sell", "Visual hero", "Storefront"]
  }
];

const workloadBoard = [
  {
    title: "Controllo feed fornitori",
    subtitle: "15 SKU con immagini mancanti",
    badge: "Ops",
    tone: "warning",
    span: 12,
    md: 6,
    lg: 4,
    rowSpan: 2,
    progress: 39
  },
  {
    title: "Push prezzi marketplace",
    subtitle: "Amazon, Zalando, Miravia",
    badge: "Sync",
    tone: "success",
    span: 12,
    md: 6,
    lg: 4,
    progress: 88
  },
  {
    title: "Produzione media set",
    subtitle: "Foto, short video e crop ADV",
    badge: "Studio",
    tone: "info",
    span: 12,
    md: 12,
    lg: 4,
    progress: 54
  },
  {
    title: "Quality gate checkout",
    subtitle: "Regression su promo e voucher",
    badge: "QA",
    tone: "danger",
    span: 12,
    md: 6,
    lg: 3,
    progress: 21
  },
  {
    title: "Rollout PDP redesign",
    subtitle: "A/B test attivo sul 30% del traffico",
    badge: "UX",
    tone: "secondary",
    span: 12,
    md: 6,
    lg: 5,
    rowSpan: 2,
    progress: 63
  },
  {
    title: "Flash sales scheduler",
    subtitle: "6 campagne in coda",
    badge: "CRM",
    tone: "primary",
    span: 12,
    md: 6,
    lg: 4,
    progress: 76
  }
];

const metricCard = (item) => _.Card({
  title: item.title,
  subtitle: item.note,
  aside: _.Chip({ color: item.tone, size: "xs" }, item.value)
},
  _.div({ style: { fontSize: "34px", fontWeight: "700", lineHeight: "1", marginBottom: "10px" } }, item.value),
  _.Progress({ value: item.progress, state: item.tone, showValue: true, height: "sm" })
);

const assortmentCard = (item) => _.Card({
  eyebrow: item.channel,
  title: item.title,
  subtitle: item.note,
  aside: _.Chip({ color: item.tone, size: "xs" }, item.price)
},
  _.Row({ gap: "8px", wrap: true, style: { marginBottom: "12px" } },
    ...item.tags.map((tag) => _.Chip({ outline: true, size: "xs" }, tag))
  ),
  _.Progress({ value: item.progress, state: item.tone, showValue: true, height: "sm" })
);

const workloadCard = (item) => _.Card({
  title: item.title,
  subtitle: item.subtitle,
  aside: _.Chip({ color: item.tone, size: "xs" }, item.badge)
},
  _.Progress({
    value: item.progress,
    state: item.tone,
    showValue: true,
    striped: true,
    animated: true,
    height: "sm"
  }),
  _.Toolbar({ gap: "8px", wrap: true, style: { marginTop: "12px" } },
    _.Btn({ outline: true }, "Apri"),
    _.Btn({ color: item.tone }, "Assegna")
  )
);

const listSample = {
  responsive: {
    code: [
      _.Grid({ cols: 2, gap: "var(--cms-s-lg)" },
        _.GridCol({ span: 12, md: 8 },
          _.Card({
            eyebrow: "Release room",
            title: "Rollout Europa",
            subtitle: "Monitor giornaliero di contenuti, stock e quality gate",
            aside: _.Chip({ color: "success", size: "sm" }, "92% live")
          },
            _.Progress({
              value: 92,
              state: "success",
              showValue: true,
              note: "42 storefront allineati, 3 richiedono revisione locale"
            }),
            _.Grid({ cols: 3, gap: "var(--cms-s-md)", style: { marginTop: "16px" } },
              ...releaseMetrics.map((item) => _.GridCol(metricCard(item)))
            )
          )
        ),
        _.GridCol({ span: 12, md: 4 },
          _.Card({
            title: "Azioni prioritarie",
            subtitle: "Task che bloccano il passaggio in full rollout",
            aside: _.Chip({ color: "warning", size: "xs" }, "3 aperte")
          },
            _.List(
              _.Item("Aggiornare il set immagini FR per il marketplace locale"),
              _.Item("Confermare il mapping IVA per il bundle weekend"),
              _.Item("Chiudere il controllo QA sui coupon del checkout")
            ),
            _.Toolbar({ gap: "8px", wrap: true, style: { marginTop: "16px" } },
              _.Btn({ color: "primary" }, "Apri board"),
              _.Btn({ outline: true }, "Esporta")
            )
          )
        )
      )
    ],
    sample: [
      '_.Grid({ cols: 12, gap: "var(--cms-s-lg)" },',
      '  _.GridCol({ span: 12, md: 8 }, _.Card(...)),',
      '  _.GridCol({ span: 12, md: 4 }, _.Card(...))',
      ');'
    ]
  },
  autoFit: {
    code: [
      _.Grid({
        min: 240,
        autoFit: true,
        gap: "var(--cms-s-md)",
        items: assortmentCards,
        itemStyle: { height: "100%" },
        slots: {
          item: ({ item }) => assortmentCard(item)
        }
      })
    ],
    sample: [
      "_.Grid({",
      "  min: 240,",
      "  autoFit: true,",
      '  gap: "var(--cms-s-md)",',
      "  items: assortmentCards,",
      "  slots: {",
      "    item: ({ item }) => _.Card(...)",
      "  }",
      "});"
    ]
  },
  areas: {
    code: [
      _.Grid({
        cols: 4,
        rows: "auto auto",
        gap: "var(--cms-s-md)",
        areas: [
          ["hero", "hero", "hero", "sidebar"],
          ["timeline", "timeline", "notes", "sidebar"]
        ]
      },
        _.GridCol({ area: "hero" },
          _.Card({
            eyebrow: "Editorial plan",
            title: "Homepage capsule collection",
            subtitle: "Template costruito con `areas` per distribuire regioni fisse",
            aside: _.Chip({ color: "secondary", size: "xs" }, "Hero")
          },
            _.p("La griglia definisce le aree direttamente dal container, mentre ogni `GridCol` dichiara il proprio `area` senza wrapper extra."),
            _.Toolbar({ gap: "8px", wrap: true, style: { marginTop: "12px" } },
              _.Chip({ outline: true, size: "xs" }, "Visual ready"),
              _.Chip({ outline: true, size: "xs" }, "Copy review"),
              _.Chip({ outline: true, size: "xs" }, "SEO check")
            )
          )),
        _.GridCol({ area: "timeline" },
          _.Card({
            title: "Timeline",
            subtitle: "Sprint creativo"
          },
            _.List(
              _.Item("Lunedi: shooting still life"),
              _.Item("Martedi: selezione look e crop"),
              _.Item("Mercoledi: localizzazione copy"),
              _.Item("Giovedi: QA e publish")
            )
          )),
        _.GridCol({ area: "notes" },
          _.Card({
            title: "Note team",
            subtitle: "Promemoria rapidi"
          },
            _.List(
              _.Item("Verificare i badge sostenibilita per DE"),
              _.Item("Rivedere il pricing hero bundle"),
              _.Item("Aggiornare i fallback mobile")
            )
          )),
        _.GridCol({ area: "sidebar" },
          _.Card({
            title: "Owner",
            subtitle: "Stato operativo"
          },
            _.Toolbar({ gap: "8px", wrap: true, style: { marginBottom: "12px" } },
              _.Chip({ color: "info", size: "xs" }, "Design"),
              _.Chip({ color: "success", size: "xs" }, "Content")
            ),
            _.Progress({ value: 74, state: "info", showValue: true, note: "3 milestone su 4 confermate" })
          ))
      )
    ],
    sample: [
      "_.Grid({",
      "  cols: 4,",
      "  areas: [[\"hero\", \"hero\", \"hero\", \"sidebar\"], [\"timeline\", \"timeline\", \"notes\", \"sidebar\"]]",
      "},",
      '  _.GridCol({ area: "hero" }, _.Card(...)),',
      '  _.GridCol({ area: "timeline" }, _.Card(...)),',
      '  _.GridCol({ area: "notes" }, _.Card(...)),',
      '  _.GridCol({ area: "sidebar" }, _.Card(...))',
      ");"
    ]
  },
  dense: {
    code: [
      _.Grid({
        cols: 6,
        dense: true,
        autoRows: 220,
        gap: "var(--cms-s-md)",
        items: workloadBoard,
        slots: {
          item: ({ item }) => workloadCard(item)
        }
      })
    ],
    sample: [
      "_.Grid({",
      "  cols: 12,",
      "  dense: true,",
      "  autoRows: 110,",
      "  items: workloadBoard,",
      "  slots: {",
      "    item: ({ item }) => _.Card(...)",
      "  }",
      "});"
    ]
  },
  empty: {
    code: [
      _.Grid({
        min: 280,
        autoFit: true,
        gap: "var(--cms-s-md)",
        items: [],
        empty: _.Card({
          title: "Nessun widget configurato",
          subtitle: "L'empty state occupa tutta la larghezza utile della griglia",
          aside: _.Chip({ color: "warning", size: "xs" }, "Setup")
        },
          _.p("Usa `empty` o lo slot `empty` per mostrare CTA e guidance quando la collezione non produce card."),
          _.Toolbar({ gap: "8px", wrap: true, style: { marginTop: "12px" } },
            _.Btn({ color: "primary" }, "Aggiungi widget"),
            _.Btn({ outline: true }, "Apri template")
          )
        )
      })
    ],
    sample: [
      "_.Grid({",
      "  min: 280,",
      "  items: [],",
      "  empty: _.Card(...)",
      "});"
    ]
  }
};

const grid = _.div({ class: "cms-panel cms-page" },
  _.h1("Grid"),
  _.p("Layout CSS Grid standardizzato per dashboard, board operative, template editoriali e raccolte card responsive. Oltre ai `children` ora supporta `items`, slot `item`, `empty`, `autoFit/autoFill`, `areas`, gap separati e width utilities."),
  _.h2("Props principali"),
  _.List(
    _.Item("cols, columns, rows, areas: controlli template espliciti quando vuoi una griglia completamente disegnata"),
    _.Item("min + autoFit/autoFill: genera layout fluidi senza media query manuali"),
    _.Item("items, itemProps, slot item, empty: usa Grid in modo dichiarativo come lista di card"),
    _.Item("gap, rowGap, columnGap, autoRows, dense: perfetto per board operative e composizioni irregolari")
  ),
  _.h2("Documentazione API"),
  _.docTable("Grid"),
  _.h2("Esempi reali"),
  boxCode("Dashboard responsive a 12 colonne", listSample.responsive, 24),
  boxCode("Catalogo auto-fit con items + slot item", listSample.autoFit, 24),
  boxCode("Template editoriale con aree nominate", listSample.areas, 24),
  boxCode("Board densa con card a span variabile", listSample.dense, 24),
  boxCode("Empty state full width", listSample.empty, 24)
);

export { grid };
