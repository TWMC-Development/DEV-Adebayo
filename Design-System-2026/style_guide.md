# The Woodlands Methodist Church — Style Guide

> Design system for the current TWMC site build.
> Covers the live homepage (`home.html`), the shared theme layer (`theme.css`, `theme.js`), and all page templates.

---

## 1. Brand Colors

### Color Roles

| Role | Token | Hex | Bootstrap Class | Usage |
|------|-------|-----|----------------|-------|
| **Primary** | `--maroon` | `#6e3140` | `.btn-primary`, `.btn-outline-primary` | Main CTAs, links, headings, brand identity |
| **Secondary** | `--gold` | `#c5a258` | `.btn-secondary`, `.btn-outline-secondary` | Accents, highlights, special CTAs, badges |
| **Tertiary** | `--cream` | `#faf8f5` | — | Page backgrounds, subtle section fills |

All Bootstrap color classes are overridden in theme.css to use TWMC brand colors. Every Bootstrap semantic color (`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`) maps to a warm, muted color that harmonizes with the maroon/gold/cream palette.

**GROW pathway colors are NOT semantic** — they are reserved exclusively for their respective pathway pages (Gather, Raise, Outward, Walk).

### Brand Palette

| Token                | Hex        | Usage                              |
|----------------------|------------|-------------------------------------|
| `--maroon`           | `#6e3140`  | Primary brand color, buttons, links |
| `--maroon-light`     | `#8b4557`  | Lighter accents                     |
| `--maroon-dark`      | `#52242f`  | Dark sections, deep contrast        |
| `--maroon-hover`     | `#7d3a4c`  | Hover states on maroon elements     |
| `--gold`             | `#c5a258`  | Secondary accent, highlights, icons |
| `--gold-light`       | `#d4b87a`  | Softer gold accents, hover states   |

### Semantic Colors (warm & muted)

| Token                | Hex        | Bootstrap | Usage                              |
|----------------------|------------|-----------|-------------------------------------|
| `--success`          | `#5a8a6e`  | `.btn-success` | Confirmations, completed states |
| `--success-light`    | `#e8f0eb`  | —              | Success backgrounds             |
| `--danger`           | `#b5454a`  | `.btn-danger`  | Errors, destructive actions     |
| `--danger-light`     | `#f5e5e6`  | —              | Error backgrounds               |
| `--warning`          | `#c5a258`  | `.btn-warning` | Cautions, pending (= gold)      |
| `--warning-light`    | `#f8f0e3`  | —              | Warning backgrounds             |
| `--info`             | `#6b849e`  | `.btn-info`    | Informational, tips             |
| `--info-light`       | `#e8edf2`  | —              | Info backgrounds                |

### Neutrals

| Token                | Hex        | Usage                              |
|----------------------|------------|-------------------------------------|
| `--cream`            | `#faf8f5`  | Warm off-white backgrounds          |
| `--warm-white`       | `#ffffff`  | Default page background             |
| `--warm-gray`        | `#f5f3f0`  | Alternating section backgrounds     |
| `--warm-gray-2`      | `#eae7e3`  | Borders, dividers, hover fills      |
| `--dark`             | `#1a1a1a`  | Headings, footer background         |
| `--dark-soft`        | `#333333`  | Secondary dark text                 |
| `--text-body`        | `#555555`  | Body text                           |
| `--text-muted`       | `#888888`  | Captions, meta text                 |
| `--border-light`     | `#e8e5e1`  | Card borders, dividers              |

### GROW Pathway Colors

| Token       | Hex        | Letter | Also used as                    |
|-------------|------------|--------|---------------------------------|
| `--grow-g`  | `#7b9cc5`  | **G**  | Gather page hero accent, CTAs   |
| `--grow-r`  | `#e25b6a`  | **R**  | Raise page accent               |
| `--grow-o`  | `#3dbf87`  | **O**  | Outward page accent             |
| `--grow-w`  | `#f2c94c`  | **W**  | Walk page accent                |

Each GROW letter page uses its color as the hero background gradient and CTA button color.

#### GROW Hover Colors

| Token              | Hex        | Letter |
|--------------------|------------|--------|
| `--grow-g-hover`   | `#6889b0`  | **G**  |
| `--grow-r-hover`   | `#cc4a59`  | **R**  |
| `--grow-o-hover`   | `#33a574`  | **O**  |
| `--grow-w-hover`   | `#dab63e`  | **W**  |

GROW squares and buttons shift to their hover color variant on hover.

---

## 2. Typography

### Font Stack

| Role         | Family                              | Fallback                 |
|--------------|--------------------------------------|--------------------------|
| **Display**  | `Playfair Display`                   | Georgia, serif           |
| **Body**     | `DM Sans`                            | system-ui, sans-serif    |

Loaded via Google Fonts:
```
Playfair Display: 400, 500, 600, 700, 800 (+ italic 400–600)
DM Sans: 300, 400, 500, 600, 700 (+ italic 400)
```

### Type Scale

| Element                    | Font       | Size                          | Weight | Line-Height | Extras                       |
|----------------------------|-----------|-------------------------------|--------|-------------|-------------------------------|
| Page hero h1               | Playfair  | `clamp(40px, 6vw, 64px)`      | 700    | 1.1         | White, text-shadow on gradient heros |
| Section label              | DM Sans   | `12px`                         | 700    | —           | Uppercase, `letter-spacing: 2px`, maroon, preceded by 24px maroon bar |
| Section title              | Playfair  | `clamp(32px, 4vw, 48px)`      | 700    | 1.15        | `<em>` renders in italic maroon |
| Subsection heading         | Playfair  | `clamp(28px, 3vw, 38px)`      | 700    | 1.2         | Used for intro text h2, GROW section h2 |
| Card heading               | Playfair  | `18–20px`                      | 600    | 1.3         | Dark color                   |
| Body text                  | DM Sans   | `16px`                         | 400    | 1.65        | `--text-body`                |
| Section body text          | DM Sans   | `15px`                         | 400    | 1.7–1.75    | Used in intro paragraphs, GROW text |
| Card body text             | DM Sans   | `13–14px`                      | 400    | 1.6         | `--text-body`, line-clamped  |
| Campus badge               | DM Sans   | `12px`                         | 600    | —           | `--maroon`, `letter-spacing: 0.3px` |
| Meta text (dates, bylines) | DM Sans   | `12–13px`                      | 500    | —           | Muted color                  |
| Button label               | DM Sans   | `13–14px`                      | 600    | —           | `letter-spacing: 0.3px`     |
| Breadcrumb                 | DM Sans   | `13px`                         | 400    | —           | `rgba(255,255,255,0.6)`, links at 0.7 |
| Footer heading             | Playfair  | `18px`                         | 600    | —           | White                        |
| Footer link                | DM Sans   | `14px`                         | 400    | —           | `rgba(255,255,255,0.65)`    |

### Text Selection

```css
::selection {
  background: rgba(110, 49, 64, 0.15);
  color: var(--dark);
}
```

---

## 3. Layout & Spacing

### Implementation Model

