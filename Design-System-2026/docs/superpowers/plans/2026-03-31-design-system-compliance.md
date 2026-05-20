# Design System Compliance — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring all sample pages into full design-system compliance and archive every removed custom component into a standalone `pages/Extras.html` file.

**Architecture:** Two categories of change. (1) Full extraction: `childrens.html` and `support-groups.html` have entire custom CSS systems (`ch-`, `sg-` prefixes) that are replaced with standard theme.css equivalents; originals archived to Extras.html. (2) In-place token fixes: `app.html`, `staff.html`, `media.html`, `landingpage.html`, `plan-your-visit.html`, and `grow.html` keep their page-specific CSS but must eliminate hardcoded values, illegal CSS Grid usage, inline color styles, and non-standard breakpoints.

**Tech Stack:** Bootstrap 5.3.3, theme.css CSS tokens, Font Awesome 6, vanilla HTML/CSS — no build step.

**Key rules from CLAUDE.md:**
- No hardcoded hex colors — use `var(--maroon)`, `var(--gold)`, `var(--cream)`, etc.
- No inline `style=` with colors (background-image is the only allowed exception)
- No hardcoded transition durations — use `var(--duration-fast)` (0.15s), `var(--duration-normal)` (0.3s), `var(--duration-slow)` (0.5s)
- No CSS `display: grid` except the 5 allowed: footer, formation cards, dual CTA, mega menu, podcast grid
- No custom breakpoints — only 576px, 768px, 992px, 1200px, 1400px
- No `var(--token, #fallback)` — tokens are guaranteed; drop the fallback values
- No page-prefixed copies of shared components (`.ch-kids-enews` when `.enews-cta` exists)

---

## Task 1: Create `pages/Extras.html` scaffold

**Files:**
- Create: `pages/Extras.html`

This file is a working standalone showcase of every custom component extracted from non-compliant pages. It follows the same page shell as all other pages but uses its own `<style>` block containing the extracted CSS.

- [ ] **Step 1: Create the file**

