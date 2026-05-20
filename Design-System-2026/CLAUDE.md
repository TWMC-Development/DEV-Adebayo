# CLAUDE.md — TWMC 2026 Website Redesign

## Project Overview

Static HTML prototype for The Woodlands Methodist Church 2026 website redesign. Each page is a standalone HTML file using a shared design system (`theme.css`, `theme.js`, Bootstrap 5.3). No bundler or framework — just HTML/CSS/JS served statically.

## Dev Server

```bash
node server.js        # starts on http://localhost:3000
npx serve             # alternative static server
```

The `.claude/launch.json` configures preview servers for Claude Code.

## Tech Stack

- **CSS Framework**: Bootstrap 5.3.3 (local: `bootstrap.min.css`) + `theme.css` (custom design system)
- **Fonts**: Google Fonts — Playfair Display (display) + DM Sans (body)
- **Icons**: Font Awesome 6 (kit `85947205a9`)
- **JavaScript**: Vanilla ES6+ in `theme.js` (no build step)
- **Server**: Node.js static file server (`server.js`, port 3000)

## Design System

All design tokens live in `theme.css` as CSS custom properties:

| Token | Value |
|-------|-------|
| `--maroon` | `#6e3140` — **Primary** (CTAs, links, brand) — maps to `--bs-primary` |
| `--gold` | `#c5a258` — **Secondary** (accents, highlights) — maps to `--bs-secondary` |
| `--cream` | `#faf8f5` — **Tertiary** (backgrounds, subtle fills) |
| `--success` | `#5a8a6e` — Warm sage green — maps to `--bs-success` |
| `--danger` | `#b5454a` — Warm rose red — maps to `--bs-danger` |
| `--warning` | `#c5a258` — Gold (= secondary) — maps to `--bs-warning` |
| `--info` | `#6b849e` — Warm slate blue — maps to `--bs-info` |
| `--font-display` | `Playfair Display` |
| `--font-body` | `DM Sans` |
| `--radius` | `16px` / `--radius-lg` `24px` / `--radius-pill` `999px` |
| `--shadow-card` | subtle card shadow |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--duration-fast` | `0.15s` (links, icons, micro-interactions) |
| `--duration-normal` | `0.3s` (buttons, state changes) |
| `--duration-slow` | `0.5s` (cards, panels, reveals) |
| `--grow-*-hover` | Darker GROW color variants for hover states |

Full documentation: `style_guide.md` and `framework.html`

## Page Template

Every page follows this structure (copy from `home.html`):

1. Location bar (5 campus links)
2. Sticky navbar with logo, nav links, Login button, mega menu trigger
3. Mobile offcanvas nav (Bootstrap)
4. Mega menu (3-column overlay)
5. Page content sections with `.reveal` class for scroll animations
6. GROW pathway section (optional — included on most pages, not required)
7. Footer (3-column: brand, about, quick links)

## Consistency Rules

**Shared sections must look and feel identical on every page.** Content varies, structure and styling do not. Think of these like the menu and footer — they are site-wide templates that happen to load different content per page, but the container, classes, layout, and visual treatment are always the same.

### Shared Sections (same structure everywhere)

These sections use shared classes from `theme.css` and shared JS from `theme.js`. **Never override their styling in page `<style>` blocks. Never create page-prefixed variants.**

| Section | Classes | Standard Reference | Notes |
|---------|---------|-------------------|-------|
| **Location bar** | `.location-bar` | All pages | 5 campus links, identical everywhere |
| **Navbar** | `.navbar`, `.mega-menu` | All pages | Logo, nav links, Login, mega menu |
| **Page hero** | `.page-hero`, `.page-hero-bg`, `.page-hero-overlay` | All subpages | Background image + overlay + title |
| **Intro section** | `.intro-section`, `.intro-grid`, `.intro-text`, `.intro-video` | `womens.html` | Two-column: image/video + text. Uses `row row-cols-1 row-cols-lg-2 g-56`. Heading is `h2.section-title` with `<em>`. Right column may be `.contact-card` instead of video. |
| **Connect section** | `.connect-section`, `.connect-header`, `.connect-tabs`, `.connect-tab`, `.connect-cards`, `.connect-card` | `womens.html` | Tabbed cards by campus. Header has `.section-label` + `h2.section-title` + tabs with `id="connectTabs"`. Cards use `row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4` with `.col` wrappers. Tab switching handled by `theme.js`. |
| **Feature banner** | `.feature-banner`, `.feature-banner-inner`, `.feature-banner--split` | `childrens.html` | Full-width CTA with background image. Two layouts: centered (default) and two-column (`--split`). Background image set via inline `style`. |
| **E-news CTA** | `.enews-cta`, `.enews-inner` | `womens.html` | Newsletter signup banner |
| **Contact card** | `.contact-card`, `.contact-item`, `.contact-item-icon` | `womens.html` | Used inside intro sections |
| **Blog section** | `.blog-section`, `.blog-header`, `.blog-grid`, `.blog-card`, `.blog-card-image`, `.blog-card-body`, `.blog-card-meta`, `.blog-card-meta-text` | `home.html` | 3-column blog card grid. Header uses `.blog-header.reveal` (flex row, space-between) with `.section-label` + `h2.section-title` + `.btn-outline`. Grid is `blog-grid row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4`. Each card: image (200px, zoom on hover), body (Playfair h3, 3-line clamped p), meta (36px avatar, author name + date). Never add `section-space` — `.blog-section` has its own padding. |
| **GROW section** | `.grow-section`, `.grow-squares` | Most pages | Pathway navigation — optional, like feature banners. Omit on themed/seasonal landing pages where it doesn't fit. |
| **Footer** | `.site-footer` | All pages | 3-column: brand, about, quick links |

### What "Consistent" Means

- **Same wrapper classes** — `.connect-section > .container > .connect-header.reveal` not bare divs
- **Same heading structure** — `h2.section-title` with `<em>`, not `h3` or unstyled `h2`
- **Same grid classes** — Bootstrap `row row-cols-*` with `.col` wrappers, not bare CSS Grid
- **Same ARIA attributes** — `role="tablist"`, `aria-controls`, `aria-labelledby` on tabs
- **Same JS handler** — shared `theme.js`, never page-specific tab scripts
- **No inline styles** — no `style="justify-content: center"` overrides
- **No page-prefixed classes** — never `ch-connect-card`, `missions-intro`, etc.
- **Explicit display on every card** — every card class in `theme.css` must declare `display: block`, `display: flex`, or `display: grid` explicitly. Never rely on the browser default. An `<a>` tag is `display: inline` — without an explicit value, `border-radius`, `overflow: hidden`, and `height: 100%` all silently break. Image-based cards use `flex` + `flex-direction: column` so the meta/footer section stays pinned to the bottom across rows of unequal height. Content-only cards (no image slot) use `block`. See Card Component Rules in `style_guide.md` for the full breakdown.

### What Can Vary Per Page

- **Content inside cards** — different images, titles, descriptions, links
- **Number of cards** — some campuses have 1, others have 5
- **Number of tabs** — most pages have 4 campuses, childrens has 6 (adds Español)
- **Which shared sections appear** — not every page needs a connect section or contact card
- **Page-specific sections** — unique content like the programs accordion on childrens.html goes in page `<style>` blocks with page-specific classes

### Feature Banner Standard

The feature banner is a full-width CTA section with a background image. Two layouts × two themes = four combinations:

- **Layouts**: centered (default) | two-column split (`--split`)
- **Themes**: dark background (default, white text with text-shadow) | light background (`--light`, maroon text)

**Centered + dark** (default):
```html
<section class="feature-banner" style="background-image: url('...'); background-color: #fallback;">
  <div class="container">
    <div class="feature-banner-inner reveal">
      <h2>Headline</h2>
      <p>Description text.</p>
      <a href="#" class="btn-white">Call to Action</a>
    </div>
  </div>
