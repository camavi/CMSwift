import { getComponentDoc } from "./docs/catalog.js";
const createSection = (code, sample) => ({
  code: Array.isArray(code) ? code : [code],
  sample: Array.isArray(sample) ? sample : [sample]
});

const row = (...children) => _.div({
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center"
  }
}, ...children);

const stack = (...children) => _.div({
  style: {
    display: "grid",
    gap: "var(--cms-s-md)"
  }
}, ...children);

const metricCard = ({ title, value, tone, note }) => _.Card({
  title,
  subtitle: note,
  class: "cms-h-100"
},
  _.div({ class: "cms-h2" }, value),
  _.Chip({ color: tone, outline: true, size: "sm" }, tone)
);

const activityList = (items) => _.List({
  marker: false,
  divider: true,
  items: items.map((item) => ({
    icon: item.icon,
    title: item.title,
    subtitle: item.subtitle,
    aside: _.Chip({ color: item.tone, outline: true, size: "xs" }, item.meta)
  }))
});

const liveDense = _.rod(false);
const liveCentered = _.rod(true);
const liveNarrow = _.rod(false);
const liveFlat = _.rod(false);
const liveView = _.rod("overview");
const liveTone = _.rod("primary");
const liveStatus = _.rod("Preview pronta");
const slotReleaseMode = _.rod("gradual");

const operationsActivities = [
  {
    icon: "inventory_2",
    title: "Ordine #48291 in attesa etichetta carrier",
    subtitle: "Warehouse Milano • rischio SLA entro 14 minuti",
    tone: "warning",
    meta: "14 min"
  },
  {
    icon: "payments",
    title: "Riconciliazione payout marketplace",
    subtitle: "Serve verifica fee e invoice export lato finance",
    tone: "info",
    meta: "finance"
  },
  {
    icon: "task_alt",
    title: "Restock SKU A19 completato",
    subtitle: "Area picking aggiornata e task chiuso dal turno mattina",
    tone: "success",
    meta: "done"
  }
];

const releaseActivities = [
  {
    icon: "rocket_launch",
    title: "Deploy checkout progressive rollout",
    subtitle: "Traffico iniziale al 10% con rollback pronto in 90 secondi",
    tone: "primary",
    meta: "10%"
  },
  {
    icon: "fact_check",
    title: "Smoke test multi-country completati",
    subtitle: "IT, ES e FR senza regressioni su coupon e pagamenti",
    tone: "success",
    meta: "qa"
  },
  {
    icon: "forum",
    title: "War room aperta con support e product",
    subtitle: "Aggiornamento stakeholder ogni 15 minuti",
    tone: "secondary",
    meta: "live"
  }
];

const buildOperationsPage = () => _.Page({
  hero: _.div(
    _.Chip({ color: "success", outline: true, size: "sm" }, "99.1% SLA"),
    _.div({ class: "cms-h3" }, "Operations control room"),
    _.p("Usa `Page` come contenitore principale della vista: hero, header contestuale, body con card operative e footer con action group.")
  ),
  icon: "space_dashboard",
  eyebrow: "Real world example",
  title: "Desk operativo fulfillment",
  subtitle: "Struttura standard per pagine applicative complesse con stato, CTA e sezioni principali coerenti.",
  header: _.div(
    "Il componente rimane semplice quando serve solo contenuto, ma puo anche generare una pagina completa con `hero`, `aside`, `footer` e `actions`."
  ),
  aside: row(
    _.Chip({ color: "info", outline: true, size: "sm" }, "warehouse EU"),
    _.Btn({ size: "sm", outline: true }, "Apri log"),
    _.Btn({ size: "sm", color: "primary" }, "Nuovo task")
  ),
  footer: _.div(
    _.b("Ultimo sync: "),
    _.span("09:42 CET")
  ),
  actions: row(
    _.Btn({ size: "sm", outline: true }, "Esporta"),
    _.Btn({ size: "sm", color: "primary" }, "Assegna owner")
  )
},
  _.Grid({ cols: 3, gap: 12 },
    _.GridCol(metricCard({ title: "Orders in queue", value: "128", tone: "primary", note: "Ultimi 15 minuti" })),
    _.GridCol(metricCard({ title: "Blocked picks", value: "7", tone: "warning", note: "Richiedono review" })),
    _.GridCol(metricCard({ title: "Late carriers", value: "3", tone: "danger", note: "Hub Milano / Roma" }))
  ),
  _.Card({
    title: "Priority stream",
    subtitle: "Task su cui intervenire adesso"
  },
    activityList(operationsActivities)
  )
);

