const spinnerDoc = {
  name: "Spinner",
  title: "Spinner",
  status: "stable",
  tags: ["feedback", "loading", "inline status"],
  summary: "Indicatore circolare per stati di attesa puntuali, locali o contestuali. Il suo valore non e solo ruotare, ma dare un feedback chiaro dentro button, card, toolbar e blocchi live senza inventare ogni volta markup o motion diversi.",
  signature: "_.Spinner(...children) | _.Spinner(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "submit, polling, autosave, import locali, attese brevi o contestuali"
    },
    {
      label: "Avoid for",
      value: "processi con avanzamento misurabile o task lunghi che richiedono una barra"
    },
    {
      label: "Mental model",
      value: "loader compatto, locale e integrabile in quasi ogni superficie"
    }
  ],
  useWhen: [
    {
      title: "Hai uno stato di attesa locale",
      text: "Spinner funziona bene dentro button, card, toolbar o piccoli pannelli dove il caricamento non merita una barra."
    },
    {
      title: "Non hai percentuale reale",
      text: "Quando il sistema lavora ma non espone avanzamento, lo spinner e il feedback piu onesto."
    },
    {
      title: "Vuoi un loader con contesto",
      text: "Label e note permettono di spiegare il task, senza lasciarlo come semplice icona che gira."
    }
  ],
  avoidWhen: [
    {
      title: "Il task ha avanzamento misurabile",
      text: "Se puoi mostrare percentuale, buffer o step, `_.Progress` o `_.LoadingBar` raccontano meglio lo stato."
    },
    {
      title: "Stai coprendo un'intera pagina",
      text: "Per attese globali o overlay piu grandi servono pattern piu strutturati della sola ruota."
    },
    {
      title: "Vuoi aggiungere troppo testo",
      text: "Se il blocco diventa lungo o complesso, forse serve una card di stato e non un semplice spinner."
    }
  ],
  essentialProps: [
    {
      name: "size / thickness / speed",
      description: "Sono le leve principali per calibrare peso visivo e intensita del loader."
    },
    {
      name: "state / color / trackColor",
      description: "Servono per allineare tono semantico e brand color al contesto."
    },
    {
      name: "label / note",
      description: "Aggiungono contesto utile quando il loader non deve restare muto."
    },
    {
      name: "vertical / center / block / reverse",
      description: "Controllano layout e comportamento del componente in superfici diverse."
    },
    {
      name: "paused / ariaLabel / slots.indicator",
      description: "Utili per scenari avanzati, accessibilita e renderer custom."
    }
  ],
  anatomy: [
    {
      title: "Indicator",
      text: "La ruota e il segnale visivo primario: deve restare leggibile ma non dominante."
    },
    {
      title: "Context text",
      text: "Label e note spiegano cosa sta succedendo, soprattutto in flussi operativi."
    },
    {
      title: "Embedding surface",
      text: "Spinner vive bene dentro card, bottoni e righe compatte proprio perche resta piccolo e composable."
    }
  ],
  slots: [
    {
      title: "`indicator`, `label`, `note`, `default`",
      text: "Servono quando vuoi mantenere il contratto base ma cambiare il rendering interno."
    }
  ],
  patterns: [
    {
      title: "Inline button loader",
      text: "Perfetto per submit, save e publish in cui il bottone resta il punto focale.",
      tags: ["button"]
    },
    {
      title: "Card status",
      text: "Utile per import, sync e background job raccontati dentro pannelli o card.",
      tags: ["card"]
    },
    {
      title: "Tuned loader",
      text: "Velocita, spessore e colori custom funzionano bene per differenziare polling lenti e task energici.",
      tags: ["tuning"]
    }
  ],
  accessibility: [
    {
      title: "Aria label quando manca testo",
      text: "Se usi solo l'indicatore, dai sempre un `ariaLabel` che spieghi il task."
    },
    {
      title: "Non basarti solo sul motion",
      text: "Il contesto testuale aiuta a capire cosa sta caricando, non solo che qualcosa si muove."
    }
  ],
  gotchas: [
    {
      title: "Spinner ovunque",
      text: "Se il prodotto e pieno di spinners senza differenza di contesto, l'utente smette di interpretarli."
    },
    {
      title: "Dimensione troppo grande per il contesto",
      text: "Uno spinner enorme dentro una toolbar o un bottone rompe la gerarchia."
    },
    {
      title: "Task lunghi senza spiegazione",
      text: "Per attese piu serie, aggiungi note o passa a un pattern che racconti avanzamento vero."
    }
  ]
};

export default spinnerDoc;
