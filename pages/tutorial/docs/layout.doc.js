const layoutDoc = {
  name: "Layout",
  title: "Layout",
  status: "stable",
  tags: ["shell", "app layout", "workspace"],
  summary: "Shell composabile per applicazioni con header, drawer sinistro, nav destro, page e footer. Il suo valore non e solo posizionare aree, ma dare una grammatica coerente a dashboard, backoffice e workspace operativi.",
  signature: "_.Layout(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "dashboard, console operative, workspace editoriali, shell applicative complete"
    },
    {
      label: "Avoid for",
      value: "landing page semplici o viste isolate senza vera navigazione shell"
    },
    {
      label: "Mental model",
      value: "orchestratore delle aree, non semplice wrapper CSS con tre div"
    }
  ],
  useWhen: [
    {
      title: "Stai costruendo una shell intera",
      text: "Quando header, navigation e page devono restare coerenti tra molte route, `Layout` ti evita markup ripetuto e comportamento incoerente."
    },
    {
      title: "Hai un drawer sinistro e un inspector destro",
      text: "E uno dei pochi punti dove il framework ha gia una grammatica chiara per entrambi i rail."
    },
    {
      title: "Ti serve controllo runtime delle aree",
      text: "Open, close, toggle e update delle regioni sono gia previsti senza API inventate per singolo progetto."
    }
  ],
  avoidWhen: [
    {
      title: "La pagina non ha vere regioni shell",
      text: "Se hai solo contenuto centrale, usare `Layout` puo essere eccessivo rispetto a `_.Page` o `_.Container`."
    },
    {
      title: "Serve un layout completamente fuori standard",
      text: "Se non vuoi header/drawer/page/footer come grammatica di base, forse conviene comporre piu primitive."
    },
    {
      title: "Vuoi fare content blocks dentro il page body",
      text: "Dentro la pagina usa `_.Page`, `_.Grid`, `_.Row`, `_.Col`, non forzare `Layout` a fare anche il content design."
    }
  ],
  essentialProps: [
    {
      name: "header / aside|drawer / nav / page / footer",
      description: "Le aree canoniche della shell. Sono la base del contratto del componente."
    },
    {
      name: "drawerEnabled / navEnabled",
      description: "Il rail sinistro e attivo di default se presente; il rail destro resta opt-in."
    },
    {
      name: "drawerWidth / navWidth",
      description: "Controllano dimensione iniziale dei rail senza dover toccare CSS custom."
    },
    {
      name: "drawerResizable / navResizable",
      description: "Abilitano drag desktop con `min/max width` per rail inline.",
      tags: ["desktop only"]
    },
    {
      name: "stickyHeader / stickyAside / stickyNav / stickyFooter",
      description: "Ti fanno scegliere se la shell deve comportarsi da app cockpit o da layout piu editoriale."
    },
    {
      name: "runtime methods",
      description: "`openAside`, `closeAside`, `toggleAside`, `openNav`, `closeNav`, `toggleNav`, `pageUpdate`, `asideUpdate`, `navUpdate`, `footerUpdate`."
    }
  ],
  anatomy: [
    {
      title: "Global shell",
      text: "Header, drawer, nav e footer stanno fuori dal content flow della pagina."
    },
    {
      title: "Main stage",
      text: "La `page` e il palco principale, e puo arrivare via prop o come fallback dei children."
    },
    {
      title: "Dual rail model",
      text: "Aside/drawer a sinistra, nav/asideRight a destra: due regioni diverse, non alias estetici della stessa cosa."
    }
  ],
  slots: [
    {
      title: "`slots.header`, `slots.drawer`, `slots.page`, `slots.footer`",
      text: "Quando vuoi che le aree vengano costruite dinamicamente con accesso al context layout."
    },
    {
      title: "`slots.default`",
      text: "Per gestire casi in cui il contenuto principale arriva dai children in modo controllato."
    }
  ],
  patterns: [
    {
      title: "Dashboard shell completa",
      text: "Header sticky, drawer sinistro persistente, page con metriche e footer operativo.",
      tags: ["default shell"]
    },
    {
      title: "Runtime-controlled layout",
      text: "Quando il team ha bisogno di aprire/chiudere rail o aggiornare page/footer da eventi runtime.",
      tags: ["imperative API"]
    },
    {
      title: "Workspace con rail ridimensionabili",
      text: "Utile per board dense, inspector laterali e pannelli di configurazione.",
      tags: ["resizable", "dual rail"]
    }
  ],
  accessibility: [
    {
      title: "Navigation semantica separata",
      text: "Drawer e nav destro non dovrebbero diventare contenitori generici senza gerarchia o etichette."
    },
    {
      title: "Controlli espliciti per i rail",
      text: "Se un rail e chiudibile o flottante, la UI deve lasciare un punto chiaro per riaprirlo."
    }
  ],
  gotchas: [
    {
      title: "Nav destro non e un alias del drawer",
      text: "E una regione con ruolo diverso. Evita di pensarla come semplice duplicato specchiato."
    },
    {
      title: "Resize solo inline desktop",
      text: "I rail floating/mobile non vanno trattati come se avessero lo stesso comportamento del drag desktop."
    },
    {
      title: "Non mescolare troppo shell e page content",
      text: "Il layout orchestra le aree; il dettaglio del contenuto interno va lasciato a `Page` e alle primitive del body."
    }
  ]
};

export default layoutDoc;
