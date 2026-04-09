const footerDoc = {
  name: "Footer",
  title: "Footer",
  status: "stable",
  tags: ["layout", "action bar", "handoff"],
  summary: "Footer strutturato per chiudere card, pagine e shell applicative con copy, meta e CTA coerenti. Il suo valore non e solo stare in basso, ma dare una grammatica comune a handoff, decision bar e action footer.",
  signature: "_.Footer(...children) | _.Footer(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "release handoff, action bar, summary finali, pricing review, CTA di chiusura pagina"
    },
    {
      label: "Avoid for",
      value: "contenuti generici senza decisioni o pagine dove il footer diventa solo rumore"
    },
    {
      label: "Mental model",
      value: "regione finale strutturata con start/body/end/actions"
    }
  ],
  useWhen: [
    {
      title: "Devi chiudere un flusso con contesto e azioni",
      text: "Footer funziona bene quando servono title, subtitle, meta e CTA finali in un blocco leggibile."
    },
    {
      title: "Vuoi una action bar coerente tra piu schermate",
      text: "Dense, elevated e regions stabili evitano di reinventare ogni volta una toolbar finale diversa."
    },
    {
      title: "Hai bisogno di combinare copy e controlli",
      text: "Meta, chip, checkbox o avatar convivono bene nel footer quando la decisione richiede contesto operativo."
    }
  ],
  avoidWhen: [
    {
      title: "Le azioni appartengono al body",
      text: "Se la CTA vive accanto al contenuto che modifica, non spingerla per forza in fondo."
    },
    {
      title: "Il blocco sotto e solo decorativo",
      text: "Un footer senza ruolo reale appesantisce la pagina e indebolisce la gerarchia."
    },
    {
      title: "Stai cercando una nav globale di sito",
      text: "Questo footer e pensato per flussi applicativi, non per il classico footer editoriale di un sito."
    }
  ],
  essentialProps: [
    {
      name: "eyebrow / title / subtitle / icon / meta",
      description: "Definiscono il copy e il contesto del footer strutturato."
    },
    {
      name: "left / right / actions",
      description: "Shortcut rapidi per costruire summary e CTA senza passare subito dagli slot."
    },
    {
      name: "slots.left / slots.body / slots.end / slots.actions",
      description: "Permettono layout piu editoriali o piu applicativi mantenendo la stessa grammatica."
    },
    {
      name: "dense / elevated / divider / sticky",
      description: "Leve principali per farlo comportare come summary bar, decision bar o footer di shell."
    },
    {
      name: "align / justify / wrap / gap / minHeight",
      description: "Tuning utile quando il footer ospita molte CTA o contenuti reattivi."
    }
  ],
  anatomy: [
    {
      title: "Context block",
      text: "Eyebrow, title, subtitle e meta spiegano perche il footer esiste e cosa sta chiudendo."
    },
    {
      title: "Decision block",
      text: "Le actions dovrebbero essere poche, gerarchiche e chiaramente collegate al contesto sopra."
    },
    {
      title: "Support regions",
      text: "Left, body ed end permettono di ospitare avatar, chip, form mini o badge di stato."
    }
  ],
  slots: [
    {
      title: "`left`, `body`, `end`, `actions`",
      text: "Sono i punti giusti per personalizzare il footer senza perderne la struttura."
    }
  ],
  patterns: [
    {
      title: "Release handoff",
      text: "Molto forte per rollout, checklist finali e CTA di approvazione.",
      tags: ["release"]
    },
    {
      title: "Action bar densa",
      text: "Perfetta per pricing review, approvazioni e decisioni operative con piu CTA ravvicinate.",
      tags: ["action bar"]
    },
    {
      title: "Slot driven footer",
      text: "Il pattern giusto quando il footer deve contenere indicatori, checkbox o micro-layout piu ricchi.",
      tags: ["slots"]
    }
  ],
  accessibility: [
    {
      title: "CTA finali leggibili",
      text: "Le azioni principali devono restare identificabili anche quando il footer diventa denso."
    },
    {
      title: "Contesto prima dell'azione",
      text: "Se il footer chiede una decisione importante, il copy dovrebbe spiegare sempre lo stato corrente."
    }
  ],
  gotchas: [
    {
      title: "Footer troppo carico",
      text: "Se dentro finiscono meta, filtri, form e sei CTA, stai comprimendo un pannello intero in basso."
    },
    {
      title: "Action bar senza gerarchia",
      text: "Tre bottoni tutti uguali rendono meno chiaro cosa chiude davvero il flusso."
    },
    {
      title: "Uso casuale di sticky ed elevated",
      text: "Sono utili, ma se applicati ovunque rischiano di rendere pesante l'interfaccia."
    }
  ]
};

export default footerDoc;
