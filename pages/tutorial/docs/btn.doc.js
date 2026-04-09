const btnDoc = {
  name: "Btn",
  title: "Btn",
  status: "stable",
  tags: ["action", "cta", "interactive"],
  summary: "Bottone di base del sistema UI per CTA primarie, azioni secondarie e micro-interazioni operative. Il suo valore non e solo cambiare colore, ma tenere coerenti tono, stati, icone e densita dell'interfaccia.",
  signature: "_.Btn(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "cta primarie, toolbar operative, action stack in card, dialog e form"
    },
    {
      label: "Avoid for",
      value: "navigazione strutturale lunga, tab switch o elementi che sono piu link che action"
    },
    {
      label: "Mental model",
      value: "azione esplicita con tono, stato e densita controllati"
    }
  ],
  useWhen: [
    {
      title: "Ti serve una CTA chiara e leggibile",
      text: "Usa `Btn` quando l'utente deve capire subito quale azione e primaria e quale e secondaria."
    },
    {
      title: "Vuoi coerenza tra temi e stati visuali",
      text: "Outline, glossy, glow, gradient e shadow sono gia disciplinati: meglio questo che creare pulsanti ad hoc in ogni pagina."
    },
    {
      title: "Devi combinare label e icona",
      text: "Il componente ha gia una grammatica solida per icona a sinistra o destra senza rompere allineamento e padding."
    }
  ],
  avoidWhen: [
    {
      title: "L'elemento e navigazione, non azione",
      text: "Per tab, item di menu o navigazione tra viste conviene usare il componente giusto, non un bottone travestito."
    },
    {
      title: "Hai bisogno di un contenitore complesso",
      text: "Se dentro il bottone vuoi layout ricchi, badge multipli o contenuti lunghi, stai uscendo dal pattern corretto."
    },
    {
      title: "Vuoi comunicare solo stato statico",
      text: "Se non c'e interazione reale, `Chip`, `Badge` o testo semantico sono piu onesti."
    }
  ],
  essentialProps: [
    {
      name: "color / state",
      description: "Definisce tono e gerarchia dell'azione. E la leva principale da scegliere prima dello stile.",
      tags: ["primary", "secondary", "success", "warning", "danger", "info"]
    },
    {
      name: "size",
      description: "Adatta densita e leggibilita del bottone ai contesti compatti o alle CTA piu visibili.",
      default: "md"
    },
    {
      name: "icon / iconRight",
      description: "Aggiungono supporto visivo all'azione senza costruire wrapper custom."
    },
    {
      name: "outline / shadow / glossy / glow / glass / gradient / textGradient",
      description: "Sono varianti di stile da usare con disciplina, non combinazioni da attivare tutte insieme."
    },
    {
      name: "loading / disabled / removable / clickable",
      description: "Coprono gli stati operativi del bottone: lavoro in corso, blocco temporaneo o affordance piu forte."
    }
  ],
  anatomy: [
    {
      title: "Action core",
      text: "Label, icona e stato di interazione sono il centro del componente."
    },
    {
      title: "Theme surface",
      text: "Colori, outline, gradient e glass sono una pelle coerente sopra la stessa semantica di base."
    },
    {
      title: "CTA hierarchy",
      text: "Il bottone esiste per far emergere una priorita operativa, non per decorare layout."
    }
  ],
  slots: [
    {
      title: "Children",
      text: "La label puo essere semplice testo o contenuto piu libero, ma il pattern migliore resta breve e diretto."
    }
  ],
  patterns: [
    {
      title: "Primary + secondary pair",
      text: "Un bottone pieno per l'azione principale e uno outline per il fallback: e il pairing piu sicuro in dialog e card.",
      tags: ["cta hierarchy"]
    },
    {
      title: "Toolbar actions",
      text: "Usa size coerenti e theme sobri quando i bottoni vivono in righe operative o toolbars dense.",
      tags: ["toolbar", "ops"]
    },
    {
      title: "Icon-supported action",
      text: "Aggiungi icona quando accelera scansione e riconoscimento, non solo per abbellire.",
      tags: ["icon"]
    }
  ],
  accessibility: [
    {
      title: "Label sempre comprensibile",
      text: "Se il bottone ha solo icona, mantieni nome accessibile chiaro tramite aria-label o contenuto equivalente."
    },
    {
      title: "Loading e disabled con semantica reale",
      text: "Non usare il solo stile per simulare uno stato: il bottone deve risultare davvero non attivabile o in corso."
    }
  ],
  gotchas: [
    {
      title: "Troppe varianti insieme degradano la gerarchia",
      text: "Glow + glossy + gradient + shadow spesso fanno perdere chiarezza invece di aumentarla."
    },
    {
      title: "Primary non vuol dire sempre colorato forte",
      text: "In toolbar dense o contesti molto rumorosi, anche una CTA primaria puo richiedere un tono piu sobrio."
    },
    {
      title: "Icona non sostituisce il copy",
      text: "Se la label e vaga, aggiungere un'icona non risolve il problema del contenuto."
    }
  ]
};

export default btnDoc;
