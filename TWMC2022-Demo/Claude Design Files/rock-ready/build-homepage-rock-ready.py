"""Export homepage content for an existing TWMC Rock layout; no server writes."""
from pathlib import Path
from html.parser import HTMLParser
import re

OUTPUT = Path(__file__).resolve().parent
SOURCE = OUTPUT.parent / "Homepage 2026/twmc-homepage-2026.html"

ICON_SHAPES = {
    "arrow-right": '<path d="M4 12h16m-7-7 7 7-7 7"/>',
    "chevron-down": '<path d="m5 9 7 7 7-7"/>',
    "location-dot": '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
    "map": '<path d="m3 5 6-3 6 3 6-3v17l-6 3-6-3-6 3V5Zm6-3v17m6-14v17"/>',
}


def inline_icon(match):
    name = match.group(1)
    return ('<svg class="tw26-icon" xmlns="http://www.w3.org/2000/svg" '
            'width="24" height="24" viewBox="0 0 24 24" fill="none" '
            'stroke="currentColor" stroke-width="2" stroke-linecap="round" '
            'stroke-linejoin="round" aria-hidden="true" focusable="false">'
            + ICON_SHAPES[name] + '</svg>')


def main():
    source = SOURCE.read_text()
    head = source.split("</head>", 1)[0]
    styles = re.findall(r"<style>(.*?)</style>", head, re.S)
    assert len(styles) == 3
    # Earlier rules describe unused older homepage sections. Keep the active
    # redesign's namespaced styles so generic rules cannot affect Rock's layout.
    marker = "/* ===== 2026 MULTI-CAMPUS HERO (redesign) — self-contained ===== */"
    styles[0] = styles[0][styles[0].index(marker):]
    def prepare_css(section_styles, wrapper_id):
        result = re.sub(r"(\.tw26-[\w-]+) i\b", r"\1 .tw26-icon", section_styles)
        result += f"\n#{wrapper_id} .tw26-icon{{display:inline-block;width:1em;height:1em;flex-shrink:0;vertical-align:-0.125em}}\n"
        result += f"\n#{wrapper_id} [hidden]{{display:none!important}}\n"
        result += f"@media(max-width:430px){{#{wrapper_id} .container-fluid{{padding-left:18px;padding-right:18px}}}}\n"
        return result

    css = prepare_css("\n".join(styles), "twmc-homepage-2026")
    fonts = "\n".join(link for link in re.findall(r"<link\b[^>]*>", head)
                      if "fonts.googleapis.com/css" in link)
    start = source.index('    <section class="tw26-hero">')
    end = source.index("    </main>", start) + len("    </main>")
    content = source[start:end]
    # Rock's layout may already contain a main landmark.
    content = content.replace("<main>", '<div class="tw26-home-content">', 1)
    content = content.replace("</main>", "</div>", 1)
    content, icon_count = re.subn(
        r'<i class="fa-(?:solid|regular) fa-([\w-]+)"></i>', inline_icon, content)
    assert icon_count > 0
    assert not re.search(r'class="[^"]*\bfa-', content)
    # Assemble in memory for validation only; export the two split blocks below.
    block = ("<!-- Homepage content validation.\n"
             "     The layout supplies navigation, footer and theme CSS. Icons are inline SVG. -->\n"
             + fonts + "\n<style>\n" + css + "\n</style>\n"
             + '<div id="twmc-homepage-2026">\n' + content + "\n</div>\n")

    class Check(HTMLParser):
        def __init__(self):
            super().__init__()
            self.ids = []
            self.stack = []
        def handle_starttag(self, tag, attrs):
            assert tag not in {"html", "head", "body", "main"}, tag
            if tag not in {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}:
                self.stack.append(tag)
            for key, value in attrs:
                if key == "id":
                    self.ids.append(value)
                if key in {"src", "href"}:
                    assert value.startswith(("https://", "http://", "/", "#", "tel:", "mailto:")), value
        def handle_endtag(self, tag):
            if tag in {"img", "link", "source", "br", "hr"}:
                return
            assert self.stack and self.stack.pop() == tag, f"Unbalanced closing tag: {tag}"

    check = Check()
    check.feed(block)
    assert not check.stack
    assert len(check.ids) == len(set(check.ids))
    assert "navbar-twmc" not in block and "footer-wrapper-twmc" not in block
    assert "jquery" not in block and "bootstrap.min.js" not in block
    assert ":root" not in css and "../../" not in block
    for section in ("tw26-hero", "tw26-min", "tw26-campus", "tw26-blog"):
        assert f'<section class="{section}"' in block
    assert block.count('role="tab"') == 4
    assert block.count('class="tw26-campus__panel"') == 4
    assert block.count('<svg class="tw26-icon"') == icon_count

    # Each split export is a complete fragment; no wrapper spans Rock blocks.
    split_at = content.index('<div class="tw26-home-content">')
    hero_content, lower_content = content[:split_at], content[split_at:]
    min_start = styles[0].index('.tw26-min{')
    min_end = styles[0].index('.tw26-hero__chips {', min_start)
    hero_css = styles[0][:min_start] + styles[0][min_end:]
    lower_css = styles[0][min_start:min_end] + "\n" + "\n".join(styles[1:])
    split_ids = []
    for name, wrapper_id, markup, section_css in (
        ("hero", "twmc-homepage-2026-hero", hero_content, hero_css),
        ("content", "twmc-homepage-2026-content", lower_content, lower_css),
    ):
        fragment = (
            f"<!-- Homepage {name}: paste this entire file into its own full-width Rock HTML block. -->\n"
            + fonts + "\n<style>\n" + prepare_css(section_css, wrapper_id) + "\n</style>\n"
            + f'<div id="{wrapper_id}">\n' + markup.strip() + "\n</div>\n"
        )
        fragment_check = Check()
        fragment_check.feed(fragment)
        assert not fragment_check.stack, f"Unclosed tags in {name} block"
        split_ids.extend(fragment_check.ids)
        (OUTPUT / f"twmc-homepage-2026-rock-{name}-block.html").write_text(fragment)
    assert len(split_ids) == len(set(split_ids)), "Duplicate IDs across split blocks"
    assert hero_content + lower_content == content
    assert SOURCE.read_text() == source
    print("Verified homepage sections, tab/panel counts, unique IDs, and no local asset paths or duplicate theme scripts. Source unchanged.")
    print(f"Verified {icon_count} inline SVG icons; no icon font required.")
    print("Built separate hero and content blocks; verified balanced HTML and unique IDs across both blocks.")


if __name__ == "__main__":
    main()
