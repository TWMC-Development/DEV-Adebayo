// shared.jsx — Site chrome + data + reusable components
// Loaded after React/ReactDOM/Babel.

// ─────────────────────────────────────────────────────────────
// Iconography (inline SVG — keeps page self-contained, no slop)
// ─────────────────────────────────────────────────────────────
const Icon = {
  Play: ({ size = 16, fill = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 2 L13 8 L3 14 Z" fill={fill} />
    </svg>
  ),
  Mic: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v4"/><path d="M8 22h8"/>
    </svg>
  ),
  Youtube: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="M10 9.5 L15 12 L10 14.5 Z" fill="currentColor" stroke="none"/>
    </svg>
  ),
  Tv: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
    </svg>
  ),
  Book: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 4.5V21.5"/>
    </svg>
  ),
  Live: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14"><circle cx="7" cy="7" r="4" fill="currentColor"/><circle cx="7" cy="7" r="6.5" fill="none" stroke="currentColor" strokeWidth="1" opacity=".4"/></svg>
  ),
  ArrowRight: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  ),
  Spotify: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M7 10c3-1 7-1 10 1M7.5 13c2.5-.7 5.5-.5 8 1M8 16c2-.5 4-.4 6 .8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
  ),
  Apple: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2.5c0 1.4-.5 2.6-1.4 3.6-1 1.1-2.3 1.7-3.3 1.6-.1-1.3.5-2.6 1.4-3.5.9-1 2.4-1.7 3.3-1.7zM20 17.5c-.5 1.2-.8 1.7-1.5 2.7-1 1.4-2.4 3.2-4.2 3.2-1.6 0-2-1-4.2-1-2.2 0-2.6 1-4.2 1-1.7 0-3.1-1.6-4.1-3-2.8-3.9-3.1-8.5-1.4-11 1.2-1.8 3.1-2.8 4.9-2.8 1.8 0 3 1 4.5 1 1.5 0 2.4-1 4.5-1 1.6 0 3.3.9 4.5 2.4-3.9 2.2-3.3 7.8.7 9z"/></svg>
  ),
  Search: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="7" cy="7" r="5"/><path d="m11 11 3 3"/></svg>
  ),
  Cross: ({ size = 28, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill={color}>
      <rect x="12" y="3" width="4" height="22"/>
      <rect x="6" y="9" width="16" height="4"/>
    </svg>
  ),
  ChevronLeft: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3 5 8l5 5"/></svg>
  ),
  ChevronRight: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3l5 5-5 5"/></svg>
  ),
};

