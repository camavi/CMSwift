const toggleDoc = {
  name: "Toggle",
  title: "Toggle",
  status: "stable",
  tags: ["form", "switch", "state control"],
  summary: "Interruttore visivo per stati on/off, feature flags e controlli immediati di sistema. Il suo valore non e solo cambiare un booleano, ma comunicare in modo piu diretto che una funzione o un flusso e attivo, spento o in standby.",
  signature: "_.Toggle(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "feature flags, setting rapidi, activation state, canali on/off e flow di sistema"
    },
    {
      label: "Avoid for",
      value: "consensi legali o checklist dove il pattern checkbox resta piu esplicito"
    },
    {
      label: "Mental model",
      value: "interruttore di stato, non semplice casella spuntabile"
    }
  ],
  useWhen: [
    {
      title: "Il controllo rappresenta uno stato attivo o spento",
      text: "Toggle e forte quando l'utente deve percepire un setting come interruttore di sistema."
    },
    {
      title: "Vuoi feedback visivo piu forte del checkbox",
      text: "Per release flow, auto publish, alerts e canali operativi comunica meglio l'idea di enable/disable."
    },
    {
      title: "Ti serve anche tri-state o radio behavior",
      text: "Il componente copre casi piu ricchi con standby icon o modalita radio su gruppi esclusivi."
    }
  ],
  avoidWhen: [
    {
      title: "Stai raccogliendo consensi o conferme puntuali",
      text: "In quei casi checkbox e spesso piu serio e meno ambiguo."
    },
    {
      title: "Le opzioni non sono on/off ma alternative tra loro",
      text: "Se il problema e la scelta esclusiva, radio o tabs rendono meglio la relazione."
    },
    {
      title: "La UI deve sembrare estremamente neutra",
      text: "Toggle porta con se un'idea forte di sistema attivo/spento; non e sempre la semantica giusta."
    }
  ],
  essentialProps: [
    {
      name: "model / checked",
      description: "Gestiscono lo stato principale del toggle, inclusi casi con valore `null` se usi standby."
    },
    {
      name: "color / size / dense",
      description: "Definiscono tono e densita del controllo."
    },
    {
      name: "icon / checkedIcon / uncheckedIcon / standbyIcon",
      description: "Servono per rendere piu leggibile il significato degli stati."
    },
    {
      name: "behavior, value, name",
      description: "Con `behavior: \"radio\"` il toggle puo diventare un selettore esclusivo con affordance diversa dai radio classici."
    },
    {
      name: "onChange / onInput / disabled",
      description: "Leve operative per integrare il controllo nei workflow reali."
    }
  ],
  anatomy: [
    {
      title: "Switch rail",
      text: "La forma del toggle suggerisce immediatamente il modello on/off o on/standby/off."
    },
    {
      title: "State iconography",
      text: "Le icone aiutano molto quando il significato del toggle non e ovvio dal solo colore."
    },
    {
      title: "System intent",
      text: "Il componente funziona bene quando rappresenta un comportamento del sistema, non solo un valore astratto."
    }
  ],
  slots: [
    {
      title: "Children / label content",
      text: "La label dovrebbe dire cosa viene acceso o spento, non solo nominare un dominio generico."
    }
  ],
  patterns: [
    {
      title: "Feature flag toggle",
      text: "Pattern ideale per auto publish, alerts, maintenance e altre funzioni attivabili rapidamente.",
      tags: ["settings", "features"]
    },
    {
      title: "Tri-state workflow",
      text: "Con standby puoi rappresentare stati sospesi o in review senza cambiare componente.",
      tags: ["tri-state", "workflow"]
    },
    {
      title: "Radio-like segmented behavior",
      text: "La modalita radio e utile quando vuoi un gruppo esclusivo con estetica piu switch-like.",
      tags: ["radio behavior"]
    }
  ],
  accessibility: [
    {
      title: "La label deve dire chiaramente cosa cambia",
      text: "Toggle senza copy esplicito rischia di lasciare ambiguo il significato di on e off."
    },
    {
      title: "Stati non standard richiedono chiarezza",
      text: "Se introduci standby o icone custom, assicurati che il loro significato sia comprensibile dal contesto."
    }
  ],
  gotchas: [
    {
      title: "Toggle non e sempre piu moderno del checkbox",
      text: "Per consensi, checklist o scelte documentali, il checkbox resta spesso piu corretto."
    },
    {
      title: "Tri-state va usato solo se il dominio lo giustifica",
      text: "Uno stato standby senza semantica chiara crea solo confusione."
    },
    {
      title: "Behavior radio cambia il modello mentale",
      text: "Quando usi il toggle come radio group, il team deve essere consapevole che non e piu un semplice on/off."
    }
  ]
};

export default toggleDoc;
