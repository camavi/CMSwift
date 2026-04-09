const drawerDoc = {
  name: "Drawer",
  title: "Drawer",
  status: "stable",
  tags: ["navigation", "sidebar", "workspace"],
  summary: "Sidebar strutturata per navigazione applicativa, pannelli operativi e utility rail. Il suo valore non e solo mostrare una lista di voci, ma tenere insieme header, gruppi, item custom, empty state e persistenza di stato in una grammatica coerente.",
  signature: "_.Drawer(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "navigation rail, control room sidebar, utility panel, release cockpit"
    },
    {
      label: "Avoid for",
      value: "overlay contestuali brevi o layout dove il rail non ha un ruolo stabile"
    },
    {
      label: "Mental model",
      value: "sidebar operativa con struttura e stato, non lista arbitraria di nodi"
    }
  ],
  useWhen: [
    {
      title: "Hai un rail laterale stabile",
      text: "Drawer e il pattern giusto quando la sidebar fa parte del workspace e non e solo un menu temporaneo."
    },
    {
      title: "Vuoi mescolare navigazione e utility",
      text: "Gruppi, section, divider, item button e blocchi custom convivono bene nello stesso componente."
    },
    {
      title: "Ti serve un header e un footer reali",
      text: "Con eyebrow, title, meta, actions e footer puoi far evolvere il drawer da semplice nav a pannello operativo."
    }
  ],
  avoidWhen: [
    {
      title: "Ti serve un overlay ancorato a un trigger",
      text: "Per quello il pattern corretto e `Menu` o `Popover`, non una sidebar strutturale."
    },
    {
      title: "La lista e minima e non persistente",
      text: "Se il contenuto vive solo per un'azione rapida, drawer puo risultare troppo pesante."
    },
    {
      title: "Il contenuto e quasi una pagina intera",
      text: "Se il rail deve ospitare workflow molto lunghi o editor completi, probabilmente serve un altro layout."
    }
  ],
  essentialProps: [
    {
      name: "items",
      description: "Cuore del componente: supporta item normali, gruppi annidati, divider, section e nodi custom."
    },
    {
      name: "eyebrow / title / subtitle / icon / meta / actions / footer",
      description: "Trasformano la sidebar in un pannello strutturato e non in una semplice lista."
    },
    {
      name: "closeOnSelect / stateKey",
      description: "Leve pratiche per comportamento runtime e persistenza dello stato dei gruppi."
    },
    {
      name: "slots",
      description: "Permettono di ridefinire label di gruppo, item, note, empty e after blocks senza perdere il layout base."
    },
    {
      name: "groupOpenIcon / groupCloseIcon / empty",
      description: "Rifiniscono navigazione annidata e stati vuoti del drawer."
    }
  ],
  anatomy: [
    {
      title: "Header rail",
      text: "Eyebrow, title, meta e actions definiscono tono e ruolo della sidebar."
    },
    {
      title: "Items tree",
      text: "La lista puo essere piatta o annidata, ma deve restare scannabile e leggibile."
    },
    {
      title: "Utility footer",
      text: "Footer e slot `after` sono lo spazio giusto per CTA o blocchi di contesto secondari."
    }
  ],
  slots: [
    {
      title: "`groupLabel`, `itemLabel`, `itemNote`, `empty`, `after`",
      text: "Sono gli hook principali per specializzare il drawer mantenendo la sua struttura."
    }
  ],
  patterns: [
    {
      title: "App navigation drawer",
      text: "Sidebar classica con voci, gruppi e stato attivo persistente.",
      tags: ["navigation"]
    },
    {
      title: "Operations sidebar",
      text: "Molto utile per control room, backlog, audit e strumenti laterali di lavoro.",
      tags: ["ops", "workspace"]
    },
    {
      title: "Hybrid drawer",
      text: "Pattern forte quando vuoi unire menu, quick actions e blocchi custom nello stesso rail.",
      tags: ["hybrid", "utility"]
    }
  ],
  accessibility: [
    {
      title: "Gerarchia dei gruppi leggibile",
      text: "Se usi gruppi annidati e sezioni, la struttura deve restare comprensibile anche senza il solo colore."
    },
    {
      title: "Link e button vanno distinti bene",
      text: "Un item di navigazione e un'azione rapida non dovrebbero sembrare la stessa cosa se hanno effetti diversi."
    }
  ],
  gotchas: [
    {
      title: "Troppi blocchi custom possono rompere la sidebar",
      text: "Il drawer regge contenuti misti, ma non deve diventare una pagina compressa nel rail."
    },
    {
      title: "Gruppi troppo profondi rallentano la scansione",
      text: "Se l'albero cresce troppo, la navigazione perde chiarezza."
    },
    {
      title: "Rail operativo non vuol dire rail rumoroso",
      text: "Badge, chip, note e CTA vanno dosati o il drawer diventa visivamente stancante."
    }
  ]
};

export default drawerDoc;
