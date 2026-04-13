import dialogDoc from "../docs/dialog.doc.js";

const createSection = (code, sample) => ({
  code: Array.isArray(code) ? code : [code],
  sample: Array.isArray(sample) ? sample : [sample]
});

const row = (...children) => _.div({
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    alignItems: "center"
  }
}, ...children);

const metricRow = (label, value, tone) => _.div({
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    padding: "10px 0",
    borderBottom: "1px solid rgba(127,127,127,0.14)"
  }
},
  _.div(
    _.div({ style: { fontWeight: "700" } }, label),
    _.div({ class: "cms-muted", style: { fontSize: "12px" } }, value)
  ),
  _.Chip({ color: tone, dense: true, outline: true }, tone)
);

const dialogStatus = _.rod("Nessuna azione eseguita.");

const publishDialog = _.Dialog({
  size: "sm",
  state: "primary",
  icon: "rocket_launch",
  eyebrow: "Release",
  title: "Pubblicare la release di aprile?",
  subtitle: "La build e pronta, i test automatici sono verdi e il rollout parte dal 10% del traffico.",
  content: _.div(
    _.List(
      _.Item("Deploy web EU e US"),
      _.Item("Migrazione schema gia eseguita"),
      _.Item("Rollback pronto in 90 secondi")
    )
  ),
  actions: ({ close }) => [
    _.Btn({
      outline: true,
      onClick: () => {
        dialogStatus.value = "Release rimandata al prossimo slot.";
        close();
      }
    }, "Rimanda"),
    _.Btn({
      color: "primary",
      onClick: () => {
        dialogStatus.value = "Release pubblicata con rollout progressivo.";
        close();
      }
    }, "Pubblica")
  ]
});

