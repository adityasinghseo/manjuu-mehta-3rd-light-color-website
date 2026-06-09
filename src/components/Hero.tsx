import { Link } from "react-router-dom";
import portrait from "@/assets/manjuu-portrait-transparent.png";
import { OrnDivider, MMLogo } from "./SiteNav";

/* ── Zodiac symbols ─────────────────────────────────────────── */
const ZODIAC = ["ARI", "TAU", "GEM", "CAN", "LEO", "VIR", "LIB", "SCO", "SAG", "CAP", "AQU", "PIS"];

/* ── Animated Zodiac Wheel ──────────────────────────────────── */
const ZodiacWheel = () => (
  <svg
    viewBox="0 0 320 320"
    style={{
      width: "100%",
      height: "100%",
      animation: "spinSlow 90s linear infinite",
      transformOrigin: "160px 160px",
    }}
    fill="none"
  >
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-accent-gold)" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="100%" stopColor="var(--color-accent-gold)" stopOpacity="0.7" />
      </linearGradient>
    </defs>
    {/* Outer ring */}
    <circle cx="160" cy="160" r="152" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.55" />
    {/* Mid ring */}
    <circle cx="160" cy="160" r="138" stroke="url(#goldGrad)" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.40" />
    {/* Inner ring */}
    <circle cx="160" cy="160" r="124" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.30" />

    {/* 12 divider spokes */}
    {ZODIAC.map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      return (
        <line key={i}
          x1={160 + 124 * Math.cos(a)} y1={160 + 124 * Math.sin(a)}
          x2={160 + 152 * Math.cos(a)} y2={160 + 152 * Math.sin(a)}
          stroke="url(#goldGrad)" strokeWidth="0.7" opacity="0.45"
        />
      );
    })}

    {/* Zodiac symbols in elegant serif text */}
    {ZODIAC.map((sym, i) => {
      const a = ((i * 30 - 90) * Math.PI) / 180;
      const r = 138;
      return (
        <text key={i}
          x={160 + r * Math.cos(a)}
          y={160 + r * Math.sin(a) + 4}
          textAnchor="middle"
          fontSize="9"
          fill="var(--color-accent-gold)"
          opacity="0.85"
          fontFamily="Cinzel, serif"
          fontWeight="600"
          letterSpacing="0.05em"
          style={{ animation: `spinRev 90s linear infinite`, transformOrigin: "160px 160px" }}
        >{sym}</text>
      );
    })}

    {/* Dot accents between signs */}
    {ZODIAC.map((_, i) => {
      const a = ((i * 30 + 15 - 90) * Math.PI) / 180;
      return (
        <circle key={i}
          cx={160 + 120 * Math.cos(a)}
          cy={160 + 120 * Math.sin(a)}
          r="2"
          fill="var(--color-accent-gold)"
          opacity="0.40"
        />
      );
    })}
  </svg>
);

