const itemDoc = {
  name: "Item",
  title: "Item",
  status: "stable",
  tags: ["content", "row", "structured item"],
  summary: "Riga strutturata per liste, queue e pannelli operativi. Il suo valore non e solo sostituire `<li>`, ma dare una grammatica ordinata a icon, title, subtitle, meta, aside, actions e stato interattivo.",
  signature: "_.Item(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "queue operative, people rows, checklist ricche, feed strutturati"
    },
    {
      label: "Avoid for",
      value: "righe tabellari o card troppo dense e autonome"
    },
    {
      label: "Mental model",
      value: "singola riga informativa o operativa dentro una collezione"
    }
  ],
  useWhen: [
    {
      title: "La riga ha piu di un semplice testo",
      text: "Quando ci sono media, meta, aside o azioni, Item evita molto markup sparso."
    },
    {
      title: "Vuoi righe cliccabili o attive",
      text: "Item regge bene anche casi di navigazione locale o selezione evidenziata."
    },
    {
      title: "Vuoi restare nello stesso sistema visivo della list",
      text: "E il companion naturale di `List`, ma puo vivere anche da solo in altri contenitori."
    }
  ],
  avoidWhen: [
    {
      title: "La riga e quasi una card autonoma",
      text: "Se la surface e molto forte e il contenuto molto ricco, forse una Card racconta meglio l'elemento."
    },
    {
      title: "Il contenuto e solo testuale e minimale",
      text: "Per casi poveri puoi anche usare una list semplice senza tutto il modello strutturato."
    },
    {
      title: "Hai bisogno di confronto tra colonne",
      text: "In quel caso la tabella comunica meglio il layout dati."
    }
  ],
  essentialProps: [
    {
      name: "label oppure children",
      description: "Per il caso minimale da elenco semplice."
    },
    {
      name: "icon / title / subtitle / meta / body / aside / actions",
      description: "La grammatica base della riga strutturata."
    },
    {
      name: "clickable / to / active / disabled",
      description: "Leve per navigazione locale o stato interattivo."
    },
    {
      name: "color / outline / shadow / glass / gradient / size",
      description: "Varianti visuali per allinearsi al tono del contesto."
    }
  ],
  anatomy: [
    {
      title: "Leading media",
      text: "Icona, avatar o altro elemento guida aiutano a riconoscere rapidamente la riga."
    },
    {
      title: "Content stack",
      text: "Title, subtitle, meta e body costruiscono il contenuto principale della riga."
    },
    {
      title: "Trailing zone",
      text: "Aside e actions sono lo spazio giusto per stato, navigazione o CTA secondarie."
    }
  ],
  slots: [
    {
      title: "`icon`, `title`, `subtitle`, `meta`, `body`, `aside`, `actions`, `default`",
      text: "Ti permettono di adattare la riga senza perdere la sua struttura."
    }
  ],
  patterns: [
    {
      title: "Operational row",
      text: "Perfetta per task, ticket, release e record da consultare velocemente.",
      tags: ["ops"]
    },
    {
      title: "Clickable person or owner row",
      text: "Molto utile per team list, owner routing e navigazione locale.",
      tags: ["people", "clickable"]
    },
    {
      title: "Stateful message row",
      text: "Con color, icon e subtitle puo raccontare bene stato, rischio o avanzamento.",
      tags: ["state"]
    }
  ],
  accessibility: [
    {
      title: "Se la riga e cliccabile, deve sembrare cliccabile",
      text: "Lo stato attivo e la affordance non possono dipendere da un dettaglio visivo troppo debole."
    },
    {
      title: "Le azioni devono restare distinguibili dal contenuto",
      text: "Quando aside o actions sono presenti, l'utente deve capire subito cosa e informazione e cosa e comando."
    }
  ],
  gotchas: [
    {
      title: "Troppe zone piene rendono la riga rumorosa",
      text: "Icon, meta, aside, actions e body vanno usati con misura o la scansione peggiora."
    },
    {
      title: "Item cliccabile e azioni interne richiedono chiarezza",
      text: "Quando tutta la riga naviga ma ci sono anche bottoni interni, la UX puo diventare ambigua."
    },
    {
      title: "Non tutte le righe devono usare tutte le props",
      text: "Il componente e flessibile, ma la miglior riga e spesso quella con pochi segnali ben scelti."
    }
  ]
};

export default itemDoc;
