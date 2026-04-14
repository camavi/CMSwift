# Changelog

Tutte le modifiche rilevanti di CMSwift verranno documentate qui.

Il formato segue in modo pragmatico:
- Added
- Changed
- Fixed
- Docs

## [1.0.1] - 2026-04-14

### Added
- publish npm di `@cmswift/core`
- publish npm di `@cmswift/ui`
- publish npm del package umbrella `cmswift`
- documentazione README con percorsi npm e CDN
- package `cmswift` reso autonomo con `dist/cmswift.js`, CSS e asset inclusi nel tarball

### Fixed
- bootstrap del core ora parte anche senza `window.CMSwift_setting`
- configurazione HTTP del core ora usa fallback sicuri quando la config globale non esiste
- consumo npm browser-first piu robusto nei progetti che importano `@cmswift/core` senza setup legacy
- export CSS del package `cmswift` ora puntano a file interni al package
- build del package umbrella riallineata con JS, CSS, font e immagini inclusi

### Docs
- quick start pubblico aggiornato per `@cmswift/core`, `@cmswift/ui` e `cmswift`
- aggiunte note di release dedicate per `v1.0.1`
- documentazione release `v1.0.0` riclassificata come archivio storico/pre-release

## [1.0.0] - historical pre-release baseline

### Added
- modularizzazione completa del core in `packages/core/src`
- modularizzazione completa del layer UI in `packages/ui/src`
- build runtime standard e minificata:
  - `cms.js`
  - `min-cms.js`
  - `ui.js`
  - `min-ui.js`
- bundle umbrella `cmswift.js` e `min-cmswift.js`
- documentazione interna per core e UI
- checklist pre-release `v1`
- policy di stabilita e compatibilita
- smoke checklist browser di release
- prima bozza di release notes `v1.0.0`

### Changed
- consolidata la struttura del renderer
- consolidato il reactive core
- riallineato `rod` al bridge DOM e ai form controls
- separati i moduli platform e i moduli UI in file sorgente dedicati

### Fixed
- CSS custom properties nel renderer
- semantica di remove/update props
- children dinamici, classi, eventi e cleanup
- casi rari dei form controls
- bug reali emersi da demo e test del core

### Docs
- aggiunto `README.md` pubblico
- aggiunti `docs/reference/core.md` e `docs/reference/ui.md` come riferimenti tecnici
- aggiunto `LICENSE`

## Note

La release `1.0.0` resta come baseline storica di pre-release.
La prima release pubblicata e consumata via npm nel repo e `1.0.1`.
