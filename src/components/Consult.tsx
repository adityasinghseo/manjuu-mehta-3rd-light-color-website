import { Link } from "react-router-dom";
import { OrnDivider } from "./SiteNav";

const Consult = () => (
  <section
    id="consult"
    style={{
      padding: "128px 0",
      background: "#A38552", // Lighter shade of #8E6E3C
      borderTop: "1px solid rgba(142, 109, 61, 0.32)",
      borderBottom: "1px solid rgba(142, 109, 61, 0.20)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Large Central Glowing Halo Background (Gold & Cream highlights) */}
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 540,
      height: 540,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(142,109,61,0.22) 0%, rgba(255,255,255,0.03) 45%, transparent 70%)",
      filter: "blur(64px)",
      pointerEvents: "none",
      zIndex: 0,
      animation: "glow 6s ease-in-out infinite",
    }} />

    {/* Center Spinning Mandala Watermark (Styled in Gold against Maroon) */}
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: 520,
      aspectRatio: "1",
      opacity: 0.05,
      pointerEvents: "none",
      zIndex: 0,
      animation: "spinSlow 100s linear infinite",
    }}>
      <svg viewBox="0 0 100 100" fill="none" stroke="#8E6D3D" strokeWidth="0.5">
        <circle cx="50" cy="50" r="48" />
        <circle cx="50" cy="50" r="38" strokeDasharray="2 2" />
        <polygon points="50,5 95,50 50,95 5,50" />
        <polygon points="50,5 95,50 50,95 5,50" transform="rotate(30 50 50)" />
        <polygon points="50,5 95,50 50,95 5,50" transform="rotate(60 50 50)" />
      </svg>
    </div>

    {/* Subtle sparkle field */}
    <div className="sparkle-field" style={{ opacity: 0.22 }} />

    <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 32px", textAlign: "center", position: "relative", zIndex: 1 }}>

      {/* Decorative Thinned Top Scroll */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <svg width="90" height="20" viewBox="0 0 160 36" fill="none">
          <path d="M10 18C42 18 58 6 80 18C88 24 90 24 80 18C102 6 118 18 150 18" stroke="#28160A" strokeWidth="1.5" strokeLinecap="round" opacity="0.85"/>
          <circle cx="80" cy="18" r="4" fill="#28160A" opacity="0.95"/>
          <circle cx="62" cy="18" r="2.2" fill="#28160A" opacity="0.70"/>
          <circle cx="98" cy="18" r="2.2" fill="#28160A" opacity="0.70"/>
        </svg>
      </div>

      {/* Pre-Title */}
      <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(1.15rem, 1.4vw, 1.2rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#28160A", marginBottom: 18 }}>
        Book Your Personalized Consultation Today
      </p>

      {/* Cinematic Headline */}
      <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: 24, textShadow: "0 2px 10px rgba(40,22,10,0.15)" }}>
        Step Into Your Divine Alignment
      </h2>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
        <OrnDivider className="w-full" style={{ maxWidth: 440 } as React.CSSProperties} />
      </div>

      {/* Emotionally Compelling Bio Call */}
      <p style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "clamp(1.15rem, 1.4vw, 1.2rem)",
        lineHeight: 1.9,
        color: "#28160A",
        maxWidth: 580,
        margin: "0 auto 44px",
        fontWeight: 600,
      }}>
        Step into a life of effortless abundance, deep clarity, and peace. Through a private cosmic reading, we will unlock your personalized roadmap to success, health, and harmonious growth.
      </p>

      {/* Single CTA Button with Translucent Design */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          to="/contact"
          id="consult-book-cta"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            fontSize: "clamp(1.15rem, 1.2vw, 1.2rem)",
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "#8E6E3C",
            background: "#FFFFFF",
            padding: "16px 36px",
            borderRadius: 999,
            border: "2px solid #FFFFFF",
            display: "inline-block",
            boxShadow: "0 10px 24px -10px rgba(0,0,0,0.15)",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#FFFFFF";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 14px 32px -12px rgba(40, 22, 10, 0.25)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#FFFFFF";
            e.currentTarget.style.color = "#8E6E3C";
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 10px 24px -10px rgba(0,0,0,0.15)";
          }}
        >
          Book a Consultation
        </Link>
      </div>

      {/* Response priority note */}
      <p style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "clamp(1rem, 1.1vw, 1.05rem)",
        fontWeight: 600,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        color: "#28160A",
        marginTop: 24,
      }}>
        ✦ Priority Response within 2–4 Hours ✦
      </p>

    </div>
  </section>
);

export default Consult;

