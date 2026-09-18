# Missions Gala 2026 — Rock RMS block

`missions-gala-2026-rock-block.html` is the single-block version of the gala content. It includes the responsive styles, mobile carousels, position indicators, and interaction JavaScript. The Rock website supplies the global header and footer. The block does not contain document-level `<html>`, `<head>`, or `<body>` tags.

## Install in Rock

1. Extract `missions-gala-2026-rock-images.zip`.
2. Upload the ZIP's `Missions Gala` folder contents to `/Content/Missions Gala/` in Rock. Preserve the exact filenames and capitalization.
3. Open `missions-gala-2026-rock-block.html` in a text editor and copy its complete contents.
4. Paste it into one Rock HTML content block using the block's HTML/source editor.
5. Save and test the page at desktop and mobile widths.

All five **Register** buttons link to https://thewoodlandsmethodist.ejoinme.org/registration.

## Rebuild after source changes

Run:

```bash
python3 build-missions-gala-rock.py
```

The builder regenerates the HTML block, upload folder, and image ZIP from the current `Missions Gala 2026/missions-gala-2026.html` source without modifying it.
