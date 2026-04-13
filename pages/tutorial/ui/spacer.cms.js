import { getComponentDoc } from "../docs/catalog.js";

const spacer = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Spacer"),
    api: () => _.docTable("Spacer")
  })
);

export { spacer };
