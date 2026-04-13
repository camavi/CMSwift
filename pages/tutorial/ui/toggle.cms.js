import { getComponentDoc } from "../docs/catalog.js";
const renderToggle = (options, label) => {
  if (label == null) return _.Toggle(options);
  if (!Object.keys(options).length) return _.Toggle(label);
  return _.Toggle(options, label);
};

const renderSample = (options, label) => {
  if (label == null) return `_.Toggle(${serializeOptions(options)});`;
  if (!Object.keys(options).length) return `_.Toggle("${label}");`;
  return `_.Toggle(${serializeOptions(options)}, "${label}");`;
};

const createSection = (entries) => ({
  code: entries.map(({ options = {}, label }) => renderToggle(options, label)),
  sample: entries.map(({ options = {}, label }) => renderSample(options, label))
});

const row = (...children) => _.div({
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    alignItems: "center"
  }
}, ...children);

const infoLine = (label, getter) => _.div({ class: "cms-m-b-sm" }, _.b(`${label}: `), _.span(getter));
const formatValue = (value) => value == null ? "null" : String(value);

const modelMarketing = _.rod(true);
const modelAutomation = _.rod(false);
const modelReview = _.rod(null);
const modelLastChange = _.rod("nessun change");

const radioChannel = _.rod("email");

const cardAutoPublish = _.rod(true);
const cardAlerts = _.rod(true);
const cardMaintenance = _.rod(null);
const cardApproval = _.rod("slack");
const cardLastChange = _.rod("nessun change");
const cardLastInput = _.rod("nessun input");

const setTextSignal = (signal, prefix, field) => (value) => {
  signal.value = `${prefix}: ${field} = ${formatValue(value)}`;
};

const listSample = {
  basic: createSection([
    { label: "Default on", options: { checked: true } },
    { label: "Success", options: { color: "success", checked: true } },
    { label: "Warning", options: { color: "warning", checked: true } },
    { label: "Danger", options: { color: "danger", checked: true } },
    { label: "Info", options: { color: "info", checked: true } },
    { label: "Primary", options: { color: "primary", checked: true } },
    { label: "Secondary", options: { color: "secondary", checked: true } }
  ]),
  size: createSection([
    { label: "xxs", options: { color: "success", size: "xxs", checked: true } },
    { label: "xs", options: { color: "success", size: "xs", checked: true } },
    { label: "sm", options: { color: "warning", size: "sm", checked: true } },
    { label: "md", options: { color: "danger", size: "md", checked: true } },
    { label: "lg", options: { color: "info", size: "lg", checked: true } },
    { label: "xl", options: { color: "primary", size: "xl", checked: true } },
    { label: "xxl", options: { color: "secondary", size: "xxl", checked: true } }
  ]),
  icons: createSection([
    { label: "Checked icon", options: { color: "success", checked: true, icon: "done" } },
    { label: "Unchecked icon", options: { color: "danger", uncheckedIcon: "close" } },
    { label: "On / Off", options: { color: "primary", checked: true, checkedIcon: "lock", uncheckedIcon: "lock_open" } },
    { label: "Standby", options: { color: "warning", checked: null, standbyIcon: "pause" } },
    { label: "Custom pair", options: { color: "secondary", checked: true, checkedIcon: "visibility", uncheckedIcon: "visibility_off" } }
  ]),
  denseDisabled: createSection([
    { label: "Dense on", options: { dense: true, checked: true } },
    { label: "Dense primary", options: { dense: true, color: "primary" } },
    { label: "Disabled on", options: { color: "secondary", checked: true, disabled: true } },
    { label: "Disabled off", options: { color: "secondary", disabled: true } }
  ]),
  model: {
    code: [
      infoLine("Stato", () => `marketing=${formatValue(modelMarketing.value)}, automation=${formatValue(modelAutomation.value)}, review=${formatValue(modelReview.value)}`),
      infoLine("Ultimo change", () => modelLastChange.value),
      _.Toggle({
        color: "primary",
        model: modelMarketing,
        onChange: setTextSignal(modelLastChange, "change", "marketing")
      }, "Marketing sync"),
      _.Toggle({
        color: "success",
        model: modelAutomation,
        icon: "bolt",
        onChange: setTextSignal(modelLastChange, "change", "automation")
      }, "Auto publish"),
      _.Toggle({
        color: "warning",
        model: modelReview,
        standbyIcon: "hourglass_top",
        onChange: setTextSignal(modelLastChange, "change", "review")
      }, "Review required")
    ],
    sample: [
      "const modelMarketing = _.rod(true);",
      "const modelAutomation = _.rod(false);",
      "const modelReview = _.rod(null);",
      '_.Toggle({ color: "primary", model: modelMarketing }, "Marketing sync");',
      '_.Toggle({ color: "success", model: modelAutomation, icon: "bolt" }, "Auto publish");',
      '_.Toggle({ color: "warning", model: modelReview, standbyIcon: "hourglass_top" }, "Review required");'
    ]
  },
  radioBehavior: {
    code: [
      infoLine("Canale attivo", () => radioChannel.value || "nessuno"),
      _.Toggle({ behavior: "radio", name: "demo-channel", value: "email", model: radioChannel, color: "primary" }, "Email"),
      _.Toggle({ behavior: "radio", name: "demo-channel", value: "slack", model: radioChannel, color: "success" }, "Slack"),
      _.Toggle({ behavior: "radio", name: "demo-channel", value: "push", model: radioChannel, color: "warning" }, "Push")
    ],
    sample: [
      'const radioChannel = _.rod("email");',
      '_.Toggle({ behavior: "radio", name: "demo-channel", value: "email", model: radioChannel, color: "primary" }, "Email");',
      '_.Toggle({ behavior: "radio", name: "demo-channel", value: "slack", model: radioChannel, color: "success" }, "Slack");',
      '_.Toggle({ behavior: "radio", name: "demo-channel", value: "push", model: radioChannel, color: "warning" }, "Push");'
    ]
  }
};

