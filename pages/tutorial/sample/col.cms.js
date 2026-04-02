const colSample = _.div({ class: "cms-panel cms-page" },
  _.h2("Col sample"),
  _.p("Colonna responsive: di default si comporta come un contenitore normale, ma con `gap` o `start/body/end` attiva il layout verticale."),
  _.Card({ header: "Esempio" },
    _.Row({ gap: "md", wrap: true },
      _.Col({ col: 24, md: 8, gap: "sm" },
        _.Card({ title: "Sidebar", subtitle: "Stack verticale" },
          _.Col({ gap: "sm" },
            _.Checkbox({ model: _.rod(true), color: "success" }, "Solo task live"),
            _.Checkbox({ model: _.rod(false), color: "warning" }, "Backlog bloccato")
          )
        )
      ),
      _.Col({
        col: 24,
        md: 16,
        gap: "md",
        start: _.Chip({ color: "info", outline: true, size: "sm" }, "Execution board"),
        end: _.Btn({ color: "primary", icon: "rocket_launch" }, "Apri board")
      },
        _.Card({ title: "Board", subtitle: "Regioni + children" }, "La colonna puo gestire contenuti strutturati e responsive.")
      )
    )
  )
);

export { colSample };