// ─────────────────────────────────────────────────────────────
// Site header (matches twmc.org)
// ─────────────────────────────────────────────────────────────
function SiteHeader() {
  return (
    <>
      <div className="site-strip">
        <div className="site-strip-inner">
          <a href="#">The Woodlands</a>
          <a href="#">Woodforest</a>
          <a href="#">Montgomery</a>
          <a href="#">Creekside</a>
          <a href="#">Español</a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-logo">
            <div className="site-logo-text">
              The Woodlands
              <small>Methodist Church</small>
            </div>
            <div className="site-logo-mark">
              <Icon.Cross size={18} color="#fff"/>
            </div>
          </div>
          <nav className="site-nav">
            <a href="#">Times & Locations</a>
            <a href="#">Visit</a>
            <a href="#">Grow</a>
            <a href="#" style={{color:'var(--twmc-red)'}}>Messages</a>
            <a href="#">Serve</a>
            <a href="#">Give</a>
            <a href="#" className="login">Login</a>
          </nav>
        </div>
      </header>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// Site footer
// ─────────────────────────────────────────────────────────────
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <div className="footer-brand-line">
            <div className="footer-brand">THE WOODLANDS<br/><span style={{fontSize:10, letterSpacing:'.25em', opacity:.7}}>METHODIST CHURCH</span></div>
            <div style={{fontSize:11, opacity:.7, lineHeight:1.6}}>Member of the<br/><strong style={{color:'#fff', letterSpacing:'.1em'}}>GLOBAL METHODIST CHURCH</strong></div>
          </div>
          <div className="footer-meta">
            2200 Lake Woodlands Drive, The Woodlands, TX 77380<br/>
            (281) 297-5900
          </div>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22V12h3l.5-4H13V5.5c0-1 .3-1.5 1.7-1.5H17V.5C16.5.4 15.4.3 14 .3 11 .3 9 2 9 5v3H6v4h3v10h4z"/></svg></a>
            <a href="#" aria-label="YouTube"><Icon.Youtube/></a>
            <a href="#" aria-label="Podcast"><Icon.Mic/></a>
          </div>
        </div>
        <div className="footer-links">
          <a href="#">What We Believe</a>
          <a href="#">Facilities</a>
          <a href="#">Employment</a>
          <a href="#">Fireside Cafe</a>
          <a href="#">Indoor Playgrounds</a>
          <a href="#">Funerals & Memorial Services</a>
          <a href="#">Find Help & Support</a>
          <a href="#">My Account</a>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// Sermon data — fictional but realistic series for this church
// ─────────────────────────────────────────────────────────────
const SERMON_SERIES = [
  {
    id: 's-rooted',
    title: 'Rooted',
    subtitle: 'A study in the Psalms',
    speaker: 'Rev. Pierce Drake',
    date: 'Apr 27, 2026',
    duration: '38 min',
    scripture: 'Psalm 1:1–6',
    blurb: 'How a life planted in scripture bears fruit in every season — even in the dry years.',
    palette: { bg: '#5C1620', accent: '#F5F2EE', motif: 'tree' },
    current: true,
  },
  {
    id: 's-table',
    title: 'At the Table',
    subtitle: 'Communion as community',
    speaker: 'Rev. Luann Riley',
    date: 'Apr 20, 2026',
    duration: '32 min',
    scripture: 'Luke 24:13–35',
    blurb: 'On the road to Emmaus, Jesus was known in the breaking of bread. What our table reveals about His.',
    palette: { bg: '#7B1F2D', accent: '#EAE4DB', motif: 'bread' },
  },
  {
    id: 's-wilderness',
    title: 'Through the Wilderness',
    subtitle: 'Lent 2026',
    speaker: 'Rev. Pierce Drake',
    date: 'Apr 13, 2026',
    duration: '41 min',
    scripture: 'Exodus 16:1–18',
    blurb: 'Forty days, forty years — what God does in the in-between when the manna falls one day at a time.',
    palette: { bg: '#3D0F18', accent: '#D4B896', motif: 'desert' },
  },
  {
    id: 's-house',
    title: 'House of Prayer',
    subtitle: 'A series on prayer',
    speaker: 'Rev. Luann Riley',
    date: 'Apr 6, 2026',
    duration: '36 min',
    scripture: 'Matthew 6:5–13',
    blurb: 'Six words at a time. What it means to pray small in a noisy century.',
    palette: { bg: '#1F2D3D', accent: '#EAE4DB', motif: 'arch' },
  },
  {
    id: 's-banding',
    title: 'Banding Together',
    subtitle: 'Wesleyan rhythms',
    speaker: 'Dr. Mark Sorensen',
    date: 'Mar 30, 2026',
    duration: '44 min',
    scripture: 'Acts 2:42–47',
    blurb: 'The early church met in homes, broke bread, and held one another accountable. We can too.',
    palette: { bg: '#4A3528', accent: '#F5C97A', motif: 'circle' },
  },
  {
    id: 's-easter',
    title: 'He Is Risen',
    subtitle: 'Easter Sunday',
    speaker: 'Rev. Pierce Drake',
    date: 'Mar 23, 2026',
    duration: '29 min',
    scripture: 'John 20:1–18',
    blurb: 'The first day of the week, while it was still dark — Mary went to the tomb. And nothing has been the same since.',
    palette: { bg: '#7B1F2D', accent: '#F5C97A', motif: 'sunrise' },
  },
  {
    id: 's-anchored',
    title: 'Anchored',
    subtitle: 'Hope in storms',
    speaker: 'Rev. Pierce Drake',
    date: 'Mar 16, 2026',
    duration: '36 min',
    scripture: 'Hebrews 6:19',
    blurb: 'Hope as an anchor for the soul — firm and secure when the waters rise.',
    palette: { bg: '#0E2A3A', accent: '#7DC8E8', motif: 'arch' },
  },
  {
    id: 's-shaken',
    title: 'Shaken',
    subtitle: 'Stewardship 2026',
    speaker: 'Dr. Mark Sorensen',
    date: 'Feb 23, 2026',
    duration: '40 min',
    scripture: 'Hebrews 12:26–29',
    blurb: 'When everything that can be shaken is shaken, what remains?',
    palette: { bg: '#1B5A8A', accent: '#F5F2EE', motif: 'circle' },
  },
  {
    id: 's-john',
    title: 'The Gospel of John',
    subtitle: 'A walk through the fourth gospel',
    speaker: 'Rev. Luann Riley',
    date: 'Feb 9, 2026',
    duration: '42 min',
    scripture: 'John 1:1–14',
    blurb: 'In the beginning was the Word. A study of the gospel that shows us the heart of Jesus.',
    palette: { bg: '#2C4A3E', accent: '#F5E6C8', motif: 'sunrise' },
  },
  {
    id: 's-truth',
    title: 'Truth Be Told',
    subtitle: 'Honest faith',
    speaker: 'Rev. Pierce Drake',
    date: 'Jan 26, 2026',
    duration: '34 min',
    scripture: 'John 8:31–32',
    blurb: 'The truth will set you free — but first it will tell on you.',
    palette: { bg: '#F5F2EE', accent: '#7B1F2D', motif: 'bread', light: true },
  },
  {
    id: 's-emmanuel',
    title: 'Emmanuel',
    subtitle: 'God with us · Advent',
    speaker: 'Rev. Pierce Drake',
    date: 'Dec 22, 2025',
    duration: '31 min',
    scripture: 'Matthew 1:18–25',
    blurb: 'God did not stay distant. He drew near, took on flesh, and dwelt among us.',
    palette: { bg: '#3D2418', accent: '#F5C97A', motif: 'sunrise' },
  },
  {
    id: 's-summertime',
    title: 'Summertime Psalms',
    subtitle: 'A summer in the Psalter',
    speaker: 'Rev. Luann Riley',
    date: 'Aug 25, 2025',
    duration: '28 min',
    scripture: 'Psalm 23',
    blurb: 'The slow, sun-soaked rhythm of trusting God when the days are long.',
    palette: { bg: '#3A5848', accent: '#F5C97A', motif: 'sunrise' },
  },
];

// Series artwork — generative SVG (tasteful placeholders matching real sermon-series art)
function SeriesArt({ series, style }) {
  const { palette, title, subtitle, motif } = series;
  const bg = palette.bg;
  const accent = palette.accent;

  return (
    <div style={{
      position:'absolute', inset:0,
      background: bg,
      overflow:'hidden',
      ...style,
    }}>
      {/* Motif backdrop */}
      <SeriesMotif motif={motif} accent={accent}/>

      {/* Texture noise */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:
          `radial-gradient(circle at 30% 20%, rgba(255,255,255,.08), transparent 50%),
           radial-gradient(circle at 80% 90%, rgba(0,0,0,.25), transparent 60%)`,
        mixBlendMode:'overlay',
      }}/>

      {/* Title block */}
      <div style={{
        position:'absolute', left:20, right:20, bottom:18,
        color: accent,
      }}>
        <div style={{
          fontFamily:'var(--sans)',
          fontSize:9,
          letterSpacing:'.32em',
          textTransform:'uppercase',
          opacity:.7,
          marginBottom:6,
        }}>{subtitle}</div>
        <div style={{
          fontFamily:'var(--display)',
          fontSize: title.length > 14 ? 26 : title.length > 10 ? 32 : 38,
          fontWeight:700,
          lineHeight:.92,
          letterSpacing:'-.01em',
          textTransform:'uppercase',
        }}>{title}</div>
      </div>
    </div>
  );
}

function SeriesMotif({ motif, accent }) {
  const op = .14;
  if (motif === 'tree') return (
    <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
      <g fill={accent} opacity={op}>
        <rect x="146" y="200" width="8" height="180"/>
        <path d="M150 60 C 100 100 80 160 100 220 C 110 200 130 190 145 195 L145 110 C 145 100 150 90 150 60 Z"/>
        <path d="M150 60 C 200 100 220 160 200 220 C 190 200 170 190 155 195 L155 110 C 155 100 150 90 150 60 Z"/>
        <circle cx="120" cy="140" r="4"/><circle cx="180" cy="160" r="3"/><circle cx="150" cy="100" r="3"/><circle cx="195" cy="200" r="3"/><circle cx="105" cy="190" r="3"/>
      </g>
    </svg>
  );
  if (motif === 'bread') return (
    <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
      <g fill="none" stroke={accent} strokeWidth="1.5" opacity={op*1.8}>
        <ellipse cx="150" cy="180" rx="110" ry="38"/>
        <ellipse cx="150" cy="170" rx="90" ry="30"/>
        <path d="M70 185 L230 185" strokeWidth="0.8"/>
        <path d="M120 160 Q 150 152 180 160" strokeWidth="0.8"/>
      </g>
    </svg>
  );
  if (motif === 'desert') return (
    <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
      <g fill={accent} opacity={op}>
        <path d="M0 280 Q 80 240 160 270 T 300 260 L300 400 L0 400 Z"/>
        <path d="M0 320 Q 100 290 200 310 T 300 300 L300 400 L0 400 Z" opacity=".6"/>
        <circle cx="220" cy="100" r="22"/>
      </g>
    </svg>
  );
  if (motif === 'arch') return (
    <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
      <g fill="none" stroke={accent} strokeWidth="1.2" opacity={op*1.6}>
        <path d="M80 380 L80 220 Q 80 140 150 140 Q 220 140 220 220 L220 380"/>
        <path d="M100 380 L100 230 Q 100 158 150 158 Q 200 158 200 230 L200 380" opacity=".7"/>
        <line x1="60" y1="380" x2="240" y2="380"/>
      </g>
    </svg>
  );
  if (motif === 'circle') return (
    <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
      <g fill="none" stroke={accent} strokeWidth="1" opacity={op*1.5}>
        <circle cx="150" cy="180" r="120"/>
        <circle cx="150" cy="180" r="90"/>
        <circle cx="150" cy="180" r="60"/>
        <circle cx="150" cy="180" r="30"/>
      </g>
    </svg>
  );
  if (motif === 'sunrise') return (
    <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}>
      <g fill={accent} opacity={op}>
        <circle cx="150" cy="240" r="80"/>
        <rect x="0" y="240" width="300" height="160"/>
      </g>
      <g stroke={accent} strokeWidth="1" opacity={op*1.4} fill="none">
        <line x1="150" y1="120" x2="150" y2="80"/>
        <line x1="80" y1="180" x2="50" y2="160"/>
        <line x1="220" y1="180" x2="250" y2="160"/>
        <line x1="100" y1="140" x2="80" y2="110"/>
        <line x1="200" y1="140" x2="220" y2="110"/>
      </g>
    </svg>
  );
  return null;
}

// ─────────────────────────────────────────────────────────────
// Listen-on-platform chips
// ─────────────────────────────────────────────────────────────
function PlatformChips({ inverse }) {
  const items = [
    { name: 'Apple Podcasts', icon: <Icon.Apple/> },
    { name: 'Spotify', icon: <Icon.Spotify/> },
    { name: 'YouTube', icon: <Icon.Youtube size={14}/> },
    { name: 'Web', icon: <Icon.Mic size={14}/> },
  ];
  return (
    <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
      {items.map(i => (
        <a key={i.name} href="#" style={{
          display:'inline-flex', alignItems:'center', gap:8,
          padding:'8px 14px',
          background: inverse ? 'rgba(255,255,255,.1)' : '#fff',
          border: `1px solid ${inverse ? 'rgba(255,255,255,.2)' : 'var(--bone)'}`,
          color: inverse ? '#fff' : 'var(--ink)',
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '.04em',
          textDecoration: 'none',
          transition: 'all .18s',
        }}>
          {i.icon}{i.name}
        </a>
      ))}
    </div>
  );
}

Object.assign(window, {
  Icon, SiteHeader, SiteFooter,
  SERMON_SERIES, SeriesArt, SeriesMotif,
  PlatformChips,
});
