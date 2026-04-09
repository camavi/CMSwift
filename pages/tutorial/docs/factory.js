import descriptions from "../descriptions.js";

const COMMON_META_PROPS = new Set([
  "children", "class", "style", "size", "color", "outline", "dense", "disabled",
  "clickable", "shadow", "padding", "margin", "width", "minWidth", "maxWidth",
  "height", "minHeight", "maxHeight", "radius", "borderRadius"
]);

const resolveMeta = (name) => window._?.meta?.[name] || window.CMSwift?.ui?.meta?.[name] || null;

const resolveDescription = (name) => {
  const desc = descriptions[`_.${name}`];
  if (desc) return desc;
  return {
    title: name,
    description: `${name} component reference.`
  };
};

const toSentence = (value, fallback = "") => {
  if (value == null || value === false) return fallback;
  return String(value).trim() || fallback;
};

const normalizeMetaProp = (name, value) => {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return {
      name,
      description: value.description || `Configurazione di \`${name}\`.`
    };
  }
  return {
    name,
    description: typeof value === "string" ? value : `Configurazione di \`${name}\`.`
  };
};

const deriveEssentialProps = (name) => {
  const meta = resolveMeta(name);
  if (!meta?.props) return [];
  return Object.entries(meta.props)
    .filter(([key]) => !COMMON_META_PROPS.has(key))
    .slice(0, 5)
    .map(([key, value]) => normalizeMetaProp(key, value));
};

const deriveTags = (name, description) => {
  const tags = new Set([String(name).toLowerCase()]);
  const text = String(description || "").toLowerCase();
  if (text.includes("layout") || text.includes("grid")) tags.add("layout");
  if (text.includes("overlay") || text.includes("dialog") || text.includes("popover")) tags.add("overlay");
  if (text.includes("form") || text.includes("input") || text.includes("select")) tags.add("form");
  if (text.includes("table") || text.includes("dati")) tags.add("data");
  if (text.includes("feedback") || text.includes("loading") || text.includes("toast")) tags.add("feedback");
  return Array.from(tags).slice(0, 4);
};

const buildBaseDoc = (name) => {
  const source = resolveDescription(name);
  const summary = toSentence(source.description, `${name} component reference.`);
  const essentialProps = deriveEssentialProps(name);
  return {
    name,
    title: source.title || name,
    status: "stable",
    tags: deriveTags(name, summary),
    summary,
    signature: window._?.meta?.[name]?.signature ? String(window._.meta[name].signature).replaceAll("UI.", "_.") : `_.${name}(props?, ...children)`,
    quickFacts: [
      {
        label: "Best for",
        value: `Usa ${source.title || name} quando vuoi restare dentro il contratto UI standard di CMSwift invece di ricostruire markup e comportamento a mano.`
      },
      {
        label: "Read this page for",
        value: "overview del pattern, leve piu importanti e accesso rapido alla Full API."
      },
      {
        label: "Mental model",
        value: summary
      }
    ],
    useWhen: [
      {
        title: `Vuoi usare ${source.title || name} in modo coerente`,
        text: summary
      },
      {
        title: "Ti serve una reference umana prima della tabella raw",
        text: "Parti da overview, examples e props essenziali; entra in Full API solo quando stai cercando il dettaglio tecnico."
      }
    ],
    avoidWhen: [
      {
        title: "Stai cercando un pattern diverso",
        text: "Se il componente non risolve davvero il problema UX, meglio scegliere un pattern piu adatto invece di forzarlo."
      }
    ],
    essentialProps: essentialProps.length
      ? essentialProps
      : [
        {
          name: "Full API",
          description: "Per questo componente la tab `Full API` resta la fonte tecnica completa."
        }
      ],
    anatomy: [
      {
        title: "Contratto componente",
        text: "Il componente espone un set stabile di props/slots e la tab Full API resta la fonte tecnica completa."
      }
    ],
    patterns: [
      {
        title: "Parti dagli esempi reali del tutorial",
        text: "La combinazione piu utile resta overview editoriale sopra e snippet completi subito sotto.",
        tags: ["tutorial"]
      }
    ],
    accessibility: [
      {
        title: "Non rompere il contratto base",
        text: "Quando personalizzi copy, slots o struttura, mantieni semantica e affordance leggibili."
      }
    ],
    gotchas: [
      {
        title: "Non usare la Full API come primo passo",
        text: "Usala dopo overview e examples, non come unico punto di ingresso umano."
      }
    ]
  };
};

const mergeDoc = (base, overrides = {}) => ({
  ...base,
  ...overrides,
  quickFacts: overrides.quickFacts || base.quickFacts,
  useWhen: overrides.useWhen || base.useWhen,
  avoidWhen: overrides.avoidWhen || base.avoidWhen,
  essentialProps: overrides.essentialProps || base.essentialProps,
  anatomy: overrides.anatomy || base.anatomy,
  slots: overrides.slots || base.slots,
  patterns: overrides.patterns || base.patterns,
  accessibility: overrides.accessibility || base.accessibility,
  gotchas: overrides.gotchas || base.gotchas
});

const defineComponentDoc = (name, overrides = {}) => mergeDoc(buildBaseDoc(name), overrides);

export { defineComponentDoc };
