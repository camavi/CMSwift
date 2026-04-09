const dateDoc = {
  name: "Date",
  title: "Date",
  status: "stable",
  tags: ["input", "picker", "date"],
  summary: "Date picker reattivo per selezioni single, range, multiple e multi-range con input manuale, vincoli e preset. Il suo valore non e solo scegliere una data, ma dare un contratto coerente per booking, manutenzioni, sopralluoghi e finestre operative.",
  signature: "_.Date(props)",
  quickFacts: [
    {
      label: "Best for",
      value: "booking, calendari operativi, sopralluoghi, manutenzioni, blackout date, finestre di disponibilita"
    },
    {
      label: "Avoid for",
      value: "input banali dove basta il campo nativo o casi in cui non esistono regole di calendario reali"
    },
    {
      label: "Mental model",
      value: "picker data con grammatica chiara per single, range, multiple e validation"
    }
  ],
  useWhen: [
    {
      title: "Hai regole reali di disponibilita",
      text: "Min, max, disableDates, weekdaysOnly, minRange e maxRange fanno emergere il valore del componente rispetto a un semplice input."
    },
    {
      title: "Ti servono modalita diverse nello stesso sistema",
      text: "Single, range, multiple e range-multiple seguono lo stesso contratto e riducono il costo mentale tra una pagina e l'altra."
    },
    {
      title: "Vuoi combinare picker e input manuale",
      text: "Manual input, confirm e shortcuts aiutano quando chi usa il form conosce gia la data o lavora spesso sulla tastiera."
    }
  ],
  avoidWhen: [
    {
      title: "La data e quasi sempre unica e libera",
      text: "Se non hai vincoli, range o disponibilita da spiegare, un campo nativo puo essere sufficiente."
    },
    {
      title: "Stai forzando il componente per schedulazione complessa",
      text: "Per calendari completi, agenda o drag planning serve un pattern diverso da un picker field."
    },
    {
      title: "Il formato dei dati non e chiaro",
      text: "Se il backend o il dominio non hanno un contratto preciso su stringa, range o array, il picker viene usato male."
    }
  ],
  essentialProps: [
    {
      name: "value / model",
      description: "Il valore puo essere stringa, range `{ from, to }` o array, a seconda della modalita scelta."
    },
    {
      name: "mode",
      description: "La prop che cambia davvero il comportamento: single, range, multiple o range-multiple."
    },
    {
      name: "min / max / disableDates / weekdaysOnly",
      description: "Le regole base di disponibilita e validazione del calendario."
    },
    {
      name: "minRange / maxRange / confirm / shortcuts",
      description: "Sono le leve giuste per booking, soggiorni e flussi con selezione guidata."
    },
    {
      name: "label / icon / iconRight / clearable / manualInput / monthsToShow / locale",
      description: "Controllano UX del campo, del picker e del contesto visuale."
    }
  ],
  anatomy: [
    {
      title: "Field surface",
      text: "Label, icone e testo del valore devono restare leggibili anche prima di aprire il calendario."
    },
    {
      title: "Calendar logic",
      text: "Il cuore del componente e la gestione di giorni attivi, bloccati, range e scorciatoie."
    },
    {
      title: "Selection model",
      text: "Single date, range e selezioni multiple raccontano scenari diversi ma con API coerente."
    }
  ],
  slots: [
    {
      title: "Picker custom points e labels",
      text: "Le personalizzazioni hanno senso quando aiutano il dominio, non quando trasformano il calendario in un widget decorativo."
    }
  ],
  patterns: [
    {
      title: "Booking range",
      text: "Il pattern giusto per soggiorni o prenotazioni con min/max range e preset rapidi.",
      tags: ["booking"]
    },
    {
      title: "Multiple windows",
      text: "Molto utile per finestre manutenzione o selezioni flessibili su piu date.",
      tags: ["multi", "ops"]
    },
    {
      title: "Manual input with constraints",
      text: "Perfetto per operatori che conoscono gia la data ma hanno comunque regole di disponibilita.",
      tags: ["manual input"]
    }
  ],
  accessibility: [
    {
      title: "Formato e vincoli chiari",
      text: "Se usi placeholder, shortcuts o conferma, dovrebbero aiutare a capire il formato e non aggiungere ambiguita."
    },
    {
      title: "Date bloccate spiegate",
      text: "Quando molte date non sono disponibili, il contesto del perche dovrebbe essere vicino al campo."
    }
  ],
  gotchas: [
    {
      title: "Mode sbagliato per il dominio",
      text: "Non usare `multiple` o `range-multiple` solo perche esistono: ogni modalita cambia il modello dei dati."
    },
    {
      title: "Shortcuts che ignorano i vincoli",
      text: "Preset e scorciatoie dovrebbero restare coerenti con min, max e date disabilitate."
    },
    {
      title: "Manual input senza feedback",
      text: "Se abiliti l'input diretto, assicurati che formato e validazione siano immediatamente leggibili."
    }
  ]
};

export default dateDoc;
