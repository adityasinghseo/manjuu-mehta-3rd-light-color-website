import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { OrnDivider } from "./SiteNav";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Delhi, India",
    role: "Business Owner",
    rating: 5,
    init: "PS",
    text: "Manjuu ji's Vastu consultation completely transformed my boutique. Within three months of implementing her recommendations, my revenue doubled. Her insights are precise, practical, and deeply rooted in authentic Vedic sciences.",
  },
  {
    name: "Rajesh Agarwal",
    location: "Mumbai, India",
    role: "IT Professional",
    rating: 5,
    init: "RA",
    text: "I was highly skeptical about astrology until my session with Manjuu ji. Her birth chart analysis was so detailed and accurate that it gave me chills. She predicted my major career pivot to the exact month—and it transpired perfectly.",
  },
  {
    name: "Sunita Kapoor",
    location: "London, UK",
    role: "Homemaker",
    rating: 5,
    init: "SK",
    text: "After years of constant disharmony, Manjuu ji's numerology reading brought peace back to our home. Her name correction guidelines and simple directional placement remedies made a profound, visible shift within a few weeks.",
  },
  {
    name: "Vikram Mehrotra",
    location: "Chandigarh, India",
    role: "Entrepreneur",
    rating: 5,
    init: "VM",
    text: "The business Vastu audit Manjuu ji performed for our manufacturing facility was a complete game-changer. She identified key energetic blockages stalling our growth. Her custom remedies are incredibly practical and highly potent.",
  },
  {
    name: "Ananya Joshi",
    location: "California, USA",
    role: "Software Director",
    rating: 5,
    init: "AJ",
    text: "I reached out for relational alignment and compatibility guidance. Manjuu ji's compassionate analysis helped us understand our relationship dynamics at a soul level. She is an exceptionally gifted cosmic guide.",
  },
];

