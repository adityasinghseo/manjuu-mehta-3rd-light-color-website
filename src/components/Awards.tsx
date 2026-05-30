import { Link } from "react-router-dom";
import { OrnDivider } from "./SiteNav";

// Import actual award images from assets
import award1 from "@/assets/awards/WhatsApp Image 2026-05-29 at 4.27.46 PM.jpeg";
import award2 from "@/assets/awards/WhatsApp Image 2026-05-29 at 4.27.46 PM (1).jpeg";
import award3 from "@/assets/awards/WhatsApp Image 2026-05-29 at 4.27.47 PM.jpeg";
import award4 from "@/assets/awards/WhatsApp Image 2026-05-29 at 4.27.47 PM (1).jpeg";
import award5 from "@/assets/awards/WhatsApp Image 2026-05-29 at 4.27.47 PM (2).jpeg";
import award6 from "@/assets/awards/WhatsApp Image 2026-05-29 at 4.43.30 PM.jpeg";

const AWARDS = [
  { 
    year: "2024", 
    title: "Super Woman Awards 2024",                 
    note: "Organization: Forever Star India (FSIA)", 
    img: award5
  },
  { 
    year: "2025", 
    title: "Nakshatra Alankar Award 2025",           
    note: "Award Title: Nakshatra Alankar Award – Future Point | Awardee: Ms. Manju Mehta", 
    img: award4
  },
  { 
    year: "2024", 
    title: "Sahika India International Excellence Awards",  
    note: "Award Title: Sahika India International Excellence Awards (SIIEA)", 
    img: award3
  },
  { 
    year: "2024", 
    title: "Brahma Kamal",          
    note: "Presented at: Amar Ujala Jyotish Mahakumbh 2024-25 | Venue: Graphic Era University, Dehradun", 
    img: award1
  },
  { 
    year: "2024", 
    title: "Spiritual Expo Kumbh – Certificate of Participation",             
    note: "Recognition: A Spiritual Brand with a Difference", 
    img: award6
  },
  { 
    year: "2024", 
    title: "Premium Member – All India Federation of Astrologers Society (AIFAS)",             
    note: "Membership Validity: 2024–2029", 
    img: award2
  },
];

const Awards = () => (
  <section
    id="awards"
    style={{
      padding: "96px 0",
      background: "linear-gradient(180deg, #FFFFFF 0%, #FAF6F0 100%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div className="sparkle-field" style={{ opacity: 0.22 }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8E6D3D", marginBottom: 12 }}>Recognition</p>
        <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.55rem, 3.2vw, 2.4rem)", color: "#8E6D3D", marginBottom: 20 }}>Honours &amp; Accolades</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <OrnDivider className="w-full" style={{ maxWidth: 360 } as React.CSSProperties} />
        </div>
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.92rem, 1.35vw, 1.03rem)", lineHeight: 1.9, color: "#28160A", marginTop: 16, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          Honored across the globe for bringing authentic Vedic sciences to modern life.
        </p>
      </div>

      {/* Awards grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1,1fr)", gap: 16, marginBottom: 56 }} className="awards-grid">
        {AWARDS.map((a, i) => (
          <div
            key={a.title}
            style={{
              display: "flex", gap: 20, padding: "18px 22px",
              background: "rgba(255,255,255,0.80)",
              border: "1px solid rgba(142,109,61,0.22)",
              borderRadius: 14,
              boxShadow: "0 4px 18px -6px rgba(68,65,54,0.06)",
              transition: "all 0.32s ease",
              animation: `fadeUp 0.7s ease ${i * 0.06}s both`,
            }}
            className="award-card"
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(142,109,61,0.48)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(142,109,61,0.22)"; e.currentTarget.style.transform = "none"; }}
          >
            {/* Award Image Card with Year overlay */}
            <div style={{
              borderRadius: 12,
              overflow: "hidden",
              border: "1.5px solid rgba(142,109,61,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 4px 14px rgba(68,65,54,0.05)",
              background: "#FFFFFF",
              position: "relative",
              padding: 4,
            }} className="award-img-wrap award-img-responsive-size">
              <img src={a.img} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "contain", transition: "transform 0.4s ease" }} className="award-img" />
              
              {/* Year overlay */}
              <div style={{
                position: "absolute",
                bottom: 4,
                right: 4,
                padding: "2px 6px",
                background: "#8E6D3D",
                borderRadius: 4,
                fontSize: 8,
                color: "#FFFFFF",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                zIndex: 2,
              }}>
                {a.year}
              </div>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)", color: "#8E6D3D", marginBottom: 6 }}>{a.title}</h3>
              <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.92rem, 1.35vw, 1.03rem)", lineHeight: 1.9, color: "#28160A" }}>{a.note}</p>
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
            fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8E6D3D",
            padding: "16px 36px",
            border: "1.5px solid rgba(142,109,61,0.45)",
            borderRadius: 999,
            display: "inline-block",
            transition: "all 0.25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#8E6D3D"; e.currentTarget.style.color = "#FFFFFF"; e.currentTarget.style.borderColor = "#8E6D3D"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#8E6D3D"; e.currentTarget.style.borderColor = "rgba(142,109,61,0.45)"; }}
        >
          View Award Gallery →
        </Link>
      </div>
    </div>

    <style>{`
      @media (min-width: 768px) { .awards-grid { grid-template-columns: repeat(2,1fr) !important; } }
      .award-img-responsive-size {
        width: 96px !important;
        height: 96px !important;
      }
      @media (min-width: 480px) {
        .award-img-responsive-size {
          width: 120px !important;
          height: 120px !important;
        }
      }
      .award-card:hover .award-img {
        transform: scale(1.08);
      }
    `}</style>
  </section>
);

export default Awards;
