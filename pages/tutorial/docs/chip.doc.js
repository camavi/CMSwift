const chipDoc = {
  name: "Chip",
  title: "Chip",
  status: "stable",
  tags: ["micro-ui", "tag", "state"],
  summary: "Capsula compatta per tag, filtri, micro-stati e affordance leggere. Il suo valore e stare a meta tra badge e button: abbastanza piccolo per non pesare, abbastanza forte per restare azionabile o descrittivo.",
  signature: "_.Chip(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "tag, filter pills, micro-stati, affordance leggere, metadata compatti"
    },
    {
      label: "Avoid for",
      value: "cta principali o messaggi che richiedono spiegazione piu lunga"
    },
    {
      label: "Mental model",
      value: "pill compatta che puo essere descrittiva o cliccabile"
    }
  ],
  useWhen: [
    {
      title: "Hai bisogno di un token piu forte del badge",
      text: "Chip e utile quando serve un po piu di presenza, clickability o testo leggibile."
    },
    {
      title: "Vuoi filtri o tag rapidi",
      text: "Per stati, tag di dominio e filtri visuali il componente funziona molto bene."
    },
    {
      title: "Ti serve anche una versione removibile",
      text: "Il pattern e adatto anche a chips chiudibili o selezionabili."
    }
  ],
  avoidWhen: [
    {
      title: "L'azione e davvero primaria",
      text: "Se l'utente deve prendere una decisione principale, `Btn` resta la scelta corretta."
    },
    {
      title: "Il contenuto e troppo lungo",
      text: "Quando il testo smette di essere compatto, il chip perde efficacia."
    },
    {
      title: "Stai usando il chip come contenitore generico",
      text: "Se il layout interno cresce troppo, il componente perde il suo valore di pill semplice."
    }
  ],
  essentialProps: [
    {
      name: "color / state / size",
      description: "Leve base per tono e presenza visiva del chip."
    },
    {
      name: "icon / iconRight",
      description: "Aggiungono contesto o affordance senza dover costruire wrapper custom."
    },
    {
      name: "clickable / removable",
      description: "Definiscono se il chip e solo descrittivo o anche interattivo."
    },
    {
      name: "outline / shadow / glossy / glow / glass / gradient / textGradient",
      description: "Varianti stilistiche disponibili per adattarlo a contesti diversi."
    }
  ],
  anatomy: [
    {
      title: "Pill body",
      text: "La capsula deve restare compatta, leggibile e coerente con gli altri token del sistema."
    },
    {
      title: "Icon support",
      text: "Le icone aiutano a dare contesto o affordance senza allungare troppo il testo."
    },
    {
      title: "Interaction layer",
      text: "Clickable e removable cambiano il ruolo del chip e vanno usati con intenzione."
    }
  ],
  slots: [
    {
      title: "Children",
      text: "Il contenuto puo essere flessibile, ma il chip funziona meglio con label corte e molto scannabili."
    }
  ],
  patterns: [
    {
      title: "Filter chip",
      text: "Pattern forte per filtri, facets e segmenti rapidi in dashboard o search UI.",
      tags: ["filters"]
    },
    {
      title: "Metadata chip",
      text: "Ottimo per owner, stato, lane o dominio dentro card e header.",
      tags: ["metadata"]
    },
    {
      title: "Removable token",
      text: "Molto utile per tag selezionati, valori attivi o scelte da poter rimuovere.",
      tags: ["removable"]
    }
  ],
  accessibility: [
    {
      title: "Clickable deve sembrare davvero cliccabile",
      text: "Se il chip agisce come controllo, la affordance non puo essere debole o ambigua."
    },
    {
      title: "Il testo deve restare leggibile",
      text: "Colori e stili decorativi non devono compromettere la comprensione rapida del label."
    }
  ],
  gotchas: [
    {
      title: "Chip non sostituisce button e badge insieme",
      text: "Se provi a usarlo per tutto, il sistema perde gerarchia tra token e CTA."
    },
    {
      title: "Troppi stili speciali indeboliscono il pattern",
      text: "Glow, glossy e gradient sono utili, ma non dovrebbero diventare la norma."
    },
    {
      title: "Removable richiede intenzione chiara",
      text: "L'utente deve capire subito se il chip e solo informativo o se puo essere rimosso."
    }
  ]
};

export default chipDoc;
