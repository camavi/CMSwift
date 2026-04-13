import { getComponentDoc } from "../docs/catalog.js";

const separator = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Separator"),
    api: () => _.docTable("Separator")
  })
);

export { separator };
