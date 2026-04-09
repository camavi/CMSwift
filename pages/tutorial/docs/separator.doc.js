const separatorDoc = {
  name: "Separator",
  title: "Separator",
  status: "stable",
  tags: ["layout", "divider", "rhythm"],
  summary: "Separatore visivo orizzontale o verticale per scandire sezioni, toolbars e gruppi di contenuto. Il suo valore non e solo disegnare una linea, ma gestire ritmo e separazione senza ricorrere a bordi casuali sparsi nel layout.",
  signature: "_.Separator(props)",
  quickFacts: [
    {
      label: "Best for",
      value: "dividere blocchi, separare gruppi di azioni, scandire card e pannelli"
    },
    {
      label: "Avoid for",
      value: "compensare problemi di spacing o sostituire un vero layout"
    },
    {
      label: "Mental model",
      value: "separazione semantica leggera, non decorazione gratuita"
    }
  ],
  useWhen: [
    {
      title: "Hai bisogno di un taglio visivo netto ma leggero",
      text: "Separator funziona bene quando serve marcare un cambio di blocco senza costruire wrapper ad hoc."
    },
    {
      title: "Vuoi tenere il ritmo del layout coerente",
      text: "Molto meglio un separatore standard che bordi e hack CSS sparsi in ogni pagina."
    },
    {
      title: "Serve anche in verticale",
      text: "Nelle toolbar e nei gruppi di azioni il separatore verticale puo chiarire molto il layout."
    }
  ],
  avoidWhen: [
    {
      title: "Il problema vero e lo spacing",
      text: "Se due blocchi stanno male solo per distanza, prima risolvi il ritmo con layout e gap."
    },
    {
      title: "Stai cercando di dare struttura a una pagina disordinata",
      text: "Troppe linee spesso coprono un problema di gerarchia invece di risolverlo."
    },
    {
      title: "La UI e gia piena di contorni",
      text: "In interfacce molto bordate un separatore in piu puo solo aggiungere rumore."
    }
  ],
  essentialProps: [
    {
      name: "orientation",
      description: "Serve per scegliere tra separatore orizzontale e verticale."
    },
    {
      name: "size / thickness / inset",
      description: "Controllano impronta e presenza del divider nel layout."
    },
    {
      name: "color / state",
      description: "Da usare con prudenza quando il separatore deve portare un tono specifico."
    }
  ],
  anatomy: [
    {
      title: "Divider line",
      text: "La linea e il gesto minimo del componente: deve restare semplice e leggibile."
    },
    {
      title: "Layout spacing companion",
      text: "Separator funziona bene insieme a gap e padding, non al loro posto."
    }
  ],
  slots: [
    {
      title: "Nessuno",
      text: "Il componente e volutamente minimale e non ha bisogno di una superficie a slot."
    }
  ],
  patterns: [
    {
      title: "Section divider",
      text: "Perfetto per segnare il passaggio tra blocchi di contenuto o sotto-sezioni.",
      tags: ["sections"]
    },
    {
      title: "Toolbar split",
      text: "Molto utile in orizzontale/verticale per separare gruppi di azioni in header e toolbars.",
      tags: ["toolbar"]
    }
  ],
  accessibility: [
    {
      title: "Il separatore deve chiarire, non confondere",
      text: "Se usato troppo spesso perde valore e rende piu faticosa la lettura della pagina."
    }
  ],
  gotchas: [
    {
      title: "Troppi separator indicano un problema di layout",
      text: "Quando una pagina ne richiede molti, il problema spesso non e la mancanza di linee ma di gerarchia."
    },
    {
      title: "Colorarlo troppo lo trasforma in rumore",
      text: "Il divider dovrebbe quasi sempre restare sobrio e di supporto al contenuto."
    }
  ]
};

export default separatorDoc;
