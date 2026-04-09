const popoverDoc = {
  name: "Popover",
  title: "Popover",
  status: "stable",
  tags: ["overlay", "anchored panel", "context action"],
  summary: "Overlay ancorato per pannelli contestuali piu ricchi di un tooltip ma piu leggeri di un dialog. Il suo valore e dare spazio a decisioni, micro-workflow e contenuti utili restando attaccato al punto che li ha generati.",
  signature: "_.Popover(props?)",
  quickFacts: [
    {
      label: "Best for",
      value: "azioni contestuali, assign panel, filtri rapidi, scenari di conferma locale"
    },
    {
      label: "Avoid for",
      value: "microcopy brevissimo o flussi che devono bloccare davvero l'interfaccia"
    },
    {
      label: "Mental model",
      value: "pannello ancorato a un trigger con struttura e azioni"
    }
  ],
  useWhen: [
    {
      title: "Hai bisogno di un layer contestuale piu ricco del tooltip",
      text: "Quando oltre alla spiegazione servono CTA, elenco o contenuto strutturato, popover e il passo naturale."
    },
    {
      title: "Vuoi restare vicino al trigger",
      text: "Popover funziona bene quando il pannello deve restare chiaramente collegato al bottone o all'elemento sorgente."
    },
    {
      title: "Ti serve un mini-workflow leggero",
      text: "Assign owner, filtri rapidi, scenario actions e review veloci sono casi molto adatti."
    }
  ],
  avoidWhen: [
    {
      title: "Basta un testo breve",
      text: "Per semplice microcopy il pattern giusto resta `Tooltip`."
    },
    {
      title: "Il contenuto deve bloccare la pagina",
      text: "Se la decisione e critica o lunga, il dialog e piu onesto."
    },
    {
      title: "Il pannello cresce troppo",
      text: "Quando il popover inizia a contenere troppi controlli o molto testo, stai forzando il pattern."
    }
  ],
  essentialProps: [
    {
      name: "eyebrow / title / subtitle / icon / content / actions",
      description: "Sono la grammatica base del pannello ancorato."
    },
    {
      name: "placement / size / state",
      description: "Definiscono posizione, impronta visiva e tono del popover."
    },
    {
      name: "closeButton / closeOnSelect / trigger",
      description: "Leve chiave per UX e comportamento del layer."
    },
    {
      name: "slots",
      description: "Permettono di customizzare header, content e footer in modo piu flessibile."
    },
    {
      name: "runtime API",
      description: "`open(anchor, overrides)`, `close()`, `toggle(anchor)`, `update(props)` per scenari piu dinamici."
    }
  ],
  anatomy: [
    {
      title: "Anchor relation",
      text: "Il pannello vive sempre in relazione a un trigger preciso e questo legame deve restare chiaro."
    },
    {
      title: "Panel structure",
      text: "Header, content e actions danno una grammatica piu ricca del menu ma piu compatta del dialog."
    },
    {
      title: "Decision surface",
      text: "Il popover e forte quando porta l'utente a una piccola decisione o configurazione locale."
    }
  ],
  slots: [
    {
      title: "`header`, `content`, `footer`",
      text: "Sono gli override principali per costruire pannelli contestuali senza perdere il comportamento base."
    }
  ],
  patterns: [
    {
      title: "Action popover",
      text: "Perfetto per release actions o conferme locali vicino al bottone che le genera.",
      tags: ["actions"]
    },
    {
      title: "Assignment / routing panel",
      text: "Molto utile per scegliere owner, team o percorso operativo senza uscire dal contesto.",
      tags: ["routing", "owner"]
    },
    {
      title: "Filter popover",
      text: "Buono per pannelli filtro brevi e contestuali alla vista corrente.",
      tags: ["filters"]
    }
  ],
  accessibility: [
    {
      title: "Trigger e close path chiari",
      text: "Se il popover ha azioni o contenuto ricco, il modo di aprirlo e chiuderlo deve restare evidente."
    },
    {
      title: "Il pannello deve restare leggibile e vicino al contesto",
      text: "Placement e dimensione dovrebbero aiutare la comprensione, non far perdere il punto di partenza."
    }
  ],
  gotchas: [
    {
      title: "Popover non e un dialog tascabile",
      text: "Se il contenuto cresce troppo, l'utente perde chiarezza su ruolo e aspettative del layer."
    },
    {
      title: "Troppa variabilita dei trigger puo confondere",
      text: "Se ogni popover del prodotto si apre e si comporta in modo diverso, la UI diventa incoerente."
    },
    {
      title: "CloseOnSelect va usato con intenzione",
      text: "In alcuni casi accelera, in altri chiude troppo presto e interrompe il flusso."
    }
  ]
};

export default popoverDoc;
