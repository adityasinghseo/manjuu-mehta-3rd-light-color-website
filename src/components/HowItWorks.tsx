import { Phone, FileText, Star, Sparkles } from "lucide-react";
import { OrnDivider } from "./SiteNav";

const STEPS = [
  {
    num: "01",
    Icon: Phone,
    title: "Schedule Session",
    desc: "Connect via call or WhatsApp at your convenience.",
  },
  {
    num: "02",
    Icon: FileText,
    title: "Share Coordinates",
    desc: "Provide birth or property details for accurate readings.",
  },
  {
    num: "03",
    Icon: Star,
    title: "Receive Insights",
    desc: "Obtain a personalized blueprint with practical remedies.",
  },
  {
    num: "04",
    Icon: Sparkles,
    title: "Transform Life",
    desc: "Implement guidelines to welcome abundance and clarity.",
  },
];

const HowItWorks = () => (
  <section
    id="how-it-works"
    style={{
      padding: "116px 0",
      background: "#F7F0E4",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Elegant Sacred Geometry Mandala Watermark in Background */}
    <div style={{
      position: "absolute",
      bottom: "-10%",
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

    {/* Subtle sparkle field */}
    <div className="sparkle-field" style={{ opacity: 0.28 }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "clamp(1.12rem, 1.4vw, 1.2rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-heading)", marginBottom: 14 }}>
          The Sacred Path
        </p>
        <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--color-text-heading)", marginBottom: 20, lineHeight: 1.2 }}>
          How It Works
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <OrnDivider className="w-full" style={{ maxWidth: 420 } as React.CSSProperties} />
        </div>
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", color: "var(--color-text-primary)", marginTop: 18, lineHeight: 1.9 }}>
          A simple, aligned four-step journey to invite transformation into your life.
        </p>
      </div>

      {/* Grid container with connected line wrapper */}
      <div style={{ position: "relative" }}>
        {/* Connected Flow Line for Desktop */}
        <div
          className="hiw-line"
          style={{
            position: "absolute",
            top: "90px", // Exact vertical center of circular icons
            left: "12%",
            right: "12%",
            height: "2px",
            background: "transparent",
            borderTop: "1.5px dashed rgba(var(--color-accent-gold-rgb), 0.32)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Steps Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 24 }} className="hiw-grid">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              style={{
                position: "relative",
                padding: "38px 28px",
                background: "#FAF0EC",
                border: "1px solid rgba(var(--color-accent-gold-rgb), 0.16)",
                borderRadius: 18,
                boxShadow: "0 10px 30px -12px rgba(var(--color-text-heading-rgb),0.03)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                animation: `fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s both`,
                zIndex: 2,
                overflow: "hidden",
              }}
              className="hiw-card"
            >
              {/* Top gold border expansion */}
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
                zIndex: 3,
              }} className="hiw-top-line" />

              {/* Behind card glow backlight */}
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: 18,
                background: "radial-gradient(circle at center, rgba(var(--color-accent-gold-rgb), 0.08) 0%, transparent 70%)",
                opacity: 0,
                transition: "opacity 0.5s ease",
                pointerEvents: "none",
                zIndex: 0,
              }} className="hiw-glow" />

              {/* Roman / Numeral Watermark */}
              <div style={{
                position: "absolute",
                bottom: -12,
                right: 12,
                fontFamily: "Cinzel, serif",
                fontWeight: 800,
                fontSize: 68,
                color: "rgba(var(--color-accent-gold-rgb), 0.045)",
                pointerEvents: "none",
                zIndex: 1,
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }} className="hiw-number-watermark">
                {s.num}
              </div>

              {/* Circle Icon Badge */}
              <div style={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                background: "#D86A63",
                border: "1px solid rgba(244, 208, 111, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                position: "relative",
                zIndex: 2,
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 4px 12px rgba(216,106,99,0.15)",
              }} className="hiw-icon-wrapper">
                <s.Icon size={24} strokeWidth={1.7} color="#F4D06F" style={{ transition: "all 0.4s ease" }} />
              </div>

              {/* Step Title */}
              <h3 style={{
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
                fontSize: "clamp(1.25rem, 1.8vw, 1.4rem)",
                letterSpacing: "0.05em",
                color: "var(--color-accent-gold)",
                marginBottom: 10,
                position: "relative",
                zIndex: 2,
              }}>
                {s.title}
              </h3>

              {/* Step Description */}
              <p style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)",
                lineHeight: 1.9,
                color: "var(--color-text-primary)",
                position: "relative",
                zIndex: 2,
                maxWidth: "240px",
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Luxury styles for hover and grid configurations */}
    <style>{`
      @media (min-width: 640px) {
        .hiw-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (min-width: 1200px) {
        .hiw-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 28px !important; }
      }

      /* Desktop connecting line visibility */
      @media (max-width: 1199px) {
        .hiw-line { display: none !important; }
      }

      /* Card Hover Effects */
      .hiw-card:hover {
        transform: translateY(-6px);
        background: var(--color-bg-primary) !important;
        border-color: rgba(var(--color-accent-gold-rgb), 0.45) !important;
        box-shadow: 0 20px 40px -16px rgba(var(--color-text-heading-rgb),0.08), 0 0 16px rgba(var(--color-accent-gold-rgb),0.04) !important;
      }
      
      .hiw-card:hover .hiw-top-line {
        transform: scaleX(1);
      }

      .hiw-card:hover .hiw-glow {
        opacity: 1;
      }

      .hiw-card:hover .hiw-number-watermark {
        transform: scale(1.08) translateY(-4px);
        color: rgba(var(--color-accent-gold-rgb), 0.08) !important;
      }

      .hiw-card:hover .hiw-icon-wrapper {
        transform: scale(1.08);
        box-shadow: 0 6px 18px rgba(216, 106, 99, 0.3);
      }
    `}</style>
  </section>
);

export default HowItWorks;

