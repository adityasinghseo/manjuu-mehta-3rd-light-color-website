import portrait from "@/assets/WhatsApp Image 2026-05-27 at 2.08.25 PM (1).jpeg";
import { Award, BookOpen, Globe, Heart, Sparkles, Star, Users, Zap, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { OrnDivider } from "@/components/SiteNav";

/* ─── Data ─────────────────────────────────────────────── */
const stats = [
  { value: "10+", label: "Years Wisdom", desc: "Dedicated Professional Practice" },
  { value: "5000+", label: "Aligned Souls", desc: "Domestic & Global Consultations" },
  { value: "5+", label: "Countries Served", desc: "Global Astrological Reach" },
  { value: "8+", label: "Prestigious Honors", desc: "Elite Astrological Recognition" },
];

const credentials = [
  { icon: Award, title: "AIFAS Elite Member", desc: "Elite membership of the All India Federation of Astrologers Society — the nation's most respected astrological body." },
  { icon: BookOpen, title: "Certified Vastu Shastra Expert", desc: "Professionally trained in classical Vastu Shastra with a deep understanding of directional energies, the Pancha Bhutas, and space harmonisation." },
  { icon: Star, title: "Vedic Astrology Practitioner", desc: "Specialist in birth chart analysis, Mahadasha interpretation, Navamsa readings and planetary remedial prescriptions rooted in Parashari tradition." },
  { icon: Sparkles, title: "Karmic Numerologist", desc: "Certified numerologist with expertise in Cheiro and Pythagorean systems, name correction, and destiny-path analysis." },
  { icon: Globe, title: "International Consultant", desc: "Recognised consultant serving a distinguished clientele across India, USA, UK, Canada, UAE, Australia and Singapore." },
  { icon: Users, title: "Corporate & Business Advisor", desc: "Trusted by entrepreneurs and established businesses for Vastu audits, launch-date selection, and strategic astrological guidance." },
];

const values = [
  { icon: Heart, title: "Compassion First", desc: "Every consultation is delivered with empathy, respect, and a genuine desire to uplift the life of the seeker." },
  { icon: Zap, title: "Precision & Integrity", desc: "Readings are meticulous and honest — no vague predictions, only actionable, evidence-backed cosmic insights." },
  { icon: BookOpen, title: "Rooted in Tradition", desc: "All guidance draws from authentic, unaltered Vedic texts — the same knowledge that shaped civilisations for five millennia." },
  { icon: Sparkles, title: "Results-Oriented", desc: "The ultimate measure of success is transformation in the client's life — visible, meaningful, and lasting change." },
];

/* ── Section Header helper ─────────────────────────────────── */
const SectionHeader = ({ sup, title }: { sup: string; title: string }) => (
  <div style={{ textAlign: "center", marginBottom: 56 }} className="anim-fadeup">
    <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "#C5922A", marginBottom: 12 }}>{sup}</p>
    <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#7B1034", marginBottom: 20 }}>{title}</h2>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <OrnDivider className="w-full" style={{ maxWidth: 360 } as React.CSSProperties} />
    </div>
  </div>
);

