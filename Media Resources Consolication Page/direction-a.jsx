// direction-a.jsx — Classic Warm. Single page.
// Hero band -> vertical stack of 4 destination rows, each showing latest content.

const LATEST = {
  message: {
    series: SERMON_SERIES[0],
    episode: 'Planted by Streams',
    date: 'Apr 27, 2026',
    duration: '38 min',
  },
  podcast: {
    title: 'Episode 312 · The Wesleyan Quadrilateral, Plain',
    guest: 'Dr. Mark Sorensen',
    date: 'Apr 28, 2026',
    duration: '42 min',
  },
  youtube: {
    title: 'Holy Week Worship — Full Service',
    date: 'Apr 13, 2026',
    duration: '1h 12m',
    views: '8.4k views',
  },
  online: {
    nextService: 'Sunday · 9:30 AM CT',
    inDays: 'in 2 days',
    onAirNow: false,
  },
};

function DirectionA() {
  return (
    <div style={{background: 'var(--cream)', minHeight: 1800}}>
      <SiteHeader/>

      {/* Hero band */}
      <section style={{
        background: 'var(--twmc-red-deep)',
        color: '#fff',
        padding: '72px 0 88px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <BackgroundCross/>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <div className="section-eyebrow" style={{color:'#E8B4BA', marginBottom:18}}>Media Center</div>
          <h1 className="display-h1" style={{color:'#fff', maxWidth: 1100, marginBottom:32, fontSize:'clamp(44px, 5.4vw, 76px)'}}>
            Watch, listen,<br/>worship anywhere.
          </h1>
          <p style={{
            fontFamily:'var(--serif)',
            fontSize: 22, fontStyle:'italic',
            lineHeight: 1.5,
            color:'#F5D9DD',
            maxWidth: 620,
            margin: 0,
          }}>
            Sermons, podcasts, and live services from The Woodlands Methodist Church — gathered in one place so you never miss a word.
          </p>
        </div>
      </section>

      {/* Four vertical destination rows */}
      <section style={{padding: '56px 0 72px', background:'var(--cream)', marginTop: -32, position:'relative', zIndex:2}}>
        <div className="container" style={{maxWidth: 1100, display:'flex', flexDirection:'column', gap: 20}}>
          <DestRow
            kicker="Sermons"
            title="Messages"
            desc="Every Sunday message, archived and searchable."
            cta="Browse Library"
            href="https://thewoodlandsmethodist.org/messages"
            renderPreview={(inv) => <MessagePreview inverted={inv}/>}
          />
          <DestRow
            kicker="Live"
            title="Church Online"
            desc="Join the 9:30 & 11am services live, every Sunday."
            cta="Watch Live"
            href="https://thewoodlandsmethodist.org/churchonline"
            live
            renderPreview={(inv) => <OnlinePreview inverted={inv}/>}
          />
          <DestRow
            kicker="Video"
            title="YouTube"
            desc="Worship sets, testimonies, and full services."
            cta="Visit Channel"
            href="https://www.youtube.com/c/TheWoodlandsMethodistChurch"
            renderPreview={(inv) => <YouTubePreview inverted={inv}/>}
          />
          <DestRow
            kicker="Audio"
            title="Podcast"
            desc="Sermons + conversations on Apple, Spotify, and more."
            cta="Subscribe"
            href="https://thewoodlandsmethodist.org/podcast"
            renderPreview={(inv) => <PodcastPreview inverted={inv}/>}
          />
        </div>
      </section>

      {/* Live status banner */}
      <SiteFooter/>

      <style>{`
        @keyframes twmc-live-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,.4); }
          50% { box-shadow: 0 0 0 12px rgba(255,255,255,0); }
        }
      `}</style>
    </div>
  );
}

// Vertical destination row — left side identity + CTA, right side latest preview.
// Hover inverts the row to the maroon brand color.
function DestRow({ kicker, title, desc, cta, href, live, renderPreview }) {
  const [hover, setHover] = React.useState(false);
  const inv = hover; // when true, row goes maroon
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display:'grid',
        gridTemplateColumns:'1.05fr 1fr',
        gap: 0,
        background: inv ? 'var(--twmc-red)' : '#fff',
        color: inv ? '#fff' : 'var(--ink)',
        borderRadius: 8,
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s ease, background-color .25s ease, color .25s ease',
        overflow:'hidden',
        position:'relative',
        minHeight: 220,
      }}
    >
      {/* LIVE pill */}
      {live && (
        <div style={{
          position:'absolute', top:18, right:18, zIndex:3,
          display:'inline-flex', alignItems:'center', gap:6,
          padding:'5px 11px',
          background: inv ? '#fff' : '#D32436',
          color: inv ? '#D32436' : '#fff',
          borderRadius:999, fontSize:9, letterSpacing:'.2em', fontWeight:700,
          boxShadow:'0 2px 8px rgba(211,36,54,.35)',
          transition: 'background-color .25s ease, color .25s ease',
        }}>
          <Icon.Live size={8}/>LIVE
        </div>
      )}

      {/* Left: identity + CTA */}
      <div style={{padding:'32px 36px', display:'flex', flexDirection:'column'}}>
        <div style={{
          fontSize: 10, letterSpacing:'.3em', textTransform:'uppercase',
          color: inv ? 'rgba(255,255,255,.85)' : 'var(--twmc-red)',
          fontWeight: 700, marginBottom: 10,
          transition: 'color .25s ease',
        }}>{kicker}</div>
        <div style={{
          fontFamily:'var(--display)',
          fontSize: 40, fontWeight:700, lineHeight:1,
          textTransform:'uppercase',
          marginBottom: 14,
          letterSpacing:'-.005em',
        }}>{title}</div>
        <div style={{
          fontSize:14, lineHeight:1.55,
          color: inv ? 'rgba(255,255,255,.85)' : 'var(--ink-mute)',
          marginBottom: 22, maxWidth: 380,
          transition: 'color .25s ease',
        }}>{desc}</div>
        <a href={href} target="_blank" rel="noopener" style={{
          marginTop:'auto',
          display:'inline-flex', alignItems:'center', gap:8,
          alignSelf:'flex-start',
          padding:'10px 22px',
          background: inv ? '#fff' : 'var(--twmc-red)',
          color: inv ? 'var(--twmc-red)' : '#fff',
          borderRadius: 999,
          fontSize: 12, fontWeight: 700, letterSpacing:'.14em',
          textTransform:'uppercase', textDecoration:'none',
          transition: 'background-color .25s ease, color .25s ease',
        }}>{cta}<Icon.ArrowRight size={12}/></a>
      </div>

      {/* Right: latest preview */}
      <div style={{
        background: inv ? 'rgba(0,0,0,.18)' : 'var(--cream)',
        borderLeft: inv ? '1px solid rgba(255,255,255,.12)' : '1px solid var(--bone)',
        padding:'24px 28px',
        display:'flex', flexDirection:'column', justifyContent:'center',
        transition: 'background-color .25s ease, border-color .25s ease',
      }}>
        <div style={{
          fontSize:9, letterSpacing:'.32em', textTransform:'uppercase',
          color: inv ? 'rgba(255,255,255,.6)' : 'var(--ink-faint)',
          fontWeight:700, marginBottom:12,
          transition: 'color .25s ease',
        }}>Latest</div>
        {renderPreview(inv)}
      </div>
    </div>
  );
}

