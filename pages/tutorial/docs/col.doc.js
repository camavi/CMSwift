const colDoc = {
  name: "Col",
  title: "Col",
  status: "stable",
  tags: ["layout", "column", "stack"],
  summary: "Primitive verticale che puo fare sia da item responsive nel sistema a 24 colonne sia da stack di contenuto. Il suo valore e unire span responsive e composizione verticale in un componente solo, senza costringerti a cambiare pattern ogni volta.",
  signature: "_.Col(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "layout responsive a 24 colonne, sidebar, stack verticali, pannelli strutturati"
    },
    {
      label: "Avoid for",
      value: "layout orizzontali semplici o griglie con aree e span complessi"
    },
    {
      label: "Mental model",
      value: "colonna responsive che puo diventare anche un contenitore verticale vero"
    }
  ],
  useWhen: [
    {
      title: "Sei dentro il sistema Row/Col a 24 colonne",
      text: "Col e il posto giusto per definire `col`, `md`, `lg` e altri span responsive."
    },
    {
      title: "Vuoi anche impilare contenuto verticalmente",
      text: "Con gap, align, justify, start/body/end e `stack`, Col smette di essere solo item di layout."
    },
    {
      title: "Ti serve una sidebar o un pannello verticale ordinato",
      text: "Per checklist, filtri, board laterali o pannelli operativi funziona molto bene."
    }
  ],
  avoidWhen: [
    {
      title: "La relazione principale e orizzontale",
      text: "Se il contenuto vive in barra o strip, `Row` comunica meglio il pattern."
    },
    {
      title: "Il layout e davvero grid-based",
      text: "Quando hai bisogno di aree, rowSpan o tile complessi, `Grid` e `GridCol` sono piu forti."
    },
    {
      title: "Ti serve solo un wrapper neutro",
      text: "Se non stai usando span o stack, forse il markup puo restare piu semplice."
    }
  ],
  essentialProps: [
    {
      name: "col / span / sm / md / lg / auto",
      description: "Definiscono lo span responsive della colonna dentro il sistema a 24 colonne."
    },
    {
      name: "gap / align / justify / stack",
      description: "Trasformano la colonna in un vero stack verticale e non solo in item di layout."
    },
    {
      name: "start / body / end",
      description: "Sono molto utili per sidebar, pannelli checklist e blocchi editoriali strutturati."
    },
    {
      name: "scroll / height / width / fill",
      description: "Servono nei casi in cui la colonna diventa un pannello con comportamento proprio."
    }
  ],
  anatomy: [
    {
      title: "Responsive span",
      text: "La colonna vive prima di tutto nel sistema di griglia a 24 colonne."
    },
    {
      title: "Vertical stack",
      text: "Quando usi gap, align e justify, Col diventa un contenitore verticale a tutti gli effetti."
    },
    {
      title: "Structured regions",
      text: "Start, body ed end permettono di costruire pannelli piu leggibili senza wrapper ridondanti."
    }
  ],
  slots: [
    {
      title: "Header / content / footer equivalenti a start / body / end",
      text: "Aiutano a rendere esplicita la struttura di pannelli e colonne piu narrative."
    }
  ],
  patterns: [
    {
      title: "Responsive metric column",
      text: "Pattern molto usato con `Row` per dashboard a colonne che si adattano ai breakpoint.",
      tags: ["responsive"]
    },
    {
      title: "Sidebar stack",
      text: "Ottima per filtri, setting e checklist quando il contenuto deve scorrere in verticale.",
      tags: ["sidebar"]
    },
    {
      title: "Structured panel",
      text: "Con start/body/end diventa un contenitore forte per workflow e pannelli operativi.",
      tags: ["panel"]
    }
  ],
  accessibility: [
    {
      title: "Ordine verticale chiaro",
      text: "Quando la colonna contiene molti blocchi, la gerarchia tra header, corpo e footer deve restare leggibile."
    },
    {
      title: "Scroll interno solo se davvero necessario",
      text: "Pannelli scrollabili dentro colonne richiedono attenzione per non creare esperienza frustrante."
    }
  ],
  gotchas: [
    {
      title: "Col non deve sostituire qualsiasi stack del progetto",
      text: "Se non stai usando span o comportamento verticale reale, puo essere un componente troppo forte."
    },
    {
      title: "Scroll interno va introdotto con criterio",
      text: "Una colonna scrollabile dentro layout gia complessi puo complicare molto l'interazione."
    },
    {
      title: "Mixare troppi ruoli nello stesso punto rende il layout opaco",
      text: "Meglio capire se una colonna sta facendo da grid item, stack o pannello, e usare il componente con intenzione."
    }
  ]
};

export default colDoc;