Create `pages/Extras.html` with this exact content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Extras — Extracted Custom Components | TWMC Design System</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link id="google-fonts" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../fontawesome/css/all.min.css">
  <link rel="preload" href="../css/theme.css" as="style">
  <link href="../css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../css/theme.css">

  <style>
    /* ============================================================
       EXTRAS.HTML — Archived Custom Components
       These components were extracted from page files during the
       2026-03-31 design-system compliance pass.
       They are preserved here for reference and future evaluation.
       ============================================================ */

    /* ── Section divider used in this file only ── */
    .extras-section {
      padding: 80px 0;
    }
    .extras-section + .extras-section {
      border-top: 2px dashed rgba(110,49,64,0.12);
    }
    .extras-source-label {
      display: inline-block;
      font-family: var(--font-body);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #fff;
      background: var(--maroon);
      padding: 4px 12px;
      border-radius: var(--radius-pill);
      margin-bottom: 8px;
    }

    /* ============================================================
       FROM: childrens.html
       ============================================================ */

    /* Mission list inside intro */
    .ch-mission-list {
      list-style: none;
      padding: 0;
      margin: 20px 0 16px;
    }
    .ch-mission-list li {
      font-family: var(--font-body);
      padding: 10px 0;
      font-size: 1.05rem;
      color: var(--maroon);
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .ch-mission-list li i {
      color: var(--gold);
      font-size: 1.1rem;
      width: 24px;
      text-align: center;
    }

    /* Kids E-News CTA */
    .ch-kids-enews {
      background: var(--maroon);
      padding: 48px 0;
    }
    .ch-kids-enews-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
    }
    .ch-kids-enews h3 {
      font-family: var(--font-display);
      color: #fff;
      margin: 0 0 8px;
      font-size: 1.6rem;
    }
    .ch-kids-enews p {
      font-family: var(--font-body);
      color: rgba(255,255,255,0.85);
      margin: 0;
      line-height: 1.6;
    }

    /* Programs / Accordion Section */
    .ch-programs-section {
      padding: 80px 0;
      background: var(--cream);
    }
    .ch-programs-header {
      text-align: center;
      margin-bottom: 40px;
    }
    .ch-programs-header h2 {
      font-family: var(--font-display);
      font-size: 2.2rem;
      color: var(--maroon);
    }
    .ch-programs-tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      margin-top: 24px;
    }
    .ch-programs-tab {
      font-family: var(--font-body);
      font-size: 0.9rem;
      font-weight: 600;
      padding: 10px 22px;
      border-radius: 50px;
      border: 2px solid var(--maroon);
      background: transparent;
      color: var(--maroon);
      cursor: pointer;
      transition: all var(--duration-normal) ease;
    }
    .ch-programs-tab:hover {
      background: rgba(110,49,64,0.08);
    }
    .ch-programs-tab.active {
      background: var(--maroon);
      color: #fff;
    }
    .ch-programs-panel { display: none; }
    .ch-programs-panel.active { display: block; }
    .ch-campus-label {
      font-family: var(--font-display);
      font-size: 1.3rem;
      color: var(--maroon);
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--gold);
    }
    .ch-accordion {
      max-width: 860px;
      margin: 0 auto;
    }
    .ch-accordion-item {
      background: #fff;
      border-radius: var(--radius);
      margin-bottom: 12px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(110,49,64,0.05);
    }
    .ch-accordion-trigger {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 28px;
      background: none;
      border: none;
      cursor: pointer;
      font-family: var(--font-body);
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--maroon);
      transition: background var(--duration-fast) ease;
      text-align: left;
      gap: 12px;
    }
    .ch-accordion-trigger:hover { background: rgba(110,49,64,0.03); }
    .ch-accordion-trigger .ch-acc-icon-left {
      color: var(--gold);
      font-size: 1.1rem;
      margin-right: 12px;
      width: 24px;
      text-align: center;
    }
    .ch-accordion-trigger .ch-acc-title { flex: 1; }
    .ch-accordion-trigger .ch-acc-chevron {
      transition: transform var(--duration-normal) ease;
      color: #aaa;
      font-size: 0.85rem;
    }
    .ch-accordion-item.open .ch-accordion-trigger .ch-acc-chevron { transform: rotate(180deg); }
    .ch-accordion-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height var(--duration-slow) ease;
    }
    .ch-accordion-item.open .ch-accordion-body { max-height: 1200px; }
    .ch-accordion-content {
      padding: 0 28px 24px;
      font-family: var(--font-body);
      color: var(--text-body);
      line-height: 1.75;
    }
    .ch-accordion-content p { margin-bottom: 12px; }
    .ch-accordion-content h4 {
      font-family: var(--font-body);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
      color: var(--maroon);
      margin: 20px 0 8px;
    }
    .ch-accordion-content ul { padding-left: 20px; margin-bottom: 12px; }
    .ch-accordion-content li { margin-bottom: 4px; }
    .ch-info-cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin: 16px 0;
    }
    .ch-info-card {
      background: var(--cream);
      border-radius: 12px;
      padding: 20px 24px;
      text-align: center;
      flex: 1;
      min-width: 180px;
    }
    .ch-info-card i {
      color: var(--maroon);
      font-size: 2rem;
      margin-bottom: 8px;
      display: block;
    }
    .ch-info-card h5 {
      font-family: var(--font-body);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.85rem;
      margin-bottom: 6px;
      color: var(--maroon);
    }
    .ch-info-card p { font-size: 0.9rem; margin: 0; }

    @media (max-width: 768px) {
      .ch-kids-enews-inner { flex-direction: column; text-align: center; }
      .ch-info-cards { flex-direction: column; }
    }

    /* ============================================================
       FROM: support-groups.html
       ============================================================ */

    /* Intro Section */
    .sg-intro {
      padding: 80px 0;
      background: var(--cream);
      text-align: center;
    }
    .sg-intro-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 24px;
      background: var(--warm-gray);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      color: var(--maroon);
    }
    .sg-intro h2 {
      font-family: var(--font-display);
      font-size: 2rem;
      color: var(--maroon);
      margin-bottom: 16px;
    }
    .sg-intro p {
      font-family: var(--font-body);
      font-size: 1.1rem;
      color: var(--text-body);
      max-width: 680px;
      margin: 0 auto;
      line-height: 1.7;
    }

    /* Filter Bar */
    .sg-filters {
      padding: 24px 0;
      background: #fff;
      position: sticky;
      top: 0;
      z-index: 90;
      border-bottom: 1px solid rgba(0,0,0,0.06);
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .sg-filters-inner {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .sg-filters-label {
      font-family: var(--font-body);
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--maroon);
      white-space: nowrap;
    }
    .sg-pills { display: flex; gap: 8px; flex-wrap: wrap; }
    .sg-pill {
      font-family: var(--font-body);
      font-size: 0.9rem;
      font-weight: 500;
      padding: 8px 20px;
      border-radius: 50px;
      border: 2px solid var(--warm-gray);
      background: var(--warm-gray);
      color: var(--text-body);
      cursor: pointer;
      transition: all var(--duration-normal) ease;
    }
    .sg-pill:hover { border-color: var(--maroon); color: var(--maroon); }
    .sg-pill.active { background: var(--maroon); border-color: var(--maroon); color: #fff; }
    .sg-search { position: relative; flex-shrink: 0; }
    .sg-search-input { padding-left: 40px; width: 240px; }
    .sg-search i {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
      font-size: 0.9rem;
      pointer-events: none;
    }

    /* Cards Grid */
    .sg-grid-section { padding: 60px 0 80px; background: var(--warm-gray); }
    .sg-card {
      background: #fff;
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.05);
      transition: transform var(--duration-slow) var(--ease-out), box-shadow var(--duration-slow) ease;
      display: flex;
      flex-direction: column;
    }
    .sg-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.06), 0 20px 48px rgba(110,49,64,0.12);
    }
    .sg-card.sg-hidden { display: none; }
    .sg-card-header {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 22px 24px;
      background: linear-gradient(135deg, rgba(110,49,64,0.06) 0%, rgba(197,162,88,0.06) 100%);
      border-bottom: 1px solid rgba(110,49,64,0.06);
    }
    .sg-card-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--maroon);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1rem;
      flex-shrink: 0;
      box-shadow: 0 2px 8px rgba(110,49,64,0.25);
    }
    .sg-card-name {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--dark);
      line-height: 1.3;
    }
    .sg-card-body {
      padding: 20px 24px 24px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .sg-card-schedule {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-body);
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--maroon);
      background: rgba(110,49,64,0.07);
      padding: 5px 12px;
      border-radius: var(--radius-pill);
      margin-bottom: 14px;
      width: fit-content;
    }
    .sg-card-schedule i { font-size: 0.7rem; opacity: 0.7; }
    .sg-card-desc {
      font-family: var(--font-body);
      font-size: 0.92rem;
      color: var(--text-muted);
      line-height: 1.65;
      flex: 1;
      margin-bottom: 18px;
    }
    .sg-card-link {
      font-family: var(--font-body);
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--maroon);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 18px;
      border: 2px solid var(--maroon);
      border-radius: var(--radius-pill);
      transition: all var(--duration-normal) ease;
    }
    .sg-card-link:hover { background: var(--maroon); color: #fff; gap: 10px; }
    .sg-card-link i { font-size: 0.72rem; transition: transform var(--duration-normal) ease; }
    .sg-card:hover .sg-card-link i { transform: translateX(2px); }

    /* No Results */
    .sg-no-results {
      display: none;
      flex: 0 0 100%;
      width: 100%;
      text-align: center;
      padding: 60px 20px;
      font-family: var(--font-body);
      color: #888;
      font-size: 1.1rem;
    }
    .sg-no-results i { display: block; font-size: 2.5rem; margin-bottom: 16px; color: #ccc; }
    .sg-no-results.sg-visible { display: block; }

    /* Need Help Callout */
    .sg-help { padding: 80px 0; background: var(--cream); }
    .sg-help-card {
      max-width: 680px;
      margin: 0 auto;
      background: #fff;
      border-radius: var(--radius-lg);
      padding: 48px 40px;
      text-align: center;
      border: 1px solid rgba(0,0,0,0.06);
      box-shadow: var(--shadow-card);
    }
    .sg-help-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 20px;
      background: var(--warm-gray);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      color: var(--maroon);
    }
    .sg-help-card h3 {
      font-family: var(--font-display);
      font-size: 1.6rem;
      color: var(--maroon);
      margin-bottom: 12px;
    }
    .sg-help-card p {
      font-family: var(--font-body);
      font-size: 1.05rem;
      color: var(--text-body);
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .sg-help-contact {
      display: flex;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap;
      margin-bottom: 28px;
      font-family: var(--font-body);
    }
    .sg-help-contact a {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1rem;
      font-weight: 600;
      color: var(--maroon);
      text-decoration: none;
      transition: color var(--duration-fast) ease;
    }
    .sg-help-contact a:hover { color: var(--gold); }
    .sg-help-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-body);
      font-size: 1rem;
      font-weight: 700;
      padding: 14px 32px;
      border-radius: 50px;
      background: var(--maroon);
      color: #fff;
      text-decoration: none;
      transition: background var(--duration-normal) ease, transform var(--duration-normal) ease;
    }
    .sg-help-btn:hover { background: var(--maroon-hover); transform: translateY(-2px); }

    @media (max-width: 768px) {
      .sg-intro { padding: 56px 0; }
      .sg-intro h2 { font-size: 1.6rem; }
      .sg-filters-inner { flex-direction: column; gap: 12px; }
      .sg-pills { justify-content: center; }
      .sg-search-input { width: 100%; min-width: 260px; }
      .sg-grid-section { padding: 40px 0 60px; }
      .sg-help-card { padding: 36px 24px; }
      .sg-help-contact { flex-direction: column; align-items: center; gap: 16px; }
    }
  </style>
</head>

