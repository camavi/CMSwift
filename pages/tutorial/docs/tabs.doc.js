const tabsDoc = {
  name: "Tabs",
  title: "Tabs",
  status: "stable",
  tags: ["navigation", "switcher", "sectioning"],
  summary: "Sistema di tab per cambiare vista, sezione o focus operativo all'interno dello stesso contesto. Il suo valore non e solo cambiare pannello, ma mantenere orientamento, gerarchia e stato attivo coerenti.",
  signature: "_.Tabs(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "switch tra sezioni sorelle, dashboard workspace, queue operative, settings locali"
    },
    {
      label: "Avoid for",
      value: "navigazione globale primaria o contenuti troppo diversi che meritano route separate"
    },
    {
      label: "Mental model",
      value: "section switcher controllato da model, non router completo"
    }
  ],
  useWhen: [
    {
      title: "Le sezioni sono sorelle e condividono il contesto",
      text: "Overview, content, automation o profile, security, team: e il tipo di switch che Tabs gestisce bene."
    },
    {
      title: "Vuoi tenere contenuto e stato attivo sincronizzati",
      text: "Con `model` e tabs data-driven puoi pilotare pannelli esterni senza incastrare tutto dentro il componente."
    },
    {
      title: "Ti serve una barra di scelta leggibile ma densa",
      text: "Badge, note, icone e varianti rendono le tabs adatte anche a workspace ricchi."
    }
  ],
  avoidWhen: [
    {
      title: "Ogni sezione e quasi una pagina intera",
      text: "Se i pannelli hanno lifecycle indipendenti e URL propri, il router e la soluzione piu onesta."
    },
    {
      title: "Ci sono troppe tab concorrenti",
      text: "Quando il numero cresce troppo, la scansione peggiora e servono altre primitive di navigazione."
    },
    {
      title: "Stai simulando un menu o un breadcrumb",
      text: "Tabs funzionano per peer sections, non per navigazione gerarchica o contest menu."
    }
  ],
  essentialProps: [
    {
      name: "tabs",
      description: "Array che definisce value, label, note, icon, badge, disabled e altri elementi del tab."
    },
    {
      name: "model / value",
      description: "Gestisce la tab attiva e collega il componente al contenuto esterno o ai pannelli."
    },
    {
      name: "variant / orientation / fill / wrap / dense",
      description: "Determinano impronta visiva e comportamento del gruppo tab."
    },
    {
      name: "color",
      description: "Serve a dare gerarchia e tono alla selezione attiva senza cambiare pattern."
    },
    {
      name: "slots / onChange",
      description: "Permettono di personalizzare rendering e reagire al cambio di stato."
    }
  ],
  anatomy: [
    {
      title: "Tab rail",
      text: "La barra tabs e il layer di orientamento: deve restare scannabile e chiaramente selezionabile."
    },
    {
      title: "Active state",
      text: "Il tab attivo deve risultare evidente anche quando usi badge, note o icone."
    },
    {
      title: "Panel orchestration",
      text: "Il contenuto puo stare dentro o fuori dal componente, ma deve restare allineato al model attivo."
    }
  ],
  slots: [
    {
      title: "Tab rendering hooks",
      text: "Gli hook di rendering servono per badge, note e varianti piu ricche, ma senza rompere la grammatica tab."
    }
  ],
  patterns: [
    {
      title: "Workspace switcher",
      text: "Pattern forte per overview, content, automation e altre viste sorelle dentro la stessa shell.",
      tags: ["workspace"]
    },
    {
      title: "Settings tabs",
      text: "Ottimo per profile, security, team e aree di configurazione che condividono contesto.",
      tags: ["settings"]
    },
    {
      title: "Card header tabs",
      text: "Molto utile quando il cambio pannello riguarda solo una porzione della pagina e non l'intera route.",
      tags: ["embedded", "local navigation"]
    }
  ],
  accessibility: [
    {
      title: "Stato attivo sempre evidente",
      text: "Varianti e badge non devono compromettere la leggibilita del tab selezionato."
    },
    {
      title: "Disabled deve essere chiaro e giustificato",
      text: "Se una tab e disabilitata, meglio che il motivo sia intuibile dal contesto o dal copy."
    }
  ],
  gotchas: [
    {
      title: "Tabs non sostituiscono il router",
      text: "Se stai cercando persistenza URL, deep link e pagine indipendenti, serve un altro livello di navigazione."
    },
    {
      title: "Troppi badge rendono la barra rumorosa",
      text: "Note, icone, counter e chip vanno dosati o la lettura del tab label si perde."
    },
    {
      title: "Contenuto esterno richiede disciplina",
      text: "Se il panel non e dentro il componente, il team deve mantenere bene la relazione col model attivo."
    }
  ]
};

export default tabsDoc;
