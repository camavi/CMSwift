const timeDoc = {
  name: "Time",
  title: "Time",
  status: "stable",
  tags: ["input", "picker", "time"],
  summary: "Time picker reattivo per orari singoli con supporto a secondi, input manuale, limiti e shortcuts. Il suo valore non e solo scegliere un orario, ma dare un controllo consistente per slot, finestre servizio e timer operativi.",
  signature: "_.Time(props)",
  quickFacts: [
    {
      label: "Best for",
      value: "slot appuntamenti, finestre assistenza, timer operativi, orari showroom, job di produzione"
    },
    {
      label: "Avoid for",
      value: "time range complessi o schedule multi-slot che richiedono una UI piu ricca"
    },
    {
      label: "Mental model",
      value: "picker orario con granularita, vincoli e input diretto"
    }
  ],
  useWhen: [
    {
      title: "Hai un solo orario ma con regole chiare",
      text: "Min, max, step e shortcuts fanno emergere il valore del componente rispetto a un semplice input time."
    },
    {
      title: "Serve precisione su minuti o secondi",
      text: "Con `withSeconds`, `minuteStep` e `secondStep` puoi adattarlo sia a scheduling soft sia a scenari piu tecnici."
    },
    {
      title: "Vuoi supportare sia picker sia digitazione",
      text: "Manual input e confirm sono utili quando gli operatori conoscono gia lo slot da inserire."
    }
  ],
  avoidWhen: [
    {
      title: "Il dominio richiede range o pianificazione visiva",
      text: "Per piu orari o una schedule completa il picker singolo non basta."
    },
    {
      title: "Stai usando secondi senza motivo",
      text: "Se il contesto non richiede davvero precisione tecnica, i secondi aggiungono solo attrito."
    },
    {
      title: "Le shortcuts nascondono la logica",
      text: "I preset sono utili, ma non dovrebbero sostituire la comprensione del vincolo reale."
    }
  ],
  essentialProps: [
    {
      name: "value / model",
      description: "Formato standard in stringa `HH:mm` o `HH:mm:ss`."
    },
    {
      name: "withSeconds / minuteStep / secondStep",
      description: "Definiscono precisione e granularita del controllo."
    },
    {
      name: "min / max",
      description: "Le due props che danno subito senso operativo al picker."
    },
    {
      name: "label / icon / iconRight / pointIcon / clearable / manualInput / confirm",
      description: "Controllano UX del campo e del picker."
    },
    {
      name: "shortcuts / onInput / onChange",
      description: "Preset rapidi ed eventi per scenari applicativi piu reali."
    }
  ],
  anatomy: [
    {
      title: "Field value",
      text: "L'orario va letto facilmente anche prima dell'apertura del picker."
    },
    {
      title: "Time granularity",
      text: "Step di minuti e secondi definiscono quanto il controllo sia operativo o tecnico."
    },
    {
      title: "Constraint layer",
      text: "Min, max e shortcuts raccontano la finestra valida del dominio."
    }
  ],
  slots: [
    {
      title: "Preset e indicatori",
      text: "Le personalizzazioni hanno senso quando rendono piu chiaro lo scenario, non quando complicano il picker."
    }
  ],
  patterns: [
    {
      title: "Basic schedule field",
      text: "Perfetto per orario inizio, delivery window o slot appuntamento.",
      tags: ["schedule"]
    },
    {
      title: "Technical timer",
      text: "Con secondi e step stretti si adatta bene a produzione e monitoraggio.",
      tags: ["technical"]
    },
    {
      title: "Constrained assistance window",
      text: "Il pattern giusto per fasce supporto o showroom con aperture e chiusure note.",
      tags: ["constraints"]
    }
  ],
  accessibility: [
    {
      title: "Formato riconoscibile",
      text: "Se usi secondi o input manuale, il formato deve essere evidente dal label o dal placeholder."
    },
    {
      title: "Vincoli espliciti",
      text: "Quando esistono min e max forti, la UI dovrebbe far capire subito la finestra valida."
    }
  ],
  gotchas: [
    {
      title: "Uso casuale dei secondi",
      text: "Aggiungili solo quando servono davvero al dominio, altrimenti peggiorano la velocita di compilazione."
    },
    {
      title: "Shortcuts incoerenti con min/max",
      text: "I preset devono restare sempre validi dentro la finestra configurata."
    },
    {
      title: "Manual input senza conferma mentale",
      text: "Se l'orario e critico, `confirm` aiuta a evitare selezioni accidentali."
    }
  ]
};

export default timeDoc;
