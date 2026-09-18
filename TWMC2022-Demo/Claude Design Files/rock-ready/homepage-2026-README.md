# Homepage 2026 — Rock content block

## Which file to use

- `twmc-homepage-2026-rock-hero-block.html`: hero only, including its fonts and styles.
- `twmc-homepage-2026-rock-content-block.html`: Get Connected and campuses, including their fonts, styles, icons, and campus-tab script. The static blog remains commented out.
- `../Homepage 2026/twmc-homepage-2026.html`: local full-page preview, including the template header and footer. Its local CSS links are for previewing in this project, not for pasting into Rock.

## Install with a content channel between the hero and Get Connected

Arrange these blocks in the same full-width Rock content zone:

1. **HTML Content:** paste the entire `twmc-homepage-2026-rock-hero-block.html` into the source editor.
2. **Content channel block:** configure the content you want between the sections.
3. **HTML Content:** paste the entire `twmc-homepage-2026-rock-content-block.html` into the source editor.

Each HTML file has a complete wrapper and its own styles; no tags need to span separate Rock blocks. Preserve the included styles, SVG elements, and campus-tab script. The existing Rock layout supplies the header and footer. The separate dynamic blog content-channel block can follow the campuses section as before.

Save and check the desktop and mobile layout, hero buttons, icons, and all four campus tabs. The split exports have been checked locally for balanced HTML and unique IDs, but have not been installed in Rock.

Use a Rock page with the existing TWMC theme and a full-width content zone. A constrained column or padded layout can make this homepage narrower than the preview. Icons are inline SVG and require no Font Awesome font or script.

No image ZIP is needed: the source's images and video already use remote URLs. Their availability and the Vimeo playback URL still need checking on the destination page. Site-relative links such as `/watch` resolve on the destination Rock website.

This is a static content export: the blog cards and service times remain the values in the source HTML, not live Rock content queries. The export has been checked locally but has not been installed or visually verified in Rock.

## Rebuild

After editing the preview, run `python3 build-homepage-rock-ready.py` from this folder. It regenerates only the separate hero and content blocks, leaving the preview and other Rock exports unchanged.
