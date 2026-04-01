const gridColSample = _.div({ class: "cms-panel cms-page" },
  _.h2("GridCol sample"),
  _.p("Grid item con span responsive per `_.Grid`."),
  _.Card({ header: "Esempio" },
    _.Grid({ cols: 2, gap: "var(--cms-s-md)" },
      _.GridCol(_.Card("Col 8")),
      _.GridCol(_.Card("Col 16"))
    )
  )
);

export { gridColSample };
