const tabsModel = _.rod("overview");

const tabsSample = _.div({ class: "cms-panel cms-page" },
  _.h2("Tabs sample"),
  _.p("Tabs standard per toolbar e header di card, con supporto model, icon/note/badge e children usati come area extra."),
  _.Card({ header: "Esempio" },
    _.Tabs({
      tabs: [
        { label: "Overview", value: "overview", icon: "dashboard", note: "KPI live", badge: "12" },
        { label: "Settings", value: "settings", icon: "settings", note: "Configurazioni", badge: _.Chip({ size: "xs", outline: true }, "2") }
      ],
      model: tabsModel,
      color: "primary"
    },
      _.Btn({ size: "sm", outline: true }, "Esporta")
    )
  )
);

export { tabsSample };