<body>

  <a class="skip-link" href="#main-content">Skip to content</a>

  <div class="location-bar">
    <a href="home.html" class="active">The Woodlands</a>
    <a href="#">Woodforest</a>
    <a href="#">Montgomery</a>
    <a href="#">Creekside</a>
    <a href="#">Español</a>
  </div>

  <header class="navbar navbar-expand-xl py-0 navbar-twmc" id="navbar">
    <div class="container-xxl px-4">
      <a class="navbar-brand py-3 me-3" href="home.html">
        <img src="../assets/images/twumc-logo-fullcolor.png" alt="The Woodlands Methodist Church">
      </a>
      <nav class="d-none d-xl-flex align-items-center ms-auto">
        <a class="nav-link" href="locations.html">Times &amp; Locations</a>
        <a class="nav-link" href="#">Visit</a>
        <a class="nav-link" href="grow.html">Grow</a>
        <a class="nav-link" href="#">Messages</a>
        <a class="nav-link" href="#">Serve</a>
        <a class="nav-link" href="give.html">Give</a>
      </nav>
      <div class="d-flex align-items-center gap-2 ms-xl-3 ms-auto">
        <a href="https://twmc.org/login" class="btn btn-primary btn-sm btn-login d-none d-xl-inline-flex">Login</a>
        <button class="mega-trigger" type="button" data-bs-toggle="offcanvas" data-bs-target="#siteNav" aria-controls="siteNav" aria-label="Open navigation">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- OFFCANVAS NAV — copy from home.html -->

  <main id="main-content">

    <!-- ============================================================
         PAGE HEADER
         ============================================================ -->
    <section class="page-hero">
      <div class="page-hero-bg" style="background-image: url('../assets/images/twumc-main-campus.jpg');"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <div class="container">
          <span class="section-label">Archive</span>
          <h1>Extras — <em>Extracted Components</em></h1>
          <p class="page-hero-sub">Custom components removed from pages during the 2026 design-system compliance pass. Preserved here for reference.</p>
        </div>
      </div>
    </section>

    <!-- ============================================================
         FROM: childrens.html
         ============================================================ -->
    <section class="extras-section bg-cream">
      <div class="container">
        <span class="extras-source-label">From: childrens.html</span>
        <h2 class="section-title mb-5">Children's Ministry <em>Custom Components</em></h2>

        <!-- ch-mission-list -->
        <h3 class="h5 text-maroon mb-3">Mission List (ch-mission-list)</h3>
        <ul class="ch-mission-list mb-5">
          <li><i class="fas fa-cross"></i> Faith Formation through Biblical Teaching</li>
          <li><i class="fas fa-hands-praying"></i> Age-Appropriate Worship Experiences</li>
          <li><i class="fas fa-users"></i> Safe, Nurturing Community</li>
          <li><i class="fas fa-heart"></i> Partnership with Families</li>
        </ul>

        <!-- ch-info-cards -->
        <h3 class="h5 text-maroon mb-3">Info Cards (ch-info-cards)</h3>
        <div class="ch-info-cards mb-5">
          <div class="ch-info-card">
            <i class="fas fa-map-marker-alt"></i>
            <h5>Location</h5>
            <p>Room 200A, Children's Wing</p>
          </div>
          <div class="ch-info-card">
            <i class="fas fa-clock"></i>
            <h5>Schedule</h5>
            <p>Sundays 9am &amp; 11am</p>
          </div>
          <div class="ch-info-card">
            <i class="fas fa-phone"></i>
            <h5>Contact</h5>
            <p>(281) 555-0123</p>
          </div>
        </div>

        <!-- ch-kids-enews -->
        <h3 class="h5 text-maroon mb-3">Kids E-News CTA (ch-kids-enews)</h3>
      </div>
    </section>

    <section class="ch-kids-enews">
      <div class="container">
        <div class="ch-kids-enews-inner">
          <div>
            <h3>NextGen Kids Newsletter</h3>
            <p>Stay connected with weekly updates, event reminders, and faith-at-home resources.</p>
          </div>
          <a href="#" class="btn-white">Subscribe to E-News</a>
        </div>
      </div>
    </section>

    <!-- ch-programs-section -->
    <section class="ch-programs-section">
      <div class="container">
        <div class="ch-programs-header">
          <span class="section-label">Programs</span>
          <h2>NextGen Programs</h2>
          <p class="text-muted mt-2">Programs Tabs + Custom Accordion (ch-programs-section)</p>
          <div class="ch-programs-tabs">
            <button class="ch-programs-tab active" data-ch-tab="preschool">Preschool</button>
            <button class="ch-programs-tab" data-ch-tab="elementary">Elementary</button>
            <button class="ch-programs-tab" data-ch-tab="preteen">Pre-Teen</button>
          </div>
        </div>

        <div class="ch-programs-panel active" id="ch-panel-preschool">
          <div class="ch-accordion">
            <div class="ch-accordion-item">
              <button class="ch-accordion-trigger">
                <i class="fas fa-baby ch-acc-icon-left"></i>
                <span class="ch-acc-title">Little Lambs (Ages 2–3)</span>
                <i class="fas fa-chevron-down ch-acc-chevron"></i>
              </button>
              <div class="ch-accordion-body">
                <div class="ch-accordion-content">
                  <p>A nurturing environment for our youngest learners. Story time, songs, and age-appropriate crafts build a foundation of faith.</p>
                  <div class="ch-info-cards">
                    <div class="ch-info-card">
                      <i class="fas fa-map-marker-alt"></i>
                      <h5>Location</h5>
                      <p>Room 101, Preschool Wing</p>
                    </div>
                    <div class="ch-info-card">
                      <i class="fas fa-clock"></i>
                      <h5>Schedule</h5>
                      <p>Sun 9am &amp; 11am</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ch-accordion-item">
              <button class="ch-accordion-trigger">
                <i class="fas fa-child ch-acc-icon-left"></i>
                <span class="ch-acc-title">Preschool Explorers (Ages 4–5)</span>
                <i class="fas fa-chevron-down ch-acc-chevron"></i>
              </button>
              <div class="ch-accordion-body">
                <div class="ch-accordion-content">
                  <p>Bible stories come alive through play, music, and hands-on activities designed for PreK learners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ch-programs-panel" id="ch-panel-elementary">
          <div class="ch-accordion">
            <div class="ch-accordion-item">
              <button class="ch-accordion-trigger">
                <i class="fas fa-book-bible ch-acc-icon-left"></i>
                <span class="ch-acc-title">NextGen Kids (K–5th Grade)</span>
                <i class="fas fa-chevron-down ch-acc-chevron"></i>
              </button>
              <div class="ch-accordion-body">
                <div class="ch-accordion-content">
                  <p>Engaging, age-appropriate worship and teaching for elementary-age kids.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         FROM: support-groups.html
         ============================================================ -->

    <!-- sg-intro -->
    <section class="extras-section bg-white">
      <div class="container">
        <span class="extras-source-label">From: support-groups.html</span>
        <h2 class="section-title mb-5">Support Groups <em>Custom Components</em></h2>
      </div>
    </section>

    <section class="sg-intro">
      <div class="container">
        <div class="sg-intro-icon">
          <i class="fas fa-hands-holding-heart"></i>
        </div>
        <h2>You Don't Have to Walk Alone</h2>
        <p>Our support groups provide a safe, confidential space to find healing, community, and hope. Whether you're facing grief, addiction, anxiety, or life transitions — there's a group for you.</p>
      </div>
    </section>

    <!-- sg-filters -->
    <div class="sg-filters">
      <div class="container">
        <div class="sg-filters-inner">
          <span class="sg-filters-label">Filter by:</span>
          <div class="sg-pills">
            <button class="sg-pill active">All Groups</button>
            <button class="sg-pill">Grief &amp; Loss</button>
            <button class="sg-pill">Recovery</button>
            <button class="sg-pill">Mental Health</button>
            <button class="sg-pill">Life Transitions</button>
          </div>
          <div class="sg-search">
            <i class="fas fa-search"></i>
            <input type="text" class="sg-search-input form-control" placeholder="Search groups…">
          </div>
        </div>
      </div>
    </div>

    <!-- sg-grid / sg-cards -->
    <section class="sg-grid-section">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col">
            <div class="sg-card">
              <div class="sg-card-header">
                <div class="sg-card-icon"><i class="fas fa-heart"></i></div>
                <div class="sg-card-name">GriefShare</div>
              </div>
              <div class="sg-card-body">
                <span class="sg-card-schedule"><i class="fas fa-calendar"></i> Tuesdays 6:30pm</span>
                <p class="sg-card-desc">A grief recovery support group that is video-based and features nationally recognized grief experts.</p>
                <a href="#" class="sg-card-link">Learn More <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="sg-card">
              <div class="sg-card-header">
                <div class="sg-card-icon"><i class="fas fa-anchor"></i></div>
                <div class="sg-card-name">Celebrate Recovery</div>
              </div>
              <div class="sg-card-body">
                <span class="sg-card-schedule"><i class="fas fa-calendar"></i> Fridays 7:00pm</span>
                <p class="sg-card-desc">A Christ-centered 12-step recovery program for anyone struggling with hurts, habits, and hang-ups.</p>
                <a href="#" class="sg-card-link">Learn More <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="sg-card">
              <div class="sg-card-header">
                <div class="sg-card-icon"><i class="fas fa-brain"></i></div>
                <div class="sg-card-name">Anxiety &amp; Depression Support</div>
              </div>
              <div class="sg-card-body">
                <span class="sg-card-schedule"><i class="fas fa-calendar"></i> Thursdays 6:00pm</span>
                <p class="sg-card-desc">A confidential group for those navigating anxiety, depression, or related challenges with professional facilitation.</p>
                <a href="#" class="sg-card-link">Learn More <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="sg-no-results">
            <i class="fas fa-search"></i>
            No groups match your search. Try a different filter.
          </div>
        </div>
      </div>
    </section>

    <!-- sg-help -->
    <section class="sg-help">
      <div class="container">
        <div class="sg-help-card">
          <div class="sg-help-icon"><i class="fas fa-hands-holding-heart"></i></div>
          <h3>Not Sure Where to Start?</h3>
          <p>Our pastoral care team is here to help you find the right group. Reach out — all conversations are confidential.</p>
          <div class="sg-help-contact">
            <a href="tel:2815550100"><i class="fas fa-phone"></i> (281) 555-0100</a>
            <a href="mailto:care@twmc.org"><i class="fas fa-envelope"></i> care@twmc.org</a>
          </div>
          <a href="#" class="sg-help-btn"><i class="fas fa-calendar-check"></i> Request a Consultation</a>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER — copy from home.html -->
  <footer class="site-footer">
    <div class="container-xxl px-4">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="../assets/images/twumc-logo-white.png" alt="TWMC" class="footer-logo">
          <p>The Woodlands Methodist Church — A community of faith, hope, and love serving The Woodlands area since 1972.</p>
        </div>
        <div class="footer-col">
          <h4>About</h4>
          <a href="#">Our Story</a>
          <a href="staff.html">Staff</a>
          <a href="locations.html">Locations</a>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="give.html">Give</a>
          <a href="grow.html">Grow</a>
          <a href="#">Events</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../js/bootstrap.bundle.min.js"></script>
  <script src="../js/theme.js"></script>

  <script>
    /* ch-programs tabs */
    document.querySelectorAll('.ch-programs-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.ch-programs-tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.ch-programs-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.getElementById('ch-panel-' + btn.dataset.chTab);
        if (panel) panel.classList.add('active');
      });
    });

    /* ch-accordion */
    document.querySelectorAll('.ch-accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.ch-accordion-item');
        item.classList.toggle('open');
      });
    });
  </script>
