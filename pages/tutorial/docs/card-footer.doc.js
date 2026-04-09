const cardFooterDoc = {
  name: "cardFooter",
  title: "cardFooter",
  status: "stable",
  tags: ["card", "layout", "subcomponent"],
  summary: "Regione footer per card composte manualmente con CTA, meta finali e status line. Il suo valore e chiudere la card in modo leggibile quando non basta il footer shortcut del componente alto livello.",
  signature: "_.cardFooter(...children) | _.cardFooter(props, ...children)",
  quickFacts: [
    { label: "Best for", value: "CTA finali, metadata, handoff interni, action row di card composte" },
    { label: "Avoid for", value: "card semplici dove il footer puo restare una prop di `_.Card`" },
    { label: "Mental model", value: "zona finale della card con chiusura e azioni" }
  ],
  useWhen: [
    {
      title: "La card chiude un mini-flusso",
      text: "CardFooter e giusto quando la parte finale contiene CTA, stato o meta conclusivi."
    },
    {
      title: "Vuoi separare chiaramente azioni e contenuto",
      text: "In card composte manualmente aiuta molto a non mischiare il call-to-action con il body."
    }
  ],
  avoidWhen: [
    {
      title: "Hai una sola CTA semplice",
      text: "Se la card e lineare, il footer shortcut di `_.Card` puo essere sufficiente."
    }
  ],
  essentialProps: [
    { name: "justify / align / wrap / gap", description: "Leve piu utili per chiudere bene la riga finale della card." }
  ],
  anatomy: [
    { title: "Meta zone", text: "Timestamp, stato o note finali possono stare a sinistra o in una zona secondaria." },
    { title: "Actions zone", text: "Le CTA principali e secondarie dovrebbero restare leggibili e gerarchiche." }
  ],
  slots: [],
  patterns: [
    { title: "Workflow publish footer", text: "Ottimo per anteprima + conferma o action row finali di pannelli operativi." }
  ],
  accessibility: [
    { title: "CTA gerarchiche", text: "La riga finale deve rendere chiaro cosa chiude il flusso e cosa e secondario." }
  ],
  gotchas: [
    { title: "Footer troppo denso", text: "Se ci finiscono troppe CTA, il finale della card perde priorita e chiarezza." }
  ]
};

export default cardFooterDoc;
