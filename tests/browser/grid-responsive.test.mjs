import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const findChrome = () => {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser"
  ].filter(Boolean);

  return candidates.find((candidate) => existsSync(candidate)) || "";
};

const runChrome = (chromePath, htmlFile, options = {}) => new Promise((resolve, reject) => {
  const width = options.width || 1440;
  const height = options.height || 900;
  execFile(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--allow-file-access-from-files",
    `--window-size=${width},${height}`,
    "--virtual-time-budget=3000",
    "--dump-dom",
    pathToFileURL(htmlFile).href
  ], { maxBuffer: 1024 * 1024 * 4 }, (error, stdout, stderr) => {
    if (error) {
      error.message = `${error.message}\n${stderr}`;
      reject(error);
      return;
    }
    resolve(stdout);
  });
});

const readBrowserResult = (dom) => {
  const match = dom.match(/\sdata-result="([^"]+)"/);
  assert.ok(match, `missing browser result in DOM:\n${dom.slice(0, 2000)}`);
  return JSON.parse(decodeURIComponent(match[1]));
};

test("Grid responsive columns keep display:grid and render four desktop tracks", {
  skip: findChrome() ? false : "Chrome/Chromium is not available"
}, async () => {
  const chromePath = findChrome();
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), "cmswift-grid-responsive-"));
  const htmlFile = path.join(tmpDir, "index.html");
  const coreUrl = pathToFileURL(path.join(ROOT_DIR, "packages/core/dist/cms.js")).href;
  const uiUrl = pathToFileURL(path.join(ROOT_DIR, "packages/ui/dist/ui.js")).href;
  const cssUrl = pathToFileURL(path.join(ROOT_DIR, "packages/ui/dist/css/ui.css")).href;

  await writeFile(htmlFile, `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="${cssUrl}">
  <style>
    body { margin: 0; padding: 24px; }
    #root { width: 960px; }
    .probe-cell { min-height: 32px; border: 1px solid #999; box-sizing: border-box; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="${coreUrl}"></script>
  <script src="${uiUrl}"></script>
  <script>
    const finish = (result) => {
      document.body.setAttribute("data-result", encodeURIComponent(JSON.stringify(result)));
    };

    try {
      const UI = window._ || window.CMSwift?.ui;
      const cells = Array.from({ length: 8 }, (_, index) =>
        UI.div({ class: "probe-cell" }, "cell " + (index + 1))
      );
      const grid = UI.Grid({
        cols: 1,
        gap: "md",
        tablet: { cols: 2, gap: "lg" },
        pc: { cols: 4 }
      }, ...cells);

      document.getElementById("root").appendChild(grid);

      requestAnimationFrame(() => {
        const style = getComputedStyle(grid);
        const children = Array.from(grid.children);
        const rects = children.slice(0, 5).map((child) => {
          const rect = child.getBoundingClientRect();
          return {
            left: Math.round(rect.left),
            top: Math.round(rect.top),
            width: Math.round(rect.width)
          };
        });
        const trackCount = style.gridTemplateColumns.split(" ").filter(Boolean).length;
        const firstTop = rects[0]?.top ?? 0;
        const firstFourSameRow = rects.slice(0, 4).every((rect) => Math.abs(rect.top - firstTop) <= 2);
        const firstFourIncrease = rects.slice(1, 4).every((rect, index) => rect.left > rects[index].left);

        finish({
          className: grid.className,
          display: style.display,
          gap: style.gap,
          gridTemplateColumns: style.gridTemplateColumns,
          trackCount,
          rects,
          firstFourSameRow,
          firstFourIncrease,
          fifthIsNextRow: rects[4] ? rects[4].top > firstTop : false
        });
      });
    } catch (error) {
      finish({ error: String(error?.stack || error) });
    }
  </script>
</body>
</html>`, "utf8");

  const dom = await runChrome(chromePath, htmlFile);
  const result = readBrowserResult(dom);

  assert.equal(result.error, undefined);
  assert.equal(result.display, "grid");
  assert.notEqual(result.gap, "normal");
  assert.equal(result.trackCount, 4, result.gridTemplateColumns);
  assert.equal(result.firstFourSameRow, true, JSON.stringify(result.rects));
  assert.equal(result.firstFourIncrease, true, JSON.stringify(result.rects));
  assert.equal(result.fifthIsNextRow, true, JSON.stringify(result.rects));
});

