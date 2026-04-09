const dialogDoc = {
  name: "Dialog",
  title: "Dialog",
  status: "stable",
  tags: ["overlay", "modal", "workspace"],
  summary: "Overlay standardizzato per conferme, task critici e workspace temporanei. Il suo valore e tenere insieme struttura, focus, backdrop, scroll lock e API runtime senza reinventare ogni volta un modal custom.",
  signature: "_.Dialog(props?)",
  quickFacts: [
    { label: "Best for", value: "conferme, approvazioni, review veloci, workspace temporanei, wizard corti" },
    { label: "Avoid for", value: "micro-feedback non bloccanti o pannelli ancorati a un target" },
    { label: "Mental model", value: "overlay modale con grammatica chiara per header, content, actions e lifecycle" }
  ],
  useWhen: [
    {
      title: "Devi bloccare il flusso finche non c'e una decisione",
      text: "Per publish, delete, approvazioni e passaggi sensibili il dialog resta il pattern piu onesto."
    },
    {
      title: "Serve un workspace temporaneo fuori pagina",
      text: "Con `fullscreen`, `scrollable` e header/actions sticky puo ospitare checklist, editor o review room."
    },
    {
      title: "Vuoi un API imperativa stabile",
      text: "`open`, `close`, `toggle`, `update`, `isOpen` evitano wiring sparso tra stato, backdrop e focus."
    }
  ],
  avoidWhen: [
    {
      title: "Basta un feedback rapido",
      text: "Per messaggi brevi o stati async il pattern giusto e `_.Notify`."
    },
    {
      title: "Il contenuto deve restare nella pagina",
      text: "Se non deve bloccare e non deve uscire dal layout, meglio `_.Banner` o una card dedicata."
    },
    {
      title: "Serve un pannello ancorato e contestuale",
      text: "Per UI attaccata a un trigger il pattern corretto e piu vicino a `_.Popover` o `_.Menu`."
    }
  ],
  essentialProps: [
    {
      name: "title / subtitle / eyebrow / icon / content / actions",
      description: "La struttura base del dialog standard: basta questo set per coprire la maggior parte dei casi."
    },
    {
      name: "fullscreen / scrollable / stickyHeader / stickyActions",
      description: "Le leve che trasformano il dialog da conferma breve a workspace temporaneo."
    },
    {
      name: "persistent / closeOnOutside / closeOnBackdrop / closeOnEsc",
      description: "Definiscono quanto il dialog puo essere chiuso accidentalmente."
    },
    {
      name: "trapFocus / lockScroll",
      description: "Sono parte della UX del componente, non accessori opzionali da improvvisare."
    },
    {
      name: "runtime methods",
      description: "`open(overrides)`, `close()`, `toggle()`, `update(props)`, `isOpen()`, `entry()`."
    }
  ],
  anatomy: [
    { title: "Header region", text: "Eyebrow, title, subtitle, icon e close button devono restare leggibili e gerarchici." },
    { title: "Body region", text: "E la zona contenuto vera: puo essere compatta o diventare un workspace scrollabile." },
    { title: "Actions region", text: "Le azioni sono parte del contratto del dialog e non dovrebbero perdersi nel body." }
  ],
  slots: [
    { title: "`icon`, `eyebrow`, `title`, `subtitle`", text: "Per variare il look del header senza riscriverlo da zero." },
    { title: "`content`, `body`, `footer`, `actions`, `close`", text: "Per override piu forti del layout standard." }
  ],
  patterns: [
    { title: "Conferma semplice", text: "Title chiaro, content breve, CTA primaria e secondaria con focus netto.", tags: ["confirm"] },
    { title: "Dialog con runtime overrides", text: "Molto utile quando il dialog esiste una volta ma cambia contenuto in base allo scenario.", tags: ["imperative"] },
    { title: "Workspace fullscreen", text: "Quando il dialog smette di essere solo conferma e diventa spazio operativo temporaneo.", tags: ["workspace", "fullscreen"] }
  ],
  accessibility: [
    { title: "Focus trap e lock scroll", text: "Non andrebbero spenti senza una ragione concreta e testata." },
    { title: "Close path esplicito", text: "Se rendi il dialog persistente, dai sempre una via d'uscita chiara nelle azioni." }
  ],
  gotchas: [
    { title: "Content troppo lungo in modal piccolo", text: "Se il body cresce davvero, passa a `scrollable` o `fullscreen` invece di schiacciare tutto." },
    { title: "Overlay usato come side panel", text: "Se il pattern vero e un inspector laterale, non forzare il dialog a fare altro." },
    { title: "Troppe decisioni insieme", text: "Un dialog buono concentra una scelta o un mini-flusso, non sostituisce una pagina intera." }
  ]
};

export default dialogDoc;
