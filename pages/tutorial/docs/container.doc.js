const containerDoc = {
  name: "Container",
  title: "Container",
  status: "stable",
  tags: ["layout", "width", "section shell"],
  summary: "Contenitore di larghezza, gutter e struttura per sezioni, strip e workspace locali. Il suo valore non e solo mettere un max-width, ma offrire un livello intermedio tra wrapper neutro e pagina strutturata, con supporto a regioni, header/content/footer e modalita fluid.",
  signature: "_.Container(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "section wrapper, strip full width, workspace locali, layout con width discipline"
    },
    {
      label: "Avoid for",
      value: "shell globali o pagine che hanno gia bisogno della grammatica piena di Page"
    },
    {
      label: "Mental model",
      value: "wrapper strutturale con controllo di larghezza e regioni"
    }
  ],
  useWhen: [
    {
      title: "Vuoi governare width e padding in modo esplicito",
      text: "Container e perfetto quando la vera decisione e quanto respiro dare al contenuto."
    },
    {
      title: "Ti serve un wrapper piu ricco di un semplice div",
      text: "Header, content, footer e regioni lo rendono utile anche per section piu strutturate."
    },
    {
      title: "Hai casi sia fixed-width sia fluid",
      text: "Il componente gestisce bene entrambe le modalità senza dover inventare varianti ad hoc."
    }
  ],
  avoidWhen: [
    {
      title: "Ti serve una pagina completa",
      text: "Se ci sono hero, actions e grammatica di vista vera, `Page` e piu adatta."
    },
    {
      title: "Stai costruendo un layout multi-rail",
      text: "Per header/drawer/nav/page/footer globali serve `Layout`."
    },
    {
      title: "Il wrapper non ha responsabilita reali",
      text: "Se non stai gestendo width, gutter o regioni, un contenitore semplice puo bastare."
    }
  ],
  essentialProps: [
    {
      name: "maxWidth / fluid",
      description: "La decisione principale del componente: contenuto disciplinato o piena larghezza."
    },
    {
      name: "padding / paddingX / paddingY / sectionGap",
      description: "Definiscono il ritmo del contenitore e delle sue sezioni."
    },
    {
      name: "display / align / justify / wrap / gap",
      description: "Lo rendono utile anche per strip e layout interni, non solo per width."
    },
    {
      name: "start / content / end / before / header / footer",
      description: "Trasformano il wrapper in un piccolo orchestratore di sezione."
    },
    {
      name: "tag / class / style",
      description: "Permettono di adattare il container al dominio della pagina senza perdere il pattern base."
    }
  ],
  anatomy: [
    {
      title: "Width discipline",
      text: "Max width, fluid e gutter sono il primo ruolo del componente."
    },
    {
      title: "Section structure",
      text: "Before, header, content e footer aiutano a dare forma a blocchi piu complessi."
    },
    {
      title: "Layout bridge",
      text: "Container vive bene tra wrapper neutro e page shell, senza sostituirli entrambi."
    }
  ],
  slots: [
    {
      title: "Region-style composition",
      text: "Le regioni strutturali sono il modo corretto per costruire section composite senza markup disperso."
    }
  ],
  patterns: [
    {
      title: "Width wrapper",
      text: "Caso piu semplice: decidi max width e gutter di una sezione o pagina interna.",
      tags: ["wrapper"]
    },
    {
      title: "Structured section",
      text: "Ottimo per hero locali, stream operativi o blocchi workspace con header/content/footer.",
      tags: ["section"]
    },
    {
      title: "Live layout shell",
      text: "Molto utile quando il team vuole testare rapidamente width, fluid e distribuzione senza cambiare il markup base.",
      tags: ["playground", "layout"]
    }
  ],
  accessibility: [
    {
      title: "Il container dovrebbe aiutare la leggibilita",
      text: "Max width e padding esistono proprio per migliorare scansione e ritmo, non solo per estetica."
    },
    {
      title: "Le regioni strutturali devono restare logiche",
      text: "Header, content e footer nel container dovrebbero chiarire il contenuto, non complicarlo."
    }
  ],
  gotchas: [
    {
      title: "Container non e sempre Page",
      text: "Se aggiungi troppe regioni e contenuti fino a simulare una view completa, forse il componente giusto e un altro."
    },
    {
      title: "Fluid va usato con intenzione",
      text: "Una strip full width ha senso solo se il contenuto beneficia davvero di quella apertura."
    },
    {
      title: "Width e layout vanno tenuti coerenti",
      text: "Se maxWidth, gap e justify cambiano senza logica, il wrapper smette di aiutare la pagina."
    }
  ]
};

export default containerDoc;
