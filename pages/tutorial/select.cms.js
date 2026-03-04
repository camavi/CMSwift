import { icon } from "./icon.cms";
const options = [
  { label: "Draft chanel", value: "draft" },
  { label: "Live chanel", value: "live" },
  { label: "Archived chanel", value: "archived" }
];
const val = _rod("live");
const select = _h.div({ class: "cms-panel cms-page" },
  _h.h1("Select"),
  _h.p("Select custom con UI.FormField: gruppi, filtro, async options, multi-select e valori custom. Include tastiera, clearable e slot per opzioni/empty/loading."),
  _h.h2("Props principali"),
  _ui.List(
    _ui.Item("size: dimensione del componente (xs-sm-md-lg-xl)"),
    _ui.Item("state: success, warning, danger, info, primary, secondary"),
    _ui.Item("outline, shadow, borderRadius, clickable per stile e interazione")
  ),
  _h.h2("Documentazione API"),
  CMSwift.ui.DocTable("Select"),
  _h.h2("Esempio completo"),
  _ui.Card({ header: "Demo" },
    _ui.Select({ label: "Stato", icon: "home", color: "primary", prefix: "Home", suffix: "Home", options: options, value: val })
  ),
  _h.div(() => options.filter((o) => o.value === val.value)[0].label),
  _h.input({ type: "text", value: val }),
  _h.input({ type: "text", value: val })
);
setTimeout(() => val.value = "archived", 3000);
export { select };
