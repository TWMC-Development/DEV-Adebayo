# Missions Minutes 2026 — Rock HTML Content block

Use `missions-minutes-2026-rock-block.html`. Copy the **entire file** into one HTML Content block using Rock's HTML/source editor, preserving the `<link>`, `<style>`, `<script>`, and inline SVG elements.

## Install

1. Use a page with the existing TWMC website theme and a **full-width content zone**. A padded or constrained column will change the design's width. The Rock layout supplies the site navigation and footer.
2. Paste the complete block file into the HTML/source editor and save. Use only one copy of the block on the page; its element IDs must be unique.
3. Set the Rock page title to **Missions Minutes Video Archive**. Document-level title, viewport, and body markup belong to the page layout and are omitted from this block.
4. Refresh the public page and check desktop and mobile widths. Confirm that 13 cards appear, the scroll arrow moves to the archive, each card opens the matching Vimeo video, and Close, Escape, and clicking the dark backdrop dismiss the modal and stop playback.

The theme must supply the live TWMC body and heading typography and brand variables used by the standalone preview. The export deliberately omits the preview's `../../css/_LIVE_main_v1.1.70.css` link; that local path would not identify the correct stylesheet in Rock. Shared fonts and `--color-traditional` continue to come from the theme. Campaign colors, layout, spacing, and component sizing remain custom to preserve this design. The included Google Fonts link loads the same font weights as the preview.

No image upload or ZIP is needed. The banner uses the existing S3 URL, thumbnails use vumbnail.com, and playback uses player.vimeo.com. The page needs those remote services and Google Fonts to be available. The video list is static in the script's `VIDEOS` array; this export does not create a Rock content channel.

Local Chromium comparisons with all seven supplied `_LIVE` stylesheets produced pixel-identical page and modal screenshots at 1440px, 768px, and 390px, with animations paused and GPU rendering disabled. Card count, opening the modal, Escape dismissal, and global font/color inheritance were also checked. Vimeo iframe content was stubbed during screenshot checks; actual playback still needs a destination-page check.

The block has not been installed in your Rock instance. Confirm playback and that the destination editor preserves the script after saving.

## Rebuild

After updating `../Missions Minutes 2026/missions-minutes-standalone.html`, run:

```bash
python3 build-missions-minutes-rock.py
```

Run from this folder, or supply the script's full path. The builder updates only the Missions Minutes block. It leaves the standalone source and the other exports unchanged.
