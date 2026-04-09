const bannerDoc = {
  name: "Banner",
  title: "Banner",
  status: "stable",
  tags: ["feedback", "inline messaging", "system state"],
  summary: "Pattern editoriale per avvisi operativi, note contestuali e CTA inline. Il punto non e solo mostrare un messaggio, ma dare tono, struttura e azioni senza reinventare il layout ogni volta.",
  signature: "_.Banner(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "warning inline, note di rollout, conferme di sistema e blocchi con CTA contestuali"
    },
    {
      label: "Avoid for",
      value: "toast effimeri, conferme modali o contenuti lunghi che meritano una Page/Card"
    },
    {
      label: "Mental model",
      value: "un alert strutturato con copy, tono, side area e punti precisi di override"
    }
  ],
  useWhen: [
    {
      title: "Devi comunicare uno stato con priorita chiara",
      text: "Usa `type/state` quando il messaggio ha un tono evidente: success, warning, danger o info."
    },
    {
      title: "Servono CTA vicine al messaggio",
      text: "Il banner evita di spargere pulsanti o link in altre zone della pagina: le azioni restano attaccate al contesto."
    },
    {
      title: "Vuoi un messaggio ripetibile in molte pagine",
      text: "Banner e piu disciplinato di un mix libero di Card + Toolbar + text nodes."
    }
  ],
  avoidWhen: [
    {
      title: "Il contenuto diventa lungo o multi-step",
      text: "Se stai spiegando un flusso o un onboarding, meglio `_.Page`, `_.Dialog` o una card dedicata."
    },
    {
      title: "Hai bisogno di sparire da solo dopo pochi secondi",
      text: "Per messaggi brevi e transienti il pattern giusto resta `_.Notify`."
    },
    {
      title: "L'obiettivo e il layout custom totale",
      text: "Se non ti servono tone, dismiss o zone standard, un wrapper piu semplice puo essere piu onesto."
    }
  ],
  essentialProps: [
    {
      name: "type / state",
      description: "Definisce tono, colore e icona automatica del banner. E la prima leva da scegliere.",
      tags: ["success", "warning", "danger", "info", "primary", "secondary"]
    },
    {
      name: "title / message / description",
      description: "Trio base per copy leggibile: headline, messaggio operativo e livello secondario di contesto."
    },
    {
      name: "actions / actionsPlacement",
      description: "Le CTA possono stare nel side rail o scendere sotto il body quando il banner e piu denso.",
      default: "end"
    },
    {
      name: "dismissible / onDismiss",
      description: "Per note temporanee o handoff di giornata. `onDismiss` ti lascia decidere se il close deve essere solo visivo o persistente."
    },
    {
      name: "slots",
      description: "Quando ti serve rompere il layout standard senza riscrivere il componente: icon, title, message, description, meta, actions, aside, dismiss, default."
    }
  ],
  anatomy: [
    {
      title: "Tone",
      text: "Deriva da `type/state` o da `accent` se vuoi una tinta custom piu editoriale."
    },
    {
      title: "Copy stack",
      text: "Title, message, description e meta costruiscono un ordine di lettura netto anche nei banner piu densi."
    },
    {
      title: "Side rail",
      text: "Aside, dismiss e CTA vivono in una zona separata per non sporcare il corpo del messaggio."
    }
  ],
  slots: [
    {
      title: "`icon`",
      text: "Sostituisce l'icona automatica con avatar, KPI, emoji o un blocco custom."
    },
    {
      title: "`actions` + `aside`",
      text: "Ti fanno separare CTA principali e contenuti accessori senza toccare il layout di base."
    },
    {
      title: "`default`",
      text: "Apre uno spazio extra dentro il banner per liste, note operative o dettagli secondari."
    }
  ],
  patterns: [
    {
      title: "Alert operativo",
      text: "Title corto, message concreto, meta con ownership e una CTA primaria. E il pattern piu sicuro per dashboard e console.",
      tags: ["dashboard", "ops"]
    },
    {
      title: "Rollout / release note",
      text: "Usa `meta`, `description` e `actionsPlacement: \"bottom\"` per note piu editoriali senza perdere scannabilita.",
      tags: ["release", "handoff"]
    },
    {
      title: "Custom banner via slots",
      text: "Quando hai bisogno di avatar, chips, extra copy o CTA non standard, parti da slots invece di clonare un layout ad hoc.",
      tags: ["slots", "custom"]
    }
  ],
  accessibility: [
    {
      title: "Ruolo ARIA coerente",
      text: "`warning` e `danger` finiscono su `alert`, gli altri su `status`. Non cambiare questa semantica senza un motivo reale."
    },
    {
      title: "Dismiss sempre etichettato",
      text: "Se usi una close icon custom, mantieni un `closeLabel` leggibile."
    }
  ],
  gotchas: [
    {
      title: "Non caricare troppo il body",
      text: "Se il banner inizia a contenere form, tabelle o blocchi lunghi, il componente giusto non e piu questo."
    },
    {
      title: "CTA laterali e copy lungo",
      text: "Quando il messaggio cresce, sposta le azioni in basso con `actionsPlacement: \"bottom\"` o `stack: true`."
    },
    {
      title: "Dismiss non vuol dire persistenza",
      text: "Chiuderlo dal DOM e diverso da ricordare la scelta dell'utente. Se ti serve persistenza, gestiscila tu in `onDismiss`."
    }
  ]
};

export default bannerDoc;
