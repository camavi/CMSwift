import { getComponentDoc } from "./docs/catalog.js";
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

const stack = (...children) => _.div({
  style: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }
}, ...children);

const infoRow = (label, value, tone = "info") => _.div({
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
  _.Chip({ color: tone, size: "xs", outline: true }, tone)
);

const popoverStatus = _.rod("Nessuna azione eseguita.");

const releasePopover = _.Popover({
  size: "sm",
  state: "primary",
  icon: "rocket_launch",
  eyebrow: "Release",
  title: "Rollout aprile",
  subtitle: "Conferma solo quando error rate e tempi API sono stabili negli ultimi 10 minuti.",
  content: _.div(
    _.List(
      _.Item("Deploy frontend EU e US"),
      _.Item("Migrazione schema gia completata"),
      _.Item("Rollback pronto in 90 secondi")
    )
  ),
  actions: ({ close }) => [
    _.Btn({
      outline: true,
      onClick: () => {
        popoverStatus.value = "Release lasciata in hold.";
        close();
      }
    }, "Rimanda"),
    _.Btn({
      color: "primary",
      onClick: () => {
        popoverStatus.value = "Rollout avviato al 10% del traffico.";
        close();
      }
    }, "Pubblica")
  ]
});

const releaseBtn = _.Btn({ color: "primary" }, "Azioni release");
const releaseToggleBtn = _.Btn({ outline: true }, "Toggle");
releaseBtn.addEventListener("click", () => releasePopover.open(releaseBtn));
releaseToggleBtn.addEventListener("click", () => releasePopover.toggle(releaseBtn));

const assigneePopover = _.Popover({
  size: "md",
  state: "info",
  placement: "bottom-end",
  closeButton: true,
  closeOnSelect: true,
  slots: {
    header: () => _.div({
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "12px",
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
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(86, 173, 255, 0.12)",
            color: "var(--cms-info)"
          }
        }, _.Icon({ name: "group_add", size: "sm" })),
        _.div(
          _.div({ style: { fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--cms-info)" } }, "Routing ticket"),
          _.div({ style: { fontWeight: "700" } }, "Assegna owner"),
          _.div({ class: "cms-muted", style: { fontSize: "13px" } }, "Scegli il referente operativo per l'escalation aperta.")
        )
      ),
      _.Chip({ color: "info", outline: true, size: "xs" }, "SLA 17 min")
    ),
    content: ({ close }) => stack(
      _.Btn({
        outline: true,
        "data-popover-select": true,
        onClick: () => {
          popoverStatus.value = "Ticket assegnato a Marta, team Commerce.";
          close();
        }
      }, _.Icon({ name: "support_agent", size: "sm" }), "Marta · Commerce"),
      _.Btn({
        outline: true,
        "data-popover-select": true,
        onClick: () => {
          popoverStatus.value = "Ticket assegnato a Luca, team Platform.";
          close();
        }
      }, _.Icon({ name: "lan", size: "sm" }), "Luca · Platform"),
      _.Btn({
        outline: true,
        "data-popover-select": true,
        onClick: () => {
          popoverStatus.value = "Ticket assegnato a Sara, team Support.";
          close();
        }
      }, _.Icon({ name: "headset_mic", size: "sm" }), "Sara · Support")
    ),
    footer: () => _.div({ class: "cms-muted", style: { fontSize: "12px" } }, "Ogni selezione chiude il popover grazie a `closeOnSelect` + `data-popover-select`.")
  }
});

const assigneeBtn = _.Btn({ color: "info" }, "Assegna owner");
assigneeBtn.addEventListener("click", () => assigneePopover.open(assigneeBtn));

const scenarioPopover = _.Popover({
  size: "sm",
  placement: "bottom-start",
  closeButton: true
});