</body>
</html>
```

- [ ] **Step 2: Verify the file renders**

Open `http://localhost:3000/pages/Extras.html` and confirm the page loads with location bar, navbar, page hero, and the extracted component sections visible. No console errors.

- [ ] **Step 3: Commit**

```bash
git add pages/Extras.html
git commit -m "feat: create Extras.html archive for extracted custom components"
```

---

## Task 2: Clean `childrens.html`

**Files:**
- Modify: `pages/childrens.html`

Remove the entire `<style>` block (lines 15–255). Replace custom `ch-` HTML with standard equivalents.

- [ ] **Step 1: Remove the `<style>` block**

Delete from `<style>` (line 15) through `</style>` (line 255) inclusive.

- [ ] **Step 2: Replace `ch-mission-list` in intro section**

Find the `<ul class="ch-mission-list">` in the intro text column. Replace with:

```html
<ul class="list-unstyled mt-3 mb-3">
  <li class="d-flex align-items-center gap-3 py-2 border-bottom border-light">
    <i class="fas fa-cross text-secondary fs-5 flex-shrink-0"></i>
    <span class="fw-semibold text-primary">Faith Formation through Biblical Teaching</span>
  </li>
  <li class="d-flex align-items-center gap-3 py-2 border-bottom border-light">
    <i class="fas fa-hands-praying text-secondary fs-5 flex-shrink-0"></i>
    <span class="fw-semibold text-primary">Age-Appropriate Worship Experiences</span>
  </li>
  <li class="d-flex align-items-center gap-3 py-2 border-bottom border-light">
    <i class="fas fa-users text-secondary fs-5 flex-shrink-0"></i>
    <span class="fw-semibold text-primary">Safe, Nurturing Community</span>
  </li>
  <li class="d-flex align-items-center gap-3 py-2">
    <i class="fas fa-heart text-secondary fs-5 flex-shrink-0"></i>
    <span class="fw-semibold text-primary">Partnership with Families</span>
  </li>
</ul>
```

Note: `text-primary` maps to `var(--maroon)`, `text-secondary` maps to `var(--gold)` via Bootstrap's token mapping.

- [ ] **Step 3: Replace `ch-kids-enews` section**

Find the `<section class="ch-kids-enews">` block and replace entirely with the standard enews CTA:

