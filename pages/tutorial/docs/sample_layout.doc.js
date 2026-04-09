const sampleLayoutDoc = {
  name: "sample_layout",
  title: "Layout sample",
  status: "stable",
  tags: ["sample", "layout", "starter"],
  summary: "Scheletro minimo che mostra come usare `_.Layout` in un caso piccolo ma realistico con header, drawer, page e footer. Non e un componente nuovo: e un sample di partenza per capire il wiring essenziale senza passare subito dai casi piu densi.",
  signature: "Sample built with _.Layout(...)",
  quickFacts: [
    {
      label: "Best for",
      value: "starter example, onboarding veloce, verifica visiva del wiring base del layout"
    },
    {
      label: "Avoid for",
      value: "documentazione finale del componente, che resta `Layout`"
    },
    {
      label: "Mental model",
      value: "sample didattico minimo del pattern shell con drawer"
    }
  ],
  useWhen: [
    {
      title: "Vuoi capire il minimo indispensabile",
      text: "Questo sample e utile per vedere subito come si compongono header, drawer, page e footer senza varianti avanzate."
    },
    {
      title: "Ti serve una base da copiare e modificare",
      text: "Come snippet iniziale e piu leggibile di una demo completa con rail floating, nav destro e resize."
    }
  ],
  avoidWhen: [
    {
      title: "Cerchi la documentazione completa del layout",
      text: "Per prop, alias, nav destro, floating e resize la fonte corretta resta `layout.doc.js` e il tutorial principale `layout.cms.js`."
    }
  ],
  essentialProps: [
    {
      name: "header / drawer / footer / children(page)",
      description: "Il sample mostra proprio queste quattro regioni come wiring minimo del layout."
    },
    {
      name: "drawerEnabled / drawerWidth / stickyHeader / minHeight",
      description: "Sono le prime leve che fanno capire il comportamento base del layout."
    }
  ],
  anatomy: [
    {
      title: "Header + drawer + page + footer",
      text: "La sample esiste per rendere evidente questa grammatica minima, senza rumore extra."
    }
  ],
  slots: [],
  patterns: [
    {
      title: "Starter shell",
      text: "Perfetta come punto di partenza per demo interne, prototipi o bootstrap di una pagina workspace.",
      tags: ["starter"]
    }
  ],
  accessibility: [
    {
      title: "Sample leggibile",
      text: "Il valore del sample e essere chiaro: meno feature, piu comprensione del wiring base."
    }
  ],
  gotchas: [
    {
      title: "Scambiare il sample per la docs completa",
      text: "Questo file spiega il caso minimo, non sostituisce la documentazione editoriale di `Layout`."
    }
  ]
};

export default sampleLayoutDoc;