- **Bootstrap owns structure:** responsive containers, `row`/`col-*` grid, spacing utilities, navbar expansion, offcanvas behavior, and all responsive breakpoints (`sm:576`, `md:768`, `lg:992`, `xl:1200`, `xxl:1400`)
- **TWMC theme owns identity:** colors, typography, branded components, mega menu, art direction, and page-specific styling
- **Shared files:** `theme.css` contains the unified design layer; `theme.js` contains shared site behavior on top of Bootstrap's JS bundle
- **No custom breakpoints:** All `@media` queries use Bootstrap's standard breakpoints (e.g., `max-width: 991.98px` for < lg, `max-width: 767.98px` for < md, `max-width: 575.98px` for < sm)

### Containers

| Class              | Max-Width | Padding     | Usage                              |
|--------------------|-----------|-------------|-------------------------------------|
| `.container`       | Bootstrap container | Bootstrap default + theme spacing | Standard content sections |
| `.container-xxl`   | Bootstrap wide container | Bootstrap default + theme spacing | Navbar shell, wide layouts |
| `.row` / `.col-*`  | Bootstrap grid | Bootstrap gutters | Responsive section and card layouts |

### Section Padding

| Section                        | Padding               | Mobile          |
|--------------------------------|-----------------------|-----------------|
| Homepage — What's Happening    | `80px 0`              | —               |
| Homepage — Bento Grid          | `0 0 80px`            | —               |
| Homepage — Welcome             | `80px 0`              | `60px 0`        |
| Homepage — Blog                | `80px 0`              | `56px 0`        |
| Subpage — Intro section        | `80px 0`              | `56px 0`        |
| Subpage — Connect section      | `80px 0`              | `60px 0`        |
| Subpage — Audience grid        | `80px 0`              | `56px 0`        |
| Subpage — Statement cards      | `80px 0`              | `56px 0`        |
| Subpage — Learn/testimonials   | `80px 0`              | `56px 0`        |
| Subpage — Ways to give         | `80px 0`              | `56px 0`        |
| Subpage — FAQ section          | `80px 0`              | `56px 0`        |
| Subpage — Resources (dark)     | `80px 0`              | `56px 0`        |
| E-News CTA                     | `56px 0`              | `48px 0`        |
| GROW section                   | `100px 0`             | `60px 0`        |
| Footer                         | `64px 0 40px`         | —               |

### Grid Systems

All content grids use Bootstrap's `row` / `row-cols-*` system with standard breakpoints. Custom gutter utilities (`.g-28`, `.g-32`, `.g-56`, `.g-60`) extend Bootstrap's built-in gap classes.

| Component              | Bootstrap Classes                                    | Gap    |
|------------------------|------------------------------------------------------|--------|
| Feature Cards (home)   | `row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4`    | 24px   |
| Bento Grid (home)      | `row row-cols-1 row-cols-md-2 g-4`                  | 24px   |
| Blog Grid (home)       | `row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4`    | 24px   |
| Welcome Grid (home)    | `row row-cols-1 row-cols-lg-2 align-items-center g-60` | 60px |
| Intro Grid (subpages)  | `row row-cols-1 row-cols-lg-2 align-items-center g-56` | 56px |
| Connect Cards (subpages)| `row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4`   | 24px   |
| Audience Grid (grow)   | `row row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-4 g-4` | 24px |
| Statement Cards (give) | `row row-cols-1 row-cols-lg-3 g-32`                 | 32px   |
| Learn Cards (give)     | `row row-cols-1 row-cols-md-2 g-32`                 | 32px   |
| Way Cards (give)       | `row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4`    | 24px   |
| Resources Grid (give)  | `row row-cols-1 row-cols-lg-2 align-items-center g-56` | 56px |
| Service Columns (loc)  | `row row-cols-1 row-cols-md-2 g-32`                 | 32px   |
| Campus Pair Grid (loc) | `row row-cols-1 row-cols-lg-2 g-32`                 | 32px   |
| Info Cards (loc)       | `row row-cols-1 row-cols-md-3 g-28`                 | 28px   |

**Grids that remain as CSS Grid** (cannot use Bootstrap row/col):

| Component              | Reason                                               |
|------------------------|------------------------------------------------------|
| Footer Grid            | Unequal columns (`1.5fr 1fr 1fr`)                   |
| Formation Cards        | Uses CSS `order` for alternating image/text layout   |
| Dual CTA Grid          | `::before` pseudo-element divider between items      |
| Mega Menu              | `border-right` between adjacent columns              |
| Podcast Grid (media)   | Uses `auto-fill` + `minmax()` for dynamic columns    |

### Custom Gutter Utilities

| Class   | Value | Usage |
|---------|-------|-------|
| `g-4`   | 24px  | Bootstrap built-in — most card grids |
| `.g-28` | 28px  | Info cards grid |
| `.g-32` | 32px  | Statement cards, learn cards, service columns, campus pairs |
| `.g-56` | 56px  | Intro grids, resources grid |
| `.g-60` | 60px  | Welcome grid |

---

## 4. Components

### Buttons

All buttons use `border-radius: 999px` (pill shape), `font-weight: 600`, and `letter-spacing: 0.3px`.

#### Primary Button (`.btn-primary`)
- **Background:** `--maroon` → `--maroon-hover` on hover
- **Text:** White, 14px
- **Padding:** `14px 32px`
- **Hover:** Lifts `translateY(-2px)`, shadow `0 8px 24px rgba(110,49,64,0.25)`

#### Outline Button (`.btn-outline`)
- **Border:** `1.5px solid --maroon`
- **Text:** `--maroon`, 13px
- **Padding:** `10px 22px`
- **Hover:** Fills with `--maroon`, text turns white


#### Card Link Button (`.btn-card`)
- **No background or border** — text-only link
- **Text:** `--maroon` (or `--grow-g` on Gather page), 13px
- **Icon:** Right arrow, `11px`, shifts `translateX(3px)` on card hover
- **Hover:** Gap between text and arrow widens from `8px` to `12px`

#### White Button (`.btn-white`)
- **Background:** White
- **Text:** `--dark`, 13px
- **Padding:** `12px 28px`
- **Hover:** Lifts `translateY(-2px)`, background shifts to `--gold-light`, shadow
- **Context:** Used on colored CTA bands (dual CTA, etc.)

#### GROW Accent Buttons (`.btn-grow`, `.btn-grow-r`, `.btn-grow-o`, `.btn-grow-w`)

Each GROW letter has its own button variant matching its pathway color:

| Class | Background | Hover | Text Color |
|-------|-----------|-------|------------|
| `.btn-grow` | `--grow-g` (blue) | `--grow-g-hover` | White |
| `.btn-grow-r` | `--grow-r` (red/pink) | `--grow-r-hover` | White |
| `.btn-grow-o` | `--grow-o` (green) | `--grow-o-hover` | White |
| `.btn-grow-w` | `--grow-w` (yellow) | `--grow-w-hover` | Dark |

- **Padding:** `14px 32px`
- **Hover:** Darkened shade, lifts `translateY(-2px)`, colored shadow
- **Context:** Used on GROW pathway pages as the primary CTA — use the color matching that page's letter

#### GROW Utility Classes

