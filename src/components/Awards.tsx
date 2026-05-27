import { Link } from "react-router-dom";
import { OrnDivider } from "./SiteNav";

const AWARDS = [
  { year: "2025", title: "Jyotish Mahakumbh Award",          note: "Presented by Hon'ble CM of Uttarakhand, Shri Pushkar Singh Dhami" },
  { year: "2025", title: "Nakshatra Alankar Award",           note: "Honouring distinguished contribution to Vedic sciences" },
  { year: "2024", title: "Super Woman Award",                 note: "For Inspiring Women" },
  { year: "2024", title: "City Excellence Award",             note: "By India News Index" },
  { year: "2024", title: "Bharat Good Times — Rising Excellence", note: "Recognising transformative impact" },
  { year: "2024", title: "Her Story Times Award",             note: "Best Vastu Expert" },
  { year: "2023", title: "Sahika India International Award",  note: "Best Numerologist" },
  { year: "—",    title: "Forever Star India Award",          note: "Best Astro Numerologist, Haridwar, Uttarakhand" },
];

const Awards = () => (
  <section
    id="awards"
    style={{
      padding: "88px 0",
      background: "linear-gradient(180deg, #FAF0E4 0%, #F5E6D2 100%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div className="sparkle-field" style={{ opacity: 0.22 }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "#C5922A", marginBottom: 12 }}>Recognition</p>
        <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.2rem)", color: "#7B1034", marginBottom: 20 }}>Honours &amp; Accolades</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <OrnDivider className="w-full" style={{ maxWidth: 360 } as React.CSSProperties} />
        </div>
        <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: 17, color: "rgba(58,32,16,0.68)", marginTop: 14, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          Recognised across India for excellence in Vastu, Astrology and Karmic Numerology.
        </p>
      </div>

      {/* Awards grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1,1fr)", gap: 16, marginBottom: 56 }} className="awards-grid">
        {AWARDS.map((a, i) => (
          <div
            key={a.title}
            style={{
              display: "flex", gap: 18, padding: "18px 22px",
              background: "rgba(255,255,255,0.80)",
              border: "1px solid rgba(197,146,42,0.22)",
              borderRadius: 14,
              boxShadow: "0 4px 18px -6px rgba(91,10,36,0.06)",
              transition: "all 0.32s ease",
              animation: `fadeUp 0.7s ease ${i * 0.06}s both`,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(197,146,42,0.48)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(197,146,42,0.22)"; e.currentTarget.style.transform = "none"; }}
          >
            {/* Year badge */}
            <div style={{
              width: 56, height: 56, borderRadius: "50%",
              background: "var(--grad-maroon)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 3px 12px rgba(91,10,36,0.16)",
            }}>
              <span style={{ fontFamily: "serif", fontSize: 16, color: "#FAF0E4" }}>★</span>
              <span style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 8, color: "rgba(250,240,228,0.85)", letterSpacing: "0.10em", marginTop: 2 }}>{a.year}</span>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 13, color: "#7B1034", marginBottom: 5 }}>{a.title}</h3>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: 14, color: "rgba(58,32,16,0.62)", lineHeight: 1.6 }}>{a.note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery CTA */}
      <div style={{ textAlign: "center" }}>
        <Link
          to="/gallery"
          id="awards-gallery-cta"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7B1034",
            padding: "12px 28px",
            border: "1.5px solid rgba(197,146,42,0.45)",
            borderRadius: 999,
            display: "inline-block",
            transition: "all 0.25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#7B1034"; e.currentTarget.style.color = "#FAF0E4"; e.currentTarget.style.borderColor = "#7B1034"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#7B1034"; e.currentTarget.style.borderColor = "rgba(197,146,42,0.45)"; }}
        >
          View Award Gallery →
        </Link>
      </div>
    </div>

    <style>{`
      @media (min-width: 768px) { .awards-grid { grid-template-columns: repeat(2,1fr) !important; } }
    `}</style>
  </section>
);

export default Awards;
