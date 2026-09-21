"""Export Missions Minutes as one Rock HTML Content block; leave source unchanged."""

from pathlib import Path
import re

OUTPUT = Path(__file__).resolve().parent
SOURCE = OUTPUT.parent / "Missions Minutes 2026" / "missions-minutes-standalone.html"


def main():
    source = SOURCE.read_text()
    head = re.search(r"<head>(.*?)</head>", source, re.S).group(1)
    body = re.search(r"<body\b[^>]*>(.*?)</body>", source, re.S).group(1).strip()
    fonts = re.findall(r'<link\b[^>]*href="https://fonts\.[^>]*>', head)
    style = re.search(r"<style>(.*?)</style>", head, re.S).group(1)
    style = style.replace("Missions Minutes — standalone block", "Missions Minutes — Rock HTML Content block")
    # Bootstrap normalizes buttons and heading line heights differently from
    # the standalone preview. Preserve those metrics without fixing the fonts.
    style += """
/* Rock/Bootstrap compatibility; intentionally scoped to this block. */
.mm-scroll-cue,.mm-close{line-height:normal;text-transform:none}
.mm-modal-meta h3{line-height:normal}
"""
    block = (
        "<!-- Missions Minutes: paste this entire file into ONE full-width Rock HTML Content block.\n"
        "     The TWMC page theme supplies the live global CSS, header, and footer.\n"
        "     Use HTML/source mode and preserve the style, script, and inline SVG elements. -->\n"
        + "\n".join(fonts) + "\n<style>" + style + "</style>\n" + body + "\n"
    )
    if re.search(r"<!doctype|</?(?:html|head|body)\b|\.\./", block, re.I):
        raise ValueError("Document wrapper or local relative path remains in export")
    destination = OUTPUT / "missions-minutes-2026-rock-block.html"
    destination.write_text(block)
    print(f"Built {destination.name}")


if __name__ == "__main__":
    main()
