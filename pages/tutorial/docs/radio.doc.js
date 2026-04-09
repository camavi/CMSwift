const radioDoc = {
  name: "Radio",
  title: "Radio",
  status: "stable",
  tags: ["form", "single choice", "exclusive selection"],
  summary: "Controllo per scelte mutualmente esclusive all'interno dello stesso gruppo. Il suo valore non e solo selezionare un valore, ma comunicare chiaramente che una scelta esclude tutte le altre.",
  signature: "_.Radio(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "single choice esplicita, SLA, canale, stato, strategia o preferenza unica"
    },
    {
      label: "Avoid for",
      value: "flag multipli indipendenti o casi in cui il gruppo ha troppe opzioni"
    },
    {
      label: "Mental model",
      value: "una scelta sola per gruppo, sempre visibile e comparabile"
    }
  ],
  useWhen: [
    {
      title: "L'utente deve scegliere una sola opzione",
      text: "Radio funziona bene quando le alternative sono poche, visibili e direttamente confrontabili."
    },
    {
      title: "Vuoi far capire l'esclusivita senza ambiguita",
      text: "A differenza di checkbox o select, radio rende evidente che selezionare una voce deseleziona le altre."
    },
    {
      title: "Le opzioni meritano visibilita costante",
      text: "Se il confronto tra scelte e importante, radio e piu chiaro di un dropdown nascosto."
    }
  ],
  avoidWhen: [
    {
      title: "Le scelte sono molte",
      text: "Con troppi item il gruppo diventa pesante e `Select` puo essere piu adatto."
    },
    {
      title: "Ogni opzione puo restare attiva da sola",
      text: "In quel caso il pattern corretto e `Checkbox`."
    },
    {
      title: "Vuoi rappresentare un interruttore di stato",
      text: "Per on/off di feature o setting globali, `Toggle` comunica meglio il significato."
    }
  ],
  essentialProps: [
    {
      name: "model / value",
      description: "Sono il cuore del controllo: il radio e selezionato quando il model corrisponde al suo value."
    },
    {
      name: "name",
      description: "Utile per gruppi coerenti e per allinearsi al comportamento atteso dei radio."
    },
    {
      name: "color / size",
      description: "Controllano tono e densita del gruppo rispetto al contesto."
    },
    {
      name: "icon / iconRight",
      description: "Possono arricchire la lettura del gruppo, ma senza sovrascrivere la chiarezza della scelta."
    },
    {
      name: "disabled / dense",
      description: "Leve pratiche per gruppi compatti o scelte temporaneamente non disponibili."
    }
  ],
  anatomy: [
    {
      title: "Exclusive choice control",
      text: "Il pallino radio e il segno visivo dell'esclusivita del gruppo."
    },
    {
      title: "Group context",
      text: "Un radio ha senso pieno solo come parte di un gruppo di alternative sorelle."
    },
    {
      title: "Visible comparison",
      text: "Il pattern funziona bene quando il confronto tra opzioni deve essere immediato."
    }
  ],
  slots: [
    {
      title: "Children / label content",
      text: "La label puo essere leggermente arricchita, ma ogni opzione deve restare leggibile in pochi secondi."
    }
  ],
  patterns: [
    {
      title: "Policy / strategy choice",
      text: "Ottimo per scegliere una strategia tra alternative nette e limitate.",
      tags: ["single choice"]
    },
    {
      title: "Settings groups",
      text: "Molto utile quando l'utente deve selezionare un solo canale, un solo piano o un solo modo operativo.",
      tags: ["settings"]
    },
    {
      title: "Operational SLA selection",
      text: "Pattern forte nei workflow dove una scelta unica cambia il comportamento del sistema.",
      tags: ["ops"]
    }
  ],
  accessibility: [
    {
      title: "Il gruppo deve essere percepibile come gruppo",
      text: "Le opzioni devono apparire chiaramente collegate, non come radio isolati dispersi nel layout."
    },
    {
      title: "Le label devono distinguere bene le alternative",
      text: "Se le differenze tra voci non sono chiare, anche il pattern radio perde valore."
    }
  ],
  gotchas: [
    {
      title: "Radio isolato spesso e un odore di design",
      text: "Se esiste una sola opzione, probabilmente non ti serve un radio."
    },
    {
      title: "Troppe opzioni riducono leggibilita",
      text: "Quando il gruppo cresce troppo, il confronto smette di essere davvero immediato."
    },
    {
      title: "Decorazione eccessiva puo nascondere l'esclusivita",
      text: "Glow, glossy e gradient vanno dosati per non indebolire il significato del pattern."
    }
  ]
};

export default radioDoc;
