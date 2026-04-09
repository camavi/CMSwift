const paginationDoc = {
  name: "Pagination",
  title: "Pagination",
  status: "stable",
  tags: ["navigation", "data browsing", "lists"],
  summary: "Componente standard per navigare dataset paginati, flow a step e liste che non devono vivere tutte insieme sullo schermo. Il suo valore e tenere in ordine pagina corrente, summary e controlli senza reinventare la logica ogni volta.",
  signature: "_.Pagination(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "cataloghi, ordini, audit list, queue moderate e step flow compatti"
    },
    {
      label: "Avoid for",
      value: "liste minuscole, infinite feed o casi dove il caricamento progressivo e migliore della paginazione classica"
    },
    {
      label: "Mental model",
      value: "controller di pagina e range, non semplice fila di numeri"
    }
  ],
  useWhen: [
    {
      title: "Hai un dataset suddivisibile in pagine chiare",
      text: "Cataloghi, ordini e review list sono casi in cui la paginazione mantiene il contesto leggibile."
    },
    {
      title: "Vuoi controllare pagina e summary dallo stesso punto",
      text: "Total, pageSize, summary e slots riducono molto il markup duplicato nelle viste dati."
    },
    {
      title: "Ti serve anche un flow compatto",
      text: "Con `simple`, `dense` e summary puoi usare lo stesso componente anche per step o wizard leggeri."
    }
  ],
  avoidWhen: [
    {
      title: "L'elenco e troppo corto",
      text: "Se ci sono poche righe o poche card, la paginazione aggiunge attrito inutile."
    },
    {
      title: "L'esperienza e feed-like",
      text: "Per stream, activity feed o contenuti esplorativi spesso infinite scroll o load more funzionano meglio."
    },
    {
      title: "Le pagine non sono davvero significative",
      text: "Se l'utente non guadagna orientamento dalla nozione di pagina, forse serve un altro pattern."
    }
  ],
  essentialProps: [
    {
      name: "max oppure total + pageSize",
      description: "Definiscono il numero di pagine disponibili: una delle due strade va scelta chiaramente."
    },
    {
      name: "model / page / value",
      description: "Gestiscono la pagina corrente in modo controllato o iniziale."
    },
    {
      name: "showPages / showEdges / showSummary / showFirst / showLast",
      description: "Controllano la densita e il tipo di navigazione mostrata."
    },
    {
      name: "siblings / boundaryCount",
      description: "Determinano quanti numeri mostrare attorno alla pagina attiva e agli estremi."
    },
    {
      name: "slots + onChange",
      description: "Permettono di personalizzare controlli, summary e range senza abbandonare il contratto standard."
    }
  ],
  anatomy: [
    {
      title: "Current page state",
      text: "Il cuore del componente e sempre la pagina attiva e il suo contesto dentro il totale."
    },
    {
      title: "Navigation controls",
      text: "First, prev, page numbers, ellipsis, next e last formano il layer operativo."
    },
    {
      title: "Summary layer",
      text: "Quando usi total e pageSize, la summary aiuta l'utente a capire cosa sta vedendo davvero."
    }
  ],
  slots: [
    {
      title: "`start`, `end`, `first`, `prev`, `page`, `ellipsis`, `next`, `last`, `summary`",
      text: "Aprono una personalizzazione controllata del componente senza dover riscrivere tutta la paginazione."
    }
  ],
  patterns: [
    {
      title: "Data list pagination",
      text: "Pattern classico per list e table con total e range espliciti.",
      tags: ["data", "list"]
    },
    {
      title: "Compact step flow",
      text: "Molto utile per onboarding o step locali dove non serve una wizard completa.",
      tags: ["simple", "steps"]
    },
    {
      title: "Branded summary pagination",
      text: "Con gli slots puoi adattare copy e controlli al lessico del dominio senza perdere consistenza.",
      tags: ["slots", "summary"]
    }
  ],
  accessibility: [
    {
      title: "La pagina attiva deve risultare evidente",
      text: "Se personalizzi i numeri o i controlli, mantieni sempre un'indicazione chiara dello stato corrente."
    },
    {
      title: "Prev/next non devono diventare ambigui",
      text: "Label custom e summary devono restare comprensibili anche a chi non vede solo il layout."
    }
  ],
  gotchas: [
    {
      title: "Simple mode non e universale",
      text: "Su dataset veri e lunghi, la modalita piu compatta puo togliere troppo orientamento."
    },
    {
      title: "Total e pageSize devono restare allineati ai dati reali",
      text: "Se il range mostrato non corrisponde ai contenuti, la fiducia dell'utente cala subito."
    },
    {
      title: "Troppa personalizzazione puo nascondere il pattern",
      text: "Gli slots sono utili, ma la paginazione deve continuare a sembrare una paginazione."
    }
  ]
};

export default paginationDoc;
