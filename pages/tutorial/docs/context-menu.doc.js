const contextMenuDoc = {
  name: "ContextMenu",
  title: "ContextMenu",
  status: "stable",
  tags: ["overlay", "menu", "right click"],
  summary: "Menu contestuale per right click e pannelli azione legati a un elemento o a una posizione precisa. Il suo valore non e solo aprire una lista di voci, ma portare operazioni locali, contenuto custom e bind diretto a surface reali.",
  signature: "_.ContextMenu(props) | _.ContextMenu(props, ...children) -> { open, openAt, openFromEvent, show, hide, close, toggle, update, bind, isOpen }",
  quickFacts: [
    {
      label: "Best for",
      value: "file explorer, card di riga, canvas editor, azioni contestuali su stage e widget"
    },
    {
      label: "Avoid for",
      value: "navigazione principale o menu che devono restare sempre visibili"
    },
    {
      label: "Mental model",
      value: "pannello contestuale aperto su evento o coordinate, con menu items o contenuto custom"
    }
  ],
  useWhen: [
    {
      title: "Hai azioni legate a un elemento preciso",
      text: "Il context menu e forte quando il set di azioni dipende chiaramente da card, asset, riga o area cliccata."
    },
    {
      title: "Vuoi aprire il menu da right click senza wiring pesante",
      text: "Con `bind(el)` o `openFromEvent(event)` porti un pattern desktop-like in modo pulito."
    },
    {
      title: "Ti serve contenuto contestuale piu ricco di un menu semplice",
      text: "Content custom e footer permettono micro-configurazioni o pannelli azione senza passare a dialog."
    }
  ],
  avoidWhen: [
    {
      title: "Le azioni devono essere sempre visibili",
      text: "Se l'utente non dovrebbe scoprire le azioni via right click, meglio toolbar, menu o buttons espliciti."
    },
    {
      title: "Il pannello diventa un form complesso",
      text: "Quando il contenuto cresce troppo, un popover o dialog sono piu onesti."
    },
    {
      title: "Stai usando il context menu come nav globale",
      text: "Il suo ruolo e locale e contestuale, non sostituisce la navigazione principale."
    }
  ],
  essentialProps: [
    {
      name: "items",
      description: "Fast path per voci standard con label, subtitle, icon, shortcut, badge, divider e callback."
    },
    {
      name: "title / subtitle / eyebrow / status",
      description: "Danno al pannello un contesto piu leggibile quando il menu va oltre la sola lista di azioni."
    },
    {
      name: "content / footer",
      description: "Sono le leve giuste per scenari piu ricchi come configurazioni o pannelli contestuali."
    },
    {
      name: "width / size / state / placement / closeOnSelect",
      description: "Controllano tono, dimensione e comportamento del menu."
    },
    {
      name: "runtime API",
      description: "`bind`, `open`, `openAt`, `openFromEvent`, `update`, `close`, `isOpen` coprono i casi reali."
    }
  ],
  anatomy: [
    {
      title: "Anchor or point",
      text: "Il menu nasce sempre da un elemento o da coordinate specifiche del pointer."
    },
    {
      title: "Action list",
      text: "Le items sono il cuore del menu e dovrebbero restare concise, locali e comprensibili."
    },
    {
      title: "Rich content layer",
      text: "Quando serve, title, content e footer trasformano il menu in un pannello contestuale leggero."
    }
  ],
  slots: [
    {
      title: "`content`, `footer`",
      text: "Sono i due punti principali quando il menu deve diventare piu ricco del solo elenco azioni."
    }
  ],
  patterns: [
    {
      title: "Explorer menu",
      text: "Ideale per asset, file e documenti con open, copy, review e archive.",
      tags: ["files"]
    },
    {
      title: "Row context menu",
      text: "Molto utile su card o righe operative per azioni rapide senza gonfiare la UI principale.",
      tags: ["rows"]
    },
    {
      title: "Custom layout menu",
      text: "Il pattern giusto quando il menu deve ospitare radio, checkbox o piccole configurazioni.",
      tags: ["custom content"]
    }
  ],
  accessibility: [
    {
      title: "Scoperta delle azioni",
      text: "Se il right click e fondamentale, considera anche una via esplicita alternativa per chi non lo usa."
    },
    {
      title: "Contesto evidente",
      text: "Titolo, subtitle o stato dovrebbero spiegare chiaramente su cosa il menu sta agendo."
    }
  ],
  gotchas: [
    {
      title: "Troppo contenuto nel menu",
      text: "Se il pannello inizia a sembrare un inspector o un form, stai forzando il pattern."
    },
    {
      title: "CloseOnSelect usato alla cieca",
      text: "Su menu con toggle, radio o checkbox puo chiudere troppo presto e spezzare il flusso."
    },
    {
      title: "Context menu senza target chiaro",
      text: "Quando il punto di apertura non e evidente, l'utente perde il legame con l'azione."
    }
  ]
};

export default contextMenuDoc;
