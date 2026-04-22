# CMSwift v1.0.9 Release Notes

Status:

- patch release prepared to ship the responsive UI foundation across the core,
  UI, and umbrella packages

## Summary

`v1.0.9` makes responsive props part of the shared UI contract. Layout
components now understand mobile/default, `tablet`, and `pc` configuration, and
common UI components can use the same responsive sizing, spacing, typography,
display, and layout props through the central helper layer.

## Added

- shared responsive device contract:
  - mobile/default
  - `mobile`
  - `tablet` from `768px`
  - `pc` from `1024px`
- responsive helper APIs in the UI foundation:
  - `CMSwift.uiResponsiveDevices`
  - `CMSwift.uiResponsivePropsFor`
  - `CMSwift.uiResponsiveClasses`
  - `CMSwift.uiApplyResponsiveProps`
  - `CMSwift.uiResponsiveStyleRules`
  - `CMSwift.uiResponsiveCommonStyleRules`
- responsive metadata for shared UI props so developer tools and AI tooling can
  discover `mobile`, `tablet`, and `pc`
- CSS custom-property fallback engine for arbitrary responsive values
- generated responsive CSS coverage for layout, grid, spacing, sizing,
  typography, radius, overflow, and order props

## Changed

- `Row`, `Col`, `Container`, `Footer`, `Toolbar`, `Grid`, and `GridCol` now
  apply the complete responsive rule set
- common components that use `setPropertyProps` now receive responsive support
  for shared styling props
- `cms-dev/make-responsive-css.mjs` is the source of truth for generated
  responsive CSS in both `@cmswift/ui` and `cmswift`
- `@cmswift/ui` peer range now targets `@cmswift/core ^1.0.9`
- package versions bumped to `1.0.9`

## Compatibility

- existing root props keep their current mobile/default behavior
- breakpoint objects only override the values passed inside them
- legacy responsive utility prefixes remain generated for compatibility
- consumers should rebuild custom bundles after upgrading if they copy CSS files
  instead of importing the package CSS entry points