| Category | Classes | Usage |
|----------|---------|-------|
| Text color | `.text-grow-g`, `.text-grow-r`, `.text-grow-o`, `.text-grow-w` | Colored text accents |
| Background | `.bg-grow-g`, `.bg-grow-r`, `.bg-grow-o`, `.bg-grow-w` | Section/element backgrounds |
| Badges | `.badge-grow-g`, `.badge-grow-r`, `.badge-grow-o`, `.badge-grow-w` | Pill badges (W uses dark text) |
| Card links | `.btn-card-grow-r`, `.btn-card-grow-o`, `.btn-card-grow-w` | Card footer link colors (G already exists as default) |
| Accent bars | `.accent-grow-g::after`, `.accent-grow-r::after`, `.accent-grow-o::after`, `.accent-grow-w::after` | Subsection heading underlines |


#### Gold Button (`.btn-gold`) — Give page
- **Background:** `--gold`
- **Text:** `--dark`, 14px, weight 600
- **Padding:** `14px 32px`
- **Hover:** Background `--gold-light`, lifts `translateY(-2px)`, shadow `0 8px 24px rgba(197,162,88,0.3)`
- **Context:** Used on give page "Give Online" CTA in Ways to Give section

#### Gold CTA Button — Discipleship page
- **Background:** `--gold`
- **Text:** `--dark`, 14px
- **Padding:** `16px 36px`
- **Hover:** Background `--gold-light`, lifts, shadow
- **Context:** Used in dark discipleship sections as a high-contrast CTA

#### Outline Light Button (`.btn-outline-light`) — Give page
- **Border:** `1.5px solid rgba(255,255,255,0.3)`
- **Text:** White, 13px, weight 600
- **Padding:** `12px 28px`
- **Hover:** Background `rgba(255,255,255,0.1)`, border to `rgba(255,255,255,0.5)`, lifts `translateY(-2px)`
- **Context:** Used in dark resource sections (FPU section on give page)

---

### Disabled Buttons

All button variants support `:disabled` and `.disabled`:
- **Opacity:** `0.45`
- **Cursor:** `not-allowed`
- **Pointer-events:** `none`
- **No transform or shadow on hover**

---

### Form Inputs

Themed form styling for `input`, `textarea`, and `select` elements.

- **Font:** DM Sans, 15px
- **Border:** `1.5px solid --border-light`, `border-radius: 12px`
- **Padding:** `12px 16px`
- **Hover:** Border shifts to `--warm-gray-2`
- **Focus:** Border `--maroon`, shadow ring `0 0 0 3px rgba(110,49,64,0.12)`, no outline
- **Disabled:** Opacity 0.5, `--warm-gray` background, `cursor: not-allowed`
- **Placeholder:** `--text-muted` at 70% opacity
- **Select:** Custom chevron via SVG background-image, 40px right padding
- **Textarea:** Min-height 120px, vertical resize only

#### Form Helper Classes

| Class          | Usage                                      |
|----------------|--------------------------------------------|
| `.form-group`  | Wrapper with 20px bottom margin            |
| `.form-helper` | 13px muted hint text below input           |
| `.form-error`  | 13px red error text below input            |
| `.is-error`    | Red border + red focus ring on input       |
| `label`        | 14px bold dark, 6px bottom margin          |

#### Bootstrap Form Components (themed via theme.css)

| Component | Bootstrap Classes | Brand Styling |
|-----------|------------------|---------------|
| Checkboxes | `.form-check`, `.form-check-input` | Maroon checked bg, 1.5px border, 4px radius, maroon focus ring |
| Radios | `.form-check`, `.form-check-input[type="radio"]` | Maroon selected dot, same focus ring |
| Switches | `.form-check.form-switch` | Maroon track when on, pill radius |
| Input Groups | `.input-group`, `.input-group-text`, `.form-control` | Warm-gray addon, 12px outer radius |
| File Upload | `.form-control[type="file"]` | Warm-gray button, brand font |
| Range | `.form-range` | Maroon thumb, warm-gray track |
| Date | `input[type="date"]` | Matches text input styling |

#### Bootstrap UI Components (themed via theme.css)

| Component | Key Brand Overrides |
|-----------|-------------------|
| Modals | Playfair title, `--radius` corners, maroon close focus ring |
| Alerts | Brand palette (`alert-primary` = maroon, `alert-success` = sage, etc.), `--radius` |
| Toasts | `--shadow-card`, brand font, `--border-light` border |
| Accordions | Maroon active color, cream expanded bg, maroon arrow SVG |
| Dropdowns | `--radius`, cream hover, maroon active, inner 8px radius items |
| Tables | Brand font, cream striped rows, `--border-light` |
| Spinners | Maroon default color |
| Progress | Maroon fill, pill radius, warm-gray track |
| Pagination | Maroon active bg, brand focus ring, `--radius` corners |
| Tooltips | Dark bg, brand font 13px, 8px radius |

---

### Accessibility

- **Focus-visible:** All interactive elements have `:focus-visible` with 2px solid maroon outline, 3px offset
- **Mega menu focus trap:** Tab cycles within panel when open; Shift+Tab wraps to last element
- **Skip link:** `.skip-link` positioned offscreen, visible on focus
- **Visited links:** Blog card titles, FAQ links, and footer links show `--maroon-dark` when visited
- **Keyboard support:** Mega menu (Escape closes), FAQ accordion (Enter/Space toggles), Connect tabs

---

### Cards

#### Card Component Rules

These rules apply to **every card in the system** — whether defined in `theme.css` or in a page `<style>` block. If any are missing, the card is incomplete.

| Rule | Required value | Why |
|------|---------------|-----|
| `display` | `flex` + `flex-direction: column` for image cards; `block` for content-only cards; `grid` for split-layout cards | `<a>` is `display: inline` — without this, `border-radius`, `overflow: hidden`, and `height: 100%` all silently break |
| `border-radius` | `var(--radius)` or `var(--radius-lg)` | Rounded corners; clipped by `overflow: hidden` on the card |
| `overflow: hidden` | Required on any card with an image slot | Clips the image to the card's rounded corners |
| `height: 100%` | Required on cards inside Bootstrap `row-cols-*` grids | Stretches the card to fill its column so rows are equal height |
| `transition` | `all var(--duration-slow) var(--ease-out)` | Smooth hover lift |
| `flex: 1` on body | Required on `.{card}-body` when card is flex column | Pushes footer/meta to the bottom of the card regardless of content length |

**Image-based cards** (have a `.{card}-image` slot): `feature-card`, `blog-card`, `connect-card`, `audience-card`, `missions-card`, `bento-card`, `formation-card`
→ Use `display: flex; flex-direction: column` and add `flex: 1` to the body element.

**Content-only cards** (padding + text, no image): `statement-card`, `way-card`, `info-card`, `discipleship-card`
→ Use `display: block`.

**Structural cards** (special internal layout): `campus-card` (`display: block`, overflow for header image), `contact-card` (`display: block`, overflow for header), `learn-card` (`display: block`, overflow for embedded video)
→ Use `display: block`.

#### Bootstrap `.card` + Custom Variants

Bootstrap's `.card` intentionally omits `overflow: hidden` to avoid clipping dropdowns and tooltips that may appear inside. This is correct for Bootstrap's general-purpose card — but it means **any page-specific card built on top of Bootstrap's `.card` must add `overflow: hidden` itself** if it contains a flush top image.

