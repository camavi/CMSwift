const checkboxDoc = {
  name: "Checkbox",
  title: "Checkbox",
  status: "stable",
  tags: ["form", "boolean", "multi-select"],
  summary: "Controllo booleano per flag indipendenti, preferenze multiple e selezioni non esclusive. Il suo valore non e solo spuntare una casella, ma rendere esplicito che ogni opzione puo vivere indipendentemente dalle altre.",
  signature: "_.Checkbox(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "flag indipendenti, permessi, filtri multipli, checklist operative"
    },
    {
      label: "Avoid for",
      value: "scelte esclusive tra opzioni o toggle on/off che devono sembrare switch di stato"
    },
    {
      label: "Mental model",
      value: "opzione autonoma che puo essere vera o falsa senza influenzare le altre"
    }
  ],
  useWhen: [
    {
      title: "Ogni scelta e indipendente",
      text: "Checkbox e il pattern corretto quando l'utente puo attivare piu opzioni insieme senza gerarchie esclusive."
    },
    {
      title: "Vuoi un legame chiaro tra label e stato",
      text: "Per consensi, feature flag, filtri e checklist il pattern checkbox resta immediato e familiare."
    },
    {
      title: "Ti serve uno stato leggibile anche in liste dense",
      text: "Il componente regge bene sia in form normali sia in pannelli operativi e blocchi piu compatti."
    }
  ],
  avoidWhen: [
    {
      title: "L'utente deve scegliere una sola opzione",
      text: "In quel caso `Radio` comunica meglio l'esclusivita."
    },
    {
      title: "Il controllo rappresenta un interruttore di sistema",
      text: "Se vuoi enfatizzare on/off di una funzione o setting, `Toggle` e spesso piu naturale."
    },
    {
      title: "La UI e troppo decorativa rispetto al significato",
      text: "Outline, glow e gradient esistono, ma non devono nascondere che resta una checkbox."
    }
  ],
  essentialProps: [
    {
      name: "model / checked",
      description: "Gestiscono lo stato booleano del controllo in modo reattivo o iniziale."
    },
    {
      name: "color / size",
      description: "Determinano tono e densita del controllo rispetto al contesto."
    },
    {
      name: "icon / iconRight",
      description: "Aggiungono supporto visivo quando il dominio lo richiede, ma senza sostituire la label."
    },
    {
      name: "disabled / dense",
      description: "Sono le leve pratiche piu utili nei form o nelle liste operative."
    },
    {
      name: "outline / shadow / glossy / glow / glass / gradient / textGradient",
      description: "Varianti visuali disponibili, da usare con disciplina e non come combinazione casuale."
    }
  ],
  anatomy: [
    {
      title: "Check control",
      text: "La casella visualizza lo stato e deve restare riconoscibile anche con temi piu ricchi."
    },
    {
      title: "Label pairing",
      text: "La forza del pattern sta nell'accoppiata diretta tra testo e stato booleano."
    },
    {
      title: "Independent state model",
      text: "Ogni checkbox e autonoma: il modello mentale e diverso da radio group o toggle di sistema."
    }
  ],
  slots: [
    {
      title: "Children / label content",
      text: "La label puo contenere testo o contenuto leggermente piu ricco, ma la lettura deve restare immediata."
    }
  ],
  patterns: [
    {
      title: "Checklist operativa",
      text: "Perfetta per task indipendenti, review step o controlli da marcare uno per uno.",
      tags: ["checklist", "ops"]
    },
    {
      title: "Filter cluster",
      text: "Molto utile per attivare piu filtri insieme senza forzare l'utente a entrare in menu piu pesanti.",
      tags: ["filters"]
    },
    {
      title: "Feature flags / permissions",
      text: "Pattern forte quando ogni voce e un interruttore autonomo ma non serve l'estetica di un toggle.",
      tags: ["settings", "permissions"]
    }
  ],
  accessibility: [
    {
      title: "Label chiara e vicina",
      text: "La label deve spiegare bene cosa succede quando il flag e attivo, non solo nominare un dominio vago."
    },
    {
      title: "Disabled usato con criterio",
      text: "Se una checkbox e disabilitata, il motivo dovrebbe essere intuibile dal contesto o dal copy."
    }
  ],
  gotchas: [
    {
      title: "Non usare checkbox per scelte esclusive",
      text: "Se solo una voce puo essere selezionata, l'utente si aspetta un radio group."
    },
    {
      title: "Troppe varianti stilistiche possono confondere",
      text: "Quando il controllo diventa troppo decorativo, si indebolisce la leggibilita del suo stato."
    },
    {
      title: "Label vaghe rendono il flag ambiguo",
      text: "Una buona checkbox dovrebbe far capire immediatamente il significato del valore true."
    }
  ]
};

export default checkboxDoc;
