/* ============================================
   FONT SWITCHER — Design Review Tool
   Toggle between curated font pairings.
   Selection persists in localStorage across pages.
   ============================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'twmc-font';

  const PAIRINGS = [
    {
      id: 0,
      label: 'Playfair + DM Sans',
      vibe: 'Editorial elegance',
      display: "'Playfair Display', Georgia, serif",
      body: "'DM Sans', system-ui, sans-serif",
      googleUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap'
    },
    {
      id: 1,
      label: 'Cormorant + Lato',
      vibe: 'Classic warmth',
      display: "'Cormorant Garamond', Georgia, serif",
      body: "'Lato', system-ui, sans-serif",
      googleUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap'
    },
    {
      id: 2,
      label: 'Libre Baskerville + Source Sans',
      vibe: 'Traditional authority',
      display: "'Libre Baskerville', Georgia, serif",
      body: "'Source Sans 3', system-ui, sans-serif",
      googleUrl: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'
    },
    {
      id: 3,
      label: 'Merriweather + Open Sans',
      vibe: 'Friendly readability',
      display: "'Merriweather', Georgia, serif",
      body: "'Open Sans', system-ui, sans-serif",
      googleUrl: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;0,900;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'
    },
    {
      id: 4,
      label: 'Lora + Nunito',
      vibe: 'Soft modern',
      display: "'Lora', Georgia, serif",
      body: "'Nunito', system-ui, sans-serif",
      googleUrl: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'
    },
    {
      id: 5,
      label: 'Playfair + Montserrat',
      vibe: 'Bold contemporary',
      display: "'Playfair Display', Georgia, serif",
      body: "'Montserrat', system-ui, sans-serif",
      googleUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'
    }
  ];

  // --- Apply saved pairing immediately (before paint) ---
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    const id = parseInt(saved, 10);
    if (PAIRINGS[id]) applyPairing(id, true);
  }

  function applyPairing(id, silent) {
    const p = PAIRINGS[id];
    if (!p) return;
    document.documentElement.style.setProperty('--font-display', p.display);
    document.documentElement.style.setProperty('--font-body', p.body);
    // Swap Google Fonts link
    const link = document.getElementById('google-fonts');
    if (link) link.href = p.googleUrl;
    localStorage.setItem(STORAGE_KEY, id);
    // Update active state in UI
    if (!silent) {
      document.querySelectorAll('.fs-option').forEach(function (el) {
        el.classList.toggle('fs-active', parseInt(el.dataset.id, 10) === id);
      });
    }
  }

  // --- Build UI after DOM ready ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildUI);
  } else {
    buildUI();
  }

  function buildUI() {
    // Update active state if UI was built before saved pairing applied
    const currentId = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);

    // Floating trigger button
    const trigger = document.createElement('button');
    trigger.className = 'fs-trigger';
    trigger.setAttribute('aria-label', 'Font switcher');
    trigger.innerHTML = 'Aa';
    trigger.title = 'Switch fonts';

    // Popover panel
    const panel = document.createElement('div');
    panel.className = 'fs-panel';
    panel.innerHTML = '<div class="fs-header">Typography</div>';

    PAIRINGS.forEach(function (p) {
      const opt = document.createElement('button');
      opt.className = 'fs-option' + (p.id === currentId ? ' fs-active' : '');
      opt.dataset.id = p.id;
      opt.innerHTML =
        '<span class="fs-option-label">' + p.label + '</span>' +
        '<span class="fs-option-vibe">' + p.vibe + (p.id === 0 ? ' (default)' : '') + '</span>';
      opt.addEventListener('click', function () {
        applyPairing(p.id, false);
      });
      panel.appendChild(opt);
    });

    // Toggle panel
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      panel.classList.toggle('fs-open');
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!panel.contains(e.target) && e.target !== trigger) {
        panel.classList.remove('fs-open');
      }
    });

    // Inject styles
    const style = document.createElement('style');
    style.textContent = '\
.fs-trigger {\
  position: fixed; bottom: 24px; right: 24px; z-index: 9999;\
  width: 48px; height: 48px; border-radius: 50%;\
  background: #6e3140; color: #fff; border: none; cursor: pointer;\
  font-family: Georgia, serif; font-size: 18px; font-weight: 700;\
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);\
  transition: transform 0.2s, box-shadow 0.2s;\
  display: flex; align-items: center; justify-content: center;\
}\
.fs-trigger:hover { transform: scale(1.08); box-shadow: 0 6px 24px rgba(0,0,0,0.25); }\
.fs-panel {\
  position: fixed; bottom: 84px; right: 24px; z-index: 9999;\
  width: 280px; background: #fff; border-radius: 16px;\
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);\
  opacity: 0; visibility: hidden; transform: translateY(8px);\
  transition: opacity 0.2s, visibility 0.2s, transform 0.2s;\
  overflow: hidden;\
}\
.fs-panel.fs-open { opacity: 1; visibility: visible; transform: translateY(0); }\
.fs-header {\
  padding: 16px 20px 12px; font-size: 11px; font-weight: 700;\
  text-transform: uppercase; letter-spacing: 2px; color: #6e3140;\
  border-bottom: 1px solid #f0ece8;\
}\
.fs-option {\
  display: flex; flex-direction: column; width: 100%; padding: 14px 20px;\
  border: none; background: transparent; cursor: pointer; text-align: left;\
  transition: background 0.15s;\
}\
.fs-option:hover { background: #faf8f5; }\
.fs-option.fs-active { background: rgba(110,49,64,0.06); }\
.fs-option.fs-active .fs-option-label { color: #6e3140; }\
.fs-option-label { font-size: 14px; font-weight: 600; color: #333; }\
.fs-option-vibe { font-size: 12px; color: #888; margin-top: 2px; }\
@media (max-width: 480px) {\
  .fs-panel { right: 12px; bottom: 76px; width: calc(100vw - 24px); }\
  .fs-trigger { bottom: 16px; right: 16px; }\
}';
    document.head.appendChild(style);
    document.body.appendChild(trigger);
    document.body.appendChild(panel);
  }
})();
