const menuDoc = {
  name: "Menu",
  title: "Menu",
  status: "stable",
  tags: ["overlay", "actions", "context menu"],
  summary: "Overlay strutturato per action list, account menu, filtri rapidi e pannelli contestuali. Il punto non e solo mostrare un elenco di item, ma orchestrare decisioni operative vicino al trigger giusto.",
  signature: "_.Menu(props, ...children)",
  quickFacts: [
    {
      label: "Best for",
      value: "azioni contestuali, account switcher, filtri rapidi, command menu compatti"
    },
    {
      label: "Avoid for",
      value: "wizard, configurazioni lunghe, conferme critiche o contenuti che richiedono una vera pagina/dialog"
    },
    {
      label: "Mental model",
      value: "overlay operativo ancorato a un trigger con lista azioni o contenuto compatto"
    }
  ],
  useWhen: [
    {
      title: "Le azioni dipendono dal contesto locale",
      text: "Se le scelte sono legate a una card, una riga tabella o al profilo corrente, `Menu` e molto piu naturale di un dialog."
    },
    {
      title: "Vuoi tenere le decisioni vicino al trigger",
      text: "Riduce rumore nella pagina e lascia l'azione dentro il contesto che l'ha generata."
    },
    {
      title: "Hai bisogno di lista item o contenuto custom",
      text: "Il componente regge sia action list classica sia pannelli piu ricchi con content e footer controllati."
    }
  ],
  avoidWhen: [
    {
      title: "Il contenuto diventa un mini-form serio",
      text: "Quando dentro il menu iniziano a vivere troppi controlli o validazioni, il pattern corretto di solito e un dialog."
    },
    {
      title: "L'utente deve leggere molto prima di agire",
      text: "Menu funziona meglio con azioni o pannelli brevi; per testo lungo perde efficacia."
    },
    {
      title: "La navigazione e principale e persistente",
      text: "Per navigazione strutturale e continua servono drawer, tabs o page-level controls, non menu effimeri."
    }
  ],
  essentialProps: [
    {
      name: "items",
      description: "E il motore base del menu: supporta item semplici, group, divider, icon, badge e stati."
    },
    {
      name: "title / subtitle / status",
      description: "Rendono il menu piu leggibile quando il layer non e solo una lista anonima."
    },
    {
      name: "placement / width / size / state",
      description: "Controllano impronta visiva e posizionamento del layer."
    },
    {
      name: "content / footer / closeOnSelect",
      description: "Servono per casi piu ricchi come filtri, pannelli account e menu semi-custom."
    },
    {
      name: "slots + API `bind/open/close/toggle`",
      description: "Leve giuste per header/footer custom o per collegare il menu a trigger dinamici."
    }
  ],
  anatomy: [
    {
      title: "Trigger + anchor",
      text: "Il menu nasce sempre in relazione a un bottone, una riga o un punto preciso della UI."
    },
    {
      title: "Action surface",
      text: "Items, gruppi e divider costruiscono una gerarchia rapida da scansionare."
    },
    {
      title: "Custom layer",
      text: "Header, content e footer permettono di alzare il livello senza perdere il comportamento overlay."
    }
  ],
  slots: [
    {
      title: "`header`, `footer` e content custom",
      text: "Sono il modo corretto per specializzare il menu senza distruggere il layout base."
    }
  ],
  patterns: [
    {
      title: "Quick action menu",
      text: "Ottimo per ordini, ticket, task o righe operative con 3-6 azioni frequenti.",
      tags: ["context actions"]
    },
    {
      title: "Account / workspace menu",
      text: "Header ricco, gruppi e footer con CTA leggere: pattern forte per profilo e workspace switch.",
      tags: ["account", "workspace"]
    },
    {
      title: "Filter menu",
      text: "Valido quando i controlli restano pochi, brevi e contestuali alla vista corrente.",
      tags: ["filters", "custom content"]
    }
  ],
  accessibility: [
    {
      title: "Ordine delle azioni leggibile",
      text: "Gruppi, divider e colori vanno usati per chiarire priorita e rischio, non solo per decorazione."
    },
    {
      title: "Chiusura e focus prevedibili",
      text: "Un menu che si apre da trigger diversi deve tornare sempre a un comportamento chiaro e stabile."
    }
  ],
  gotchas: [
    {
      title: "Troppi item fanno perdere velocita",
      text: "Se il menu diventa lungo come una pagina, non sta piu aiutando davvero l'utente."
    },
    {
      title: "Filtri e controlli vanno tenuti compatti",
      text: "Menu puo ospitare content custom, ma non deve trasformarsi in pannello settings completo."
    },
    {
      title: "Colori danger/warning vanno usati per significato",
      text: "In un action menu il tono sbagliato puo creare ambiguita o allarme inutile."
    }
  ]
};

export default menuDoc;
