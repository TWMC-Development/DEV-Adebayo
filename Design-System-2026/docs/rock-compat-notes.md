# Rock RMS Bootstrap 3 Compatibility Layer

## The Problem

Rock RMS v17.6.1.0 uses **Bootstrap 3** as its CSS framework. The 2026 website redesign uses **Bootstrap 5.3**. Rock injects admin UI elements into every page (zone/block config bars, modals, cms-admin-footer, form controls) that depend on BS3 classes. When the BS5 theme is deployed into Rock, these admin tools lose their styling.

## What Rock RMS Injects

### CMS Admin Footer (`#cms-admin-footer`)
- Fixed bottom bar, 36px tall, z-index 1049
- Shows page stats, edit buttons, admin links
- Hidden below 768px viewport

### Zone Configuration
- `.zone-instance` — wraps each page zone
- `.zone-configuration` — gear icon, appears on hover (z-index 1000)
- `.zone-configuration-bar` — expanded toolbar with zone name and controls
- `.can-configure` — applied when in edit mode

### Block Configuration
- `.block-instance` — wraps each content block (13+ per page)
- `.block-configuration` — gear icon, appears on hover (z-index 1049)
- `.block-configuration-bar` — expanded toolbar with block controls

### Rock Modal System
- `.rock-modal` — custom modal wrapper
- Header uses `background-color: #862533` (dark red)
- `.modal-body > .scroll-container` — 720px max-width
- **Critical:** Rock JS adds `.fade.in` (BS3), but BS5 uses `.fade.show`

### Panel System (BS3 only, no BS5 equivalent)
- `.panel`, `.panel-heading`, `.panel-body`, `.panel-footer`
- `.panel-dashboard`, `.panel-block`
- `.panel.panel-block > .rock-panel-drawer`
- BS5 replaced panels with `.card` — Rock admin panels still use `.panel`

### Form Controls
- `.rock-drop-down-list`, `.rock-radio-button-list`
- `.rock-check-box`, `.rock-control-wrapper`
- `.rock-literal`, `.form-control-static`

### Z-Index Stack
| Element | z-index |
|---------|---------|
| `.zone-configuration` | 1000 |
| `.zone-configuration-bar` | 1001 |
| `#cms-admin-footer` | 1049 |
| `.block-configuration` | 1049 |
| `.block-configuration-bar` | 1050 |
| Active modals | 1060 |
| `.rock-fullscreen-toggle` | 1048 |

## The Solution: `rock-compat.css`

A standalone ~200-line CSS file that provides **only** the BS3 rules Rock's admin UI needs. It does NOT load full Bootstrap 3 — just the targeted rules.

### What it covers:
1. **CMS Admin Footer** — full styling for the fixed bottom bar
2. **Zone/Block Config Bars** — hover-reveal toolbars with correct z-indexes
3. **Rock Modals** — `.fade.in` bridge to `.fade.show`, header theming (#862533), scroll containers
4. **BS3 Panels** — `.panel`, `.panel-heading`, `.panel-body`, `.panel-footer` with all variants
5. **Form Controls** — Rock-specific dropdowns, checkboxes, radio buttons
6. **Utilities** — fullscreen toggle, validation errors, config triggers
7. **Admin Buttons** — BS3 `.btn-default`, `.btn-xs` scoped to admin contexts only

### What it does NOT do:
- Does not affect site-facing BS5 components
- Does not load full Bootstrap 3
- Does not modify demo/prototype pages

## Deployment Instructions

### When deploying to Rock RMS:

1. Upload `rock-compat.css` to the theme's CSS directory
2. Add to the Rock theme's layout file, **after** Bootstrap 5 and theme.css:
   ```html
   <link rel="stylesheet" href="rock-compat.css">
   ```
3. Test in Rock admin:
   - Log in as admin
   - Verify cms-admin-footer appears at bottom
   - Enter page edit mode — verify zone/block config bars appear
   - Open a Rock modal (e.g., block settings) — verify header is dark red
   - Check form controls in admin panels render correctly

### Testing Checklist
- [ ] `#cms-admin-footer` renders correctly (fixed, 36px, dark background)
- [ ] Zone configuration bars appear on hover in edit mode
- [ ] Block configuration bars appear on hover in edit mode
- [ ] Rock modals open with #862533 header, white text, close button works
- [ ] `.panel` elements in admin render with heading/body/footer
- [ ] Form controls (dropdowns, checkboxes) in admin panels work
- [ ] `.fade.in` class triggers visibility (BS3/BS5 bridge)
- [ ] Site BS5 components (cards, buttons, navbar) are unaffected
- [ ] Z-index stacking: modals > admin footer > config bars > page content

## Rock RMS Version
- **Current:** v17.6.1.0
- **Bootstrap:** 3.x (bundled in Rock's `bootstrap.css`)
- **jQuery:** Loaded via `RockJQueryLatest`

## Files
- `rock-compat.css` — the compatibility layer (project root)
- This document — `docs/rock-compat-notes.md`
