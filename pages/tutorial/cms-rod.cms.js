const infoLine = (label, getter) => _.div({ class: "cms-m-b-xs" }, _.b(`${label}: `), _.span(getter));
const toJson = (value) => JSON.stringify(value);
const readSelectedValues = (selectEl) => Array.from(selectEl?.options || selectEl?.children || [])
  .filter((option) => option && option.selected)
  .map((option) => option.value);

const actionRow = (...children) => _.div({
  style: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }
}, ...children);

const stack = (...children) => _.div({
  style: {
    display: "grid",
    gap: "12px"
  }
}, ...children);

const cmsRod = _.component((props, ctx) => {
  const titleRod = _.rod("Inventory sync");
  const countRod = _.rod(3);
  const actionHitsRod = _.rod(0);
  const lastActionRod = _.rod("none");

  const classRod = _.rod(["cms-btn", "color-primary"]);
  const attrRod = _.rod("ready");
  const textRod = _.rod("rodBind active");

  const modelRod = _.rod("ops");
  const textareaRod = _.rod("Inventory note\nSecond row");
  const multiValueRod = _.rod(["sales", "finance"]);
  const checkedRod = _.rod(true);
  const optionOpsRod = _.rod(true);
  const optionSalesRod = _.rod(false);
  const optionFinanceRod = _.rod(true);

  const [getQty, setQty] = _.signal(5);
  const bridgeRod = _.rodFromSignal(getQty, setQty);

  countRod.action((value) => {
    actionHitsRod.value = actionHitsRod.value + 1;
    lastActionRod.value = `count=${value}`;
  });

  const textProbe = _.Chip({ color: "info" }, "rodBind active");
  const classProbe = _.Btn({ outline: true }, "class probe");
  const attrProbe = _.Chip({ outline: true }, "attr probe");

  const unbindText = _.rodBind(textProbe, textRod, { key: "textContent" });
  const unbindClass = _.rodBind(classProbe, classRod, { key: "class" });
  const unbindAttr = _.rodBind(attrProbe, attrRod, { key: "attr:data-state" });

  const modelInput = _.input({ class: "cms-input-raw", type: "text", placeholder: "rodModel -> input", style: { width: "100%" } });
  const modelSelect = _.select({ class: "cms-input-raw", style: { width: "100%" } },
    _.option({ value: "ops" }, "Operations"),
    _.option({ value: "sales" }, "Sales"),
    _.option({ value: "finance" }, "Finance")
  );
  const multiValueSelect = _.select({
    class: "cms-input-raw",
    multiple: true,
    size: 4,
    style: { width: "100%", minHeight: "124px" },
    value: multiValueRod
  },
    _.option({ value: "ops" }, "Operations"),
    _.option({ value: "sales" }, "Sales"),
    _.option({ value: "finance" }, "Finance"),
    _.option({ value: "support" }, "Support")
  );
  const optionSelectedSelect = _.select({
    class: "cms-input-raw",
    multiple: true,
    size: 4,
    style: { width: "100%", minHeight: "124px" }
  },
    _.option({ value: "ops", selected: optionOpsRod }, "Operations"),
    _.option({ value: "sales", selected: optionSalesRod }, "Sales"),
    _.option({ value: "finance", selected: optionFinanceRod }, "Finance"),
    _.option({ value: "support" }, "Support")
  );
  const checkedInput = _.input({
    type: "checkbox",
    checked: checkedRod
  });
  const textareaInput = _.textarea({
    class: "cms-input-raw",
    rows: 4,
    style: { width: "100%" },
    value: textareaRod
  });
  const disposeModelInput = _.rodModel(modelInput, modelRod, { event: "input" });
  const disposeModelSelect = _.rodModel(modelSelect, modelRod, { event: "change" });

  const bridgeInput = _.input({ class: "cms-input-raw", type: "number", style: { width: "100%" } });
  const disposeBridgeInput = _.rodModel(bridgeInput, bridgeRod, {
    event: "input",
    parse: (value) => value === "" ? 0 : Number(value),
    format: (value) => String(value ?? 0)
  });

  ctx.onDispose(() => {
    unbindText();
    unbindClass();
    unbindAttr();
    disposeModelInput();
    disposeModelSelect();
    disposeBridgeInput();
    bridgeRod.dispose?.();
  });

  const listSample = {
    basic: {
      code: [
        _.Card({ title: "Rod base", subtitle: "Value diretto, action e rendering semplice" },
          stack(
            actionRow(
              _.Btn({ size: "sm", outline: true, onClick: () => { countRod.value -= 1; } }, "count -"),
              _.Btn({ size: "sm", onClick: () => { countRod.value += 1; } }, "count +"),
              _.Btn({ size: "sm", outline: true, onClick: () => { titleRod.value = "Inventory sync"; } }, "title default"),
              _.Btn({ size: "sm", onClick: () => { titleRod.value = "Manual override"; } }, "title override")
            ),
            infoLine("titleRod.value", () => titleRod.value),
            infoLine("countRod.value", () => String(countRod.value)),
            infoLine("action hits", () => String(actionHitsRod.value)),
            infoLine("last action", () => lastActionRod.value),
            _.div({ class: "cms-muted" }, () => `Inline rod render: ${titleRod.value} / ${countRod.value}`)
          )
        )
      ],
      sample: [
        'const titleRod = _.rod("Inventory sync");',
        'const countRod = _.rod(3);',
        'countRod.action((value) => {',
        '  console.log("changed", value);',
        '});',
        '_.div(() => `${titleRod.value} / ${countRod.value}`);'
      ]
    },
    bind: {
      code: [
        _.Card({ title: "rodBind", subtitle: "Binding diretto su nodi DOM reali" },
          stack(
            actionRow(
              _.Btn({ size: "sm", outline: true, onClick: () => { textRod.value = "rodBind active"; } }, "text default"),
              _.Btn({ size: "sm", onClick: () => { textRod.value = "status updated"; } }, "text update"),
              _.Btn({ size: "sm", outline: true, onClick: () => { classRod.value = ["cms-btn", "color-primary"]; } }, "class primary"),
              _.Btn({ size: "sm", onClick: () => { classRod.value = ["cms-btn", "color-success", "dense"]; } }, "class success"),
              _.Btn({ size: "sm", outline: true, onClick: () => { attrRod.value = "ready"; } }, "attr ready"),
              _.Btn({ size: "sm", onClick: () => { attrRod.value = null; } }, "attr remove")
            ),
            textProbe,
            classProbe,
            attrProbe,
            infoLine("text rod", () => textRod.value),
            infoLine("class attr", () => classProbe.getAttribute("class") || "absent"),
            infoLine("data-state", () => attrProbe.getAttribute("data-state") || "absent")
          )
        )
      ],
      sample: [
        'const textProbe = _.div();',
        'const textRod = _.rod("rodBind active");',
        '_.rodBind(textProbe, textRod, { key: "textContent" });',
        '_.rodBind(classProbe, classRod, { key: "class" });',
        '_.rodBind(attrProbe, attrRod, { key: "attr:data-state" });'
      ]
    },
    model: {
      code: [
        _.Card({ title: "rodModel", subtitle: "Two-way binding su input e select" },
          stack(
            modelInput,
            modelSelect,
            actionRow(
              _.Btn({ size: "sm", outline: true, onClick: () => { modelRod.value = "ops"; } }, "ops"),
              _.Btn({ size: "sm", onClick: () => { modelRod.value = "sales"; } }, "sales"),
              _.Btn({ size: "sm", color: "warning", onClick: () => { modelRod.value = "finance"; } }, "finance")
            ),
            infoLine("modelRod.value", () => modelRod.value)
          )
        )
      ],
      sample: [
        'const modelRod = _.rod("ops");',
        'const inputEl = _.input({ class: "cms-input-raw" });',
        'const selectEl = _.select({}, ...options);',
        '_.rodModel(inputEl, modelRod, { event: "input" });',
        '_.rodModel(selectEl, modelRod, { event: "change" });'
      ]
    },
    bridge: {
      code: [
        _.Card({ title: "rodFromSignal", subtitle: "Bridge signal <-> rod" },
          stack(
            bridgeInput,
            actionRow(
              _.Btn({ size: "sm", outline: true, onClick: () => { setQty(getQty() - 1); } }, "signal -"),
              _.Btn({ size: "sm", outline: true, onClick: () => { setQty(getQty() + 1); } }, "signal +"),
              _.Btn({ size: "sm", outline: true, onClick: () => { bridgeRod.value = Number(bridgeRod.value ?? 0) - 1; } }, "rod -"),
              _.Btn({ size: "sm", outline: true, onClick: () => { bridgeRod.value = Number(bridgeRod.value ?? 0) + 1; } }, "rod +")
            ),
            infoLine("signal getter", () => String(getQty())),
            infoLine("bridgeRod.value", () => String(bridgeRod.value))
          )
        )
      ],
      sample: [
        'const [getQty, setQty] = _.signal(5);',
        'const bridgeRod = _.rodFromSignal(getQty, setQty);',
        '_.rodModel(inputEl, bridgeRod, {',
        '  event: "input",',
        '  parse: (value) => Number(value)',
        '});'
      ]
    },
    renderer: {
      code: [
        _.Card({ title: "Renderer + rod su form controls", subtitle: "value: rod su select[multiple] e selected: rod su option" },
          stack(
            _.div({ class: "cms-muted" }, "Test manuale: usa Cmd/Ctrl + click per cambiare piu opzioni nel select multiplo e verifica che DOM e rod restino allineati."),
            _.h4("checked: rod -> checkbox"),
            _.label({ class: "cms-flex-inline cms-gap-sm cms-align-center" },
              checkedInput,
              _.span("Inventory lock")
            ),
            actionRow(
              _.Btn({ size: "sm", outline: true, onClick: () => { checkedRod.value = !checkedRod.value; } }, "toggle checked"),
              _.Btn({ size: "sm", onClick: () => { checkedRod.value = true; } }, "checked true"),
              _.Btn({ size: "sm", color: "warning", onClick: () => { checkedRod.value = false; } }, "checked false")
            ),
            infoLine("checked rod", () => String(checkedRod.value)),
            infoLine("checked DOM", () => String(!!checkedInput.checked)),
            _.h4("value: rod -> textarea"),
            textareaInput,
            actionRow(
              _.Btn({ size: "sm", outline: true, onClick: () => { textareaRod.value = "Inventory note\nSecond row"; } }, "textarea default"),
              _.Btn({ size: "sm", onClick: () => { textareaRod.value = "Manual override\nPriority: high"; } }, "textarea override"),
              _.Btn({ size: "sm", color: "warning", onClick: () => { textareaRod.value = ""; } }, "textarea clear")
            ),
            infoLine("textarea rod", () => toJson(textareaRod.value)),
            infoLine("textarea DOM", () => toJson(textareaInput.value)),
            _.h4("value: rod -> select[multiple]"),
            multiValueSelect,
            actionRow(
              _.Btn({ size: "sm", outline: true, onClick: () => { multiValueRod.value = ["sales", "finance"]; } }, "preset sales+finance"),
              _.Btn({ size: "sm", onClick: () => { multiValueRod.value = ["ops", "support"]; } }, "preset ops+support"),
              _.Btn({ size: "sm", color: "warning", onClick: () => { multiValueRod.value = []; } }, "clear")
            ),
            infoLine("value rod array", () => toJson(multiValueRod.value)),
            infoLine("value DOM selected", () => toJson(readSelectedValues(multiValueSelect))),
            _.h4("selected: rod -> option"),
            optionSelectedSelect,
            actionRow(
              _.Btn({ size: "sm", outline: true, onClick: () => { optionOpsRod.value = !optionOpsRod.value; } }, "toggle ops"),
              _.Btn({ size: "sm", outline: true, onClick: () => { optionSalesRod.value = !optionSalesRod.value; } }, "toggle sales"),
              _.Btn({ size: "sm", outline: true, onClick: () => { optionFinanceRod.value = !optionFinanceRod.value; } }, "toggle finance"),
              _.Btn({ size: "sm", onClick: () => {
                optionOpsRod.value = true;
                optionSalesRod.value = false;
                optionFinanceRod.value = true;
              } }, "preset rods"),
              _.Btn({ size: "sm", color: "warning", onClick: () => {
                optionOpsRod.value = false;
                optionSalesRod.value = false;
                optionFinanceRod.value = false;
              } }, "clear rods")
            ),
            infoLine("selected rods", () => toJson({
              ops: optionOpsRod.value,
              sales: optionSalesRod.value,
              finance: optionFinanceRod.value
            })),
            infoLine("selected DOM", () => toJson(readSelectedValues(optionSelectedSelect))),
            _.Chip({ color: "success", outline: true }, () => readSelectedValues(multiValueSelect).join(", ") === multiValueRod.value.join(", ")
              ? "select[multiple] iniziale e runtime allineati"
              : "controllare sincronizzazione select[multiple]")
          )
        )
      ],
      sample: [
        'const multiValueRod = _.rod(["sales", "finance"]);',
        'const checkedRod = _.rod(true);',
        'const textareaRod = _.rod("Inventory note");',
        '_.input({ type: "checkbox", checked: checkedRod });',
        '_.textarea({ value: textareaRod });',
        'const multiSelect = _.select({',
        '  multiple: true,',
        '  value: multiValueRod',
        '},',
        '  _.option({ value: "ops" }, "Operations"),',
        '  _.option({ value: "sales" }, "Sales")',
        ');',
        'const optionOpsRod = _.rod(true);',
        '_.option({ value: "ops", selected: optionOpsRod }, "Operations");'
      ]
    }
  };

  return _.div({ class: "cms-panel cms-page" },
    _.h1("CMS Rod"),
    _.p("Tutorial del blocco `rod`. Qui usiamo `_.rod`, `_.rodBind`, `_.rodModel`, `_.rodFromSignal` e anche i binding diretti del renderer su `value`, `checked` e `selected` per verificare il comportamento del bridge rispetto al core reattivo."),
    _.h2("API disponibili"),
    _.List(
      _.Item("`_.rod(initial)` -> contenitore reattivo con `.value`, `.action()`, `.dispose()`"),
      _.Item("`_.rodBind(el, rod, { key })` -> binding diretto su un nodo DOM"),
      _.Item("`_.rodModel(el, rod, opts)` -> two-way model per input/select"),
      _.Item("`_.rodFromSignal(get, set)` -> bridge tra signal e rod"),
      _.Item("`value: rod` -> binding diretto su input, textarea, select e select[multiple]"),
      _.Item("`checked: rod` -> binding diretto su checkbox input"),
      _.Item("`selected: rod` -> binding diretto su option")
    ),
    _.h2("Esempi"),
    boxCode("Rod base", listSample.basic, 24),
    boxCode("rodBind", listSample.bind, 24),
    boxCode("rodModel", listSample.model, 24),
    boxCode("rodFromSignal", listSample.bridge, 24),
    boxCode("Renderer + rod", listSample.renderer, 24)
  );
});

export { cmsRod };
