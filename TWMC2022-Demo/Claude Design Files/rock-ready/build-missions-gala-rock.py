"""Build a single Rock RMS HTML-block fragment for Missions Gala 2026."""

from pathlib import Path
import hashlib
import json
import re
import shutil
from urllib.parse import quote
from zipfile import ZIP_DEFLATED, ZipFile

ROOT = Path(__file__).resolve().parent.parent
SOURCE_DIR = ROOT / "Missions Gala 2026"
SOURCE = SOURCE_DIR / "missions-gala-2026.html"
OUTPUT = ROOT / "rock-ready"
UPLOAD_ROOT = ROOT / "rock-upload"
UPLOAD_RELATIVE = Path("Missions Gala")
UPLOAD = UPLOAD_ROOT / UPLOAD_RELATIVE
WEB_ROOT = "/Content/Missions%20Gala"

ASSETS = {
    "981605a8-e7e2-418b-8c23-754340587459": "MIS_Missions Gala_FeatureBannerBG.png",
    "cc6f2f3f-52a9-4d4f-9296-1eb6793c2e21": "MIS_Missions Gala_FeatureBannerLEAVES.png",
    "95c197e5-cf67-4927-92cd-8f5ac6080541": "MIS_Missions Gala_FeatureBannerLAMB.png",
    "a9a83cb5-eeae-436e-9ff7-5eb7fb8716d4": "MIS_Missions Gala_FeatureBannerTITLE.png",
    "226edae0-bacf-4b50-b008-935de8c6ff57": "660A0578.png",
}

STYLE_VARS = {
    "detailCols": "var(--mg-detail-cols)",
    "introImageOrder": "var(--mg-intro-image-order)",
    "introCols": "var(--mg-intro-cols)",
    "impactDisplay": "var(--mg-impact-display)",
    "impactOverflow": "var(--mg-impact-overflow)",
    "impactSnap": "var(--mg-impact-snap)",
    "impactFlex": "var(--mg-impact-flex)",
    "impactGap": "var(--mg-impact-gap)",
    "impactPad": "var(--mg-impact-pad)",
    "cantAttendPad": "var(--mg-cant-attend-pad)",
    "cantAttendMinH": "var(--mg-cant-attend-min-height)",
    "cantAttendImage": "var(--mg-cant-attend-image)",
    "tierDisplay": "var(--mg-tier-display)",
    "tierOverflow": "var(--mg-tier-overflow)",
    "tierSnap": "var(--mg-tier-snap)",
    "tierFlex": "var(--mg-tier-flex)",
    "tierPad": "var(--mg-tier-pad)",
    "sponsorPad": "var(--mg-sponsor-pad)",
    "sponsorGap": "var(--mg-sponsor-gap)",
    "cardPad": "var(--mg-card-pad)",
    "cardGap": "var(--mg-card-gap)",
    "cardHeadingGap": "var(--mg-card-heading-gap)",
    "cardTitleSize": "var(--mg-card-title-size)",
    "cardPriceSize": "var(--mg-card-price-size)",
    "benefitGap": "var(--mg-benefit-gap)",
    "benefitFontSize": "var(--mg-benefit-font-size)",
    "benefitLineHeight": "var(--mg-benefit-line-height)",
    "cardButtonPad": "var(--mg-card-button-pad)",
}


def extract_script(source, script_type):
    match = re.search(
        rf'<script type="{re.escape(script_type)}">(.*?)</script>', source, re.S
    )
    if not match:
        raise RuntimeError(f"Missing {script_type} script")
    return match.group(1)


def asset_url(filename):
    return f"{WEB_ROOT}/{quote(filename)}"


def replace_conditional(html, variable, css_class):
    pattern = re.compile(
        rf'<sc-if\s+value="\{{\{{\s*{re.escape(variable)}\s*\}}\}}"[^>]*>'
        rf"(.*?)</sc-if>",
        re.S,
    )
    return pattern.sub(rf'<div class="{css_class}">\1</div>', html)


def convert_component(page):
    component = re.search(r"</helmet>\s*(.*?)\s*</x-dc>", page, re.S).group(1)

    component = replace_conditional(component, "showDetailRules", "mg-wide-only")
    component = replace_conditional(
        component, "showCantAttendPhotoBand", "mg-mobile-only"
    )
    component = replace_conditional(component, "showTierNav", "mg-mobile-only")
    component = replace_conditional(component, "showImpactNav", "mg-mobile-only")

    component = component.replace('ref="{{ impactScrollRef }}"', 'id="mg-impact-scroller"')
    component = component.replace('ref="{{ tierScrollRef }}"', 'id="mg-tier-scroller"')
    component = component.replace(
        'sc-camel-on-click="{{ prevTier }}"', 'data-tier-action="previous"'
    )
    component = component.replace(
        'sc-camel-on-click="{{ nextTier }}"', 'data-tier-action="next"'
    )
    for index in range(6):
        component = component.replace(
            f'sc-camel-on-click="{{{{ impact{index} }}}}"',
            f'data-impact-index="{index}"',
        )
        dot_pattern = re.compile(
            rf'style="width:\{{\{{ impactDotWidth{index} \}}\}};height:8px;'
            rf'padding:0;border:0;border-radius:999px;background:'
            rf'\{{\{{ impactDotColor{index} \}}\}};cursor:pointer;'
            rf'transition:width 0.3s ease,background 0.3s ease"'
        )
        active = " is-active" if index == 0 else ""
        component = dot_pattern.sub(f'class="mg-impact-dot{active}"', component)

    component = component.replace("{{ tierLabel }}", '<span id="mg-tier-label">1 of 3</span>')
    for variable, replacement in STYLE_VARS.items():
        component = component.replace(f"{{{{ {variable} }}}}", replacement)

    component = re.sub(r'\s+style-hover="[^"]*"', "", component)
    for asset_id, filename in ASSETS.items():
        component = component.replace(asset_id, asset_url(filename))

    if "{{" in component or "<sc-if" in component or "<x-dc" in component:
        raise RuntimeError("Preview-only component syntax remains in generated content")

    return component


