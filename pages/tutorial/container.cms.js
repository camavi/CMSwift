import { getComponentDoc } from "./docs/catalog.js";
const createSection = (code, sample) => ({
  code: Array.isArray(code) ? code : [code],
  sample: Array.isArray(sample) ? sample : [sample]
});

const row = (...children) => _.div({
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center"
  }
}, ...children);

const stack = (...children) => _.div({
  style: {
    display: "grid",
    gap: "var(--cms-s-md)"
  }
}, ...children);

const demoSurface = (background, border) => ({
  background,
  border: `1px dashed ${border}`,
  borderRadius: "18px"
});

const metricCard = ({ title, value, tone, note }) => _.Card({
  title,
  subtitle: note,
  class: "cms-h-100"
},
  _.div({ class: "cms-h2" }, value),
  _.Chip({ color: tone, outline: true, size: "sm" }, tone)
);

const activityList = _.List({
  marker: false,
  divider: true,
  items: [
    {
      icon: "inventory_2",
      title: "Ordine B2B in review pricing",
      subtitle: "Cliente wholesale - margine sotto soglia",
      aside: _.Chip({ color: "warning", outline: true, size: "xs" }, "12 min")
    },
    {
      icon: "task_alt",
      title: "Smoke test checkout completati",
      subtitle: "IT, ES e FR senza regressioni",
      aside: _.Chip({ color: "success", outline: true, size: "xs" }, "qa ok")
    },
    {
      icon: "forum",
      title: "War room aperta con support",
      subtitle: "Aggiornamento stakeholder ogni 15 minuti",
      aside: _.Chip({ color: "info", outline: true, size: "xs" }, "live")
    }
  ]
});

const liveWidth = _.rod("lg");
const liveLayout = _.rod("flex");
const livePadding = _.rod("lg");
const liveGap = _.rod("md");
const liveFluid = _.rod(false);
const liveWrap = _.rod(true);
const liveJustify = _.rod("space-between");

