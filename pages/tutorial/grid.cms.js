const grid = _.div({ class: "cms-panel cms-page" },
  _.h1("Grid"),
  _.p("Griglia CSS vera basata su `display: grid`, con 24 colonne di default oppure `cols` custom. Lavora insieme a `_.GridCol` per span responsive."),
  _.h2("Props principali"),
  _.List(
    _.Item("`cols`: numero o template CSS delle colonne, default `24`"),
    _.Item("`gap`: spacing della griglia"),
    _.Item("`align`, `justify`: allineamento del container grid"),
    _.Item("`dense`: abilita `grid-auto-flow: dense`")
  ),
  _.h2("Esempio completo"),
  _.Card({ header: "Demo" },
    _.Grid({ cols: 3, gap: "var(--cms-s-md)" },
      _.GridCol({ md: 8 }, _.Card("A")),
      _.GridCol({ md: 8 }, _.Card("B")),
      _.GridCol({ md: 8 }, _.Card("C"))
    )
  ),
  _.h2("Documentazione API"),
  _.docTable("Grid")
);

export { grid };