const toggle = _.div({ class: "cms-panel cms-page" },
  _.ComponentDocs({
    doc: getComponentDoc("Toggle"),
    api: () => _.docTable("Toggle")
  }),
  _.h2("Esempi"),
  boxCode("Basic color", listSample.basic),
  boxCode("Size", listSample.size),
  boxCode("Icons + standby", listSample.icons),
  boxCode("Dense + disabled", listSample.denseDisabled),
  boxCode("Model + change", listSample.model),
  boxCode("Radio behavior", listSample.radioBehavior),
  _.h2("Card demo completa"),
  _.Card({ header: "Release flow settings" },
    _.p("Un esempio completo con toggle checkbox, stato standby, gruppo radio e tracking degli eventi."),
    row(
      _.Toggle({
        color: "primary",
        model: cardAutoPublish,
        icon: "rocket_launch",
        onChange: setTextSignal(cardLastChange, "change", "autoPublish"),
        onInput: setTextSignal(cardLastInput, "input", "autoPublish")
      }, "Auto publish"),
      _.Toggle({
        color: "success",
        dense: true,
        model: cardAlerts,
        checkedIcon: "notifications_active",
        uncheckedIcon: "notifications_off",
        onChange: setTextSignal(cardLastChange, "change", "alerts"),
        onInput: setTextSignal(cardLastInput, "input", "alerts")
      }, "Slack alerts"),
      _.Toggle({
        color: "warning",
        model: cardMaintenance,
        standbyIcon: "pause_circle",
        onChange: setTextSignal(cardLastChange, "change", "maintenance"),
        onInput: setTextSignal(cardLastInput, "input", "maintenance")
      }, "Maintenance mode")
    ),
    _.div({ class: "cms-m-t-md cms-m-b-sm" }, _.b("Approval channel")),
    row(
      _.Toggle({
        behavior: "radio",
        name: "card-approval",
        value: "email",
        model: cardApproval,
        color: "primary",
        onChange: setTextSignal(cardLastChange, "change", "approval"),
        onInput: setTextSignal(cardLastInput, "input", "approval")
      }, "Email"),
      _.Toggle({
        behavior: "radio",
        name: "card-approval",
        value: "slack",
        model: cardApproval,
        color: "success",
        onChange: setTextSignal(cardLastChange, "change", "approval"),
        onInput: setTextSignal(cardLastInput, "input", "approval")
      }, "Slack"),
      _.Toggle({
        behavior: "radio",
        name: "card-approval",
        value: "push",
        model: cardApproval,
        color: "secondary",
        onChange: setTextSignal(cardLastChange, "change", "approval"),
        onInput: setTextSignal(cardLastInput, "input", "approval")
      }, "Push")
    ),
    _.div({ class: "cms-m-t-md" },
      infoLine("Summary", () => `autoPublish=${formatValue(cardAutoPublish.value)}, alerts=${formatValue(cardAlerts.value)}, maintenance=${formatValue(cardMaintenance.value)}, approval=${formatValue(cardApproval.value)}`),
      infoLine("Last change", () => cardLastChange.value),
      infoLine("Last input", () => cardLastInput.value)
    )
  )
);

export { toggle };