const slotsExample = _.Page({
  dense: true,
  centered: true,
  maxWidth: 1080,
  slots: {
    hero: () => _.Card({
      title: "Slot hero",
      subtitle: "Puoi montare una hero completamente custom senza perdere il layout della pagina."
    },
      row(
        _.Chip({ color: "secondary" }, "release"),
        _.Chip({ color: "info", outline: true }, "slots"),
        _.Chip({ color: "success", outline: true }, "custom")
      )
    ),
    icon: () => _.Avatar({ label: "RL", color: "secondary", size: 52 }),
    title: () => "Release workspace",
    subtitle: () => "Esempio costruito interamente via slot: header arricchito, body custom e footer con CTA.",
    header: () => _.div(
      _.List(
        _.Item("Slot `hero` per banner o summary"),
        _.Item("Slot `header` per note, breadcrumb o warning contestuali"),
        _.Item("Slot `body` per definire il layout interno completo")
      )
    ),
    aside: () => row(
      _.Chip({ color: "warning", outline: true, size: "sm" }, "ETA 12 min"),
      _.Btn({ size: "sm", outline: true }, "Apri changelog")
    ),
    body: () => stack(
      _.Grid({ cols: 2, gap: 12 },
        _.GridCol(_.Card({
          title: "Checklist pre-release",
          subtitle: "Controlli ancora aperti"
        },
          _.Checkbox({ model: _.rod(true), color: "success" }, "Smoke test checkout"),
          _.Checkbox({ model: _.rod(true), color: "success" }, "Backup verificato"),
          _.Checkbox({ model: _.rod(false), color: "warning" }, "Market owner FR approvato")
        )),
        _.GridCol(_.Card({
          title: "Canale rollout",
          subtitle: "Decisione pubblicazione"
        },
          _.Radio({ model: slotReleaseMode, value: "gradual", color: "primary" }, "Gradual rollout"),
          _.Radio({ model: slotReleaseMode, value: "full", color: "success" }, "Full rollout"),
          _.Radio({ model: slotReleaseMode, value: "hold", color: "warning" }, "Hold release")
        ))
      ),
      _.Card({
        title: "Handoff note",
        subtitle: "Le slot permettono di comporre contenuti molto diversi senza cambiare API del componente."
      },
        _.p("Questo e il caso ideale quando `Page` deve ospitare layout editoriali, dashboard o pagine operative con regioni stabili.")
      )
    ),
    footer: () => _.div("Ultima review QA: 5 minuti fa"),
    actions: () => row(
      _.Btn({ size: "sm", outline: true }, "Salva bozza"),
      _.Btn({ size: "sm", color: "secondary" }, "Condividi"),
      _.Btn({ size: "sm", color: "primary" }, "Conferma release")
    )
  }
});

const livePreview = _.Page({
  dense: liveDense,
  centered: liveCentered,
  narrow: liveNarrow,
  flat: liveFlat,
  icon: () => liveView.value === "overview" ? "insights" : "rocket_launch",
  eyebrow: "Live playground",
  title: () => liveView.value === "overview" ? "Weekly business review" : "Release checklist",
  subtitle: () => liveView.value === "overview"
    ? "Controlla in tempo reale come cambiano struttura e presenza visiva della pagina."
    : "La stessa API regge anche viste focus piu editoriali e compatte.",
  aside: () => row(
    _.Chip({ color: liveTone.value, outline: true, size: "sm" }, () => liveTone.value),
    _.Chip({ color: "secondary", outline: true, size: "sm" }, () => liveDense.value ? "dense" : "comfortable"),
    _.Chip({ color: "info", outline: true, size: "sm" }, () => liveCentered.value ? "centered" : "full width")
  ),
  footer: () => _.div(() => liveStatus.value),
  actions: () => row(
    _.Btn({
      size: "sm",
      outline: true,
      onClick: () => { liveStatus.value = "Draft salvato alle 10:14"; }
    }, "Salva"),
    _.Btn({
      size: "sm",
      color: () => liveTone.value,
      onClick: () => { liveStatus.value = "Aggiornato e condiviso con il team"; }
    }, "Aggiorna")
  ),
  body: () => [
    _.Grid({ cols: liveView.value === "overview" ? 3 : 2, gap: 12 },
      _.GridCol(metricCard({ title: "Revenue", value: "€ 128k", tone: liveTone.value, note: "Ultime 24h" })),
      _.GridCol(metricCard({ title: "Tickets", value: liveView.value === "overview" ? "18" : "4", tone: "warning", note: "Richiedono follow-up" })),
      liveView.value === "overview"
        ? _.GridCol(metricCard({ title: "Conversion", value: "3.8%", tone: "success", note: "Stabile su mobile" }))
        : _.GridCol(metricCard({ title: "Rollback", value: "Ready", tone: "success", note: "ETA 90 secondi" }))
    ),
    _.Card({
      title: () => liveView.value === "overview" ? "Top priorities" : "Release flow",
      subtitle: "Le card nel body restano contenuto libero: `Page` organizza, non impone."
    },
      activityList(liveView.value === "overview" ? operationsActivities : releaseActivities)
    )
  ]
});

