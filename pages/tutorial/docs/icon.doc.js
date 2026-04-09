const iconDoc = {
  name: "Icon",
  title: "Icon",
  status: "stable",
  tags: ["media", "symbol", "micro-ui"],
  summary: "Renderer unificato per icone Material, icone custom e contenuti simbolici piu liberi. Il suo valore non e solo mostrare una glyph, ma tenere coerenti size, color, clickability e fallback tra font icon, svg symbol e contenuto custom.",
  signature: "_.Icon(nameOrProps, props?)",
  quickFacts: [
    {
      label: "Best for",
      value: "azioni micro, supporto semantico, token simbolici, toolbar e micro-stati"
    },
    {
      label: "Avoid for",
      value: "illustrazioni, media complessi o componenti identitari che meritano Avatar"
    },
    {
      label: "Mental model",
      value: "simbolo UI coerente, non semplice dettaglio decorativo"
    }
  ],
  useWhen: [
    {
      title: "Hai bisogno di un segnale visivo piccolo e rapido",
      text: "Icon e perfetta per supportare bottoni, badge, header e controlli minuti."
    },
    {
      title: "Vuoi unificare font icon e icone custom",
      text: "Il componente aiuta molto quando il design system usa sia Material icon sia simboli propri."
    },
    {
      title: "Ti serve anche un contenuto iconico custom",
      text: "Puoi andare oltre le glyph classiche e usare label o micro-media come simboli controllati."
    }
  ],
  avoidWhen: [
    {
      title: "L'icona deve raccontare un'identita",
      text: "Per persona, team o owner, `Avatar` resta il pattern corretto."
    },
    {
      title: "Il contenuto non e piu un simbolo",
      text: "Se il blocco diventa molto ricco o narrativo, probabilmente non stai piu usando un'icona."
    },
    {
      title: "La UI usa l'icona al posto del copy",
      text: "Icon da sola raramente basta a spiegare un'azione se il contesto non e chiarissimo."
    }
  ],
  essentialProps: [
    {
      name: "name",
      description: "Sorgente simbolica: Material icon, simbolo custom `#...` o contenuto custom."
    },
    {
      name: "size / radius",
      description: "Definiscono ingombro e superficie del simbolo."
    },
    {
      name: "color / textColor",
      description: "Controllano sfondo e colore del simbolo in modo coerente."
    },
    {
      name: "clickable",
      description: "Serve quando l'icona entra nel dominio dei micro-controlli interattivi."
    },
    {
      name: "outline / shadow / glossy / glow / glass / gradient / textGradient",
      description: "Varianti visive per adattare il simbolo a contesti diversi."
    }
  ],
  anatomy: [
    {
      title: "Symbol source",
      text: "Il nome o il contenuto custom sono il cuore semantico del componente."
    },
    {
      title: "Surface",
      text: "Dimensione, sfondo e radius cambiano molto la presenza dell'icona nel layout."
    },
    {
      title: "Interaction micro-layer",
      text: "Quando clickable e attivo, l'icona smette di essere puro supporto e diventa controllo."
    }
  ],
  slots: [
    {
      title: "Contenuto custom come `name`",
      text: "La via piu diretta per spingere l'icona oltre la sola glyph standard."
    }
  ],
  patterns: [
    {
      title: "Support icon",
      text: "Il caso piu classico: icon vicino a label, button o stato per accelerare la scansione.",
      tags: ["support"]
    },
    {
      title: "Brand / custom symbol",
      text: "Utile quando il prodotto usa un set di icone proprietarie o simboli custom.",
      tags: ["custom"]
    },
    {
      title: "Interactive micro-control",
      text: "Icon clickable per piccoli gesti contestuali, ma solo quando l'affordance resta chiara.",
      tags: ["interactive"]
    }
  ],
  accessibility: [
    {
      title: "Icona sola non basta sempre",
      text: "Se il gesto non e ovvio, l'icona dovrebbe avere supporto di copy, tooltip o contesto forte."
    },
    {
      title: "Clickable richiede affordance vera",
      text: "Se l'icona e interattiva, il comportamento focus/hover e il contesto devono renderlo evidente."
    }
  ],
  gotchas: [
    {
      title: "Troppe icone trasformano la UI in rumore",
      text: "Se tutto ha un simbolo, nulla guida davvero la lettura."
    },
    {
      title: "Colorare a caso riduce coerenza",
      text: "Le icone dovrebbero seguire logiche di tono del sistema, non essere decorate arbitrariamente."
    },
    {
      title: "Custom content va contenuto",
      text: "Se l'icona custom cresce troppo o porta troppo testo, probabilmente non stai piu usando Icon."
    }
  ]
};

export default iconDoc;
