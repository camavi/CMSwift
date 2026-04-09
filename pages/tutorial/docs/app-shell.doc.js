const appShellDoc = {
  name: "AppShell",
  title: "AppShell",
  status: "stable",
  tags: ["shell", "workspace", "app layout"],
  summary: "Scaffold applicativo ad alto livello per comporre header, drawer, page e footer con shortcut coerenti o slot completi. Il suo valore non e solo montare regioni, ma evitare che ogni team ricostruisca una shell diversa per dashboard, cockpit e backoffice.",
  signature: "_.AppShell(...children) | _.AppShell(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "control room, support desk, workspace operative, backoffice con drawer e footer action bar"
    },
    {
      label: "Avoid for",
      value: "pagine isolate, landing interne semplici o layout dove basta `_.Page`"
    },
    {
      label: "Mental model",
      value: "shell applicativa completa che orchestra header, drawer, page e footer"
    }
  ],
  useWhen: [
    {
      title: "Vuoi una shell consistente in piu pagine operative",
      text: "AppShell tiene insieme regioni ricorrenti come titolo, navigazione, page content e action footer senza wiring ripetuto."
    },
    {
      title: "Ti serve alternare shortcut e composizione avanzata",
      text: "Puoi partire da `title`, `drawerItems`, `footerContent` e poi passare a `slots.header`, `slots.drawer`, `slots.page`, `slots.footer` quando il layout cresce."
    },
    {
      title: "Vuoi un controllo imperativo sul drawer",
      text: "Il nodo ritornato espone metodi utili quando il toggle non vive solo dentro l'header."
    }
  ],
  avoidWhen: [
    {
      title: "La pagina non ha vera struttura da shell",
      text: "Se non hai drawer, header e regioni applicative, il componente giusto puo essere `_.Layout` o `_.Page`."
    },
    {
      title: "Ogni sezione ha regole completamente diverse",
      text: "Se stai forzando troppi override per combattere la grammatica della shell, probabilmente sei fuori dal suo perimetro."
    },
    {
      title: "Stai cercando una landing editoriale",
      text: "AppShell e pensato per workspace e cockpit, non per pagine marketing o storytelling."
    }
  ],
  essentialProps: [
    {
      name: "title / subtitle / right",
      description: "Shortcut piu rapidi per costruire un header applicativo senza scrivere subito `slots.header`."
    },
    {
      name: "drawerItems / drawerHeader / drawerWidth",
      description: "Leve principali per impostare la navigazione laterale e la sua impronta visiva."
    },
    {
      name: "footerContent / footerProps",
      description: "Chiudono il workspace con CTA, handoff o meta operativi senza dover comporre un footer a parte."
    },
    {
      name: "slots.header / slots.drawer / slots.page / slots.footer",
      description: "Sono il livello giusto quando la shell deve diventare davvero custom ma restare nello stesso contratto."
    },
    {
      name: "noDrawer / gap / padding / pageProps",
      description: "Servono per scenari focus o shell alleggerite senza rompere il modello."
    }
  ],
  anatomy: [
    {
      title: "Header region",
      text: "Titolo, subtitle e action cluster vivono sopra il contenuto e danno il contesto del workspace."
    },
    {
      title: "Drawer region",
      text: "Navigazione, filtri o utility rail laterale, con header, gruppi e stato persistente."
    },
    {
      title: "Page + footer",
      text: "La page ospita il contenuto vero; il footer chiude il flusso con CTA o summary operativi."
    }
  ],
  slots: [
    {
      title: "`header`, `drawer`, `page`, `footer`",
      text: "Sono i quattro override principali per trasformare la shell da scaffolding rapido a layout applicativo completo."
    }
  ],
  patterns: [
    {
      title: "Control room con shortcut",
      text: "Ottimo quando vuoi arrivare velocemente a una shell coerente partendo da titolo, drawer items e footer content.",
      tags: ["fast path"]
    },
    {
      title: "Shell a slot completi",
      text: "Il pattern giusto quando header, drawer e page hanno bisogno di regioni piu ricche, filtri o checklist.",
      tags: ["slots"]
    },
    {
      title: "Focus mode senza drawer",
      text: "Molto utile per executive summary, war room leggere o step finali di approvazione.",
      tags: ["no drawer", "focus"]
    }
  ],
  accessibility: [
    {
      title: "Gerarchia stabile delle regioni",
      text: "Header, drawer e contenuto principale dovrebbero restare riconoscibili e coerenti tra una shell e l'altra."
    },
    {
      title: "Drawer controllabile chiaramente",
      text: "Se la shell usa toggles o azioni imperative, il punto di apertura e chiusura deve restare evidente."
    }
  ],
  gotchas: [
    {
      title: "AppShell non sostituisce ogni layout",
      text: "Se la pagina non ha struttura da workspace, evita di usarlo solo perche e il componente piu grande."
    },
    {
      title: "Troppi override in parallelo",
      text: "Mescolare shortcut, children liberi e slot pesanti senza disciplina rende la shell meno leggibile."
    },
    {
      title: "Drawer usato come discarica",
      text: "Dentro il rail laterale dovrebbero vivere navigazione e utility rilevanti, non qualsiasi contenuto secondario."
    }
  ]
};

export default appShellDoc;
