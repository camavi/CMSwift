const gridColDoc = {
  name: "GridCol",
  title: "GridCol",
  status: "stable",
  tags: ["layout", "grid item", "panel"],
  summary: "Item strutturato per `Grid` che unisce span responsive, aree nominate e composizione interna in un solo componente. Il suo valore e evitare wrapper multipli quando una colonna deve essere insieme item di layout e pannello di contenuto.",
  signature: "_.GridCol(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "widget dashboard, board dense, tile responsive, regioni nominate in CSS Grid"
    },
    {
      label: "Avoid for",
      value: "blocchi semplici che non hanno bisogno di span, area o struttura interna"
    },
    {
      label: "Mental model",
      value: "grid item + panel shell nello stesso punto"
    }
  ],
  useWhen: [
    {
      title: "Vuoi uno span responsive senza wrapper extra",
      text: "GridCol e il punto giusto quando l'item deve ragionare in termini di `span`, `md`, `lg` e `rowSpan`."
    },
    {
      title: "Hai bisogno di start/body/end nello stesso item",
      text: "Ti evita di annidare subito Card o altri contenitori solo per avere una struttura interna leggibile."
    },
    {
      title: "Stai lavorando con aree o grid dense",
      text: "Con `area`, `auto`, `panel` e `fullHeight` funziona bene in template piu complessi."
    }
  ],
  avoidWhen: [
    {
      title: "Ti serve solo una colonna verticale semplice",
      text: "Se il problema non e la griglia ma lo stack interno, `Col` puo essere piu onesto."
    },
    {
      title: "Non stai davvero usando CSS Grid",
      text: "Fuori da un contesto grid, GridCol perde gran parte del suo valore."
    },
    {
      title: "La struttura interna e gia tutta dentro una Card",
      text: "Se il grid item non fa altro che ospitare una card unica, a volte il markup puo restare piu semplice."
    }
  ],
  essentialProps: [
    {
      name: "span / md / lg / rowSpan / auto / area",
      description: "Definiscono il ruolo del componente dentro la griglia."
    },
    {
      name: "panel / padding / gap / fullHeight",
      description: "Costruiscono la superficie interna del tile senza bisogno di wrapper aggiuntivi."
    },
    {
      name: "start / body / end",
      description: "Sono la grammatica interna piu utile per widget e pannelli di dashboard."
    },
    {
      name: "color / outline / glossy / lightShadow",
      description: "Aiutano a caratterizzare il tile quando il contenuto ha bisogno di tono proprio."
    },
    {
      name: "contentJustify / align",
      description: "Servono a distribuire il contenuto interno, soprattutto nei pannelli alti o asimmetrici."
    }
  ],
  anatomy: [
    {
      title: "Grid placement",
      text: "Span, breakpoint e area definiscono dove vive il tile nella board."
    },
    {
      title: "Panel shell",
      text: "Con `panel` e `padding` il componente diventa subito una superficie pronta all'uso."
    },
    {
      title: "Internal regions",
      text: "Start, body ed end ti aiutano a comporre metriche, CTA e stato senza wrapper superflui."
    }
  ],
  slots: [
    {
      title: "Children oppure region props",
      text: "Puoi usarlo come contenitore semplice o come tile strutturato, ma conviene scegliere una strategia chiara per blocco."
    }
  ],
  patterns: [
    {
      title: "Responsive dashboard tile",
      text: "Pattern forte per metriche e panel che cambiano span ai breakpoint.",
      tags: ["dashboard", "responsive"]
    },
    {
      title: "Area-based layout",
      text: "Molto utile in template con `areas` nominate e layout editoriali o operative board.",
      tags: ["areas"]
    },
    {
      title: "Structured widget",
      text: "Start, body, end rendono il tile leggibile anche quando ospita CTA e progress.",
      tags: ["widget"]
    }
  ],
  accessibility: [
    {
      title: "Ordine logico prima dell'estetica",
      text: "Anche se il tile occupa piu righe o aree, il contenuto interno deve restare leggibile e ben ordinato."
    },
    {
      title: "Tono visivo coerente col ruolo",
      text: "Se colori e badge del tile suggeriscono priorita o rischio, quel significato deve essere reale e non solo decorativo."
    }
  ],
  gotchas: [
    {
      title: "GridCol non deve sostituire ogni contenitore",
      text: "Se non stai sfruttando placement e struttura interna, il componente puo risultare piu pesante del necessario."
    },
    {
      title: "Troppi span speciali rendono la board fragile",
      text: "Quando ogni tile ha regole diverse, la griglia diventa difficile da mantenere."
    },
    {
      title: "Panel dentro panel va dosato",
      text: "Se infili Card ricche dentro GridCol gia strutturati, il risultato puo diventare ridondante."
    }
  ]
};

export default gridColDoc;