const customerDialog = _.Dialog({
  size: "lg",
  state: "info",
  backdropBlur: true,
  stickyActions: true,
  slots: {
    header: ({ close }) => _.div({
      style: {
        display: "flex",
        gap: "14px",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%"
      }
    },
      _.div({
        style: {
          display: "flex",
          gap: "12px",
          alignItems: "flex-start"
        }
      },
        _.div({
          style: {
            width: "46px",
            height: "46px",
            borderRadius: "14px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(86, 173, 255, 0.12)",
            color: "var(--cms-info)"
          }
        }, _.Icon({ name: "support_agent" })),
        _.div(
          _.div({ style: { fontSize: "11px", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--cms-info)" } }, "Enterprise escalation"),
          _.div({ style: { fontWeight: "700", fontSize: "18px" } }, "Cliente Acme Logistics"),
          _.div({ class: "cms-muted" }, "Issue aperto da 43 minuti, impatta il checkout B2B in Italia e Spagna.")
        )
      ),
      _.Btn({ size: "sm", outline: true, "data-dialog-close": true }, _.Icon({ name: "close", size: "sm" }))
    ),
    content: () => _.div(
      metricRow("SLA residuo", "17 minuti", "warning"),
      metricRow("Canale attivo", "Slack + bridge Zoom", "info"),
      metricRow("Owner", "Commerce Platform", "primary"),
      _.div({ style: { marginTop: "18px" } },
        _.p("Prossimi step operativi:"),
        _.List(
          _.Item("Applicare feature flag sul provider di spedizione"),
          _.Item("Monitorare conversioni e tasso errori per 15 minuti"),
          _.Item("Aggiornare il customer success manager con ETA condivisa")
        )
      )
    ),
    footer: ({ close }) => _.div({
      style: {
        display: "flex",
        width: "100%",
        gap: "10px",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }
    },
      _.Btn({
        outline: true,
        onClick: () => {
          dialogStatus.value = "Bridge Zoom aperto con il team operativo.";
        }
      }, "Apri bridge"),
      _.div({
        style: {
          display: "flex",
          gap: "10px",
          flexWrap: "wrap"
        }
      },
        _.Btn({
          outline: true,
          onClick: () => {
            dialogStatus.value = "Escalation lasciata in monitoraggio.";
            close();
          }
        }, "Lascia aperto"),
        _.Btn({
          color: "primary",
          onClick: () => {
            dialogStatus.value = "Escalation assegnata al war room lead.";
            close();
          }
        }, "Assegna owner")
      )
    )
  }
});

const scenarioDialog = _.Dialog({
  size: "md",
  closeButton: true,
  backdropBlur: true,
  actionsAlign: "between"
});

const openScenario = (variant) => {
  const scenarios = {
    success: {
      state: "success",
      icon: "task_alt",
      eyebrow: "Import completato",
      title: "6.248 contatti sincronizzati",
      subtitle: "La sincronizzazione CRM e terminata senza conflitti sui campi chiave.",
      content: _.div(
        _.List(
          _.Item("Nuovi record: 1.842"),
          _.Item("Aggiornati: 4.279"),
          _.Item("Scartati: 127 con email non valida")
        )
      ),
      actions: ({ close }) => [
        _.Btn({
          outline: true,
          onClick: () => {
            dialogStatus.value = "Import chiuso senza altre azioni.";
            close();
          }
        }, "Chiudi"),
        _.Btn({
          color: "success",
          onClick: () => {
            dialogStatus.value = "Report import aperto.";
            close();
          }
        }, "Apri report")
      ]
    },
    warning: {
      state: "warning",
      icon: "warning",
      eyebrow: "Richiede verifica",
      title: "Margine ordine sotto soglia",
      subtitle: "L'ordine B2B 10492 e sotto il margine minimo impostato per il canale wholesale.",
      content: _.div(
        _.p("Prima di approvare controlla scontistica, costo trasporto e fee marketplace."),
        _.List(
          _.Item("Margine atteso: 18%"),
          _.Item("Margine attuale: 11.4%"),
          _.Item("Delta assoluto: -642 EUR")
        )
      ),
      actions: ({ close }) => [
        _.Btn({
          outline: true,
          onClick: () => {
            dialogStatus.value = "Ordine mandato in revisione pricing.";
            close();
          }
        }, "Invia al pricing"),
        _.Btn({
          color: "warning",
          onClick: () => {
            dialogStatus.value = "Ordine approvato con eccezione.";
            close();
          }
        }, "Approva eccezione")
      ]
    },
    danger: {
      state: "danger",
      icon: "block",
      eyebrow: "Intervento urgente",
      title: "Revocare accesso partner?",
      subtitle: "Sono stati rilevati download anomali sull'area documentale del partner esterno.",
      content: _.div(
        _.p("Revocando l'accesso disattivi API key, sessioni web e token SFTP del tenant partner."),
        _.List(
          _.Item("Ultimo IP: 185.44.23.91"),
          _.Item("Volume download: 1.8 GB in 9 minuti"),
          _.Item("Country mismatch rispetto al contratto")
        )
      ),
      actions: ({ close }) => [
        _.Btn({
          outline: true,
          onClick: () => {
            dialogStatus.value = "Analisi forense lasciata aperta.";
            close();
          }
        }, "Solo monitora"),
        _.Btn({
          color: "danger",
          onClick: () => {
            dialogStatus.value = "Accesso partner revocato.";
            close();
          }
        }, "Revoca accesso")
      ]
    }
  };

  scenarioDialog.open(scenarios[variant]);
};

const workflowSections = Array.from({ length: 8 }, (item, index) => _.Card({
  title: `Workstream ${index + 1}`,
  subtitle: "Checkpoint operativo per il go-live multi-team.",
  class: "cms-m-b-md"
},
  _.List(
    _.Item("Owner confermato e reperibile durante la finestra di rilascio"),
    _.Item("KPI e dashboard aperti in monitoring"),
    _.Item("Rollback e canale di comunicazione verificati")
  )
));

const workflowDialog = _.Dialog({
  size: "full",
  fullscreen: true,
  stickyHeader: true,
  stickyActions: true,
  scrollable: true,
  state: "secondary",
  icon: "rule",
  eyebrow: "Go-live",
  title: "Checklist multi-team per il lancio marketplace",
  subtitle: "Usa il dialog come workspace temporaneo quando ti serve contenuto lungo con azioni persistenti.",
  bodyMaxHeight: "78vh",
  content: _.div(
    _.p("Questa vista raccoglie workstream, owners e dipendenze operative prima del cutover finale."),
    ...workflowSections
  ),
  actions: ({ close }) => [
    _.Btn({
      outline: true,
      onClick: () => {
        dialogStatus.value = "Checklist salvata come bozza.";
      }
    }, "Salva bozza"),
    _.Btn({
      color: "secondary",
      onClick: () => {
        dialogStatus.value = "Checklist condivisa sul canale war room.";
      }
    }, "Condividi"),
    _.Btn({
      color: "primary",
      onClick: () => {
        dialogStatus.value = "Go-live confermato.";
        close();
      }
    }, "Conferma go-live")
  ]
});

const listSample = {
  basic: createSection(
    [
      _.p("Dialog standard per conferme operative, con icona, title/subtitle, actions e stato visibile."),
      _.div({ class: "cms-m-b-md" },
        _.b("Ultima azione: "),
        _.span(dialogStatus)
      ),
      row(
        _.Btn({ color: "primary", onClick: () => publishDialog.open() }, "Apri conferma release"),
        _.Btn({ outline: true, onClick: () => publishDialog.toggle() }, "Toggle")
      )
    ],
    [
      'const publishDialog = _.Dialog({',
      '  size: "sm",',
      '  state: "primary",',
      '  icon: "rocket_launch",',
      '  eyebrow: "Release",',
      '  title: "Pubblicare la release di aprile?",',
      '  subtitle: "La build e pronta e il rollout parte dal 10% del traffico.",',
      '  content: _.List(_.Item("Deploy web EU e US"), _.Item("Rollback pronto in 90 secondi")),',
      '  actions: ({ close }) => [',
      '    _.Btn({ outline: true, onClick: close }, "Rimanda"),',
      '    _.Btn({ color: "primary", onClick: close }, "Pubblica")',
      '  ]',
      '});',
      '_.Btn({ color: "primary", onClick: () => publishDialog.open() }, "Apri conferma release");'
    ]
  ),
  slots: createSection(
    [
      _.p("Quando il layout standard non basta, usa gli slot `header/content/footer/close` per costruire dialog piu editoriali o piu operativi."),
      row(
        _.Btn({ color: "info", onClick: () => customerDialog.open({ state: "info" }) }, "Apri escalation cliente"),
        _.Btn({ outline: true, onClick: () => customerDialog.open({ state: "secondary" }) }, "Apri con stato alternativo")
      )
    ],
    [
      'const customerDialog = _.Dialog({',
      '  size: "lg",',
      '  state: "info",',
      '  stickyActions: true,',
      '  slots: {',
      '    header: ({ close }) => _.div(/* header custom con KPI e close button */),',
      '    content: () => _.div(metricRow("SLA residuo", "17 minuti", "warning")),',
      '    footer: ({ close }) => _.div(_.Btn({ outline: true }, "Apri bridge"), _.Btn({ color: "primary", onClick: close }, "Assegna owner"))',
      '  }',
      '});'
    ]
  ),
  dynamic: createSection(
    [
      _.p("`open(overrides)` e `update(props)` permettono di riusare la stessa istanza per piu scenari runtime."),
      row(
        _.Btn({ color: "success", onClick: () => openScenario("success") }, "Scenario success"),
        _.Btn({ color: "warning", onClick: () => openScenario("warning") }, "Scenario warning"),
        _.Btn({ color: "danger", onClick: () => openScenario("danger") }, "Scenario danger")
      )
    ],
    [
      'const scenarioDialog = _.Dialog({ size: "md", closeButton: true, actionsAlign: "between" });',
      'scenarioDialog.open({',
      '  state: "success",',
      '  icon: "task_alt",',
      '  title: "6.248 contatti sincronizzati",',
      '  content: _.List(_.Item("Nuovi record: 1.842"), _.Item("Aggiornati: 4.279")),',
      '  actions: ({ close }) => [_.Btn({ outline: true, onClick: close }, "Chiudi"), _.Btn({ color: "success", onClick: close }, "Apri report")]',
      '});'
    ]
  ),
  workspace: createSection(
    [
      _.p("Per contenuti lunghi usa `fullscreen`, `scrollable`, `stickyHeader`, `stickyActions` e `bodyMaxHeight`."),
      row(
        _.Btn({ color: "secondary", onClick: () => workflowDialog.open() }, "Apri workspace go-live")
      )
    ],
    [
      'const workflowDialog = _.Dialog({',
      '  size: "full",',
      '  fullscreen: true,',
      '  stickyHeader: true,',
      '  stickyActions: true,',
      '  scrollable: true,',
      '  bodyMaxHeight: "78vh",',
      '  title: "Checklist multi-team per il lancio marketplace",',
      '  content: _.div(/* contenuto lungo */),',
      '  actions: ({ close }) => [_.Btn({ outline: true }, "Salva bozza"), _.Btn({ color: "primary", onClick: close }, "Conferma go-live")]',
      '});'
    ]
  )
};

const dialog = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: dialogDoc,
    api: () => _.docTable("Dialog")
  }),
  _.h2("Esempi completi"),
  boxCode("Conferma release", listSample.basic),
  boxCode("Dialog con slot custom", listSample.slots),
  boxCode("Runtime overrides", listSample.dynamic),
  boxCode("Workspace fullscreen", listSample.workspace)
);

export { dialog };
