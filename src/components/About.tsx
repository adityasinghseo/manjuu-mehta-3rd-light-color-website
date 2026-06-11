import portrait from "@/assets/manjuu_mehta_journey.png";
import { OrnDivider } from "./SiteNav";

const About = () => (
  <section
    id="about"
    style={{
      padding: "116px 0",
      background: "#F2E7D5",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Elegant Sacred Geometry Mandala Watermark in Background */}
    <div style={{
      position: "absolute",
      top: "12%",
      right: "-8%",
      width: "55%",
      maxWidth: 600,
      aspectRatio: "1",
      opacity: 0.04,
      pointerEvents: "none",
      zIndex: 0,
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

    {/* Sparkle */}
    <div className="sparkle-field" style={{ opacity: 0.35 }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr", gap: 64, alignItems: "center", position: "relative", zIndex: 2 }} className="about-grid">

      {/* LEFT COLUMN: Layered Image Card with Floating Badges */}
      <div style={{ display: "flex", justifyContent: "center", animation: "fadeUp 0.9s ease both", position: "relative" }} className="about-image-col">
        <div style={{ position: "relative", maxWidth: 390, width: "100%", padding: "16px 0" }}>
          
          {/* Gold Offset Frame */}
          <div style={{
            position: "absolute",
            inset: "16px 0",
            borderRadius: "2rem",
            border: "1.5px solid rgba(var(--color-accent-gold-rgb),0.30)",
            transform: "translate(-14px, -14px)",
            pointerEvents: "none",
            zIndex: 1,
            animation: "floatSlow 8s ease-in-out infinite",
          }} />

          {/* Maroon Offset Frame */}
          <div style={{
            position: "absolute",
            inset: "16px 0",
            borderRadius: "2rem",
            border: "1.5px solid rgba(var(--color-accent-gold-rgb),0.14)",
            transform: "translate(14px, 14px)",
            pointerEvents: "none",
            zIndex: 1,
            animation: "floatSlow 8s ease-in-out infinite",
            animationDelay: "4s",
          }} />

          {/* Soft Gold Backdrop Glow */}
          <div style={{
            position: "absolute",
            inset: -20,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(var(--color-accent-gold-rgb),0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: 0,
          }} />

          {/* Main Image Container in Rounded Square Style */}
          <div style={{
            position: "relative",
            aspectRatio: "1 / 1",
            borderRadius: "2rem",
            overflow: "hidden",
            border: "1px solid rgba(var(--color-accent-gold-rgb),0.22)",
            boxShadow: "0 28px 64px -14px rgba(var(--color-text-heading-rgb),0.14), 0 0 30px rgba(var(--color-accent-gold-rgb),0.06)",
            background: "#FFFFFF",
            zIndex: 2,
            transition: "all 0.5s ease",
          }} className="about-portrait-card">
            <img
              src={portrait}
              alt="Manjuu Mehta – Spiritual Advisor & Vedic Consultant"
              style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", transition: "transform 0.8s ease" }}
              className="about-portrait-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Editorial Description & Spaced Stats */}
      <div style={{ animation: "fadeUp 0.9s ease 0.15s both", display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="about-text-col">
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "clamp(1.12rem, 1.4vw, 1.2rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-heading)", marginBottom: 14 }}>
          Discover the Journey
        </p>
        <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--color-text-heading)", lineHeight: 1.2, marginBottom: 20 }}>
          A Decade of Cosmic Guidance
        </h2>
        <OrnDivider className="w-full" style={{ maxWidth: 460, marginBottom: 24 } as React.CSSProperties} />

        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.9, color: "var(--color-text-primary)", marginBottom: 18, maxWidth: 560 }}>
          <strong style={{ color: "var(--color-accent-gold)", fontWeight: 600 }}>Manjuu Mehta</strong> is a <strong style={{ color: "var(--color-accent-gold)", fontWeight: 600 }}>trusted guide on your path to harmony</strong>. With over a decade of practice, she blends the ancient sciences of <strong style={{ color: "var(--color-accent-gold)", fontWeight: 600 }}>Vastu Shastra, Vedic Astrology, and Karmic Numerology</strong> to bring clarity, peace, and practical alignment to your life.
        </p>
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.9, color: "var(--color-text-primary)", marginBottom: 24, maxWidth: 560 }}>
          As an elite member of <strong style={{ color: "var(--color-accent-gold)", fontWeight: 600 }}>AIFAS</strong>, her precise consultations have transformed homes, offices, and destinies worldwide — replacing obstacles with <strong style={{ color: "var(--color-accent-gold)", fontWeight: 600 }}>stunning prosperity and growth</strong>.
        </p>

        {/* Emotional Quote establishing Trust, Authority and Warmth */}
        <div style={{
          borderLeft: "2.5px solid var(--color-accent-gold)",
          paddingLeft: 20,
          margin: "12px 0 32px",
          maxWidth: 580,
        }}>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.9, color: "var(--color-text-primary)" }}>
            "Every space carries its own soul, and every planetary alignment is a roadmap to your highest self. My purpose is to help you decode these cosmic whispers, guiding you to a life of abundance, deep trust, and effortless flow."
          </p>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.15rem, 1.45vw, 1.25rem)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-heading)", marginTop: 10, fontWeight: 600 }}>
            — Manjuu Mehta
          </p>
        </div>

        {/* High-End Redesigned Stats Cards Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, width: "100%", maxWidth: 580 }} className="about-stats-row">
          {[
            { n: "10+", l: "Years Wisdom", desc: "Professional Practice" },
            { n: "12+", l: "Global Awards", desc: "AIFAS Elite Honors" },
            { n: "5000+", l: "Aligned Souls", desc: "Domestic & Global" },
          ].map(s => (
            <div key={s.l}
              style={{
                textAlign: "left",
                padding: "20px 18px",
                background: "#FFFFFF",
                border: "1px solid rgba(var(--color-accent-gold-rgb),0.18)",
                borderRadius: 16,
                backdropFilter: "blur(10px)",
                boxShadow: "0 6px 20px -8px rgba(var(--color-text-heading-rgb),0.05)",
                transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="about-stat-card"
            >
              <div style={{ fontFamily: "Cinzel, serif", fontWeight: 900, fontSize: "clamp(1.6rem, 2.2vw, 1.8rem)", color: "var(--color-text-heading)", lineHeight: 1.0 }}>{s.n}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "clamp(1.05rem, 1.2vw, 1.05rem)", letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--color-text-heading)", marginTop: 8, lineHeight: 1.3 }}>{s.l}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.1rem, 1.3vw, 1.1rem)", color: "rgba(40,22,10,0.60)", marginTop: 4, lineHeight: 1.45 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Luxury styles for hover and interactive details */}
    <style>{`
      @media (min-width: 1024px) {
        .about-grid { grid-template-columns: 5fr 7fr !important; gap: 76px !important; }
      }

      /* Hover animation for the main arched card */
      .about-portrait-card:hover {
        transform: scale(1.015) translateY(-4px);
        box-shadow: 0 32px 72px -12px rgba(var(--color-text-heading-rgb),0.20), 0 0 40px rgba(var(--color-accent-gold-rgb),0.12) !important;
      }
      .about-portrait-card:hover .about-portrait-img {
        transform: scale(1.03);
      }

      /* Dynamic Stats Hover Effects */
      .about-stat-card {
        cursor: default;
      }
      .about-stat-card:hover {
        transform: translateY(-4px);
        background: rgba(255, 255, 255, 0.90) !important;
        border-color: rgba(var(--color-accent-gold-rgb), 0.55) !important;
        box-shadow: 0 12px 28px -6px rgba(var(--color-text-heading-rgb),0.08), 0 0 8px rgba(var(--color-accent-gold-rgb),0.12) !important;
      }
      
      @media (max-width: 768px) {
        .about-grid { gap: 48px !important; }
        .about-text-col { align-items: center !important; text-align: center !important; }
        .about-stats-row { grid-template-columns: 1fr !important; max-width: 320px !important; margin: 0 auto !important; }
        .about-stat-card { text-align: center !important; }
        .about-float-badge { display: none !important; } /* Hide floating badges on narrow screens to prevent overlap conflicts */
      }
    `}</style>
  </section>
);

export default About;
