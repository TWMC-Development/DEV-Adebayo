# Homepage 2026

## Files

- `twmc-homepage-2026.html`: edit this file, preview it locally, and copy its marked sections into Rock. No build step.
- `_twmc2022_featurettes_2026_homepage.lava`: Featured Events format for a Rock content-channel block.
- `_twmc2022_blog_grid_updated_2026.lava`: Senior Pastor Blog format for a Rock content-channel block.

## Preview locally

Open `twmc-homepage-2026.html` with VS Code's Live Server, or run this command from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/twmc-homepage-2026.html`.

Internet access is needed for the hosted CSS, fonts, images and video. Shared CSS follows the hosted version, subject to browser caching. Page-specific CSS and the campus-tab script live inside the marked sections in the HTML.

Montserrat and Open Sans links intentionally appear in the preview head and each copy section, so each Rock block includes its fonts. Italic headings use the built-in Georgia font.

Featured Events and blog posts load through Rock, so they do not appear in this static preview. Campus service times are edited directly in the HTML. Site-relative navigation links such as `/home` require the Rock website and may not work locally.

## Copy into Rock

Edit and check the HTML, then arrange these blocks in the existing theme's full-width content zone:

1. **HTML Content — hero:** in the HTML file, find `START: HERO — COPY INTO ROCK`. Copy everything between that comment and its matching `END` comment, including the font links and `<style>` element, into Rock's HTML/source editor.
2. **Featured Events content channel:** use the complete `_twmc2022_featurettes_2026_homepage.lava` file in the block's Format field (or the Lava file included by that field). Keep the appropriate channel, filters, sorting and item-count settings.
3. **HTML Content — Get Connected and campuses:** find `START: GET CONNECTED AND CAMPUSES — COPY INTO ROCK`. Copy everything up to its matching `END` comment, including font links, styles, SVG icons and the campus-tab `<script>`, into a second HTML Content block.
4. **Senior Pastor Blog content channel:** use the complete `_twmc2022_blog_grid_updated_2026.lava` file as its format, preserving the existing channel settings.

Copy each marked HTML section in full when updating its Rock block. Navigation, footer, shared theme links and the outer `<main>` are outside the copy sections; Rock's layout supplies them. Edit the two Lava files separately when changing events or blog presentation.

Check desktop and mobile layouts, hero links, all four campus tabs, images/video, and the dynamic events/blog inside Rock before publishing. The local preview does not verify Rock's content-channel configuration or live rendering.
