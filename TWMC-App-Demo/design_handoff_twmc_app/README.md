# Handoff: TWMC Member App — 2026 Redesign

## Overview
This package is a developer handoff for the redesigned **The Woodlands Methodist Church (TWMC) member mobile app**. It re-skins the church's current Rock RMS member app onto the **2026 TWMC Design System** (maroon & gold, Playfair Display + DM Sans, warm editorial cards) while keeping full feature parity with the existing app.

The redesign covers six functional areas, reachable from a **five-tab bottom bar** (a change from the current hamburger menu):

**Home · Watch · Give · Locations · More**

## About the Design Files
The files in `prototype/` are **design references created in HTML** — a clickable prototype that demonstrates the intended look, layout, and interaction. **They are not production code to ship directly.**

Your task is to **recreate these designs in the target codebase's environment** using its established patterns and component libraries:
- If the app is being rebuilt natively, implement in **SwiftUI / Jetpack Compose**.
- If it's a cross-platform/React Native or web app, implement with the project's component system.
- If no environment exists yet, choose the most appropriate framework and implement there.

The HTML is built as "Design Components" (`.dc.html`) — a streaming-preview format used in the design tool. The `support.js` runtime and `.dc.html` wrappers are **tooling artifacts; ignore them for implementation**. What matters is the markup structure, the CSS in `prototype/ds/`, and the behavior documented below.

### How to open the prototype
1. Serve the `prototype/` folder over a local web server (needed so fonts/assets and the runtime load):
   ```bash
   cd prototype
   python3 -m http.server 8000
   ```
2. Open `http://localhost:8000/TWMC%20App%20Prototype.dc.html` — this is the **tappable prototype** (tabs, drill-ins, working give flow).
3. `TWMC App Redesign.dc.html` is a **static catalog** of every screen plus three explored Home directions (A/B/C) and the chosen "Final" combination — useful for seeing all states at once.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, radii, and shadows are final and match the TWMC Design System tokens (see Design Tokens below). Recreate the UI pixel-accurately using the codebase's libraries. Photographic/series artwork shown is real church imagery (see Assets); swap in live CMS-driven media in production.

---

## Navigation Model

- **Bottom tab bar**, 5 tabs, always visible: Home, Watch, Give, Locations, More. Active tab = maroon icon + label on a faint maroon-tinted rounded background; inactive = muted gray.
- **Home** has a distinct **maroon gradient header** (logo, notification bell, avatar, greeting). All other tabs use a plain status bar over the cream background.
- **Drill-in screens** (message detail, article detail, location detail) have a back chevron + label at the top and return to their parent tab. Tab highlighting persists across drill-ins (e.g. opening a message keeps **Watch** active; opening an article keeps **Home** active).
- On any navigation the scroll container resets to top.

### Screen → parent tab map
| Screen | Parent tab |
|---|---|
| Home | Home |
| Articles list, Article detail | Home |
| Watch (channels), Message detail | Watch |
| Give | Give |
| Locations list, Location detail | Locations |
| Profile | More |

---

## Screens / Views

### 1. Home (`view = 'home'`)
**Purpose:** Landing surface — current series, latest messages, pastor article.

**Header (maroon gradient `linear-gradient(150deg, #6e3140, #52242f)`):**
- White TWMC knockout logo (`assets/twumc-logo.png`, height 26px), bell icon, and a 30px circular avatar ("AA", `rgba(255,255,255,0.18)` fill). Tapping the avatar → More tab.
- Greeting: Playfair 700, 22px, white — "Welcome back, Adebayo." Subline 12px `rgba(255,255,255,0.65)` — "Friday, June 12 · The Woodlands Campus".