// ─── Per-destination latest previews ───────────────────────────────
// `inverted` = parent row is in maroon hover state.

function MessagePreview({ inverted }) {
  const m = LATEST.message;
  const titleColor = inverted ? '#fff' : 'var(--ink)';
  const subColor = inverted ? 'rgba(255,255,255,.72)' : 'var(--ink-mute)';
  const metaColor = inverted ? 'rgba(255,255,255,.6)' : 'var(--ink-faint)';
  return (
    <div style={{display:'flex', gap:14, alignItems:'center'}}>
      <div style={{position:'relative', width: 140, height: 79, flexShrink:0, borderRadius: 6, overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,.25)'}}>
        <SeriesArt series={m.series}/>
        <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,.15)'}}/>
        <div style={{
          position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          width:32, height:32, borderRadius:'50%', background:'rgba(255,255,255,.92)',
          display:'grid', placeItems:'center', color:'var(--twmc-red)',
        }}><Icon.Play size={11} fill="var(--twmc-red)"/></div>
      </div>
      <div style={{minWidth: 0}}>
        <div style={{fontFamily:'var(--display)', fontSize:18, fontWeight:700, textTransform:'uppercase', lineHeight:1.05, marginBottom:4, color: titleColor, transition:'color .25s ease'}}>{m.episode}</div>
        <div style={{fontSize:11, color: subColor, marginBottom:2, fontStyle:'italic', fontFamily:'var(--serif)', transition:'color .25s ease'}}>from “{m.series.title}”</div>
        <div style={{fontSize:11, color: metaColor, letterSpacing:'.04em', transition:'color .25s ease'}}>{m.date} · {m.duration}</div>
      </div>
    </div>
  );
}

