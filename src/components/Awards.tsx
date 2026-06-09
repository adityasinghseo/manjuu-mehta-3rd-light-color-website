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
    title: "Nakshatra Alankar Award",           
    note: "Award Title: Nakshatra Alankar Award | Awardee: Ms Manjuu Mehta", 
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
      background: "#FAF4E8",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Elegant Sacred Geometry Mandala Watermark in Background */}
    <div style={{
      position: "absolute",
      top: "10%",
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

    <div className="sparkle-field" style={{ opacity: 0.22 }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "clamp(1.12rem, 1.4vw, 1.2rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-heading)", marginBottom: 12 }}>Recognition</p>
        <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--color-text-heading)", marginBottom: 20 }}>Honours &amp; Accolades</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <OrnDivider className="w-full" style={{ maxWidth: 360 } as React.CSSProperties} />
        </div>
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.9, color: "var(--color-text-primary)", marginTop: 16, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          Honored across the globe for bringing authentic Vedic sciences to modern life.
        </p>
      </div>

      {/* Awards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
        {AWARDS.map((a, i) => (
          <div
            key={a.title}
            className="group relative flex flex-col bg-white border border-[var(--color-accent-gold)]/30 rounded-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            style={{ animation: `fadeUp 0.7s ease ${i * 0.08}s both` }}
          >
            {/* Award Image Container */}
            <div className="relative w-full aspect-square overflow-hidden bg-[#2A1608]">
              {/* Blurred Background Layer to fill empty space dynamically */}
              <img 
                src={a.img} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-60 scale-110" 
                aria-hidden="true"
              />
              
              {/* Main Image Layer (Fully contained, no cropping) */}
              <img 
                src={a.img} 
                alt={a.title} 
                className="relative z-10 w-full h-full object-contain p-4 drop-shadow-xl transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Dark gradient overlay for richness */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D05]/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Year overlay */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[var(--color-accent-gold)] to-[#B38D54] text-white text-xs font-cinzel font-bold rounded shadow-lg z-20">
                {a.year}
              </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-white to-[#FDF9F3] border-t border-[var(--color-accent-gold)]/10">
              <h3 className="font-cinzel font-bold text-lg text-[var(--color-text-heading)] leading-snug group-hover:text-[var(--color-accent-gold)] transition-colors duration-300">
                {a.title}
              </h3>
              
              {/* Ornamental line */}
              <div className="w-12 h-[2px] bg-[var(--color-accent-gold)] mt-4 opacity-50 group-hover:w-24 group-hover:opacity-100 transition-all duration-500" />
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
            fontSize: "clamp(1.15rem, 1.2vw, 1.2rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            background: "var(--color-accent-gold)",
            padding: "16px 36px",
            border: "1.5px solid var(--color-accent-gold)",
            borderRadius: 999,
            display: "inline-block",
            transition: "all 0.25s",
            boxShadow: "0 6px 20px rgba(var(--color-accent-gold-rgb), 0.25)",
          }}
          onMouseEnter={e => { 
            e.currentTarget.style.background = "var(--color-accent-light)"; 
            e.currentTarget.style.borderColor = "var(--color-accent-light)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(var(--color-accent-gold-rgb), 0.35)";
          }}
          onMouseLeave={e => { 
            e.currentTarget.style.background = "var(--color-accent-gold)"; 
            e.currentTarget.style.borderColor = "var(--color-accent-gold)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(var(--color-accent-gold-rgb), 0.25)";
          }}
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