```html
<section class="enews-cta">
  <div class="container">
    <div class="enews-inner reveal">
      <div>
        <h3>NextGen Kids Newsletter</h3>
        <p>Stay connected with weekly updates, event reminders, and faith-at-home resources for families.</p>
      </div>
      <a href="#" class="btn-white">Subscribe to E-News</a>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Replace `ch-programs-section` tabs + accordion**

Find the `<section class="ch-programs-section">` block. Replace with the connect-section pattern using Bootstrap accordions:

```html
<section class="connect-section" id="programs">
  <div class="container">
    <div class="connect-header reveal">
      <span class="section-label">Programs</span>
      <h2 class="section-title">NextGen <em>Programs</em></h2>
      <div class="connect-tabs" id="programsTabs" role="tablist" aria-label="Programs by age group">
        <button class="connect-tab active" role="tab" id="tab-preschool-btn"
          aria-selected="true" aria-controls="tab-preschool" data-tab="preschool">Preschool</button>
        <button class="connect-tab" role="tab" id="tab-elementary-btn"
          aria-selected="false" aria-controls="tab-elementary" data-tab="elementary">Elementary</button>
        <button class="connect-tab" role="tab" id="tab-preteen-btn"
          aria-selected="false" aria-controls="tab-preteen" data-tab="preteen">Pre-Teen</button>
        <button class="connect-tab" role="tab" id="tab-youth-btn"
          aria-selected="false" aria-controls="tab-youth" data-tab="youth">Youth</button>
      </div>
    </div>

    <div class="connect-cards">
      <!-- Preschool Panel -->
      <div id="tab-preschool" role="tabpanel" aria-labelledby="tab-preschool-btn">
        <div class="accordion" id="accordionPreschool">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#prog-littlelambs"
                aria-expanded="false" aria-controls="prog-littlelambs">
                <i class="fas fa-baby text-secondary me-3"></i> Little Lambs (Ages 2–3)
              </button>
            </h2>
            <div id="prog-littlelambs" class="accordion-collapse collapse"
              data-bs-parent="#accordionPreschool">
              <div class="accordion-body">
                <p>A nurturing environment for our youngest learners. Story time, songs, and age-appropriate crafts build a foundation of faith.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#prog-explorers"
                aria-expanded="false" aria-controls="prog-explorers">
                <i class="fas fa-child text-secondary me-3"></i> Preschool Explorers (Ages 4–5)
              </button>
            </h2>
            <div id="prog-explorers" class="accordion-collapse collapse"
              data-bs-parent="#accordionPreschool">
              <div class="accordion-body">
                <p>Bible stories come alive through play, music, and hands-on activities designed for PreK learners.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Elementary Panel -->
      <div id="tab-elementary" role="tabpanel" aria-labelledby="tab-elementary-btn" hidden>
        <div class="accordion" id="accordionElementary">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#prog-nextgen"
                aria-expanded="false" aria-controls="prog-nextgen">
                <i class="fas fa-book-bible text-secondary me-3"></i> NextGen Kids (K–5th Grade)
              </button>
            </h2>
            <div id="prog-nextgen" class="accordion-collapse collapse"
              data-bs-parent="#accordionElementary">
              <div class="accordion-body">
                <p>Engaging, age-appropriate worship and teaching for elementary-age kids every Sunday morning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pre-Teen Panel -->
      <div id="tab-preteen" role="tabpanel" aria-labelledby="tab-preteen-btn" hidden>
        <div class="accordion" id="accordionPreteen">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#prog-preteen"
                aria-expanded="false" aria-controls="prog-preteen">
                <i class="fas fa-star text-secondary me-3"></i> 456 Club (4th–6th Grade)
              </button>
            </h2>
            <div id="prog-preteen" class="accordion-collapse collapse"
              data-bs-parent="#accordionPreteen">
              <div class="accordion-body">
                <p>A safe space for preteens to ask big questions and discover their identity in Christ.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Youth Panel -->
      <div id="tab-youth" role="tabpanel" aria-labelledby="tab-youth-btn" hidden>
        <div class="accordion" id="accordionYouth">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#prog-youth"
                aria-expanded="false" aria-controls="prog-youth">
                <i class="fas fa-bolt text-secondary me-3"></i> Student Ministry (7th–12th Grade)
              </button>
            </h2>
            <div id="prog-youth" class="accordion-collapse collapse"
              data-bs-parent="#accordionYouth">
              <div class="accordion-body">
                <p>Weekly worship, small groups, and retreats designed to deepen faith for middle and high school students.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
```

- [ ] **Step 5: Replace `ch-info-cards` wherever it appears**

Search for all `ch-info-cards` / `ch-info-card` HTML and replace with Bootstrap grid + inline icon layout:

```html
<div class="row row-cols-1 row-cols-md-3 g-3 my-3">
  <div class="col">
    <div class="text-center p-3 bg-cream rounded-3">
      <i class="fas fa-map-marker-alt text-primary fa-2x mb-2"></i>
      <h5 class="fw-bold text-uppercase small text-primary mb-1">Location</h5>
      <p class="small mb-0">Room 200A, Children's Wing</p>
    </div>
  </div>
  <div class="col">
    <div class="text-center p-3 bg-cream rounded-3">
      <i class="fas fa-clock text-primary fa-2x mb-2"></i>
      <h5 class="fw-bold text-uppercase small text-primary mb-1">Schedule</h5>
      <p class="small mb-0">Sundays 9am &amp; 11am</p>
    </div>
  </div>
  <div class="col">
    <div class="text-center p-3 bg-cream rounded-3">
      <i class="fas fa-phone text-primary fa-2x mb-2"></i>
      <h5 class="fw-bold text-uppercase small text-primary mb-1">Contact</h5>
      <p class="small mb-0">(281) 555-0123</p>
    </div>
  </div>
</div>
```

Note: `bg-cream` is a utility class in theme.css. `text-primary` maps to maroon.

- [ ] **Step 6: Verify childrens.html renders correctly**

Open `http://localhost:3000/pages/childrens.html`. Confirm:
- No red console errors
- All sections visible (intro, feature banner, enews CTA, programs accordion, connect section, footer)
- Accordion tabs switch content panels correctly

- [ ] **Step 7: Commit**

```bash
git add pages/childrens.html
git commit -m "refactor: replace ch- prefixed components with standard theme.css equivalents"
```

---

## Task 3: Clean `support-groups.html`

**Files:**
- Modify: `pages/support-groups.html`

Remove the entire `<style>` block (lines 13–406). Replace `sg-` prefixed HTML with standard equivalents.

- [ ] **Step 1: Remove the `<style>` block**

Delete from `<style>` (line 13) through `</style>` (line 406) inclusive.

- [ ] **Step 2: Replace `sg-intro` with standard intro section**

Find `<section class="sg-intro">` and replace with a standard centered intro:

```html
<section class="py-5 bg-cream text-center">
  <div class="container">
    <div class="reveal" style="max-width: 720px; margin: 0 auto;">
      <div class="d-flex align-items-center justify-content-center mb-4">
        <div style="width:72px;height:72px;border-radius:50%;background:var(--warm-gray);display:flex;align-items:center;justify-content:center;font-size:2rem;color:var(--maroon)">
          <i class="fas fa-hands-holding-heart"></i>
        </div>
      </div>
      <span class="section-label">Support &amp; Care</span>
      <h2 class="section-title">You Don't Have to <em>Walk Alone</em></h2>
      <p class="fs-6 text-body mt-3">Our support groups provide a safe, confidential space to find healing, community, and hope. Whether you're facing grief, addiction, anxiety, or life transitions — there's a group for you.</p>
    </div>
  </div>
</section>
```