function PodcastPreview({ inverted }) {
  const p = LATEST.podcast;
  const kickerColor = inverted ? '#fff' : 'var(--twmc-red)';
  const titleColor = inverted ? '#fff' : 'var(--ink)';
  const metaColor = inverted ? 'rgba(255,255,255,.7)' : 'var(--ink-mute)';
  return (
    <div style={{display:'flex', gap:14, alignItems:'center'}}>
      <div style={{
        width:72, height:72, flexShrink:0, borderRadius: 6, overflow:'hidden',
        background:'linear-gradient(135deg, #7B1F2D, #3D0F18)',
        display:'grid', placeItems:'center', color:'#F5C97A',
        boxShadow:'0 2px 8px rgba(0,0,0,.18)',
        position:'relative',
      }}>
        <Icon.Mic size={26}/>
        <div style={{
          position:'absolute', bottom:6, left:6, right:6,
          height: 14, display:'flex', gap:1.5, alignItems:'flex-end', justifyContent:'center',
        }}>
          {[3,7,4,9,6,10,5,8,4,6].map((h,i) => (
            <div key={i} style={{flex:1, height:`${h*1.2}px`, background:'rgba(245,201,122,.85)', borderRadius:1}}/>
          ))}
        </div>
      </div>
      <div style={{minWidth:0}}>
        <div style={{fontSize:11, color: kickerColor, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', marginBottom:4, transition:'color .25s ease'}}>Episode 312</div>
        <div style={{fontFamily:'var(--display)', fontSize:17, fontWeight:700, lineHeight:1.1, marginBottom:6, color: titleColor, transition:'color .25s ease'}}>The Wesleyan Quadrilateral, Plain</div>
        <div style={{fontSize:11, color: metaColor, transition:'color .25s ease'}}>{p.guest} · {p.duration}</div>
      </div>
    </div>
  );
}

function YouTubePreview({ inverted }) {
  const y = LATEST.youtube;
  const titleColor = inverted ? '#fff' : 'var(--ink)';
  const metaColor = inverted ? 'rgba(255,255,255,.7)' : 'var(--ink-mute)';
  return (
    <div style={{display:'flex', gap:14, alignItems:'center'}}>
      <div style={{position:'relative', width: 140, height: 79, flexShrink:0, borderRadius: 6, overflow:'hidden', background:'#1a1614', boxShadow:'0 2px 8px rgba(0,0,0,.25)'}}>
        {/* faux video thumbnail */}
        <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse at 30% 40%, #5C1620, #1a1614 70%)'}}/>
        <svg viewBox="0 0 140 79" style={{position:'absolute', inset:0, width:'100%', height:'100%', opacity:.4}}>
          <path d="M0 60 Q 40 30 70 50 T 140 40 L140 79 L0 79 Z" fill="#7B1F2D"/>
        </svg>
        <div style={{
          position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          width:36, height:26, borderRadius:6, background:'#FF0000',
          display:'grid', placeItems:'center',
        }}><svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 1 L8 5 L2 9 Z" fill="#fff"/></svg></div>
        <div style={{
          position:'absolute', bottom:5, right:5,
          padding:'1px 5px', background:'rgba(0,0,0,.8)', color:'#fff',
          fontSize:9, fontFamily:'var(--mono)', borderRadius:2,
        }}>{y.duration}</div>
      </div>
      <div style={{minWidth:0}}>
        <div style={{fontFamily:'var(--display)', fontSize:17, fontWeight:700, lineHeight:1.1, marginBottom:6, color: titleColor, textTransform:'uppercase', transition:'color .25s ease'}}>{y.title}</div>
        <div style={{fontSize:11, color: metaColor, letterSpacing:'.04em', transition:'color .25s ease'}}>{y.date} · {y.views}</div>
      </div>
    </div>
  );
}

function OnlinePreview({ inverted }) {
  const ringBase = inverted ? 'rgba(255,255,255,.5)' : 'rgba(211,36,54,.3)';
  const ringFill = inverted ? 'rgba(255,255,255,.15)' : 'rgba(211,36,54,.1)';
  const ringIcon = inverted ? '#fff' : '#D32436';
  const kickerColor = inverted ? '#fff' : '#D32436';
  const titleColor = inverted ? '#fff' : 'var(--ink)';
  const metaColor = inverted ? 'rgba(255,255,255,.7)' : 'var(--ink-mute)';
  return (
    <div style={{display:'flex', gap:14, alignItems:'center'}}>
      <div style={{
        width: 80, height: 80, flexShrink:0, borderRadius:'50%',
        background: ringFill, border:`1.5px solid ${ringBase}`,
        display:'grid', placeItems:'center', color: ringIcon,
        position:'relative', transition:'background-color .25s ease, border-color .25s ease, color .25s ease',
      }}>
        <div style={{
          position:'absolute', inset:-4, borderRadius:'50%',
          border:`1.5px solid ${ringBase}`,
          animation:'twmc-live-pulse 2.4s ease-in-out infinite',
        }}/>
        <Icon.Tv size={28}/>
      </div>
      <div style={{minWidth:0}}>
        <div style={{fontSize:11, color: kickerColor, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', marginBottom:4, transition:'color .25s ease'}}>Next Service</div>
        <div style={{fontFamily:'var(--display)', fontSize:18, fontWeight:700, lineHeight:1.05, marginBottom:6, color: titleColor, textTransform:'uppercase', transition:'color .25s ease'}}>Sunday · 9:30 AM CT</div>
        <div style={{fontSize:11, color: metaColor, letterSpacing:'.04em', transition:'color .25s ease'}}>in 2 days · also at 11:00 AM</div>
      </div>
    </div>
  );
}

function BackgroundCross() {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" style={{
      position:'absolute', right:-100, top:-50,
      opacity:.06, pointerEvents:'none',
    }}>
      <g fill="#fff">
        <rect x="380" y="80" width="40" height="440"/>
        <rect x="260" y="200" width="280" height="40"/>
      </g>
    </svg>
  );
}

Object.assign(window, { DirectionA });
