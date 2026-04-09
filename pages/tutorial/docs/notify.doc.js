const notifyDoc = {
  name: "Notify",
  title: "Notify",
  status: "stable",
  tags: ["toast", "feedback", "async UX"],
  summary: "Layer standard per toast e micro-feedback applicativi. Non serve solo a mostrare un messaggio: serve a dare un contratto unico per success, warning, error, update, dismiss e promise lifecycle.",
  signature: "_.Notify(message, title?, opts?) | _.Notify(opts, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "submit async, sync job, alert brevi, feedback di navigazione, errori recuperabili"
    },
    {
      label: "Avoid for",
      value: "contenuti lunghi, conferme bloccanti o UI che richiedono molte decisioni"
    },
    {
      label: "Mental model",
      value: "un toast strutturato con stesso payload in tutte le app, non un div posizionato a mano"
    }
  ],
  useWhen: [
    {
      title: "Hai bisogno di feedback immediato e non bloccante",
      text: "Notify e il pattern giusto per conferme, warning brevi, retry e stati di processo che non meritano una dialog."
    },
    {
      title: "Vuoi un lifecycle uniforme per operazioni async",
      text: "`promise`, `update`, `remove` e `clear` evitano wiring diverso per ogni team o pagina."
    },
    {
      title: "Il messaggio deve restare coerente in tutta la piattaforma",
      text: "Tono, posizione, CTA e dismiss seguono uno standard unico invece di mille toast custom."
    }
  ],
  avoidWhen: [
    {
      title: "La persona deve decidere prima di continuare",
      text: "In quel caso il componente giusto e `_.Dialog`, non un toast."
    },
    {
      title: "Il contenuto richiede struttura lunga o scroll",
      text: "Se inizi a inserire troppa UI dentro un toast, stai mascherando una card o una page."
    },
    {
      title: "Il messaggio deve vivere stabilmente nella pagina",
      text: "Per stato persistente o note inline il pattern corretto e piu vicino a `_.Banner`."
    }
  ],
  essentialProps: [
    {
      name: "type / state / color",
      description: "Determina tono, colore e priorita visiva del toast. Parti sempre da qui."
    },
    {
      name: "title / message / description / meta",
      description: "Payload strutturato per messaggi veri, non solo stringhe secche."
    },
    {
      name: "timeout / closable / dismissLabel",
      description: "Controlla il lifecycle: auto-close, chiusura manuale e accessibilita del dismiss."
    },
    {
      name: "actions",
      description: "Per CTA compatte, retry e navigazioni contestuali senza aprire subito una dialog."
    },
    {
      name: "methods",
      description: "`success`, `warning`, `error`, `info`, `update`, `remove`, `clear`, `promise` coprono quasi tutto il flusso reale.",
      tags: ["service API"]
    }
  ],
  anatomy: [
    {
      title: "Severity",
      text: "Type/state definisce la gerarchia: conferma, warning, errore, nota informativa."
    },
    {
      title: "Payload",
      text: "Title, message, description e meta ti danno diversi livelli di densita senza perdere coerenza."
    },
    {
      title: "Lifecycle",
      text: "Un toast puo nascere, aggiornarsi, completarsi o sparire mantenendo lo stesso id."
    }
  ],
  slots: [
    {
      title: "`icon`",
      text: "Per sostituire l'icona automatica con avatar, chip o indicatori custom."
    },
    {
      title: "`actions`",
      text: "Per CTA custom senza uscire dal payload notify."
    },
    {
      title: "`default`",
      text: "Per casi piu ricchi dove serve un body extra, ma senza trasformare il toast in una mini-page."
    }
  ],
  patterns: [
    {
      title: "Shortcut semantiche",
      text: "Usa `_.Notify.success/warning/error/info` per i casi piu rapidi e ripetuti.",
      tags: ["fast path"]
    },
    {
      title: "Toast persistente con update",
      text: "Perfetto per export, deploy, sync e job batch dove il messaggio evolve nel tempo.",
      tags: ["long-running", "update"]
    },
    {
      title: "Promise helper",
      text: "Ottimo per submit e sync: loading, success ed error restano nello stesso contratto UX.",
      tags: ["async", "promise"]
    }
  ],
  accessibility: [
    {
      title: "Dismiss leggibile",
      text: "Se rendi il toast chiudibile, mantieni sempre una label chiara sul controllo."
    },
    {
      title: "Tono non solo cromatico",
      text: "Success, warning ed error devono restare leggibili anche dal copy, non solo dal colore."
    }
  ],
  gotchas: [
    {
      title: "Non usare notify come inbox",
      text: "Se i messaggi restano troppi o troppo a lungo, serve una pagina activity o una center panel."
    },
    {
      title: "Timeout aggressivo su errori importanti",
      text: "Per errori critici o azioni da correggere, usa `timeout: 0` o un close esplicito."
    },
    {
      title: "Promise helper senza catch",
      text: "Se il chiamante deve continuare il flusso, ricorda che `promise` propaga comunque l'errore."
    }
  ]
};

export default notifyDoc;