const scenarioConfigs = {
  success: {
    state: "success",
    icon: "task_alt",
    eyebrow: "Sync completata",
    title: "6.248 contatti aggiornati",
    subtitle: "La sincronizzazione CRM e terminata senza conflitti.",
    content: _.List(
      _.Item("Nuovi record: 1.842"),
      _.Item("Aggiornati: 4.279"),
      _.Item("Scartati: 127")
    ),
    actions: ({ close }) => [
      _.Btn({
        outline: true,
        onClick: () => {
          popoverStatus.value = "Sync chiusa senza altre azioni.";
          close();
        }
      }, "Chiudi"),
      _.Btn({
        color: "success",
        onClick: () => {
          popoverStatus.value = "Report sync aperto.";
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
    subtitle: "L'ordine B2B 10492 e sotto il margine minimo impostato.",
    content: _.List(
      _.Item("Margine atteso: 18%"),
      _.Item("Margine attuale: 11.4%"),
      _.Item("Delta assoluto: -642 EUR")
    ),
    actions: ({ close }) => [
      _.Btn({
        outline: true,
        onClick: () => {
          popoverStatus.value = "Ordine inviato al pricing.";
          close();
        }
      }, "Invia"),
      _.Btn({
        color: "warning",
        onClick: () => {
          popoverStatus.value = "Eccezione approvata.";
          close();
        }
      }, "Approva")
    ]
  },
  danger: {
    state: "danger",
    icon: "block",
    eyebrow: "Sicurezza",
    title: "Revocare accesso partner?",
    subtitle: "Download anomali rilevati sull'area documentale del tenant esterno.",
    content: _.List(
      _.Item("Ultimo IP: 185.44.23.91"),
      _.Item("Volume download: 1.8 GB in 9 minuti"),
      _.Item("Country mismatch rispetto al contratto")
    ),
    actions: ({ close }) => [
      _.Btn({
        outline: true,
        onClick: () => {
          popoverStatus.value = "Monitoraggio lasciato attivo.";
          close();
        }
      }, "Solo monitora"),
      _.Btn({
        color: "danger",
        onClick: () => {
          popoverStatus.value = "Accesso partner revocato.";
          close();
        }
      }, "Revoca")
    ]
  }
};

const openScenario = (el, key) => scenarioPopover.open(el, scenarioConfigs[key]);

const successBtn = _.Btn({ color: "success" }, "Scenario success");
const warningBtn = _.Btn({ color: "warning" }, "Scenario warning");
const dangerBtn = _.Btn({ color: "danger" }, "Scenario danger");
successBtn.addEventListener("click", () => openScenario(successBtn, "success"));
warningBtn.addEventListener("click", () => openScenario(warningBtn, "warning"));
dangerBtn.addEventListener("click", () => openScenario(dangerBtn, "danger"));

const filterState = _.rod({
  highMargin: true,
  blocked: false,
  italianMarket: true,
  marketplace: false
});
const sortModel = _.rod("priority");
const densityModel = _.rod("comfortable");
const filterSummary = _.rod("Margine > 25% · Italia · Ordinamento priorita");

const refreshFilterSummary = () => {
  const labels = [];
  if (filterState.value.highMargin === true) labels.push("Margine > 25%");
  if (filterState.value.blocked === true) labels.push("Solo bloccati");
  if (filterState.value.italianMarket === true) labels.push("Italia");
  if (filterState.value.marketplace === true) labels.push("Marketplace");
  labels.push(`Ordinamento ${sortModel.value}`);
  labels.push(`Vista ${densityModel.value}`);
  filterSummary.value = labels.join(" · ");
};

const filterPopover = _.Popover({
  size: "lg",
  state: "secondary",
  placement: "bottom-end",
  trigger: "click",
  closeButton: true,
  onOpen: () => {
    popoverStatus.value = "Pannello filtri aperto.";
  },
  onClose: () => {
    refreshFilterSummary();
  },
  slots: {
    content: () => _.div(
      infoRow("Pipeline", "240 ordini pronti al check", "secondary"),
      _.div({ style: { marginTop: "16px" } },
        _.div({ style: { fontWeight: "700", marginBottom: "8px" } }, "Flag rapidi"),
        stack(
          _.Checkbox({ color: "success", model: filterState.value.highMargin }, "Margine superiore al 25%"),
          _.Checkbox({ color: "warning", model: filterState.value.blocked }, "Solo ordini bloccati"),
          _.Checkbox({ color: "info", model: filterState.value.italianMarket }, "Canale Italia"),
          _.Checkbox({ color: "secondary", model: filterState.value.marketplace }, "Marketplace esterni")
        )
      ),
      _.div({ style: { marginTop: "16px" } },
        _.div({ style: { fontWeight: "700", marginBottom: "8px" } }, "Ordinamento"),
        stack(
          _.Radio({ color: "secondary", value: "priority", model: sortModel }, "Priorita"),
          _.Radio({ color: "secondary", value: "eta", model: sortModel }, "ETA spedizione"),
          _.Radio({ color: "secondary", value: "margin", model: sortModel }, "Margine")
        )
      ),
      _.div({ style: { marginTop: "16px" } },
        _.div({ style: { fontWeight: "700", marginBottom: "8px" } }, "Densita card"),
        row(
          _.Chip({ clickable: true, outline: densityModel.value !== "compact", color: densityModel.value === "compact" ? "secondary" : null, onClick: () => { densityModel.value = "compact"; } }, "Compact"),
          _.Chip({ clickable: true, outline: densityModel.value !== "comfortable", color: densityModel.value === "comfortable" ? "secondary" : null, onClick: () => { densityModel.value = "comfortable"; } }, "Comfortable"),
          _.Chip({ clickable: true, outline: densityModel.value !== "expanded", color: densityModel.value === "expanded" ? "secondary" : null, onClick: () => { densityModel.value = "expanded"; } }, "Expanded")
        )
      )
    ),
    footer: ({ close }) => row(
      _.Btn({
        outline: true,
        onClick: () => {
          popoverStatus.value = "Filtri chiusi senza applicare nuove azioni.";
          close();
        }
      }, "Chiudi"),
      _.Btn({
        color: "secondary",
        onClick: () => {
          refreshFilterSummary();
          popoverStatus.value = `Filtri applicati: ${filterSummary.value}.`;
          close();
        }
      }, "Applica filtri")
    )
  }
});

const filterBtn = _.Btn({ color: "secondary" }, "Filtri ordini");
filterPopover.bind(filterBtn);

const listSample = {
  basic: createSection(
    [
      _.p("Popover ancorato per azioni rapide con layout standard: icon, eyebrow, title, subtitle, contenuto e footer actions."),
      _.div({ class: "cms-m-b-md" },
        _.b("Ultima azione: "),
        _.span(popoverStatus)
      ),
      row(releaseBtn, releaseToggleBtn)
    ],
    [
      'const releasePopover = _.Popover({',
      '  size: "sm",',
      '  state: "primary",',
      '  icon: "rocket_launch",',
      '  eyebrow: "Release",',
      '  title: "Rollout aprile",',
      '  subtitle: "Conferma solo quando il monitoraggio e stabile.",',
      '  content: _.List(_.Item("Deploy frontend EU e US"), _.Item("Rollback pronto in 90 secondi")),',
      '  actions: ({ close }) => [',
      '    _.Btn({ outline: true, onClick: close }, "Rimanda"),',
      '    _.Btn({ color: "primary", onClick: close }, "Pubblica")',
      '  ]',
      '});',
      'releasePopover.open(releaseBtn);',
      'releasePopover.toggle(releaseBtn);'
    ]
  ),
  slots: createSection(
    [
      _.p("Usa gli slot `header/content/footer` quando il layout base non basta e vuoi un popover piu editoriale o piu operativo."),
      row(assigneeBtn)
    ],
    [
      'const assigneePopover = _.Popover({',
      '  size: "md",',
      '  state: "info",',
      '  placement: "bottom-end",',
      '  closeButton: true,',
      '  closeOnSelect: true,',
      '  slots: {',
      '    header: () => _.div(/* header custom con badge SLA */),',
      '    content: ({ close }) => _.div(_.Btn({ "data-popover-select": true, onClick: close }, "Marta · Commerce")),',
      '    footer: () => _.div("Ogni selezione chiude il popover.")',
      '  }',
      '});'
    ]
  ),
  dynamic: createSection(
    [
      _.p("`open(anchor, overrides)` e `update(props)` permettono di riusare la stessa istanza per scenari runtime diversi senza duplicare componenti."),
      row(successBtn, warningBtn, dangerBtn)
    ],
    [
      'const scenarioPopover = _.Popover({ size: "sm", placement: "bottom-start", closeButton: true });',
      'scenarioPopover.open(successBtn, {',
      '  state: "success",',
      '  icon: "task_alt",',
      '  title: "6.248 contatti aggiornati",',
      '  content: _.List(_.Item("Nuovi record: 1.842"), _.Item("Aggiornati: 4.279")),',
      '  actions: ({ close }) => [_.Btn({ outline: true, onClick: close }, "Chiudi"), _.Btn({ color: "success", onClick: close }, "Apri report")]',
      '});'
    ]
  ),
  filters: createSection(
    [
      _.p("Caso reale: pannello filtri ancorato al bottone, bindato con `bind()` e costruito con `Checkbox`, `Radio` e `Chip`."),
      _.div({ class: "cms-m-b-md" },
        _.b("Config corrente: "),
        _.span(filterSummary)
      ),
      row(filterBtn)
    ],
    [
      'const filterPopover = _.Popover({',
      '  size: "lg",',
      '  state: "secondary",',
      '  placement: "bottom-end",',
      '  trigger: "click",',
      '  closeButton: true,',
      '  slots: {',
      '    content: () => _.div(',
      '      _.Checkbox({ color: "success", model: filterState.value.highMargin }, "Margine superiore al 25%"),',
      '      _.Radio({ color: "secondary", value: "priority", model: sortModel }, "Priorita"),',
      '      _.Chip({ clickable: true, onClick: () => { densityModel.value = "compact"; } }, "Compact")',
      '    ),',
      '    footer: ({ close }) => _.Btn({ color: "secondary", onClick: close }, "Applica filtri")',
      '  }',
      '});',
      'filterPopover.bind(filterBtn);'
    ]
  )
};

const popover = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Popover"),
    api: () => _.docTable("Popover")
  }),
  _.h2("Esempi completi"),
  boxCode("Azioni rapide", listSample.basic),
  boxCode("Slot custom", listSample.slots),
  boxCode("Runtime overrides", listSample.dynamic),
  boxCode("Pannello filtri reale", listSample.filters)
);

export { popover };
