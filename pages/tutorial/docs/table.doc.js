const tableDoc = {
  name: "Table",
  title: "Table",
  status: "stable",
  tags: ["data", "ops", "backoffice"],
  summary: "Tabella standard per dati operativi con toolbar, ricerca, ordinamento, paginazione, loading, empty state e azioni per riga. Il vantaggio vero e avere un contratto unico per i casi da dashboard e backoffice.",
  signature: "_.Table(props)",
  quickFacts: [
    { label: "Best for", value: "CRM, code review queue, incident board, analytics operative, liste action-heavy" },
    { label: "Avoid for", value: "dataset microscopici o contenuti che vivono meglio come cards/lista editoriale" },
    { label: "Mental model", value: "griglia dati con toolbar e comportamento integrato, non solo markup tabellare" }
  ],
  useWhen: [
    {
      title: "Hai dati reali da consultare e operare",
      text: "Ricerca, sort, filtri, paginazione e row actions sono gia pensati per flussi di backoffice."
    },
    {
      title: "Vuoi evitare wrapper esterni per toolbar e footer",
      text: "La tabella ha gia spazi dedicati per filtri, summary e azioni senza layout paralleli."
    },
    {
      title: "Le celle richiedono rendering custom",
      text: "Chip, badges, bottoni e formatter convivono bene nel contratto `columns`."
    }
  ],
  avoidWhen: [
    {
      title: "I dati sono pochi e visuali",
      text: "Se il contenuto e piu vicino a un catalogo o una dashboard a card, `Grid` o `List` possono essere piu leggibili."
    },
    {
      title: "Serve una timeline o una board",
      text: "Non usare la tabella come contenitore universale per pattern che non sono tabellari."
    },
    {
      title: "Le righe non hanno vera comparazione tra colonne",
      text: "Se l'utente non deve confrontare campi omogenei, la tabella puo diventare solo rumore."
    }
  ],
  essentialProps: [
    {
      name: "columns",
      description: "Definisce label, sorting, width, align, formatter, `get` e render custom: e il cuore del componente."
    },
    {
      name: "rows / loading / emptyText",
      description: "Leva base per stato vivo della tabella: dati, pending e fallback."
    },
    {
      name: "searchable / filter / searchModel",
      description: "Per controllare davvero come il dataset viene ridotto e ricercato."
    },
    {
      name: "toolbarStart / toolbarEnd / footer",
      description: "Punti giusti per filtri, segment switch, summary e CTA senza creare wrapper ad hoc."
    },
    {
      name: "dense / striped / hover / minTableWidth",
      description: "Tuning visivo per dashboard dense o tavole piu leggibili."
    }
  ],
  anatomy: [
    { title: "Toolbar", text: "Ricerca, filtri e comandi vivono sopra la tabella, non in righe fake." },
    { title: "Column model", text: "Le colonne descrivono sia struttura visiva sia comportamento dati." },
    { title: "State layer", text: "Loading, empty e footer sono parte della grammatica del componente." }
  ],
  slots: [
    { title: "Render custom", text: "Usa render di colonna o slot per celle davvero custom senza rompere il modello dati." }
  ],
  patterns: [
    { title: "CRM table", text: "Ricerca live, row actions, owner badge, stato commerciale e ordinamento forte.", tags: ["crm"] },
    { title: "Analytics compatta", text: "Dense, numeric align, summary e comparazione rapida tra KPI.", tags: ["analytics"] },
    { title: "Loading + empty state", text: "Il componente regge bene i passaggi tra pending, filtro stretto e zero risultati.", tags: ["state"] }
  ],
  accessibility: [
    { title: "Header chiari", text: "Le label di colonna devono restare semantiche, non solo decorative." },
    { title: "Azioni di riga leggibili", text: "Se una riga ha molte CTA, il copy dei bottoni deve spiegare la differenza." }
  ],
  gotchas: [
    { title: "Troppe colonne", text: "Se la riga esplode orizzontalmente, stai chiedendo alla tabella un livello di densita sbagliato." },
    { title: "Toolbar fuori componente", text: "Meglio usare i punti built-in invece di ricostruire attorno una shell parallela." },
    { title: "Custom render senza sorting coerente", text: "Quando mostri un formato custom, ricorda che `get` e sorting devono raccontare la stessa logica." }
  ]
};

export default tableDoc;