const listSample = {
  presets: createSection(
    _.Card({
      title: "Preset di larghezza e gutter",
      subtitle: "Il container resta semplice quando vuoi solo vincolare la larghezza, ma ora gestisce anche padding e modalita fluid."
    },
      stack(
        _.Container({
          maxWidth: "sm",
          padding: "md",
          style: demoSurface("#eef6ff", "#86b7ff")
        },
          _.div({ class: "cms-h4 cms-m-b-xs" }, "maxWidth: sm"),
          _.div("Perfetto per form, wizard e pagine tutorial compatte.")
        ),
        _.Container({
          maxWidth: "xl",
          paddingX: "xl",
          paddingY: "md",
          style: demoSurface("#f7f3ff", "#baa5ff")
        },
          _.div({ class: "cms-h4 cms-m-b-xs" }, "maxWidth: xl + paddingX: xl"),
          _.div("Usalo per dashboard ricche, listing operative o header di sezione con piu respiro.")
        ),
        _.Container({
          fluid: true,
          padding: "lg",
          style: demoSurface("#ecfdf3", "#7fd3a0")
        },
          _.div({ class: "cms-h4 cms-m-b-xs" }, "fluid: true"),
          _.div("Banner, toolbar globali e strip di comunicazione che devono occupare tutta la viewport.")
        )
      )
    ),
    `_.Container({
  maxWidth: "sm",
  padding: "md"
}, "Contenuto compatto");

_.Container({
  maxWidth: "xl",
  paddingX: "xl",
  paddingY: "md"
}, "Dashboard con gutter piu ampio");

_.Container({
  fluid: true,
  padding: "lg"
}, "Strip full width");`
  ),
  layout: createSection(
    _.Card({
      title: "Toolbar / split layout",
      subtitle: "Le regioni `start`, `content`, `end` evitano markup ripetuto per barre operative, hero compatte e summary panel."
    },
      _.Container({
        maxWidth: "xl",
        padding: "lg",
        display: "flex",
        align: "center",
        justify: "space-between",
        wrap: true,
        gap: "md",
        style: demoSurface("#fff8ea", "#f0c36a"),
        start: row(
          _.Avatar({ label: "OPS", color: "secondary", size: 46 }),
          _.div(
            _.div({ class: "cms-h4" }, "Fulfillment control room"),
            _.div({ class: "cms-muted" }, "Container usato come barra superiore con blocchi indipendenti.")
          )
        ),
        content: row(
          _.Chip({ color: "warning", size: "sm" }, "12 ordini bloccati"),
          _.Chip({ color: "info", outline: true, size: "sm" }, "Cut-off 18:00"),
          _.Chip({ color: "secondary", outline: true, size: "sm" }, "Dock 04")
        ),
        end: row(
          _.Btn({ size: "sm", outline: true, icon: "download" }, "Export"),
          _.Btn({ size: "sm", color: "primary", icon: "add" }, "Nuova regola")
        )
      })
    ),
    `_.Container({
  maxWidth: "xl",
  padding: "lg",
  display: "flex",
  align: "center",
  justify: "space-between",
  wrap: true,
  gap: "md",
  start: _.Avatar({ label: "OPS", size: 46 }),
  content: _.Chip({ color: "warning", size: "sm" }, "12 ordini bloccati"),
  end: [
    _.Btn({ size: "sm", outline: true }, "Export"),
    _.Btn({ size: "sm", color: "primary" }, "Nuova regola")
  ]
});`
  ),
  structured: createSection(
    _.Container({
      tag: "section",
      maxWidth: "xl",
      paddingY: "xl",
      sectionGap: "lg",
      before: row(
        _.Chip({ color: "secondary", outline: true, size: "sm" }, "Container"),
        _.Chip({ color: "info", outline: true, size: "sm" }, "Header + Footer"),
        _.Chip({ color: "success", outline: true, size: "sm" }, "real use case")
      ),
      header: _.Header({
        sticky: false,
        icon: _.Avatar({ label: "CM", color: "secondary", size: "lg" }),
        eyebrow: "Release / Checkout",
        title: "Workspace composito con un solo Container",
        subtitle: "Header, contenuto e footer sono sezioni native del componente: la pagina resta leggibile e piu facile da mantenere.",
        content: row(
          _.Chip({ color: "warning", size: "sm" }, "Rollout 10%"),
          _.Chip({ color: "info", outline: true, size: "sm" }, "SLA 17 min"),
          _.Chip({ color: "secondary", outline: true, size: "sm" }, "Owner: product")
        ),
        actions: row(
          _.Btn({ size: "sm", outline: true }, "Apri changelog"),
          _.Btn({ size: "sm", color: "primary" }, "Conferma release")
        )
      }),
      content: stack(
        _.Grid({ cols: 3, gap: 12 },
          _.GridCol(metricCard({ title: "Orders in queue", value: "128", tone: "primary", note: "Ultimi 15 minuti" })),
          _.GridCol(metricCard({ title: "Blocked picks", value: "7", tone: "warning", note: "Richiedono review" })),
          _.GridCol(metricCard({ title: "Late carriers", value: "3", tone: "danger", note: "Hub Milano / Roma" }))
        ),
        _.Card({
          title: "Stream operativo",
          subtitle: "Il body del container puo ospitare card, list, form o layout piu complessi."
        }, activityList)
      ),
      footer: _.Footer({
        left: row(
          _.Chip({ color: "success", size: "sm" }, "Smoke test OK"),
          _.span({ class: "cms-muted" }, "Ultimo sync 09:42 CET")
        ),
        actions: [
          _.Btn({ size: "sm", outline: true }, "Apri war room"),
          _.Btn({ size: "sm", color: "primary" }, "Procedi")
        ]
      })
    }),
    `_.Container({
  tag: "section",
  maxWidth: "xl",
  paddingY: "xl",
  sectionGap: "lg",
  before: _.Chip({ color: "secondary", outline: true }, "Container"),
  header: _.Header({ title: "Workspace composito", subtitle: "Header come sezione nativa" }),
  content: _.Grid({ cols: 3, gap: 12 }, ...cards),
  footer: _.Footer({ actions: [_.Btn({ size: "sm" }, "Procedi")] })
});`
  ),
  live: createSection(
    _.Card({
      title: "Playground reattivo",
      subtitle: "Verifica in tempo reale width, layout, gap e modalita fluid senza cambiare markup."
    },
      stack(
        row(
          _.Radio({ value: "sm", model: liveWidth, color: "secondary" }, "sm"),
          _.Radio({ value: "lg", model: liveWidth, color: "secondary" }, "lg"),
          _.Radio({ value: "xl", model: liveWidth, color: "secondary" }, "xl")
        ),
        row(
          _.Radio({ value: "flex", model: liveLayout, color: "info" }, "flex"),
          _.Radio({ value: "grid", model: liveLayout, color: "info" }, "grid"),
          _.Radio({ value: "space-between", model: liveJustify, color: "primary" }, "justify-between"),
          _.Radio({ value: "center", model: liveJustify, color: "primary" }, "justify-center")
        ),
        row(
          _.Radio({ value: "md", model: liveGap, color: "warning" }, "gap md"),
          _.Radio({ value: "lg", model: liveGap, color: "warning" }, "gap lg"),
          _.Radio({ value: "md", model: livePadding, color: "danger" }, "padding md"),
          _.Radio({ value: "xl", model: livePadding, color: "danger" }, "padding xl")
        ),
        row(
          _.Checkbox({ model: liveFluid, color: "success" }, "Fluid"),
          _.Checkbox({ model: liveWrap, color: "secondary" }, "Wrap")
        ),
        _.div({ class: "cms-container-demo-stage" },
          _.div({ class: "cms-container-demo-stage__meta" },
            _.div({ class: "cms-container-demo-stage__title" }, () => `preview width: ${liveFluid.value ? "fluid" : liveWidth.value}`),
            _.div({ class: "cms-container-demo-stage__track" },
              _.div({
                class: "cms-container-demo-stage__fill",
                style: {
                  width: () => {
                    if (liveFluid.value) return "100%";
                    if (liveWidth.value === "sm") return "58%";
                    if (liveWidth.value === "lg") return "82%";
                    return "100%";
                  }
                }
              })
            )
          ),
          _.Container({
            class: "cms-container-demo-live",
            maxWidth: liveWidth,
            fluid: liveFluid,
            padding: livePadding,
            gap: liveGap,
            display: liveLayout,
            cols: () => liveLayout.value === "grid" ? "repeat(3, minmax(0, 1fr))" : null,
            align: "stretch",
            justify: liveJustify,
            wrap: liveWrap,
            style: demoSurface("#f4fbff", "#74b9e7"),
            startClass: "cms-container-demo-live__start",
            mainClass: "cms-container-demo-live__main",
            endClass: "cms-container-demo-live__end",
            start: () => _.Card({
              class: "cms-container-demo-panel cms-container-demo-panel--start",
              title: "start",
              subtitle: `layout: ${liveLayout.value}`
            },
              _.Chip({ color: "secondary", outline: true, size: "sm" }, `wrap: ${liveWrap.value ? "on" : "off"}`),
              _.div({ class: "cms-muted cms-m-t-sm" }, "Colonna laterale per filtri, metriche rapide o identity block.")
            ),
            content: () => _.Card({
              class: "cms-container-demo-panel cms-container-demo-panel--main",
              title: "content",
              subtitle: "Area centrale del container"
            },
              row(
                _.Chip({ color: "info", outline: true, size: "sm" }, `gap: ${liveGap.value}`),
                _.Chip({ color: "warning", outline: true, size: "sm" }, `padding: ${livePadding.value}`),
                _.Chip({ color: liveFluid.value ? "success" : "secondary", outline: true, size: "sm" }, liveFluid.value ? "fluid" : "bounded")
              ),
              _.div({
                class: "cms-container-demo-justify",
                style: {
                  justifyContent: () => liveJustify.value,
                  gap: () => liveGap.value === "lg" ? "14px" : "8px"
                }
              },
                _.span("start"),
                _.span("center"),
                _.span("end")
              ),
              _.p("Qui puoi montare summary, liste, filtri o contenuti editoriali. La struttura non cambia mentre modifichi il layout.")
            ),
            end: () => _.Card({
              class: "cms-container-demo-panel cms-container-demo-panel--actions",
              title: "actions",
              subtitle: `justify: ${liveJustify.value}`
            },
              stack(
                _.Btn({ class: "cms-container-demo-btn", size: "sm", outline: true }, "Salva draft"),
                _.Btn({ class: "cms-container-demo-btn", size: "sm", color: "primary" }, "Pubblica")
              )
            )
          })
        )
      )
    ),
    `const liveWidth = _.rod("lg");
const liveLayout = _.rod("flex");

_.Container({
  maxWidth: liveWidth,
  display: liveLayout,
  gap: "md",
  wrap: true,
  start: () => _.Card({ title: "start" }, "..."),
  content: () => _.Card({ title: "content" }, "..."),
  end: () => _.Btn({ size: "sm", color: "primary" }, "Pubblica")
});`
  )
};

const container = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Container"),
    api: () => _.docTable("Container")
  }),
  _.h2("Esempi completi"),
  boxCode("Preset width + spacing", listSample.presets, 24),
  boxCode("Start / content / end layout", listSample.layout, 24),
  boxCode("Workspace strutturato", listSample.structured, 24),
  boxCode("Playground live", listSample.live, 24)
);

export { container };
