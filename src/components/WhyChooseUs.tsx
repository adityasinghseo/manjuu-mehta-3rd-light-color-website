import { Link } from "react-router-dom";
import { User, Target, ShieldCheck, Flower2, Heart } from "lucide-react";
import { OrnDivider } from "./SiteNav";

/* ────────────────────────────────────────────────────────────
   POSTER-ACCURATE SVG ICONS for the 4 core services
   Refined with linear gold gradients and thinned borders
─────────────────────────────────────────────────────────────*/
const IconAstrology = () => (
  <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
    <defs>
      <linearGradient id="goldGradWcu" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C5922A" />
        <stop offset="100%" stopColor="#EAD295" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" stroke="url(#goldGradWcu)" strokeWidth="1.2"/>
    <circle cx="32" cy="32" r="21" stroke="url(#goldGradWcu)" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.6"/>
    {[...Array(12)].map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      return <line key={i} x1={32 + 21*Math.cos(a)} y1={32 + 21*Math.sin(a)} x2={32 + 28*Math.cos(a)} y2={32 + 28*Math.sin(a)} stroke="url(#goldGradWcu)" strokeWidth="0.6" opacity="0.55" />;
    })}
    <circle cx="32" cy="32" r="3.5" fill="#C5922A" opacity="0.85"/>
    <circle cx="32" cy="32" r="1.5" fill="#FAF0E4"/>
  </svg>
);

