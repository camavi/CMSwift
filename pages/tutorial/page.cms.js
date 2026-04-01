const pageFilters = _.rod({
  critical: true,
  retail: true,
  blocked: false
});
const pageView = _.rod("overview");

const row = (...children) => _.div({
  style: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    alignItems: "center"
  }
}, ...children);

const stack = (...children) => _.div({
  style: {
    display: "grid",
    gap: "var(--cms-s-md)"
  }
}, ...children);

const metrics = (...children) => _.div({
  style: {
    display: "grid",
    gap: "var(--cms-s-md)",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))"
  }
}, ...children);

const metricCard = ({ title, value, note, tone }) => _.Card({
  title,
  subtitle: note,
  aside: _.Chip({ color: tone, outline: true, size: "sm" }, tone.toUpperCase())
},
  _.div({ class: "cms-h2" }, value)
);

const boardCards = () => metrics(
  metricCard({ title: "SLA attivo", value: "99.2%", note: "Ultime 24 ore", tone: "success" }),
  metricCard({ title: "Ticket aperti", value: "18", note: "7 richiedono review", tone: "warning" }),
  metricCard({ title: "Feed live", value: "42", note: "Marketplace + CRM", tone: "info" })
);

const listSample = {
  structured: {
    code: [
      _.Page({
        title: "Operations cockpit",
        subtitle: "Header strutturato, body libero e footer con azioni reali.",
        icon: "dashboard",
        aside: row(
          _.Chip({ color: "success", outline: true, size: "sm" }, "SLA 99.2%"),
          _.Btn({ size: "sm", outline: true }, "Apri log"),
          _.Btn({ size: "sm", color: "primary" }, "Nuovo ticket")
        ),
        footer: row(
          _.Chip({ color: "info", outline: true, size: "sm" }, "Ultimo sync 09:42"),
          _.Chip({ color: "secondary", outline: true, size: "sm" }, "Warehouse EU")
        ),
        actions: [
          _.Btn({ size: "sm", outline: true }, "Esporta board"),
          _.Btn({ size: "sm", color: "primary" }, "Condividi update")
        ]
      },
        boardCards(),
        _.Card({
          title: "Priority stream",
          subtitle: "Attivita da chiudere prima del cut-off",
          footer: row(
            _.Btn({ size: "sm", outline: true }, "Apri batch"),
            _.Btn({ size: "sm", color: "primary" }, "Assegna owner")
          )
        },
          _.List(
            _.Item("Ordine #48291 - etichetta DHL mancante"),
            _.Item("Webhook carrier in retry da 12 minuti"),
            _.Item("Riallineamento stock area Milano W2")
          )
        )
      )
    ],
    sample: [
      `_.Page({
  title: "Operations cockpit",
  subtitle: "Header strutturato, body libero e footer con azioni reali.",
  icon: "dashboard",
  aside: _.div(...),
  footer: _.div(...),
  actions: [
    _.Btn({ size: "sm", outline: true }, "Esporta board"),
    _.Btn({ size: "sm", color: "primary" }, "Condividi update")
  ]
},
  _.Card(...),
  _.Card(...)
);`
    ]
  },
  hero: {
    code: [
      _.Page({
        centered: true,
        maxWidth: 1080,
        hero: _.Banner({
          type: "primary",
          title: "Checkout release v2",
          message: "Rollout programmato in tre onde con QA, osservabilita e rollback plan gia pronti.",
          description: "La hero puo ospitare un banner, una card o qualunque nodo ricco.",
          actions: [
            _.Btn({ outline: true }, "Apri checklist"),
            _.Btn({ color: "primary" }, "Conferma slot")
          ]
        }),
        eyebrow: "Release planning",
        title: "Pagina con hero introduttiva",
        subtitle: "Usa `hero` per il blocco alto e tieni il resto della pagina pulito e leggibile.",
        aside: row(
          _.Chip({ color: "warning", outline: true }, "Wave 2/3"),
          _.Chip({ color: "success", outline: true }, "QA ready")
        ),
        footer: row(
          _.Chip({ color: "secondary", outline: true, size: "sm" }, "owner: platform"),
          _.Chip({ color: "info", outline: true, size: "sm" }, "deploy 14:30 CET")
        )
      },
        stack(
          _.Card({
            title: "Milestones",
            subtitle: "Sequenza sintetica del rollout"
          },
            _.List(
              _.Item("Feature freeze completato"),
              _.Item("Smoke test checkout EU/US"),
              _.Item("Monitoraggio conversion rate per 45 minuti")
            )
          ),
          _.Card({
            title: "Rollback guard",
            subtitle: "Prerequisiti verificati"
          },
            _.Checkbox({ model: _.rod(true), color: "success" }, "Snapshot DB confermato"),
            _.Checkbox({ model: _.rod(true), color: "success" }, "Feature flag separata per regione"),
            _.Checkbox({ model: _.rod(false), color: "warning" }, "Contenuti localizzati da approvare")
          )
        )
      )
    ],
    sample: [
      `_.Page({
  centered: true,
  maxWidth: 1080,
  hero: _.Banner({ title: "Checkout release v2", message: "..." }),
  eyebrow: "Release planning",
  title: "Pagina con hero introduttiva",
  subtitle: "Usa hero per il blocco alto.",
  aside: _.div(...),
  footer: _.div(...)
},
  _.Card(...),
  _.Card(...)
);`
    ]
  },
  slots: {
    code: [
      _.Page({
        flat: true,
        centered: true,
        maxWidth: 980,
        slots: {
          eyebrow: () => "Slot API",
          title: () => `Campaign board · ${pageView.value}`,
          subtitle: () => "Titolo, header, aside e footer possono essere composti in modo dinamico.",
          header: () => row(
            _.Checkbox({ model: pageFilters.value.critical, color: "danger" }, "Solo critici"),
            _.Checkbox({ model: pageFilters.value.retail, color: "info" }, "Canale retail"),
            _.Checkbox({ model: pageFilters.value.blocked, color: "warning" }, "Solo bloccati"),
            _.Radio({ model: pageView, value: "overview", color: "secondary" }, "Overview"),
            _.Radio({ model: pageView, value: "performance", color: "secondary" }, "Performance")
          ),
          aside: () => row(
            _.Chip({ color: "primary", outline: true }, () => `View: ${pageView.value}`),
            _.Chip({ color: () => pageFilters.value.critical ? "danger" : "secondary", outline: true }, () => pageFilters.value.critical ? "Critical on" : "Critical off")
          ),
          footer: () => row(
            _.Chip({ color: "info", outline: true, size: "sm" }, "slot driven"),
            _.Chip({ color: "secondary", outline: true, size: "sm" }, () => `Retail ${pageFilters.value.retail ? "on" : "off"}`)
          ),
          actions: () => [
            _.Btn({ size: "sm", outline: true }, "Reset filtri"),
            _.Btn({ size: "sm", color: "primary" }, "Salva vista")
          ]
        }
      },
        boardCards(),
        _.Card({
          title: "Budget anomalies",
          subtitle: "Body libero anche quando l'header e pilotato via slots"
        },
          _.Item({ title: "Search brand", subtitle: "CTR 4.2% • CPA in soglia", aside: _.Chip({ color: "success", size: "xs" }, "ok") }),
          _.Item({ title: "Retargeting EU", subtitle: "Spesa +18% giorno su giorno", aside: _.Chip({ color: "warning", size: "xs" }, "watch") }),
          _.Item({ title: "CRM recovery", subtitle: "Segment sync completata", aside: _.Chip({ color: "info", size: "xs" }, "sync") })
        )
      )
    ],
    sample: [
      `_.Page({
  flat: true,
  centered: true,
  maxWidth: 980,
  slots: {
    title: () => \`Campaign board · \${pageView.value}\`,
    header: () => _.div(_.Checkbox(...), _.Radio(...)),
    aside: () => _.div(_.Chip(...)),
    footer: () => _.div(_.Chip(...)),
    actions: () => [_.Btn({ outline: true }, "Reset"), _.Btn({ color: "primary" }, "Salva")]
  }
},
  _.Card(...),
  _.Card(...)
);`
    ]
  },
  editorial: {
    code: [
      _.Page({
        dense: true,
        narrow: true,
        icon: "edit_document",
        title: "Editorial workspace",
        subtitle: "La stessa API funziona anche per pagine piu strette, dense e orientate al contenuto.",
        header: _.p("Ottimo per knowledge base, editor, setup wizard o viste miste contenuto + form."),
        footer: _.span("Autosave attivo · ultima bozza 2 minuti fa"),
        actions: _.Btn({ size: "sm", color: "primary" }, "Pubblica bozza")
      },
        _.Card({
          title: "Sequenza di pubblicazione",
          subtitle: "Struttura reale per una pagina editoriale"
        },
          _.List(
            _.Item("Definisci headline e narrativa"),
            _.Item("Raccogli asset visuali e CTA"),
            _.Item("Valida copy e traduzioni"),
            _.Item("Programma la pubblicazione")
          )
        ),
        _.Card({
          title: "Checklist finale"
        },
          _.Checkbox({ model: _.rod(true), color: "success" }, "Meta title approvato"),
          _.Checkbox({ model: _.rod(true), color: "success" }, "Tracking CTA verificato"),
          _.Checkbox({ model: _.rod(false), color: "warning" }, "Hero mobile da ottimizzare")
        )
      )
    ],
    sample: [
      `_.Page({
  dense: true,
  narrow: true,
  icon: "edit_document",
  title: "Editorial workspace",
  subtitle: "Stessa API, layout piu stretto.",
  header: _.p("Ottimo per editor e setup wizard."),
  footer: _.span("Autosave attivo"),
  actions: _.Btn({ size: "sm", color: "primary" }, "Pubblica bozza")
},
  _.Card(...),
  _.Card(...)
);`
    ]
  }
};

const page = _.div({ class: "cms-panel cms-page" },
  _.h1("Page"),
  _.p("`_.Page` ora e un contenitore strutturato per schermate operative, editoriali o tutorial. Supporta hero, header tipizzato, footer con azioni, layout controllabile e composizione sia via props sia via slots."),
  _.h2("Props principali"),
  _.List(
    _.Item("hero, icon, eyebrow, title, subtitle, header, aside, body, footer, actions per costruire una pagina senza markup ripetitivo"),
    _.Item("dense, flat, centered, narrow per controllare ritmo, superficie e larghezza utile"),
    _.Item("gap, padding, maxWidth, minHeight, heroPadding, headerGap per regolare il layout"),
    _.Item("slots: hero, icon, eyebrow, title, subtitle, header, aside, body, footer, actions, default per composizione avanzata")
  ),
  _.h2("Documentazione API"),
  _.docTable("Page"),
  _.h2("Esempi completi"),
  boxCode("Header strutturato", listSample.structured),
  boxCode("Hero + content", listSample.hero),
  boxCode("Slots dinamici", listSample.slots),
  boxCode("Layout editoriale", listSample.editorial)
);

export { page };
