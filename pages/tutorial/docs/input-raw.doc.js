const inputRawDoc = {
  name: "InputRaw",
  title: "InputRaw",
  status: "stable",
  tags: ["form", "native input", "low level"],
  summary: "Wrapper minimo per `<input>` nativo con binding reattivo, type HTML standard e supporto ad autocomplete. Il suo valore non e aggiungere UI ricca, ma darti un punto low-level coerente quando vuoi gestire il campo quasi come HTML puro.",
  signature: "_.InputRaw(props)",
  quickFacts: [
    {
      label: "Best for",
      value: "campi nativi, proof of concept veloci, integrazioni con autocomplete o form markup custom"
    },
    {
      label: "Avoid for",
      value: "field completi con label floating, hint, error, prefix o chrome visuale avanzato"
    },
    {
      label: "Mental model",
      value: "input HTML controllabile dal sistema reattivo, senza FormField completo"
    }
  ],
  useWhen: [
    {
      title: "Vuoi restare molto vicino all'HTML nativo",
      text: "Se il campo deve comportarsi quasi come un input puro, `InputRaw` e la scelta piu onesta."
    },
    {
      title: "Hai bisogno di type e autocomplete standard",
      text: "Email, password, number e search funzionano bene senza dover passare da un field piu opinionated."
    },
    {
      title: "Stai costruendo un layout form custom",
      text: "Quando vuoi comporre label, helper e layout a mano, il wrapper low-level e spesso piu utile."
    }
  ],
  avoidWhen: [
    {
      title: "Ti serve UX di field gia completa",
      text: "Se vuoi label, hint, error, clearable e addon visivi, `Input` o `FormField` sono la strada giusta."
    },
    {
      title: "Il team vuole standard UI forte",
      text: "Usare troppo `InputRaw` puo frammentare il linguaggio visivo dei form."
    },
    {
      title: "Hai gia un form system maturo in pagina",
      text: "In quei casi restare sui field di alto livello evita eccezioni inutili."
    }
  ],
  essentialProps: [
    {
      name: "type / name / placeholder / autocomplete",
      description: "Leve native piu importanti quando vuoi sfruttare il comportamento del browser."
    },
    {
      name: "model / value",
      description: "Permettono binding con `_.rod(...)` o `_.signal(...)` senza rinunciare al field nativo."
    },
    {
      name: "disabled / readonly / required",
      description: "Stati HTML classici che restano centrali nel componente."
    },
    {
      name: "input handlers",
      description: "Puoi continuare a lavorare con eventi e logica custom senza passare dal field decorato."
    }
  ],
  anatomy: [
    {
      title: "Native control",
      text: "Il focus del componente e il controllo nativo, non il suo chrome visivo."
    },
    {
      title: "Reactive bridge",
      text: "Il valore puo restare sincronizzato con rod o signal senza aggiungere un form wrapper piu pesante."
    },
    {
      title: "Browser autofill layer",
      text: "Autocomplete e naming corretti sono una parte importante del valore di InputRaw."
    }
  ],
  slots: [
    {
      title: "Nessuno",
      text: "Il componente vuole restare minimale: quando servono slot e contenitori, di solito stai gia passando a un altro livello."
    }
  ],
  patterns: [
    {
      title: "Signup fields low-level",
      text: "Molto utile quando vuoi comporre manualmente un form con semantica HTML chiara.",
      tags: ["signup", "native"]
    },
    {
      title: "Search / lookup raw",
      text: "Perfetto per campi search semplici con binding reattivo ma UI volutamente leggera.",
      tags: ["search"]
    },
    {
      title: "Autocomplete-first forms",
      text: "Quando il supporto a `name` e `autocomplete` del browser e parte importante del flusso.",
      tags: ["autofill"]
    }
  ],
  accessibility: [
    {
      title: "Label e helper vanno costruiti tu",
      text: "Essendo low-level, InputRaw non ti risolve automaticamente naming, hint ed error placement."
    },
    {
      title: "Autocomplete corretto migliora davvero UX",
      text: "Usa valori coerenti per aiutare browser, password manager e compilazione assistita."
    }
  ],
  gotchas: [
    {
      title: "InputRaw non sostituisce Input",
      text: "Se il team inizia a usarlo ovunque, perdi rapidamente coerenza visiva nel sistema form."
    },
    {
      title: "Placeholder non basta da solo",
      text: "Se il campo e importante, devi fornire label o contesto fuori dal componente."
    },
    {
      title: "Low-level vuol dire piu responsabilita al chiamante",
      text: "Errori, layout, note e affordance restano nelle mani della pagina che lo usa."
    }
  ]
};

export default inputRawDoc;