test("GridCol col alias uses grid vars without generic grid-column vars", {
  skip: findChrome() ? false : "Chrome/Chromium is not available"
}, async () => {
  const chromePath = findChrome();
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), "cmswift-gridcol-responsive-"));
  const htmlFile = path.join(tmpDir, "index.html");
  const coreUrl = pathToFileURL(path.join(ROOT_DIR, "packages/core/dist/cms.js")).href;
  const uiUrl = pathToFileURL(path.join(ROOT_DIR, "packages/ui/dist/ui.js")).href;
  const cssUrl = pathToFileURL(path.join(ROOT_DIR, "packages/ui/dist/css/ui.css")).href;

  await writeFile(htmlFile, `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="${cssUrl}">
  <style>
    body { margin: 0; padding: 24px; }
    #root { width: 960px; }
    .probe-shell { min-height: 48px; box-sizing: border-box; border: 1px solid #777; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="${coreUrl}"></script>
  <script src="${uiUrl}"></script>
  <script>
    const finish = (result) => {
      document.body.setAttribute("data-result", encodeURIComponent(JSON.stringify(result)));
    };

    try {
      const UI = window._ || window.CMSwift?.ui;
      const toolbar = UI.Toolbar({
        class: "probe-toolbar",
        gap: "sm",
        start: UI.Btn({ label: "A" }),
        end: UI.Btn({ label: "B" })
      });
      const col = UI.GridCol({
        class: "probe-shell",
        span: 12,
        tablet: { col: 5 },
        pc: { col: 4 },
        gap: "md"
      }, toolbar);
      const grid = UI.Grid({
        cols: 12,
        gap: "md",
        tablet: { cols: 12, gap: "lg" },
        pc: { cols: 12 }
      }, col, UI.GridCol({ col: 8 }, "side"));

      document.getElementById("root").appendChild(grid);

      requestAnimationFrame(() => {
        const gridStyle = getComputedStyle(grid);
        const colStyle = getComputedStyle(col);
        const toolbarStyle = getComputedStyle(toolbar);
        const gridRect = grid.getBoundingClientRect();
        const colRect = col.getBoundingClientRect();
        const toolbarRect = toolbar.getBoundingClientRect();
        finish({
          gridDisplay: gridStyle.display,
          gridGap: gridStyle.gap,
          gridTemplateColumns: gridStyle.gridTemplateColumns,
          colClassName: col.className,
          colAttr: col.getAttribute("col"),
          colGridColumn: colStyle.gridColumn,
          colBase: col.style.getPropertyValue("--cms-grid-col-base"),
          colTablet: col.style.getPropertyValue("--cms-grid-col-tablet"),
          colPc: col.style.getPropertyValue("--cms-grid-col-pc"),
          rspGridColumn: col.style.getPropertyValue("--cms-rsp-grid-column"),
          rspPcGridColumn: col.style.getPropertyValue("--cms-rsp-pc-grid-column"),
          toolbarDisplay: toolbarStyle.display,
          toolbarGap: toolbarStyle.gap,
          gridWidth: Math.round(gridRect.width),
          colWidth: Math.round(colRect.width),
          toolbarWidth: Math.round(toolbarRect.width)
        });
      });
    } catch (error) {
      finish({ error: String(error?.stack || error) });
    }
  </script>
</body>
</html>`, "utf8");

  const dom = await runChrome(chromePath, htmlFile);
  const result = readBrowserResult(dom);

  assert.equal(result.error, undefined);
  assert.equal(result.gridDisplay, "grid");
  assert.notEqual(result.gridGap, "normal");
  assert.equal(result.colAttr, null);
  assert.match(result.colGridColumn, /span 4/);
  assert.match(result.colBase, /span 12/);
  assert.match(result.colTablet, /span 5/);
  assert.match(result.colPc, /span 4/);
  assert.equal(result.rspGridColumn, "");
  assert.equal(result.rspPcGridColumn, "");
  assert.equal(result.colClassName.includes("cms-rsp-grid-column"), false);
  assert.equal(result.colClassName.includes("cms-rsp-pc-grid-column"), false);
  assert.equal(result.toolbarDisplay, "flex");
  assert.notEqual(result.toolbarGap, "normal");
  assert.ok(result.colWidth > 250 && result.colWidth < 360, JSON.stringify(result));
  assert.ok(result.toolbarWidth <= result.colWidth + 2, JSON.stringify(result));
});

