const renderSpinner = (options = {}, label = "") => {
  if (!Object.keys(options).length && !label) return _.Spinner();
  if (!Object.keys(options).length) return _.Spinner(label);
  return label ? _.Spinner(options, label) : _.Spinner(options);
};

const renderSpinnerSample = (options = {}, label = "") => {
  if (!Object.keys(options).length && !label) return "_.Spinner();";
  if (!Object.keys(options).length) return `_.Spinner("${label}");`;
  return label ? `_.Spinner(${serializeOptions(options)}, "${label}");` : `_.Spinner(${serializeOptions(options)});`;
};

const createSection = (entries) => ({
  code: entries.map(({ child = "", options }) => renderSpinner(options, child)),
  sample: entries.map(({ child = "", options }) => renderSpinnerSample(options, child))
});

const sizeEntries = [
  { label: "xxs", options: { size: "xxs", label: "Checking" } },
  { label: "xs", options: { size: "xs", label: "Sync" } },
  { label: "sm", options: { size: "sm", label: "Queue" } },
  { label: "md", options: { size: "md", label: "Deploy" } },
  { label: "lg", options: { size: "lg", label: "Import" } },
  { label: "xl", options: { size: "xl", label: "Analytics" } }
];

const stateEntries = [
  { label: "Primary", options: { state: "primary", label: "Publishing release" } },
  { label: "Success", options: { state: "success", label: "Final validation" } },
  { label: "Warning", options: { state: "warning", label: "Sync in background" } },
  { label: "Danger", options: { state: "danger", label: "Recovery in corso" } },
  { label: "Info", options: { state: "info", label: "Building report" } },
  { label: "Custom", options: { color: "#5eead4", trackColor: "rgba(94,234,212,0.18)", label: "Webhook ping" } }
];

const liveState = _.rod("primary");
const liveSize = _.rod("lg");
const liveSpeed = _.rod(900);
const livePaused = _.rod(false);

