const sliderDoc = {
  name: "Slider",
  title: "Slider",
  status: "stable",
  tags: ["input", "range", "tuning"],
  summary: "Controllo continuo per tuning e regolazioni numeriche con markers, labels, icone e binding reattivo. Il suo valore non e solo muovere un thumb, ma dare un'interazione leggibile per volume, qualita, temperatura, presenza o altri parametri graduati.",
  signature: "_.Slider(...children) | _.Slider(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "volume, intensita, qualita, temperatura, tuning UI, controlli studio o dashboard"
    },
    {
      label: "Avoid for",
      value: "scelte discrete con significato forte per ogni step o campi che richiedono input esatto da tastiera"
    },
    {
      label: "Mental model",
      value: "controllo analogico o semi-analogico per un valore numerico graduato"
    }
  ],
  useWhen: [
    {
      title: "Il valore ha natura graduale",
      text: "Slider funziona bene quando il dominio suggerisce movimento, intensita o progressione continua."
    },
    {
      title: "Vuoi una lettura visiva immediata del range",
      text: "StartLabel, endLabel, markers e thumbLabel aiutano a capire subito il perimetro del controllo."
    },
    {
      title: "Ti serve binding reattivo live",
      text: "Con model, onInput e onChange si presta bene a demo, configuratori e pannelli live."
    }
  ],
  avoidWhen: [
    {
      title: "Ogni scelta richiede testo o semantica propria",
      text: "Se i valori possibili sono pochi e qualitativamente diversi, radio o select possono essere piu chiari."
    },
    {
      title: "Serve precisione assoluta",
      text: "Per numeri esatti o input molto tecnici, un campo numerico puo essere meno ambiguo."
    },
    {
      title: "Stai aggiungendo troppo rumore visivo",
      text: "Markers, labels, icons e chip sono utili, ma non vanno sempre usati tutti insieme."
    }
  ],
  essentialProps: [
    {
      name: "min / max / step",
      description: "Definiscono il contratto numerico del controllo."
    },
    {
      name: "value / model",
      description: "Valore iniziale o binding reattivo del thumb."
    },
    {
      name: "label / showValue / labelValue / thumbLabel",
      description: "Leve chiave per spiegare il valore in modo comprensibile."
    },
    {
      name: "startLabel / endLabel / markers / markerLabels",
      description: "Rendono leggibile la scala e i punti notevoli."
    },
    {
      name: "icon / iconRight / thumbIcon / readonly / disabled / color / trackColor / thumbColor",
      description: "Servono per tono, affordance e casi visuali piu espressivi."
    }
  ],
  anatomy: [
    {
      title: "Track + thumb",
      text: "Il thumb e il punto d'azione, la track racconta il perimetro del range."
    },
    {
      title: "Scale hints",
      text: "Markers, labels e icone aiutano a leggere dove il controllo si trova rispetto all'intero range."
    },
    {
      title: "Value display",
      text: "LabelValue e thumbLabel trasformano un numero astratto in un feedback piu chiaro."
    }
  ],
  slots: [
    {
      title: "Label e thumb value",
      text: "Le personalizzazioni dovrebbero aiutare il dominio, non rendere il controllo teatrale."
    }
  ],
  patterns: [
    {
      title: "Basic percentage tuning",
      text: "Ottimo per volume, percentuali e intensita semplici.",
      tags: ["basic"]
    },
    {
      title: "Stepped quality selector",
      text: "Con step e markers funziona molto bene per qualita, livelli o preset intermedi.",
      tags: ["steps"]
    },
    {
      title: "Studio or console control",
      text: "Il pattern giusto quando piu slider convivono in un pannello di regolazione.",
      tags: ["control panel"]
    }
  ],
  accessibility: [
    {
      title: "Scala spiegata bene",
      text: "Se il range non e ovvio, usa start/end labels o un testo che spieghi cosa significa il valore."
    },
    {
      title: "Readonly leggibile",
      text: "Quando il controllo non e interattivo, il valore corrente dovrebbe restare chiaro anche senza muovere il thumb."
    }
  ],
  gotchas: [
    {
      title: "Troppa UI per un solo numero",
      text: "Markers, labelValue, thumbLabel e icone tutti insieme possono sovraccaricare un controllo semplice."
    },
    {
      title: "Slider per valori discreti forti",
      text: "Se l'utente deve scegliere tra poche opzioni ben nominate, il controllo potrebbe essere quello sbagliato."
    },
    {
      title: "Step incoerente col dominio",
      text: "La granularita dovrebbe seguire il problema reale, non essere scelta a caso."
    }
  ]
};

export default sliderDoc;
