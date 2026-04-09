const ratingDoc = {
  name: "Rating",
  title: "Rating",
  status: "stable",
  tags: ["input", "feedback", "review"],
  summary: "Controllo di rating reattivo per review, score e preferenze con supporto a half step, clear, readonly e slot completi. Il suo valore non e solo mostrare stelle, ma offrire un input coerente per valutazioni numeriche e qualitative.",
  signature: "_.Rating(...children) | _.Rating(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "review prodotto, quality score, feedback operatori, punteggi rapidi, readonly score"
    },
    {
      label: "Avoid for",
      value: "scelte binarie o scale che richiedono testo esplicito a ogni step"
    },
    {
      label: "Mental model",
      value: "input o display di punteggio con icone, frazioni e stato reattivo"
    }
  ],
  useWhen: [
    {
      title: "Vuoi raccogliere un punteggio rapido",
      text: "Rating e ideale quando l'utente deve esprimere una valutazione semplice e immediata."
    },
    {
      title: "Ti serve anche una vista readonly coerente",
      text: "Lo stesso componente regge bene sia input attivo sia score di sola lettura."
    },
    {
      title: "Vuoi personalizzare icone o step",
      text: "Con colori, icon set e slot `star` puoi adattare il linguaggio visivo al dominio della review."
    }
  ],
  avoidWhen: [
    {
      title: "Serve una scelta esplicita per ogni valore",
      text: "Se ogni step richiede testo o significato diverso, uno slider o radio group possono essere piu chiari."
    },
    {
      title: "La scala non e intuitiva",
      text: "Se passi da 5 a 10 o usi mezzi step, spiega il senso del punteggio vicino al controllo."
    },
    {
      title: "Vuoi misurare dati oggettivi",
      text: "Per KPI o numeri tecnici meglio un display dedicato; rating comunica giudizio, non misura neutra."
    }
  ],
  essentialProps: [
    {
      name: "value / model / max",
      description: "Definiscono score iniziale, binding reattivo e scala del controllo."
    },
    {
      name: "half / clearable",
      description: "Sono le due leve principali quando vuoi mezzi step o reset del valore."
    },
    {
      name: "readonly / disabled / label / name",
      description: "Gestiscono comportamento input, integrazione form e contesto testuale."
    },
    {
      name: "size / gap / checkedIcon / uncheckedIcon / halfIcon / color*",
      description: "Permettono di cambiare davvero il linguaggio visivo del rating."
    },
    {
      name: "onHover / onInput / onChange / slots.star",
      description: "Servono per UX piu ricche, live preview e rendering custom di ogni item."
    }
  ],
  anatomy: [
    {
      title: "Scale",
      text: "Numero massimo di item e presenza di mezzi step definiscono la precisione del punteggio."
    },
    {
      title: "Visual states",
      text: "Selected, half, hovered e inactive devono restare leggibili e coerenti."
    },
    {
      title: "Label + score feedback",
      text: "Il controllo diventa piu chiaro quando label e score testuale spiegano il significato della valutazione."
    }
  ],
  slots: [
    {
      title: "`label`, `star`, `item`",
      text: "Permettono di riscrivere la resa del rating senza perdere il suo comportamento base."
    }
  ],
  patterns: [
    {
      title: "Basic score input",
      text: "Perfetto per recensioni rapide o micro-feedback in dashboard e schede prodotto.",
      tags: ["input"]
    },
    {
      title: "Half + clearable",
      text: "Il pattern giusto quando vuoi piu sfumatura nel voto e possibilita di reset.",
      tags: ["half"]
    },
    {
      title: "Readonly showcase",
      text: "Molto utile per mostrare score consolidati, reputation o risultati finali.",
      tags: ["readonly"]
    }
  ],
  accessibility: [
    {
      title: "Spiega la scala",
      text: "Label, helper text o stato derivato aiutano a capire cosa significa davvero un 3, un 4 o un 4.5."
    },
    {
      title: "Non solo stelle",
      text: "Quando il rating e importante, affianca sempre un valore o una descrizione testuale."
    }
  ],
  gotchas: [
    {
      title: "Scala troppo arbitraria",
      text: "Se passi da 5 a 10 o usi icone custom, assicurati che l'utente capisca subito il criterio."
    },
    {
      title: "Half step senza vero bisogno",
      text: "La mezza stella aiuta solo se il dominio del punteggio richiede davvero quella precisione."
    },
    {
      title: "Readonly trattato come decorazione",
      text: "Se mostri uno score finale importante, dai anche un contesto testuale oltre alle icone."
    }
  ]
};

export default ratingDoc;
