const headerDoc = {
  name: "Header",
  title: "Header",
  status: "stable",
  tags: ["layout", "page header", "workspace"],
  summary: "Testata strutturata per shell applicative e pagine operative. Il suo valore non e solo mostrare un titolo, ma orchestrare identity, metadata, CTA, drawer toggle e override via slot senza ricreare ogni volta lo stesso schema.",
  signature: "_.Header(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "workspace header, page title bar, control room top section, operation desk"
    },
    {
      label: "Avoid for",
      value: "blocchi editoriali semplici o pagine che non hanno una vera testata operativa"
    },
    {
      label: "Mental model",
      value: "testata di pagina o shell con regioni forti e CTA"
    }
  ],
  useWhen: [
    {
      title: "La pagina ha bisogno di una vera testata",
      text: "Header funziona bene quando titolo, contesto, meta e azioni devono convivere in modo stabile."
    },
    {
      title: "Vuoi integrare shell e pagina",
      text: "Con left/right, actions e drawer toggle si aggancia bene a Layout e AppShell."
    },
    {
      title: "Ti serve anche una modalita custom via slot",
      text: "Se il pattern standard non basta, gli slot permettono di ristrutturare il contenuto senza perdere il componente."
    }
  ],
  avoidWhen: [
    {
      title: "Ti basta un titolo e un paragrafo",
      text: "Se la pagina non ha una vera top bar, un blocco piu semplice e spesso piu onesto."
    },
    {
      title: "Stai cercando una toolbar",
      text: "Se il cuore e una barra azioni, `Toolbar` racconta meglio il pattern."
    },
    {
      title: "La parte superiore e narrativa, non operativa",
      text: "Per hero editoriali o intro piu aperte, altri layout possono risultare piu naturali."
    }
  ],
  essentialProps: [
    {
      name: "title / subtitle / eyebrow / icon",
      description: "Il core semantico della testata."
    },
    {
      name: "content / meta / actions",
      description: "Aggiungono contesto e CTA senza costringerti a wrapper manuali."
    },
    {
      name: "left / right / drawerStateKey",
      description: "Sono utili quando la testata deve dialogare con shell e rail laterali."
    },
    {
      name: "dense / stack / sticky / divider / elevated",
      description: "Leve che cambiano molto comportamento e presenza della testata."
    },
    {
      name: "slots",
      description: "Permettono override su left, center, right, title, subtitle, meta, content e actions."
    }
  ],
  anatomy: [
    {
      title: "Identity block",
      text: "Eyebrow, icon, title e subtitle costruiscono la parte piu riconoscibile della testata."
    },
    {
      title: "Operational context",
      text: "Content e meta portano stato, tags, metrics e segnali di contesto."
    },
    {
      title: "Action rail",
      text: "Actions e regioni laterali completano la testata come barra operativa vera."
    }
  ],
  slots: [
    {
      title: "`left`, `center`, `right`, `title`, `subtitle`, `meta`, `content`, `actions`",
      text: "Ti consentono di spingere il pattern molto oltre il rendering base senza perdere coerenza generale."
    }
  ],
  patterns: [
    {
      title: "Workspace header",
      text: "Pattern forte per operations, finance, support e altre shell applicative.",
      tags: ["workspace"]
    },
    {
      title: "Reactive control header",
      text: "Molto utile quando la testata riflette stato, densita, modalita o viste correnti.",
      tags: ["reactive"]
    },
    {
      title: "Custom slot header",
      text: "Quando la pagina ha una gerarchia piu ricca ma vuoi restare dentro il componente.",
      tags: ["slots"]
    }
  ],
  accessibility: [
    {
      title: "La gerarchia testuale deve restare netta",
      text: "Title, subtitle e meta non dovrebbero competere tra loro o confondere la priorita visiva."
    },
    {
      title: "Le azioni principali devono emergere bene",
      text: "Se la testata diventa molto densa, le CTA importanti non devono perdersi nel resto dei token."
    }
  ],
  gotchas: [
    {
      title: "Troppi chip e metadati soffocano il titolo",
      text: "La testata deve prima orientare, poi dettagliare."
    },
    {
      title: "Header non e Toolbar con titolo",
      text: "Se il componente vive solo per organizzare azioni, forse stai usando il pattern sbagliato."
    },
    {
      title: "Slots totali vanno usati con criterio",
      text: "Se tutto e custom, la testata puo perdere la riconoscibilita del design system."
    }
  ]
};

export default headerDoc;
