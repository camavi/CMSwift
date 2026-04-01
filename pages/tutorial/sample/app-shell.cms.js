const appShellSample = _.div({ class: "cms-panel cms-page" },
  _.h2("AppShell sample"),
  _.p("Shell applicativa con shortcut per header/drawer/page/footer, slot completi e controllo drawer dal nodo ritornato."),
  _.Card({ header: "Esempio" },
    _.AppShell({
      title: "CMSwift",
      subtitle: "Esempio rapido con API shorthand",
      drawerItems: [{ label: "Home", to: "#", icon: "home" }],
      footerContent: _.Chip({ color: "info", outline: true, size: "sm" }, "sample")
    },
      _.Card("Contenuto")
    )
  )
);

export { appShellSample };
