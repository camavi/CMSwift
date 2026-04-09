const spacerDoc = {
  name: "Spacer",
  title: "Spacer",
  status: "stable",
  tags: ["layout", "spacing", "utility"],
  summary: "Utility minima per distribuire spazio tra elementi in row, toolbar e header. Il suo valore non e estetico: serve a separare responsabilmente blocchi di UI senza introdurre wrapper inutili o CSS ad hoc per ogni riga.",
  signature: "_.Spacer() | _.Spacer(props)",
  quickFacts: [
    {
      label: "Best for",
      value: "toolbar, row, header, footer, cluster con elemento a sinistra e uno a destra"
    },
    {
      label: "Avoid for",
      value: "spazi verticali tra sezioni o layout complessi che richiedono grid/flex dichiarati bene"
    },
    {
      label: "Mental model",
      value: "spazio flessibile dentro un contenitore gia disposto"
    }
  ],
  useWhen: [
    {
      title: "Hai gia un layout flex e vuoi separare due cluster",
      text: "Spacer e il pattern giusto quando vuoi spingere un gruppo a sinistra e uno a destra senza CSS custom per ogni riga."
    },
    {
      title: "Ti serve una utility piccola e leggibile",
      text: "In toolbar e action row rende la struttura del layout piu chiara di margin casuali sparsi."
    }
  ],
  avoidWhen: [
    {
      title: "Stai cercando distanza verticale",
      text: "Per separare sezioni o blocchi verticali meglio usare spacing del layout, stack o container dedicati."
    },
    {
      title: "Il problema e di layout, non di gap",
      text: "Se la struttura e sbagliata, Spacer non dovrebbe diventare la toppa per sistemarla."
    }
  ],
  essentialProps: [
    {
      name: "Default behavior",
      description: "Il caso principale e `_.Spacer()` dentro row o flex container per occupare spazio disponibile."
    }
  ],
  anatomy: [
    {
      title: "Flexible gap",
      text: "Non porta contenuto: porta respiro e separazione tra blocchi adiacenti."
    }
  ],
  slots: [],
  patterns: [
    {
      title: "Left / right toolbar split",
      text: "Uso classico per mettere un gruppo di azioni a sinistra e uno a destra.",
      tags: ["toolbar"]
    }
  ],
  accessibility: [
    {
      title: "Layout pulito",
      text: "Uno spacing coerente aiuta la scansione visiva, ma Spacer non sostituisce una gerarchia ben progettata."
    }
  ],
  gotchas: [
    {
      title: "Spacer usato come hack",
      text: "Se compare ovunque per correggere allineamenti rotti, il problema sta nel layout di base."
    }
  ]
};

export default spacerDoc;
