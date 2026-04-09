const toolbarDoc = {
  name: "Toolbar",
  title: "Toolbar",
  status: "stable",
  tags: ["layout", "actions", "filters"],
  summary: "Barra strutturata per azioni, filtri, meta e micro-contenuti di controllo. Il suo valore non e solo allineare bottoni in fila, ma dare una grammatica comune a start, center, end, title, subtitle, meta e after dentro una sola superficie.",
  signature: "_.Toolbar(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "action bar, filtri, title bars, control strips, dense work headers"
    },
    {
      label: "Avoid for",
      value: "header di pagina completi o layout che sono piu row/gird che action bar"
    },
    {
      label: "Mental model",
      value: "barra di controllo con regioni e stato, non solo flex row"
    }
  ],
  useWhen: [
    {
      title: "Hai una barra di controllo vera",
      text: "Toolbar e il pattern giusto quando azioni, filtri, meta e stato devono vivere in una fascia unica."
    },
    {
      title: "Vuoi evitare wrapper manuali ripetuti",
      text: "Title, subtitle, meta, after e regioni start/end aiutano molto nelle interfacce operative."
    },
    {
      title: "Ti serve un layer reattivo e denso",
      text: "Il componente regge bene playground live, filtri catalogo e action bar molto usate."
    }
  ],
  avoidWhen: [
    {
      title: "La struttura e soprattutto narrativa",
      text: "Se il contenuto deve introdurre una pagina o una sezione, `Header` o `Page` spesso sono piu naturali."
    },
    {
      title: "Il layout non e piu una barra",
      text: "Quando il componente diventa una mini-pagina con molti blocchi, il pattern si spezza."
    },
    {
      title: "Ti serve solo una semplice riga flex",
      text: "Per casi minimali `Row` resta piu leggero e piu onesto."
    }
  ],
  essentialProps: [
    {
      name: "start / center / end / before / after",
      description: "Definiscono la grammatica spaziale della toolbar."
    },
    {
      name: "title / subtitle / meta",
      description: "Molto utili quando la barra deve anche spiegare cosa sta controllando."
    },
    {
      name: "gap / align / justify / wrap / size / dense",
      description: "Leve fondamentali per densita e comportamento del layout."
    },
    {
      name: "divider / elevated / sticky",
      description: "Aggiungono presenza e comportamento applicativo alla barra."
    },
    {
      name: "slots",
      description: "Permettono di generare toolbar piu dinamiche da stato o dati esterni."
    }
  ],
  anatomy: [
    {
      title: "Action regions",
      text: "Start, center e end costruiscono il flusso operativo della barra."
    },
    {
      title: "Information strip",
      text: "Title, subtitle e meta aggiungono contesto senza trasformare la toolbar in un header pesante."
    },
    {
      title: "Secondary line",
      text: "La regione `after` e molto utile per filtri secondari, chip e stati aggiuntivi."
    }
  ],
  slots: [
    {
      title: "`start`, `meta`, `title`, `subtitle`, `actions`, `after`",
      text: "Sono gli hook principali per costruire toolbar guidate da dati o configurazioni esterne."
    }
  ],
  patterns: [
    {
      title: "Action toolbar",
      text: "Pattern classico per CTA compatte, state chip e controllo locale del contesto.",
      tags: ["actions"]
    },
    {
      title: "Filter toolbar",
      text: "Ottima per search, select, checkbox e chip in una singola fascia operativa.",
      tags: ["filters"]
    },
    {
      title: "Structured top strip",
      text: "Quando la barra deve anche dire cosa stai guardando e non solo cosa puoi fare.",
      tags: ["structured"]
    }
  ],
  accessibility: [
    {
      title: "Le azioni principali devono restare localizzabili",
      text: "Una toolbar troppo ricca puo far perdere rapidamente le CTA davvero importanti."
    },
    {
      title: "Wrap e sticky vanno provati su viewport reali",
      text: "Sono due leve utilissime, ma possono rompere la barra se usate senza attenzione."
    }
  ],
  gotchas: [
    {
      title: "Toolbar non deve diventare una pagina compressa",
      text: "Quando il numero di zone e contenuti cresce troppo, il pattern perde leggibilita."
    },
    {
      title: "Nested toolbar va usata con disciplina",
      text: "Funziona, ma se ne abusi il layout diventa mentalmente costoso."
    },
    {
      title: "Divider ed elevated non devono essere sempre attivi",
      text: "Sono strumenti di gerarchia, non effetti da applicare per default ovunque."
    }
  ]
};

export default toolbarDoc;
