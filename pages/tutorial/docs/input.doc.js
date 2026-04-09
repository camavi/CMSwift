const inputDoc = {
  name: "Input",
  title: "Input",
  status: "stable",
  tags: ["form", "text input", "field"],
  summary: "Campo testuale standard del sistema, costruito sopra `FormField`: label floating, hint, error, prefix, suffix, icone e binding reattivo vivono gia nello stesso contratto.",
  signature: "_.Input(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "form operativi, filtri, impostazioni, credenziali e campi con feedback inline"
    },
    {
      label: "Avoid for",
      value: "testo lungo multi-linea, scelte discrete o pattern dove serve un select dedicato"
    },
    {
      label: "Mental model",
      value: "text field con form chrome completo, non semplice input HTML nudo"
    }
  ],
  useWhen: [
    {
      title: "Serve un campo testo con feedback chiaro",
      text: "Hint, error e label sono gia allineati: non serve ricostruire il layout del field ogni volta."
    },
    {
      title: "Vuoi binding reattivo semplice",
      text: "Con `model`, `onInput`, `onChange` e `onBlur` puoi lavorare sia in forma libera sia dentro workflow piu controllati."
    },
    {
      title: "Hai bisogno di contesto vicino al valore",
      text: "Prefix, suffix e icone sono utili per unit, dominio, search o cue visivi senza markup extra."
    }
  ],
  avoidWhen: [
    {
      title: "Il contenuto e multi-linea",
      text: "Per note o copy lungo il componente giusto resta `Textarea`."
    },
    {
      title: "Il valore viene scelto da un elenco",
      text: "Se l'utente non deve digitare liberamente, `Select` e piu chiaro di un input travestito."
    },
    {
      title: "Il field diventa un layout complesso",
      text: "Se ti servono troppi adornments, bottoni e contenuti laterali, probabilmente stai forzando il pattern."
    }
  ],
  essentialProps: [
    {
      name: "label / topLabel / placeholder",
      description: "Definiscono il framing del field e l'ordine di lettura."
    },
    {
      name: "model / value",
      description: "Gestiscono il valore del campo in modo reattivo o dichiarativo."
    },
    {
      name: "hint / error / note",
      description: "Sono il canale corretto per guidance, validazione e messaggi di supporto."
    },
    {
      name: "icon / iconRight / prefix / suffix",
      description: "Aiutano a contestualizzare il valore senza modificare il corpo del field."
    },
    {
      name: "clearable / disabled / readonly / required",
      description: "Coprono i principali stati operativi e di validazione del campo."
    }
  ],
  anatomy: [
    {
      title: "Field chrome",
      text: "Label, control surface e messaggistica fanno parte dello stesso sistema visivo."
    },
    {
      title: "Value channel",
      text: "Il valore vive nel control ma e sempre accompagnato da hint o error quando serve."
    },
    {
      title: "Inline context",
      text: "Prefix, suffix e icone aggiungono contesto senza trasformare il field in un mini-layout arbitrario."
    }
  ],
  slots: [
    {
      title: "FormField-level slots",
      text: "Quando il field lo permette, eredita la grammatica di `FormField` per adornments e layout piu controllati."
    }
  ],
  patterns: [
    {
      title: "Validated field",
      text: "Accoppia `model`, `error` e `onBlur` per mostrare feedback nel momento giusto, non mentre l'utente sta ancora capendo il campo.",
      tags: ["validation"]
    },
    {
      title: "Search / identifier input",
      text: "Icona sinistra e placeholder concreto aiutano molto nei campi di ricerca o lookup.",
      tags: ["search", "lookup"]
    },
    {
      title: "Unit-aware input",
      text: "Prefix o suffix sono la strada giusta per dominio, valuta, URL o unit di misura.",
      tags: ["prefix", "suffix"]
    }
  ],
  accessibility: [
    {
      title: "Label esplicita",
      text: "Placeholder da solo non basta come nome del campo: mantieni `label` o un riferimento accessibile equivalente."
    },
    {
      title: "Error leggibile e vicino al campo",
      text: "Il messaggio di errore deve stare nel canale del field, non disperso altrove nel layout."
    }
  ],
  gotchas: [
    {
      title: "Placeholder non e documentazione",
      text: "Se il campo ha regole o formato importante, spiegalo con hint o note, non solo nel placeholder."
    },
    {
      title: "Troppi adornments riducono leggibilita",
      text: "Icona, prefix e suffix insieme hanno senso solo se ciascuno aggiunge davvero informazione."
    },
    {
      title: "Errore permanente stanca l'interfaccia",
      text: "Meglio mostrare feedback con timing corretto piuttosto che tenere il field sempre in stato danger."
    }
  ]
};

export default inputDoc;
