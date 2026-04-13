const htmlDictionary = {
  it: {
    ui: {
      eyebrow: "HTML tutorial",
      syntaxTitle: "Sintassi CMSwift",
      exampleTitle: "Esempio di utilizzo",
      previewTitle: "Preview rapido",
      previewUnavailableTitle: "Preview non montato",
      previewUnavailableMessage:
        "Per questo tag il tutorial mostra sintassi, contesto e tag correlati invece di montarlo direttamente nella pagina demo.",
      descriptionTitle: "Descrizione",
      usageTitle: "Quando usarlo",
      noteTitle: "Note rapide",
      relatedTitle: "Tag correlati",
      navigationTitle: "Navigazione",
      previousLabel: "Precedente",
      nextLabel: "Successivo",
      groupLabel: "Gruppo",
      helperLabel: "Helper",
      voidLabel: "void",
      renderedWith: "Catalogo centralizzato + dizionario separato",
    },
    groups: {
      document: {
        label: "Document & Metadata",
        summary:
          "Raccoglie i tag che descrivono il documento, i metadata e il contesto globale della pagina.",
        usage: [
          "definire la radice del documento",
          "gestire title, meta, base, link e style",
          "separare head e body in modo chiaro",
        ],
        notes: [
          "Questi tag vivono vicino alla radice del documento e spesso non vanno montati come frammenti isolati.",
        ],
      },
      sectioning: {
        label: "Sectioning",
        summary:
          "Organizza il layout semantico della pagina in aree principali, laterali o di navigazione.",
        usage: [
          "separare aree logiche della UI",
          "migliorare semantica e accessibilita",
          "rendere piu leggibile la struttura della pagina",
        ],
        notes: [
          "Scegli il tag in base al significato del blocco, non solo al suo aspetto visivo.",
        ],
      },
      headings: {
        label: "Headings",
        summary: "Definisce la gerarchia dei titoli da `h1` a `h6`.",
        usage: [
          "costruire titoli ordinati",
          "segnare gerarchie di contenuto",
          "aiutare lettura e scan della pagina",
        ],
        notes: ["Mantieni una gerarchia coerente tra i livelli di titolo."],
      },
      text: {
        label: "Text Content",
        summary:
          "Raggruppa gli elementi base per testo, blocchi, separatori e contenuti leggibili.",
        usage: [
          "scrivere testo descrittivo",
          "separare blocchi di contenuto",
          "mostrare testo preformattato o citazioni",
        ],
        notes: [
          "Questa famiglia e il cuore dei contenuti editoriali semplici.",
        ],
      },
      inline: {
        label: "Inline Semantics",
        summary:
          "Aggiunge significato semantico o enfasi a porzioni di testo inline.",
        usage: [
          "evidenziare parole o valori",
          "marcare testo tecnico o temporale",
          "aggiungere contesto semantico senza rompere il flusso del paragrafo",
        ],
        notes: [
          "Sono tag ottimi per tutorial, testo editoriale e interfacce ricche di copy.",
        ],
      },
      lists: {
        label: "Lists",
        summary:
          "Gestisce elenchi ordinati, non ordinati e liste descrittive.",
        usage: [
          "mostrare checklist o sequenze",
          "raggruppare voci correlate",
          "rendere piu leggibili dati ripetuti",
        ],
        notes: [
          "Le liste migliorano molto la leggibilita quando i contenuti sono ripetuti o numerati.",
        ],
      },
      tables: {
        label: "Tables",
        summary:
          "Definisce strutture tabellari per dati a righe e colonne.",
        usage: [
          "presentare dati comparativi",
          "creare intestazioni e raggruppamenti chiari",
          "rendere esplicito il rapporto tra righe e colonne",
        ],
        notes: [
          "Usa i tag tabellari per dati veri, non per impaginazione generica.",
        ],
      },
      forms: {
        label: "Forms",
        summary:
          "Raccoglie controlli e contenitori per input, selezione e invio dati.",
        usage: [
          "costruire moduli e filtri",
          "raccogliere input dell'utente",
          "associare etichette, gruppi e output ai controlli",
        ],
        notes: [
          "La semantica del form aiuta molto accessibilita, UX e manutenzione.",
        ],
      },
      embedded: {
        label: "Embedded Content",
        summary:
          "Integra immagini, media esterni o contenuti incorporati nella pagina.",
        usage: [
          "mostrare immagini e risorse esterne",
          "caricare contenuti embedded",
          "arricchire pagine informative con media",
        ],
        notes: [
          "Verifica sempre fallback, dimensioni e accessibilita dei contenuti embedded.",
        ],
      },
      media: {
        label: "Media",
        summary: "Gestisce audio, video e tracce associate.",
        usage: [
          "riprodurre media",
          "aggiungere tracce o sottotitoli",
          "organizzare contenuti audiovisivi",
        ],
        notes: [
          "Considera controlli, fallback e caricamento delle risorse multimediali.",
        ],
      },
      interactive: {
        label: "Interactive",
        summary:
          "Offre tag nativi per interazioni e disclosure di contenuti.",
        usage: [
          "creare contenuti espandibili",
          "mostrare dialoghi nativi",
          "presentare UI interattive semplici",
        ],
        notes: [
          "Prima di introdurre JS custom, valuta se il browser offre gia il comportamento che ti serve.",
        ],
      },
      scripting: {
        label: "Scripting",
        summary:
          "Copre tag collegati a script, fallback, template e canvas.",
        usage: [
          "iniettare script o fallback",
          "preparare template non renderizzati",
          "gestire superfici canvas o slot",
        ],
        notes: [
          "Questa famiglia richiede un po' piu di attenzione perche alcuni tag hanno effetti collaterali o comportamenti particolari.",
        ],
      },
      svg: {
        label: "SVG",
        summary:
          "Include elementi vettoriali per illustrazioni, icone, maschere e filtri.",
        usage: [
          "disegnare forme vettoriali",
          "costruire icone o badge grafici",
          "usare gradienti, pattern, clip e filtri",
        ],
        notes: [
          "Gli helper SVG seguono la stessa sintassi di CMSwift ma lavorano dentro il namespace SVG.",
        ],
      },
    },
    tags: {
      html: {
        summary: "`_.html` e la radice del documento HTML completo.",
        usage: [
          "wrappare `_.head` e `_.body`",
          "generare documenti completi in modo dichiarativo",
        ],
        notes: [
          "Usalo quando vuoi descrivere il documento intero, non solo un frammento visibile.",
        ],
      },
      head: {
        summary:
          "`_.head` ospita metadata, title, link e style del documento.",
      },
      body: {
        summary: "`_.body` contiene tutto il contenuto visibile della pagina.",
      },
      script: {
        summary:
          "`_.script` rappresenta codice eseguibile o riferimenti a script esterni.",
        notes: [
          "In una pagina tutorial e meglio mostrare il codice senza eseguirlo automaticamente.",
        ],
      },
      style: {
        summary:
          "`_.style` consente di definire CSS inline nel documento.",
      },
      svg: {
        summary:
          "`_.svg` apre il contenitore vettoriale che ospita forme, testo e definizioni grafiche.",
      },
    },
  },
  en: {
    ui: {
      eyebrow: "HTML tutorial",
      syntaxTitle: "CMSwift syntax",
      exampleTitle: "Usage example",
      previewTitle: "Quick preview",
      previewUnavailableTitle: "Preview not mounted",
      previewUnavailableMessage:
        "For this tag the tutorial shows syntax, context and related tags instead of mounting it directly in the demo page.",
      descriptionTitle: "Description",
      usageTitle: "When to use it",
      noteTitle: "Quick notes",
      relatedTitle: "Related tags",
      navigationTitle: "Navigation",
      previousLabel: "Previous",
      nextLabel: "Next",
      groupLabel: "Group",
      helperLabel: "Helper",
      voidLabel: "void",
      renderedWith: "Central catalog + separate dictionary",
    },
    groups: {
      document: {
        label: "Document & Metadata",
        summary:
          "Covers document level tags, metadata and the global page context.",
        usage: [
          "define the document root",
          "manage title, meta, base, link and style",
          "separate head and body clearly",
        ],
        notes: [
          "These tags usually live near the document root and are rarely mounted as isolated fragments.",
        ],
      },
      sectioning: {
        label: "Sectioning",
        summary:
          "Organizes the semantic layout of the page into meaningful areas.",
        usage: [
          "split the UI into logical regions",
          "improve semantics and accessibility",
          "make page structure easier to read",
        ],
        notes: [
          "Pick the tag based on meaning, not only on visual styling.",
        ],
      },
      headings: {
        label: "Headings",
        summary: "Defines heading levels from `h1` to `h6`.",
        usage: [
          "build a heading hierarchy",
          "signal content structure",
          "improve page scanning",
        ],
        notes: ["Keep heading levels consistent."],
      },
      text: {
        label: "Text Content",
        summary:
          "Base elements for readable blocks, separators and text content.",
        usage: [
          "write descriptive text",
          "separate content blocks",
          "show preformatted text or quotations",
        ],
        notes: ["This family is the base for most editorial content."],
      },
      inline: {
        label: "Inline Semantics",
        summary:
          "Adds semantic meaning or emphasis to inline text fragments.",
        usage: [
          "highlight words or values",
          "mark technical or time related text",
          "add semantic context without breaking paragraph flow",
        ],
        notes: [
          "Great for tutorials, editorial copy and text rich interfaces.",
        ],
      },
      lists: {
        label: "Lists",
        summary:
          "Handles ordered, unordered and descriptive lists.",
        usage: [
          "show checklists or steps",
          "group related items",
          "present repeating data clearly",
        ],
        notes: [
          "Lists improve readability when content repeats or follows an order.",
        ],
      },
      tables: {
        label: "Tables",
        summary:
          "Defines tabular structures for rows and columns of data.",
        usage: [
          "present comparative data",
          "create clear headers and groupings",
          "make row/column relationships explicit",
        ],
        notes: ["Use table tags for real data, not generic layout."],
      },
      forms: {
        label: "Forms",
        summary:
          "Collects controls and containers for input, selection and submission.",
        usage: [
          "build forms and filters",
          "collect user input",
          "associate labels, groups and outputs with controls",
        ],
        notes: [
          "Form semantics help accessibility, UX and maintenance.",
        ],
      },
      embedded: {
        label: "Embedded Content",
        summary:
          "Embeds images, external resources or embedded content.",
        usage: [
          "show images or external assets",
          "load embedded content",
          "enrich informational pages with media",
        ],
        notes: [
          "Always check fallback, sizing and accessibility of embedded content.",
        ],
      },
      media: {
        label: "Media",
        summary: "Handles audio, video and related tracks.",
        usage: [
          "play media",
          "add subtitles or tracks",
          "organize audiovisual content",
        ],
        notes: ["Consider controls, fallback and loading strategy."],
      },
      interactive: {
        label: "Interactive",
        summary:
          "Provides native tags for disclosure and simple interaction.",
        usage: [
          "build expandable content",
          "show native dialogs",
          "present simple interactive UI",
        ],
        notes: [
          "Before writing custom JS, check whether the browser already gives you the behavior.",
        ],
      },
      scripting: {
        label: "Scripting",
        summary:
          "Covers script related tags, fallbacks, templates and canvas.",
        usage: [
          "inject scripts or fallbacks",
          "prepare non-rendered templates",
          "work with canvas or slots",
        ],
        notes: [
          "This family needs extra care because some tags have side effects or special behavior.",
        ],
      },
      svg: {
        label: "SVG",
        summary:
          "Includes vector elements for shapes, text, masks and filters.",
        usage: [
          "draw vector shapes",
          "build icons or badges",
          "use gradients, patterns, clips and filters",
        ],
        notes: [
          "SVG helpers follow the same CMSwift syntax but run in the SVG namespace.",
        ],
      },
    },
    tags: {
      html: { summary: "`_.html` is the root of the full HTML document." },
      head: { summary: "`_.head` hosts metadata, title, link and style nodes." },
      body: { summary: "`_.body` contains the visible content of the page." },
      script: {
        summary:
          "`_.script` represents executable code or external script references.",
      },
      style: { summary: "`_.style` defines inline CSS in the document." },
      svg: {
        summary:
          "`_.svg` opens the vector container for shapes, text and definitions.",
      },
    },
  },
};

const DEFAULT_HTML_TUTORIAL_LANGUAGE = "it";

function getHtmlDictionary(language = DEFAULT_HTML_TUTORIAL_LANGUAGE) {
  return htmlDictionary[language] || htmlDictionary[DEFAULT_HTML_TUTORIAL_LANGUAGE];
}

export { DEFAULT_HTML_TUTORIAL_LANGUAGE, getHtmlDictionary };
