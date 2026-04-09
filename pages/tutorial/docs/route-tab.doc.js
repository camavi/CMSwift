const routeTabDoc = {
  name: "RouteTab",
  title: "RouteTab",
  status: "stable",
  tags: ["navigation", "tab", "route"],
  summary: "Tab navigazionale per route locali, workspace header e sidebar secondarie con supporto a label, note, badge e slot. Il suo valore non e solo sembrare un tab, ma tenere insieme affordance di navigazione e densita informativa da contesto applicativo.",
  signature: "_.RouteTab(...children) | _.RouteTab(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "header di workspace, route locali, sidebar secondarie, percorsi interni con stato e badge"
    },
    {
      label: "Avoid for",
      value: "tab puramente contenutistiche o navigazione globale del prodotto"
    },
    {
      label: "Mental model",
      value: "tab con semantica di link o route, non semplice pannello di contenuto"
    }
  ],
  useWhen: [
    {
      title: "La navigazione e davvero locale a una sezione",
      text: "RouteTab rende bene quando ogni tab porta a un'area interna con senso di percorso applicativo."
    },
    {
      title: "Vuoi piu densita di un link semplice",
      text: "Note, badge, aside e icon aiutano molto nei workspace con KPI, code o stato operativo."
    },
    {
      title: "Ti serve coerenza tra inline, block e verticale",
      text: "Lo stesso componente regge bene header, sidebar secondarie e layout verticali."
    }
  ],
  avoidWhen: [
    {
      title: "Stai cambiando solo un pannello locale",
      text: "Se non c'e vera navigazione, `Tabs` o `TabPanel` sono spesso il pattern piu corretto."
    },
    {
      title: "Serve una nav primaria di app",
      text: "Per aree principali del prodotto meglio usare pattern piu strutturati di shell o drawer."
    },
    {
      title: "Ogni tab ha troppo contenuto dentro",
      text: "Se note, badge e aside diventano troppi, il tab perde leggibilita come affordance di navigazione."
    }
  ],
  essentialProps: [
    {
      name: "to / href / target / rel",
      description: "Definiscono la natura navigazionale del tab, interna o esterna."
    },
    {
      name: "label / note / icon / badge / aside",
      description: "Sono le props che danno densita e contesto al tab."
    },
    {
      name: "active / disabled / block / dense / variant / color",
      description: "Controllano stato e presenza visiva del componente."
    },
    {
      name: "onClick",
      description: "Utile per simulare router, intercettare navigazione o orchestrare scenari demo e custom."
    },
    {
      name: "slots.label / note / badge / aside",
      description: "Servono per riscrivere parti del tab senza perdere il contratto base."
    }
  ],
  anatomy: [
    {
      title: "Label lane",
      text: "Il label resta il punto principale di scansione e dovrebbe spiegare chiaramente la route."
    },
    {
      title: "Meta lane",
      text: "Note e badge aggiungono contesto operativo ma non dovrebbero dominare il tab."
    },
    {
      title: "Active affordance",
      text: "Lo stato attivo deve restare evidente anche quando usi varianti e layout diversi."
    }
  ],
  slots: [
    {
      title: "`label`, `note`, `badge`, `aside`",
      text: "Sono gli slot giusti per adattare il tab a contesti piu densi come order desk o workspace ops."
    }
  ],
  patterns: [
    {
      title: "Workspace header routes",
      text: "Ottimo per overview, orders, automation e aree sorelle dello stesso cockpit.",
      tags: ["workspace"]
    },
    {
      title: "Vertical route rail",
      text: "Funziona bene anche in sidebar locali o settings panel.",
      tags: ["vertical"]
    },
    {
      title: "Slot-driven status tab",
      text: "Il pattern giusto quando label, note e badge devono seguire il linguaggio del dominio.",
      tags: ["slots"]
    }
  ],
  accessibility: [
    {
      title: "Stato attivo leggibile",
      text: "Chi usa il componente deve capire subito quale route e corrente e quali sono cliccabili."
    },
    {
      title: "Badge e note come supporto",
      text: "Informazioni accessorie dovrebbero aiutare la scelta, non oscurare il label principale."
    }
  ],
  gotchas: [
    {
      title: "RouteTab usato come card compressa",
      text: "Se ci finiscono troppi dettagli, forse serve una lista o una card navigabile."
    },
    {
      title: "Active gestito in modo ambiguo",
      text: "Se il router reale e il componente si contraddicono, la UI diventa poco affidabile."
    },
    {
      title: "Mix casuale di link interni ed esterni",
      text: "Route locali ed external link possono convivere, ma il comportamento deve restare chiarissimo."
    }
  ]
};

export default routeTabDoc;
