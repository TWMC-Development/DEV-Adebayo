/* ============================================
   TWMC — theme.js
   Shared JavaScript for all pages
   ============================================ */

/* --------------------------------------------
   0. rAF Scroll Throttle
   -------------------------------------------- */
let scrollTicking = false;
const scrollCallbacks = [];

function addScrollHandler(callback) {
  scrollCallbacks.push(callback);
}

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      scrollCallbacks.forEach(cb => cb());
      scrollTicking = false;
    });
    scrollTicking = true;
  }
});

/* --------------------------------------------
   1. Scroll Reveal (IntersectionObserver)
   -------------------------------------------- */
let revealQueue = [];
let revealTimer = null;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      revealQueue.push(entry.target);
      observer.unobserve(entry.target);
    }
  });

  // Stagger reveals that enter at the same time (40ms apart)
  if (revealQueue.length && !revealTimer) {
    revealTimer = requestAnimationFrame(() => {
      const batch = revealQueue.splice(0);
      batch.forEach((el, i) => {
        // Only stagger if element doesn't already have a custom delay
        if (!el.style.animationDelay && !el.style.transitionDelay) {
          el.style.transitionDelay = `${i * 40}ms`;
        }
        el.classList.add('visible');
        // Clean up delay after transition completes
        el.addEventListener('transitionend', () => {
          el.style.transitionDelay = '';
        }, { once: true });
      });
      revealTimer = null;
    });
  }
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* --------------------------------------------
   2. Navbar Scroll Shadow
   -------------------------------------------- */
const navbar = document.getElementById('navbar');
if (navbar) {
  addScrollHandler(() => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* --------------------------------------------
   3. Mobile Menu Toggle
   -------------------------------------------- */
const toggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

function closeMobileMenu() {
  if (!toggle || !navLinks) return;
  navLinks.classList.remove('open');
  const spans = toggle.querySelectorAll('span');
  spans[0].style.transform = 'none';
  spans[1].style.opacity = '1';
  spans[2].style.transform = 'none';
}

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      closeMobileMenu();
    }
  });

  // Close mobile menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

/* --------------------------------------------
   4. Unified Navigation Panel
   Uses Bootstrap offcanvas JS — we just add polish:
   stagger animation on links when panel opens.
   Bootstrap handles: open/close, backdrop, focus trap, Escape key, body scroll lock.
   -------------------------------------------- */
const siteNav = document.getElementById('siteNav');
if (siteNav) {
  siteNav.addEventListener('shown.bs.offcanvas', () => {
    // Stagger link entrance animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const links = siteNav.querySelectorAll('.nav-primary a, .nav-section-links a, .nav-featured a');
    links.forEach((link, i) => {
      link.style.opacity = '0';
      link.style.transform = 'translateX(12px)';
      setTimeout(() => {
        link.style.transition = `opacity 0.25s ${i * 20}ms, transform 0.25s ${i * 20}ms var(--ease-out)`;
        link.style.opacity = '1';
        link.style.transform = 'translateX(0)';
      }, 30);
    });
  });

  siteNav.addEventListener('hidden.bs.offcanvas', () => {
    // Reset link styles for next open
    const links = siteNav.querySelectorAll('.nav-primary a, .nav-section-links a, .nav-featured a');
    links.forEach(link => {
      link.style.opacity = '';
      link.style.transform = '';
      link.style.transition = '';
    });
  });
}

/* --------------------------------------------
   5. Parallax (index.html — homepage flowers)
   -------------------------------------------- */
const parallaxLayers = document.querySelectorAll('.parallax');
if (parallaxLayers.length) {
  // Ease-out curve for smoother parallax feel
  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  addScrollHandler(() => {
    const scrolled = window.scrollY;
    const maxScroll = 800; // normalize within hero range
    const progress = Math.min(scrolled / maxScroll, 1);
    const eased = easeOut(progress) * maxScroll;

    parallaxLayers.forEach(layer => {
      const speed = layer.dataset.speed;
      layer.style.transform = `translateY(${eased * speed * 0.3}px)`;
    });
  });
}

/* --------------------------------------------
   6. Image Placeholder Fallback (global)
   -------------------------------------------- */
function createPlaceholder(img) {
  const alt = img.alt || 'Image';
  const parent = img.parentElement;

  // Determine if inside a dark section
  const isDark = img.closest('.lp-campuses, .lp-hero, .page-hero, .enews-cta, [class*="dark"]');

  const placeholder = document.createElement('div');
  placeholder.className = 'img-placeholder' + (isDark ? ' img-placeholder--dark' : '');
  placeholder.innerHTML =
    '<div class="img-placeholder-icon"><i class="fas fa-image"></i></div>' +
    '<span class="img-placeholder-label">' + alt + '</span>';

  // Match the image dimensions if set
  if (img.width) placeholder.style.width = img.width + 'px';
  if (img.height) placeholder.style.height = img.height + 'px';

  img.replaceWith(placeholder);
}

// Catch images that already failed before JS loaded
document.querySelectorAll('img').forEach(img => {
  if (img.complete && img.naturalWidth === 0 && img.src) {
    createPlaceholder(img);
  }
});

// Catch images that fail after JS loads
document.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG') {
    createPlaceholder(e.target);
  }
}, true);

/* --------------------------------------------
   7. FAQ Accordion (give.html)
   -------------------------------------------- */
const faqQuestions = document.querySelectorAll('.faq-question');
if (faqQuestions.length) {
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------
   8. Connect Tabs (womens.html, discipleship.html)
   -------------------------------------------- */
const connectTabs = document.querySelectorAll('.connect-tab');
const tabPanels = document.querySelectorAll('.tab-panel');

if (connectTabs.length) {
  connectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Deactivate all
      connectTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.classList.remove('active'));

      // Activate clicked
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const target = document.getElementById(tab.dataset.tab);
      target.classList.add('active');

      // Re-trigger reveal animations for new panel cards
      target.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        observer.observe(el);
      });
    });
  });
}
