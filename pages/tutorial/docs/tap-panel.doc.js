const tapPanelDoc = {
  name: "TabPanel",
  title: "TabPanel",
  status: "stable",
  tags: ["navigation", "panels", "tabs"],
  summary: "Sistema tab/panel per contenuti sorelle con orientamento, nav positioning, swipe e varianti visive. Il suo valore non e solo cambiare pannello, ma offrire una grammatica completa per dashboard, impostazioni e journey interni senza costruire nav e content a mano.",
  signature: "_.TabPanel(props) | _.TabPanel(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "workspace tabs, settings, account areas, journey stepper, pannelli sorelle nello stesso contesto"
    },
    {
      label: "Avoid for",
      value: "navigazione tra route vere o contenuti che dovrebbero stare in pagine distinte"
    },
    {
      label: "Mental model",
      value: "nav di tab + pannello contenuto, tutto dentro la stessa superficie"
    }
  ],
  useWhen: [
    {
      title: "I contenuti sono fratelli dello stesso contesto",
      text: "TabPanel e il pattern giusto quando overview, content, automation o settings appartengono alla stessa vista."
    },
    {
      title: "Vuoi controllare nav e contenuto in un solo contratto",
      text: "Orientation, variant, swipeable, nav position e panel rendering convivono nello stesso componente."
    },
    {
      title: "Ti servono tab ricche con badge, note e contenuto custom",
      text: "Il modello tab name/label/note/badge/content regge bene anche dashboard e pannelli densi."
    }
  ],
  avoidWhen: [
    {
      title: "La navigazione dovrebbe cambiare route",
      text: "Se il cambio pannello corrisponde davvero a un cambio pagina, meglio `RouteTab` o router."
    },
    {
      title: "Ogni pannello e troppo grande e autonomo",
      text: "Quando ogni tab sembra una pagina intera, il pattern inizia a perdere efficacia."
    },
    {
      title: "Stai usando swipe o infinite senza motivo",
      text: "Sono leve utili, ma non dovrebbero complicare un caso semplice."
    }
  ],
  essentialProps: [
    {
      name: "items / model / value",
      description: "Definiscono i pannelli e lo stato attivo del tab system."
    },
    {
      name: "orientation / navPosition / variant / fill / wrap / dense",
      description: "Controllano struttura e presenza della navigazione."
    },
    {
      name: "animated / swipeable / infinite",
      description: "Leve comportamentali per casi piu dinamici o touch-friendly."
    },
    {
      name: "label / note / icon / badge / disabled / content",
      description: "Il modello dati di ogni tab puo essere ricco senza perdere chiarezza."
    },
    {
      name: "slots nav/item/panel",
      description: "Servono per casi molto custom in cui la resa standard non basta."
    }
  ],
  anatomy: [
    {
      title: "Nav strip",
      text: "La barra tab rende visibile l'insieme delle aree sorelle e lo stato corrente."
    },
    {
      title: "Panel surface",
      text: "Ogni tab mostra il proprio contenuto mantenendo il contesto della stessa vista."
    },
    {
      title: "State bridge",
      text: "Il model attivo lega nav, content e interazioni applicative nello stesso contratto."
    }
  ],
  slots: [
    {
      title: "Custom nav and panel rendering",
      text: "Le slot hanno senso quando vuoi restare nel componente ma cambiare davvero la resa del sistema tab."
    }
  ],
  patterns: [
    {
      title: "Workspace tabs",
      text: "Perfetto per overview, content e automation nello stesso cockpit.",
      tags: ["workspace"]
    },
    {
      title: "Account / settings panel",
      text: "Molto utile per billing, members, security e aree sorelle di configurazione.",
      tags: ["settings"]
    },
    {
      title: "Journey tabs",
      text: "Il pattern giusto per step di processo quando non vuoi ancora cambiare route.",
      tags: ["journey"]
    }
  ],
  accessibility: [
    {
      title: "Relazione chiara tra tab e pannello",
      text: "Lo stato attivo deve essere sempre evidente e il contenuto mostrato deve corrispondere senza ambiguita."
    },
    {
      title: "Varianti e orientamento con misura",
      text: "Cambiare disposizione e stile non dovrebbe rendere meno chiaro quale tab sia selezionato."
    }
  ],
  gotchas: [
    {
      title: "TabPanel usato come router mascherato",
      text: "Se il contenuto richiede deep-link e page lifecycle reali, meglio spostarsi su route vere."
    },
    {
      title: "Troppi tab pesanti insieme",
      text: "Quando ogni pannello contiene molto layout e logica, il sistema tab puo diventare difficile da scansire."
    },
    {
      title: "Swipe e infinite senza contesto",
      text: "Sono utili in casi precisi, ma in molte dashboard desktop aggiungono solo complessita."
    }
  ]
};

export default tapPanelDoc;
