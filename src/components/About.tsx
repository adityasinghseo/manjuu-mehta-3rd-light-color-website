import portrait from "@/assets/WhatsApp Image 2026-05-27 at 2.08.25 PM (1).jpeg";
import { OrnDivider } from "./SiteNav";

const About = () => (
  <section
    id="about"
    style={{
      padding: "116px 0",
      background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 50%, #FAF6F0 100%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Subtle Background Watermarks */}
    <div style={{
      position: "absolute",
      top: "10%",
      right: "-10%",
      width: "50%",
      maxWidth: 500,
      aspectRatio: "1",
      opacity: 0.015,
      pointerEvents: "none",
      zIndex: 0,
    }}>
      <svg viewBox="0 0 100 100" fill="none" stroke="#8E6D3D" strokeWidth="0.6">
        <circle cx="50" cy="50" r="48" />
        <circle cx="50" cy="50" r="38" strokeDasharray="1 1" />
        <polygon points="50,2 98,50 50,98 2,50" />
      </svg>
    </div>
    <div style={{
      position: "absolute",
      bottom: "-10%",
      left: "-10%",
      width: "40%",
      maxWidth: 400,
      aspectRatio: "1",
      opacity: 0.018,
      pointerEvents: "none",
      zIndex: 0,
    }}>
      <svg viewBox="0 0 100 100" fill="none" stroke="#8E6D3D" strokeWidth="0.6">
        <circle cx="50" cy="50" r="48" />
        <polygon points="50,2 98,50 50,98 2,50" transform="rotate(22.5 50 50)" />
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
            borderRadius: "12rem 12rem 2rem 2rem",
            border: "1.5px solid rgba(142,109,61,0.30)",
            transform: "translate(-14px, -14px)",
            pointerEvents: "none",
            zIndex: 1,
            animation: "floatSlow 8s ease-in-out infinite",
          }} />

          {/* Maroon Offset Frame */}
          <div style={{
            position: "absolute",
            inset: "16px 0",
            borderRadius: "12rem 12rem 2rem 2rem",
            border: "1.5px solid rgba(142,109,61,0.14)",
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
            background: "radial-gradient(circle, rgba(142,109,61,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: 0,
          }} />

          {/* Top-Left Floating Badge ("10+ Years Wisdom") */}
          <div style={{
            position: "absolute",
            top: "12%",
            left: "-14%",
            zIndex: 10,
            background: "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(253,246,238,0.85) 100%)",
            border: "1px solid rgba(142,109,61,0.28)",
            borderRadius: 16,
            padding: "10px 18px",
            boxShadow: "0 10px 24px -6px rgba(68,65,54,0.08)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "floatSlow 6s ease-in-out infinite",
          }} className="about-float-badge">
            <span style={{ fontFamily: "Cinzel, serif", fontWeight: 900, fontSize: 18, color: "#8E6D3D", lineHeight: 1.1 }}>10+</span>
            <span style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8E6D3D", marginTop: 2 }}>Years Wisdom</span>
          </div>

          {/* Bottom-Right Floating Badge ("5000+ Happy Souls") */}
          <div style={{
            position: "absolute",
            bottom: "16%",
            right: "-14%",
            zIndex: 10,
            background: "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(253,246,238,0.85) 100%)",
            border: "1px solid rgba(142,109,61,0.28)",
            borderRadius: 16,
            padding: "10px 18px",
            boxShadow: "0 10px 24px -6px rgba(68,65,54,0.08)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "floatSlow 6s ease-in-out infinite",
            animationDelay: "3s",
          }} className="about-float-badge">
            <span style={{ fontFamily: "Cinzel, serif", fontWeight: 900, fontSize: 18, color: "#8E6D3D", lineHeight: 1.1 }}>5000+</span>
            <span style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8E6D3D", marginTop: 2 }}>Happy Clients</span>
          </div>

          {/* Main Image Container in Arch Style */}
          <div style={{
            position: "relative",
            borderRadius: "12rem 12rem 2rem 2rem",
            overflow: "hidden",
            border: "1px solid rgba(142,109,61,0.22)",
            boxShadow: "0 28px 64px -14px rgba(68,65,54,0.14), 0 0 30px rgba(142,109,61,0.06)",
            background: "#FFFFFF",
            zIndex: 2,
            transition: "all 0.5s ease",
          }} className="about-portrait-card">
            <img
              src={portrait}
              alt="Manjuu Mehta – Spiritual Advisor & Vedic Consultant"
              style={{ width: "100%", display: "block", objectFit: "cover", transition: "transform 0.8s ease" }}
              className="about-portrait-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Editorial Description & Spaced Stats */}
      <div style={{ animation: "fadeUp 0.9s ease 0.15s both", display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="about-text-col">
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8E6D3D", marginBottom: 14 }}>
          Discover the Journey
        </p>
        <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.55rem, 3.2vw, 2.4rem)", color: "#8E6D3D", lineHeight: 1.2, marginBottom: 20 }}>
          A Decade of Cosmic Guidance
        </h2>
        <OrnDivider className="w-full" style={{ maxWidth: 460, marginBottom: 24 } as React.CSSProperties} />

        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.92rem, 1.35vw, 1.03rem)", lineHeight: 1.9, color: "#28160A", marginBottom: 18, maxWidth: 560 }}>
          <strong style={{ color: "#8E6D3D", fontWeight: 600 }}>Manjuu Mehta</strong> is a <strong style={{ color: "#8E6D3D", fontWeight: 600 }}>trusted guide on your path to harmony</strong>. With over a decade of practice, she blends the ancient sciences of <strong style={{ color: "#8E6D3D", fontWeight: 600 }}>Vastu Shastra, Vedic Astrology, and Karmic Numerology</strong> to bring clarity, peace, and practical alignment to your life.
        </p>
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.92rem, 1.35vw, 1.03rem)", lineHeight: 1.9, color: "#28160A", marginBottom: 24, maxWidth: 560 }}>
          As an elite member of <strong style={{ color: "#8E6D3D", fontWeight: 600 }}>AIFAS</strong>, her precise consultations have transformed homes, offices, and destinies worldwide — replacing obstacles with <strong style={{ color: "#8E6D3D", fontWeight: 600 }}>stunning prosperity and growth</strong>.
        </p>

        {/* Emotional Quote establishing Trust, Authority and Warmth */}
        <div style={{
          borderLeft: "2.5px solid #8E6D3D",
          paddingLeft: 20,
          margin: "12px 0 32px",
          maxWidth: 580,
        }}>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.92rem, 1.35vw, 1.03rem)", lineHeight: 1.9, color: "#28160A" }}>
            "Every space carries its own soul, and every planetary alignment is a roadmap to your highest self. My purpose is to help you decode these cosmic whispers, guiding you to a life of abundance, deep trust, and effortless flow."
          </p>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8E6D3D", marginTop: 10, fontWeight: 600 }}>
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
                background: "linear-gradient(135deg, rgba(255,255,255,0.76) 0%, rgba(253,246,238,0.50) 100%)",
                border: "1px solid rgba(142,109,61,0.18)",
                borderRadius: 16,
                backdropFilter: "blur(10px)",
                boxShadow: "0 6px 20px -8px rgba(68,65,54,0.05)",
                transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="about-stat-card"
            >
              <div style={{ fontFamily: "Cinzel, serif", fontWeight: 900, fontSize: "clamp(1.6rem, 2.2vw, 1.8rem)", color: "#8E6D3D", lineHeight: 1.0 }}>{s.n}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "0.10em", textTransform: "uppercase", color: "#8E6D3D", marginTop: 8, lineHeight: 1.3 }}>{s.l}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 12, color: "rgba(40,22,10,0.60)", marginTop: 4, lineHeight: 1.45 }}>{s.desc}</div>
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
        box-shadow: 0 32px 72px -12px rgba(68,65,54,0.20), 0 0 40px rgba(142,109,61,0.12) !important;
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
        border-color: rgba(142, 109, 61, 0.55) !important;
        box-shadow: 0 12px 28px -6px rgba(68,65,54,0.08), 0 0 8px rgba(142,109,61,0.12) !important;
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
