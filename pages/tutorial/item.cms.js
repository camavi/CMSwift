import { getComponentDoc } from "./docs/catalog.js";
const listSample = {
  basic: {
    code: [
      _.List({ marker: false },
        _.Item("Messaggio semplice per elenco testuale"),
        _.Item("Secondo elemento con fallback diretto sui children"),
        _.Item("Terzo elemento per note rapide o checklist")
      )
    ],
    sample: [
      '_.List({ marker: false },',
      '  _.Item("Messaggio semplice per elenco testuale"),',
      '  _.Item("Secondo elemento con fallback diretto sui children"),',
      '  _.Item("Terzo elemento per note rapide o checklist")',
      ');'
    ]
  },
  structured: {
    code: [
      _.List({ marker: false },
        _.Item({
          icon: "rocket_launch",
          title: "Release checkout 4.2",
          subtitle: "Canary 20% attivo su Italia e Spagna.",
          meta: _.Chip({ color: "info", size: "xs" }, "Rollout"),
          aside: _.Badge({ color: "success", label: "Live" })
        }),
        _.Item({
          icon: "inventory_2",
          title: "Packaging email conferma",
          subtitle: "QA finale mobile e desktop prima del merge.",
          meta: _.Chip({ color: "warning", size: "xs" }, "Review"),
          aside: _.Badge({ color: "warning", label: "Pending" })
        })
      )
    ],
    sample: [
      '_.Item({',
      '  icon: "rocket_launch",',
      '  title: "Release checkout 4.2",',
      '  subtitle: "Canary 20% attivo su Italia e Spagna.",',
      '  meta: _.Chip({ color: "info", size: "xs" }, "Rollout"),',
      '  aside: _.Badge({ color: "success", label: "Live" })',
      '});',
      '',
      '_.Item({',
      '  icon: "inventory_2",',
      '  title: "Packaging email conferma",',
      '  subtitle: "QA finale mobile e desktop prima del merge.",',
      '  meta: _.Chip({ color: "warning", size: "xs" }, "Review"),',
      '  aside: _.Badge({ color: "warning", label: "Pending" })',
      '});'
    ]
  },
  actions: {
    code: [
      _.List({ marker: false },
        _.Item({
          icon: "campaign",
          title: "Newsletter weekend drop",
          subtitle: "Audience pronta, subject approvato, send previsto alle 18:00.",
          actions: _.Toolbar({ dense: true, gap: "8px" },
            _.Btn({ size: "xs", outline: true }, "Apri"),
            _.Btn({ size: "xs", color: "primary" }, "Invia test")
          ),
          aside: _.Chip({ color: "secondary", size: "xs" }, "CRM")
        }),
        _.Item({
          icon: "support_agent",
          title: "Escalation ticket VIP",
          subtitle: "Serve risposta entro 30 minuti con aggiornamento ordine.",
          actions: _.Toolbar({ dense: true, gap: "8px" },
            _.Btn({ size: "xs", outline: true }, "Dettaglio"),
            _.Btn({ size: "xs", color: "warning" }, "Assegna")
          ),
          aside: _.Chip({ color: "warning", size: "xs" }, "Urgente")
        })
      )
    ],
    sample: [
      '_.Item({',
      '  icon: "campaign",',
      '  title: "Newsletter weekend drop",',
      '  subtitle: "Audience pronta, subject approvato, send previsto alle 18:00.",',
      '  actions: _.Toolbar({ dense: true, gap: "8px" },',
      '    _.Btn({ size: "xs", outline: true }, "Apri"),',
      '    _.Btn({ size: "xs", color: "primary" }, "Invia test")',
      '  ),',
      '  aside: _.Chip({ color: "secondary", size: "xs" }, "CRM")',
      '});'
    ]
  },
  clickable: {
    code: [
      _.List({ marker: false },
        _.Item({
          clickable: true,
          icon: _.Avatar({ label: "AR", size: "sm" }),
          title: "Anna Rossi",
          subtitle: "Owner checkout refactor, ultimo update 12 minuti fa.",
          meta: "Product owner",
          aside: _.Icon({ name: "chevron_right", size: 18 })
        }),
        _.Item({
          clickable: true,
          active: true,
          icon: _.Avatar({ label: "MB", size: "sm" }),
          title: "Marco Bianchi",
          subtitle: "Ha preso in carico il cluster billing + refunds.",
          meta: "Engineering",
          aside: _.Icon({ name: "chevron_right", size: 18 })
        })
      )
    ],
    sample: [
      '_.Item({',
      '  clickable: true,',
      '  active: true,',
      '  icon: _.Avatar({ label: "MB", size: "sm" }),',
      '  title: "Marco Bianchi",',
      '  subtitle: "Ha preso in carico il cluster billing + refunds.",',
      '  meta: "Engineering",',
      '  aside: _.Icon({ name: "chevron_right", size: 18 })',
      '});'
    ]
  },
  states: {
    code: [
      _.List({ marker: false },
        _.Item({ color: "success", icon: "task_alt", title: "Sync feed completato", subtitle: "12.493 SKU aggiornati correttamente." }),
        _.Item({ outline: true, color: "warning", icon: "warning", title: "Rate limit vicino alla soglia", subtitle: "Meglio rallentare i job per i prossimi 10 minuti." }),
        _.Item({ glass: true, color: "info", icon: "insights", title: "Insight di campagna", subtitle: "CPA in calo del 14% rispetto alla scorsa settimana." }),
        _.Item({ shadow: true, color: "danger", icon: "priority_high", title: "Errore pagamento", subtitle: "Serve triage sul provider PSP secondario." })
      )
    ],
    sample: [
      '_.Item({ color: "success", icon: "task_alt", title: "Sync feed completato", subtitle: "12.493 SKU aggiornati correttamente." });',
      '_.Item({ outline: true, color: "warning", icon: "warning", title: "Rate limit vicino alla soglia", subtitle: "Meglio rallentare i job per i prossimi 10 minuti." });',
      '_.Item({ glass: true, color: "info", icon: "insights", title: "Insight di campagna", subtitle: "CPA in calo del 14% rispetto alla scorsa settimana." });',
      '_.Item({ shadow: true, color: "danger", icon: "priority_high", title: "Errore pagamento", subtitle: "Serve triage sul provider PSP secondario." });'
    ]
  }
};

const item = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Item"),
    api: () => _.docTable("Item")
  }),
  _.h2("Esempio completo"),
  boxCode("Base minimale", listSample.basic),
  boxCode("Item strutturati", listSample.structured),
  boxCode("Con azioni", listSample.actions),
  boxCode("Righe cliccabili", listSample.clickable),
  boxCode("Stati e varianti visuali", listSample.states)
);

export { item };