**Body (cream `#faf8f5`, 16px top padding, 20px side padding):**
- **This Sunday card** (dynamic series art): 16px radius, full-bleed `count-on-it-series.png` background with a top-to-bottom dark gradient overlay (`rgba(26,26,26,0.35)`→`0.05`→`0.8`) for legibility. Min-height 175px. Contains: a "This Sunday" pulse-dot eyebrow (`.app-live-dot`, uppercase white, animated green dot), and at the bottom: service line ("Current series / Traditional · Sun 7:45, 9:00 & 11:00 AM", 11.5px white) + a translucent "▶ Watch Live" pill (`.app-live-btn`). **This whole card is meant to be data-driven — its background swaps to the current sermon series artwork.** Tapping it → featured message detail.
- **"Latest Messages"** section head (Playfair 700 ~15px) with "All Channels" link (maroon, → Watch). Four `.app-message-item` rows: 40px round tinted bug icon + title (13px 600) + "Channel · Speaker" subline (10px muted) + chevron. Tapping a row → that message's detail.
- **"From the Senior Pastor"** section head with "All Articles" link (→ Articles). One featured article card: white, hairline border, 16px radius, 110px cover image, Playfair title, author avatar + "Rev. Mark Sorensen · May 14, 2026", "Read Article →" link. Tap → article detail.

### 2. Watch — Channels (`view = 'watch'`)
**Purpose:** Browse messages by worship style and campus.
- `.app-greeting`: "Watch & Listen" (Playfair 700 ~23px) + "Messages from every service and campus".
- **"Woodlands Campus"** section — 5 `.app-my-group` cards (white, 14px radius, soft shadow): **Chapel, Traditional, Harvest, Loft, House**. Each: 44px rounded-square tinted icon (worship "bug" PNG, or the House bug) + name (13px 600) + "Latest: …" subline + chevron.
- **"Across Our Campuses"** section — 3 cards: **Woodforest, Montgomery, Creekside**, each using the Traditional bug on its own tinted background. (Section was intentionally renamed from "Other Campuses" to avoid implying a hierarchy.)
- Tapping any channel → Message detail.

### 3. Watch — Message Detail (`view = 'sermon'`)
- Back row: "‹ {channel name}" → Watch.
- **Video card:** 16:9, 16px radius, series artwork (`count-on-it-series.png`) under an 18% dark scrim with a centered 46px translucent play button.
- Title (Playfair 700, 24px) + speaker / "Campus, style · date" meta (12px muted, two lines).
- **Actions row:** primary maroon pill **"Share"** (`.btn-primary`, `fa-share-nodes`) flexes full width + a 46px outlined circular bookmark button.
- **"More from this series"** — 2 `.app-message-item` rows with thumbnail placeholders.

### 4. Articles — List (`view = 'articles'`)
- Back row "‹ Home". `.app-greeting`: "From the Senior Pastor" + "Weekly reflections from Rev. Mark Sorensen".
- Article cards (white, 16px radius, 140px cover): Playfair title (17px 700), 2-line excerpt (12px), author avatar + "Rev. Mark Sorensen · {date}" + "Read →". Tap → Article detail.

### 5. Articles — Detail (`view = 'articleDetail'`)
- Full-bleed 190px hero image with a floating circular back button (top-left, `rgba(26,26,26,0.45)` + blur) → Articles.
- Body (20px padding): "FROM THE PASTOR" eyebrow, Playfair title (24px), author block (38px avatar, name, "date · read time") with a share icon, then body paragraphs (13.5px / 1.75 line-height, `#555`).

### 6. Locations — List (`view = 'locations'`)
- `.app-greeting`: "Locations" + "Find a campus and plan your Sunday".
- **6 location tiles** (`.app-my-group`, top-aligned, **no leading icon tile** — this was a deliberate request): bold campus name (15px 700) on top, then a maroon `fa-location-dot` pin + two-line address (12px `#555`), chevron at right. Tiles: The Woodlands, The Woodlands en Español, Woodforest, Montgomery, Creekside, Creekside en Español. Tap → Location detail.

### 7. Locations — Detail (`view = 'locationDetail'`)
- Back row "‹ Locations". Campus name (Playfair 700, 26px).
- **Address card:** white, 16px radius; 38px maroon-tinted rounded icon + street/city + "Directions →".
- **Service Times card** (`.app-service-card`): "🕐 Service Times" head; one `.app-service-row` per service (name left, time right, hairline dividers).
- **Map placeholder:** 150px, `#eae7e3` fill, `fa-map-location-dot`, "Map · {street}", "Open in Maps →". *Replace with a real map embed in production.*

