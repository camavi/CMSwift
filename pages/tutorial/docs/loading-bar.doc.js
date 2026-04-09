const loadingBarDoc = {
  name: "LoadingBar",
  title: "LoadingBar",
  status: "stable",
  tags: ["loading", "progress", "global feedback"],
  summary: "Barra di caricamento costruita sopra `_.Progress` per scenari globali, inline o scoped a un container. Il suo valore non e solo mostrare una linea in movimento, ma dare un contratto unico per richieste, sync e task imperativi con API semplice.",
  signature: "_.LoadingBar(...children) | _.LoadingBar(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "request globali, sync in container, upload, deploy e task imperativi con start/inc/done"
    },
    {
      label: "Avoid for",
      value: "stati locali minuscoli dove basta uno spinner o casi dove serve un pannello di stato completo"
    },
    {
      label: "Mental model",
      value: "progress bar controllabile come servizio o come componente visuale"
    }
  ],
  useWhen: [
    {
      title: "Vuoi una barra globale di request",
      text: "LoadingBar e forte in alto alla pagina quando serve un feedback rapido e coerente per task applicativi."
    },
    {
      title: "Hai un container specifico da monitorare",
      text: "Con `target` e `position` puoi montarla dentro una card o un pannello senza bricolage CSS."
    },
    {
      title: "Ti serve un API imperativa veloce",
      text: "`start`, `inc`, `done`, `reset`, `setBuffer` coprono bene i flussi reali di sync e progressione simulata."
    }
  ],
  avoidWhen: [
    {
      title: "Serve contesto ricco o dettagliato",
      text: "Se devi spiegare il task con molto copy, CTA o meta, meglio una card con `_.Progress`."
    },
    {
      title: "Il feedback e solo locale e minimo",
      text: "Per un bottone o una piccola area, `_.Spinner` resta piu naturale."
    },
    {
      title: "Stai usando una barra globale per ogni microazione",
      text: "Su task molto frequenti rischi di rendere la UI nervosa e rumorosa."
    }
  ],
  essentialProps: [
    {
      name: "model / value / buffer",
      description: "Permettono uso reattivo diretto oppure controllo manuale del valore."
    },
    {
      name: "mount / target / position / top / right / bottom / left",
      description: "Definiscono dove e come la barra viene montata nella superficie giusta."
    },
    {
      name: "start / inc / set / done / reset / get / setBuffer",
      description: "La parte piu importante quando la barra viene usata come controller imperativo."
    },
    {
      name: "state / color / height / striped / animated / radius",
      description: "Le leve visive principali per allineare tono e presenza."
    },
    {
      name: "showValue / insideLabel / startLabel / endLabel",
      description: "Trasformano la barra da semplice linea a feedback piu parlante."
    }
  ],
  anatomy: [
    {
      title: "Mount strategy",
      text: "La loading bar puo vivere in alto alla pagina, inline o in un target dedicato."
    },
    {
      title: "Imperative controller",
      text: "L'API runtime le permette di comportarsi come un piccolo servizio di progressione."
    },
    {
      title: "Visual progress layer",
      text: "Track, buffer e label ereditano la grammatica di `_.Progress`, ma in forma piu snella."
    }
  ],
  slots: [
    {
      title: "Eredita le slot di `Progress`",
      text: "Quando usata in modalita inline puo sfruttare anche renderer del valore e contenuto piu ricco."
    }
  ],
  patterns: [
    {
      title: "Global fixed bar",
      text: "Perfetta per richieste e task applicativi che devono segnalare attivita senza rubare troppo spazio.",
      tags: ["global"]
    },
    {
      title: "Inline model-driven bar",
      text: "Buona per deploy, wizard o pannelli in cui valore e buffer sono guidati da stato reattivo.",
      tags: ["inline", "reactive"]
    },
    {
      title: "Scoped container bar",
      text: "Il pattern giusto per sync di card, widget o superfici locali con position absolute.",
      tags: ["scoped"]
    }
  ],
  accessibility: [
    {
      title: "Non usare solo il movimento",
      text: "Se il task e rilevante, accompagna la barra con contesto o labels che spieghino cosa sta succedendo."
    },
    {
      title: "Global bar con intenzione",
      text: "Una barra globale dovrebbe rappresentare un evento davvero trasversale, non una microazione locale."
    }
  ],
  gotchas: [
    {
      title: "Progressione finta troppo ovvia",
      text: "Se usi `inc()` simulato, mantieni una cadenza credibile e non farla saltare in modo artificiale."
    },
    {
      title: "Target senza layout adatto",
      text: "Per il mounting scoped servono contenitori con position e overflow gestiti correttamente."
    },
    {
      title: "Barra globale sempre attiva",
      text: "Se compare troppo spesso o troppo a lungo, smette di comunicare priorita."
    }
  ]
};

export default loadingBarDoc;
