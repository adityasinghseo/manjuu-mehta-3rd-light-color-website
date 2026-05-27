import { Compass, Sparkles, Hash, HeartHandshake, Briefcase, Gem } from "lucide-react";
import { OrnDivider } from "./SiteNav";

const SERVICES = [
  { deva: "वास्तु शास्त्र",   title: "Vastu Consultation",    desc: "Harmonize homes and workplaces with the five elements and directional energies for prosperity and peace.",          Icon: Compass },
  { deva: "ज्योतिष",          title: "Vedic Astrology",        desc: "Personalised birth chart readings, Mahadasha analysis and remedies aligned with your planetary blueprint.",        Icon: Sparkles },
  { deva: "अंक शास्त्र",      title: "Karmic Numerology",      desc: "Decode the vibrations of your name and date of birth to unlock your soul's purpose and life path.",              Icon: Hash },
  { deva: "विवाह मिलन",       title: "Match Making",           desc: "Ashta-Koota compatibility readings to bless unions with harmony, longevity and shared destiny.",                  Icon: HeartHandshake },
  { deva: "व्यापार परामर्श",  title: "Business Guidance",      desc: "Strategic Vastu and astrological counsel for entrepreneurs and enterprises seeking aligned growth.",             Icon: Briefcase },
  { deva: "रत्न परामर्श",     title: "Gemstone Counsel",       desc: "Sacred stones recommended through precise planetary analysis to amplify benefic cosmic energies.",              Icon: Gem },
];

const Services = ({ limit }: { limit?: number }) => {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section
      id="services"
      style={{
        padding: "116px 0",
        background: "linear-gradient(180deg, #F5E6D2 0%, #FAF0E4 100%)",
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
        <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.6">
          <circle cx="50" cy="50" r="48" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(45 50 50)" />
        </svg>
      </div>

      <div className="sparkle-field" style={{ opacity: 0.3 }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "#C5922A", marginBottom: 12 }}>Offerings</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#7B1034", marginBottom: 20 }}>Sacred Services</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <OrnDivider className="w-full" style={{ maxWidth: 360 } as React.CSSProperties} />
          </div>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: 17.5, color: "rgba(58,32,16,0.68)", marginTop: 14, maxWidth: 540, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
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
                background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(253,246,238,0.60) 100%)",
                border: "1px solid rgba(197,146,42,0.18)",
                borderRadius: 16,
                boxShadow: "0 10px 30px -12px rgba(91,10,36,0.04)",
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
                background: "linear-gradient(90deg, #C5922A 0%, #FAF0E4 50%, #7B1034 100%)",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: 3,
              }} className="service-top-line" />

              {/* Ghost icon */}
              <div style={{ position: "absolute", right: -8, bottom: -8, opacity: 0.04, pointerEvents: "none", transition: "transform 0.8s ease" }} className="service-ghost-icon">
                <s.Icon size={90} color="#7B1034" strokeWidth={0.6} />
              </div>

              {/* Sanskrit label */}
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontStyle: "italic", color: "rgba(197,146,42,0.65)", marginBottom: 10, fontWeight: 500 }}>{s.deva}</p>

              {/* Icon - Refined with transition */}
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "#FBF4EA",
                border: "1px solid rgba(197,146,42,0.22)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
                transition: "all 0.4s ease",
              }} className="service-icon-wrapper">
                <s.Icon size={19} strokeWidth={1.2} color="#C5922A" />
              </div>

              <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.10em", color: "#7B1034", marginBottom: 14 }}>{s.title}</h3>
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 13.5, lineHeight: 1.85, color: "rgba(58,32,16,0.70)", fontWeight: 400, marginBottom: 20 }}>{s.desc}</p>
              
              {/* Animated Enquire arrow */}
              <p style={{
                fontFamily: "Cinzel, serif",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7B1034",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
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
          background: linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(253,246,238,0.72) 100%) !important;
          border-color: rgba(197, 146, 42, 0.45) !important;
          box-shadow: 0 20px 48px -16px rgba(91,10,36,0.08), 0 0 12px rgba(197,146,42,0.06) !important;
        }
        .service-card:hover .service-top-line {
          transform: scaleX(1);
        }
        .service-card:hover .service-icon-wrapper {
          transform: scale(1.06) translateY(-1px);
          background: #7B1034 !important;
          border-color: #7B1034 !important;
          box-shadow: 0 4px 12px rgba(123,16,52,0.25);
        }
        .service-card:hover .service-icon-wrapper svg {
          color: #FAF0E4 !important;
        }
        .service-card:hover .service-ghost-icon {
          transform: scale(1.08) rotate(3deg);
          opacity: 0.07;
        }
        .service-card:hover .service-enquire {
          color: #C5922A !important;
        }
        .service-card:hover .enquire-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};

export default Services;
