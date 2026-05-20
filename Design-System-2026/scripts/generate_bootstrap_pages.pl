#!/usr/bin/env perl

use strict;
use warnings;

my @pages = qw(
  home.html
  locations.html
  grow.html
  give.html
  womens.html
  discipleship.html
  missions.html
  support-groups.html
  childrens.html
);

my %map = (
  'home.html'           => 'home_bootstrap.html',
  'locations.html'      => 'locations_bootstrap.html',
  'grow.html'           => 'grow_bootstrap.html',
  'give.html'           => 'give_bootstrap.html',
  'womens.html'         => 'womens_bootstrap.html',
  'discipleship.html'   => 'discipleship_bootstrap.html',
  'missions.html'       => 'missions_bootstrap.html',
  'landingpage.html'    => 'landingpage_bootstrap.html',
  'support-groups.html' => 'support-groups_bootstrap.html',
  'childrens.html'      => 'childrens_bootstrap.html',
);

my $bootstrap_css = qq{  <link href="https://cdn.jsdelivr.net/npm/bootstrap\@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">\n  <link rel="stylesheet" href="theme.css">};

my $bootstrap_js = qq{  <script src="https://cdn.jsdelivr.net/npm/bootstrap\@5.3.3/dist/js/bootstrap.bundle.min.js"></script>\n  <script src="theme.js"></script>};