### 8. Give (`view = 'give'`)
**Purpose:** Tithes & offerings — full feature parity with the current give form.
- `.app-give-header`: "Tithes & Offerings" + the brand line "Giving is about what God wants *for* you, not *from* you." (`for`/`from` in maroon italic).
- **Payer toggle:** two pills — **Person** / **Business**. Selected = maroon fill + white; unselected = white + muted. (State: `payer`.)
- **Giving Area selector:** white card showing "GIVING AREA" label + current fund; tapping cycles through funds (General, Capital Campaign - Beyond, Missions, Benevolence). In production this is a dropdown/picker. (State: `fundIdx`.)
- **Amount grid** (`.app-give-amounts`, 3×2): $25, $50, $100, $250, $500, Other. Selected amount = maroon border + tint (`.selected`). (State: `amount`.)
- **Frequency pills:** One-Time, Weekly, Bi-Weekly, 1st & 15th, Monthly, Yearly. Selected = maroon fill. (State: `freq`.)
- **Gift date** card ("6/14/2026" + calendar icon) and **Comments (optional)** card.
- **Submit:** full-width maroon pill — label is dynamic: "Give $100.00 →" (or just "Give →" when "Other" is selected).
- Footer help line with `Finance@twmc.org`.

### 9. More — Profile (`view = 'more'`)
- **Profile card:** 52px maroon gradient avatar ("AA"), name (15px 600), "The Woodlands Campus".
- Three grouped card sections, each with an uppercase muted label and a white rounded card of label/value rows (hairline dividers):
  - **Profile:** First Name, Last Name, Gender, Birth Date, Campus (some with chevron = editable picker).
  - **Contact Information:** Email, Mobile Phone.
  - **Address:** Street, City, State, Zip.
- Full-width maroon **"Save Changes"** button, then a centered red **"Sign Out"** link (`--danger #b5454a`).

---

## Interactions & Behavior
- **Tab switching:** sets the active view, resets scroll to top. Tab highlight follows the parent-tab map above.
- **Drill-in / back:** message, article, and location rows push a detail view carrying the tapped item's data; the back chevron returns to the parent list.
- **Give form:** amount, frequency, payer, and fund are independent selectable states; the submit button label recomputes from the selected amount.
- **Animations (from the design system):**
  - Screen enter: `screenFadeIn` — opacity 0→1 + 8px rise, `var(--duration-normal)` (0.3s).
  - "This Sunday" / live dot: `pulse` 2s ease-in-out infinite (opacity 1→0.3).
  - Buttons: lift `translateY(-2px)` + maroon glow shadow on hover; settle on press.
  - Cards: lift `translateY(-6px)` on hover; tab icons scale 1.1 when active.
  - Global easing: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`. Durations tokenized (0.15 / 0.3 / 0.5s).
- **Scrolling:** the screen body (`.app-screens`) scrolls; header and tab bar are fixed. Scrollbars hidden.

## State Management
A single current-view enum plus selection state drives everything:

| State | Type | Purpose |
|---|---|---|
| `view` | enum: `home, watch, sermon, articles, articleDetail, locations, locationDetail, give, more` | Which screen is showing |
| `sermon` | object (`title, speaker, meta`) + `sermonBack` label | Selected message for detail |
| `article` | object (`title, date, img, body[]`) | Selected article for detail |
| `location` | object (`name, street, city, times[]`) | Selected campus for detail |
| `amount` | string (`$25…$500, Other`) | Give amount, default `$100` |
| `freq` | string | Give frequency, default `One-Time` |
| `payer` | `Person` \| `Business` | Give payer type |
| `fundIdx` | int | Index into the funds list |

**Data the production app must fetch from Rock RMS:** current sermon series (title + artwork for the This Sunday card), latest message per channel/campus, pastor articles, campus list with service times, the signed-in member's profile/contact/address, and the giving funds list. The prototype hardcodes representative data — see `TWMC App Prototype.dc.html` logic class for the exact shape.

## Design Tokens
From `prototype/ds/colors_and_type.css` (the canonical token layer). Use these exact values.

**Brand**
- Maroon (primary): `#6e3140` · light `#8b4557` · dark `#52242f` · hover `#7d3a4c`
- Gold (secondary): `#c5a258` · light `#d4b87a`

