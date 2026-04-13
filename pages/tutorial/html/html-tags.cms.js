import {
  DEFAULT_HTML_TUTORIAL_LANGUAGE,
  getHtmlDictionary,
} from "./html-dictionary.js";
import {
  getHtmlTagMeta,
  getHtmlTagNavigation,
} from "./html-structure.js";

const stack = (...children) =>
  _.div(
    {
      style: {
        display: "grid",
        gap: "var(--cms-s-md)",
      },
    },
    ...children,
  );

const grid = (...children) =>
  _.div(
    {
      style: {
        display: "grid",
        gap: "var(--cms-s-md)",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      },
    },
    ...children,
  );

const codeBlock = (lines) =>
  _.pre(
    {
      style: {
        margin: 0,
        overflowX: "auto",
      },
    },
    _.code({ class: "language-javascript" }, lines.join("\n")),
  );

const helperLink = (tag) =>
  _.Chip(
    {
      outline: true,
      clickable: true,
      onClick: () => CMSwift.router.navigate(`/demo/html/${tag}`),
    },
    `_.${tag}`,
  );

const navButton = (tag, label) =>
  tag
    ? _.Btn(
        {
          outline: true,
          onClick: () => CMSwift.router.navigate(`/demo/html/${tag}`),
        },
        `${label}: _.${tag}`,
      )
    : null;

const getTagFromContext = (ctx) => {
  const last = String(ctx?.path || "/demo/html/html")
    .split("/")
    .filter(Boolean)
    .pop();
  return last || "html";
};

function htmlTagPage(ctx = {}) {
  const language =
    window.CMSwift_htmlTutorialLanguage || DEFAULT_HTML_TUTORIAL_LANGUAGE;
  const dictionary = getHtmlDictionary(language);
  const tag = getTagFromContext(ctx);
  const meta = getHtmlTagMeta(tag);
  const groupCopy = dictionary.groups[meta.group.key] || dictionary.groups.document;
  const tagCopy = dictionary.tags[tag] || {};
  const navigation = getHtmlTagNavigation(tag);
  const description =
    tagCopy.summary ||
    (language === "en"
      ? `\`${meta.helper}\` belongs to the ${groupCopy.label} group. ${groupCopy.summary}`
      : `\`${meta.helper}\` appartiene al gruppo ${groupCopy.label}. ${groupCopy.summary}`);
  const usage = tagCopy.usage || groupCopy.usage || [];
  const notes = [...(groupCopy.notes || []), ...(tagCopy.notes || [])];

  return _.div(
    { class: "cms-panel cms-page" },
    _.div(
      {
        style: {
          display: "grid",
          gap: "12px",
          marginBottom: "var(--cms-s-lg)",
        },
      },
      _.div(
        { style: { display: "flex", gap: "8px", flexWrap: "wrap" } },
        _.Chip({ color: "primary", outline: true, size: "sm" }, dictionary.ui.eyebrow),
        _.Chip({ color: "info", outline: true, size: "sm" }, `${dictionary.ui.groupLabel}: ${groupCopy.label}`),
        _.Chip({ color: "secondary", outline: true, size: "sm" }, `${dictionary.ui.helperLabel}: ${meta.helper}`),
        meta.isVoid
          ? _.Chip({ color: "warning", outline: true, size: "sm" }, dictionary.ui.voidLabel)
          : null,
      ),
      _.h1(meta.helper),
      _.p(description),
      _.div(
        {
          style: {
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          },
        },
        _.Chip({ outline: true, size: "sm" }, dictionary.ui.renderedWith),
      ),
    ),
    grid(
      _.Card(
        { title: dictionary.ui.descriptionTitle },
        _.p(groupCopy.summary),
        _.p(`Route demo: ${meta.route}`),
      ),
      _.Card(
        { title: dictionary.ui.usageTitle },
        _.ul(...usage.map((item) => _.li(item))),
      ),
      _.Card(
        { title: dictionary.ui.noteTitle },
        _.ul(...notes.map((item) => _.li(item))),
      ),
    ),
    grid(
      _.Card({ title: dictionary.ui.syntaxTitle }, codeBlock(meta.syntaxLines)),
      _.Card({ title: dictionary.ui.exampleTitle }, codeBlock(meta.exampleLines)),
    ),
    _.Card(
      { title: dictionary.ui.previewTitle },
      meta.preview ||
        _.Banner({
          color: "info",
          title: dictionary.ui.previewUnavailableTitle,
          message: dictionary.ui.previewUnavailableMessage,
        }),
    ),
    _.Card(
      { title: dictionary.ui.relatedTitle },
      _.div(
        { style: { display: "flex", gap: "8px", flexWrap: "wrap" } },
        ...meta.relatedTags.map((relatedTag) => helperLink(relatedTag)),
      ),
    ),
    _.Card(
      { title: dictionary.ui.navigationTitle },
      stack(
        navButton(navigation.previous, dictionary.ui.previousLabel),
        navButton(navigation.next, dictionary.ui.nextLabel),
      ),
    ),
  );
}

export { htmlTagPage };
