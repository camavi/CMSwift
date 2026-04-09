const pageDoc = {
  name: "Page",
  title: "Page",
  status: "stable",
  tags: ["layout", "page shell", "content page"],
  summary: "Contenitore principale per viste applicative, dashboard e pagine editoriali strutturate. Il suo valore non e solo dare padding, ma organizzare hero, header contestuale, body, aside, footer e actions in una grammatica di pagina coerente.",
  signature: "_.Page(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "dashboard locali, pagine operative, section hero + body, viste con actions e footer"
    },
    {
      label: "Avoid for",
      value: "blocchi piccoli interni o shell multi-area che appartengono a Layout"
    },
    {
      label: "Mental model",
      value: "pagina strutturata dentro la shell, non semplice div con max width"
    }
  ],
  useWhen: [
    {
      title: "La vista ha una vera struttura di pagina",
      text: "Hero, titolo, stati, CTA e body complesso convivono bene dentro Page."
    },
    {
      title: "Vuoi un pattern comune tra overview e release views",
      text: "Il componente regge sia dashboard operative sia pagine più editoriali o focus."
    },
    {
      title: "Hai bisogno di slot forti",
      text: "Con hero, body, footer e actions custom puoi costruire pagine molto diverse restando nello stesso contratto."
    }
  ],
  avoidWhen: [
    {
      title: "Stai costruendo la shell applicativa",
      text: "Se il problema e header/drawer/nav/page/footer globale, il componente giusto e `Layout`."
    },
    {
      title: "Il contenuto e troppo piccolo",
      text: "Per card singole o pannelli interni Page e spesso troppo forte."
    },
    {
      title: "Vuoi solo un contenitore neutro",
      text: "In quel caso `Container` puo essere piu adatto e meno opinionated."
    }
  ],
  essentialProps: [
    {
      name: "hero / icon / eyebrow / title / subtitle",
      description: "Sono la grammatica superiore della pagina."
    },
    {
      name: "header / aside / footer / actions",
      description: "Aggiungono contesto, CTA e regioni secondarie senza uscire dal componente."
    },
    {
      name: "body",
      description: "Permette di dichiarare il contenuto principale senza affidarsi solo ai children."
    },
    {
      name: "dense / centered / narrow / flat / maxWidth",
      description: "Leve che cambiano molto la presenza della pagina."
    },
    {
      name: "slots",
      description: "Consentono override mirati o una pagina quasi interamente custom mantenendo il telaio."
    }
  ],
  anatomy: [
    {
      title: "Page intro",
      text: "Hero, titolo e subtitle orientano subito la vista."
    },
    {
      title: "Page body",
      text: "Il body resta libero: cards, grid, list e form possono viverci senza vincoli rigidi."
    },
    {
      title: "Context rails",
      text: "Aside, footer e actions aggiungono il contesto locale della pagina."
    }
  ],
  slots: [
    {
      title: "`hero`, `icon`, `title`, `subtitle`, `header`, `aside`, `body`, `footer`, `actions`",
      text: "Sono la strada giusta per adattare la pagina a use case molto diversi senza perdere la grammatica comune."
    }
  ],
  patterns: [
    {
      title: "Operational page",
      text: "Molto adatta a control room, board locali e pagine con metriche e lista priorita.",
      tags: ["operations"]
    },
    {
      title: "Release / focus page",
      text: "Pattern forte per pagine compatte ma molto orientate all'azione e alla review.",
      tags: ["release"]
    },
    {
      title: "Slot-driven page",
      text: "Utile quando il team vuole mantenere il telaio comune ma con rendering piu editoriale o data-driven.",
      tags: ["slots"]
    }
  ],
  accessibility: [
    {
      title: "La pagina deve avere una gerarchia leggibile",
      text: "Hero, header locale, body e footer dovrebbero aiutare la lettura e non confonderla."
    },
    {
      title: "Le CTA vanno tenute visibili ma non invasive",
      text: "Actions e aside dovrebbero supportare il compito principale senza competere col body."
    }
  ],
  gotchas: [
    {
      title: "Page non deve sostituire Layout",
      text: "Se inizi a usarla per orchestrare shell globali, il confine con Layout si perde."
    },
    {
      title: "Troppe regioni insieme appesantiscono la vista",
      text: "Se usi hero, aside, footer, actions e body ricchissimo nello stesso punto, la pagina puo saturarsi."
    },
    {
      title: "Slots totali richiedono disciplina",
      text: "Più spingi il custom rendering, più devi mantenere coerente la grammatica della pagina."
    }
  ]
};

export default pageDoc;
