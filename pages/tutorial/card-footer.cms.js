import { getComponentDoc } from "./docs/catalog.js";

const cardFooter = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("cardFooter"),
    api: () => _.docTable("cardFooter")
  })
);

export { cardFooter };
