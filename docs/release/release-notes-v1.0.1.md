# CMSwift v1.0.1 Release Notes

Stato:
- pubblicata su npm
- release patch di consolidamento dopo il primo assetto package-oriented

## Summary

`v1.0.1` e la prima release pubblicata e verificata in un progetto npm/browser reale.

Include:
- `@cmswift/core@1.0.1`
- `@cmswift/ui@1.0.1`
- `cmswift@1.0.1`

## Included In v1.0.1

Core:
- bootstrap sicuro anche senza `window.CMSwift_setting`
- fallback sicuri sulla config HTTP

UI:
- package riallineato a `@cmswift/core@^1.0.1`
- export CSS verificati in installazione npm reale

Umbrella:
- `cmswift` pubblicato come package unico
- `dist/` autonomo con:
  - `cmswift.js`
  - `min-cmswift.js`
  - CSS
  - font
  - immagini

## Distribution

npm:
- `@cmswift/core`
- `@cmswift/ui`
- `cmswift`

Readable:
- `packages/core/dist/cms.js`
- `packages/ui/dist/ui.js`
- `packages/cmswift/dist/cmswift.js`

Minified:
- `packages/core/dist/min-cms.js`
- `packages/ui/dist/min-ui.js`
- `packages/cmswift/dist/min-cmswift.js`

## Validation

Verifiche eseguite:
- build runtime del repo
- test npm reale con `@cmswift/core + @cmswift/ui`
- test npm reale con package unico `cmswift`
- build browser/Vite del progetto di test

## Notes

`v1.0.1` e la prima base pubblica davvero consumabile del framework in forma package.

Resta consigliato:
- usare version pin su npm e CDN
- usare Vite o un ambiente browser equivalente
- aggiornare Node a `20.19+` per allinearsi ai requisiti moderni di Vite
