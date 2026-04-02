const liveGap = _.rod("md");
const liveAlign = _.rod("stretch");
const liveJustify = _.rod("flex-start");
const liveScroll = _.rod(false);

const previewSurface = (node) => _.div({
  class: "cms-singularity cms-border cms-p-lg",
  style: {
    minHeight: "180px",
    borderStyle: "dashed",
    overflow: "hidden"
  }
}, node);

const metricCard = (title, value, note, tone, icon) => _.Card({
  identifier: _.Chip({ color: tone, size: "sm", outline: true }, tone),
  title,
  subtitle: note,
  icon
},
  _.div({ style: { fontSize: "28px", fontWeight: "700", whiteSpace: "nowrap" } }, value)
);

const listSample = {
  responsive: {
    code: [
      previewSurface(
        _.Row({ gap: "lg", wrap: true, align: "stretch" },
          _.Col({ col: 24, md: 12, lg: 8 }, metricCard("MRR", "€ 48.2k", "Aggiornato 3 min fa", "success", "payments")),
          _.Col({ col: 24, md: 12, lg: 8 }, metricCard("Ticket aperti", "19", "2 SLA in scadenza", "warning", "support_agent")),
          _.Col({ col: 24, md: 12, lg: 8 }, metricCard("Campagne live", "7", "Meta, CRM e referral", "info", "campaign")),
          _.Col({ col: 24, md: 12, lg: 8 }, metricCard("Approval queue", "5", "1 revisione urgente", "secondary", "rule"))
        )
      )
    ],
    sample: [
      '_.Row({ gap: "lg", wrap: true, align: "stretch" },',
      '  _.Col({ col: 24, md: 12, lg: 8 }, metricCard("MRR", "€ 48.2k", "Aggiornato 3 min fa", "success", "payments")),',
      '  _.Col({ col: 24, md: 12, lg: 8 }, metricCard("Ticket aperti", "19", "2 SLA in scadenza", "warning", "support_agent")),',
      '  _.Col({ col: 24, md: 12, lg: 8 }, metricCard("Campagne live", "7", "Meta, CRM e referral", "info", "campaign")),',
      '  _.Col({ col: 24, md: 12, lg: 8 }, metricCard("Approval queue", "5", "1 revisione urgente", "secondary", "rule"))',
      ');'
    ]
  },
  regions: {
    code: [
      previewSurface(
        _.Col({
          gap: "md",
          start: _.Row({ align: "center", justify: "space-between", gap: "sm" },
            _.div(
              _.div({ style: { fontWeight: "700" } }, "Release checklist"),
              _.div({ class: "cms-muted" }, "Col usa start/body/end per comporre pannelli senza wrapper extra.")
            ),
            _.Chip({ color: "warning", outline: true, size: "sm" }, "4 step aperti")
          ),
          body: _.List(
            _.Item({
              icon: _.Checkbox({ model: _.rod(true), color: "success" }),
              title: "Smoke test produzione",
              subtitle: "Ultimo run completato 6 minuti fa"
            }),
            _.Item({
              icon: _.Checkbox({ model: _.rod(false), color: "warning" }),
              title: "Conferma pricing",
              subtitle: "Manca approvazione dal team commerciale"
            }),
            _.Item({
              icon: _.Checkbox({ model: _.rod(false), color: "danger" }),
              title: "Piano rollback",
              subtitle: "Checklist da firmare prima del push"
            })
          ),
          end: _.Row({ gap: "sm", justify: "space-between", align: "center" },
            _.Chip({ color: "info", outline: true, size: "sm" }, "owner: ops"),
            _.Btn({ color: "primary", icon: "rocket_launch" }, "Vai al rilascio")
          )
        })
      )
    ],
    sample: [
      '_.Col({',
      '  gap: "md",',
      '  start: _.Row({ align: "center", justify: "space-between" }, ...),',
      '  body: _.List(',
      '    _.Item({ icon: _.Checkbox({ model: _.rod(true) }), title: "Smoke test produzione" }),',
      '    _.Item({ icon: _.Checkbox({ model: _.rod(false) }), title: "Conferma pricing" })',
      '  ),',
      '  end: _.Row({ gap: "sm", justify: "space-between" },',
      '    _.Chip({ color: "info", outline: true }, "owner: ops"),',
      '    _.Btn({ color: "primary" }, "Vai al rilascio")',
      '  )',
      '});'
    ]
  },
  layout: {
    code: [
      previewSurface(
        _.Row({ gap: "lg", wrap: true, align: "stretch" },
          _.Col({ col: 24, md: 8, gap: "md" },
            _.Card({
              title: "Filtri workspace",
              subtitle: "Sidebar compatta ma reale",
              icon: "tune"
            },
              _.Col({ gap: "sm" },
                _.Radio({ value: "priority", model: _.rod("priority"), color: "secondary" }, "Ordina per priorita"),
                _.Radio({ value: "eta", model: _.rod("priority"), color: "secondary" }, "Ordina per ETA"),
                _.Checkbox({ model: _.rod(true), color: "success" }, "Solo task live"),
                _.Checkbox({ model: _.rod(false), color: "warning" }, "Mostra backlog bloccato")
              )
            )
          ),
          _.Col({ col: 24, md: 16, gap: "md" },
            _.Card({
              title: "Execution board",
              subtitle: "Col resta utile anche come stack verticale del contenuto",
              icon: "dashboard"
            },
              _.Col({ gap: "md" },
                _.Item({
                  title: "Traduzioni landing DE",
                  subtitle: "Copy review con legal entro oggi",
                  aside: _.Chip({ color: "warning", size: "xs" }, "pending")
                }),
                _.Item({
                  title: "Sync catalogo Shopify",
                  subtitle: "36 asset media ancora in ottimizzazione",
                  aside: _.Chip({ color: "info", size: "xs" }, "running")
                }),
                _.Item({
                  title: "Gate QA finale",
                  subtitle: "Smoke test completati su staging",
                  aside: _.Chip({ color: "success", size: "xs" }, "pass")
                })
              )
            )
          )
        )
      )
    ],
    sample: [
      '_.Row({ gap: "lg", wrap: true, align: "stretch" },',
      '  _.Col({ col: 24, md: 8, gap: "md" }, _.Card(...sidebar filtri...)),',
      '  _.Col({ col: 24, md: 16, gap: "md" }, _.Card(...execution board...))',
      ');'
    ]
  },
  live: {
    code: [
      _.Card({
        title: "Playground live",
        subtitle: "Gap, align, justify e scroll reagiscono direttamente su UI.Col.",
        icon: "tune"
      },
        _.Row({ gap: "lg", wrap: true, align: "flex-start" },
          _.Col({ col: 24, md: 9, gap: "md" },
            _.div({ style: { fontWeight: "700" } }, "Controlli"),
            _.div(
              _.div({ class: "cms-m-b-xs", style: { fontWeight: "700" } }, "Gap"),
              _.Row({ gap: "sm", wrap: true, class: "cms-m-b-md" },
                _.Radio({ value: "sm", model: liveGap }, "sm"),
                _.Radio({ value: "md", model: liveGap }, "md"),
                _.Radio({ value: "lg", model: liveGap }, "lg"),
                _.Radio({ value: "xl", model: liveGap }, "xl")
              )
            ),
            _.div(
              _.div({ class: "cms-m-b-xs", style: { fontWeight: "700" } }, "Align"),
              _.Row({ gap: "sm", wrap: true, class: "cms-m-b-md" },
                _.Radio({ value: "stretch", model: liveAlign }, "Stretch"),
                _.Radio({ value: "flex-start", model: liveAlign }, "Start"),
                _.Radio({ value: "center", model: liveAlign }, "Center")
              )
            ),
            _.div(
              _.div({ class: "cms-m-b-xs", style: { fontWeight: "700" } }, "Justify"),
              _.Row({ gap: "sm", wrap: true, class: "cms-m-b-md" },
                _.Radio({ value: "flex-start", model: liveJustify }, "Start"),
                _.Radio({ value: "center", model: liveJustify }, "Center"),
                _.Radio({ value: "space-between", model: liveJustify }, "Space-between")
              )
            ),
            _.Checkbox({ model: liveScroll, color: "info" }, "Abilita scroll verticale")
          ),
          _.Col({ col: 24, md: 15 },
            _.div({ class: "cms-m-b-sm", style: { fontWeight: "700" } }, "Anteprima"),
            previewSurface(
              _.div(
                _.Row({ gap: "sm", wrap: true, class: "cms-m-b-sm", align: "center" },
                  _.Chip({ color: "primary", size: "sm", outline: true }, () => `gap ${liveGap.value}`),
                  _.Chip({ color: "secondary", size: "sm", outline: true }, () => `align ${liveAlign.value}`),
                  _.Chip({ color: "warning", size: "sm", outline: true }, () => `justify ${liveJustify.value}`)
                ),
                _.Col({
                  gap: liveGap,
                  align: liveAlign,
                  justify: liveJustify,
                  scroll: liveScroll,
                  height: "320px",
                  style: {
                    padding: "var(--cms-s-md)",
                    borderRadius: "var(--cms-r-md)",
                    border: "1px solid color-mix(in srgb, var(--cms-border-color) 52%, transparent)",
                    background: "color-mix(in srgb, var(--cms-panel) 86%, transparent)"
                  }
                },
                  _.Chip({ color: "success", icon: "bolt" }, "Sync completato"),
                  _.Card({ title: "Blocco prioritario", subtitle: "Deploy orchestrato su 3 workspace" }, "La colonna resta leggibile e gestibile anche con contenuti eterogenei."),
                  _.Btn({ outline: true, icon: "download" }, "Scarica log"),
                  _.Card({ title: "Fallback operativo", subtitle: "Note per il team on-call" }, "Se il rollout fallisce, riattiva l'ultimo bundle stabile."),
                  _.Btn({ color: "primary", icon: "rocket_launch" }, "Procedi")
                )
              )
            )
          )
        )
      )
    ],
    sample: [
      'const liveGap = _.rod("md");',
      'const liveAlign = _.rod("stretch");',
      'const liveJustify = _.rod("flex-start");',
      '',
      '_.Col({',
      '  gap: liveGap,',
      '  align: liveAlign,',
      '  justify: liveJustify,',
      '  scroll: liveScroll,',
      '  height: "320px"',
      '}, ...children);'
    ]
  }
};