const Testimonials = () => {
  const [cur, setCur] = useState(0);
  const prev = () => setCur((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCur((c) => (c + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[cur];

  return (
    <section
      id="testimonials"
      style={{
        padding: "116px 0",
        background: "linear-gradient(180deg, #FAF0E4 0%, #F5E6D2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Watermark Mandala */}
      <div style={{
        position: "absolute",
        top: "-15%",
        left: "-10%",
        width: "50%",
        maxWidth: 500,
        aspectRatio: "1",
        opacity: 0.012,
        pointerEvents: "none",
        zIndex: 0,
      }}>
        <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="38" strokeDasharray="3 3" />
          <polygon points="50,2 98,50 50,98 2,50" />
        </svg>
      </div>

      {/* Subtle sparkle field */}
      <div className="sparkle-field" style={{ opacity: 0.32 }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 64px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "#C5922A", marginBottom: 12 }}>
            Voices of Trust
          </p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", color: "#7B1034", marginBottom: 20 }}>
            Client Testimonials
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <OrnDivider className="w-full" style={{ maxWidth: 420 } as React.CSSProperties} />
          </div>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: 18, color: "rgba(58,32,16,0.72)", marginTop: 16 }}>
            Real stories of prosperity, alignment, and life-changing growth.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div style={{ position: "relative", padding: "0 20px" }}>
          
          {/* Main Card with key to trigger CSS transition */}
          <div
            key={cur}
            style={{
              position: "relative",
              padding: "56px 64px 48px",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(253, 246, 238, 0.68) 100%)",
              border: "1px solid rgba(197, 146, 42, 0.18)",
              borderRadius: 24,
              boxShadow: "0 24px 60px -16px rgba(91, 10, 36, 0.08), 0 0 40px -10px rgba(197, 146, 42, 0.04)",
              backdropFilter: "blur(20px)",
              textAlign: "center",
              animation: "slideReveal 0.65s cubic-bezier(0.16, 1, 0.3, 1) both",
              overflow: "hidden",
            }}
            className="testimonial-card"
          >
            {/* Top gold line visual signature */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: "linear-gradient(90deg, #C5922A 0%, #FAF0E4 50%, #7B1034 100%)",
            }} />

            {/* Giant decorative quotation backgrounds */}
            <div style={{
              position: "absolute",
              top: 24,
              left: 36,
              fontFamily: "Cinzel, serif",
              fontSize: 140,
              lineHeight: 1,
              fontWeight: 800,
              color: "#C5922A",
              opacity: 0.045,
              pointerEvents: "none",
              userSelect: "none",
            }}>
              “
            </div>
            <div style={{
              position: "absolute",
              bottom: -40,
              right: 36,
              fontFamily: "Cinzel, serif",
              fontSize: 140,
              lineHeight: 1,
              fontWeight: 800,
              color: "#C5922A",
              opacity: 0.045,
              pointerEvents: "none",
              userSelect: "none",
            }}>
              ”
            </div>

            {/* Google Verified Review Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(197, 146, 42, 0.08)",
              padding: "5px 14px",
              borderRadius: 999,
              border: "1px solid rgba(197, 146, 42, 0.20)",
              marginBottom: 20,
              position: "relative",
              zIndex: 2,
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.355-2.855-6.355-6.355S10.49 5.8 14 5.8c1.558 0 2.978.56 4.092 1.484l3.057-3.057C19.26 2.5 16.786 1.5 14 1.5 8.2 1.5 3.5 6.2 3.5 12s4.7 10.5 10.5 10.5c5.77 0 10.4-4.63 10.4-10.5 0-.7-.08-1.37-.215-2.015H12.24z" fill="#C5922A"/>
              </svg>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 9.5, fontWeight: 600, color: "#C5922A", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Google Verified Review
              </span>
            </div>

            {/* Star Rating Grid */}
            <div style={{ display: "flex", justifyContent: "center", gap: 5, marginBottom: 24, position: "relative", zIndex: 2 }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={17} fill="#C5922A" color="#C5922A" />
              ))}
            </div>

            {/* Testimonial Quote Text */}
            <blockquote style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
              fontSize: "clamp(1.15rem, 2.5vw, 1.48rem)",
              lineHeight: 1.88,
              color: "#3A2010",
              fontWeight: 500,
              marginBottom: 36,
              position: "relative",
              zIndex: 2,
              padding: "0 10px",
            }}>
              "{t.text}"
            </blockquote>

            {/* Luxury Star / Line Separation Ornament */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "center", marginBottom: 30, position: "relative", zIndex: 2 }}>
              <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, rgba(197,146,42,0.45))" }} />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#C5922A" opacity="0.8">
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6L12 2z" />
              </svg>
              <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, rgba(197,146,42,0.45), transparent)" }} />
            </div>

            {/* Author Profile */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, position: "relative", zIndex: 2 }}>
              {/* Premium Luxury Avatar Frame */}
              <div style={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7B1034 0%, #5B0A24 100%)",
                border: "2px solid #C5922A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Cinzel, serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#FAF0E4",
                boxShadow: "0 6px 18px rgba(91,10,36,0.22)",
                letterSpacing: "0.05em",
              }}>
                {t.init}
              </div>
              <div>
                <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.14em", color: "#7B1034", marginBottom: 3 }}>
                  {t.name}
                </p>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 9.5, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C5922A" }}>
                  {t.role} <span style={{ opacity: 0.4 }}>•</span> {t.location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {[
            { onClick: prev, dir: "left", label: "Previous", icon: <ChevronLeft size={22} strokeWidth={1.5} /> },
            { onClick: next, dir: "right", label: "Next", icon: <ChevronRight size={22} strokeWidth={1.5} /> },
          ].map((b) => (
            <button
              key={b.dir}
              onClick={b.onClick}
              aria-label={b.label}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                [b.dir]: b.dir === "left" ? "-8px" : "-8px",
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.90)",
                border: "1px solid rgba(197, 146, 42, 0.26)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#7B1034",
                cursor: "pointer",
                boxShadow: "0 6px 18px -4px rgba(91, 10, 36, 0.08)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: 10,
              }}
              className="hiw-slider-arrow"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#7B1034";
                e.currentTarget.style.color = "#FAF0E4";
                e.currentTarget.style.borderColor = "#7B1034";
                e.currentTarget.style.transform = `translateY(-50%) scale(1.06) ${b.dir === "left" ? "translateX(-2px)" : "translateX(2px)"}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.90)";
                e.currentTarget.style.color = "#7B1034";
                e.currentTarget.style.borderColor = "rgba(197, 146, 42, 0.26)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              {b.icon}
            </button>
          ))}
        </div>

        {/* Dynamic Navigation Indicator Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 40 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                borderRadius: 999,
                height: 6,
                width: i === cur ? 32 : 6,
                background: i === cur ? "#7B1034" : "rgba(123, 16, 52, 0.22)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Styled keyframe details */}
      <style>{`
        @keyframes slideReveal {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.982);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        
        @media (max-width: 768px) {
          .testimonial-card {
            padding: 44px 28px 36px !important;
          }
          .hiw-slider-arrow {
            display: none !important; /* Hide arrows on mobile to focus on swipe/dots */
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

