import { Compass, Sparkles, Hash, HeartHandshake, Briefcase, Gem } from "lucide-react";
import { OrnDivider } from "./SiteNav";

const SERVICES = [
  { deva: "वास्तु शास्त्र",   title: "Vastu Consultation",    desc: "Harmonize your home or workplace with natural energies to attract lasting health, wealth, and peace.",          Icon: Compass },
  { deva: "ज्योतिष",          title: "Vedic Astrology",        desc: "Understand your cosmic map through precise birth chart readings and practical, empowering remedies.",        Icon: Sparkles },
  { deva: "अंक शास्त्र",      title: "Karmic Numerology",      desc: "Decode the vibrational energy of your name and birth date to unlock your true destiny and potential.",              Icon: Hash },
  { deva: "विवाह मिलन",       title: "Match Making",           desc: "Bless your marriage with cosmic harmony. Comprehensive Kundali matching for soul-level compatibility.",                  Icon: HeartHandshake },
  { deva: "व्यापार परामर्श",  title: "Business Guidance",      desc: "Choose auspicious launch timings, names, and spatial alignments to drive profitable business growth.",             Icon: Briefcase },
  { deva: "रत्न परामर्श",     title: "Gemstone Counsel",       desc: "Strengthen favorable planetary energies with carefully analyzed, certified therapeutic gemstones.",              Icon: Gem },
];

const Services = ({ limit }: { limit?: number }) => {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section
      id="services"
      style={{
        padding: "116px 0",
        background: "var(--color-bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Background Watermarks */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "-10%",
        width: "45%",
        maxWidth: 450,
        aspectRatio: "1",
        opacity: 0.015,
        pointerEvents: "none",
        zIndex: 0,
      }}>
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.6">
          <circle cx="50" cy="50" r="48" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(45 50 50)" />
        </svg>
      </div>

      <div className="sparkle-field" style={{ opacity: 0.3 }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "clamp(1.12rem, 1.4vw, 1.2rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-heading)", marginBottom: 14 }}>Offerings</p>
          <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--color-text-heading)", marginBottom: 20, lineHeight: 1.2 }}>Sacred Services</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <OrnDivider className="w-full" style={{ maxWidth: 360 } as React.CSSProperties} />
          </div>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.9, color: "var(--color-text-primary)", marginTop: 16, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            Precision-crafted consultations rooted in ancient wisdom, delivered with modern clarity.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 28 }} className="services-grid">
          {list.map((s, i) => (
            <article
              key={s.title}
              id={`service-${s.title.toLowerCase().replace(/\s+/g,"-")}`}
              style={{
                padding: "38px 32px",
                background: "#FFFFFF",
                border: "1px solid rgba(var(--color-accent-gold-rgb),0.18)",
                borderRadius: 16,
                boxShadow: "0 10px 30px -12px rgba(var(--color-text-heading-rgb),0.04)",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                overflow: "hidden",
                animation: `fadeUp 0.7s ease ${i * 0.07}s both`,
              }}
              className="service-card"
            >
              {/* Top Gold Gradient Line - visible on hover */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3.5,
                background: "linear-gradient(90deg, var(--color-accent-gold) 0%, #FFFFFF 50%, var(--color-accent-gold) 100%)",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: 3,
              }} className="service-top-line" />

              {/* Ghost icon */}
              <div style={{ position: "absolute", right: -8, bottom: -8, opacity: 0.04, pointerEvents: "none", transition: "transform 0.8s ease" }} className="service-ghost-icon">
                <s.Icon size={90} color="var(--color-accent-gold)" strokeWidth={0.6} />
              </div>

              {/* Sanskrit label */}
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.08rem, 1.2vw, 1.1rem)", color: "rgba(var(--color-accent-gold-rgb),0.65)", marginBottom: 10, fontWeight: 500 }}>{s.deva}</p>

              {/* Icon - Refined with transition */}
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "#FBF4EA",
                border: "1px solid rgba(var(--color-accent-gold-rgb),0.22)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
                transition: "all 0.4s ease",
              }} className="service-icon-wrapper">
                <s.Icon size={19} strokeWidth={1.7} color="var(--color-accent-gold)" />
              </div>

              <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.25rem, 1.8vw, 1.4rem)", letterSpacing: "0.06em", color: "var(--color-text-heading)", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.9, color: "var(--color-text-primary)", marginBottom: 22 }}>{s.desc}</p>
              
              {/* Animated Enquire arrow */}
              <p style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(1.15rem, 1.45vw, 1.25rem)",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-accent-gold)",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }} className="service-enquire">
                Enquire <span style={{ transition: "transform 0.3s ease" }} className="enquire-arrow">→</span>
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Luxury styles for hover and interactive details */}
      <style>{`
        @media (min-width: 768px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (min-width: 1200px) { .services-grid { grid-template-columns: repeat(3, 1fr) !important; } }

        /* Hover animation for service cards */
        .service-card:hover {
          transform: translateY(-6px);
          background: var(--color-bg-secondary) !important;
          border-color: rgba(var(--color-accent-gold-rgb), 0.45) !important;
          box-shadow: 0 20px 48px -16px rgba(var(--color-text-heading-rgb),0.08), 0 0 12px rgba(var(--color-accent-gold-rgb),0.06) !important;
        }
        .service-card:hover .service-top-line {
          transform: scaleX(1);
        }
        .service-card:hover .service-icon-wrapper {
          transform: scale(1.06) translateY(-1px);
          background: var(--color-accent-gold) !important;
          border-color: var(--color-accent-gold) !important;
          box-shadow: 0 4px 12px rgba(var(--color-accent-gold-rgb),0.25);
        }
        .service-card:hover .service-icon-wrapper svg {
          color: #FFFFFF !important;
        }
        .service-card:hover .service-ghost-icon {
          transform: scale(1.08) rotate(3deg);
          opacity: 0.07;
        }
        .service-card:hover .service-enquire {
          color: var(--color-accent-gold) !important;
        }
        .service-card:hover .enquire-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};

export default Services;
