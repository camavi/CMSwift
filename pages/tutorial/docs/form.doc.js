const formDoc = {
  name: "Form",
  title: "Form",
  status: "stable",
  tags: ["form", "useForm", "validation"],
  summary: "Wrapper integrato con `CMSwift.useForm()` per submit async, validazione e stato `submitting`. Il suo ruolo non e rendere bello il form, ma dargli un contratto runtime coerente tra model, errori e submit lifecycle.",
  signature: "_.Form({ form, onSubmit }, ...children)",
  quickFacts: [
    { label: "Best for", value: "form applicativi veri con validazione, reset, submit async e stato condiviso" },
    { label: "Avoid for", value: "form HTML grezzi o snippet dove non stai usando `useForm`" },
    { label: "Mental model", value: "boundary di submit e stato, non collezione di field visuals" }
  ],
  useWhen: [
    {
      title: "Stai gia usando `CMSwift.useForm()`",
      text: "Se il form ha model, rules, field binding e submit async, questo wrapper ti tiene tutto coerente."
    },
    {
      title: "Vuoi un submit flow unico",
      text: "`submitting`, `submitError`, reset e field errors restano nello stesso contratto."
    },
    {
      title: "I children devono leggere lo stato del form",
      text: "La function child permette layout dinamici senza thread paralleli di stato."
    }
  ],
  avoidWhen: [
    {
      title: "Hai solo un paio di input senza state serio",
      text: "Per casi minimi puoi anche non introdurre tutta la machinery `useForm`."
    },
    {
      title: "Cerchi il layout del form",
      text: "Il wrapper non sostituisce `Card`, `Grid`, `Row` o `FormField`: orchestra submit e state."
    },
    {
      title: "Stai facendo solo proof of concept nativo",
      text: "Se vuoi puro HTML form senza model reattivo, il componente aggiunge poco valore."
    }
  ],
  essentialProps: [
    {
      name: "form",
      description: "Istanza ritornata da `CMSwift.useForm()`: e il requisito vero del componente."
    },
    {
      name: "onSubmit",
      description: "Handler async con `(model, form)` dove centralizzi il submit reale."
    },
    {
      name: "children function",
      description: "Quando i contenuti devono leggere `submitting`, `submitError` o altri stati dell'istanza."
    }
  ],
  anatomy: [
    { title: "Form boundary", text: "Intercetta il submit e lo traduce nel contratto `useForm`." },
    { title: "Field composition", text: "Input, Select, Checkbox, Toggle, Rating e simili restano fuori ma agganciati al medesimo form." },
    { title: "Submit lifecycle", text: "Submitting, reset e submitError sono il vero valore del wrapper." }
  ],
  slots: [
    { title: "Children", text: "Il pattern chiave e la function child che riceve il form per layout e CTA dinamiche." }
  ],
  patterns: [
    { title: "Registrazione / onboarding", text: "Molti field, regole, checkbox finali e CTA primaria nel footer.", tags: ["signup"] },
    { title: "Feedback form", text: "Rating, toggle, note finali e submit asincrono con UX pulita.", tags: ["feedback"] }
  ],
  accessibility: [
    { title: "Errori vicino ai field", text: "Il wrapper non basta da solo: i field devono esporre hint/error nel punto giusto." },
    { title: "CTA submit chiara", text: "Usa `loading/submitting` in modo visibile quando il form e in corso." }
  ],
  gotchas: [
    { title: "Form wrapper senza `useForm`", text: "Se non stai davvero usando l'istanza form, perdi meta del valore del componente." },
    { title: "Troppa logica nei child inline", text: "La function child e potente, ma non deve diventare un file intero di business logic." },
    { title: "Reset non coordinato", text: "Se fai reset parziali custom, mantieni allineati model, touched e error state." }
  ]
};

export default formDoc;