NOTE: The icon circle uses an inline style because it's a one-off decorative element (not a reusable component). This is the only allowed exception for inline styles in content (not structural layout).

- [ ] **Step 3: Replace `sg-filters` with Bootstrap button group**

Find the `<div class="sg-filters">` block and replace with:

```html
<div class="bg-white border-bottom py-3 sticky-top" style="z-index:90;">
  <div class="container">
    <div class="d-flex align-items-center gap-3 flex-wrap justify-content-center">
      <span class="fw-bold text-uppercase small text-primary" style="letter-spacing:.05em;white-space:nowrap;">Filter by:</span>
      <div class="d-flex gap-2 flex-wrap" id="sg-pills" role="group" aria-label="Filter groups">
        <button class="btn btn-sm btn-primary active" data-sg-filter="all">All Groups</button>
        <button class="btn btn-sm btn-outline-primary" data-sg-filter="grief">Grief &amp; Loss</button>
        <button class="btn btn-sm btn-outline-primary" data-sg-filter="recovery">Recovery</button>
        <button class="btn btn-sm btn-outline-primary" data-sg-filter="mental-health">Mental Health</button>
        <button class="btn btn-sm btn-outline-primary" data-sg-filter="transitions">Life Transitions</button>
      </div>
      <div class="position-relative flex-shrink-0">
        <i class="fas fa-search position-absolute text-muted" style="left:14px;top:50%;transform:translateY(-50%);font-size:.9rem;pointer-events:none;"></i>
        <input type="text" id="sg-search" class="form-control form-control-sm" style="padding-left:40px;width:240px;" placeholder="Search groups…" aria-label="Search groups">
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 4: Replace `sg-grid-section` + `sg-card` with Bootstrap grid + feature-card**

Find the `<section class="sg-grid-section">` and replace the grid/cards with Bootstrap grid using `feature-card`:

```html
<section class="py-5" style="background:var(--warm-gray);">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="sg-grid">

      <div class="col" data-sg-category="grief">
        <div class="feature-card h-100 reveal">
          <div class="d-flex align-items-center gap-3 mb-3">
            <div class="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 text-white bg-primary" style="width:44px;height:44px;">
              <i class="fas fa-heart"></i>
            </div>
            <h3 class="h5 mb-0 font-display fw-bold">GriefShare</h3>
          </div>
          <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill fw-semibold small mb-3">
            <i class="fas fa-calendar me-1 opacity-75"></i> Tuesdays 6:30pm
          </span>
          <p class="text-muted small flex-grow-1">A grief recovery support group featuring nationally recognized grief experts via video curriculum.</p>
          <a href="#" class="btn-outline mt-3 d-inline-flex align-items-center gap-2">Learn More <i class="fas fa-arrow-right fa-xs"></i></a>
        </div>
      </div>

      <div class="col" data-sg-category="recovery">
        <div class="feature-card h-100 reveal">
          <div class="d-flex align-items-center gap-3 mb-3">
            <div class="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 text-white bg-primary" style="width:44px;height:44px;">
              <i class="fas fa-anchor"></i>
            </div>
            <h3 class="h5 mb-0 font-display fw-bold">Celebrate Recovery</h3>
          </div>
          <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill fw-semibold small mb-3">
            <i class="fas fa-calendar me-1 opacity-75"></i> Fridays 7:00pm
          </span>
          <p class="text-muted small flex-grow-1">A Christ-centered 12-step recovery program for anyone struggling with hurts, habits, and hang-ups.</p>
          <a href="#" class="btn-outline mt-3 d-inline-flex align-items-center gap-2">Learn More <i class="fas fa-arrow-right fa-xs"></i></a>
        </div>
      </div>

      <div class="col" data-sg-category="mental-health">
        <div class="feature-card h-100 reveal">
          <div class="d-flex align-items-center gap-3 mb-3">
            <div class="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 text-white bg-primary" style="width:44px;height:44px;">
              <i class="fas fa-brain"></i>
            </div>
            <h3 class="h5 mb-0 font-display fw-bold">Anxiety &amp; Depression Support</h3>
          </div>
          <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill fw-semibold small mb-3">
            <i class="fas fa-calendar me-1 opacity-75"></i> Thursdays 6:00pm
          </span>
          <p class="text-muted small flex-grow-1">A confidential group for those navigating anxiety, depression, or related challenges with professional facilitation.</p>
          <a href="#" class="btn-outline mt-3 d-inline-flex align-items-center gap-2">Learn More <i class="fas fa-arrow-right fa-xs"></i></a>
        </div>
      </div>

      <div class="col d-none" id="sg-no-results">
        <div class="text-center text-muted py-5">
          <i class="fas fa-search fa-2x mb-3 opacity-25 d-block"></i>
          No groups match your search. Try a different filter.
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 5: Replace `sg-help` with feature-banner--light**

Find the `<section class="sg-help">` block and replace with:

```html
<section class="feature-banner feature-banner--light" style="background-color: var(--cream);">
  <div class="container">
    <div class="feature-banner-inner reveal">
      <h2>Not Sure Where to Start?</h2>
      <p>Our pastoral care team is here to help you find the right group. Reach out — all conversations are confidential.</p>
      <div class="d-flex justify-content-center gap-4 flex-wrap mb-4">
        <a href="tel:2815550100" class="d-flex align-items-center gap-2 fw-semibold text-primary text-decoration-none">
          <i class="fas fa-phone"></i> (281) 555-0100
        </a>
        <a href="mailto:care@twmc.org" class="d-flex align-items-center gap-2 fw-semibold text-primary text-decoration-none">
          <i class="fas fa-envelope"></i> care@twmc.org
        </a>
      </div>
      <a href="#" class="btn-primary">Request a Consultation</a>
    </div>
  </div>
</section>
```

- [ ] **Step 6: Update the filter JavaScript**

The existing JavaScript in support-groups.html uses `sg-pill` class selectors. Since those classes are gone, update the script to target the new Bootstrap button selectors. Find the existing `<script>` block at the bottom of support-groups.html and replace the filter/search JS:

```javascript
// Support groups filter
const sgPills = document.querySelectorAll('[data-sg-filter]');
const sgCards = document.querySelectorAll('[data-sg-category]');
const sgSearch = document.getElementById('sg-search');
const sgNoResults = document.getElementById('sg-no-results');

function filterGroups() {
  const activeFilter = document.querySelector('[data-sg-filter].active')?.dataset.sgFilter || 'all';
  const searchTerm = sgSearch?.value.toLowerCase() || '';
  let visible = 0;

  sgCards.forEach(col => {
    const card = col.querySelector('.feature-card');
    const category = col.dataset.sgCategory || '';
    const text = card?.textContent.toLowerCase() || '';
    const matchesFilter = activeFilter === 'all' || category === activeFilter;
    const matchesSearch = !searchTerm || text.includes(searchTerm);
    const show = matchesFilter && matchesSearch;
    col.classList.toggle('d-none', !show);
    if (show) visible++;
  });

  if (sgNoResults) sgNoResults.classList.toggle('d-none', visible > 0);
}

sgPills.forEach(btn => {
  btn.addEventListener('click', () => {
    sgPills.forEach(b => {
      b.classList.remove('active', 'btn-primary');
      b.classList.add('btn-outline-primary');
    });
    btn.classList.add('active', 'btn-primary');
    btn.classList.remove('btn-outline-primary');
    filterGroups();
  });
});

sgSearch?.addEventListener('input', filterGroups);
```