const listSample = {
  size: createSection(sizeEntries),
  state: createSection(stateEntries),
  layout: {
    code: [
      _.Spinner({
        state: "warning",
        size: "lg",
        label: "Sincronizzazione catalogo",
        note: "Aggiorna prezzi, disponibilita e immagini da tre fornitori."
      }),
      _.Spinner({
        vertical: true,
        center: true,
        size: "xl",
        state: "info",
        label: "Preparazione dashboard",
        note: "Calcolo KPI, aggregazione eventi e cache warmup."
      }),
      _.Spinner({
        reverse: true,
        size: "md",
        color: "#a78bfa",
        label: "Verifica connessioni",
        note: "Ping ai servizi esterni e controllo token."
      })
    ],
    sample: [
      '_.Spinner({ state: "warning", size: "lg", label: "Sincronizzazione catalogo", note: "Aggiorna prezzi, disponibilita e immagini da tre fornitori." });',
      '_.Spinner({ vertical: true, center: true, size: "xl", state: "info", label: "Preparazione dashboard", note: "Calcolo KPI, aggregazione eventi e cache warmup." });',
      '_.Spinner({ reverse: true, size: "md", color: "#a78bfa", label: "Verifica connessioni", note: "Ping ai servizi esterni e controllo token." });'
    ]
  },
  real: {
    code: [
      _.Card({
        title: "Import catalogo",
        subtitle: "Operazioni di backoffice in corso",
        aside: _.Spinner({ size: "lg", state: "warning", ariaLabel: "Import catalogo in corso" })
      },
        _.p("Il componente funziona bene dentro card informative, action toolbar e stati di attesa localizzati."),
        _.div({ class: "cms-d-flex", style: { gap: "10px", flexWrap: "wrap", alignItems: "center" } },
          _.Chip({ color: "warning" }, "42 SKU in elaborazione"),
          _.Spinner({ size: "sm", label: "Indicizzazione immagini", note: "Restano 3 batch" })
        )
      ),
      _.div({ class: "cms-d-flex", style: { gap: "12px", flexWrap: "wrap", alignItems: "center" } },
        _.Btn({ disabled: true }, _.Spinner({ size: "sm", thickness: "2px", color: "currentColor", ariaLabel: "Pubblicazione in corso" }), "Pubblicazione in corso"),
        _.Btn({ outline: true }, "Apri report"),
        _.Spinner({ size: "sm", state: "success", label: "Autosave completato", note: "Ultimo salvataggio 2 secondi fa" })
      )
    ],
    sample: [
      '_.Card({ title: "Import catalogo", subtitle: "Operazioni di backoffice in corso", aside: _.Spinner({ size: "lg", state: "warning", ariaLabel: "Import catalogo in corso" }) },',
      '  _.p("Il componente funziona bene dentro card informative, action toolbar e stati di attesa localizzati."),',
      '  _.div({ class: "cms-d-flex", style: { gap: "10px", flexWrap: "wrap", alignItems: "center" } },',
      '    _.Chip({ color: "warning" }, "42 SKU in elaborazione"),',
      '    _.Spinner({ size: "sm", label: "Indicizzazione immagini", note: "Restano 3 batch" })',
      "  )",
      ");",
      '_.Btn({ disabled: true }, _.Spinner({ size: "sm", thickness: "2px", color: "currentColor", ariaLabel: "Pubblicazione in corso" }), "Pubblicazione in corso");',
      '_.Spinner({ size: "sm", state: "success", label: "Autosave completato", note: "Ultimo salvataggio 2 secondi fa" });'
    ]
  },
  tuning: {
    code: [
      _.Spinner({ size: 20, thickness: 1, speed: 1400, label: "Polling lento", note: "Perfetto per refresh discreti" }),
      _.Spinner({ size: 22, thickness: 3, speed: 700, state: "primary", label: "Build veloce", note: "Feedback piu energico per task brevi" }),
      _.Spinner({ size: 28, thickness: 4, color: "#f97316", trackColor: "rgba(249,115,22,0.2)", label: "Processo custom", note: "Brand color o contesti speciali" })
    ],
    sample: [
      '_.Spinner({ size: 20, thickness: 1, speed: 1400, label: "Polling lento", note: "Perfetto per refresh discreti" });',
      '_.Spinner({ size: 22, thickness: 3, speed: 700, state: "primary", label: "Build veloce", note: "Feedback piu energico per task brevi" });',
      '_.Spinner({ size: 28, thickness: 4, color: "#f97316", trackColor: "rgba(249,115,22,0.2)", label: "Processo custom", note: "Brand color o contesti speciali" });'
    ]
  },
  live: {
    code: [
      _.div({ class: "cms-d-flex", style: { gap: "8px", flexWrap: "wrap", alignItems: "center", marginBottom: "12px" } },
        _.Btn({ onClick: () => { liveState.value = "primary"; } }, "Primary"),
        _.Btn({ onClick: () => { liveState.value = "success"; } }, "Success"),
        _.Btn({ onClick: () => { liveState.value = "warning"; } }, "Warning"),
        _.Btn({ onClick: () => { liveState.value = "danger"; } }, "Danger"),
        _.Btn({ onClick: () => { liveState.value = "info"; } }, "Info")
      ),
      _.div({ class: "cms-d-flex", style: { gap: "8px", flexWrap: "wrap", alignItems: "center", marginBottom: "12px" } },
        _.Btn({ outline: true, onClick: () => { liveSize.value = "sm"; } }, "Size sm"),
        _.Btn({ outline: true, onClick: () => { liveSize.value = "lg"; } }, "Size lg"),
        _.Btn({ outline: true, onClick: () => { liveSize.value = "xl"; } }, "Size xl"),
        _.Btn({ outline: true, onClick: () => { liveSpeed.value = 1400; } }, "Slow"),
        _.Btn({ outline: true, onClick: () => { liveSpeed.value = 900; } }, "Normal"),
        _.Btn({ outline: true, onClick: () => { liveSpeed.value = 550; } }, "Fast"),
        _.Btn({ outline: true, onClick: () => { livePaused.value = !livePaused.value; } }, "Pause / Resume")
      ),
      _.Card({
        title: "Anteprima live",
        subtitle: "Cambia stato, dimensione e velocita senza ricreare il componente",
        aside: _.Spinner({
          state: () => liveState.value,
          size: () => liveSize.value,
          speed: () => liveSpeed.value,
          paused: () => livePaused.value,
          ariaLabel: "Anteprima spinner"
        })
      },
        _.Spinner({
          state: () => liveState.value,
          size: () => liveSize.value,
          speed: () => liveSpeed.value,
          paused: () => livePaused.value,
          label: "Deploy environment",
          note: "Pipeline di staging in esecuzione"
        })
      )
    ],
    sample: [
      'const liveState = _.rod("primary");',
      'const liveSize = _.rod("lg");',
      'const liveSpeed = _.rod(900);',
      'const livePaused = _.rod(false);',
      '_.Spinner({',
      '  state: () => liveState.value,',
      '  size: () => liveSize.value,',
      '  speed: () => liveSpeed.value,',
      '  paused: () => livePaused.value,',
      '  label: "Deploy environment",',
      '  note: "Pipeline di staging in esecuzione"',
      "});"
    ]
  }
};

const spinner = _.div({ class: "cms-panel cms-page" },
  _.h1("Spinner"),
  _.p("Spinner standardizzato per stati di caricamento puntuali o contestuali: supporta dimensioni, stato semantico, velocita, traccia, layout con label e integrazione pulita dentro button, card e aree operative."),
  _.h2("Props principali"),
  _.List(
    _.Item("size, thickness, speed e trackColor per calibrare la resa visiva"),
    _.Item("state oppure color per gestire il tono del feedback"),
    _.Item("label, note, vertical, reverse, center e block per adattare il layout"),
    _.Item("slots indicator, label, note e default per casi custom senza wrapper extra")
  ),
  _.h2("Documentazione API"),
  _.docTable("Spinner"),
  _.h2("Esempi completi"),
  boxCode("Size", listSample.size),
  boxCode("State + custom color", listSample.state),
  boxCode("Layout con testo", listSample.layout),
  boxCode("Casi reali", listSample.real),
  boxCode("Thickness + speed tuning", listSample.tuning),
  boxCode("Anteprima live", listSample.live)
);

export { spinner };
