import { getComponentDoc } from "./docs/catalog.js";

const cardBody = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("cardBody"),
    api: () => _.docTable("cardBody")
  })
);

export { cardBody };
