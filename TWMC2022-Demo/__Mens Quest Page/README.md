# Mens Quest

`__mens-quest-2027.html` is the single source for the 2027 page. It contains one inline stylesheet, one inline script, all page content, and an inert template containing the Rock channel format. Quest styles are scoped to `.quest2027-page` and unique `quest2027-` component selectors; the local preview footer uses its own scope.

## Copying to Rock RMS

Use `__mens-quest-2027-ROCK-READY.html` for separate HTML Content blocks. Copy the code between each matching `ROCK BLOCK START/END` pair into its own block in this order:

1. **SHARED CSS**: paste the complete `<style id="quest2027-styles">` once above the Quest content.
2. **HERO**.
3. **INTRO**: includes the What to expect modal.
4. **SPRING 2027 SCHEDULE**.
5. **QUEST ARCHIVES**.
6. **SHARED JAVASCRIPT**: paste the complete `<script id="quest2027-script">` once after the archives.

The Rock-ready file omits the document wrapper, preview navigation/footer, framework imports, and channel markup. Both hero images already use their public S3 URLs. The existing Latest Messages Content Channel block can sit between the schedule and archives; its shared styles are in block 1. Its Format code is available in `latest-messages.lava` and inside `<template id="quest2027-rock-channel-format">` in the full preview. Copy that template's inner section, without its `<template>` tags, into Channel Configuration > Format. Rock supplies `Items` and renders the Lava loop there.

The full preview retains its own `ROCK COPY` markers, while the Rock-ready file uses the six `ROCK BLOCK` pairs above.

Each section has its own `.quest2027-page` scope, so these regions can live in separate Rock blocks. The custom archive JavaScript waits for the DOM and avoids duplicate initialization. The What to expect dialog uses Bootstrap 3's modal markup and data attributes; Rock's existing Bootstrap JavaScript and jQuery handle opening, closing, focus, Escape, and the backdrop.

Rock's theme supplies Bootstrap 3 CSS and JavaScript, jQuery, navigation, footer, fonts, and icons. Skip the document head, local preview header/footer, static message preview, and local preview dependency scripts; use the framework already loaded by Rock. All Quest-specific styles are inline; the new page does not load `seasonal.css`.

Archive video and audio recording icons use inline SVGs, so they work independently of the site's Font Awesome version, kit configuration, and icon font downloads. To apply this icon fix to an existing Rock page, replace block 1 (Shared CSS) and block 5 (Quest Archives) with the updated regions from the Rock-ready file.

The page uses Bootstrap rows and responsive columns for campus, message, and archive layouts; panels and panel bodies for cards; `btn` variants for actions; `form-inline`, `form-group`, and `form-control` for the year filter; labels for start dates; responsive embeds for video; and the Bootstrap modal. Scoped CSS supplies the Quest palette, typography, equal-height panel enhancements, and mobile message swiping. TWMC spacing helpers such as `mb-3` and `py-6` remain scoped because Bootstrap 3 does not provide those utilities.

## Hero images

Both HTML files use the public artwork URLs:

- **Background**: [Quest Feature Banner BKG 2027](https://rockrms-assets.s3.us-east-2.amazonaws.com/images/_seasonal/_mens/Quest+Feature+Banner+BKG+2027.jpg), configured by `--quest-hero-background`. The same variable supplies the hero, message-section texture, and archive transition.
- **Text overlay**: [Quest Feature Banner TXT 2027](https://rockrms-assets.s3.us-east-2.amazonaws.com/images/_seasonal/_mens/Quest+Feature+Banner+TXT+2027.png), configured by `src` on the image with `data-quest2027-asset="hero-text"`.

Keep the hero overlay at its current 75% scale.

## Preview and source files

- The nine local message cards are a snapshot captured from https://thewoodlandsmethodist.org/quest on November 18, 2026. Use the embedded channel format on Rock for automatic updates.
- `latest-messages.lava` is a convenience copy of the channel format embedded in the HTML. The HTML contains everything needed for copying.
- The archive has 17 series, six per page, a year filter, focused resource views, all 165 resource links, and the original weekly content. Resource URLs point to the public church site for local preview. The complete archive remains readable without JavaScript.
- `__men-quest-2026-fall--optionB.html` is the preserved starting page with its existing Spring 2027 schedule and previous theme.
