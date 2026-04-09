const cardHeaderDoc = {
  name: "cardHeader",
  title: "cardHeader",
  status: "stable",
  tags: ["card", "layout", "subcomponent"],
  summary: "Regione header compositiva per card custom. Il suo valore non e sostituire `Card`, ma permettere layout di testa piu controllati quando vuoi separare chiaramente header, body e footer.",
  signature: "_.cardHeader(...children) | _.cardHeader(props, ...children)",
  quickFacts: [
    { label: "Best for", value: "card custom, workflow panel, moderation card, header con meta e aside" },
    { label: "Avoid for", value: "card semplici dove bastano title, subtitle e aside direttamente su `_.Card`" },
    { label: "Mental model", value: "wrapper semantico per la testa della card" }
  ],
  useWhen: [
    {
      title: "Stai componendo la card manualmente",
      text: "CardHeader ha senso quando usi `_.Card(_.cardHeader(...), _.cardBody(...), _.cardFooter(...))`."
    },
    {
      title: "Hai bisogno di controllo su allineamento e wrap",
      text: "Giustificazioni, aside e blocchi meta diventano piu leggibili rispetto a un header improvvisato nel body."
    }
  ],
  avoidWhen: [
    {
      title: "La card e lineare e semplice",
      text: "Se ti bastano `title`, `subtitle`, `icon`, `aside` e `actions`, resta sul contratto alto di `_.Card`."
    }
  ],
  essentialProps: [
    { name: "justify / align / wrap / gap", description: "Leve principali per organizzare il contenuto della testa." }
  ],
  anatomy: [
    { title: "Title zone", text: "Eyebrow, title e subtitle dovrebbero vivere qui, non sparsi nel body." },
    { title: "Aside zone", text: "Chip, CTA o metrica rapida possono allinearsi a destra in modo stabile." }
  ],
  slots: [],
  patterns: [
    { title: "Workflow card header", text: "Ottimo per moderation, policy e pannelli operativi con summary laterale." }
  ],
  accessibility: [
    { title: "Gerarchia del copy", text: "Titolo e subtitle dovrebbero restare chiari anche quando aggiungi badge o CTA." }
  ],
  gotchas: [
    { title: "Header usato come body", text: "Se ci finiscono troppi controlli, stai spostando contenuto nel posto sbagliato." }
  ]
};

export default cardHeaderDoc;
