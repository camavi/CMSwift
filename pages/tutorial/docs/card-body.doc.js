const cardBodyDoc = {
  name: "cardBody",
  title: "cardBody",
  status: "stable",
  tags: ["card", "layout", "subcomponent"],
  summary: "Regione body per card composte manualmente. Il suo valore e delimitare in modo esplicito il contenuto principale della card quando il contratto shortcut di `_.Card` non basta piu.",
  signature: "_.cardBody(...children) | _.cardBody(props, ...children)",
  quickFacts: [
    { label: "Best for", value: "form card, workflow card, content list, body complessi con header/footer separati" },
    { label: "Avoid for", value: "card semplici dove i children di `_.Card` bastano gia da soli" },
    { label: "Mental model", value: "corpo principale della card, separato da header e footer" }
  ],
  useWhen: [
    {
      title: "Stai costruendo una card in tre regioni",
      text: "CardBody ha senso quando vuoi delimitare chiaramente il contenuto operativo centrale."
    },
    {
      title: "Vuoi evitare body improvvisati",
      text: "Usare il subcomponent rende piu leggibile la struttura della card rispetto a div anonimi."
    }
  ],
  avoidWhen: [
    {
      title: "I children della card sono gia leggibili",
      text: "Se non hai bisogno di una struttura composita, non serve aggiungere un wrapper solo per formalita."
    }
  ],
  essentialProps: [
    { name: "children + layout props base", description: "Il body ospita contenuto principale, form controls, liste e blocchi operativi." }
  ],
  anatomy: [
    { title: "Primary content zone", text: "E la parte dove vivono dati, testi, liste e controlli della card." }
  ],
  slots: [],
  patterns: [
    { title: "Moderation rules body", text: "Ottimo per checklist, checkbox, radio e configurazioni interne alla card." }
  ],
  accessibility: [
    { title: "Contenuto non compresso", text: "Il body dovrebbe restare la zona piu leggibile, non un accumulo di elementi senza ritmo." }
  ],
  gotchas: [
    { title: "Body senza gerarchia", text: "Anche dentro il body serve ritmo tra gruppi, non solo una colonna lunga di elementi." }
  ]
};

export default cardBodyDoc;
