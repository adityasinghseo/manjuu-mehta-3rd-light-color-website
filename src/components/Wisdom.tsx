import yantra from "@/assets/yantra.png";
import { Link } from "react-router-dom";
import { OrnDivider } from "./SiteNav";

const Wisdom = () => (
  <section
    id="wisdom"
    style={{
      padding: "116px 0",
      background: "linear-gradient(155deg, #FFFFFF 0%, #FAF6F0 50%, #F2ECE2 100%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Background Watermark Mandala */}
    <div style={{
      position: "absolute",
      top: "-10%",
      right: "-10%",
      width: "45%",
      maxWidth: 450,
      aspectRatio: "1",
      opacity: 0.012,
      pointerEvents: "none",
      zIndex: 0,
    }}>
      <svg viewBox="0 0 100 100" fill="none" stroke="#8E6D3D" strokeWidth="0.5">
        <circle cx="50" cy="50" r="48" />
        <polygon points="50,2 98,50 50,98 2,50" transform="rotate(15 50 50)" />
      </svg>
    </div>

    {/* Subtle sparkle field */}
    <div className="sparkle-field" style={{ opacity: 0.28 }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr", gap: 72, alignItems: "center", position: "relative", zIndex: 1 }} className="wisdom-grid">
      
      {/* LEFT: Sized-up Yantra with soft radial halo and gentle floating */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        animation: "floatSlow 8s ease-in-out infinite",
      }} className="wisdom-yantra-col">
        {/* Soft radial glow halo */}
        <div style={{
          position: "absolute",
          inset: -40,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(142,109,61,0.18) 0%, rgba(142,109,61,0.06) 45%, transparent 70%)",
          filter: "blur(48px)",
          pointerEvents: "none",
          zIndex: 0,
        }} />
        
        {/* Outer rotating Yantra (Upscaled to 410px) */}
        <img
          src={yantra}
          alt="Sri Yantra sacred geometry"
          style={{
            width: "100%",
            maxWidth: 410,
            position: "relative",
            zIndex: 1,
            animation: "spinSlow 90s linear infinite",
            opacity: 0.90,
            filter: "drop-shadow(0 12px 32px rgba(142,109,61,0.14))",
          }}
          loading="lazy"
        />
        
        {/* Inner counter-rotating Yantra (Upscaled to 270px) */}
        <img
          src={yantra}
          alt=""
          aria-hidden
          style={{
            width: "66%",
            maxWidth: 270,
            position: "absolute",
            inset: 0,
            margin: "auto",
            zIndex: 2,
            animation: "spinRev 110s linear infinite",
            opacity: 0.55,
            mixBlendMode: "multiply",
          }}
          loading="lazy"
        />
      </div>

      {/* RIGHT: Text & Spaced Premium CTA */}
      <div style={{ animation: "fadeUp 0.9s ease both" }} className="wisdom-text-col">
        <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.12rem, 1.4vw, 1.2rem)", letterSpacing: "0.26em", textTransform: "uppercase", color: "#8E6D3D", marginBottom: 12 }}>
          Cosmic Wisdom
        </p>
        <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "clamp(2.5rem, 4.5vw, 3.4rem)", color: "#8E6D3D", lineHeight: 1.18, marginBottom: 20 }}>
          The Stars Whisper,<br />the Wise Listen.
        </h2>
        <div style={{ marginBottom: 24 }}>
          <OrnDivider className="w-full" style={{ maxWidth: 420 } as React.CSSProperties} />
        </div>



        {/* High-Contrast body paragraph */}
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", lineHeight: 1.9, color: "#28160A", marginBottom: 44, maxWidth: 580 }}>
          For five thousand years, the Rishis have read the language of light. Through Vedic Jyotisha, the ancient seers mapped karma, dharma, and destiny across the wheel of stars—a living science of self, time, and the divine.
        </p>

        {/* Repositioned Premium CTA with Soft, Deep Shadow */}
        <Link
          to="/contact"
          id="wisdom-cta"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            fontSize: "clamp(1.15rem, 1.2vw, 1.2rem)",
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            background: "#88693D",
            padding: "16px 36px",
            borderRadius: 999,
            border: "1px solid rgba(142, 109, 61, 0.22)",
            boxShadow: "0 12px 32px -12px rgba(68, 65, 54, 0.40)",
            display: "inline-block",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 16px 40px -10px rgba(68, 65, 54, 0.50), 0 0 12px rgba(142, 109, 61, 0.12)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 12px 32px -12px rgba(68, 65, 54, 0.40)";
          }}
        >
          Begin Your Reading
        </Link>
      </div>
    </div>

    {/* Responsive Media Queries */}
    <style>{`
      @media (min-width: 1024px) {
        .wisdom-grid { grid-template-columns: 5fr 7fr !important; gap: 76px !important; }
      }
      @media (max-width: 768px) {
        .wisdom-grid { gap: 48px !important; }
        .wisdom-text-col { align-items: center !important; text-align: center !important; }
        .wisdom-yantra-col { max-width: 320px !important; margin: 0 auto !important; }
      }
    `}</style>
  </section>
);

export default Wisdom;

