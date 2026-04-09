const formFieldDoc = {
  name: "FormField",
  title: "FormField",
  status: "stable",
  tags: ["form", "field shell", "input chrome"],
  summary: "Shell strutturale per controlli di input con label, hint, error, note e addon come icon, prefix e suffix. Il suo valore non e essere un field specifico, ma dare un telaio comune a tutti i controlli che devono sembrare parte dello stesso sistema form.",
  signature: "_.FormField(props)",
  quickFacts: [
    {
      label: "Best for",
      value: "costruire campi custom mantenendo il linguaggio di Input, Select e altri controlli form"
    },
    {
      label: "Avoid for",
      value: "casi in cui basta un input grezzo o quando esiste gia un componente field completo"
    },
    {
      label: "Mental model",
      value: "field chrome condiviso, non controllo finale"
    }
  ],
  useWhen: [
    {
      title: "Stai creando un controllo custom",
      text: "Se hai un control speciale ma vuoi che appaia coerente con il resto dei form, FormField e il layer giusto."
    },
    {
      title: "Vuoi separare shell e control",
      text: "Label, messaggi e addon restano standardizzati mentre il control interno puo restare libero."
    },
    {
      title: "Ti serve coerenza tra hint, error e note",
      text: "FormField aiuta molto a non reinventare ogni volta la stessa grammatica visuale."
    }
  ],
  avoidWhen: [
    {
      title: "Esiste gia il componente finale adatto",
      text: "Per campi standard `Input` o `Select` sono quasi sempre piu veloci e meno fragili."
    },
    {
      title: "Il controllo e davvero minimale",
      text: "Se non hai bisogno di label o messaggi, il field shell puo essere superfluo."
    },
    {
      title: "Stai provando a fare layout arbitrari",
      text: "FormField dovrebbe restare il telaio del campo, non un contenitore qualsiasi."
    }
  ],
  essentialProps: [
    {
      name: "label / topLabel / hint / error / note",
      description: "Definiscono naming e messaggistica del field."
    },
    {
      name: "control",
      description: "Il controllo vero e proprio da montare dentro la shell."
    },
    {
      name: "icon / iconRight / prefix / suffix",
      description: "Addon utili per dare contesto al valore senza alterare il control interno."
    },
    {
      name: "clearable / disabled / readonly / required",
      description: "Stati e affordance fondamentali del field."
    },
    {
      name: "slots",
      description: "Permettono override su parti specifiche del telaio quando serve un controllo piu avanzato."
    }
  ],
  anatomy: [
    {
      title: "Label layer",
      text: "Il nome del campo e il suo contesto vivono sopra o attorno al controllo."
    },
    {
      title: "Control slot",
      text: "Il control interno e intercambiabile, ma la shell resta coerente."
    },
    {
      title: "Supporting messages",
      text: "Hint, error e note sono parte della stessa grammatica del campo."
    }
  ],
  slots: [
    {
      title: "Control + addon slots",
      text: "FormField apre i punti giusti per inserire il controllo e personalizzare il suo contorno."
    }
  ],
  patterns: [
    {
      title: "Custom field shell",
      text: "Perfetto quando un controllo speciale deve sembrare comunque parte del form system.",
      tags: ["custom field"]
    },
    {
      title: "Input chrome reuse",
      text: "Molto utile per riusare label, error e adornments senza duplicare markup.",
      tags: ["shared shell"]
    }
  ],
  accessibility: [
    {
      title: "FormField aiuta, ma non sostituisce il naming corretto",
      text: "Il control interno deve comunque restare ben collegato a label e messaggi."
    },
    {
      title: "Error e hint devono restare vicini al controllo",
      text: "Il valore del componente sta anche nel mantenere questa prossimita sempre coerente."
    }
  ],
  gotchas: [
    {
      title: "Usarlo per tutto rende il sistema piu complesso del necessario",
      text: "Quando il componente finale esiste gia, meglio non tornare a un livello piu basso."
    },
    {
      title: "Il control interno deve rispettare la shell",
      text: "Se il controllo custom ha markup o comportamento troppo anomalo, l'integrazione puo risultare fragile."
    },
    {
      title: "Addon e messaggi vanno dosati",
      text: "Troppi elementi nello stesso field riducono leggibilita e focus sul valore."
    }
  ]
};

export default formFieldDoc;
