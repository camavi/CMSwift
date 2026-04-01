const gridCol = _.div({ class: "cms-panel cms-page" },
  _.h1("GridCol"),
  _.p("Item per `_.Grid` con `span` responsive su breakpoint `sm/md/lg`, oppure `auto`. Usa CSS Grid reale invece di width flex."),
  _.h2("Props principali"),
  _.List(
    _.Item("`span`: quante colonne occupa nella griglia corrente"),
    _.Item("`sm`, `md`, `lg`: override responsive dello span"),
    _.Item("`auto`: lascia il posizionamento automatico del grid item"),
    _.Item("Accetta anche `class` e `style` come ogni altro componente UI")
  ),
  _.h2("Esempio completo"),
  _.Card({ header: "Demo" },
    _.div(
      _.Grid({ gap: "var(--cms-s-md)" },
        _.GridCol({ md: 8 }, _.Card("Col 24 -> 8")),
        _.GridCol({ md: 16 }, _.Card("Col 24 -> 16"))
      ),
      _.Grid({ cols: "max-content minmax(0, 1fr)", gap: "var(--cms-s-md)", style: { marginTop: "12px" } },
        _.GridCol({ auto: true }, _.Chip({ color: "info", outline: true }, "Auto item")),
        _.GridCol(_.Card("Contenuto affiancato che usa il resto della riga"))
      )
    )
  ),
  _.h2("Documentazione API"),
  _.docTable("GridCol")
);

export { gridCol };