**Neutrals (all warm — no cool grays, no pure black)**
- Cream `#faf8f5` · warm-white `#ffffff` · warm-gray `#f5f3f0` · warm-gray-2 `#eae7e3`
- Dark `#1a1a1a` · dark-soft `#333333` · body text `#555555` · muted `#767676` · border `#e8e5e1`

**Semantic (muted/warm)**
- success `#5a8a6e` · danger `#b5454a` · warning/gold `#c5a258` · info `#6b849e`

**GROW pathway colors** (`#7b9cc5 / #e25b6a / #3dbf87 / #f2c94c`) are **reserved for discipleship-pathway pages only — do not use as general accents.**

**Typography**
- Display/headings: **Playfair Display** (Georgia, serif fallback), weights 400–800; italic + maroon for emphasis words.
- Body/UI: **DM Sans** (system-ui fallback), 300–700.
- Scale: body 16px/1.65 · small 14px · section label 12px uppercase 2px tracking · card title 20px/600 · h3 clamp(28,3vw,38) · h2 clamp(32,4vw,48) · h1 clamp(40,6vw,64). In-app headings are smaller (see CSS): greeting ~23px, screen titles 24–26px, section heads ~15px.

**Radius:** cards/inputs `16px` · bento/video `24px` · pills/buttons/badges/tabs `999px`.

**Shadows (soft, layered — no hard/colored drop shadows):**
- card `0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)`
- card-hover `0 4px 12px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.10)`
- large `0 20px 60px rgba(0,0,0,0.12)`

**Motion:** ease `cubic-bezier(0.16, 1, 0.3, 1)`; durations 0.15 / 0.3 / 0.5s.

**Spacing:** app screens use 20px side padding; section rhythm on marketing surfaces is 80px desktop / 56–60px mobile.

## Assets
In `prototype/assets/` (from the TWMC Design System `assets/images/`):
- **Logos:** `twumc-logo-fullcolor.png` (primary), `twumc-logo.png` (white knockout, used in app header), `chapel-bug-c.png`.
- **Worship bug marks:** `chapel-bug-c.png`, `harvest-bug-c.png`, `loft-bug-c.png`, `traditional-bug-c.png`, and `CYA_House_Bug.png` (House / College & Young Adults).
- **People:** `MarkSorensen_headshot_full.jpg`, `HiImMark_Circle360.png` (pastor avatar).
- **Article/blog headers:** `WEB_Blog_header_2026Jan.jpg`, `WEB_Blog_header_2026Feb.jpg`, plus `Field_Notes_State_of_the_Church_1080x1080.jpg`.
- **Series art:** `count-on-it-series.png` — the current "Count on It · The Promises of God" series, used as the dynamic This Sunday background and the message-detail player art.
- **Photography:** `worship-photo.jpg`.

Icons are **Font Awesome 7** (Solid/Brands/Regular bundled in `prototype/ds/fontawesome/`). No emoji anywhere — iconography is Font Awesome only. In production, use the platform's icon set or the existing FA license.

**Fonts** load from Google Fonts (Playfair Display + DM Sans); the production site uses the same families.

## Files
- `prototype/TWMC App Prototype.dc.html` — the **interactive prototype** (all logic & screens). The `<script>` logic class at the bottom documents the exact data shapes and navigation handlers.
- `prototype/TWMC App Redesign.dc.html` — **static screen catalog** incl. Home directions A/B/C and the chosen Final.
- `prototype/ds/colors_and_type.css` — design tokens (colors, type, radius, shadow, motion).
- `prototype/ds/app.css` — component styles (`.app-*`, `.phone-*`, `.btn-primary`). Class names referenced throughout this README map to rules here.
- `prototype/ds/fontawesome/` — icon font + CSS.
- `prototype/assets/` — all imagery and brand marks.
- `prototype/support.js` — design-tool runtime; **ignore for implementation.**

---
*Questions about intended behavior or any screen state can be answered from the prototype — open it and tap through, or read the logic class in `TWMC App Prototype.dc.html`.*