/* ── Component ─────────────────────────────────────────────── */
const AboutUsPage = () => (
  <main style={{ minHeight: "100vh", paddingTop: 72, background: "linear-gradient(180deg, #FAF0E4 0%, #F5E6D2 50%, #FAF0E4 100%)" }}>

    {/* ── 1. Hero Banner ─────────────────────────── */}
    <section style={{ padding: "96px 0 56px", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #FAF0E4 0%, #FDF6EE 100%)" }}>
      {/* Background Glows */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        maxWidth: 600,
        aspectRatio: "1",
        background: "radial-gradient(circle, rgba(197,146,42,0.06) 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Rotating Background Mandala Watermark */}
      <div className="anim-spin" style={{
        position: "absolute",
        top: "-10%",
        right: "-10%",
        width: "40%",
        maxWidth: 400,
        aspectRatio: "1",
        opacity: 0.02,
        pointerEvents: "none",
        zIndex: 0,
      }}>
        <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.6">
          <circle cx="50" cy="50" r="48" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(15 50 50)" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(45 50 50)" />
        </svg>
      </div>

      <div className="sparkle-field" style={{ opacity: 0.32 }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }} className="anim-fadeup">
        <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#C5922A", marginBottom: 14 }}>
          ✦ The Cosmic Guide ✦
        </p>
        <h1 style={{ fontFamily: "Cinzel, serif", fontWeight: 800, fontSize: "clamp(2.4rem,6vw,4.2rem)", color: "#7B1034", lineHeight: 1.1, marginBottom: 20 }}>
          Manjuu Mehta
        </h1>
        <OrnDivider />
        <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: "clamp(1.1rem,2.4vw,1.4rem)", color: "rgba(58,32,16,0.76)", marginTop: 22, letterSpacing: "0.02em" }}>
          Renowned Vastu Advisor · Vedic Astrologer · Karmic Numerologist
        </p>
      </div>
    </section>

    {/* ── 2. Portrait + Bio ──────────────────────── */}
    <section style={{ padding: "116px 0", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr", gap: 76, alignItems: "center", position: "relative", zIndex: 2 }} className="about-bio-grid">
        {/* LEFT COLUMN: Layered Portrait Card */}
        <div style={{ display: "flex", justifyContent: "center", animation: "fadeUp 0.9s ease both", position: "relative" }}>
          <div style={{ position: "relative", maxWidth: 390, width: "100%", padding: "16px 0" }}>
            
            {/* Gold Offset Frame */}
            <div style={{
              position: "absolute",
              inset: "16px 0",
              borderRadius: "12rem 12rem 2rem 2rem",
              border: "1.5px solid rgba(197,146,42,0.30)",
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
              border: "1.5px solid rgba(123,16,52,0.14)",
              transform: "translate(14px, 14px)",
              pointerEvents: "none",
              zIndex: 1,
              animation: "floatSlow 8s ease-in-out infinite",
              animationDelay: "4s",
            }} />

            {/* Soft Background Radial Aura Glow */}
            <div style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(197,146,42,0.14) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
              zIndex: 0,
            }} />

            {/* Top-Left Floating Badge */}
            <div style={{
              position: "absolute",
              top: "12%",
              left: "-12%",
              zIndex: 10,
              background: "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(253,246,238,0.85) 100%)",
              border: "1px solid rgba(197,146,42,0.28)",
              borderRadius: 16,
              padding: "10px 18px",
              boxShadow: "0 10px 24px -6px rgba(91,10,36,0.08)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              animation: "floatSlow 6s ease-in-out infinite",
            }} className="about-float-badge">
              <span style={{ fontFamily: "Cinzel, serif", fontWeight: 900, fontSize: 18, color: "#7B1034", lineHeight: 1.1 }}>10+</span>
              <span style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C5922A", marginTop: 2 }}>Years Wisdom</span>
            </div>

            {/* Bottom-Right Floating Badge */}
            <div style={{
              position: "absolute",
              bottom: "16%",
              right: "-12%",
              zIndex: 10,
              background: "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(253,246,238,0.85) 100%)",
              border: "1px solid rgba(197,146,42,0.28)",
              borderRadius: 16,
              padding: "10px 18px",
              boxShadow: "0 10px 24px -6px rgba(91,10,36,0.08)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              animation: "floatSlow 6s ease-in-out infinite",
              animationDelay: "3s",
            }} className="about-float-badge">
              <span style={{ fontFamily: "Cinzel, serif", fontWeight: 900, fontSize: 18, color: "#7B1034", lineHeight: 1.1 }}>5000+</span>
              <span style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C5922A", marginTop: 2 }}>Happy Clients</span>
            </div>

            {/* Main Image Container in Arch Style */}
            <div style={{
              position: "relative",
              borderRadius: "12rem 12rem 2rem 2rem",
              overflow: "hidden",
              border: "1px solid rgba(197,146,42,0.22)",
              boxShadow: "0 28px 64px -14px rgba(91,10,36,0.14), 0 0 30px rgba(197,146,42,0.06)",
              background: "#FDF6EE",
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

        {/* RIGHT COLUMN: Editorial Description & Bio */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="anim-fadeup">
          <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "#C5922A", marginBottom: 12 }}>
            Her Journey
          </p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#7B1034", lineHeight: 1.15, marginBottom: 20 }}>
            A Decade of Cosmic Guidance
          </h2>
          <OrnDivider className="w-full" style={{ maxWidth: 460, marginBottom: 24 } as React.CSSProperties} />

          <div style={{ display: "flex", flexDirection: "column", gap: 16, fontFamily: "Poppins, sans-serif", fontSize: 14.5, lineHeight: 1.95, color: "rgba(58,32,16,0.76)" }}>
            <p>
              <strong style={{ color: "#7B1034", fontWeight: 600 }}>Manjuu Mehta</strong> is a certified professional Vastu Advisor, Vedic Astrologer and Karmic Numerologist, based in the sacred, eternal city of <strong style={{ color: "#7B1034", fontWeight: 600 }}>Haridwar, Uttarakhand</strong> — a holy land that has served as the nursery of cosmic wisdom for five millennia.
            </p>
            <p>
              Her path into the ancient sciences was born of a personal calling — a profound recognition that the cosmos communicates through a precise, mathematical tapestry of numbers, celestial movements, and spatial energies. What began as a dedicated spiritual quest soon matured into a lifelong calling of service, guiding individuals out of confusion and into aligned paths of abundance and harmony.
            </p>
            <p>
              Over a decade of meticulous practice, she has counseled a distinguished clientele spanning across India and major international hubs. Her approach balances rigor and empathy in equal measure; she firmly rejects generic formulas, carving out highly custom, actionable prescriptions rooted in pure classical tradition.
            </p>
            
            {/* Elegant Quotation block inside Bio */}
            <div style={{
              borderLeft: "2.5px solid #C5922A",
              paddingLeft: 20,
              margin: "12px 0 8px",
              maxWidth: 580,
              fontStyle: "italic",
            }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17.5, lineHeight: 1.8, color: "#7B1034", fontWeight: 500 }}>
                "Every physical space has a soul, and every planetary chart is a cosmic map. My mission is to decode these blueprints, letting seekers step into their absolute divine alignment."
              </p>
              <p style={{ fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C5922A", marginTop: 8, fontWeight: 700 }}>
                — Manjuu Mehta
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width:1024px) {
          .about-bio-grid { grid-template-columns: 5fr 7fr !important; gap: 76px !important; }
        }
        .about-portrait-card:hover {
          transform: scale(1.015) translateY(-4px);
          box-shadow: 0 32px 72px -12px rgba(91,10,36,0.20), 0 0 40px rgba(197,146,42,0.12) !important;
        }
        .about-portrait-card:hover .about-portrait-img {
          transform: scale(1.03);
        }
        @media (max-width: 768px) {
          .about-float-badge { display: none !important; }
        }
      `}</style>
    </section>

    {/* ── 3. Redesigned Stats cards block ──────────────────────────── */}
    <section style={{ padding: "32px 0 116px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="stats-bar-grid">
        {stats.map((s, i) => (
          <div key={s.label}
            style={{
              padding: "28px 24px",
              borderRadius: 16,
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(253,246,238,0.60) 100%)",
              border: "1px solid rgba(197,146,42,0.20)",
              boxShadow: "0 6px 20px -8px rgba(91,10,36,0.06)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              animation: `fadeUp 0.8s ease ${i * 0.08}s both`,
              position: "relative",
              overflow: "hidden",
              cursor: "default",
            }}
            className="about-stat-card"
          >
            {/* Hover Expanding Top Line */}
            <div className="card-top-line" style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%) scaleX(0)",
              width: "100%",
              height: 3,
              background: "var(--grad-gold)",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              transformOrigin: "center",
            }} />

            <div style={{ fontFamily: "Cinzel, serif", fontWeight: 900, fontSize: 36, color: "#7B1034", lineHeight: 1.1 }}>{s.value}</div>
            <div style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 9, letterSpacing: "0.20em", textTransform: "uppercase", color: "#C5922A", marginTop: 8, lineHeight: 1.2 }}>{s.label}</div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 10.5, color: "rgba(58,32,16,0.55)", marginTop: 6, lineHeight: 1.3 }}>{s.desc}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (min-width:768px){.stats-bar-grid{grid-template-columns:repeat(4,1fr)!important}}
        .about-stat-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.94) !important;
          border-color: rgba(197, 146, 42, 0.50) !important;
          box-shadow: 0 16px 36px -12px rgba(91,10,36,0.12), 0 0 10px rgba(197,146,42,0.08) !important;
        }
        .about-stat-card:hover .card-top-line {
          transform: translateX(-50%) scaleX(1);
        }
      `}</style>
    </section>

    {/* ── 4. Philosophy Section ─────────────────────────── */}
    <section style={{ padding: "128px 0", background: "linear-gradient(160deg, #F5E6D2 0%, #EDD8BE 100%)", position: "relative", overflow: "hidden" }}>
      <div className="sparkle-field" style={{ opacity: 0.25 }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "#C5922A", marginBottom: 12 }}>Core Philosophy</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#7B1034", marginBottom: 20 }}>The Cosmos is a Living Scripture</h2>
          <OrnDivider />
        </div>
        
        <div style={{
          background: "rgba(255,255,255,0.45)",
          border: "1px solid rgba(197,146,42,0.18)",
          borderRadius: 24,
          padding: "44px 38px",
          backdropFilter: "blur(8px)",
          boxShadow: "0 12px 32px -8px rgba(91,10,36,0.05)",
        }}>
          <blockquote style={{ borderLeft: "3px solid #C5922A", paddingLeft: 28, marginBottom: 28 }}>
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: "clamp(1.15rem,2.4vw,1.4rem)", lineHeight: 1.85, color: "#3A2010", fontWeight: 500 }}>
              "I believe that every single seeker arrives in this world mapped with a highly distinct cosmic signature — a celestial blueprint written in the stars at the precise breath of birth. My work is simply to read that blueprint with absolute transparency, assisting the seeker to walk their destined path with clarity, power, and boundless grace."
            </p>
            <footer style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase", color: "#7B1034", marginTop: 18 }}>— Manjuu Mehta</footer>
          </blockquote>
          
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 14.5, lineHeight: 1.9, color: "rgba(58,32,16,0.72)" }}>
            She maintains that the sacred architectures of Vastu Shastra, planetary coordinates of Jyotisha, and cosmic equations of Numerology are not superstitious beliefs but deeply scientific and empirical sciences. Cultivated, refined, and verified over five thousand years by India's greatest sages, they remain the most powerful tools available to align our modern lives with natural, cosmic flow.
          </p>
        </div>
      </div>
    </section>

    {/* ── 5. Credentials & Specialisations ────────────────────────── */}
    <section style={{ padding: "116px 0", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <SectionHeader sup="Prestige & Experience" title="Credentials & Specialisations" />
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1,1fr)", gap: 24 }} className="cred-grid">
          {credentials.map((c, i) => (
            <div key={c.title}
              style={{
                padding: "36px 32px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(197,146,42,0.18)",
                boxShadow: "0 8px 24px -10px rgba(91,10,36,0.06)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                animation: `fadeUp 0.8s ease ${i * 0.08}s both`,
                position: "relative",
                overflow: "hidden",
              }}
              className="about-interactive-card"
            >
              {/* Sliding Top Line */}
              <div className="card-top-line" style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%) scaleX(0)",
                width: "100%",
                height: 3,
                background: "var(--grad-gold)",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transformOrigin: "center",
              }} />

              {/* Icon Frame */}
              <div className="card-icon-badge" style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#FDF6EE",
                border: "1px solid rgba(197,146,42,0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                transition: "all 0.4s ease",
              }}>
                <c.icon className="icon-svg" size={20} strokeWidth={1.2} style={{ color: "#C5922A", transition: "all 0.4s ease" }} />
              </div>

              <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 13.5, letterSpacing: "0.06em", color: "#7B1034", marginBottom: 12 }}>
                {c.title}
              </h3>
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 13.5, lineHeight: 1.8, color: "rgba(58,32,16,0.68)" }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
        <style>{`
          @media (min-width:768px){.cred-grid{grid-template-columns:repeat(2,1fr)!important}}
          @media (min-width:1200px){.cred-grid{grid-template-columns:repeat(3,1fr)!important}}
          
          .about-interactive-card:hover {
            transform: translateY(-5px);
            background: #ffffff !important;
            border-color: rgba(197, 146, 42, 0.48) !important;
            box-shadow: 0 20px 48px -12px rgba(91,10,36,0.12), 0 0 10px rgba(197,146,42,0.08) !important;
          }
          .about-interactive-card:hover .card-top-line {
            transform: translateX(-50%) scaleX(1);
          }
          .about-interactive-card:hover .card-icon-badge {
            background: #7B1034 !important;
            border-color: #7B1034 !important;
            transform: scale(1.08);
          }
          .about-interactive-card:hover .icon-svg {
            color: #FAF0E4 !important;
          }
        `}</style>
      </div>
    </section>

    {/* ── 6. Core Values ────────────────────────── */}
    <section style={{ padding: "116px 0", background: "linear-gradient(180deg, #F5E6D2 0%, #FAF0E4 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <SectionHeader sup="Pillars of Practice" title="Core Values" />
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1,1fr)", gap: 24 }} className="val-grid">
          {values.map((v, i) => (
            <div key={v.title}
              style={{
                display: "flex",
                gap: 24,
                padding: "32px 28px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(197,146,42,0.18)",
                boxShadow: "0 8px 24px -10px rgba(91,10,36,0.05)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                animation: `fadeUp 0.8s ease ${i * 0.1}s both`,
                position: "relative",
                overflow: "hidden",
              }}
              className="about-interactive-card"
            >
              {/* Sliding Top Line */}
              <div className="card-top-line" style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%) scaleX(0)",
                width: "100%",
                height: 3,
                background: "var(--grad-gold)",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transformOrigin: "center",
              }} />

              {/* Icon Badge */}
              <div className="card-icon-badge" style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "#FDF6EE",
                border: "1px solid rgba(197,146,42,0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.4s ease",
              }}>
                <v.icon className="icon-svg" size={22} strokeWidth={1.2} style={{ color: "#C5922A", transition: "all 0.4s ease" }} />
              </div>
              
              <div>
                <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 13.5, letterSpacing: "0.06em", color: "#7B1034", marginBottom: 8 }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 13.5, lineHeight: 1.8, color: "rgba(58,32,16,0.68)" }}>
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (min-width:768px){.val-grid{grid-template-columns:repeat(2,1fr)!important}}
        `}</style>
      </div>
    </section>

    {/* ── 7. Journey Timeline ──────────────────── */}
    <section style={{ padding: "116px 0" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
        <SectionHeader sup="Chronicles of Growth" title="The Journey" />
        
        <div style={{
          position: "relative",
          paddingLeft: 44,
          borderLeft: "1.5px solid rgba(197,146,42,0.24)",
          marginLeft: 12,
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}>
          {[
            { year: "2012", title: "The Cosmic Calling", desc: "Initiated formal deep-dives into Vedic Astrology and Vastu Shastra, studying direct manuscript translations under esteemed gurus in the sacred hubs of Haridwar." },
            { year: "2015", title: "First Mandates & Consultations", desc: "Received initial credentials in Vastu space-balancing and Parashari astrology. Formally accepted private consulting calls, gaining early domestic word-of-mouth." },
            { year: "2017", title: "Induction to AIFAS", desc: "Earned elite professional recognition and was officially inducted as an Elite Member of the highly regarded All India Federation of Astrologers Society." },
            { year: "2019", title: "Crossing Boundaries", desc: "Formally extended consulting wings globally, serving remote and NRI client structures across the USA, Canada, UK, UAE, and Singapore." },
            { year: "2022", title: "Eminent Recognitions", desc: "Uplifted with multiple regional awards honoring excellence in classical home Vastu corrections and high-fidelity planetary remediations." },
            { year: "Present Day", title: "5000+ Cosmic Alignments", desc: "Continues her sacred advisory mission from Haridwar, dedicating every day to guiding global lives into prosperity, peace, and absolute cosmic rhythm." },
          ].map((item, i) => (
            <div key={item.year}
              style={{
                position: "relative",
                animation: `fadeUp 0.8s ease ${i * 0.1}s both`,
              }}
              className="about-timeline-block"
            >
              {/* Glowing Diamond Bullet SVG */}
              <div style={{
                position: "absolute",
                left: -53.5,
                top: 4,
                width: 18,
                height: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }} className="timeline-bullet">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <polygon points="50,10 90,50 50,90 10,50" fill="#7B1034" stroke="#FAF0E4" strokeWidth="12" />
                  <polygon points="50,25 75,50 50,75 25,50" fill="#C5922A" />
                </svg>
              </div>

              {/* Timeline Card */}
              <div style={{
                padding: "24px 28px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.76) 0%, rgba(253,246,238,0.50) 100%)",
                border: "1px solid rgba(197,146,42,0.16)",
                borderRadius: 16,
                boxShadow: "0 4px 18px -6px rgba(91,10,36,0.04)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }} className="timeline-card">
                <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10.5, letterSpacing: "0.20em", textTransform: "uppercase", color: "#C5922A", marginBottom: 6 }}>
                  {item.year}
                </p>
                <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.02em", color: "#7B1034", marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 13.5, lineHeight: 1.75, color: "rgba(58,32,16,0.68)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .about-timeline-block:hover .timeline-card {
          transform: translateX(6px);
          background: #ffffff !important;
          border-color: rgba(197, 146, 42, 0.40) !important;
          box-shadow: 0 12px 30px -10px rgba(91,10,36,0.08) !important;
        }
        .about-timeline-block:hover .timeline-bullet {
          transform: scale(1.22) rotate(45deg);
          filter: drop-shadow(0 0 4px rgba(197,146,42,0.40));
        }
        .timeline-bullet {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>

    {/* ── 8. Overhauled High-Contrast CTA Section ───────────────────────────────── */}
    <section style={{
      padding: "128px 0",
      background: "linear-gradient(135deg, #7B1034 0%, #4A081F 100%)",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Dynamic Spin Mandala Behind Text */}
      <div className="anim-spinrev" style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        maxWidth: 680,
        aspectRatio: "1",
        opacity: 0.04,
        pointerEvents: "none",
        zIndex: 0,
      }}>
        <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="38" strokeDasharray="1 1" />
          <polygon points="50,2 98,50 50,98 2,50" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(30 50 50)" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(60 50 50)" />
        </svg>
      </div>

      {/* Behind Aura Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        maxWidth: 500,
        aspectRatio: "1",
        background: "radial-gradient(circle, rgba(197,146,42,0.18) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div className="sparkle-field" style={{ opacity: 0.28 }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }} className="anim-fadeup">
        <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10.5, letterSpacing: "0.26em", textTransform: "uppercase", color: "#FAF0E4", marginBottom: 14 }}>
          ✦ Book Your Personalized Consultation Today ✦
        </p>
        
        <h2 style={{
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: 700,
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
          color: "#FAF0E4",
          lineHeight: 1.15,
          marginBottom: 24,
          letterSpacing: "0.01em",
        }}>
          Ready to Step Into Your Divine Alignment?
        </h2>
        
        <OrnDivider className="w-full" style={{ maxWidth: 480, margin: "0 auto" } as React.CSSProperties} />
        
        <p style={{
          fontFamily: "Cormorant Garamond, serif",
          fontStyle: "italic",
          fontSize: "clamp(1.15rem, 2.4vw, 1.45rem)",
          lineHeight: 1.8,
          color: "rgba(250,240,228,0.80)",
          margin: "24px auto 44px",
          maxWidth: 580,
        }}>
          A detailed personal chart reading or spatial Vastu audit can instantly dissolve years of stagnation, aligning your life with abundance and clarity.
        </p>
        
        {/* Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 18 }} className="cta-btn-group">
          
          {/* Primary CTA */}
          <Link to="/contact"
            style={{
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "#7B1034",
              background: "linear-gradient(135deg, #FDF6EE 0%, #C5922A 100%)",
              padding: "16px 36px",
              borderRadius: 999,
              display: "inline-block",
              transition: "all 0.4s ease",
              border: "1.5px solid #C5922A",
              boxShadow: "0 8px 30px -10px rgba(197,146,42,0.40)",
            }}
            className="cta-primary-btn"
          >
            Request Consultation
          </Link>
          
          {/* Secondary CTA (WhatsApp) */}
          <a href="https://wa.me/917310952576"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "#FAF0E4",
              background: "rgba(255,255,255,0.08)",
              padding: "15px 34px",
              borderRadius: 999,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.4s ease",
              border: "1.5px solid rgba(197,146,42,0.45)",
            }}
            className="cta-secondary-btn"
          >
            <MessageCircle size={14} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Priority Badge */}
        <div style={{ marginTop: 28 }} className="anim-glow">
          <span style={{
            fontFamily: "Cinzel, serif",
            fontSize: 9.5,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C5922A",
            fontWeight: 700,
          }}>
            ✦ Priority response within 2–4 Hours ✦
          </span>
        </div>
      </div>
      <style>{`
        .cta-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px -8px rgba(197,146,42,0.60) !important;
          background: #FAF0E4 !important;
          border-color: #FAF0E4 !important;
        }
        .cta-secondary-btn:hover {
          transform: translateY(-3px);
          background: #FAF0E4 !important;
          color: #7B1034 !important;
          border-color: #FAF0E4 !important;
          box-shadow: 0 16px 40px -12px rgba(250,240,228,0.22) !important;
        }
        @media (max-width: 500px) {
          .cta-btn-group { flex-direction: column !important; width: 100% !important; max-width: 320px !important; margin: 0 auto !important; }
          .cta-primary-btn, .cta-secondary-btn { width: 100% !important; text-align: center !important; justify-content: center !important; }
        }
      `}</style>
    </section>

  </main>
);

export default AboutUsPage;