- [ ] **Step 7: Verify support-groups.html renders**

Open `http://localhost:3000/pages/support-groups.html`. Confirm:
- Filter pills work (click to filter cards, search to narrow results)
- All sections visible and styled via theme.css
- No console errors

- [ ] **Step 8: Commit**

```bash
git add pages/support-groups.html
git commit -m "refactor: replace sg- prefixed components with standard Bootstrap + theme.css"
```

---

## Task 4: Fix `app.html` — token violations + convert features-grid

**Files:**
- Modify: `pages/app.html`

The `app-hero`, phone mockup, and download CTA are legitimate page-specific components. Do NOT remove them. Fix violations only.

- [ ] **Step 1: Fix `#4ade80` live dot color**

In the `<style>` block, find:
```css
.app-live-dot::before {
  ...
  background: #4ade80;
```
Replace `#4ade80` with `var(--success)`.

- [ ] **Step 2: Convert `features-grid` from CSS Grid to Bootstrap grid**

In the `<style>` block, find and delete:
```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 48px;
}
```

In the HTML, find `<div class="features-grid">` and replace with:
```html
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
```

Find each `<div class="feature-item">` and wrap in `<div class="col">`. The resulting structure should be:
```html
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
  <div class="col">
    <div class="feature-item reveal">
      ...
    </div>
  </div>
  <!-- repeat for each feature -->
</div>
```

- [ ] **Step 3: Move inline gradient styles on feature icons to CSS classes**

In the HTML, find each quick action icon that has `style="background: linear-gradient(...)"` inline on `.app-quick-icon` or `.feature-icon`. In the `<style>` block, add named classes:

```css
.app-quick-icon--give    { background: linear-gradient(135deg, var(--gold), #b8933f); }
.app-quick-icon--gather  { background: linear-gradient(135deg, var(--grow-g), #5c7ea8); }
.app-quick-icon--reach   { background: linear-gradient(135deg, var(--grow-r), #c04050); }
.app-quick-icon--own     { background: linear-gradient(135deg, var(--grow-o), #2a9e6a); }
.app-quick-icon--worship { background: linear-gradient(135deg, #8b7ec8, #6654a3); }
```

Remove each corresponding inline `style=` attribute and add the matching class instead.

- [ ] **Step 4: Fix non-standard breakpoint**

Find `@media (max-width: 575.98px)` and change to `@media (max-width: 576px)`.

- [ ] **Step 5: Verify app.html renders**

Open `http://localhost:3000/pages/app.html`. Confirm features grid is 3-col on desktop, 1-col on mobile. Phone mockup intact.

- [ ] **Step 6: Commit**

```bash
git add pages/app.html
git commit -m "fix: replace hardcoded values with tokens and convert features-grid to Bootstrap"
```

---

## Task 5: Fix `staff.html` — CSS Grid → Bootstrap + token fixes

**Files:**
- Modify: `pages/staff.html`

- [ ] **Step 1: Convert `senior-pastor-card` from CSS Grid to Bootstrap row**

In `<style>`, find and delete:
```css
.senior-pastor-card {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  ...
}
```
Keep only the non-grid properties (`background`, `border-radius`, `overflow`, `box-shadow`, `margin`):
```css
.senior-pastor-card {
  background: #fff;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  margin-top: 40px;
  margin-bottom: 48px;
}
```

In HTML, find `<div class="senior-pastor-card">` and restructure to Bootstrap:
```html
<div class="senior-pastor-card">
  <div class="row g-0">
    <div class="col-lg-4">
      <div class="senior-pastor-img" style="background-image: url('...');"></div>
    </div>
    <div class="col-lg-8">
      <div class="senior-pastor-body">
        <!-- existing content -->
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Convert `pastors-grid` from CSS Grid to Bootstrap row**

In `<style>`, find and delete:
```css
.pastors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  margin-top: 40px;
}
```

In HTML, find `<div class="pastors-grid">` and change to:
```html
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mt-4">
```

Wrap each `<div class="pastor-card">` in `<div class="col">`.

- [ ] **Step 3: Convert `staff-dept-grid` from CSS Grid to Bootstrap row**

In `<style>`, find and delete:
```css
.staff-dept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  padding: 0 24px 24px;
}
```
Add back just the padding:
```css
.staff-dept-grid {
  padding: 0 24px 24px;
}
```

Wrap the div with Bootstrap row classes in the HTML:
```html
<div class="staff-dept-grid">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
    <!-- staff member items stay as-is -->
  </div>
</div>
```

- [ ] **Step 4: Fix hardcoded transition durations**

In `<style>`, do a find-and-replace for all hardcoded transitions:
- `transition: transform 0.4s var(--ease-out), box-shadow 0.4s ease` → `transition: transform var(--duration-slow) var(--ease-out), box-shadow var(--duration-slow) ease`
- `transition: border-color 0.2s ease` → `transition: border-color var(--duration-fast) ease`
- `transition: all 0.25s var(--ease-out)` → `transition: all var(--duration-normal) var(--ease-out)`
- `transition: box-shadow 0.3s ease` → `transition: box-shadow var(--duration-normal) ease`
- `transition: background 0.2s ease` → `transition: background var(--duration-fast) ease`
- `transition: transform 0.3s var(--ease-out)` → `transition: transform var(--duration-normal) var(--ease-out)`
- `transition: max-height 0.4s var(--ease-out)` → `transition: max-height var(--duration-slow) var(--ease-out)`

- [ ] **Step 5: Fix non-standard breakpoints**

- `@media (max-width: 900px)` → `@media (max-width: 992px)`
- `@media (max-width: 480px)` → `@media (max-width: 576px)`

- [ ] **Step 6: Verify staff.html renders**

Open `http://localhost:3000/pages/staff.html`. Confirm senior pastor card is 2-column on desktop, stacked on mobile. Pastors grid is 4-col on desktop.

- [ ] **Step 7: Commit**

```bash
git add pages/staff.html
git commit -m "fix: convert CSS Grid layouts to Bootstrap grid and fix transition tokens on staff.html"
```

---

## Task 6: Fix `landingpage.html` — token violations + breakpoints

**Files:**
- Modify: `pages/landingpage.html`

- [ ] **Step 1: Fix hardcoded transition durations**

In `<style>`, replace all hardcoded transitions:
- `transition: all 0.3s ease` → `transition: all var(--duration-normal) ease`
- `transition: all 0.4s var(--ease-out)` → `transition: all var(--duration-slow) var(--ease-out)`
- `transition: transform 0.6s var(--ease-out)` → `transition: transform var(--duration-slow) var(--ease-out)` (0.6s rounds to `--duration-slow`)
- `transition: gap 0.3s ease` → `transition: gap var(--duration-normal) ease`
- `transition: transform 0.4s ease, box-shadow 0.4s ease` → `transition: transform var(--duration-slow) ease, box-shadow var(--duration-slow) ease`
- `transition: transform 0.6s ease` → `transition: transform var(--duration-slow) ease`