def build_css():
    return f"""
#mg2026 {{
  --mg-detail-cols:repeat(4,1fr);
  --mg-intro-image-order:0;
  --mg-intro-cols:repeat(2,minmax(0,1fr));
  --mg-impact-display:grid;
  --mg-impact-overflow:visible;
  --mg-impact-snap:none;
  --mg-impact-flex:0 1 auto;
  --mg-impact-gap:40px 28px;
  --mg-impact-pad:52px 0 0;
  --mg-cant-attend-pad:80px 48px;
  --mg-cant-attend-min-height:500px;
  --mg-cant-attend-image:linear-gradient(to right,rgba(252,239,213,.7),rgba(252,239,213,.3),rgba(252,239,213,.1)),url('https://rockrms-assets.s3.us-east-2.amazonaws.com/images/_seasonal/_missions/missionsgala-2025/MIS_Serve+it+Up+BG+Yellow.png');
  --mg-tier-display:grid;
  --mg-tier-overflow:visible;
  --mg-tier-snap:none;
  --mg-tier-flex:1 1 0;
  --mg-tier-pad:4px 0 8px;
  --mg-sponsor-pad:80px 48px;
  --mg-sponsor-gap:40px;
  --mg-card-pad:32px;
  --mg-card-gap:18px;
  --mg-card-heading-gap:8px;
  --mg-card-title-size:26px;
  --mg-card-price-size:32px;
  --mg-benefit-gap:12px;
  --mg-benefit-font-size:15px;
  --mg-benefit-line-height:1.6;
  --mg-card-button-pad:15px;
  width:100%;
  overflow-x:hidden;
  color:#1a1a1a;
  background:#fff;
  font-family:'DM Sans',Arial,sans-serif;
  font-size:16px;
  line-height:1.65;
}}
#mg2026,#mg2026 *,#mg2026 *::before,#mg2026 *::after{{box-sizing:border-box}}
#mg2026 img{{max-width:100%}}
#mg2026 a{{text-decoration:none}}
#mg2026 .mg-mobile-only{{display:none}}
#mg2026 .mg-impact-dot{{width:8px;height:8px;padding:0;border:0;border-radius:999px;background:#c8d1cd;cursor:pointer;transition:width .3s ease,background .3s ease}}
#mg2026 .mg-impact-dot.is-active{{width:24px;background:#1f4032}}
#mg2026 #mg-impact-scroller,#mg2026 #mg-tier-scroller{{scrollbar-width:thin;scrollbar-color:#c9b8bb transparent}}
@media(max-width:899px){{
  #mg2026{{
    --mg-detail-cols:1fr;
    --mg-intro-image-order:-1;
    --mg-intro-cols:1fr;
    --mg-impact-display:flex;
    --mg-impact-overflow:auto;
    --mg-impact-snap:x mandatory;
    --mg-impact-flex:0 0 78%;
    --mg-impact-gap:20px;
    --mg-impact-pad:40px 11% 12px;
    --mg-cant-attend-pad:56px 24px;
    --mg-cant-attend-min-height:0;
    --mg-cant-attend-image:none;
    --mg-tier-display:flex;
    --mg-tier-overflow:auto;
    --mg-tier-snap:x mandatory;
    --mg-tier-flex:0 0 calc(100% - 32px);
    --mg-tier-pad:4px 16px 8px;
    --mg-sponsor-pad:64px 16px;
    --mg-sponsor-gap:28px;
    --mg-card-pad:24px 20px;
    --mg-card-gap:13px;
    --mg-card-heading-gap:3px;
    --mg-card-title-size:23px;
    --mg-card-price-size:28px;
    --mg-benefit-gap:8px;
    --mg-benefit-font-size:14px;
    --mg-benefit-line-height:1.45;
    --mg-card-button-pad:12px;
  }}
  #mg2026 .mg-wide-only{{display:none}}
  #mg2026 .mg-mobile-only{{display:block}}
}}
"""


