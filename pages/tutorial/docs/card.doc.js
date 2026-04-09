const cardDoc = {
  name: "Card",
  title: "Card",
  status: "stable",
  tags: ["layout", "content block", "summary"],
  summary: "Contenitore editoriale e operativo per blocchi di contenuto, summary dashboard, listing visuali e pannelli composabili. Il suo valore e standardizzare struttura, ritmo e azioni senza costringere ogni pagina a reinventare header, body e footer.",
  signature: "_.Card(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "summary panel, listing card, blocchi dashboard, pannelli azione, card visuali con CTA"
    },
    {
      label: "Avoid for",
      value: "layout di pagina intera, contenitori invisibili o pattern che non hanno una vera superficie card"
    },
    {
      label: "Mental model",
      value: "contenitore strutturato con grammatica editoriale e operativa"
    }
  ],
  useWhen: [
    {
      title: "Vuoi standardizzare blocchi di contenuto",
      text: "Title, subtitle, aside, footer e actions ti danno una struttura consistente tra dashboard e pagine editoriali."
    },
    {
      title: "Hai bisogno di CTA attaccate al contenuto",
      text: "Le card funzionano bene quando azioni e contesto vivono nello stesso blocco."
    },
    {
      title: "Serve scegliere tra API dichiarativa e composizione libera",
      text: "Puoi usare props come `title/footer/actions` oppure costruire il tutto con `cardHeader`, `cardBody`, `cardFooter`."
    }
  ],
  avoidWhen: [
    {
      title: "Ti serve solo spacing neutro",
      text: "Se vuoi un wrapper senza gerarchia visiva, un div, `Page` o `Container` possono essere piu onesti."
    },
    {
      title: "Il contenuto e gia una pagina completa",
      text: "Non usare card per impacchettare intere viste che dovrebbero avere layout proprio."
    },
    {
      title: "La superficie visiva non serve davvero",
      text: "Se il design non richiede una unit visiva separata, la card puo aggiungere rumore."
    }
  ],
  essentialProps: [
    {
      name: "title / subtitle / eyebrow / icon / aside",
      description: "Sono la grammatica base dell'header dichiarativo."
    },
    {
      name: "identifier / cover / media / image / coverHeight",
      description: "Gestiscono badge e superfici visuali quando la card deve diventare piu narrativa o da listing."
    },
    {
      name: "footer / actions / body",
      description: "Ti permettono di tenere CTA, metadata e contenuto principale nello stesso contratto."
    },
    {
      name: "slots",
      description: "Aprono override puntuali senza perdere la struttura complessiva del componente."
    },
    {
      name: "dense / flat / clickable / to / bodyClass / headerClass / footerClass",
      description: "Adattano densita, interazione e rifinitura del layout."
    }
  ],
  anatomy: [
    {
      title: "Header grammar",
      text: "Eyebrow, title, subtitle, icon, identifier e aside definiscono il ritmo della card prima del contenuto."
    },
    {
      title: "Body stage",
      text: "Il corpo puo ospitare testo, liste, form o blocchi piu densi, ma sempre come parte della stessa unita."
    },
    {
      title: "Action/footer rail",
      text: "Footer e actions danno chiusura al blocco senza spargere decisioni operative altrove."
    }
  ],
  slots: [
    {
      title: "`identifier`, `title`, `subtitle`, `aside`, `actions`",
      text: "Sono gli override piu utili quando vuoi cambiare il rendering dell'header senza abbandonare la card."
    },
    {
      title: "`default`",
      text: "Resta il canale principale per il body della card, soprattutto nei casi compositivi."
    }
  ],
  patterns: [
    {
      title: "Summary card",
      text: "Titolo, metrica laterale, footer e due CTA: e il pattern piu forte per dashboard e overviews.",
      tags: ["dashboard", "summary"]
    },
    {
      title: "Visual listing card",
      text: "Cover o media forti sopra, meta e azioni sotto: ideale per travel, cataloghi, real estate e content blocks.",
      tags: ["cover", "listing"]
    },
    {
      title: "Composed workflow card",
      text: "Con `cardHeader/cardBody/cardFooter` il componente regge anche workflow operativi e moduli interni.",
      tags: ["composition"]
    }
  ],
  accessibility: [
    {
      title: "Clickability va dichiarata bene",
      text: "Se tutta la card e cliccabile, il focus e la semantica devono risultare evidenti, non solo lo stile hover."
    },
    {
      title: "Gerarchia testuale netta",
      text: "Title, subtitle e metadata devono restare riconoscibili anche quando la card diventa densa."
    }
  ],
  gotchas: [
    {
      title: "Troppi elementi nell'header lo rendono rumoroso",
      text: "Badge, icone, aside e CTA vanno dosati: l'header deve aprire il contenuto, non competere con lui."
    },
    {
      title: "Card cliccabile e bottoni interni richiedono disciplina",
      text: "Quando l'intera superficie naviga e dentro hai azioni secondarie, la UX puo diventare ambigua."
    },
    {
      title: "Cover forte non sostituisce il contenuto",
      text: "Una hero visuale bella ma senza titolo, meta o CTA chiari rende la card scenografica ma debole."
    }
  ]
};

export default cardDoc;
