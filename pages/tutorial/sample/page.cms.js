const pageSample = _.div({ class: "cms-panel cms-page" },
  _.h2("Page sample"),
  _.p("Page strutturata con header tipizzato, body libero e footer con azioni."),
  _.Card({ header: "Esempio" },
    _.Page({
      title: "Operations overview",
      subtitle: "Header leggibile senza wrapper manuali",
      aside: _.Chip({ color: "success", outline: true, size: "sm" }, "Live"),
      actions: _.Btn({ size: "sm", color: "primary" }, "Apri board")
    },
      _.Card("Contenuto pagina")
    )
  )
);

export { pageSample };
