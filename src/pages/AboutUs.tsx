import portrait from "@/assets/WhatsApp Image 2026-05-27 at 2.08.25 PM (1).jpeg";
import { Award, BookOpen, Globe, Heart, Sparkles, Star, Users, Zap, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { OrnDivider } from "@/components/SiteNav";
import Consult from "@/components/Consult";

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
    <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.12rem, 1.4vw, 1.25rem)", letterSpacing: "0.20em", textTransform: "uppercase", color: "#8E6D3D", marginBottom: 12 }}>{sup}</p>
    <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.55rem,3.2vw,2.4rem)", color: "#8E6D3D", marginBottom: 20 }}>{title}</h2>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <OrnDivider className="w-full" style={{ maxWidth: 360 } as React.CSSProperties} />
    </div>
  </div>
);

/* ── Component ─────────────────────────────────────────────── */
const AboutUsPage = () => (
  <main style={{ minHeight: "100vh", paddingTop: 72, background: "linear-gradient(180deg, #FFFFFF 0%, #FAF6F0 50%, #FFFFFF 100%)" }}>

    {/* ── 1. Hero Banner ─────────────────────────── */}
    <section style={{ padding: "96px 0 56px", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)" }}>
      {/* Background Glows */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        maxWidth: 600,
        aspectRatio: "1",
        background: "radial-gradient(circle, rgba(142,109,61,0.06) 0%, transparent 70%)",
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
        <svg viewBox="0 0 100 100" fill="none" stroke="#8E6D3D" strokeWidth="0.6">
          <circle cx="50" cy="50" r="48" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(15 50 50)" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(45 50 50)" />
        </svg>
      </div>

      <div className="sparkle-field" style={{ opacity: 0.32 }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }} className="anim-fadeup">

        <h1 style={{ fontFamily: "Cinzel, serif", fontWeight: 800, fontSize: "clamp(2.4rem,6vw,4.2rem)", color: "#8E6D3D", lineHeight: 1.1, marginBottom: 20 }}>
          Manjuu Mehta
        </h1>
        <OrnDivider />
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.15rem, 1.45vw, 1.25rem)", color: "#8E6D3D", fontWeight: 600, marginTop: 22, letterSpacing: "0.10em", textTransform: "uppercase" }}>
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

            {/* Soft Background Radial Aura Glow */}
            <div style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(142,109,61,0.14) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
              zIndex: 0,
            }} />



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

        {/* RIGHT COLUMN: Editorial Description & Bio */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="anim-fadeup">
          <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.1rem, 1.35vw, 1.2rem)", letterSpacing: "0.20em", textTransform: "uppercase", color: "#8E6D3D", marginBottom: 12 }}>
            Her Journey
          </p>
          <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "#8E6D3D", lineHeight: 1.15, marginBottom: 20 }}>
            A Decade of Cosmic Guidance
          </h2>
          <OrnDivider className="w-full" style={{ maxWidth: 460, marginBottom: 24 } as React.CSSProperties} />

          <div style={{ display: "flex", flexDirection: "column", gap: 16, fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.95, color: "rgba(40,22,10,0.82)" }}>
            <p>
              <strong style={{ color: "#8E6D3D", fontWeight: 600 }}>Manjuu Mehta</strong> is a certified professional Vastu Advisor, Vedic Astrologer, and Karmic Numerologist based in the holy city of <strong style={{ color: "#8E6D3D", fontWeight: 600 }}>Haridwar, Uttarakhand</strong>. With over a decade of professional practice, she has transformed the lives of thousands of seekers worldwide.
            </p>
            <p>
              Her approach balances rigorous ancient wisdom and modern clarity. By decoding celestial blueprints and spatial energy maps, she provides highly customized, practical remedies that empower individuals and businesses to step into their highest alignment.
            </p>
            
            {/* Elegant Quotation block inside Bio */}
            <div style={{
              borderLeft: "2.5px solid #8E6D3D",
              paddingLeft: 20,
              margin: "12px 0 8px",
              maxWidth: 580,
            }}>
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.9, color: "#28160A" }}>
                "Every physical space has a soul, and every planetary chart is a cosmic map. My mission is to decode these blueprints, letting seekers step into their absolute divine alignment."
              </p>
              <p style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(1.08rem, 1.2vw, 1.1rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8E6D3D", marginTop: 8, fontWeight: 700 }}>
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
          box-shadow: 0 32px 72px -12px rgba(68,65,54,0.20), 0 0 40px rgba(142,109,61,0.12) !important;
        }
        .about-portrait-card:hover .about-portrait-img {
          transform: scale(1.03);
        }
        @media (max-width: 768px) {
          .about-float-badge { display: none !important; }
        }
      `}</style>
    </section>

    {/* ── VIP Honors & Prestige Badges (Sohini Sastri Inspired) ── */}
    <section style={{
      padding: "56px 0",
      background: "linear-gradient(90deg, rgba(142,109,61,0.03) 0%, rgba(142,109,61,0.06) 50%, rgba(142,109,61,0.03) 100%)",
      borderTop: "1px solid rgba(142,109,61,0.18)",
      borderBottom: "1px solid rgba(142,109,61,0.18)",
      position: "relative",
      zIndex: 10,
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        
        {/* Subtle decorative scroll at top of section */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <svg width="60" height="10" viewBox="0 0 144 24" fill="none">
            <path d="M10 12C35 12 45 5 72 12C80 16 82 16 72 12C99 5 109 12 134 12" stroke="#8E6D3D" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
            <circle cx="72" cy="12" r="3" fill="#8E6D3D" opacity="0.85"/>
          </svg>
        </div>

        <h3 className="font-cinzel text-center tracking-[0.22em] uppercase font-bold mb-10" style={{ color: "#8E6D3D", fontSize: "clamp(1.1rem, 1.35vw, 1.2rem)" }}>
          ✦ VIP Recognition &amp; Elite Accolades ✦
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 20 }} className="prestige-badge-grid">
          {[
            {
              icon: Award,
              title: "Jyotish Mahakumbh Award",
              subtitle: "Uttarakhand CM Honoree",
              desc: "Presented directly by CM Shri Pushkar Singh Dhami for exceptional contributions to Vedic sciences.",
            },
            {
              icon: Star,
              title: "AIFAS Elite Member",
              subtitle: "All India Astrologers Society",
              desc: "Elite member status in the nation's premier, gold-standard academic council.",
            },
            {
              icon: Sparkles,
              title: "Certified Vastu Expert",
              subtitle: "Space & Energy Auditor",
              desc: "Certified practitioner of elemental spatial correction and Vastu Shastra remedies.",
            },
            {
              icon: Globe,
              title: "International Consultant",
              subtitle: "Serving Seekers Globally",
              desc: "Serving a distinguished clientele across India, USA, UK, Canada, UAE, and Singapore.",
            },
          ].map((badge, idx) => (
            <div
              key={badge.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "24px 20px",
                background: "rgba(255, 255, 255, 0.70)",
                border: "1px solid rgba(142, 109, 61, 0.20)",
                borderRadius: 16,
                boxShadow: "0 4px 20px -8px rgba(68,65,54,0.04)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                animation: `fadeUp 0.8s ease ${idx * 0.08}s both`,
              }}
              className="prestige-card"
            >
              {/* Badge Icon */}
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center mb-4 card-icon-badge"
                style={{ background: "#FFFFFF", border: "1px solid rgba(142,109,61,0.28)", transition: "all 0.4s ease" }}
              >
                <badge.icon className="w-5 h-5 icon-svg" strokeWidth={1.7} style={{ color: "#8E6D3D", transition: "all 0.4s ease" }} />
              </div>
              <h4 className="font-cinzel font-bold" style={{ color: "#8E6D3D", fontSize: "clamp(1.25rem, 1.8vw, 1.4rem)" }}>{badge.title}</h4>
              <p className="font-poppins tracking-[0.18em] uppercase font-bold mt-1 mb-2.5" style={{ color: "#8E6D3D", fontSize: "clamp(1.15rem, 1.45vw, 1.25rem)" }}>{badge.subtitle}</p>
              <p className="font-poppins leading-relaxed text-foreground/70" style={{ color: "rgba(40,22,10,0.65)", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)" }}>{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 640px) {
          .prestige-badge-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .prestige-badge-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        .prestige-card:hover {
          transform: translateY(-4px);
          background: #ffffff !important;
          border-color: rgba(142, 109, 61, 0.48) !important;
          box-shadow: 0 14px 32px -10px rgba(68,65,54,0.08) !important;
        }
        .prestige-card:hover .card-icon-badge {
          background: #8E6D3D !important;
          border-color: #8E6D3D !important;
        }
        .prestige-card:hover .icon-svg {
          color: #FFFFFF !important;
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
              border: "1px solid rgba(142,109,61,0.20)",
              boxShadow: "0 6px 20px -8px rgba(68,65,54,0.06)",
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

            <div style={{ fontFamily: "Cinzel, serif", fontWeight: 900, fontSize: "clamp(2rem, 3vw, 2.6rem)", color: "#8E6D3D", lineHeight: 1.1 }}>{s.value}</div>
            <div style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.08rem, 1.2vw, 1.1rem)", letterSpacing: "0.20em", textTransform: "uppercase", color: "#8E6D3D", marginTop: 8, lineHeight: 1.2 }}>{s.label}</div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.1rem, 1.35vw, 1.2rem)", color: "rgba(58,32,16,0.55)", marginTop: 6, lineHeight: 1.3 }}>{s.desc}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (min-width:768px){.stats-bar-grid{grid-template-columns:repeat(4,1fr)!important}}
        .about-stat-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.94) !important;
          border-color: rgba(142, 109, 61, 0.50) !important;
          box-shadow: 0 16px 36px -12px rgba(68,65,54,0.12), 0 0 10px rgba(142,109,61,0.08) !important;
        }
        .about-stat-card:hover .card-top-line {
          transform: translateX(-50%) scaleX(1);
        }
      `}</style>
    </section>

    {/* ── 4. Philosophy Section ─────────────────────────── */}
    <section style={{ padding: "128px 0", background: "linear-gradient(160deg, #FAF6F0 0%, #F2ECE2 100%)", position: "relative", overflow: "hidden" }}>
      <div className="sparkle-field" style={{ opacity: 0.25 }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.12rem, 1.4vw, 1.25rem)", letterSpacing: "0.20em", textTransform: "uppercase", color: "#8E6D3D", marginBottom: 12 }}>Core Philosophy</p>
          <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.55rem,3.2vw,2.4rem)", color: "#8E6D3D", marginBottom: 20 }}>The Cosmos is a Living Scripture</h2>
          <OrnDivider />
        </div>
        
        <div style={{
          background: "rgba(255,255,255,0.45)",
          border: "1px solid rgba(142,109,61,0.18)",
          borderRadius: 24,
          padding: "44px 38px",
          backdropFilter: "blur(8px)",
          boxShadow: "0 12px 32px -8px rgba(68,65,54,0.05)",
        }}>
          <blockquote style={{ borderLeft: "3px solid #8E6D3D", paddingLeft: 28, marginBottom: 28 }}>
            <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.85, color: "#28160A" }}>
              "I believe that every single seeker arrives in this world mapped with a highly distinct cosmic signature — a celestial blueprint written in the stars at the precise breath of birth. My work is simply to read that blueprint with absolute transparency, assisting the seeker to walk their destined path with clarity, power, and boundless grace."
            </p>
            <footer style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.08rem, 1.2vw, 1.1rem)", letterSpacing: "0.20em", textTransform: "uppercase", color: "#8E6D3D", marginTop: 18 }}>— Manjuu Mehta</footer>
          </blockquote>
          
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.9, color: "rgba(40,22,10,0.82)" }}>
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
                border: "1px solid rgba(142,109,61,0.18)",
                boxShadow: "0 8px 24px -10px rgba(68,65,54,0.06)",
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
                background: "#FFFFFF",
                border: "1px solid rgba(142,109,61,0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                transition: "all 0.4s ease",
              }}>
                <c.icon className="icon-svg" size={20} strokeWidth={1.7} style={{ color: "#8E6D3D", transition: "all 0.4s ease" }} />
              </div>

              <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.25rem, 1.8vw, 1.4rem)", letterSpacing: "0.06em", color: "#8E6D3D", marginBottom: 12 }}>
                {c.title}
              </h3>
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.08rem, 1.35vw, 1.15rem)", lineHeight: 1.8, color: "rgba(58,32,16,0.68)" }}>
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
            border-color: rgba(142, 109, 61, 0.48) !important;
            box-shadow: 0 20px 48px -12px rgba(68,65,54,0.12), 0 0 10px rgba(142,109,61,0.08) !important;
          }
          .about-interactive-card:hover .card-top-line {
            transform: translateX(-50%) scaleX(1);
          }
          .about-interactive-card:hover .card-icon-badge {
            background: #8E6D3D !important;
            border-color: #8E6D3D !important;
            transform: scale(1.08);
          }
          .about-interactive-card:hover .icon-svg {
            color: #FFFFFF !important;
          }
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
          borderLeft: "1.5px solid rgba(142,109,61,0.24)",
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
                  <polygon points="50,10 90,50 50,90 10,50" fill="#8E6D3D" stroke="#FFFFFF" strokeWidth="12" />
                  <polygon points="50,25 75,50 50,75 25,50" fill="#8E6D3D" />
                </svg>
              </div>

              {/* Timeline Card */}
              <div style={{
                padding: "24px 28px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.76) 0%, rgba(253,246,238,0.50) 100%)",
                border: "1px solid rgba(142,109,61,0.16)",
                borderRadius: 16,
                boxShadow: "0 4px 18px -6px rgba(68,65,54,0.04)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }} className="timeline-card">
                <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.12rem, 1.4vw, 1.25rem)", letterSpacing: "0.20em", textTransform: "uppercase", color: "#8E6D3D", marginBottom: 6 }}>
                  {item.year}
                </p>
                <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.25rem, 1.8vw, 1.4rem)", letterSpacing: "0.02em", color: "#8E6D3D", marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.08rem, 1.35vw, 1.15rem)", lineHeight: 1.75, color: "rgba(58,32,16,0.68)" }}>
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
          border-color: rgba(142, 109, 61, 0.40) !important;
          box-shadow: 0 12px 30px -10px rgba(68,65,54,0.08) !important;
        }
        .about-timeline-block:hover .timeline-bullet {
          transform: scale(1.22) rotate(45deg);
          filter: drop-shadow(0 0 4px rgba(142,109,61,0.40));
        }
        .timeline-bullet {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>

    <Consult />

  </main>
);

export default AboutUsPage;
