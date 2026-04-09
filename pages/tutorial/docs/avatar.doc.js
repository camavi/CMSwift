const avatarDoc = {
  name: "Avatar",
  title: "Avatar",
  status: "stable",
  tags: ["identity", "people", "presence"],
  summary: "Componente identitario per persone, team, owner e presenze live. Il suo valore non e solo mostrare un'immagine o due iniziali, ma unire fallback intelligenti, overlay, stato e semantica di ownership in un pattern unico.",
  signature: "_.Avatar(props)",
  quickFacts: [
    {
      label: "Best for",
      value: "owner, reviewer, presence badge, team identity, workspace people rows"
    },
    {
      label: "Avoid for",
      value: "icone decorative pure o blocchi media che non rappresentano un'identita"
    },
    {
      label: "Mental model",
      value: "identity token con stato, immagine e overlay"
    }
  ],
  useWhen: [
    {
      title: "Vuoi rappresentare persone o team in modo riconoscibile",
      text: "Avatar e il pattern giusto quando serve un ancoraggio identitario forte e consistente."
    },
    {
      title: "Ti servono fallback robusti",
      text: "Label, initials, icon e media custom permettono di evitare buchi quando l'immagine non c'e."
    },
    {
      title: "Hai bisogno di badge o presence state",
      text: "Online, away, busy, notification e overlay contestuali sono parte importante del componente."
    }
  ],
  avoidWhen: [
    {
      title: "Ti serve solo un'icona",
      text: "Se non stai rappresentando un'identita o una presenza, `Icon` e piu corretto."
    },
    {
      title: "Il blocco e soprattutto contenuto visuale",
      text: "Per hero, media tile o contenuti narrativi, avatar non e il pattern giusto."
    },
    {
      title: "Stai cercando di fare una card in miniatura",
      text: "Overlay e badge aiutano, ma il componente non deve diventare un pannello informativo completo."
    }
  ],
  essentialProps: [
    {
      name: "label / name / initials / text",
      description: "Definiscono fallback, semantica e contenuto di base dell'avatar."
    },
    {
      name: "src / srcset / sizes / fit",
      description: "Gestiscono il layer immagine quando l'avatar usa media reali."
    },
    {
      name: "size / radius / square / fontSize",
      description: "Controllano forma, dimensione e presenza visiva del token."
    },
    {
      name: "status / statusColor / badge / notification",
      description: "Rendono l'avatar utile anche come indicatore di presenza o stato."
    },
    {
      name: "slots",
      description: "Media, fallback, badge, status e overlay custom aprono casi più ricchi senza rompere il pattern."
    }
  ],
  anatomy: [
    {
      title: "Identity core",
      text: "Immagine, initials o icona sono il centro del componente e devono restare riconoscibili subito."
    },
    {
      title: "Presence layer",
      text: "Status e badge aggiungono informazione operativa senza sostituire l'identita."
    },
    {
      title: "Overlay grammar",
      text: "TopLeft, badge e status sono utili quando il token deve portare un secondo livello di informazione."
    }
  ],
  slots: [
    {
      title: "`media`, `fallback`, `label`, `icon`, `badge`, `status`",
      text: "Sono i punti giusti per casi custom piu ricchi, ma il token deve restare leggibile e compatto."
    }
  ],
  patterns: [
    {
      title: "Owner / reviewer token",
      text: "Perfetto in card, table e queue per associare subito una persona a un task o a un workflow.",
      tags: ["ownership"]
    },
    {
      title: "Presence avatar",
      text: "Ottimo per far emergere online, busy o away in contesti di war room o supporto.",
      tags: ["presence"]
    },
    {
      title: "Team / workspace identity",
      text: "Funziona bene anche per team, lane o cluster non strettamente personali.",
      tags: ["team"]
    }
  ],
  accessibility: [
    {
      title: "Il nome reale deve restare disponibile",
      text: "Se l'avatar rappresenta una persona, il contesto o il label devono renderlo comprensibile anche oltre le iniziali."
    },
    {
      title: "Badge e stato non devono essere l'unico segnale",
      text: "Quando presence o urgenza contano davvero, il contesto testuale deve supportare il significato."
    }
  ],
  gotchas: [
    {
      title: "Troppi overlay rendono il token illeggibile",
      text: "Badge, top-left, status e notification insieme vanno dosati o il componente perde chiarezza."
    },
    {
      title: "Fallback povero indebolisce il design system",
      text: "Se label, initials o icon non sono curate, l'avatar senza immagine sembra incompleto."
    },
    {
      title: "Usarlo come puro decoro toglie forza semantica",
      text: "Avatar funziona meglio quando racconta davvero identita, ruolo o stato."
    }
  ]
};

export default avatarDoc;
