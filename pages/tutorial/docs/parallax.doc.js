const parallaxDoc = {
  name: "Parallax",
  title: "Parallax",
  status: "stable",
  tags: ["hero", "layout", "motion"],
  summary: "Hero composito con motion parallax, overlay, background, badge, actions e slot completi. Il suo valore non e solo l'effetto di movimento, ma offrire una superficie forte per campagne, workspace e summary visivi senza costruire ogni volta un hero custom.",
  signature: "_.Parallax(...children) | _.Parallax(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "hero campagne, launch board, workspace summary, teaser editoriali, pannelli visivi ad alto impatto"
    },
    {
      label: "Avoid for",
      value: "pagine dense, contenuti lunghi o casi in cui il motion rischia di distrarre dal task"
    },
    {
      label: "Mental model",
      value: "hero strutturato con copy, media e layer di profondita"
    }
  ],
  useWhen: [
    {
      title: "Hai un blocco introduttivo forte",
      text: "Parallax funziona bene quando titolo, stato, CTA e media devono convivere in una stessa superficie visiva."
    },
    {
      title: "Vuoi riusare una grammatica hero coerente",
      text: "Badge, eyebrow, title, subtitle, media, footer e actions riducono molto il markup custom ripetuto."
    },
    {
      title: "Ti serve passare da shortcut a slots completi",
      text: "Puoi partire da props editoriali e arrivare a layout molto custom via `slots` senza uscire dal componente."
    }
  ],
  avoidWhen: [
    {
      title: "L'effetto distrae dal compito",
      text: "In schermate puramente operative o molto dense, il parallax puo aggiungere rumore invece di aiutare."
    },
    {
      title: "Il contenuto e troppo lungo",
      text: "Se il blocco inizia a contenere troppi dati o controlli, probabilmente serve una page o una card composita."
    },
    {
      title: "Stai usando motion solo per decorazione",
      text: "Il valore del componente non e nel trucco visivo ma nella struttura del hero."
    }
  ],
  essentialProps: [
    {
      name: "background / overlay / state",
      description: "Definiscono la superficie visiva e il tono del blocco."
    },
    {
      name: "eyebrow / title / subtitle / badge / aside / media / footer / actions",
      description: "Sono la grammatica principale del hero rapido."
    },
    {
      name: "height / padding / gap / justify / align / contentMaxWidth",
      description: "Controllano layout, densita e presenza della superficie."
    },
    {
      name: "speed / disabled",
      description: "Regolano il livello di motion, fino al caso statico."
    },
    {
      name: "slots.background / header / aside / content / footer / actions",
      description: "Servono per scenari davvero custom senza perdere la struttura del componente."
    }
  ],
  anatomy: [
    {
      title: "Visual field",
      text: "Background e overlay costruiscono l'atmosfera del blocco e il suo contrasto."
    },
    {
      title: "Content stack",
      text: "Eyebrow, title, subtitle e media compongono il messaggio principale del hero."
    },
    {
      title: "Action edge",
      text: "Aside, footer e actions chiudono il blocco con stato, CTA o support content."
    }
  ],
  slots: [
    {
      title: "`background`, `header`, `aside`, `content`, `footer`, `actions`",
      text: "Sono gli slot giusti quando il hero deve diventare piu editoriale o piu applicativo."
    }
  ],
  patterns: [
    {
      title: "Campaign hero",
      text: "Perfetto per lanci, promozioni o summary visuali con KPI e CTA.",
      tags: ["campaign"]
    },
    {
      title: "Operations workspace hero",
      text: "Molto utile per cockpit e workspace che vogliono un blocco introduttivo forte ma strutturato.",
      tags: ["workspace"]
    },
    {
      title: "Static fallback",
      text: "Quando il motion non serve o va spento, il componente regge comunque bene come hero statico.",
      tags: ["static"]
    }
  ],
  accessibility: [
    {
      title: "Contrasto prima del motion",
      text: "Background e overlay devono proteggere leggibilita di copy e CTA."
    },
    {
      title: "Motion opzionale",
      text: "Usa velocita e disable con intenzione, soprattutto in contesti gia molto densi."
    }
  ],
  gotchas: [
    {
      title: "Parallax ovunque",
      text: "Se ogni sezione diventa un hero, il prodotto perde gerarchia e l'effetto smette di avere valore."
    },
    {
      title: "Layout troppo carico dentro il hero",
      text: "Quando ci finiscono troppi widget, card e controlli, il blocco perde forza editoriale."
    },
    {
      title: "Background bello ma illegibile",
      text: "La superficie puo essere ricca, ma il testo deve restare sempre la priorita."
    }
  ]
};

export default parallaxDoc;