def build_script():
    return r"""
(function () {
  var root = document.getElementById('mg2026');
  if (!root) return;

  function centerItem(scroller, item) {
    if (!scroller || !item) return;
    scroller.scrollTo({
      left: item.offsetLeft - scroller.offsetLeft - (scroller.clientWidth - item.clientWidth) / 2,
      behavior: 'smooth'
    });
  }

  function closestIndex(scroller) {
    var items = Array.prototype.slice.call(scroller.children);
    var best = 0;
    var bestDistance = Infinity;
    items.forEach(function (item, index) {
      var target = item.offsetLeft - scroller.offsetLeft - (scroller.clientWidth - item.clientWidth) / 2;
      var distance = Math.abs(target - scroller.scrollLeft);
      if (distance < bestDistance) {
        best = index;
        bestDistance = distance;
      }
    });
    return best;
  }

  var impactScroller = root.querySelector('#mg-impact-scroller');
  var impactDots = Array.prototype.slice.call(root.querySelectorAll('.mg-impact-dot'));
  function updateImpact() {
    if (!impactScroller || window.innerWidth >= 900) return;
    var active = closestIndex(impactScroller);
    impactDots.forEach(function (dot, index) {
      dot.classList.toggle('is-active', index === active);
      dot.setAttribute('aria-current', index === active ? 'true' : 'false');
    });
  }
  impactDots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var index = Number(dot.getAttribute('data-impact-index'));
      centerItem(impactScroller, impactScroller.children[index]);
    });
  });
  if (impactScroller) impactScroller.addEventListener('scroll', updateImpact, { passive: true });

  var tierScroller = root.querySelector('#mg-tier-scroller');
  var tierLabel = root.querySelector('#mg-tier-label');
  function updateTier() {
    if (!tierScroller || window.innerWidth >= 900) return;
    var active = closestIndex(tierScroller);
    if (tierLabel) tierLabel.textContent = (active + 1) + ' of ' + tierScroller.children.length;
  }
  if (tierScroller) tierScroller.addEventListener('scroll', updateTier, { passive: true });
  root.querySelectorAll('[data-tier-action]').forEach(function (button) {
    button.addEventListener('click', function () {
      var active = closestIndex(tierScroller);
      var direction = button.getAttribute('data-tier-action') === 'next' ? 1 : -1;
      var target = Math.max(0, Math.min(tierScroller.children.length - 1, active + direction));
      centerItem(tierScroller, tierScroller.children[target]);
    });
  });

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateImpact();
      updateTier();
      ticking = false;
    });
  }
  if (impactScroller) impactScroller.addEventListener('scroll', onScroll, { passive: true });
  if (tierScroller) tierScroller.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateImpact();
  updateTier();
})();
"""


def main():
    source_hash = hashlib.sha256(SOURCE.read_bytes()).hexdigest()
    bundle = SOURCE.read_text()
    page = json.loads(extract_script(bundle, "__bundler/template"))
    manifest = json.loads(extract_script(bundle, "__bundler/manifest"))
    component = convert_component(page)

    UPLOAD.mkdir(parents=True, exist_ok=True)
    for filename in ASSETS.values():
        source_asset = SOURCE_DIR / filename
        destination = UPLOAD / filename
        shutil.copy2(source_asset, destination)
        if source_asset.read_bytes() != destination.read_bytes():
            raise RuntimeError(f"Asset copy failed: {filename}")

    css = build_css()
    script = build_script()
    block = f"""<!-- Missions Gala 2026: upload the supplied images to {WEB_ROOT}/ before publishing. -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&amp;family=Montserrat:wght@300;400;600;700;800&amp;family=Open+Sans:wght@400;500;600;700&amp;family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&amp;display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/0283da34b5.js" crossorigin="anonymous"></script>
<style>{css}</style>
<div id="mg2026">
{component}
</div>
<script>{script}</script>
"""

    OUTPUT.mkdir(parents=True, exist_ok=True)
    block_path = OUTPUT / "missions-gala-2026-rock-block.html"
    block_path.write_text(block)
    zip_path = OUTPUT / "missions-gala-2026-rock-images.zip"
    with ZipFile(zip_path, "w", ZIP_DEFLATED) as archive:
        for filename in ASSETS.values():
            path = UPLOAD / filename
            archive.write(path, path.relative_to(UPLOAD_ROOT))

    assertions = {
        "no preview elements": not re.search(r"</?x-dc|</?helmet|</?sc-if", block),
        "no template bindings": "{{" not in block,
        "no duplicated site chrome": "gala-site-header" not in block
        and "gala-site-footer" not in block,
        "no unresolved bundled assets": not any(
            asset_id in block for asset_id in manifest
        ),
        "all image URLs present": all(
            asset_url(filename) in block for filename in ASSETS.values()
        ),
        "all upload files present": all(
            (UPLOAD / filename).is_file() for filename in ASSETS.values()
        ),
        "source unchanged": hashlib.sha256(SOURCE.read_bytes()).hexdigest()
        == source_hash,
    }
    if not all(assertions.values()):
        raise RuntimeError(f"Build verification failed: {assertions}")
    print(
        f"Built {block_path.name} and {zip_path.name}; verified {len(ASSETS)} images."
    )


if __name__ == "__main__":
    main()