```css
/* Wrong — image bleeds through rounded corners */
.card-custom {
  border-radius: var(--radius);
}

/* Correct */
.card-custom {
  border-radius: var(--radius);
  overflow: hidden;
}
```

Bootstrap gives you `display: flex; flex-direction: column` for free on `.card`, but `overflow: hidden` is always your responsibility to add.

---

#### Feature Card (`.feature-card`) — Homepage
- **Background:** `--warm-white`
- **Border:** `1px solid --border-light`
- **Border-radius:** `--radius` (16px)
- **Overflow:** Hidden
- **Hover:** Lifts `translateY(-6px)`, shadow to `--shadow-card-hover`, border transparent
- **Image container:** 200px height, `object-fit: cover`, scales to 1.05 on hover
- **Body padding:** `24px`
- **Optional badge:** Gold background, dark text, 11px uppercase, pill-shaped, top-right of image

#### Blog Card (`.blog-card`) — Homepage + Landing Page
- **Display:** `flex`, `flex-direction: column` (image-based card — meta pinned to bottom)
- **Background:** `--warm-white`
- **Border:** `1px solid --border-light`
- **Border-radius:** `--radius` (16px)
- **Overflow:** Hidden
- **Hover:** Lifts `translateY(-6px)`, shadow to `--shadow-card-hover`, border transparent
- **Image container:** 200px height, `object-fit: cover`, scales to 1.05 on hover
- **Body (`.blog-card-body`):** `24px` padding, `flex: 1` — grows to fill available space, pinning meta to the bottom
- **Heading:** Playfair Display, 20px, weight 600
- **Body text:** 14px, 3-line `-webkit-line-clamp`
- **Meta (`.blog-card-meta`):** Flexbox row, `16px 24px` padding, `border-top: 1px solid --border-light`, 36px circular avatar, author name (bold dark), date (muted 13px)

#### Bento Card (`.bento-card`) — Homepage
- **Min-height:** `400px` (340px mobile)
- **Border-radius:** `--radius-lg` (24px)
- **Background image** with gradient overlay
- **Content positioned** at bottom, white text, padded `36px`
- **Date badge:** Inline gold-background pill, 11px uppercase

#### Connect Card (`.connect-card`) — Subpages
- **Background:** `--warm-white`
- **Border:** `1px solid --border-light`
- **Border-radius:** `--radius` (16px)
- **Overflow:** Hidden, flex column
- **Hover:** Lifts `translateY(-6px)`, shadow to `--shadow-card-hover`, border transparent
- **Image container:** 200px height, `object-fit: cover`, scales to 1.05 on hover
- **Body padding:** `24px`, flex column with `flex: 1`
- **Campus badge:** Maroon text, 12px, weight 600, with map-marker-alt icon
- **Body text:** 14px, line-clamped to 3 lines
- **Footer:** `16px 24px` padding, top border, contains `.btn-card`

#### Audience Card (`.audience-card`) — Gather/GROW page
- Same structure as Connect Card but:
- **Image container:** 180px height (slightly shorter)
- **Body padding:** `20px`
- **Heading:** 18px (slightly smaller)
- **Body text:** 13px, line-clamped to 3 lines
- **Card link color:** `--grow-g` instead of `--maroon`

#### Formation Card (`.formation-card`) — Discipleship page
- **Full-width**, single column
- **Layout:** 2-column grid (`1fr 1fr`), image left / text right
- **Min-height:** `420px` (ensures uniform card height across all three cards)
- **Alternating:** `nth-child(even)` reverses image/text order via `order` property
- **Image:** `--radius-lg` corners, min-height 280px, `object-fit: cover`
- **Image sources:** Clean background photos without text overlay (`_BKG-NoStripe` variants from S3)
- **Text side:** Padded `40px`, with heading (Playfair 24px), paragraph, and CTA button
- **Hover:** Card lifts `translateY(-4px)` with shadow; image scales 1.05

#### Dark Icon Card — Discipleship page
- **Background:** Glassmorphic `rgba(255,255,255,0.06)` with `backdrop-filter: blur(12px)`
- **Border:** `1px solid rgba(255,255,255,0.08)`
- **Border-radius:** `--radius` (16px)
- **Padding:** `32px`
- **Icon:** 40px Font Awesome icon in `--gold`
- **Heading:** Playfair 20px, white
- **Body:** 14px, `rgba(255,255,255,0.7)`
- **Context:** Used inside `--maroon-dark` background sections

#### Statement Card (`.statement-card`) — Give page
- **Background:** `--warm-white`
- **Border:** `1px solid --border-light`
- **Border-radius:** `--radius` (16px)
- **Padding:** `32px`
- **Decorative:** `::before` gold top bar — `4px` height, `60px` width, centered, `--gold` background
- **Heading:** Playfair 20px, weight 600, italic, `--dark`
- **Body:** 14px, `--text-body`, line-height 1.65
- **Scripture:** 14px italic, `--text-muted`, margin-top 16px
- **Citation:** 13px bold, `--maroon`, margin-top 4px
- **Grid:** 3-column (`repeat(3, 1fr)`), `gap: 28px`
- **Responsive:** 768px → 1-col

#### Learn Card (`.learn-card`) — Give page
- **Background:** `--warm-white`
- **Border:** `1px solid --border-light`
- **Border-radius:** `--radius` (16px)
- **Overflow:** Hidden
- **Video embed:** 16:9 aspect ratio, border-radius on top corners
- **Body padding:** `24px`
- **Subtitle note:** 13px italic, `--text-muted` (for Spanish subtitle availability)
- **Body:** 14px, `--text-body`, line-height 1.65
- **Grid:** 2-column (`repeat(2, 1fr)`), `gap: 28px`
- **Responsive:** 768px → 1-col

#### Way Card (`.way-card`) — Give page
- **Background:** `--warm-white`
- **Border:** `1px solid --border-light`
- **Border-radius:** `--radius` (16px)
- **Padding:** `36px 28px`
- **Text-align:** Center
- **Icon container:** `64px × 64px` circle, `--cream` background, `--maroon` icon (24px Font Awesome)
- **Heading:** Playfair 18px, weight 600
- **Body:** 13px, `--text-body`, line-height 1.6
- **Bold links:** `--maroon`, weight 600, underline on hover
- **Grid:** 3-column (`repeat(3, 1fr)`), `gap: 24px`
- **Responsive:** 768px → 2-col, 480px → 1-col

#### Campus Card (`.campus-card`) — Locations page
- **Background:** `--warm-white`
- **Border:** `1px solid --border-light`
- **Border-radius:** `--radius` (16px)
- **Overflow:** Hidden
- **Margin-bottom:** `32px`
- **Header (`.campus-card-header`):** `--maroon` background, `24px 32px` padding, flex row with campus name (Playfair 22–28px white) and optional address badge (pill, `rgba(255,255,255,0.12)` background)
- **Body (`.campus-card-body`):** `32px` padding
- **Service columns (`.service-columns`):** 2-column grid, `gap: 32px`, stacks at 768px
- **Service group (`.service-group`):** h4 heading (Playfair 17px, gold `::after` underline), followed by service-time rows
- **Service time (`.service-time`):** Flex row, clock icon in `--maroon`, time in `--dark-soft` weight 500, venue in `--text-body` weight 400
- **Map links (`.campus-maps`):** Flex row of pill-shaped `.map-link` buttons, maroon text, `--border-light` border, hover shifts to maroon border
- **Campus pair grid (`.campus-pair-grid`):** 2-column grid for smaller campuses side-by-side, stacks at 900px