const IconNumerology = () => (
  <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
    <defs>
      <linearGradient id="goldGradWcu" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C5922A" />
        <stop offset="100%" stopColor="#EAD295" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" stroke="url(#goldGradWcu)" strokeWidth="1.2"/>
    {[["1","8","9"],["3","5","9"],["2","6","6"]].map((row, ri) =>
      row.map((n, ci) => (
        <text key={`${ri}-${ci}`}
          x={18 + ci*14} y={24 + ri*14}
          textAnchor="middle" fontSize="11" fontWeight="600"
          fill="#C5922A" fontFamily="Poppins, sans-serif"
        >{n}</text>
      ))
    )}
    <line x1="26" y1="12" x2="26" y2="52" stroke="url(#goldGradWcu)" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4"/>
    <line x1="38" y1="12" x2="38" y2="52" stroke="url(#goldGradWcu)" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4"/>
    <line x1="12" y1="30" x2="52" y2="30" stroke="url(#goldGradWcu)" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4"/>
  </svg>
);

const IconVastu = () => (
  <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
    <defs>
      <linearGradient id="goldGradWcu" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C5922A" />
        <stop offset="100%" stopColor="#EAD295" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" stroke="url(#goldGradWcu)" strokeWidth="1.2"/>
    <polygon points="32,10 42,26 58,32 42,38 32,54 22,38 6,32 22,26" fill="rgba(197,146,42,0.08)" stroke="url(#goldGradWcu)" strokeWidth="1.0"/>
    <polygon points="32,18 38,29 48,32 38,35 32,46 26,35 16,32 26,29" fill="rgba(197,146,42,0.06)" stroke="url(#goldGradWcu)" strokeWidth="0.6"/>
    <circle cx="32" cy="32" r="3" fill="#C5922A" opacity="0.85"/>
  </svg>
);

const IconSpiritual = () => (
  <svg viewBox="0 0 64 64" width="36" height="36" fill="none">
    <defs>
      <linearGradient id="goldGradWcu" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C5922A" />
        <stop offset="100%" stopColor="#EAD295" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" stroke="url(#goldGradWcu)" strokeWidth="1.2"/>
    {/* Head */}
    <circle cx="32" cy="22" r="5" stroke="url(#goldGradWcu)" strokeWidth="1.0"/>
    {/* Body seated */}
    <path d="M22 44 Q32 38 42 44" stroke="url(#goldGradWcu)" strokeWidth="1.0" strokeLinecap="round" fill="none"/>
    <path d="M26 44 L29 30 Q32 28 35 30 L38 44" stroke="url(#goldGradWcu)" strokeWidth="0.9" fill="none"/>
    <line x1="20" y1="47" x2="44" y2="47" stroke="url(#goldGradWcu)" strokeWidth="1.0" strokeLinecap="round"/>
    {/* Aura */}
    <path d="M24 20 Q16 28 24 40" stroke="url(#goldGradWcu)" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.5"/>
    <path d="M40 20 Q48 28 40 40" stroke="url(#goldGradWcu)" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.5"/>
  </svg>
);

/* ────────────────────────────────────────────────────────────
   DATA
─────────────────────────────────────────────────────────────*/
const SERVICES = [
  { Icon: IconAstrology,  title: "ASTROLOGY",                 desc: "Accurate insights through Kundli analysis for a better tomorrow." },
  { Icon: IconNumerology, title: "NUMEROLOGY",                 desc: "Decode your numbers, understand your path and unlock your potential." },
  { Icon: IconVastu,      title: "VASTU CONSULTATION",         desc: "Harmonize your space, attract positive energy and create abundance." },
  { Icon: IconSpiritual,  title: "SPIRITUAL LIFE COACHING",    desc: "Heal, grow and transform your life with spiritual guidance and clarity." },
];

const BENEFITS = [
  { Icon: User,        label: "Personalized & Practical Solutions tailored just for you" },
  { Icon: Target,      label: "Accurate Guidance with Years of Experience" },
  { Icon: ShieldCheck, label: "Trusted by Thousands of Happy Clients Worldwide" },
  { Icon: Flower2,     label: "Holistic Approach – Mind, Body, Space & Soul" },
  { Icon: Heart,       label: "Confidential, Compassionate & Committed" },
];

/* ────────────────────────────────────────────────────────────
   COMPONENT
─────────────────────────────────────────────────────────────*/
const WhyChooseUs = () => (
  <section
    id="why-us"
    style={{
      position: "relative",
      padding: "116px 0",
      background: "linear-gradient(180deg, #F5E6D2 0%, #FAF0E4 100%)",
      overflow: "hidden",
    }}
  >
    {/* Subtle Background Watermarks */}
    <div style={{
      position: "absolute",
      top: "-10%",
      left: "-5%",
      width: "50%",
      maxWidth: 500,
      aspectRatio: "1",
      opacity: 0.015,
      pointerEvents: "none",
      zIndex: 0,
    }}>
      <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.6">
        <circle cx="50" cy="50" r="48" />
        <polygon points="50,2 98,50 50,98 2,50" />
      </svg>
    </div>

    {/* Subtle sparkle field */}
    <div className="sparkle-field" style={{ opacity: 0.35 }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr", gap: 64, position: "relative", zIndex: 2 }} className="wcu-grid">

      {/* ── LEFT: Core Offerings (Luxurious Floating Scale Cards) ── */}
      <div style={{ display: "flex", flexDirection: "column" }} className="wcu-left-col">
        {/* Section header */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C5922A", marginBottom: 10 }}>
            Our Pillars
          </p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#7B1034", marginBottom: 16 }}>
            Core Offerings
          </h2>
          <OrnDivider className="w-full" style={{ maxWidth: 460 } as React.CSSProperties} />
        </div>

        {/* Service items - Thicker, elegant, and highly spaced */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
                padding: "26px 30px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(253,246,238,0.60) 100%)",
                border: "1px solid rgba(197,146,42,0.18)",
                borderRadius: 16,
                boxShadow: "0 10px 30px -12px rgba(91,10,36,0.04)",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                overflow: "hidden",
                animation: `fadeUp 0.7s ease ${i * 0.08}s both`,
              }}
              className="offer-card"
            >
              {/* Top Gold Gradient Line - visible on hover */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #C5922A 0%, #FAF0E4 50%, #7B1034 100%)",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: 2,
              }} className="offer-top-line" />

              {/* Circle icon - thinned and refined */}
              <div style={{
                width: 62, height: 62, borderRadius: "50%",
                background: "#FBF4EA",
                border: "1px solid rgba(197,146,42,0.22)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.4s ease",
              }} className="offer-icon-wrapper">
                <s.Icon />
              </div>
              <div>
                <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 13.5, letterSpacing: "0.14em", color: "#7B1034", marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 13.5, color: "rgba(58,32,16,0.70)", lineHeight: 1.7, fontWeight: 400 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View all services link */}
        <div style={{ marginTop: 36 }}>
          <Link
            to="/services"
            id="wcu-view-all"
            style={{
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              fontSize: 10.5,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#7B1034",
              padding: "12px 28px",
              borderRadius: 999,
              border: "1px solid rgba(197,146,42,0.30)",
              display: "inline-block",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              background: "transparent",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#7B1034";
              e.currentTarget.style.color = "#FAF0E4";
              e.currentTarget.style.borderColor = "#7B1034";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#7B1034";
              e.currentTarget.style.borderColor = "rgba(197,146,42,0.30)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View All Services →
          </Link>
        </div>
      </div>

      {/* ── RIGHT: Why Choose Us Box (Redesigned with Perfect Vertical Rhythm Baseline) ── */}
      <div style={{ display: "flex", flexDirection: "column" }} className="wcu-right-col">
        
        {/* Matching Section Header for Perfect Layout Alignment */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C5922A", marginBottom: 10 }}>
            Trust &amp; Prestige
          </p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#7B1034", marginBottom: 16 }}>
            Our Commitment
          </h2>
          <OrnDivider className="w-full" style={{ maxWidth: 460 } as React.CSSProperties} />
        </div>

        {/* Benefits Card Box */}
        <div style={{
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid rgba(197,146,42,0.20)",
          boxShadow: "0 20px 48px -16px rgba(91,10,36,0.08)",
          background: "rgba(255,255,255,0.76)",
          backdropFilter: "blur(14px)",
          marginBottom: 24,
        }}>
          {/* Transformed Thinned Gradient Header */}
          <div style={{
            background: "linear-gradient(135deg, #7B1034 0%, #5B0A24 100%)",
            padding: "14px 28px",
            textAlign: "center",
            position: "relative",
          }}>
            {/* Gold bottom highlight line */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1.5, background: "linear-gradient(90deg, #C5922A, #FAF0E4, #C5922A)" }} />

            {/* Decorative thinned top scroll */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
              <svg width="60" height="10" viewBox="0 0 144 24" fill="none">
                <path d="M10 12C35 12 45 5 72 12C80 16 82 16 72 12C99 5 109 12 134 12" stroke="#C5922A" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
                <circle cx="72" cy="12" r="3" fill="#C5922A" opacity="0.85"/>
              </svg>
            </div>

            <h2 style={{
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              fontSize: 11,
              color: "#FAF0E4",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              lineHeight: 1.2,
            }}>
              Core Tenets of Guidance
            </h2>
          </div>

          {/* Redesigned, Spaced Benefits List */}
          <div style={{ padding: "26px 28px", display: "flex", flexDirection: "column", gap: 18 }}>
            {BENEFITS.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }} className="wcu-benefit-item">
                {/* Premium Icon circle */}
                <div style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: "linear-gradient(135deg, #FDF6EE 0%, #FAF0E4 100%)",
                  border: "1px solid rgba(197,146,42,0.20)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 10px rgba(91,10,36,0.02)",
                  transition: "all 0.3s ease",
                }} className="benefit-icon-wrapper">
                  <b.Icon size={15} strokeWidth={1.4} color="#C5922A" />
                </div>
                <p style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: "rgba(58,32,16,0.80)",
                  lineHeight: 1.55,
                }}>
                  {b.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Redesigned Grid of Premium Trust Cards (Balances height beautifully) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="wcu-trust-row">
          {/* Trust Card 1: Confidentiality */}
          <div style={{
            padding: "20px 22px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.76) 0%, rgba(253,246,238,0.50) 100%)",
            border: "1px solid rgba(197,146,42,0.18)",
            borderRadius: 16,
            backdropFilter: "blur(10px)",
            boxShadow: "0 6px 20px -8px rgba(91,10,36,0.04)",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }} className="wcu-trust-card">
            <h4 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.10em", color: "#7B1034", marginBottom: 6 }}>
              Confidentiality
            </h4>
            <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 11.5, color: "rgba(58,32,16,0.64)", lineHeight: 1.55 }}>
              100% private charts to ensure absolute, sacred peace of mind.
            </p>
          </div>

          {/* Trust Card 2: Vedic Remedies */}
          <div style={{
            padding: "20px 22px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.76) 0%, rgba(253,246,238,0.50) 100%)",
            border: "1px solid rgba(197,146,42,0.18)",
            borderRadius: 16,
            backdropFilter: "blur(10px)",
            boxShadow: "0 6px 20px -8px rgba(91,10,36,0.04)",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }} className="wcu-trust-card">
            <h4 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.10em", color: "#7B1034", marginBottom: 6 }}>
              Vedic Remedies
            </h4>
            <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 11.5, color: "rgba(58,32,16,0.64)", lineHeight: 1.55 }}>
              Tailored practical remedies focused on karmic Vastu checkups.
            </p>
          </div>
        </div>

        {/* Bottom decorative celestial graphic with soft glow (Balances height and visual rhythm) */}
        <div style={{
          position: "relative",
          marginTop: 22,
          padding: "22px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {/* Subtle gold divider line */}
          <div style={{
            width: "84%",
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(197,146,42,0.30), transparent)",
            position: "absolute",
            top: 0,
          }} />
          {/* Small counter-rotating central mandala */}
          <div style={{
            width: 60,
            height: 60,
            opacity: 0.16,
            animation: "spinSlow 60s linear infinite",
          }}>
            <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.8">
              <circle cx="50" cy="50" r="46" />
              <circle cx="50" cy="50" r="38" strokeDasharray="3 3" />
              <polygon points="50,5 95,50 50,95 5,50" />
              <polygon points="50,5 95,50 50,95 5,50" transform="rotate(45 50 50)" />
            </svg>
          </div>
          {/* Warm background glow */}
          <div style={{
            position: "absolute",
            width: 140,
            height: 140,
            background: "radial-gradient(circle, rgba(197,146,42,0.06) 0%, transparent 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
            zIndex: -1,
          }} />
        </div>

      </div>
    </div>

    {/* Luxury styles for hover and interactive details */}
    <style>{`
      @media (min-width: 1024px) {
        .wcu-grid { grid-template-columns: 7fr 5fr !important; gap: 76px !important; }
      }

      /* Hover animation for the offer cards */
      .offer-card:hover {
        transform: translateY(-5px);
        background: linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(253,246,238,0.72) 100%) !important;
        border-color: rgba(197, 146, 42, 0.45) !important;
        box-shadow: 0 16px 40px -14px rgba(91,10,36,0.08), 0 0 12px rgba(197,146,42,0.06) !important;
      }
      .offer-card:hover .offer-top-line {
        transform: scaleX(1);
      }
      .offer-card:hover .offer-icon-wrapper {
        transform: scale(1.06);
        background: #C5922A !important;
        border-color: #C5922A !important;
        box-shadow: 0 4px 12px rgba(197,146,42,0.25);
      }
      .offer-card:hover .offer-icon-wrapper svg * {
        stroke: #FAF0E4 !important;
      }
      .offer-card:hover .offer-icon-wrapper text {
        fill: #FAF0E4 !important;
      }
      .offer-card:hover .offer-icon-wrapper polygon {
        fill: rgba(255, 255, 255, 0.20) !important;
        stroke: #FAF0E4 !important;
      }
      .offer-card:hover .offer-icon-wrapper path {
        stroke: #FAF0E4 !important;
      }
      .offer-card:hover .offer-icon-wrapper line {
        stroke: #FAF0E4 !important;
      }

      /* Hover animation for the benefits */
      .wcu-benefit-item:hover .benefit-icon-wrapper {
        transform: scale(1.08) translateY(-1px);
        background: #7B1034 !important;
        border-color: #7B1034 !important;
        box-shadow: 0 4px 12px rgba(123,16,52,0.22);
      }
      .wcu-benefit-item:hover .benefit-icon-wrapper svg {
        color: #FAF0E4 !important;
      }

      /* Hover animation for trust cards */
      .wcu-trust-card:hover {
        transform: translateY(-4px);
        background: linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(253,246,238,0.72) 100%) !important;
        border-color: rgba(197, 146, 42, 0.45) !important;
        box-shadow: 0 12px 30px -10px rgba(91,10,36,0.08) !important;
      }

      @media (max-width: 768px) {
        .wcu-grid { gap: 48px !important; }
        .wcu-left-col { align-items: center !important; text-align: center !important; }
        .wcu-right-col { max-width: 480px !important; margin: 0 auto !important; width: 100% !important; }
        .offer-card { text-align: left !important; }
        .wcu-trust-row { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default WhyChooseUs;
