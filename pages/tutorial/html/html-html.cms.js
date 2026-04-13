import { htmlTagPage } from "./html-tags.cms.js";

const htmlIntro = (ctx = {}) =>
  htmlTagPage({
    ...ctx,
    path: "/demo/html/html",
  });

export { htmlIntro };