</section>
```

**Centered + light**:
```html
<section class="feature-banner feature-banner--light" style="background-image: url('...'); background-color: var(--cream);">
  <div class="container">
    <div class="feature-banner-inner reveal">
      <h2>Headline</h2>
      <p>Description text.</p>
      <a href="#" class="btn-primary">Call to Action</a>
    </div>
  </div>
</section>
```

**Split + dark**:
```html
<section class="feature-banner feature-banner--split" style="background-image: url('...'); background-color: #fallback;">
  <div class="container">
    <div class="row row-cols-1 row-cols-lg-2 align-items-center g-56 reveal">
      <div class="col">
        <div class="feature-banner-text">
          <h2>Headline</h2>
          <p>Description text.</p>
          <a href="#" class="btn-white">Call to Action</a>
        </div>
      </div>
      <div class="col">
        <div class="feature-banner-media">
          <img src="..." alt="...">
        </div>
      </div>
    </div>
  </div>
</section>
```

**Split + light**: Add `feature-banner--light` alongside `feature-banner--split`, use `.btn-primary` instead of `.btn-white`.

### CSS Architecture

- **bootstrap.min.css** — Untouched Bootstrap 5.3.3. Grid, utilities, resets, component JS behavior.
- **theme.css** — TWMC brand layer: tokens, shared components (navbar, page hero, section headers, buttons, intro section, connect section, feature banner, cards, GROW, e-news CTA, contact card, footer), and Bootstrap component overrides (all UI components themed with maroon/brand colors).
- **seasonal.css** — Optional. Loaded after theme.css for themed/campaign landing pages. Overrides brand tokens via CSS custom properties scoped under a body class (`.season-summer`, `.season-easter`, etc.). Also provides campus color system and seasonal components (seasonal hero, seasonal intro, activity cards, campus section headers).
- **Page `<style>` blocks** — Only for components unique to one page.
- **Rule: If a component appears on 2+ pages, it belongs in theme.css (or seasonal.css for campaign components). Never create page-prefixed copies.**
- **Bootstrap `.card` + image slots** — Bootstrap's `.card` intentionally omits `overflow: hidden`. Any page-specific card variant built on Bootstrap's `.card` that contains a flush top image must add `overflow: hidden` to its custom class — otherwise the image bleeds through the rounded corners. Bootstrap gives you `display: flex; flex-direction: column` for free; `overflow: hidden` is always your responsibility.

### Seasonal / Themed Pages

For campaign landing pages that need a different color palette (Summer Splash, Easter, Christmas, VBS):

1. Add a season class to `<body>`: `<body class="season-summer">`
2. Link `seasonal.css` after `theme.css`: `<link rel="stylesheet" href="seasonal.css">`
3. All shared components automatically shift to the seasonal palette via CSS variable overrides

Available seasons: `.season-summer` (aqua), `.season-easter` (teal), `.season-christmas` (green/red), `.season-vbs` (vibrant orange)

Campus color system: Wrap content in `.campus-woodlands`, `.campus-woodforest`, `.campus-creekside`, `.campus-montgomery`, or `.campus-espanol` — all child components (tags, titles, buttons, icons) pick up the campus accent color automatically via `--campus-color`.

Seasonal components: `.seasonal-hero`, `.seasonal-intro`, `.activity-card`, `.campus-section-header`, `.btn-campus`, `.activity-tag`

## Key Patterns

- **Scroll reveals**: Add class `reveal` to any element. `theme.js` uses IntersectionObserver to add `.visible` on scroll. Multiple reveals entering at once are auto-staggered (40ms apart).
- **Section headers**: Use `.section-label` (uppercase maroon tag) + `.section-title` (Playfair h2 with `<em>` for italic accent).
- **Grids**: Use Bootstrap `row row-cols-*` for all content grids. Wrap each item in `<div class="col">`. Use `g-4` for 24px gaps or custom `.g-28`/`.g-32`/`.g-56`/`.g-60` utilities. Only 5 grids stay as CSS Grid: footer (unequal cols), formation cards (order swap), dual CTA (divider), mega menu (border-between), podcast grid (auto-fill).
- **Breakpoints**: Use Bootstrap standard breakpoints only — `sm:576`, `md:768`, `lg:992`, `xl:1200`, `xxl:1400`. No custom breakpoints.
- **Cards**: 14 card variants in theme.css (`.feature-card`, `.blog-card`, `.bento-card`, `.connect-card`, `.campus-card`, etc.)
- **Buttons**: `.btn-primary` (maroon pill), `.btn-outline` (maroon border), `.btn-gold`, `.btn-grow` / `.btn-grow-r` / `.btn-grow-o` / `.btn-grow-w` (GROW pathway colors), `.btn-white`. All support `:disabled` state.
- **GROW utilities**: Full color system for all 4 GROW letters — `.text-grow-*`, `.bg-grow-*`, `.badge-grow-*`, `.btn-card-grow-*`, `.accent-grow-*::after` (where `*` is `g`, `r`, `o`, or `w`). **GROW colors are for pathway pages only — never use them as general accent colors.**
- **Bootstrap color mapping**: `--bs-primary` = maroon, `--bs-secondary` = gold. Use Bootstrap's `.btn-primary`, `.btn-outline-primary`, `.btn-secondary`, `.btn-outline-secondary` — they map to brand colors automatically.
- **Images**: Use S3 bucket URLs (`rockrms-assets.s3.us-east-2.amazonaws.com`) with `onerror` fallbacks
- **Forms**: Themed form inputs (`input`, `textarea`, `select`) with focus rings, error states, and helper text classes (`.form-group`, `.form-helper`, `.form-error`, `.is-error`). Bootstrap form components also themed: checkboxes/radios (`.form-check`), switches (`.form-switch`), input groups (`.input-group` with `.form-control`), file upload, range (`.form-range`), date input — all get maroon brand colors automatically.
- **Bootstrap component overrides**: All Bootstrap UI components are themed with TWMC brand colors. Write standard Bootstrap markup — modals, alerts, toasts, accordions, dropdowns, tables, spinners, progress bars, pagination, tooltips all render with maroon/brand styling automatically. See `framework.html` for live demos.
- **Transitions**: Use `--duration-fast` / `--duration-normal` / `--duration-slow` tokens — never hardcode durations
- **Accessibility**: All interactive elements have `:focus-visible` states. Mega menu has focus trap and keyboard support (Tab cycles, Escape closes).

## File Structure

```
├── index.html              # Project showcase (entry point, stays at root)
├── framework.html          # Living design system reference (stays at root)
├── server.js               # Node.js static file server
├── CLAUDE.md               # Project instructions
├── style_guide.md          # Design system documentation
│
├── css/
│   ├── bootstrap.min.css   # Bootstrap 5.3.3 (untouched)
│   ├── theme.css           # TWMC brand layer
│   ├── seasonal.css        # Seasonal campaign overrides
│   └── rock-compat.css     # Rock RMS BS3 compatibility
│
├── js/
│   ├── bootstrap.bundle.min.js
│   └── theme.js            # Shared JavaScript behaviors
│
├── pages/                  # All site pages
│   ├── home.html           # Homepage
│   ├── locations.html      # Times & Locations (legacy)
│   ├── plan-your-visit.html # Times & Locations (redesign)
│   ├── grow.html           # GROW pathway - Gather
│   ├── give.html           # Giving page
│   ├── discipleship.html   # Adult Discipleship
│   ├── womens.html         # Women's Ministry
│   ├── childrens.html      # Children's Ministry
│   ├── missions.html       # Missions
│   ├── support-groups.html # Support Groups
│   ├── media.html          # Church Online, podcasts, social media
│   ├── app.html            # Mobile app showcase
│   ├── staff.html          # Staff directory
│   ├── landingpage.html    # Alternate homepage
│   ├── summer-splash.html  # Summer Splash (seasonal demo)
│   ├── Extras.html         # Extra components
│   └── 404.html            # Error page
│
├── assets/
│   └── images/             # Logos, icons, seasonal graphics
│
├── fontawesome/            # Font Awesome Pro 7.2.0 (self-hosted)
│   ├── css/all.min.css
│   └── webfonts/*.woff2
│
├── rockrms-theme-korben/   # Rock RMS production theme
│   └── Layouts/*.aspx
│
└── docs/                   # Additional documentation
    └── rock-compat-notes.md
```

**Path conventions:**
- Pages in `pages/` reference CSS/JS with `../css/`, `../js/`, `../fontawesome/`
- Pages reference images with `../assets/images/`
- Pages link to each other with relative paths (e.g., `href="home.html"`)
- Root files (index.html, framework.html) use `css/`, `js/`, `pages/` prefixes

## Adding a New Page

1. Copy the template skeleton from `pages/home.html` (location bar through footer)
2. Place the new file in `pages/`
3. Use `../css/theme.css`, `../js/theme.js`, etc. for asset paths
4. Add page-specific `<style>` in `<head>` for custom components
5. Use existing theme.css classes wherever possible
6. Add `.reveal` to content sections for scroll animations
7. Add a card for the page in `index.html` with the next ordinal number

## Git Workflow

- **Main branch**: `main`
- **Feature branches**: Create per-feature, PR into main
- **Remote**: `github.com/beardedgm/WEB-TWMC-Design-System-2026-PRD`
- **Gitignored**: `node_modules/`, `archive/`, `.claude/`

## External Assets

- **S3 bucket**: `rockrms-assets.s3.us-east-2.amazonaws.com` — hosted images (may have CORS issues in local dev)
- **Church site images**: `thewoodlandsmethodist.org/GetImage.ashx?id=...` or `GetImage.ashx?guid=...`
- **Vimeo embeds**: Used for livestream and welcome videos
- **Campuses**: The Woodlands, Woodforest, Montgomery, Creekside, Español
