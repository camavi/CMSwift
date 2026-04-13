import { getComponentDoc } from "../docs/catalog.js";
const infoLine = (label, getter) => _.div({ class: "cms-m-b-sm" }, _.b(`${label}: `), _.span(getter));
const formatRating = (value) => {
  const next = Number(value || 0);
  if (!next) return "0";
  return Number.isInteger(next) ? String(next) : next.toFixed(1);
};
const describeRating = (value) => {
  const next = Number(value || 0);
  if (next >= 4.5) return "top tier";
  if (next >= 3.5) return "molto buono";
  if (next >= 2.5) return "solido";
  if (next > 0) return "da migliorare";
  return "nessuna valutazione";
};

const basicValue = _.rod(4);
const halfValue = _.rod(3.5);
const demoValue = _.rod(4.5);
const demoHover = _.rod("nessun hover");
const demoLastInput = _.rod("nessun input");
const demoLastChange = _.rod("nessun change");

const listSample = {
  basic: {
    code: [
      infoLine("Valore corrente", () => `${formatRating(basicValue.value)}/5`),
      _.Rating({ model: basicValue, max: 5, label: "Feedback base" }),
      _.Rating({ value: 3, max: 5, color: "success", label: "Success" }),
      _.Rating({ value: 4, max: 5, color: "var(--cms-warning)", label: "Warning" }),
      _.Rating({ value: 5, max: 5, color: "var(--cms-danger)", label: "Danger" })
    ],
    sample: [
      "const basicValue = _.rod(4);",
      '_.Rating({ model: basicValue, max: 5, label: "Feedback base" });',
      '_.Rating({ value: 3, max: 5, color: "var(--cms-success)", label: "Success" });',
      '_.Rating({ value: 4, max: 5, color: "var(--cms-warning)", label: "Warning" });',
      '_.Rating({ value: 5, max: 5, color: "var(--cms-danger)", label: "Danger" });'
    ]
  },
  maxAndSize: {
    code: [
      _.Rating({ value: 3, max: 5, size: 16, gap: 4, color: "var(--cms-primary)", label: "Compatto" }),
      _.Rating({ value: 6, max: 10, size: 22, gap: 6, color: "var(--cms-info)", label: "Scala su 10" }),
      _.Rating({ value: 7, max: 10, size: 30, gap: 10, color: "var(--cms-secondary)", label: "Large preview" })
    ],
    sample: [
      '_.Rating({ value: 3, max: 5, size: 16, gap: 4, color: "var(--cms-primary)", label: "Compatto" });',
      '_.Rating({ value: 6, max: 10, size: 22, gap: 6, color: "var(--cms-info)", label: "Scala su 10" });',
      '_.Rating({ value: 7, max: 10, size: 30, gap: 10, color: "var(--cms-secondary)", label: "Large preview" });'
    ]
  },
  halfClearable: {
    code: [
      infoLine("Valore frazionario", () => `${formatRating(halfValue.value)}/5`),
      _.Rating({
        model: halfValue,
        max: 5,
        half: true,
        clearable: true,
        colorSelected: "var(--cms-warning)",
        colorHalf: "var(--cms-info)",
        colorHovered: "var(--cms-primary)",
        label: "Half + clearable"
      })
    ],
    sample: [
      "const halfValue = _.rod(3.5);",
      "_.Rating({",
      "  model: halfValue,",
      "  max: 5,",
      "  half: true,",
      "  clearable: true,",
      '  colorSelected: "var(--cms-warning)",',
      '  colorHalf: "var(--cms-info)",',
      '  colorHovered: "var(--cms-primary)",',
      '  label: "Half + clearable"',
      "});"
    ]
  },
  readonly: {
    code: [
      _.Rating({
        value: 4.5,
        max: 5,
        half: true,
        readonly: true,
        checkedIcon: "favorite",
        uncheckedIcon: "favorite_border",
        color: "var(--cms-danger)",
        label: "Readonly"
      }),
      _.Rating({
        value: 2,
        max: 5,
        disabled: true,
        checkedIcon: "grade",
        uncheckedIcon: "grade",
        colorInactive: "rgba(15, 23, 42, 0.18)",
        label: "Disabled"
      })
    ],
    sample: [
      '_.Rating({ value: 4.5, max: 5, half: true, readonly: true, checkedIcon: "favorite", uncheckedIcon: "favorite_border", color: "var(--cms-danger)", label: "Readonly" });',
      '_.Rating({ value: 2, max: 5, disabled: true, checkedIcon: "grade", uncheckedIcon: "grade", colorInactive: "rgba(15, 23, 42, 0.18)", label: "Disabled" });'
    ]
  },
  customSlot: {
    code: [
      _.Rating({
        value: 4.5,
        max: 5,
        half: true,
        size: 18,
        gap: 8,
        colorSelected: "var(--cms-danger)",
        colorHalf: "var(--cms-warning)",
        colorHovered: "var(--cms-primary)",
        colorInactive: "rgba(15, 23, 42, 0.24)",
        label: "Custom star slot",
        slots: {
          star: ({ index, state }) => _.span(
            {
              style: {
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                minWidth: "34px"
              }
            },
            _.Icon({
              name: state === "half" ? "star_half" : state === "empty" ? "star_border" : "star",
              size: 18
            }),
            _.span({
              style: {
                fontSize: "10px",
                fontWeight: "700",
                opacity: state === "empty" ? "0.55" : "1"
              }
            }, String(index))
          )
        }
      })
    ],
    sample: [
      "_.Rating({",
      "  value: 4.5,",
      "  max: 5,",
      "  half: true,",
      "  size: 18,",
      "  gap: 8,",
      '  colorSelected: "var(--cms-danger)",',
      '  colorHalf: "var(--cms-warning)",',
      '  colorHovered: "var(--cms-primary)",',
      '  colorInactive: "rgba(15, 23, 42, 0.24)",',
      '  label: "Custom star slot",',
      "  slots: {",
      "    star: ({ index, state }) => _.span(",
      "      { style: { display: \"inline-flex\", flexDirection: \"column\", alignItems: \"center\", gap: \"2px\", minWidth: \"34px\" } },",
      "      _.Icon({ name: state === \"half\" ? \"star_half\" : state === \"empty\" ? \"star_border\" : \"star\", size: 18 }),",
      "      _.span({ style: { fontSize: \"10px\", fontWeight: \"700\", opacity: state === \"empty\" ? \"0.55\" : \"1\" } }, String(index))",
      "    )",
      "  }",
      "});"
    ]
  }
};

