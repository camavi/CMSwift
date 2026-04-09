const tooltipDoc = {
  name: "Tooltip",
  title: "Tooltip",
  status: "stable",
  tags: ["overlay", "microcopy", "context help"],
  summary: "Overlay leggero per microcopy, spiegazioni contestuali, KPI hint e piccoli pannelli informativi. Il suo valore non e riempire la UI di hover text, ma dare contesto puntuale senza sporcare il layout principale.",
  signature: "_.Tooltip(propsOrTarget, content?)",
  quickFacts: [
    {
      label: "Best for",
      value: "microcopy inline, spiegazioni KPI, piccoli dettagli di rollout, aiuti contestuali"
    },
    {
      label: "Avoid for",
      value: "flussi lunghi, conferme critiche, form complessi o contenuti che meritano un dialog"
    },
    {
      label: "Mental model",
      value: "context layer breve e vicino al target, non mini-modal improvvisata"
    }
  ],
  useWhen: [
    {
      title: "Hai bisogno di spiegare senza ingombrare",
      text: "Tooltip e la scelta giusta quando il contenuto serve solo a chi chiede piu dettaglio in quel punto preciso."
    },
    {
      title: "Vuoi aggiungere contesto a KPI e badge",
      text: "In dashboard e card funziona molto bene per spiegare metriche, fonti dati e soglie senza allungare il blocco."
    },
    {
      title: "Ti serve anche una modalita click o imperativa",
      text: "Non e limitato all'hover: puo funzionare con click, focus o API `bind/open/close/toggle`."
    }
  ],
  avoidWhen: [
    {
      title: "Il contenuto richiede decisioni importanti",
      text: "Se l'utente deve confermare, correggere o compilare qualcosa, il pattern corretto di solito e `Dialog`."
    },
    {
      title: "Il testo e lungo o strutturato in molti step",
      text: "Tooltip ricchi esistono, ma se iniziano a sembrare una card volante stai sbagliando componente."
    },
    {
      title: "L'informazione deve essere sempre visibile",
      text: "Se tutti devono leggere quel contenuto, non nasconderlo dietro hover o click."
    }
  ],
  essentialProps: [
    {
      name: "title / content / text / footer / icon",
      description: "Costruiscono il contenuto del tooltip da microcopy minimo a pannello ricco."
    },
    {
      name: "trigger",
      description: "Definisce come si apre: hover/focus, click oppure controllo manuale.",
      default: "hover/focus"
    },
    {
      name: "interactive / closeOnOutside / closeOnEsc",
      description: "Sono le leve che trasformano il tooltip da microcopy passivo a piccolo layer interattivo."
    },
    {
      name: "placement / delay / hideDelay",
      description: "Servono a rendere il comportamento piu naturale rispetto al contesto e al target."
    },
    {
      name: "slots + runtime API",
      description: "Slots per target, title, content, footer; API `bind`, `open`, `close`, `toggle` per casi piu controllati."
    }
  ],
  anatomy: [
    {
      title: "Target",
      text: "Il tooltip nasce sempre in relazione a un trigger chiaro: bottone, badge, icona, chip o anchor custom."
    },
    {
      title: "Context layer",
      text: "Titolo, contenuto e footer devono restare compatti, leggibili e immediatamente pertinenti."
    },
    {
      title: "Dismiss model",
      text: "Quando diventa interactive, il modo in cui si chiude e parte del contratto UX."
    }
  ],
  slots: [
    {
      title: "`target`, `icon`, `title`, `content`, `footer`",
      text: "Permettono di intervenire sulle parti del layer senza perdere il comportamento standard."
    }
  ],
  patterns: [
    {
      title: "Inline microcopy",
      text: "Perfetto per bottoni, chip o icone che richiedono una spiegazione rapida.",
      tags: ["inline", "lightweight"]
    },
    {
      title: "Rich KPI tooltip",
      text: "Molto utile in card e dashboard per aggiungere fonte, definizione e stato di una metrica.",
      tags: ["dashboard", "metrics"]
    },
    {
      title: "Interactive click tooltip",
      text: "Quando il contenuto include CTA leggere o piccoli controlli, ma non merita ancora un dialog.",
      tags: ["interactive", "click"]
    }
  ],
  accessibility: [
    {
      title: "Il trigger deve essere chiaro e focalizzabile",
      text: "Se il tooltip porta informazione importante, il target non puo essere un elemento ambiguo o non raggiungibile."
    },
    {
      title: "Interactive richiede chiusura prevedibile",
      text: "Se aggiungi CTA o contenuto attivo, `Esc`, outside click e affordance di chiusura diventano fondamentali."
    }
  ],
  gotchas: [
    {
      title: "Tooltip non deve diventare un dialog in miniatura",
      text: "Più cresce il contenuto, più perdi chiarezza su ruolo e aspettative del pattern."
    },
    {
      title: "Hover non basta sempre",
      text: "Su mobile o su target piu complessi, click o bind imperativo possono essere una scelta piu robusta."
    },
    {
      title: "Troppi tooltip degradano la pagina",
      text: "Se ogni badge, icona e label ha un tooltip, l'interfaccia sembra insicura invece che chiara."
    }
  ]
};

export default tooltipDoc;
