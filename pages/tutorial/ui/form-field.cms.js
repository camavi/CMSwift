import { getComponentDoc } from "../docs/catalog.js";

const formField = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("FormField"),
    api: () => _.docTable("FormField")
  })
);

export { formField };
