const progressDoc = {
  name: "Progress",
  title: "Progress",
  status: "stable",
  tags: ["feedback", "progress", "status"],
  summary: "Barra di avanzamento per task determinati o indeterminati con supporto a buffer, value inside, label e slot. Il suo valore non e solo mostrare una percentuale, ma raccontare uno stato operativo con contesto e gerarchia visiva coerente.",
  signature: "_.Progress(...children) | _.Progress(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "import, deploy, sync, pipeline, wizard tecnici, KPI di avanzamento"
    },
    {
      label: "Avoid for",
      value: "attese brevissime o stati in cui non hai alcuna nozione di avanzamento"
    },
    {
      label: "Mental model",
      value: "barra di stato con contesto, buffer e modalita determinate o indeterminate"
    }
  ],
  useWhen: [
    {
      title: "Hai un task con avanzamento misurabile",
      text: "Progress e il pattern giusto quando puoi raccontare percentuale, step o almeno una finestra di buffer."
    },
    {
      title: "Vuoi un feedback integrato in card e dashboard",
      text: "Label, note, start/end labels e value inside permettono una lettura piu ricca senza wrapper extra."
    },
    {
      title: "Serve una barra viva e reattiva",
      text: "Il componente reagisce bene a rod e function props per aggiornamenti live senza ricreazione."
    }
  ],
  avoidWhen: [
    {
      title: "Il task e troppo breve",
      text: "Per attese minime o feedback di submit rapido, uno spinner o una notify possono essere piu corretti."
    },
    {
      title: "Non sai davvero a che punto sei",
      text: "Se non hai metrica, buffer o milestone, meglio usare la modalita indeterminate invece di una percentuale finta."
    },
    {
      title: "La barra sostituisce il contenuto",
      text: "Se tutto il pannello mostra solo una percentuale senza spiegazione, stai perdendo contesto utile."
    }
  ],
  essentialProps: [
    {
      name: "value / max / buffer",
      description: "Il nucleo del componente: avanzamento principale e buffer opzionale."
    },
    {
      name: "label / note / startLabel / endLabel",
      description: "Sono le props che trasformano una barra nuda in un indicatore leggibile."
    },
    {
      name: "showValue / insideLabel",
      description: "Servono per scegliere se mostrare il valore fuori o dentro la barra."
    },
    {
      name: "indeterminate / striped / animated / reverse",
      description: "Controllano il comportamento per task aperti, batch o timeline inverse."
    },
    {
      name: "state / color / height / radius / slots.value",
      description: "Leve visive per adattare la barra al tono e al livello di densita del contesto."
    }
  ],
  anatomy: [
    {
      title: "Track + bar + buffer",
      text: "La relazione tra barra principale e buffer aiuta a leggere progresso reale e margine."
    },
    {
      title: "Context copy",
      text: "Label, note e labels laterali spiegano cosa sta avanzando e verso dove."
    },
    {
      title: "Value rendering",
      text: "Percentuale, chip custom o testo inside sono modi diversi di esporre lo stesso stato."
    }
  ],
  slots: [
    {
      title: "`value`",
      text: "Permette di sostituire il valore standard con chip, KPI o altri renderer mirati."
    }
  ],
  patterns: [
    {
      title: "Operational pipeline",
      text: "Perfetto per import, deploy e pipeline con buffer e labels di step.",
      tags: ["pipeline"]
    },
    {
      title: "Indeterminate loading",
      text: "Molto utile quando il task e vivo ma non espone percentuale reale.",
      tags: ["indeterminate"]
    },
    {
      title: "Reactive live preview",
      text: "Il pattern giusto per dashboard o pannelli in cui stato e valori cambiano al volo.",
      tags: ["reactive"]
    }
  ],
  accessibility: [
    {
      title: "Contesto prima della percentuale",
      text: "Una buona barra dice sempre cosa sta avanzando, non solo quanto."
    },
    {
      title: "Tono non solo cromatico",
      text: "Warning, success o danger devono restare chiari anche dal copy e dal contesto."
    }
  ],
  gotchas: [
    {
      title: "Percentuali false",
      text: "Meglio una modalita indeterminate onesta che un numero inventato."
    },
    {
      title: "Value inside su barre troppo piccole",
      text: "Se la densita e alta o la barra e bassa, il testo interno puo diventare illeggibile."
    },
    {
      title: "Troppi effetti contemporanei",
      text: "Buffer, stripes, animation, inside value e labels possono convivere, ma non sempre servono tutti insieme."
    }
  ]
};

export default progressDoc;