test("Toolbar responsive gap and direction apply across mobile tablet and pc", {
  skip: findChrome() ? false : "Chrome/Chromium is not available"
}, async () => {
  const chromePath = findChrome();
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), "cmswift-toolbar-responsive-"));
  const htmlFile = path.join(tmpDir, "index.html");
  const coreUrl = pathToFileURL(path.join(ROOT_DIR, "packages/core/dist/cms.js")).href;
  const uiUrl = pathToFileURL(path.join(ROOT_DIR, "packages/ui/dist/ui.js")).href;
  const cssUrl = pathToFileURL(path.join(ROOT_DIR, "packages/ui/dist/css/ui.css")).href;

  await writeFile(htmlFile, `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="${cssUrl}">
  <style>
    body { margin: 0; padding: 24px; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="${coreUrl}"></script>
  <script src="${uiUrl}"></script>
  <script>
    const finish = (result) => {
      document.body.setAttribute("data-result", encodeURIComponent(JSON.stringify(result)));
    };

    try {
      const UI = window._ || window.CMSwift?.ui;
      const toolbar = UI.Toolbar({
        gap: "sm",
        direction: "column",
        tablet: { direction: "row", gap: "md" },
        pc: { gap: "lg" }
      }, UI.Btn({ label: "A" }), UI.Btn({ label: "B" }));

      document.getElementById("root").appendChild(toolbar);

      requestAnimationFrame(() => {
        const style = getComputedStyle(toolbar);
        const rootStyle = getComputedStyle(document.documentElement);
        finish({
          className: toolbar.className,
          styleGap: toolbar.style.gap,
          gap: style.gap,
          flexDirection: style.flexDirection,
          gapSm: rootStyle.getPropertyValue("--cms-gap-sm").trim(),
          gapMd: rootStyle.getPropertyValue("--cms-gap-md").trim(),
          gapLg: rootStyle.getPropertyValue("--cms-gap-lg").trim(),
          rspGap: toolbar.style.getPropertyValue("--cms-rsp-gap"),
          rspTabletGap: toolbar.style.getPropertyValue("--cms-rsp-tablet-gap"),
          rspPcGap: toolbar.style.getPropertyValue("--cms-rsp-pc-gap")
        });
      });
    } catch (error) {
      finish({ error: String(error?.stack || error) });
    }
  </script>
</body>
</html>`, "utf8");

  const mobile = readBrowserResult(await runChrome(chromePath, htmlFile, { width: 390, height: 844 }));
  const tablet = readBrowserResult(await runChrome(chromePath, htmlFile, { width: 800, height: 900 }));
  const pc = readBrowserResult(await runChrome(chromePath, htmlFile, { width: 1440, height: 900 }));

  assert.equal(mobile.error, undefined);
  assert.equal(tablet.error, undefined);
  assert.equal(pc.error, undefined);

  assert.equal(mobile.styleGap, "");
  assert.equal(tablet.styleGap, "");
  assert.equal(pc.styleGap, "");

  assert.equal(mobile.flexDirection, "column");
  assert.equal(tablet.flexDirection, "row");
  assert.equal(pc.flexDirection, "row");

  assert.equal(mobile.gap, mobile.gapSm);
  assert.equal(tablet.gap, tablet.gapMd);
  assert.equal(pc.gap, pc.gapLg);
});
