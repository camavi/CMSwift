# CMSwift

CMSwift e un framework web leggero, browser-first, con:

- core DOM/reactivity custom
- layer UI componibile
- bundle standard e minificati
- package separati per adozione progressiva

I package pubblicati sono:

- `@cmswift/core`
- `@cmswift/ui`
- `cmswift`

## Quando usare cosa

- `@cmswift/core`
  se vuoi renderer, `signal`, `computed`, `effect`, `rod`, lifecycle e moduli base senza il layer UI
- `@cmswift/ui`
  se vuoi i componenti UI sopra `@cmswift/core`
- `cmswift`
  se vuoi un solo package con tutto dentro

## Installazione

Solo core:

```bash
npm install @cmswift/core
```

Core + UI:

```bash
npm install @cmswift/core @cmswift/ui
```

Package unico:

```bash
npm install cmswift
```

## CDN

Esempio con package unico via jsDelivr:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/cmswift@1.0.1/dist/css/ui.css"
/>
<script src="https://cdn.jsdelivr.net/npm/cmswift@1.0.1/dist/cmswift.js"></script>
```

Esempio con core + UI separati:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@cmswift/ui@1.0.1/dist/css/ui.css"
/>
<script src="https://cdn.jsdelivr.net/npm/@cmswift/core@1.0.1/dist/cms.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@cmswift/ui@1.0.1/dist/ui.js"></script>
```

Per production:

- usa version pin esplicito, per esempio `@1.0.1`
- preferisci i bundle minificati se non ti serve il readable build
- per `cmswift` usa `dist/min-cmswift.js`
- per `core` e `ui` usa `dist/min-cms.js` e `dist/min-ui.js`

## Quick Start

Esempio con package unico `cmswift`:

```js
import "cmswift";
import "cmswift/css/ui.css";

const _ = window._;
const root = document.getElementById("app");

const [count, setCount] = _.signal(0);

_.mount(
  root,
  _.Card(
    _.cardBody(
      _.h1("CMSwift"),
      _.Btn(
        {
          color: "primary",
          onClick: () => setCount(count() + 1),
        },
        "Count +1",
      ),
      _.p(() => `Current count: ${count()}`),
    ),
  ),
);
```

HTML minima:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CMSwift app</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

## Uso con `@cmswift/core` + `@cmswift/ui`

```js
import "@cmswift/core";
import "@cmswift/ui";
import "@cmswift/ui/css/ui.css";

const _ = window._;
```

## CSS disponibili

Con `@cmswift/ui`:

- `@cmswift/ui/css/ui.css`
- `@cmswift/ui/css/min-ui.css`
- `@cmswift/ui/css/base.css`
- `@cmswift/ui/css/responsive.css`
- `@cmswift/ui/css/animation.css`
- `@cmswift/ui/css/ui-components.css`
- `@cmswift/ui/css/tabler-icons-out.css`
- `@cmswift/ui/css/docs.css`

Con `cmswift`:

- `cmswift/css/ui.css`
- `cmswift/css/min-ui.css`
- `cmswift/css/base.css`
- `cmswift/css/responsive.css`
- `cmswift/css/animation.css`
- `cmswift/css/ui-components.css`
- `cmswift/css/tabler-icons-out.css`
- `cmswift/css/docs.css`

## Struttura repo

- `packages/core`
  renderer, reactive core, `rod`, lifecycle e moduli platform
- `packages/ui`
  componenti UI e asset CSS/font/img
- `packages/cmswift`
  bundle umbrella con JS, CSS e asset inclusi
- `pages`
  demo HTML locali e smoke manuale
- `docs`
  reference tecnica, policy e materiali di release

## Comandi repo

Build runtime:

```bash
npm run build:runtime
```

Dev locale:

```bash
npm run dev
```

Test automatici:

```bash
npm test
```

Autocomplete UI:

```bash
npm run gen:ui-dts
```

## Output runtime

- `packages/core/dist/cms.js`
- `packages/core/dist/min-cms.js`
- `packages/ui/dist/ui.js`
- `packages/ui/dist/min-ui.js`
- `packages/ui/dist/css/ui.css`
- `packages/ui/dist/css/min-ui.css`
- `packages/cmswift/dist/cmswift.js`
- `packages/cmswift/dist/min-cmswift.js`

## Documentazione

- [Docs Index](docs/README.md)
- [Core Reference](docs/reference/core.md)
- [UI Reference](docs/reference/ui.md)
- [Stability Policy](docs/policy/stability.md)
- [Release Notes v1.0.1](docs/release/release-notes-v1.0.1.md)
- [Release Plan v1](docs/release/release-plan-v1.md)
- [Release Notes v1.0.0 Archive](docs/release/release-notes-v1.0.0.md)
- [Smoke Checklist v1](docs/release/smoke-v1.md)
- [Changelog](CHANGELOG.md)

## Note

- `packages/*/src` e la source of truth del framework
- i package sono browser-first: l’uso corretto e in app browser/Vite, non in Node puro senza DOM
- `pages/` non e documentazione editoriale: serve solo per demo e compatibilita locale
