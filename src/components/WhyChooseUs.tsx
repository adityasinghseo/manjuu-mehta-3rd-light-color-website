import { Link } from "react-router-dom";
import { User, Target, ShieldCheck, Flower2, Heart } from "lucide-react";
import { OrnDivider } from "./SiteNav";

import astrologyImg from "../assets/astrology_wcu.png";
import numerologyImg from "../assets/numerology_wcu.png";
import vastuImg from "../assets/vastu_wcu.png";
import spiritualImg from "../assets/spiritual_wcu.png";

/* ────────────────────────────────────────────────────────────
   DATA
─────────────────────────────────────────────────────────────*/
const SERVICES = [
  { image: astrologyImg,  title: "ASTROLOGY",                 desc: "Empowering answers and planetary predictions through in-depth birth chart analysis." },
  { image: numerologyImg, title: "NUMEROLOGY",                 desc: "Harmonize your name vibrations to align cleanly with your true life purpose." },
  { image: vastuImg,      title: "VASTU CONSULTATION",         desc: "Balance spatial energies in your home or office to attract lasting prosperity." },
  { image: spiritualImg,  title: "SPIRITUAL COACHING",         desc: "Heal past blockages and gain absolute clarity for confident, aligned growth." },
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
      background: "var(--color-bg-primary)",
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
      <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.6">
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
          <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "clamp(1.12rem, 1.4vw, 1.2rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-heading)", marginBottom: 12 }}>
            Our Pillars
          </p>
          <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--color-text-heading)", marginBottom: 16, lineHeight: 1.2 }}>
            Core Offerings
          </h2>
          <OrnDivider className="w-full" style={{ maxWidth: 460 } as React.CSSProperties} />
        </div>

        {/* Service items - Images Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="services-offer-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
                padding: "26px 30px",
                background: "#FAF0EC",
                border: "1px solid rgba(var(--color-accent-gold-rgb),0.18)",
                borderRadius: 16,
                boxShadow: "0 10px 30px -12px rgba(var(--color-text-heading-rgb),0.04)",
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
                background: "linear-gradient(90deg, var(--color-accent-gold) 0%, #FFFFFF 50%, var(--color-accent-gold) 100%)",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: 2,
              }} className="offer-top-line" />

              {/* Beautiful Real Image */}
              <div style={{
                width: "100%", height: 180, borderRadius: 12,
                overflow: "hidden",
                marginBottom: 20,
                position: "relative",
              }}>
                <img src={s.image} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="offer-image" />
              </div>
              <div>
                <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.25rem, 1.8vw, 1.4rem)", letterSpacing: "0.07em", color: "var(--color-text-heading)", marginBottom: 8 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.9, color: "var(--color-text-primary)" }}>
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
              fontSize: "clamp(1.15rem, 1.2vw, 1.2rem)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-accent-gold)",
              padding: "16px 36px",
              borderRadius: 999,
              border: "1px solid rgba(var(--color-accent-gold-rgb),0.30)",
              display: "inline-block",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              background: "transparent",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--color-accent-gold)";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.borderColor = "var(--color-accent-gold)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-accent-gold)";
              e.currentTarget.style.borderColor = "rgba(var(--color-accent-gold-rgb),0.30)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View All Services →
          </Link>
        </div>
      </div>

    </div>

    {/* Luxury styles for hover and interactive details */}
    <style>{`
      @media (min-width: 768px) {
        .services-offer-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (min-width: 1024px) {
        .services-offer-grid { grid-template-columns: repeat(4, 1fr) !important; }
      }

      /* Hover animation for the offer cards */
      .offer-card {
        flex-direction: column !important;
        align-items: flex-start !important;
        padding: 24px !important;
        text-align: left !important;
      }
      .offer-card:hover {
        transform: translateY(-5px);
        background: var(--color-bg-primary) !important;
        border-color: rgba(var(--color-accent-gold-rgb), 0.45) !important;
        box-shadow: 0 16px 40px -14px rgba(var(--color-text-heading-rgb),0.08), 0 0 12px rgba(var(--color-accent-gold-rgb),0.06) !important;
      }
      .offer-card:hover .offer-top-line {
        transform: scaleX(1);
      }
      .offer-card:hover .offer-image {
        transform: scale(1.05);
      }

      @media (max-width: 768px) {
        .wcu-left-col { align-items: center !important; text-align: center !important; }
        .services-offer-grid { grid-template-columns: 1fr !important; }
        .offer-card { text-align: center !important; align-items: center !important; }
      }
    `}</style>
  </section>
);

export default WhyChooseUs;
