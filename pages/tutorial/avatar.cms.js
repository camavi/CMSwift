const avatarRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "12px"
};

const boardRow = (title, note, avatarNode, metaNode) => _.div({
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "14px",
    padding: "12px 0",
    borderBottom: "1px solid var(--cms-border-color)"
  }
},
avatarNode,
_.div({ style: { flex: "1 1 auto" } },
  _.div({ style: { fontWeight: "700", marginBottom: "4px" } }, title),
  _.div({ style: { color: "var(--cms-text-secondary, #7b8494)", fontSize: "13px" } }, note)
),
metaNode
);

const liveMembers = {
  qa: { name: "Anna Rossi", role: "QA lead", color: "success", status: "online", badge: "2", icon: "verified_user" },
  ux: { name: "Marta Neri", role: "UX review", color: "warning", status: "away", badge: "UX", icon: "draw" },
  ops: { name: "Luca Greco", role: "Deploy manager", color: "primary", status: "busy", badge: "!", icon: "rocket_launch" }
};
const liveSelected = _.rod("qa");
const liveCurrent = () => liveMembers[liveSelected.value] || liveMembers.qa;

const listSample = {
  basic: {
    code: [
      _.div({ style: avatarRowStyle },
        _.Avatar({ label: "Anna Rossi", status: "online" }),
        _.Avatar({ label: "Marco Bianchi", color: "primary", status: "busy" }),
        _.Avatar({ label: "Giulia Verdi", color: "secondary", badge: "3", status: "away" }),
        _.Avatar({ icon: "support_agent", color: "info", statusColor: "info" }),
        _.Avatar({ label: "Team QA", square: true, outline: true, color: "warning", badge: "QA" })
      )
    ],
    sample: [
      '_.Avatar({ label: "Anna Rossi", status: "online" });',
      '_.Avatar({ label: "Marco Bianchi", color: "primary", status: "busy" });',
      '_.Avatar({ label: "Giulia Verdi", color: "secondary", badge: "3", status: "away" });',
      '_.Avatar({ icon: "support_agent", color: "info", statusColor: "info" });',
      '_.Avatar({ label: "Team QA", square: true, outline: true, color: "warning", badge: "QA" });'
    ]
  },
  size: {
    code: [
      _.div({ style: avatarRowStyle },
        _.Avatar({ label: "CM", size: "xxs" }),
        _.Avatar({ label: "CM", size: "xs" }),
        _.Avatar({ label: "CM", size: "sm" }),
        _.Avatar({ label: "CM", size: "md" }),
        _.Avatar({ label: "CM", size: "lg" }),
        _.Avatar({ label: "CM", size: "xl" }),
        _.Avatar({ label: "CM", size: "xxl", badge: "9+" })
      )
    ],
    sample: [
      '_.Avatar({ label: "CM", size: "xxs" });',
      '_.Avatar({ label: "CM", size: "xs" });',
      '_.Avatar({ label: "CM", size: "sm" });',
      '_.Avatar({ label: "CM", size: "md" });',
      '_.Avatar({ label: "CM", size: "lg" });',
      '_.Avatar({ label: "CM", size: "xl" });',
      '_.Avatar({ label: "CM", size: "xxl", badge: "9+" });'
    ]
  },
  image: {
    code: [
      _.div({ style: avatarRowStyle },
        _.Avatar({ src: "https://i.pravatar.cc/120?img=12", label: "Anna Rossi", status: "online", size: "lg" }),
        _.Avatar({ src: "https://i.pravatar.cc/120?img=33", label: "Luca Greco", square: true, badge: "4", size: "lg" }),
        _.Avatar({ src: "https://i.pravatar.cc/120?img=5", label: "Marta Neri", color: "dark", outline: true, size: "lg" }),
        _.Avatar({ label: "Nessuna foto", color: "secondary", size: "lg" }),
        _.Avatar({ icon: "forum", color: "primary", size: "lg", statusColor: "primary" })
      )
    ],
    sample: [
      '_.Avatar({ src: "https://i.pravatar.cc/120?img=12", label: "Anna Rossi", status: "online", size: "lg" });',
      '_.Avatar({ src: "https://i.pravatar.cc/120?img=33", label: "Luca Greco", square: true, badge: "4", size: "lg" });',
      '_.Avatar({ src: "https://i.pravatar.cc/120?img=5", label: "Marta Neri", color: "dark", outline: true, size: "lg" });',
      '_.Avatar({ label: "Nessuna foto", color: "secondary", size: "lg" });',
      '_.Avatar({ icon: "forum", color: "primary", size: "lg", statusColor: "primary" });'
    ]
  },
  styles: {
    code: [
      _.div({ style: avatarRowStyle },
        _.Avatar({ label: "Release", color: "success", shadow: true, badge: "OK" }),
        _.Avatar({ label: "Review", color: "warning", outline: true, border: true }),
        _.Avatar({ label: "Alert", color: "danger", glow: true, badge: "!" }),
        _.Avatar({ label: "Info", color: "info", glass: true, statusColor: "info" }),
        _.Avatar({ label: "Ops", color: "primary", gradient: 45, clickable: true }),
        _.Avatar({ label: "UI", color: "secondary", lightShadow: true, square: true }),
        _.Avatar({ label: "Core", color: "dark", glossy: true }),
        _.Avatar({ label: "Docs", color: "light", border: true })
      )
    ],
    sample: [
      '_.Avatar({ label: "Release", color: "success", shadow: true, badge: "OK" });',
      '_.Avatar({ label: "Review", color: "warning", outline: true, border: true });',
      '_.Avatar({ label: "Alert", color: "danger", glow: true, badge: "!" });',
      '_.Avatar({ label: "Info", color: "info", glass: true, statusColor: "info" });',
      '_.Avatar({ label: "Ops", color: "primary", gradient: 45, clickable: true });',
      '_.Avatar({ label: "UI", color: "secondary", lightShadow: true, square: true });',
      '_.Avatar({ label: "Core", color: "dark", glossy: true });',
      '_.Avatar({ label: "Docs", color: "light", border: true });'
    ]
  },
  overlays: {
    code: [
      _.div({ style: avatarRowStyle },
        _.Avatar({
          label: "Product",
          color: "primary",
          size: "xl",
          slots: {
            topLeft: () => _.Icon({ name: "workspace_premium", size: "xs", color: "warning" }),
            badge: () => _.Chip({ size: "xxs", color: "warning" }, "PM"),
            status: () => _.Chip({ size: "xxs", color: "success" }, "LIVE")
          }
        }),
        _.Avatar({
          label: "Support Team",
          color: "secondary",
          size: "xl",
          square: true,
          topLeft: _.Icon({ name: "shield_person", size: "xs", color: "success" }),
          bottomLeft: _.Chip({ size: "xxs", color: "info" }, "24/7"),
          badge: "12"
        }),
        _.Avatar({
          size: "xl",
          color: "dark",
          slots: {
            media: () => _.div({
              style: {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, var(--cms-dark) 0%, var(--cms-primary) 100%)",
                color: "white"
              }
            }, _.Icon({ name: "memory", size: "lg" })),
            badge: () => _.Chip({ size: "xxs", color: "danger" }, "AI")
          }
        })
      )
    ],
    sample: [
      `_.Avatar({
  label: "Product",
  color: "primary",
  size: "xl",
  slots: {
    topLeft: () => _.Icon({ name: "workspace_premium", size: "xs", color: "warning" }),
    badge: () => _.Chip({ size: "xxs", color: "warning" }, "PM"),
    status: () => _.Chip({ size: "xxs", color: "success" }, "LIVE")
  }
});`,
      `_.Avatar({
  label: "Support Team",
  color: "secondary",
  size: "xl",
  square: true,
  topLeft: _.Icon({ name: "shield_person", size: "xs", color: "success" }),
  bottomLeft: _.Chip({ size: "xxs", color: "info" }, "24/7"),
  badge: "12"
});`,
      `_.Avatar({
  size: "xl",
  color: "dark",
  slots: {
    media: () => _.div({ style: { background: "linear-gradient(135deg, var(--cms-dark) 0%, var(--cms-primary) 100%)" } }, _.Icon({ name: "memory", size: "lg" })),
    badge: () => _.Chip({ size: "xxs", color: "danger" }, "AI")
  }
});`
    ]
  },
  real: {
    code: [
      _.Card({ header: "Release room" },
        boardRow(
          "Review design system",
          "Anna Rossi sta chiudendo il QA visuale del kit componenti.",
          _.Avatar({ src: "https://i.pravatar.cc/120?img=12", label: "Anna Rossi", status: "online", badge: "2" }),
          _.Chip({ size: "xs", color: "success" }, "In corso")
        ),
        boardRow(
          "Deploy staging",
          "Luca Greco coordina la checklist finale con il team ops.",
          _.Avatar({ label: "Luca Greco", color: "primary", icon: "rocket_launch", status: "busy" }),
          _.Chip({ size: "xs", color: "warning" }, "Tra 15 min")
        ),
        boardRow(
          "Aggiorna documentazione API",
          "Marta Neri prepara gli esempi per onboarding e support.",
          _.Avatar({ label: "Marta Neri", color: "secondary", square: true, badge: "DOC" }),
          _.Chip({ size: "xs", color: "info" }, "Backlog")
        )
      )
    ],
    sample: [
      `_.Card({ header: "Release room" },
  boardRow(
    "Review design system",
    "Anna Rossi sta chiudendo il QA visuale del kit componenti.",
    _.Avatar({ src: "https://i.pravatar.cc/120?img=12", label: "Anna Rossi", status: "online", badge: "2" }),
    _.Chip({ size: "xs", color: "success" }, "In corso")
  )
);`
    ]
  },
  reactive: {
    code: [
        _.div({ style: { display: "grid", gap: "16px" } },
        _.div({ style: avatarRowStyle },
          _.Btn({ size: "xs", color: () => liveSelected.value === "qa" ? "success" : "secondary", onClick: () => liveSelected.value = "qa" }, "QA"),
          _.Btn({ size: "xs", color: () => liveSelected.value === "ux" ? "warning" : "secondary", onClick: () => liveSelected.value = "ux" }, "UX"),
          _.Btn({ size: "xs", color: () => liveSelected.value === "ops" ? "primary" : "secondary", onClick: () => liveSelected.value = "ops" }, "Ops")
        ),
        _.div({ style: { display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" } },
          _.Avatar({
            size: "xxl",
            label: () => liveCurrent().name,
            color: () => liveCurrent().color,
            status: () => liveCurrent().status,
            badge: () => liveCurrent().badge,
            slots: {
              topLeft: () => _.Icon({ name: liveCurrent().icon, size: "sm" })
            }
          }),
          _.div(
            _.div({ style: { fontWeight: "700", marginBottom: "4px" } }, () => liveCurrent().name),
            _.div({ style: { marginBottom: "6px", color: "var(--cms-text-secondary, #7b8494)" } }, () => liveCurrent().role),
            _.Chip({ size: "xs", color: () => liveCurrent().color }, () => liveCurrent().status)
          )
        )
      )
    ],
    sample: [
      'const selected = _.rod("qa");',
      '_.Avatar({',
      '  size: "xxl",',
      '  label: () => liveCurrent().name,',
      '  color: () => liveCurrent().color,',
      '  status: () => liveCurrent().status,',
      '  badge: () => liveCurrent().badge',
      '});'
    ]
  }
};

const avatar = _.div({ class: "cms-panel cms-page" },
  _.h1("Avatar"),
  _.p("Avatar standardizzato per team, owner, reviewer e presenze live: supporta immagine, fallback intelligenti da label, overlay, badge, stati e slot custom senza dover costruire wrapper manuali ogni volta."),
  _.h2("Props principali"),
  _.List(
    _.Item("label, name, initials, text: definiscono fallback e semantica dell'avatar"),
    _.Item("src, srcset, sizes, fit: gestione immagine e comportamento media"),
    _.Item("size, radius, square, fontSize: controllano dimensione e forma"),
    _.Item("color, state, outline, shadow, glass, glow, gradient: stili coerenti con gli altri componenti UI"),
    _.Item("badge, notification, status, statusColor, topLeft/topRight/bottomLeft/bottomRight: overlay rapidi"),
    _.Item("slots media, fallback, label, icon, badge, status: personalizzazione completa del rendering")
  ),
  _.h2("Documentazione API"),
  _.docTable("Avatar"),
  _.h2("Esempi completi"),
  boxCode("Base per team e presenze", listSample.basic),
  boxCode("Size scale", listSample.size),
  boxCode("Immagine, fallback e icona", listSample.image),
  boxCode("Varianti visuali", listSample.styles),
  boxCode("Overlay e slot custom", listSample.overlays),
  boxCode("Use case reale", listSample.real),
  boxCode("Avatar reattivo", listSample.reactive)
);

export { avatar };
