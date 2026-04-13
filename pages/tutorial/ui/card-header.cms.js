import { getComponentDoc } from "./docs/catalog.js";

const cardHeader = _.div({ class: "cms-panel cms-page" },

  _.ComponentDocs({
    doc: getComponentDoc("cardHeader"),
    api: () => _.docTable("cardHeader")
  })
);

export { cardHeader };