#### Info Card (`.info-card`) — Locations page
- **Background:** `--warm-white`
- **Border:** `1px solid --border-light`
- **Border-radius:** `--radius` (16px)
- **Padding:** `32px 28px`
- **Text-align:** Center
- **Icon container (`.info-icon`):** `56px × 56px`, `border-radius: 16px`, `rgba(110,49,64,0.06)` background, `--maroon` icon (22px)
- **Heading:** Playfair 18px, weight 600
- **Body:** 14px, `--text-body`
- **Links:** `--maroon`, weight 600, underline on hover
- **Grid:** 3-column, `gap: 28px`, stacks at 768px
- **Hover:** Lifts `translateY(-6px)`, shadow `--shadow-card-hover`

#### FAQ Accordion (`.faq-item`) — Give page
- **Border-bottom:** `1px solid --border-light`
- **Question (`.faq-question`):** Flex row, space-between, Playfair 18px weight 600, cursor pointer, padding `24px 0`
- **Chevron:** Font Awesome `fa-chevron-down`, 14px, `--maroon`, rotates 180° when open
- **Answer (`.faq-answer`):** `max-height: 0`, `overflow: hidden`, transition `max-height var(--duration-slow), padding var(--duration-normal)`
- **Open state:** `max-height: 800px`, `padding-bottom: 24px`
- **Body:** 15px DM Sans, `--text-body`, line-height 1.7
- **Links:** `--maroon`, underline on hover
- **JS behavior:** Click toggles `.open` class; opening one closes all others (accordion pattern)
- **Default:** First item open on page load

---

### Subpage Hero (`.page-hero`)

- **Height:** 420px (340px on ≤768px, 280px on ≤480px)
- **Display:** Flex, `align-items: flex-end`
- **Background:** Either:
  - **Image hero:** Background image with `linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.5))` overlay, plus `.page-hero-overlay` gradient from maroon tint to dark
  - **Color hero:** GROW-color gradient (e.g., `linear-gradient(135deg, #5a7fad, #7b9cc5, #a2c0de)`) with radial light accents and bottom dark gradient
- **Content:** Positioned at bottom with `padding-bottom: 48px` (32px mobile)
- **Ken Burns:** `.page-hero-bg` transitions `scale(1.03)` over 8s on hover (image heros only)
- **Contains:** Breadcrumb → h1 → optional subtitle paragraph

### Breadcrumb

- **Layout:** Flex row with `gap: 8px`
- **Font:** 13px, `rgba(255,255,255,0.6)`
- **Separator:** Font Awesome `fa-chevron-right`, 10px
- **Links:** `rgba(255,255,255,0.7)`, hover to white
- **Current page:** `<span>` (not a link)
- **Pattern:** `Home > Section > Current Page`

---

### Feature Banner (`.feature-banner`)

Full-width promotional CTA section with background image. Two layouts × two themes:

#### Layouts

**Centered (default)**
- **Layout:** `.feature-banner-inner` — centered, `max-width: 680px`, text `max-width: 560px`
- **Text alignment:** Centered

**Two-column split (`.feature-banner--split`)**
- **Layout:** Bootstrap `row row-cols-1 row-cols-lg-2 align-items-center g-56`
- **Left column:** `.feature-banner-text` — heading, paragraph, button (left-aligned)
- **Right column:** `.feature-banner-media` — image or iframe with `border-radius: var(--radius)`, `box-shadow`
- **Mobile:** Stacks to single column, text centers

#### Themes

**Dark background (default)**
- **Background:** Image via inline `style`; fallback `background-color` (e.g. `var(--maroon)`)
- **Heading:** Playfair Display, white, `clamp(2rem, 4vw, 3.2rem)`, multi-layer `text-shadow` for readability
- **Body:** DM Sans, white, `1.1rem`, `line-height: 1.75`, `text-shadow` for readability
- **Button:** `.btn-white` (preferred for contrast)
- **Key detail:** Text shadows create readability without muting the background artwork

**Light background (`.feature-banner--light`)**
- **Background:** Image via inline `style`; fallback `var(--cream)`
- **Heading:** Playfair Display, `var(--maroon)`, no text-shadow
- **Body:** DM Sans, `var(--text-body)`, no text-shadow
- **Button:** `.btn-primary` (maroon pill)

#### Shared properties (all variants)
- **Padding:** `100px 0` (72px mobile)
- **Background:** `background-size: cover`, `background-position: center`
- **Section label:** Optional — uses white/translucent on dark, maroon on light

### E-News CTA Band (`.enews-cta`)

- **Background:** `--maroon`
- **Padding:** `56px 0` (48px mobile)
- **Layout:** `.enews-inner` — flexbox, space-between, center-aligned (stacks on mobile)
- **Decorative:** Two pseudo-element circles (`::before`, `::after`) at corners, `rgba(255,255,255,0.03–0.04)`
- **Content:** h3 (Playfair, white, clamp 24–32px) + paragraph (15px, `rgba(255,255,255,0.75)`) on left, `.btn-white` on right
- **Mobile:** Stacks vertically, text centered

### Dual CTA Band (`.dual-cta`) — Gather page

- **Background:** `--grow-g` (or relevant GROW color)
- **Layout:** 2-column grid, no gap; divider via `::before` on second item
- **Each item:** `48px 56px` padding (36px 24px mobile)
- **Heading:** 12px uppercase, weight 700, `letter-spacing: 2.5px`, white
- **Body:** 15px, `rgba(255,255,255,0.85)`
- **CTA:** `.btn-white`
- **Mobile:** Stacks to 1-column with horizontal divider

---

### Connect Section (`.connect-section`) — Subpages

- **Background:** `--warm-gray`
- **Padding:** `80px 0` (60px mobile)
- **Header:** Centered section-label + section-title

#### Location Tabs (`.connect-tabs`)
- **Layout:** Flex row, centered, wraps, `gap: 8px` (6px mobile)
- **Tab buttons (`.connect-tab`):**
  - Background: `--warm-white`, border: `1.5px solid --border-light`
  - Pill-shaped, 13px, weight 600
  - Hover: border-color shifts to `--maroon`, text to `--maroon`
  - Active: `--maroon` background, white text
- **Tab panels (`.tab-panel`):** `display: none` by default, `.active` shows
- **JS behavior:** Click switches active tab, activates panel, re-triggers IntersectionObserver on new panel cards

#### Tab Content
- Cards rendered inside `.tab-panel` containers
- **Grid:** 3-column (`.connect-cards`)
- Each panel can have different cards for different campuses
- Campus badge on cards shows location (e.g., "All Campuses", "The Woodlands")

---

### Audience Grid Section (`.audience-section`) — Gather page

