"""Build the Rock HTML and asset ZIP from the current export; no server writes."""
from pathlib import Path
import hashlib
import re
import shutil
from zipfile import ZipFile, ZIP_DEFLATED

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "export/dessert-worship-2026.html"
OUTPUT = ROOT / "rock-ready"
ASSET_FOLDER = "Women"
WEB_ROOT = "/Content/Women"
UPLOAD = ROOT / "rock-upload" / ASSET_FOLDER


def asset_destination(relative):
    path = Path(relative)
    if path.name.startswith("flower-") or path.name in {
        "hero-top.png", "hero-bottom.png", "hero-left.png", "hero-right.png"
    }:
        return Path("decor") / path.name
    if path.name.startswith("icon-"):
        return Path("icons") / path.name
    if path.parts[0] == "photos":
        return Path("gallery") / path.name
    return path


def main():
    source = SOURCE.read_text()
    source_hash = hashlib.sha256(SOURCE.read_bytes()).hexdigest()
    references = sorted(set(re.findall(r"assets/[^\s\"'<>\)]+", source)))
    html = source
    copied = []
    for reference in references:
        original = SOURCE.parent / reference
        relative = asset_destination(reference.removeprefix("assets/"))
        destination = UPLOAD / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(original, destination)
        assert original.read_bytes() == destination.read_bytes()
        html = html.replace(reference, WEB_ROOT + "/" + relative.as_posix())
        copied.append(destination)

    OUTPUT.mkdir(parents=True, exist_ok=True)
    (OUTPUT / "dessert-worship-2026-rock.html").write_text(html)

    # A fragment for Rock's HTML content editor, without nested document tags.
    # Scope the export's global CSS rules to this block, preserving its design.
    head = re.search(r"<head>([\s\S]*?)</head>", html).group(1)
    css = re.search(r"<style>([\s\S]*?)</style>", head).group(1)
    css = re.sub(r"(?m)^body\{", "#dw2026{", css)
    css = re.sub(r"(?m)^a\{", "#dw2026 a{", css)
    css = re.sub(r"(?m)^a:hover\{", "#dw2026 a:hover{", css)
    css = re.sub(r"(?m)^img\{", "#dw2026 img{", css)
    css += "\n#dw2026 [hidden]{display:none!important}\n"
    links = "\n".join(re.findall(r"<link[^>]+>", head))
    body = re.search(r"<body>([\s\S]*?)</body>", html).group(1).strip()
    body = body.replace("(function(){", "(function(){\n  var root=document.getElementById('dw2026');", 1)
    body = body.replace("document.querySelectorAll(", "root.querySelectorAll(")
    fragment = (
        "<!-- Upload the contents of the ZIP's Women folder into " + WEB_ROOT + "/ first. -->\n"
        + links + "\n<style>" + css + "</style>\n"
        + '<div id="dw2026">\n' + body + "\n</div>\n"
    )
    (OUTPUT / "dessert-worship-2026-rock-block.html").write_text(fragment)

    with ZipFile(OUTPUT / "dessert-worship-2026-rock-images.zip", "w", ZIP_DEFLATED) as archive:
        for path in copied:
            archive.write(path, path.relative_to(UPLOAD.parent))

    for generated in (html, fragment):
        assert not re.search(r"(?:src=[\"']|url\([\"']?)assets/", generated)
        urls = set(re.findall(re.escape(WEB_ROOT) + r"/[^\s\"'<>\)]+", generated))
        assert len(urls) == len(references)
        assert all((UPLOAD / url.removeprefix(WEB_ROOT + "/")).is_file() for url in urls)
    assert hashlib.sha256(SOURCE.read_bytes()).hexdigest() == source_hash
    print(f"Built full HTML, paste-ready block, and upload ZIP; verified all {len(copied)} images. Source unchanged.")


if __name__ == "__main__":
    main()
