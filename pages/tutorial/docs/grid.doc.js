const gridDoc = {
  name: "Grid",
  title: "Grid",
  status: "stable",
  tags: ["layout", "grid", "dashboard"],
  summary: "Layout CSS Grid standardizzato per dashboard, board operative, template editoriali e collezioni responsive. Il suo punto forte e tenere insieme modalita esplicita e modalita dichiarativa senza dover riscrivere CSS grid ogni volta.",
  signature: "_.Grid(props, ...children)",
  quickFacts: [
    { label: "Best for", value: "dashboard, cataloghi card, board dense, template con aree nominate" },
    { label: "Avoid for", value: "layout lineari semplici dove `Row` o `Col` sono piu leggibili" },
    { label: "Mental model", value: "motore di layout a griglia, non contenitore generico per tutto" }
  ],
  useWhen: [
    {
      title: "Hai bisogno di vere colonne e righe",
      text: "Quando il layout non e piu lineare e servono span, aree o densita diverse, `Grid` e il pattern corretto."
    },
    {
      title: "Vuoi auto-fit senza media query manuali",
      text: "`min + autoFit/autoFill` coprono bene raccolte card e dashboard fluide."
    },
    {
      title: "Vuoi usare griglia anche in modo dichiarativo",
      text: "Con `items`, `slot item` ed `empty` puoi usarla come data layout, non solo come wrapper CSS."
    }
  ],
  avoidWhen: [
    {
      title: "Hai solo un flusso verticale o orizzontale",
      text: "Se la struttura e semplice, `Row`, `Col` o `Container` restano piu chiari."
    },
    {
      title: "Cerchi una tabella dati",
      text: "Grid e layout, non sostituisce `_.Table`."
    },
    {
      title: "Non c'e vera relazione spaziale tra gli elementi",
      text: "Se i blocchi non hanno bisogno di stare in griglia, non forzare il pattern."
    }
  ],
  essentialProps: [
    {
      name: "cols / columns / rows / areas",
      description: "Per griglie esplicite dove vuoi disegnare il template con precisione."
    },
    {
      name: "min + autoFit / autoFill",
      description: "Per layout fluidi e raccolte responsive senza CSS aggiuntivo."
    },
    {
      name: "items / itemProps / slot item / empty",
      description: "Per usare Grid come motore dichiarativo di card o widget."
    },
    {
      name: "gap / rowGap / columnGap / autoRows / dense",
      description: "Leve che cambiano davvero il ritmo e la densita della board."
    }
  ],
  anatomy: [
    { title: "Template layer", text: "Cols, rows e areas definiscono la struttura spaziale." },
    { title: "Item layer", text: "I figli o gli items popolano la griglia con span e aree." },
    { title: "State layer", text: "Empty e render dichiarativo rendono la griglia utile anche in casi data-driven." }
  ],
  slots: [
    { title: "`item` e `empty`", text: "I due slot chiave per usare Grid come engine dichiarativo di raccolte." }
  ],
  patterns: [
    { title: "Dashboard responsive", text: "Metriche, panel e widget su 12 colonne con adattamento progressivo.", tags: ["dashboard"] },
    { title: "Catalogo auto-fit", text: "Cards ripetute da dataset con `items` e slot `item`.", tags: ["catalog"] },
    { title: "Template editoriale", text: "Aree nominate per costruire gerarchie piu narrative.", tags: ["areas"] }
  ],
  accessibility: [
    { title: "Ordine logico dei contenuti", text: "La griglia non deve rompere la comprensione del contenuto se letta in ordine DOM." },
    { title: "Empty state esplicito", text: "Quando la collezione e vuota, il messaggio deve spiegare cosa fare dopo." }
  ],
  gotchas: [
    { title: "Grid usata come spacer gigante", text: "Se non stai davvero sfruttando la logica di griglia, il markup sta diventando piu pesante del necessario." },
    { title: "Aree troppo complesse", text: "Quando il template diventa difficile da leggere, probabilmente serve scomporre la pagina." },
    { title: "Mix confuso di children e items", text: "Scegli una strategia chiara per il singolo blocco: composition pura o data-driven." }
  ]
};

export default gridDoc;
