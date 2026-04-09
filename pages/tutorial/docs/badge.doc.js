const badgeDoc = {
  name: "Badge",
  title: "Badge",
  status: "stable",
  tags: ["micro-ui", "status", "notification"],
  summary: "Micro-componente per etichette compatte, conteggi, notifiche e piccoli stati visivi. Il suo valore non e solo aggiungere un pill colorato, ma condensare stato, numero o contesto in una forma minima e leggibile.",
  signature: "_.Badge(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "micro-stati, count, piccoli indicatori, tag visivi, notification token"
    },
    {
      label: "Avoid for",
      value: "copy piu lungo o casi in cui un chip o banner spiegherebbero meglio"
    },
    {
      label: "Mental model",
      value: "capsula minima per stato o conteggio"
    }
  ],
  useWhen: [
    {
      title: "Vuoi condensare un segnale in poco spazio",
      text: "Badge funziona quando devi dire molto con pochissimo: live, pending, hot, 9+, new."
    },
    {
      title: "Hai una notifica o un count da agganciare",
      text: "Le notification reattive sono uno dei casi piu naturali del componente."
    },
    {
      title: "Ti servono ancore iconografiche attorno a un label minimo",
      text: "Left/right e corner anchors aiutano a costruire micro-token piu espressivi."
    }
  ],
  avoidWhen: [
    {
      title: "Il contenuto ha bisogno di essere letto davvero",
      text: "Se il testo supera la logica di etichetta breve, chip o banner sono piu adatti."
    },
    {
      title: "La priorita del messaggio e alta",
      text: "Per warning veri o feedback di sistema il badge e spesso troppo leggero."
    },
    {
      title: "Lo stai usando per fare un mini-layout",
      text: "Se servono piu icone, piu righe e molto copy, il componente giusto e un altro."
    }
  ],
  essentialProps: [
    {
      name: "label / children",
      description: "Contenuto principale del badge: deve restare breve e scannabile."
    },
    {
      name: "notification",
      description: "Molto utile per count reattivi o segnali quantitativi."
    },
    {
      name: "color / outline / size",
      description: "Leve principali per tono e densita del micro-componente."
    },
    {
      name: "left / right / topLeft / topRight / bottomLeft / bottomRight",
      description: "Permettono di ancorare icone o segnali extra intorno al badge."
    },
    {
      name: "slots",
      description: "Servono quando il label o la notification devono essere renderizzati in modo piu controllato."
    }
  ],
  anatomy: [
    {
      title: "Core label",
      text: "Il testo o il contenuto principale e sempre la parte da leggere per prima."
    },
    {
      title: "Notification layer",
      text: "Il count aggiunge urgenza o volume senza occupare spazio extra nel layout."
    },
    {
      title: "Anchor points",
      text: "Le ancore laterali e ai corner rendono il badge piu espressivo senza farlo crescere troppo."
    }
  ],
  slots: [
    {
      title: "`label`, `notification` e ancore icona",
      text: "I punti giusti per customizzare il badge senza perdere la sua natura minima."
    }
  ],
  patterns: [
    {
      title: "Notification badge",
      text: "Perfetto per inbox, broadcast, download o release count.",
      tags: ["count"]
    },
    {
      title: "Status micro-tag",
      text: "Utile per piccoli segnali come live, preview, watch o hot.",
      tags: ["status"]
    },
    {
      title: "Reactive scene badge",
      text: "Con signal e slot puo reagire molto bene a scene o dashboard dense.",
      tags: ["reactive"]
    }
  ],
  accessibility: [
    {
      title: "Il significato non deve dipendere solo dal colore",
      text: "Se il badge comunica stato importante, il testo o il contesto devono sostenerlo."
    },
    {
      title: "Notification grandi vanno rese comprensibili",
      text: "9+, new o count dinamici devono restare chiari anche fuori dal puro colpo d'occhio."
    }
  ],
  gotchas: [
    {
      title: "Badge non e un chip piccolo",
      text: "Se lo carichi con troppo testo o troppi anchor, stai uscendo dal suo modello corretto."
    },
    {
      title: "Troppi badge nella stessa area fanno rumore",
      text: "Quando tutto ha un badge, niente emerge davvero."
    },
    {
      title: "Notification senza gerarchia peggiora la scansione",
      text: "Usa i count solo dove aggiungono davvero valore operativo."
    }
  ]
};

export default badgeDoc;
