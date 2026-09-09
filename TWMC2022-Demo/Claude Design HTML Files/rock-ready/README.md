# Dessert and Worship 2026 — Rock-ready export

Built from `../export/dessert-worship-2026.html`, including the latest flower placement, sizing, opacity, registration buttons, and calendar dialog.

## Install in Rock

1. Extract `dessert-worship-2026-rock-images.zip` locally. Upload the **contents** of its `Women` folder into the existing `/Content/Women/` folder on Rock, preserving the `decor`, `gallery`, and `icons` subfolders. Do not create another nested `Women` folder. The unpacked files are also available in `../rock-upload/Women/`.
2. Confirm an uploaded image opens on that website, for example `/Content/Women/decor/flower-1.png`.
3. Open `dessert-worship-2026-rock-block.html` in a text editor and copy its complete contents into the Rock HTML content block's HTML/source editor. Preserve the included `<style>` and `<script>` elements.
4. Save and refresh the page. Check the hero, gallery, and flowers; a presale ticket button should scroll to the hero, and Add to Calendar should open the calendar dialog.

`dessert-worship-2026-rock.html` is the full-document version, following the reference folder's convention. Use the `-rock-block.html` fragment when pasting inside an existing Rock page.

The URLs begin with `/Content/Women/` and resolve on the same website as the Rock page. Copying the HTML does **not** upload the images. Image filenames, extensions, and letter case must match the bundle. Opening this HTML directly from disk will not resolve the server image paths.

| Rock folder | Images |
| --- | --- |
| `/Content/Women/decor/` | `flower-1.png` through `flower-7.png`, `hero-left.png`, `hero-right.png`, `hero-top.png`, `hero-bottom.png` |
| `/Content/Women/gallery/` | `2025-1.jpg` through `2025-10.jpg` |
| `/Content/Women/icons/` | `icon-calendar.png`, `icon-clock.png`, `icon-location.png` |
| `/Content/Women/` | `hero-background.png`, `speaker-portrait.png`, `title-lockup.png` |

This bundle uses the current export's PNG background and portrait. An existing `speaker-portrait.jpg` does not satisfy the `speaker-portrait.png` path; upload the supplied PNG. The existing reference page uses some of these same asset paths, so replacing an image at a shared path also changes it on that page.

The asset copies and HTML paths are checked locally; these files have not been uploaded to Rock or checked against a live Rock page.

## Rebuild after editing the source

Run `python3 build-rock-ready.py` from this folder. It regenerates both HTML files, the asset folder, and the ZIP from the current export without modifying the source HTML.