const listSample = {
  structured: createSection(
    buildOperationsPage(),
    [
      "_.Page({",
      '  hero: _.div(_.Chip({ color: "success" }, "99.1% SLA"), _.div({ class: "cms-h3" }, "Operations control room")),',
      '  icon: "space_dashboard",',
      '  eyebrow: "Real world example",',
      '  title: "Desk operativo fulfillment",',
      '  subtitle: "Struttura standard per pagine applicative complesse",',
      '  aside: _.div(_.Btn({ size: "sm" }, "Nuovo task")),',
      '  footer: _.div("Ultimo sync: 09:42 CET"),',
      '  actions: _.div(_.Btn({ size: "sm", color: "primary" }, "Assegna owner"))',
      "},",
      "  _.Grid(...metric cards...),",
      '  _.Card({ title: "Priority stream" }, _.List(...))',
      ");"
    ]
  ),
  slots: createSection(
    slotsExample,
    [
      "_.Page({",
      "  dense: true,",
      "  centered: true,",
      "  slots: {",
      '    hero: () => _.Card({ title: "Slot hero" }, ...),',
      '    icon: () => _.Avatar({ label: "RL", color: "secondary" }),',
      '    title: () => "Release workspace",',
      '    body: () => _.div(_.Card(...), _.Card(...)),',
      '    footer: () => _.div("Ultima review QA: 5 minuti fa"),',
      '    actions: () => _.div(_.Btn("Salva bozza"), _.Btn("Conferma release"))',
      "  }",
      "});"
    ]
  ),
  live: createSection(
    [
      _.Card({ title: "Controlli live", subtitle: "Modifica props e comportamento del componente senza uscire dal tutorial." },
        stack(
          row(
            _.Checkbox({ model: liveDense, color: "primary" }, "Dense"),
            _.Checkbox({ model: liveCentered, color: "info" }, "Centered"),
            _.Checkbox({ model: liveNarrow, color: "secondary" }, "Narrow"),
            _.Checkbox({ model: liveFlat, color: "warning" }, "Flat")
          ),
          row(
            _.Radio({ model: liveView, value: "overview", color: "primary" }, "Overview"),
            _.Radio({ model: liveView, value: "release", color: "secondary" }, "Release")
          ),
          row(
            _.Radio({ model: liveTone, value: "primary", color: "primary" }, "Primary"),
            _.Radio({ model: liveTone, value: "info", color: "info" }, "Info"),
            _.Radio({ model: liveTone, value: "warning", color: "warning" }, "Warning"),
            _.Radio({ model: liveTone, value: "success", color: "success" }, "Success")
          )
        )
      ),
      livePreview
    ],
    [
      "const liveDense = _.rod(false);",
      "const liveCentered = _.rod(true);",
      'const liveView = _.rod("overview");',
      "_.Checkbox({ model: liveDense }, \"Dense\");",
      "_.Radio({ model: liveView, value: \"overview\" }, \"Overview\");",
      "_.Page({",
      "  dense: liveDense,",
      "  centered: liveCentered,",
      "  title: () => liveView.value === \"overview\" ? \"Weekly business review\" : \"Release checklist\"",
      "},",
      "  _.Grid(...),",
      "  _.Card(...)",
      ");"
    ]
  )
};

const page = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Page"),
    api: () => _.docTable("Page")
  }),
  _.h2("Esempi completi"),
  boxCode("Struttura standard con hero, aside e footer actions", listSample.structured),
  boxCode("Pagina totalmente custom via slot", listSample.slots),
  boxCode("Playground live del componente", listSample.live)
);

export { page };
