const rowDoc = {
  name: "Row",
  title: "Row",
  status: "stable",
  tags: ["layout", "flex row", "toolbar"],
  summary: "Primitive flex orizzontale per toolbar, header operativi, strips di metriche e gruppi di controlli. Il suo valore e dare una grammatica pulita a gap, wrap, align, justify e regioni `start/default/end` senza markup flex ripetuto ovunque.",
  signature: "_.Row(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "toolbar, action bar, header, strips di chip e bottoni, layout orizzontali responsivi"
    },
    {
      label: "Avoid for",
      value: "layout a griglia vera o colonne verticali complesse"
    },
    {
      label: "Mental model",
      value: "barra flex orizzontale con regioni utili e wrapping controllato"
    }
  ],
  useWhen: [
    {
      title: "Gli elementi vivono in una singola riga logica",
      text: "Bottoni, chip, filtri, avatar e CTA sono il territorio naturale di Row."
    },
    {
      title: "Ti serve controllo su wrap e distribuzione",
      text: "Gap, justify, align e direction coprono quasi tutti i casi di toolbar e header operativi."
    },
    {
      title: "Vuoi start/default/end senza wrapper manuali",
      text: "Per header e action bar, le regioni integrate evitano molto markup superfluo."
    }
  ],
  avoidWhen: [
    {
      title: "La struttura e davvero a griglia",
      text: "Se il layout richiede colonne, span o aree, `Grid` resta il pattern corretto."
    },
    {
      title: "Il contenuto e soprattutto verticale",
      text: "Quando la logica e stack, `Col` risulta piu naturale."
    },
    {
      title: "Stai usando Row solo per aggiungere un po di gap",
      text: "Se non stai sfruttando il comportamento flex, forse basta un contenitore piu semplice."
    }
  ],
  essentialProps: [
    {
      name: "gap / rowGap / columnGap",
      description: "Sono le leve piu usate per ritmo e leggibilita."
    },
    {
      name: "align / justify / wrap / direction / inline",
      description: "Definiscono il comportamento flex della riga."
    },
    {
      name: "start / body / end",
      description: "Molto utili per header strutturati e barre azione con estremi chiari."
    },
    {
      name: "full / width / minWidth / maxWidth",
      description: "Servono a controllare quanto la riga occupa o eccede nello spazio disponibile."
    }
  ],
  anatomy: [
    {
      title: "Main strip",
      text: "La row e un contenitore orizzontale che dovrebbe restare facile da scansionare."
    },
    {
      title: "Start / middle / end regions",
      text: "Quando la riga e piu articolata, queste regioni aiutano a tenere ordine."
    },
    {
      title: "Wrap behavior",
      text: "Il wrapping fa parte del design del componente e va deciso, non lasciato casuale."
    }
  ],
  slots: [
    {
      title: "Region-based composition",
      text: "Start, default e end sono gia un piccolo sistema di composizione integrato."
    }
  ],
  patterns: [
    {
      title: "Toolbar actions",
      text: "Pattern classico per CTA, filtri e stato rapido nella stessa barra.",
      tags: ["toolbar"]
    },
    {
      title: "Structured header",
      text: "Avatar o icona a sinistra, contenuto centrale e action cluster a destra.",
      tags: ["header"]
    },
    {
      title: "Metric strip",
      text: "Combinata con `Col`, Row diventa ottima per metriche e dashboard strips responsive.",
      tags: ["dashboard"]
    }
  ],
  accessibility: [
    {
      title: "Ordine DOM coerente col significato",
      text: "La riga puo essere molto flessibile, ma l'ordine dei contenuti deve restare logico."
    },
    {
      title: "Wrap e overflow vanno gestiti consciamente",
      text: "Una toolbar che rompe male su viewport stretti peggiora rapidamente l'usabilita."
    }
  ],
  gotchas: [
    {
      title: "Troppi elementi eterogenei nella stessa riga la rendono fragile",
      text: "Quando la row ospita troppi pattern diversi, la lettura e il wrapping si degradano."
    },
    {
      title: "Inline va usato con intenzione",
      text: "Una row inline cambia molto il modo in cui occupa spazio e puo sorprendere chi legge il layout."
    },
    {
      title: "Direction non dovrebbe essere un ripiego",
      text: "Se spesso passi da row a column, forse il componente di partenza doveva essere `Col`."
    }
  ]
};

export default rowDoc;