- [ ] **Step 2: Fix non-standard breakpoints**

- `@media (max-width: 991.98px)` → `@media (max-width: 992px)`
- `@media (max-width: 767.98px)` → `@media (max-width: 768px)`
- `@media (max-width: 575.98px)` → `@media (max-width: 576px)`

- [ ] **Step 3: Verify landingpage.html renders**

Open `http://localhost:3000/pages/landingpage.html`. Confirm hero, campuses section, and cards still display correctly at all breakpoints.

- [ ] **Step 4: Commit**

```bash
git add pages/landingpage.html
git commit -m "fix: replace hardcoded transition durations and non-standard breakpoints in landingpage.html"
```

---

## Task 7: Fix `media.html` — token violations + inline social colors

**Files:**
- Modify: `pages/media.html`

- [ ] **Step 1: Fix hardcoded transition durations**

In `<style>`, replace:
- `transition: all 0.3s ease` → `transition: all var(--duration-normal) ease`
- `transition: transform 0.4s var(--ease-out), box-shadow 0.4s ease` → `transition: transform var(--duration-slow) var(--ease-out), box-shadow var(--duration-slow) ease`
- `transition: all 0.25s ease` → `transition: all var(--duration-normal) ease`
- `transition: all 0.35s ease` → `transition: all var(--duration-normal) ease`

- [ ] **Step 2: Add CSS classes for social card brand colors**

In `<style>`, add after the existing `.social-card` rules:
```css
.social-card--youtube  { --sc-color: #FF0000; }
.social-card--instagram { --sc-color: #E1306C; }
.social-card--facebook  { --sc-color: #1877F2; }

.social-card--youtube .social-card-icon  { background: rgba(255,0,0,0.12); color: #FF0000; }
.social-card--instagram .social-card-icon {
  background: linear-gradient(135deg, rgba(131,58,180,0.15), rgba(253,29,29,0.15), rgba(252,176,69,0.15));
  color: #E1306C;
}
.social-card--facebook .social-card-icon { background: rgba(24,119,242,0.12); color: #1877F2; }
```

Note: Social media brand colors (YouTube red, Instagram pink, Facebook blue) are third-party brand colors — they are intentionally hardcoded as those are not TWMC design system tokens.

- [ ] **Step 3: Remove inline social color styles from HTML**

Find each social card `<a>` in the HTML that has `style="background: ...; color: ...;"` on the icon div. Remove the inline `style=` and add the matching class to the `<a class="social-card">` element:

```html
<!-- Before -->
<a href="..." class="social-card reveal">
  <div class="social-card-icon" style="background: rgba(255,0,0,0.12); color: #FF0000;">

<!-- After -->
<a href="..." class="social-card social-card--youtube reveal">
  <div class="social-card-icon">
```

Repeat for Instagram (`social-card--instagram`) and Facebook (`social-card--facebook`).

- [ ] **Step 4: Verify media.html renders**

Open `http://localhost:3000/pages/media.html`. Confirm social cards show correct brand colors.

- [ ] **Step 5: Commit**

```bash
git add pages/media.html
git commit -m "fix: move inline social media brand colors to CSS classes and fix transition tokens"
```

---

## Task 8: Fix `plan-your-visit.html` — inline campus colors → CSS classes

**Files:**
- Modify: `pages/plan-your-visit.html`

- [ ] **Step 1: Add campus header color classes to the `<style>` block**

In `<style>`, add after existing rules:
```css
/* Campus card header backgrounds — inline style replacements */
.visit-campus-header--woodlands  { background: linear-gradient(135deg, var(--maroon), #8b4557); }
.visit-campus-header--woodforest { background: linear-gradient(135deg, #0095b1, #33b5cc); }
.visit-campus-header--montgomery { background: linear-gradient(135deg, #331861, #5a3d8a); }
.visit-campus-header--creekside  { background: linear-gradient(135deg, #2a9d8f, #4db8ab); }
```

Note: The secondary campus colors (Woodforest teal, Montgomery purple, Creekside green) are campus brand colors intentionally distinct from the TWMC maroon/gold system.

- [ ] **Step 2: Remove inline style= from campus card headers**

Find each `<div class="visit-campus-header" style="background: linear-gradient(...)">` and replace with:

```html
<!-- The Woodlands -->
<div class="visit-campus-header visit-campus-header--woodlands">

<!-- Woodforest -->
<div class="visit-campus-header visit-campus-header--woodforest">

<!-- Montgomery -->
<div class="visit-campus-header visit-campus-header--montgomery">

<!-- Creekside -->
<div class="visit-campus-header visit-campus-header--creekside">
```

- [ ] **Step 3: Verify plan-your-visit.html renders**

Open `http://localhost:3000/pages/plan-your-visit.html`. Confirm each campus card header shows its correct gradient color.

- [ ] **Step 4: Commit**

```bash
git add pages/plan-your-visit.html
git commit -m "fix: move inline campus gradient colors to named CSS classes"
```

---

## Task 9: Fix `grow.html` — page hero structure

**Files:**
- Modify: `pages/grow.html`

The hero is missing the required `.page-hero-bg` and `.page-hero-overlay` elements.

- [ ] **Step 1: Fix the hero structure**

Find:
```html
<section class="page-hero" id="main-content">
  <div class="page-hero-content">
```

Replace with:
```html
<section class="page-hero" id="main-content">
  <div class="page-hero-bg" style="background-image: url('https://rockrms-assets.s3.us-east-2.amazonaws.com/images/twmc-gather-hero.jpg');"
    onerror="this.style.backgroundImage='';this.style.backgroundColor='var(--maroon-dark)'"></div>
  <div class="page-hero-overlay"></div>
  <div class="page-hero-content">
```

- [ ] **Step 2: Verify grow.html renders**

Open `http://localhost:3000/pages/grow.html`. Confirm the hero section shows a dark overlay and the title text is visible.

- [ ] **Step 3: Commit**

```bash
git add pages/grow.html
git commit -m "fix: add missing .page-hero-bg and .page-hero-overlay to grow.html hero"
```

---

## Task 10: Add Extras.html to the index.html showcase

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Extras.html card to index.html**

Open `index.html`, find the last page card in the grid, and add a new card for Extras:

```html
<div class="col">
  <a href="pages/Extras.html" class="page-card">
    <div class="page-card-img" style="background: var(--warm-gray);">
      <i class="fas fa-box-archive fa-3x text-primary opacity-50"></i>
    </div>
    <div class="page-card-body">
      <span class="page-card-number">EX</span>
      <h3>Extras</h3>
      <p>Archived custom components removed during the design-system compliance pass. Preserved for reference.</p>
    </div>
  </a>
</div>
```

- [ ] **Step 2: Verify index.html shows the Extras card**

Open `http://localhost:3000/`. Confirm the Extras card appears and links to `pages/Extras.html`.

- [ ] **Step 3: Final commit**

```bash
git add index.html
git commit -m "feat: add Extras.html to index.html showcase"
```
