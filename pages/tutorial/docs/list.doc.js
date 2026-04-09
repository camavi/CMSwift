const listDoc = {
  name: "List",
  title: "List",
  status: "stable",
  tags: ["content", "collection", "structured list"],
  summary: "Componente per orchestrare collezioni di voci semplici o strutturate. Il suo valore non e solo mostrare un elenco, ma dare ritmo, marker, empty state, rendering dichiarativo e integrazione naturale con `Item`.",
  signature: "_.List(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "feed operativi, checklist, roadmap, queue leggere, liste editoriali"
    },
    {
      label: "Avoid for",
      value: "dataset tabellari o layout card/grid dove la relazione non e da elenco"
    },
    {
      label: "Mental model",
      value: "collection wrapper che orchestra le righe, non singolo row component"
    }
  ],
  useWhen: [
    {
      title: "Hai una collezione naturalmente lineare",
      text: "Se il contenuto si legge bene in sequenza, List e spesso piu forte di griglie o card ripetute."
    },
    {
      title: "Vuoi decidere tra items dichiarativi o children manuali",
      text: "Il componente regge entrambe le strade: `items` data-driven o `Item` passati a mano."
    },
    {
      title: "Ti servono marker, divider o stato vuoto",
      text: "Queste sono le leve che trasformano un elenco grezzo in un componente davvero utile."
    }
  ],
  avoidWhen: [
    {
      title: "Le righe devono essere confrontate per colonne",
      text: "Se l'utente confronta campi omogenei, `Table` e piu corretto."
    },
    {
      title: "Ogni elemento e una card autonoma",
      text: "Se la surface per item e molto forte, forse `Grid` + `Card` raccontano meglio il contenuto."
    },
    {
      title: "La collezione non ha un vero ordine di lettura",
      text: "Se l'ordine lineare conta poco, la lista potrebbe non essere il pattern migliore."
    }
  ],
  essentialProps: [
    {
      name: "items",
      description: "Dataset dichiarativo per costruire liste senza montare a mano ogni riga."
    },
    {
      name: "marker / number / divider / gap",
      description: "Definiscono ritmo e grammatica visiva dell'elenco."
    },
    {
      name: "slots.item / empty",
      description: "Ti permettono di modellare il rendering mantenendo la collection logic nel componente."
    },
    {
      name: "children manuali",
      description: "Restano perfetti quando vuoi comporre `Item` o altri nodi in modo diretto."
    }
  ],
  anatomy: [
    {
      title: "Collection layer",
      text: "List governa il contenitore, l'ordine e i marker."
    },
    {
      title: "Item rendering",
      text: "Le singole righe possono essere semplici o strutturate, ma la collezione resta coerente."
    },
    {
      title: "State layer",
      text: "Divider, ordered markers ed empty state sono parte del valore del componente."
    }
  ],
  slots: [
    {
      title: "`item` e `empty`",
      text: "Sono i due hook chiave quando vuoi usare List in modo data-driven."
    }
  ],
  patterns: [
    {
      title: "Operational queue",
      text: "Ottima per task, ticket e release queue con righe strutturate ma non tabellari.",
      tags: ["ops"]
    },
    {
      title: "Ordered roadmap",
      text: "Molto utile per step, processi e sequenze che devono restare esplicite.",
      tags: ["ordered"]
    },
    {
      title: "Custom-render collection",
      text: "Con slot `item` puoi alzare molto il livello senza perdere il modello lineare della lista.",
      tags: ["custom render"]
    }
  ],
  accessibility: [
    {
      title: "Ordine e marker devono aiutare davvero",
      text: "Numerazione e separatori vanno usati per chiarire la lettura, non solo per estetica."
    },
    {
      title: "Lo stato vuoto deve guidare",
      text: "Se la lista e vuota, il messaggio dovrebbe spiegare cosa manca o cosa fare dopo."
    }
  ],
  gotchas: [
    {
      title: "List non e Item",
      text: "Il wrapper collezione e la riga strutturata hanno ruoli diversi: confonderli rende la docs e il codice meno chiari."
    },
    {
      title: "Troppi pattern dentro la stessa lista la rendono confusa",
      text: "Se mischi roadmap, CTA, chip e layout troppo diversi, perdi coerenza di collezione."
    },
    {
      title: "Scegli una strategia per blocco",
      text: "Per la singola lista conviene decidere se usare `items` dichiarativi o children manuali con intenzione."
    }
  ]
};

export default listDoc;
