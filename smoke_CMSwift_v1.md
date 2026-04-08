# CMSwift v1 Browser Smoke Checklist

Checklist manuale minima da eseguire prima di una release `v1`.

Regola:
- se una voce fallisce, la release si ferma
- il check va fatto almeno su build runtime corrente
- preferibile verificare sia bundle standard sia minificato

## 1. Runtime Files

- [ ] `pages/_cmswift-fe/js/cms.js` carica senza errori
- [ ] `pages/_cmswift-fe/js/ui.js` carica senza errori
- [ ] `pages/_cmswift-fe/js/min-cms.js` carica senza errori
- [ ] `pages/_cmswift-fe/js/min-ui.js` carica senza errori

## 2. Demo Shell

- [ ] [index.html](/Users/cmalleux/Sites/CMSwift-FE/pages/index.html) carica senza errori console
- [ ] routing demo funzionante
- [ ] drawer shell principale funzionante
- [ ] main layout responsive almeno in check rapido desktop/mobile

## 3. Core Demo

- [ ] `/demo/component/cms-renderer`
- [ ] `/demo/component/cms-reactive`
- [ ] `/demo/component/cms-rod`
- [ ] `/demo/component/cms-lifecycle`
- [ ] `/demo/component/cms-platform`
- [ ] `/demo/component/cms-renderer-style`

## 4. UI Demo Prioritarie

- [ ] layout
- [ ] form
- [ ] input
- [ ] select
- [ ] table
- [ ] tabs
- [ ] dialog
- [ ] menu
- [ ] popover
- [ ] tooltip
- [ ] app-shell

## 5. What To Verify

Su ogni demo chiave:
- [ ] nessun errore console
- [ ] nessun warning nuovo inatteso
- [ ] interazioni principali funzionanti
- [ ] stato reattivo coerente
- [ ] overlay aprono/chiudono correttamente
- [ ] keyboard base non rotta

## 6. Release Gate

La release puo proseguire solo se:
- [ ] tutti i check sopra sono passati
- [ ] eventuali failure sono documentati e chiusi
- [ ] non restano blocker aperti in `release_CMSwift_v1.md`
