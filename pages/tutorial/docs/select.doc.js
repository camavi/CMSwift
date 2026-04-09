const selectDoc = {
  name: "Select",
  title: "Select",
  status: "stable",
  tags: ["form", "selection", "dropdown"],
  summary: "Select avanzato del sistema con supporto a opzioni semplici o raggruppate, filtro, multi-select, valori custom, clearable e slot per personalizzare il dropdown senza reinventare il componente.",
  signature: "_.Select(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "stati, owner, tassonomie, filtri, tag e scelte guidate con elenco controllato"
    },
    {
      label: "Avoid for",
      value: "liste minuscole che funzionano meglio come Radio o toggle binari che meritano Switch/Checkbox"
    },
    {
      label: "Mental model",
      value: "field di selezione con dropdown strutturato, non semplice select HTML cosmetico"
    }
  ],
  useWhen: [
    {
      title: "Le opzioni sono definite e finite",
      text: "Quando il sistema deve guidare la scelta, `Select` e piu sicuro e leggibile di un input libero."
    },
    {
      title: "Hai bisogno di filtro o multiselect",
      text: "Il componente nasce gia con queste capacita, quindi non serve stratificare overlay custom."
    },
    {
      title: "Vuoi customizzare il dropdown senza perdere la struttura",
      text: "Gli slot ti permettono di intervenire su option, arrow o empty state restando dentro il contratto del componente."
    }
  ],
  avoidWhen: [
    {
      title: "Le scelte sono pochissime e sempre visibili",
      text: "Con 2-3 opzioni stabili, Radio o segment controls possono essere piu immediati."
    },
    {
      title: "L'utente deve scrivere davvero",
      text: "Se il valore non proviene da un elenco o da tag controllati, `Input` resta piu onesto."
    },
    {
      title: "Il menu deve diventare una mini-app",
      text: "Se stai progettando tabelle, wizard o layout complessi dentro il dropdown, il pattern sta degenerando."
    }
  ],
  essentialProps: [
    {
      name: "options",
      description: "Sorgente dati del select: lista semplice o gruppi con `label` e `options`."
    },
    {
      name: "model / value",
      description: "Gestiscono il binding del valore singolo o multiplo."
    },
    {
      name: "multiple / clearable / filterable / allowCustom",
      description: "Sono le quattro leve che cambiano davvero il comportamento del componente."
    },
    {
      name: "label / topLabel / hint / error / emptyText",
      description: "Costruiscono il framing del field e la UX quando non ci sono risultati o serve guidance."
    },
    {
      name: "slots",
      description: "Ti consentono di personalizzare arrow, option, empty e altre parti del dropdown."
    }
  ],
  anatomy: [
    {
      title: "Field shell",
      text: "Il select eredita grammatica da `FormField`: label, stato, hint ed error restano coerenti con il resto dei form."
    },
    {
      title: "Dropdown layer",
      text: "La lista opzioni e un layer separato che puo includere ricerca, gruppi e stati vuoti."
    },
    {
      title: "Selection model",
      text: "Singola scelta, multiselect e valori custom condividono la stessa base, ma cambiano semantica e UX."
    }
  ],
  slots: [
    {
      title: "`option`",
      text: "Utile per rendere le opzioni piu informative con badge, check, meta o layout piu ricco."
    },
    {
      title: "`arrow`",
      text: "Ti permette di allineare il linguaggio visivo del trigger al resto del design system."
    },
    {
      title: "`empty`",
      text: "Molto utile quando il select e filterable e devi dare un feedback chiaro sui risultati mancanti."
    }
  ],
  patterns: [
    {
      title: "Single-choice field",
      text: "Status, owner o channel sono il caso piu pulito: una scelta, label chiara e clearable solo se ha senso.",
      tags: ["single"]
    },
    {
      title: "Filterable multi-select",
      text: "Ideale per team, tag, audience o categorie che crescono nel tempo.",
      tags: ["multiple", "filterable"]
    },
    {
      title: "Custom-tag select",
      text: "Con `allowCustom` il componente diventa utile per tassonomie semi-libere, ma va governato con attenzione.",
      tags: ["allowCustom"]
    }
  ],
  accessibility: [
    {
      title: "Feedback chiaro su apertura e selezione",
      text: "Se personalizzi frecce o option rendering, non perdere indicatori visivi e nomi leggibili."
    },
    {
      title: "Ricerca non deve nascondere il contesto",
      text: "In modalita filterable, il campo di ricerca deve restare chiaramente collegato alla lista risultati."
    }
  ],
  gotchas: [
    {
      title: "Multi-select non e un chip editor universale",
      text: "Se l'interfaccia inizia a sembrare un composer di token complessi, forse serve un componente dedicato."
    },
    {
      title: "Allow custom va usato con regole chiare",
      text: "Se non hai una policy per i nuovi valori, rischi di sporcare tassonomie e filtri."
    },
    {
      title: "Troppa personalizzazione del dropdown rompe la riconoscibilita",
      text: "Gli slot sono potenti, ma il comportamento del select deve restare prevedibile."
    }
  ]
};

export default selectDoc;