- **Background:** `--warm-gray`
- **Padding:** `80px 0`
- **Header:** Centered section-label + h2 + subtitle paragraph
- **Grid:** 4-column (`.audience-grid`) — responsive down to 1-column
- **Subsection divider (`.audience-subsection`):** Centered h3 (Playfair) with a 60px × 3px accent bar underneath in `--grow-g`, `margin-top: 56px`
- **Cards:** `.audience-card` — see card spec above

---

### GROW Section (`.grow-section`) — All pages

Identical across all pages. Centered layout.

- **Background:** `--warm-white`
- **Padding:** `100px 0` (60px mobile)
- **Label:** Centered section-label "Discipleship Pathway"
- **Title:** Playfair h2, clamp 28–38px
- **Squares:** 4 linked squares (`80px × 80px`, 64px mobile), GROW colors, Playfair lowercase letter, `--radius` corners
  - Hover: lift `translateY(-6px) scale(1.08)`, shadow
- **Text:** 15px body, max-width 640px, centered
- **CTA:** h4 "Ready to Get Started?" + `.btn-primary` "Start Here →"

### GROW Mini Squares (`.grow-mini`) — Gather page intro

- Smaller pathway indicators: `52px × 52px`, `border-radius: 12px`
- Active letter scaled to 1.15 with colored shadow and 3px accent bar below
- Other letters are links to their respective pathway pages
- Same GROW color scheme as main squares

---

### Intro Section (`.intro-section`) — Subpages

Used for video + text layouts at the top of subpages.

- **Background:** `--warm-white`
- **Padding:** `80px 0` (56px mobile)
- **Grid:** 2-column (`1fr 1fr`), `gap: 56px`, stacks at 900px
- **Video embed:** `--radius-lg` border-radius, `--shadow-lg`, `aspect-ratio: 16/9`
- **Text side:** h2 (Playfair, clamp 28–38px) + body paragraphs (15px) + CTA button

### Contact Sidebar — Women's page

- **Layout:** Aside column alongside intro text
- **Items:** Phone number, email link, Facebook link
- **Style:** Simple stacked list with icons, maroon accent on links

---

### Formation Section — Discipleship page

- **Background:** `--warm-gray`
- **Cards:** Full-width alternating image/text (see Formation Card above)
- **Margin between cards:** `48px`

### Dark Discipleship Section — Discipleship page

- **Background:** `--maroon-dark`
- **Text:** White headings, `rgba(255,255,255,0.7)` body
- **Cards:** 4-column grid of glassmorphic icon cards (see Dark Icon Card above)
- **Gold CTA:** Centered button below the card grid

### Resources Section (`.resources-section`) — Give page

- **Background:** `--maroon-dark` (`#52242f`)
- **Padding:** `80px 0`
- **Layout:** 2-column grid (`1fr 1fr`), `gap: 56px`, stacks at 900px
- **Image side:** `--radius-lg` rounded, `object-fit: cover`, `--shadow-lg`
- **Text side:** White heading (Playfair clamp 28–38px), body at `rgba(255,255,255,0.8)` 15px, `.btn-outline-light` CTA
- **Context:** Used for Financial Peace University promotion on Give page

### Livestream CTA Band (`.livestream-cta`) — Locations page

- **Background:** `--maroon`
- **Padding:** `56px 0` (48px mobile)
- **Text-align:** Center
- **Decorative:** Two pseudo-element circles at corners, `rgba(255,255,255,0.03)` (same pattern as E-News CTA)
- **Heading:** Playfair clamp 24–32px, white
- **Body:** 15px, `rgba(255,255,255,0.75)`
- **CTA (`.btn-white`):** White background, `--dark` text, pill-shaped, hover shifts to `--gold-light` with dark text

### FAQ Section — Give page

- **Background:** `--warm-white`
- **Padding:** `80px 0`
- **Max-width:** `800px` centered container for questions
- **Centered section label + Playfair heading**
- **Contains:** Stack of `.faq-item` accordion elements (see FAQ Accordion card spec)

---

### Location Bar

- **Background:** `--maroon`
- **Links:** `rgba(255,255,255,0.7)`, 12px uppercase, weight 500, `letter-spacing: 0.5px`
- **Active/hover:** Full white with `rgba(255,255,255,0.1)` background
- **Mobile:** Font shrinks to 10px, padding to `8px 10px`, scrolls horizontally with hidden scrollbar

### Navbar

- **Background:** `--warm-white`
- **Sticky** at `top: 0`, z-index `100`
- **Height:** `72px`
- **Border-bottom:** `1px solid --border-light`
- **Scroll shadow:** Added via JS — `0 2px 20px rgba(0,0,0,0.08)`
- **Desktop shell:** Bootstrap `navbar navbar-expand-xl navbar-twmc`
- **Container:** Bootstrap `container-xxl`
- **Logo height:** `44px`
- **Links:** 14px, weight 500, pill-shaped hover area
- **Login button:** `--maroon` background, pill-shaped, 13px, weight 600
- **Mega trigger:** 40px circle, bars icon, hover maroon tint
- **Mobile shell:** Bootstrap `offcanvas offcanvas-end offcanvas-twmc`
- **Collapse breakpoint:** Bootstrap `xl` (`<1200px`) — toggler replaces desktop nav and opens offcanvas

### Mega Menu

- **Slide-in panel** from right, `max-width: 900px`, full height
- **Background:** `--warm-white`
- **Backdrop:** `rgba(0,0,0,0.4)` with `backdrop-filter: blur(4px)`
- **3-column grid** with right borders between columns
- **Header:** Sticky, logo + 44px circular close button
- **Column headings:** Playfair, 17px, weight 600, dark, with 2px maroon bottom border
- **Links:** DM Sans, 14px, `--text-body`, `8px 12px` padding, 8px radius, hover maroon tint
- **Service links:** Include 24px thumbnail images
- **Social row:** 40px circular icon buttons, hover fills maroon
- **Sections within columns:** Separated by `.mega-section-gap` (28px top margin)
- **Transitions:** Panel `translateX(100%)` → `0`, `--duration-slow` ease-out; backdrop fades `--duration-normal`
- **Close:** Click close button, overlay, or press Escape
- **Focus trap:** Tab cycles within panel when open; focus returns to trigger on close
- **Keyboard:** Escape closes; Tab/Shift+Tab cycle through focusable elements

---

## 5. Shadows

| Token                  | Value                                                  | Usage                     |
|------------------------|---------------------------------------------------------|---------------------------|
| `--shadow-card`        | `0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)` | Cards at rest             |
| `--shadow-card-hover`  | `0 4px 12px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.10)` | Cards on hover            |
| `--shadow-lg`          | `0 20px 60px rgba(0,0,0,0.12)`                        | Mega menu, video embeds   |

---

## 6. Border Radius

| Token            | Value    | Usage                          |
|------------------|----------|--------------------------------|
| `--radius`       | `16px`   | Cards, inputs, icon cards      |
| `--radius-lg`    | `24px`   | Bento cards, video embeds, formation images |
| `--radius-pill`  | `999px`  | Buttons, badges, pills, tabs   |

---

## 7. Animation & Motion

### Easing

```
--ease-out: cubic-bezier(0.16, 1, 0.3, 1)
```