my $shell = <<'HTML';
  <a class="skip-link" href="#main-content">Skip to content</a>

  <div class="location-bar">
    <a href="home_bootstrap.html" class="active">The Woodlands</a>
    <a href="#">Woodforest</a>
    <a href="#">Montgomery</a>
    <a href="#">Creekside</a>
    <a href="#">Español</a>
  </div>

  <header class="navbar navbar-expand-xl py-0 navbar-twmc" id="navbar">
    <div class="container-xxl px-4">
      <a class="navbar-brand py-3 me-3" href="home_bootstrap.html">
        <img src="./assets/twumc-logo-fullcolor.png" alt="The Woodlands Methodist Church">
      </a>

      <nav class="d-none d-xl-flex align-items-center ms-auto">
        <a class="nav-link" href="locations_bootstrap.html">Times &amp; Locations</a>
        <a class="nav-link" href="#">Visit</a>
        <a class="nav-link" href="grow_bootstrap.html">Grow</a>
        <a class="nav-link" href="#">Messages</a>
        <a class="nav-link" href="#">Serve</a>
        <a class="nav-link" href="give_bootstrap.html">Give</a>
      </nav>

      <div class="d-none d-xl-flex align-items-center gap-2 ms-3">
        <a href="https://twmc.org/login" class="btn btn-primary btn-sm btn-login">Login</a>
        <button class="mega-trigger" id="megaTrigger" aria-label="Open menu" type="button">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <button class="navbar-toggler ms-auto d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav" aria-controls="mobileNav" aria-label="Open navigation">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </header>

  <div class="offcanvas offcanvas-end offcanvas-twmc" tabindex="-1" id="mobileNav" aria-labelledby="mobileNavLabel">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title m-0" id="mobileNavLabel">
        <img src="./assets/twumc-logo-fullcolor.png" alt="TWMC">
      </h2>
      <button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column">
      <div class="list-group list-group-flush">
        <a class="list-group-item" href="locations_bootstrap.html">Times &amp; Locations</a>
        <a class="list-group-item" href="#">Visit</a>
        <a class="list-group-item" href="grow_bootstrap.html">Grow</a>
        <a class="list-group-item" href="#">Messages</a>
        <a class="list-group-item" href="#">Serve</a>
        <a class="list-group-item" href="give_bootstrap.html">Give</a>
      </div>

      <div class="pt-4 mt-4 border-top">
        <a href="https://twmc.org/login" class="btn btn-primary w-100">Login</a>
      </div>

      <div class="mt-4">
        <div class="section-label mb-3">Campuses</div>
        <div class="d-grid gap-2">
          <a href="home_bootstrap.html" class="mobile-campus-chip">The Woodlands <span>Visit</span></a>
          <a href="#" class="mobile-campus-chip">Woodforest <span>Visit</span></a>
          <a href="#" class="mobile-campus-chip">Montgomery <span>Visit</span></a>
          <a href="#" class="mobile-campus-chip">Creekside <span>Visit</span></a>
          <a href="#" class="mobile-campus-chip">Español <span>Visit</span></a>
        </div>
      </div>
    </div>
  </div>

  <div class="mega-overlay" id="megaOverlay"></div>
  <div class="mega-panel" id="megaPanel">
    <div class="mega-panel-header">
      <a href="home_bootstrap.html"><img src="./assets/twumc-logo-fullcolor.png" alt="TWMC"></a>
      <button class="mega-close" id="megaClose" aria-label="Close menu" type="button"><i class="fas fa-times"></i></button>
    </div>

    <div class="mega-grid">
      <div class="mega-col">
        <h4>Main Menu</h4>
        <a href="locations_bootstrap.html">Times &amp; Locations</a>
        <a href="#">Visit</a>
        <a href="grow_bootstrap.html">Grow</a>
        <a href="#">Messages</a>
        <a href="#">Serve</a>
        <a href="give_bootstrap.html">Give</a>
        <a href="https://twmc.org/login">Login</a>
        <a href="https://beyondcampaign.org/" target="_blank" rel="noopener noreferrer">
          <img src="./assets/CAP_Beyond_Icon.png" alt=""> Beyond Campaign
        </a>

        <div class="mega-section-gap">
          <h4>Services</h4>
          <a href="#"><img src="https://www.thewoodlandsmethodist.org/GetImage.ashx?guid=7ba9c700-5a40-4ac5-8ac5-5fe9123f29cb" alt=""> Chapel</a>
          <a href="#"><img src="https://www.thewoodlandsmethodist.org/GetImage.ashx?guid=53de5c72-663e-4e56-b36a-762879e7f384" alt=""> Harvest</a>
          <a href="#"><img src="https://www.thewoodlandsmethodist.org/GetImage.ashx?guid=ff0df8c2-0e5f-4c5e-9b0b-57955f2700b0" alt=""> Loft</a>
          <a href="#"><img src="https://www.thewoodlandsmethodist.org/GetImage.ashx?guid=da94408d-d673-4974-8237-b2aa561020e9" alt=""> Traditional</a>
          <a href="#"><img src="./assets/CYA_House_Bug.png" alt=""> House</a>
        </div>

        <div class="mega-social">
          <a href="https://www.instagram.com/woodlandsmethodistchurch/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/TheWoodlandsMethodist" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/channel/UClYsncuu6rBhsh2lYYb0zdQ" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fas fa-podcast"></i></a>
        </div>
      </div>

      <div class="mega-col">
        <h4>About</h4>
        <a href="#">Baptism</a>
        <a href="#">Our Stories</a>
        <a href="#">Membership</a>
        <a href="#">Staff</a>
        <a href="#">Venues &amp; Bookings</a>
        <a href="#">TWMC Foundation</a>
        <a href="#">Grace Garden — Columbarium</a>
        <a href="#">Seminary Scholarship</a>
        <a href="#">Church Online</a>
        <a href="#">Podcast</a>
        <a href="#">Parking</a>

        <div class="mega-section-gap">
          <h4>Connect</h4>
          <a href="grow_bootstrap.html">G.R.O.W.</a>
          <a href="#">Events</a>
          <a href="#">Home Groups</a>
          <a href="support-groups_bootstrap.html">Support Groups</a>
          <a href="#">Recovery Groups</a>
        </div>
      </div>

      <div class="mega-col">
        <h4>NextGen</h4>
        <a href="childrens_bootstrap.html">NextGen Kids (Ages 3-9)</a>
        <a href="#">NextGen 56 (Ages 10-11)</a>
        <a href="#">NextGen Students (Ages 12-18)</a>
        <a href="#">NextGen Sports</a>

        <div class="mega-section-gap">
          <h4>Ministries</h4>
          <a href="#">Adults 55+</a>
          <a href="discipleship_bootstrap.html">Adult Discipleship</a>
          <a href="https://www.bristolhousemusic.org/" target="_blank" rel="noopener noreferrer">Bristol House Music</a>
          <a href="http://www.childrenofthewoodlands.org/" target="_blank" rel="noopener noreferrer">Children of the Woodlands</a>
          <a href="#">Caring &amp; Prayer</a>
          <a href="#">Marriage</a>
          <a href="#">Men</a>
          <a href="missions_bootstrap.html">Missions</a>
          <a href="#">Music &amp; Fine Arts</a>
          <a href="#">Recreation</a>
          <a href="#">Singles</a>
          <a href="#">Special Needs</a>
          <a href="https://www.twmschool.org/" target="_blank" rel="noopener noreferrer">TWMC School</a>
          <a href="womens_bootstrap.html">Women</a>
          <a href="#">Young Adults</a>
        </div>
      </div>
    </div>
  </div>
HTML

for my $source (@pages) {
  my $dest = $map{$source} or die "No destination mapping for $source\n";

  open my $in, '<', $source or die "Could not read $source: $!\n";
  local $/;
  my $html = <$in>;
  close $in;

  $html =~ s{<link rel="stylesheet" href="main2026\.css">}{$bootstrap_css}s
    or die "Could not inject styles into $source\n";

  $html =~ s{<body>\s*.*?(?=\n\s*<section\b)}{<body>\n\n$shell\n}s
    or die "Could not replace shell in $source\n";

  $html =~ s{<script src="main2026\.js"></script>}{$bootstrap_js}s
    or die "Could not inject scripts into $source\n";

  for my $old (sort { length($b) <=> length($a) } keys %map) {
    my $new = $map{$old};
    $html =~ s{href="\Q$old\E"}{href="$new"}g;
  }

  open my $out, '>', $dest or die "Could not write $dest: $!\n";
  print {$out} $html;
  close $out;

  print "Generated $dest from $source\n";
}
