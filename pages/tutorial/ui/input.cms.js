import { getComponentDoc } from "../docs/catalog.js";

const input = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Input"),
    api: () => _.docTable("Input")
  }),
  _.h2("Esempio completo"),
  _.Card({ header: "Demo" },
    _.Input({ label: "Nome", placeholder: "Inserisci nome", hint: "Helper text", icon: "home", prefix: "home" }),
    _.Input({ label: "Nome", color: "primary", placeholder: "Inserisci nome", hint: "Helper text", icon: "#home", prefix: "home", iconRight: "#home", suffix: "home" }),
    _.Input({ label: "Nome", color: "secondary", placeholder: "Inserisci nome", hint: "Helper text", icon: "#home", prefix: "home", iconRight: "#home", suffix: "home" }),
    _.Input({ label: "Nome", color: "danger", placeholder: "Inserisci nome", hint: "Helper text", icon: "#home", prefix: "home", iconRight: "#home", suffix: "home" }),
    _.Input({ label: "Nome", color: "warning", placeholder: "Inserisci nome", hint: "Helper text", icon: "#home", prefix: "home", iconRight: "#home", suffix: "home" }),
    _.Input({ label: "Nome", color: "info", placeholder: "Inserisci nome", hint: "Helper text", icon: "#home", prefix: "home", iconRight: "#home", suffix: "home" }),
    _.Input({ label: "Nome", color: "success", placeholder: "Inserisci nome", hint: "Helper text", icon: "#home", prefix: "home", iconRight: "#home", suffix: "home" }),
    _.Input({ label: "Nome", color: "dark", lightShadow: true, placeholder: "Inserisci nome", hint: "Helper text", icon: "#home", prefix: "home", iconRight: "#home", suffix: "home" }),
    _.Input({ label: "Nome", color: "light", lightShadow: true, placeholder: "Inserisci nome", hint: "Helper text", icon: "#home", prefix: "home", iconRight: "#home", suffix: "home" }),
    _.Input({ label: "Nome", color: "primary" })
  ),

);

export { input };