const col = _.div({ class: "cms-panel cms-page" },
  _.h1("Col"),
  _.p("`_.Col` funziona come item responsive nel layout a 24 colonne e, quando serve, come stack verticale. Di default resta un contenitore normale; entra in modalita flex colonna quando usi `gap`, `align`, `justify`, le regioni `start / body / end` oppure `stack: true`."),
  _.h2("Props principali"),
  _.List(
    _.Item("`col` o `span`, `sm`, `md`, `lg`, `auto`: controlli lo span responsive senza wrapper aggiuntivi"),
    _.Item("`gap`, `align`, `justify`, `width`, `height`, `fill`, `scroll`, `stack`: trasformi la colonna in un contenitore verticale vero e proprio"),
    _.Item("`start`, `body`, `end` e slot equivalenti (`header`, `content`, `footer`): componi layout strutturati in modo leggibile"),
    _.Item("Compatibile con children tradizionali: se non usi regioni o slot, il contenuto viene renderizzato in modo semplice")
  ),
  _.h2("Documentazione API"),
  _.docTable("Col"),
  _.h2("Esempi reali"),
  boxCode("Metriche responsive con span `col/md/lg`", listSample.responsive),
  boxCode("Pannello verticale con `start / body / end`", listSample.regions),
  boxCode("Sidebar + board operativo con Row + Col", listSample.layout),
  boxCode("Playground live", listSample.live)
);

export { col };