### Duration Tokens

All transitions use CSS custom property tokens — never hardcode durations.

| Token              | Value    | Usage                                    |
|--------------------|----------|------------------------------------------|
| `--duration-fast`  | `0.15s`  | Links, icons, color changes, micro-interactions |
| `--duration-normal`| `0.3s`   | Buttons, nav items, state changes        |
| `--duration-slow`  | `0.5s`   | Cards, panels, FAQ accordion             |

Scroll reveals use `0.7s` (intentionally longer for dramatic entrance).

### Scroll Reveal (`.reveal`)

- **Initial:** `opacity: 0; transform: translateY(30px)`
- **Visible:** `opacity: 1; transform: translateY(0)`
- **Duration:** `0.7s` with `--ease-out`
- **Trigger:** IntersectionObserver, threshold `0.1`, rootMargin `0px 0px -40px 0px`
- **Auto-stagger:** Multiple reveals entering at the same time are staggered 40ms apart automatically via `transitionDelay` (cleaned up after transition completes)
- **Re-trigger:** On tab switch, new tab panel cards are re-observed

### Hover Transitions

- **Cards:** `translateY(-6px)` lift, `--duration-slow`
- **Buttons:** `translateY(-2px)` lift, `--duration-normal`
- **Images:** `scale(1.05)`, 0.6s
- **Formation images:** `scale(1.03)`, 0.6s
- **Links:** Color transition, `--duration-fast`
- **Card arrows:** `translateX(3px)`, `--duration-fast`
- **GROW squares:** `translateY(-8px) scale(1.1) rotate(-2deg)`, `--duration-slow`, with per-letter hover color shift

### Parallax (Homepage only)

- Flower images on hero translate vertically at varying rates on scroll
- Applied via `requestAnimationFrame` loop with ease-out curve for natural deceleration

### Ken Burns (Subpage image heros)

- `.page-hero-bg` transitions `scale(1.03)` over `8s ease-out` on hover

---

## 8. Responsive Breakpoints

All breakpoints use Bootstrap 5.3 standard tiers. No custom breakpoints.

| Bootstrap Tier | Max-Width Query  | Behavior                                                |
|----------------|------------------|---------------------------------------------------------|
| `< xxl`        | `1399.98px`      | Audience grid drops from 4-col to 3-col                 |
| `< xl`         | `1199.98px`      | Bootstrap navbar collapses to offcanvas mobile navigation |
| `< lg`         | `991.98px`       | 3-col grids → 2-col; intro/welcome grids stack to 1-col; mobile toggle shows |
| `< md`         | `767.98px`       | Most grids to 1-col; mega menu full-width; footer stacks; page hero height reduces; dual CTA stacks |
| `< sm`         | `575.98px`       | GROW squares shrink; hero further reduces; remaining 2-col grids → 1-col; sections reduce padding |

---

## 9. Iconography

- **Icon library:** Font Awesome 6 (loaded via kit `85947205a9`)
- **Usage contexts:**
  - Navigation: `fa-bars`, `fa-times`, `fa-chevron-right`, `fa-chevron-down`
  - Social: `fa-instagram`, `fa-facebook-f`, `fa-youtube`, `fa-podcast`
  - Cards/CTAs: `fa-arrow-right` (in buttons), `fa-map-marker-alt` (campus badges), `fa-external-link-alt`
  - Contact: `fa-phone`, `fa-envelope`, `fa-church`
  - Discipleship icons: `fa-book-open`, `fa-user-friends`, `fa-male`, `fa-female`
  - Give page mission pillars: `fa-cross`, `fa-book-open`, `fa-hands-helping`
  - Give page ways-to-give: `fa-money-check-alt`, `fa-mobile-alt`, `fa-heart`, `fa-chart-line`, `fa-car`, `fa-scroll`
  - Locations page: `fa-clock` (service times), `fa-map` (campus maps), `fa-parking` (parking info), `fa-play-circle` (livestream CTA)
- **Style:** Inline with text via `<i class="fa-...">`, sized contextually (10–40px range)
- **Social icons:** 40px circles in footer and mega menu, hover fills maroon

---

## 10. Image Guidelines

### Photography Style
- Warm, inviting, community-focused
- Full-bleed hero images with parallax flower overlays (homepage) or gradient overlays (subpages)
- Card images: `object-fit: cover`, consistent container heights

### Card Image Heights

| Card Type      | Image Height |
|----------------|-------------|
| Feature card   | `200px`     |
| Blog card      | `200px`     |
| Connect card   | `200px`     |
| Audience card  | `180px`     |

### Image Sources
- Production images hosted on `rockrms-assets.s3.us-east-2.amazonaws.com/images/`
- Dynamic images via `thewoodlandsmethodist.org/GetFile.ashx?guid=...`
- Local assets in `./assets/` for logos and brand graphics

### Avatar Format
- **Size:** 40px diameter circle (`border-radius: 50%`)
- **Fit:** `object-fit: cover`
- **Usage:** Blog card author meta

### Logo
- Full-color version: `./assets/twumc-logo-fullcolor.png`
- Footer: Inverted to white via `filter: brightness(0) invert(1)`
- Navbar height: `44px`
- Footer height: `44px`
- Mega menu header height: `36px`

---

## 11. Section Anatomy

### Standard Section Pattern
```
┌─ Section background ──────────────────────────┐
│  .container                                    │
│  ┌─ .section-label ─────────────────────────┐  │
│  │  ── FEATURED                             │  │
│  └──────────────────────────────────────────┘  │
│  ┌─ .section-title ─────────────────────────┐  │
│  │  What's happening <em>this week</em>     │  │
│  └──────────────────────────────────────────┘  │
│  ┌─ Grid of cards ──────────────────────────┐  │
│  │  [ Card ]  [ Card ]  [ Card ]            │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

### Subpage Template Pattern
```
┌─ Location Bar ─────────────────────────────────┐
├─ Navbar (sticky) ──────────────────────────────┤
├─ Mega Menu (hidden, slide-in) ─────────────────┤
├─ Page Hero (breadcrumb → h1 → subtitle) ───────┤
├─ Page-specific content sections ───────────────┤
│  ├─ Intro (video + text, or text + sidebar)    │
│  ├─ Content cards (formation, icon, etc.)      │
│  ├─ Feature Banner (centered or split)         │
│  ├─ E-News CTA band  -OR-  Dual CTA band      │
│  └─ Connect section (tabbed)  -OR-  Audience   │
├─ GROW Section ─────────────────────────────────┤
└─ Footer ───────────────────────────────────────┘
```

### Section Label Pattern
- Small maroon bar (24px × 2px) followed by uppercase tracking text
- Always precedes a heading
- Color: `--maroon`
- Can be centered via `justify-content: center` on the flex container

### Section Title Pattern
- Playfair Display, fluid size `clamp(32px, 4vw, 48px)`
- Use `<em>` for italic maroon emphasis on key words
- Max-width ~700px recommended for readability

---

## 12. Footer Structure

Identical across all pages.

- **Background:** `--dark` (`#1a1a1a`)
- **Text:** `rgba(255,255,255,0.7)`
- **Grid:** 3-column (`1.5fr 1fr 1fr`), stacks on mobile
- **Brand column:** Logo (inverted white), church icon + address, phone icon + number, social icons (4 circles)
- **Link columns:** Headed by Playfair h4 (white), list of links with hover `padding-left: 4px` slide effect
- **Column 1 links:** What We Believe, Our Stories, Membership, Staff, Facilities, Employment
- **Column 2 links:** Fireside Cafe, Indoor Playgrounds, Find Help & Support, Funerals & Memorials, Venues & Bookings, My Account
- **Bottom bar:** `margin-top: 48px`, `1px solid rgba(255,255,255,0.08)` border, copyright left, GMC logo + "Member of the" right