/* ── Hero ─────────────────────────────────────────────────────── */
const Hero = () => (
  <section
    style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: 98,
      paddingBottom: 64,
      overflow: "hidden",
      background: "#F7F0E4",
    }}
  >
    {/* Sparkle overlay with gentle slow twinkle */}
    <div className="sparkle-field" style={{ animation: "twinkle 12s ease-in-out infinite alternate", opacity: 0.65 }} />

    {/* Elegant Sacred Geometry Mandala Watermark in Background */}
    <div style={{
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: 820,
      height: "90%",
      maxHeight: 820,
      opacity: 0.04,
      pointerEvents: "none",
      zIndex: 1,
    }}>
      <svg viewBox="0 0 500 500" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.8">
        <circle cx="250" cy="250" r="240" />
        <circle cx="250" cy="250" r="225" strokeDasharray="3 3" />
        <circle cx="250" cy="250" r="185" />
        <circle cx="250" cy="250" r="130" />
        <circle cx="250" cy="250" r="70" />
        <polygon points="250,10 391,250 250,490 109,250" />
        <polygon points="250,10 423,150 250,490 77,150" />
        <polygon points="250,10 423,350 250,490 77,350" />
        <polygon points="250,10 109,250 250,490 391,250" transform="rotate(45 250 250)" />
        <polygon points="250,10 109,250 250,490 391,250" transform="rotate(22.5 250 250)" />
        <polygon points="250,10 109,250 250,490 391,250" transform="rotate(67.5 250 250)" />
      </svg>
    </div>

    {/* Ambient glow blobs */}
    <div style={{
      position: "absolute", top: "-5%", right: "8%",
      width: 480, height: 480, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(var(--color-accent-gold-rgb),0.11) 0%, transparent 70%)",
      filter: "blur(60px)", pointerEvents: "none",
      animation: "glow 5s ease-in-out infinite",
    }} />
    <div style={{
      position: "absolute", bottom: "5%", left: "3%",
      width: 380, height: 380, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(var(--color-accent-gold-rgb),0.08) 0%, transparent 70%)",
      filter: "blur(60px)", pointerEvents: "none",
      animation: "glow 6s ease-in-out infinite",
      animationDelay: "2s",
    }} />

    {/* ── Main Content Row ── */}
    <div style={{
      position: "relative",
      zIndex: 10,
      maxWidth: 1280,
      margin: "0 auto",
      width: "100%",
      padding: "0 32px",
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 52,
      alignItems: "center",
    }} className="hero-grid">

      {/* ── LEFT: Brand Content ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", animation: "fadeUp 0.9s ease both" }} className="hero-text">

        {/* Professional, clean titles typography */}
        <div style={{ marginBottom: 18 }} className="hero-titles">
          <p style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(0.7rem, 1vw, 0.9rem)",
            color: "var(--color-accent-gold)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            lineHeight: 1.6,
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 12px",
            alignItems: "center",
          }}>
            <span>Vastu Advisor</span>
            <span style={{ color: "var(--color-accent-gold)", fontSize: "clamp(0.7rem, 1vw, 0.9rem)" }}>✦</span>
            <span>Astrologer</span>
            <span style={{ color: "var(--color-accent-gold)", fontSize: "clamp(0.7rem, 1vw, 0.9rem)" }}>✦</span>
            <span>Karmic Numerologist</span>
          </p>
        </div>

        {/* Main Name Heading */}
        <div className="hero-name-block">
        <h1 style={{
          fontFamily: "Cinzel, serif",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
          color: "var(--color-accent-gold)", // Solid dark goldenrod color for better readability
          lineHeight: 1.0,
          letterSpacing: "0.02em",
          marginBottom: 14,
          textShadow: "0 2px 12px rgba(var(--color-accent-gold-rgb),0.04)",
        }}>
          <span style={{ position: "relative", display: "inline-block" }}>
            M
            <span style={{
              position: "absolute",
              width: "0.15em",
              height: "0.15em",
              backgroundColor: "#FF0000", // True bright red dot
              borderRadius: "50%",
              top: "25%", // Positioned slightly higher, centered in the 'V' space
              left: "50%",
              transform: "translate(-50%, -50%)"
            }} />
          </span>anjuu Mehta
        </h1>

        {/* Ornamental divider */}
        <OrnDivider className="w-full" style={{ maxWidth: 460, marginBottom: 18 } as React.CSSProperties} />
        </div>

        {/* Tagline */}
        <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }} className="hero-tagline">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--color-accent-gold)" style={{ animation: "pulseGlow 2.5s ease-in-out infinite", flexShrink: 0 }}>
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
          </svg>
          <p style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 600,
            fontSize: "clamp(1.3rem, 2.2vw, 1.55rem)",
            color: "var(--color-accent-gold)",
            lineHeight: 1.3,
            letterSpacing: "0.06em",
          }}>
            Aligning Lives with the Cosmos
          </p>
        </div>

        {/* Description text */}
        <div className="hero-body">
        <p style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)",
          lineHeight: 1.9,
          color: "var(--color-text-primary)", // Solid dark brown for maximum readability
          maxWidth: 460,
          marginBottom: 32,
        }}>
          A decade of Vastu, Vedic Astrology &amp; Karmic Numerology — guiding you to clarity, prosperity and aligned growth.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
          <Link
            to="/contact"
            id="hero-book-cta"
            className="btn-hero-solid"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Trust Element */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 22, animation: "fadeUp 0.9s ease 0.25s both" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--color-accent-gold)" opacity="0.8" style={{ animation: "pulseGlow 2.5s ease-in-out infinite", flexShrink: 0 }}>
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
          </svg>
          <span style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(1.15rem, 1.5vw, 1.25rem)",
            fontWeight: 500,
            color: "var(--color-accent-gold)", // Solid color for better readability
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            Trusted by clients across <span style={{ color: "var(--color-accent-gold)", fontWeight: 700 }}>India &amp; Abroad</span>
          </span>
        </div>
        </div>
      </div>

      {/* ── RIGHT: Portrait + Zodiac Wheel ── */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }} className="hero-image">

        {/* Cinematic Floating Portrait with Feathered Fade */}
        <div style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 490,
          animation: "fadeUp 1.1s ease 0.15s both, floatPortrait 6s ease-in-out infinite alternate",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          overflow: "visible",
        }} className="portrait-container">
          {/* Multi-layered Aura Glow behind portrait */}
          <div style={{
            position: "absolute",
            width: "125%",
            height: "125%",
            background: "radial-gradient(circle, rgba(253,246,238,0.35) 0%, rgba(var(--color-accent-gold-rgb),0.16) 35%, rgba(var(--color-accent-gold-rgb),0.05) 65%, transparent 100%)",
            filter: "blur(50px)",
            pointerEvents: "none",
            zIndex: 1,
            top: "-15%",
            left: "-12%",
          }} />

          {/* Subtle Zodiac Wheel positioned behind the head as a celestial crown */}
          <div style={{
            position: "absolute",
            top: "23%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "74%",
            maxWidth: 340,
            aspectRatio: "1",
            zIndex: 5,
            pointerEvents: "none",
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              opacity: 0.46,
              filter: "drop-shadow(0 0 16px rgba(var(--color-accent-gold-rgb),0.12))",
              animation: "floatSlow 8s ease-in-out infinite",
            }}>
              <ZodiacWheel />
            </div>
          </div>

          {/* Transparent portrait with bottom feather mask */}
          <div style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
          }} className="portrait-wrapper">
            <img
              src={portrait}
              alt="Manjuu Mehta – Vastu Advisor, Astrologer & Karmic Numerologist"
              style={{
                width: "100%",
                maxHeight: 560,
                display: "block",
                objectFit: "contain",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.2) 92%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.2) 92%, rgba(0,0,0,0) 100%)",
                transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className="portrait-img"
            />
            {/* Shimmer sweep container */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(105deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 65%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "-100% 0",
              pointerEvents: "none",
              transition: "background-position 0.8s ease",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.2) 92%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.2) 92%, rgba(0,0,0,0) 100%)",
            }} className="portrait-shimmer" />
          </div>
        </div>
      </div>
    </div>

    {/* ── Stats Bar ── */}
    <div style={{
      position: "relative",
      zIndex: 10,
      maxWidth: 960,
      margin: "56px auto 0",
      width: "100%",
      padding: "0 32px",
      animation: "fadeUp 0.9s ease 0.35s both",
    }} className="stats-bar-wrap">
      <div className="stats-scroll-wrapper">
        <div style={{
          background: "#F7F0E4",
          border: "1px solid rgba(var(--color-accent-gold-rgb),0.22)",
          borderRadius: 18,
          backdropFilter: "blur(20px)",
          boxShadow: "0 16px 45px -12px rgba(var(--color-text-heading-rgb),0.08), 0 0 0 1px rgba(255,255,255,0.5) inset",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "24px 20px",
        }} className="stats-grid">

        {/* Stat: Experience */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 28px", justifyContent: "flex-start" }} className="stat-item">
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "#D86A63",
            border: "1px solid rgba(244, 208, 111, 0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.35s ease",
          }} className="stat-icon">
            {/* Hourglass — 10+ Years Experience */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 2h14" />
              <path d="M5 22h14" />
              <path d="M5 2l7 9 7-9" />
              <path d="M5 22l7-9 7 9" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.1rem, 1.4vw, 1.2rem)", fontWeight: 700, color: "var(--color-text-heading)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Experience</div>
            <div style={{ fontFamily: "Cinzel, serif", fontSize: 22, fontWeight: 700, color: "var(--color-text-heading)", marginTop: 3, lineHeight: 1.15 }}>
              10+ <span style={{ fontSize: 18, fontWeight: 600 }}>Years</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="stat-div">
          <div style={{ width: 1, height: 52, background: "linear-gradient(to bottom, transparent, rgba(var(--color-accent-gold-rgb),0.30), transparent)" }} />
        </div>

        {/* Stat: Affiliation */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 28px", justifyContent: "center" }} className="stat-item">
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "#D86A63",
            border: "1px solid rgba(244, 208, 111, 0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.35s ease",
          }} className="stat-icon">
            {/* Medal ribbon — AIFAS Elite Member */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="14" r="6" />
              <path d="M8 6l-2-4h12l-2 4" />
              <path d="M8 6h8" />
              <path d="M12 20v2" />
              <path d="M11 14l1 2 2-3" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.1rem, 1.4vw, 1.2rem)", fontWeight: 700, color: "var(--color-text-heading)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Affiliation</div>
            <div style={{ fontFamily: "Cinzel, serif", fontSize: 20, fontWeight: 700, color: "var(--color-text-heading)", marginTop: 3, lineHeight: 1.2 }}>
              AIFAS Elite <span style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.25rem)", fontWeight: 600 }}>Member</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="stat-div">
          <div style={{ width: 1, height: 52, background: "linear-gradient(to bottom, transparent, rgba(var(--color-accent-gold-rgb),0.30), transparent)" }} />
        </div>

        {/* Stat: Clientele */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 28px", justifyContent: "flex-end" }} className="stat-item">
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "#D86A63",
            border: "1px solid rgba(244, 208, 111, 0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.35s ease",
          }} className="stat-icon">
            {/* Globe with people — Global Clientele */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              <path d="M6 5.5C7.5 7 10 8 12 8s4.5-1 6-2.5" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.1rem, 1.4vw, 1.2rem)", fontWeight: 700, color: "var(--color-text-heading)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Trust &amp; Reach</div>
            <div style={{ fontFamily: "Cinzel, serif", fontSize: 20, fontWeight: 700, color: "var(--color-text-heading)", marginTop: 3, lineHeight: 1.2 }}>
               Global <span style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.25rem)", fontWeight: 600 }}>Clientele</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

    <style>{`
      .hero-grid { grid-template-columns: 1.12fr 1fr !important; gap: 64px !important; }
      .hero-text { align-items: flex-start !important; text-align: left !important; }
      .stats-grid { grid-template-columns: 1fr auto 1fr auto 1fr !important; }
      
      .hero-name-block h1 {
        white-space: nowrap;
      }
      
      /* Interactive hover styles */
      .portrait-wrapper {
        filter: drop-shadow(0 8px 20px rgba(var(--color-accent-gold-rgb),0.03));
        transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      .portrait-wrapper:hover {
        transform: scale(1.015) translateY(-3px);
        filter: drop-shadow(0 15px 32px rgba(var(--color-accent-gold-rgb),0.09)) !important;
      }
      .portrait-wrapper:hover .portrait-img {
        transform: scale(1.02);
      }
      .portrait-wrapper:hover .portrait-shimmer {
        background-position: 100% 0 !important;
      }
      
      /* Animation keyframes and micro details */
      @keyframes spinSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spinRev {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      @keyframes floatSlow {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-8px) rotate(1.5deg); }
      }
      @keyframes floatPortrait {
        0% { transform: translateY(0); }
        100% { transform: translateY(-8px); }
      }
      @keyframes pulseGlow {
        0%, 100% { transform: scale(1); opacity: 0.6; }
        50% { transform: scale(1.12); opacity: 1; filter: drop-shadow(0 0 4px rgba(var(--color-accent-gold-rgb),0.5)); }
      }

      .btn-primary {
        font-family: "Cinzel", serif;
        font-weight: 700;
        font-size: 10.5px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #FFFFFF !important;
        background: var(--grad-maroon);
        padding: 12px 30px;
        border-radius: 999px;
        box-shadow: 0 4px 16px rgba(var(--color-accent-gold-rgb),0.18);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        display: inline-block;
      }
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(var(--color-accent-gold-rgb),0.30), 0 0 12px rgba(var(--color-accent-gold-rgb),0.18);
      }
      .btn-hero-solid {
        font-family: "Cinzel", serif;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #FFFFFF !important;
        background: var(--color-accent-gold); /* Gold color */
        padding: 16px 38px;
        border-radius: 999px;
        border: none;
        box-shadow: none;
        transition: background 0.3s ease, color 0.3s ease;
        display: inline-block;
      }
      .btn-hero-solid:hover {
        background: #A67809; /* Slightly darker gold on hover */
        color: #FFFFFF !important;
      }

      .hero-badge-pill:hover {
        background: rgba(255, 255, 255, 0.90) !important;
        border-color: rgba(var(--color-accent-gold-rgb), 0.60) !important;
        transform: translateY(-2px);
        box-shadow: 0 6px 14px rgba(var(--color-text-heading-rgb),0.06) !important;
      }

      .stat-item {
        transition: all 0.3s ease;
      }
      .stat-item:hover {
        transform: translateY(-2px);
      }
      .stat-item:hover .stat-icon {
        transform: scale(1.10);
        background: var(--color-accent-gold) !important;
        border-color: var(--color-accent-gold) !important;
        box-shadow: 0 4px 16px rgba(var(--color-accent-gold-rgb),0.25);
      }
      .stat-item:hover .stat-icon svg * {
        stroke: #FFFFFF !important;
      }

      @media (max-width: 768px) {
        /* Switch hero grid to flex-col so CSS order works */
        .hero-grid {
          display: flex !important;
          flex-direction: column !important;
          gap: 0 !important;
          padding: 0 20px !important;
        }
        .hero-text {
          display: contents !important; /* dissolve hero-text so children can be ordered */
        }
        
        .hero-name-block h1 {
          white-space: normal !important;
        }

        /* Mobile element order */
        .hero-titles   { order: 1; margin-bottom: 8px !important; text-align: center; width: 100%; justify-content: center; }
        .hero-image    { order: 2; width: 100%; }
        .hero-name-block { order: 3; text-align: center; width: 100%; margin-top: 4px; }
        .hero-tagline  { order: 4; justify-content: center !important; width: 100%; margin-bottom: 12px !important; }
        .hero-body     { order: 5; width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center; }

        /* Compact portrait on mobile */
        .hero-image { max-width: 260px; margin: 0 auto; }
        .portrait-container { max-width: 260px !important; }
        .portrait-img { max-height: 300px !important; }

        /* Reduce stats bar top margin on mobile */
        .stats-bar-wrap { margin-top: 28px !important; padding: 0 16px !important; }

        /* Mobile stats */
        .stats-scroll-wrapper { overflow: visible !important; }
        .stats-grid {
          display: flex !important;
          flex-direction: column !important;
          padding: 0 !important;
          gap: 16px !important;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
        }
        .stat-item {
          flex-direction: row !important;
          align-items: center !important;
          justify-content: flex-start !important;
          text-align: left !important;
          padding: 20px 24px !important;
          gap: 16px !important;
          background: linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(253,246,238,0.7) 100%) !important;
          border: 1px solid rgba(var(--color-accent-gold-rgb),0.2) !important;
          border-radius: 16px !important;
          box-shadow: 0 8px 24px -8px rgba(var(--color-text-heading-rgb),0.08) !important;
          backdrop-filter: blur(10px) !important;
        }
        .stat-icon {
          width: 48px !important;
          height: 48px !important;
          flex-shrink: 0 !important;
        }
        .stat-icon svg {
          width: 22px !important;
          height: 22px !important;
        }
        .stat-div {
          display: none !important;
        }
      }
    `}</style>
  </section>
);

export default Hero;
