import { Link } from "react-router-dom";
import { OrnDivider } from "./SiteNav";

const Consult = () => (
  <section
    id="consult"
    style={{
      padding: "128px 0",
      background: "linear-gradient(135deg, #7B1034 0%, #4A081F 100%)",
      borderTop: "1px solid rgba(197, 146, 42, 0.32)",
      borderBottom: "1px solid rgba(197, 146, 42, 0.20)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Large Central Glowing Halo Background (Gold & Cream highlights) */}
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 540,
      height: 540,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(197,146,42,0.22) 0%, rgba(255,255,255,0.03) 45%, transparent 70%)",
      filter: "blur(64px)",
      pointerEvents: "none",
      zIndex: 0,
      animation: "glow 6s ease-in-out infinite",
    }} />

    {/* Center Spinning Mandala Watermark (Styled in Gold against Maroon) */}
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: 520,
      aspectRatio: "1",
      opacity: 0.05,
      pointerEvents: "none",
      zIndex: 0,
      animation: "spinSlow 100s linear infinite",
    }}>
      <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.5">
        <circle cx="50" cy="50" r="48" />
        <circle cx="50" cy="50" r="38" strokeDasharray="2 2" />
        <polygon points="50,5 95,50 50,95 5,50" />
        <polygon points="50,5 95,50 50,95 5,50" transform="rotate(30 50 50)" />
        <polygon points="50,5 95,50 50,95 5,50" transform="rotate(60 50 50)" />
      </svg>
    </div>

    {/* Subtle sparkle field */}
    <div className="sparkle-field" style={{ opacity: 0.22 }} />

    <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 32px", textAlign: "center", position: "relative", zIndex: 1 }}>

      {/* Decorative Thinned Top Scroll */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <svg width="90" height="20" viewBox="0 0 160 36" fill="none">
          <path d="M10 18C42 18 58 6 80 18C88 24 90 24 80 18C102 6 118 18 150 18" stroke="#C5922A" strokeWidth="1.5" strokeLinecap="round" opacity="0.85"/>
          <circle cx="80" cy="18" r="4" fill="#C5922A" opacity="0.95"/>
          <circle cx="62" cy="18" r="2.2" fill="#C5922A" opacity="0.70"/>
          <circle cx="98" cy="18" r="2.2" fill="#C5922A" opacity="0.70"/>
        </svg>
      </div>

      {/* Pre-Title in Radiant Gold */}
      <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C5922A", marginBottom: 16 }}>
        Book Your Personalized Consultation Today
      </p>

      {/* Cinematic Headline in Cream */}
      <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)", color: "#FAF0E4", lineHeight: 1.15, marginBottom: 24 }}>
        Step Into Your Divine Alignment
      </h2>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
        <OrnDivider className="w-full" style={{ maxWidth: 440 } as React.CSSProperties} />
      </div>

      {/* Emotionally Compelling Bio Call in soft Cream/Rose */}
      <p style={{
        fontFamily: "Cormorant Garamond, serif",
        fontStyle: "italic",
        fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
        lineHeight: 1.85,
        color: "rgba(250, 240, 228, 0.85)",
        maxWidth: 620,
        margin: "0 auto 44px",
        fontWeight: 500,
      }}>
        "Step into a life of effortless abundance, deep clarity, and peace. Through a private cosmic reading, we will unlock your personalized roadmap to success, health, and harmonious growth."
      </p>

      {/* Double CTA Buttons with High Contrast Hierarchy */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 18 }}>
        
        {/* Primary Consultation Button - Glowing Gold Gradient */}
        <Link
          to="/contact"
          id="consult-book-cta"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            fontSize: 10.5,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "#7B1034",
            background: "linear-gradient(135deg, #FDF6EE 0%, #C5922A 100%)",
            padding: "16px 38px",
            borderRadius: 999,
            border: "1px solid #C5922A",
            boxShadow: "0 12px 32px -12px rgba(197, 146, 42, 0.50)",
            display: "inline-block",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 16px 40px -8px rgba(197, 146, 42, 0.65), 0 0 16px rgba(255, 255, 255, 0.22)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 12px 32px -12px rgba(197, 146, 42, 0.50)";
          }}
        >
          Book a Consultation
        </Link>

        {/* Secondary WhatsApp Button - Translucent Glass */}
        <a
          href="https://wa.me/919820954254"
          target="_blank"
          rel="noopener noreferrer"
          id="consult-whatsapp-cta"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            fontSize: 10.5,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "#FAF0E4",
            background: "rgba(255, 255, 255, 0.08)",
            padding: "15px 36px",
            borderRadius: 999,
            border: "1.5px solid rgba(197, 146, 42, 0.65)",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            boxShadow: "0 10px 24px -10px rgba(0,0,0,0.20)",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#FAF0E4";
            e.currentTarget.style.color = "#7B1034";
            e.currentTarget.style.borderColor = "#FAF0E4";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 14px 32px -12px rgba(255, 255, 255, 0.25)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.color = "#FAF0E4";
            e.currentTarget.style.borderColor = "rgba(197, 146, 42, 0.65)";
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 10px 24px -10px rgba(0,0,0,0.20)";
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Connect on WhatsApp
        </a>
      </div>

      {/* Response priority note in soft gold */}
      <p style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "rgba(234, 210, 149, 0.82)",
        marginTop: 22,
      }}>
        ✦ Priority Response within 2–4 Hours ✦
      </p>

    </div>
  </section>
);

export default Consult;

