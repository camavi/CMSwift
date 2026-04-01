const gridSample = _.div({ class: "cms-panel cms-page" },
  _.h2("Grid sample"),
  _.p("Griglia CSS reale con 24 colonne di default o `cols` personalizzato."),
  _.Card({ header: "Esempio" },
    _.Grid({ cols: 2, gap: "var(--cms-s-md)" },
      _.GridCol(_.Card("A")),
      _.GridCol(_.Card("B"))
    )
  )
);

export { gridSample };