const rating = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Rating"),
    api: () => _.docTable("Rating")
  }),
  _.h2("Esempi"),
  boxCode("Basic", listSample.basic),
  boxCode("Max + size", listSample.maxAndSize),
  boxCode("Half + clearable", listSample.halfClearable),
  boxCode("Readonly + disabled", listSample.readonly),
  boxCode("Custom star slot", listSample.customSlot),
  _.h2("Card demo completa"),
  _.Card({ header: "Review composer" },
    _.p("Una demo completa con model reattivo, half rating, preset rapidi, eventi e una seconda vista readonly sincronizzata."),
    infoLine("Score", () => `${formatRating(demoValue.value)}/5`),
    infoLine("Stato", () => describeRating(demoValue.value)),
    infoLine("Hover", () => demoHover.value),
    infoLine("Last input", () => demoLastInput.value),
    infoLine("Last change", () => demoLastChange.value),
    _.div({
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginBottom: "14px"
      }
    },
      _.Btn({ onClick: () => { demoValue.value = 0; } }, "Reset"),
      _.Btn({ onClick: () => { demoValue.value = 2.5; } }, "Set 2.5"),
      _.Btn({ onClick: () => { demoValue.value = 4; } }, "Set 4"),
      _.Btn({ onClick: () => { demoValue.value = 5; } }, "Set 5")
    ),
    _.Rating({
      model: demoValue,
      max: 5,
      half: true,
      clearable: true,
      size: 24,
      gap: 8,
      colorSelected: "var(--cms-warning)",
      colorHalf: "var(--cms-info)",
      colorHovered: "var(--cms-primary)",
      colorInactive: "rgba(15, 23, 42, 0.22)",
      label: _.span(() => `Product experience ${formatRating(demoValue.value)}/5`),
      onHover: (value) => {
        demoHover.value = value > 0 ? `${formatRating(value)}/5` : "nessun hover";
      },
      onInput: (value) => {
        demoLastInput.value = `${formatRating(value)}/5`;
      },
      onChange: (value) => {
        demoLastChange.value = `${formatRating(value)}/5`;
      },
      slots: {
        star: ({ index, state }) => _.span(
          {
            style: {
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "3px",
              minWidth: "42px"
            }
          },
          _.Icon({
            name: state === "half" ? "star_half" : state === "empty" ? "star_border" : "star",
            size: 24
          }),
          _.span({
            style: {
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              opacity: state === "empty" ? "0.55" : "1"
            }
          }, ["bad", "ok", "good", "great", "wow"][index - 1] || String(index))
        )
      }
    }),
    _.div({ class: "cms-m-t-md" },
      _.b("Readonly mirror"),
      _.div({ style: { marginTop: "8px" } },
        _.Rating({
          model: demoValue,
          max: 5,
          half: true,
          readonly: true,
          checkedIcon: "favorite",
          uncheckedIcon: "favorite_border",
          color: "var(--cms-danger)"
        })
      )
    )
  )
);

export { rating };