---

## 13. JavaScript Patterns

### Shared across all pages

```javascript
// 1. Scroll Reveal — IntersectionObserver
// Adds .visible class, then unobserves
// Auto-staggers batch reveals (40ms per element)
// Cleans up transitionDelay after animation

// 2. Navbar Scroll Shadow
// Toggles .scrolled class at scrollY > 20

// 3. Bootstrap Mobile Navigation
// Bootstrap bundle powers the offcanvas mobile menu

// 4. Mega Menu Open/Close
// openMega() / closeMega() — toggles .open, locks body scroll
// Focus trap: Tab cycles within panel; focus returns to trigger on close
// Closes on: close button click, overlay click, Escape key

// 5. Parallax (Homepage)
// Ease-out curve applied for natural deceleration
// Normalizes within 800px scroll range
```

### Subpage-specific (Connect tabs)

```javascript
// Tab switching — activates clicked tab + corresponding panel
// Re-triggers IntersectionObserver on newly visible .reveal elements
```

### Subpage-specific (FAQ accordion — Give page)

```javascript
// Click .faq-question toggles .open on parent .faq-item
// Opening one item closes all others (single-open accordion)
// First item open by default on page load
// Uses max-height transition for smooth animation
```

---

## 14. Page Inventory

| File                | Page                  | Unique Sections                                    |
|---------------------|----------------------|----------------------------------------------------|
| `index.html`        | Preview / Directory  | Editorial showcase page with categorized card sections (Core, Ministry, Pathways), filter pills, scroll-triggered reveals via IntersectionObserver, header with decorative diamond motifs and gold shimmer text, card ordinals (01–10), left-accent hover bars, and tech stack footer |
| `home.html`         | Homepage             | Easter hero + parallax flowers, feature cards, bento grid, welcome, blog grid |
| `landingpage.html`  | Landing Page         | Full-screen hero video, campus spotlight grid, message cards, blog, GROW, E-News |
| `womens.html`       | Women's Ministry     | Intro text + contact sidebar, connect tabs (6 locations) |
| `discipleship.html` | Adult Discipleship   | Video intro, formation cards (alternating), dark icon cards, connect tabs |
| `grow.html`         | Gather in Community  | Video intro + GROW mini squares, dual CTA band, audience grid (4-col, 16 cards) |
| `give.html`         | Give                 | Video intro + mission pillars, statement cards (3-col), video testimonials (2x2), ways to give icon cards (3-col), FAQ accordion, FPU resources (dark section) |
| `locations.html`    | Times & Locations    | Campus cards with maroon headers + 2-col service times, map link pills, campus pair grid (Woodforest/Montgomery side-by-side), livestream CTA band, info cards (3-col) |
| `missions.html`     | Missions             | Missions hero, ministry cards, story/content sections, GROW, footer |
| `support-groups.html` | Support Groups     | Support-group content, cards, FAQs/resources, GROW, footer |
| `childrens.html`    | Children's Ministry  | NextGen-focused hero and long-form ministry content sections |

---

## 15. File Structure

```
project/
├── index.html          ← Preview / directory page
├── home.html           ← Default homepage
├── landingpage.html    ← Bootstrap landing page
├── womens.html         ← Women's Ministry subpage
├── discipleship.html   ← Adult Discipleship subpage
├── grow.html           ← Gather in Community (GROW "G" page)
├── give.html           ← Give page
├── locations.html      ← Times & Locations page
├── missions.html       ← Missions page
├── support-groups.html ← Support Groups page
├── childrens.html      ← Children's ministry page
├── framework.html      ← Living design-system reference
├── theme.css           ← Unified theme stylesheet
├── theme.js            ← Shared site JavaScript
├── server.js           ← Node.js static file server (port 3000)
├── package.json        ← Local tooling metadata
├── style_guide.md      ← This file
├── scripts/
│   └── generate_bootstrap_pages.pl
├── archive/            ← Previous design iterations
│   └── (archived HTML files and legacy exports)
├── assets/
│   ├── twumc-logo-fullcolor.png
│   ├── WOR_Easter_Text3.png
│   ├── WOR_Easter_Flower+*.png (4 parallax flowers)
│   ├── Field_Notes_State_of_the_Church_1080x1080.jpg
│   ├── CAR_LectioDivina_ConnectBlock.png
│   ├── 731ed75d_0a26_4116_ab4b_b63c35b2c916.jpg
│   ├── HiImMark_Circle360.png
│   ├── CAP_Beyond_Icon.png
│   └── CYA_House_Bug.png
```

---

## 16. Consistency Checklist for New Pages

When building a new subpage, ensure:

- [ ] **CSS variables** — Copy all `:root` tokens exactly from an existing subpage
- [ ] **Bootstrap shell** — Include Bootstrap CSS/JS bundle alongside the TWMC theme files
- [ ] **Google Fonts** — Same `<link>` tag with both Playfair Display and DM Sans
- [ ] **Font Awesome** — Same kit script `85947205a9`
- [ ] **Location bar** — 5 campus links, same order and hrefs
- [ ] **Navbar** — Same Bootstrap-backed shell: `navbar navbar-expand-xl navbar-twmc`, Login button, mega trigger, height `72px`, sticky
- [ ] **Mobile nav** — Same Bootstrap offcanvas pattern and campus chips
- [ ] **Mega menu** — Identical 3-column content, services with thumbnails, social row
- [ ] **Page hero** — Uses `.page-hero` pattern with breadcrumb
- [ ] **Section labels** — `12px` uppercase with maroon bar prefix
- [ ] **Card patterns** — Match the appropriate card spec (connect, audience, etc.)
- [ ] **Button styles** — Pill-shaped, correct padding/size per type
- [ ] **GROW section** — Identical across all pages, centered, with 4 linked squares
- [ ] **Footer** — Identical across all pages, 3-column grid, GMC bottom bar
- [ ] **Scroll reveal** — Same IntersectionObserver config (`threshold: 0.1`, `rootMargin: 0px 0px -40px 0px`)
- [ ] **Mobile breakpoints** — Same breakpoints, with navbar/offcanvas shift at Bootstrap `xl`
- [ ] **Animations** — Same easing `cubic-bezier(0.16, 1, 0.3, 1)`, use `--duration-fast` / `--duration-normal` / `--duration-slow` tokens
- [ ] **Focus states** — All interactive elements have `:focus-visible` rings
- [ ] **Form inputs** — Use themed input styles (no raw Bootstrap defaults)
- [ ] **Disabled states** — Buttons use `:disabled` styling (opacity 0.45)
