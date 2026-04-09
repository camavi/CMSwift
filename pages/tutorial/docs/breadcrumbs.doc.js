const breadcrumbsDoc = {
  name: "Breadcrumbs",
  title: "Breadcrumbs",
  status: "stable",
  tags: ["navigation", "path", "wayfinding"],
  summary: "Navigazione di contesto per path gerarchici, workflow e drill-down applicativi. Il suo valore non e solo mostrare un percorso, ma tenere insieme ritorno ai livelli precedenti, step corrente, badge e meta senza creare un header improvvisato.",
  signature: "_.Breadcrumbs(props)",
  quickFacts: [
    {
      label: "Best for",
      value: "workspace gerarchici, docs, workflow multi-step, drill-down su ordini, asset o aree"
    },
    {
      label: "Avoid for",
      value: "navigazione principale del prodotto o path brevissimi senza vero contesto"
    },
    {
      label: "Mental model",
      value: "path navigabile con ultimo step corrente e varianti di presentazione"
    }
  ],
  useWhen: [
    {
      title: "L'utente deve capire da dove arriva",
      text: "Le breadcrumbs aiutano quando il contesto nasce da una gerarchia reale di spazi, sezioni o record."
    },
    {
      title: "Il path porta metadati utili",
      text: "Badge, note e icone funzionano bene quando ogni step racconta qualcosa oltre al semplice label."
    },
    {
      title: "Hai flussi lunghi che vanno compressi",
      text: "Con `max` e collapse automatico il componente regge bene anche path piu profondi."
    }
  ],
  avoidWhen: [
    {
      title: "Stai cercando una tab bar",
      text: "Se i livelli sono fratelli e non una gerarchia, usa `Tabs`, `RouteTab` o una nav dedicata."
    },
    {
      title: "I label non sono davvero navigabili",
      text: "Se nessuno step prima dell'ultimo e utile al ritorno, la breadcrumb perde gran parte del suo valore."
    },
    {
      title: "Il path e troppo rumoroso",
      text: "Se ogni item contiene troppe informazioni, finisci con un header secondario troppo denso."
    }
  ],
  essentialProps: [
    {
      name: "items / home",
      description: "Descrivono il path vero e l'eventuale punto d'ingresso principale."
    },
    {
      name: "label / icon / note / badge / aside / current",
      description: "Ogni item puo essere piu ricco di un semplice testo, ma senza perdere chiarezza."
    },
    {
      name: "variant / color / dense / wrap",
      description: "Servono per adattare la resa al tipo di header o pannello che lo ospita."
    },
    {
      name: "max / collapse",
      description: "Le leve piu importanti quando il percorso si allunga davvero."
    },
    {
      name: "slots.label / note / aside / separator",
      description: "Permettono di personalizzare il rendering senza buttare via il modello navigazionale."
    }
  ],
  anatomy: [
    {
      title: "Path chain",
      text: "Gli step precedenti spiegano il contesto; l'ultimo rappresenta il punto corrente."
    },
    {
      title: "Current step",
      text: "Deve restare visivamente distinguibile e non ambiguo rispetto agli step cliccabili."
    },
    {
      title: "Meta layer",
      text: "Badge, note e aside servono a dare contesto aggiuntivo solo quando aiutano la comprensione."
    }
  ],
  slots: [
    {
      title: "`label`, `note`, `aside`, `separator`",
      text: "Sono gli override giusti quando la breadcrumb deve prendere un tono piu editoriale o piu operativo."
    }
  ],
  patterns: [
    {
      title: "Order desk path",
      text: "Perfetto per passare da workspace a country fino al record corrente.",
      tags: ["ops"]
    },
    {
      title: "Docs trail",
      text: "Funziona bene nei cataloghi UI e nella documentazione tecnica con note e badge.",
      tags: ["docs"]
    },
    {
      title: "Collapsed long path",
      text: "Il pattern giusto per release workflow, asset tree o gerarchie profonde.",
      tags: ["long path"]
    }
  ],
  accessibility: [
    {
      title: "Ultimo step distinguibile",
      text: "Il current item non dovrebbe sembrare un link normale se rappresenta solo la posizione attuale."
    },
    {
      title: "Separatori leggibili ma non dominanti",
      text: "Devono aiutare a leggere il percorso, non rubare attenzione ai label."
    }
  ],
  gotchas: [
    {
      title: "Breadcrumbs usate come summary line",
      text: "Se stai mostrando stato, owner e KPI piu che un path, forse serve un header diverso."
    },
    {
      title: "Collapse senza priorita",
      text: "Quando il path si accorcia, assicurati che i livelli rimasti siano davvero quelli piu utili."
    },
    {
      title: "Troppe note e badge insieme",
      text: "Il componente regge contenuto ricco, ma se ogni step diventa un mini-card la leggibilita crolla."
    }
  ]
};

export default breadcrumbsDoc;
