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
      className="testimonials-section"
      style={{
        background: "#F2E7D5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Elegant Sacred Geometry Mandala Watermark in Background */}
      <div style={{
        position: "absolute",
        top: "-10%",
        left: "-8%",
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
      <div className="sparkle-field" style={{ opacity: 0.32 }} />

      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "clamp(1.12rem, 1.4vw, 1.2rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-heading)", marginBottom: 14 }}>
            Voices of Trust
          </p>
          <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", color: "var(--color-text-heading)", marginBottom: 20, lineHeight: 1.2 }}>
            Client Testimonials
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <OrnDivider className="w-full" style={{ maxWidth: 420 } as React.CSSProperties} />
          </div>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)", color: "var(--color-text-primary)", marginTop: 18, lineHeight: 1.9 }}>
            Real stories of prosperity, alignment, and life-changing growth.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="testimonials-slider-wrapper">
          
          {/* Main Card with key to trigger CSS transition */}
          <div
            key={cur}
            style={{
              position: "relative",
              padding: "56px 64px 48px",
              background: "#2A1B0A",
              border: "1px solid rgba(var(--color-accent-gold-rgb), 0.35)",
              borderRadius: 24,
              boxShadow: "0 30px 70px -16px rgba(40, 22, 10, 0.40), 0 0 40px -10px rgba(var(--color-accent-gold-rgb), 0.12)",
              backdropFilter: "blur(20px)",
              textAlign: "left",
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
              background: "linear-gradient(90deg, #D5B875 0%, rgba(213, 184, 117, 0.2) 100%)",
            }} />

            {/* Giant decorative quotation backgrounds */}
            <div className="quote-mark-left" style={{ color: "#E8D5A3", opacity: 0.18 }}>“</div>
            <div className="quote-mark-right" style={{ color: "#E8D5A3", opacity: 0.08 }}>”</div>

            {/* Google Verified Review Badge */}
            <div className="badge-container" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255, 255, 255, 0.08)",
              padding: "5px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255, 255, 255, 0.15)",
              marginBottom: 16,
              position: "relative",
              zIndex: 2,
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.355-2.855-6.355-6.355S10.49 5.8 14 5.8c1.558 0 2.978.56 4.092 1.484l3.057-3.057C19.26 2.5 16.786 1.5 14 1.5 8.2 1.5 3.5 6.2 3.5 12s4.7 10.5 10.5 10.5c5.77 0 10.4-4.63 10.4-10.5 0-.7-.08-1.37-.215-2.015H12.24z" fill="#D5B875"/>
              </svg>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.65rem, 1vw, 0.75rem)", fontWeight: 600, color: "#E8D5A3", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Google Verified Review
              </span>
            </div>

            {/* Star Rating Grid */}
            <div className="stars-container" style={{ display: "flex", justifyContent: "flex-start", gap: 5, marginBottom: 20, position: "relative", zIndex: 2 }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={17} fill="#F4D06F" color="#F4D06F" />
              ))}
            </div>

            {/* Testimonial Quote Text */}
            <blockquote className="quote-text" style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(1.08rem, 1.5vw, 1.4rem)",
              lineHeight: 1.8,
              color: "#FFFFFF",
              fontWeight: 400,
              fontStyle: "italic",
              marginBottom: 28,
              position: "relative",
              zIndex: 2,
            }}>
              "{t.text}"
            </blockquote>

            {/* Left-aligned separation ornament */}
            <div className="divider-line" style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "flex-start", marginBottom: 28, position: "relative", zIndex: 2 }}>
              <div style={{ width: 60, height: 1.5, background: "linear-gradient(90deg, #D5B875, transparent)" }} />
            </div>

            {/* Author Profile */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <p className="author-name" style={{ 
                  fontFamily: "Cinzel, serif", 
                  fontWeight: 700, 
                  fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)", 
                  letterSpacing: "0.04em", 
                  color: "#E8D5A3", 
                  margin: 0,
                  lineHeight: 1.2
                }}>
                  {t.name}
                </p>
                <p className="author-role" style={{ 
                  fontFamily: "Poppins, sans-serif", 
                  fontSize: "clamp(0.8rem, 1.1vw, 0.88rem)", 
                  fontWeight: 600, 
                  letterSpacing: "0.08em", 
                  textTransform: "uppercase", 
                  color: "rgba(255, 255, 255, 0.76)", 
                  margin: 0,
                }}>
                  {t.role} <span style={{ opacity: 0.4, margin: "0 4px" }}>•</span> {t.location}
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
                border: "1px solid rgba(var(--color-accent-gold-rgb), 0.26)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-accent-gold)",
                cursor: "pointer",
                boxShadow: "0 6px 18px -4px rgba(var(--color-text-heading-rgb), 0.08)",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: 10,
              }}
              className="hiw-slider-arrow"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-accent-gold)";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.borderColor = "var(--color-accent-gold)";
                e.currentTarget.style.transform = `translateY(-50%) scale(1.06) ${b.dir === "left" ? "translateX(-2px)" : "translateX(2px)"}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.90)";
                e.currentTarget.style.color = "var(--color-accent-gold)";
                e.currentTarget.style.borderColor = "rgba(var(--color-accent-gold-rgb), 0.26)";
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
                background: i === cur ? "var(--color-accent-gold)" : "rgba(var(--color-accent-gold-rgb), 0.22)",
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
        
        .testimonials-section {
          padding: 116px 0;
        }
        
        .testimonials-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 64px;
          position: relative;
          z-index: 1;
        }
        
        .testimonials-header {
          text-align: center;
          margin-bottom: 56px;
        }
        
        .testimonials-slider-wrapper {
          position: relative;
          padding: 0 20px;
        }
        
        .quote-mark-left {
          position: absolute;
          top: 40px;
          left: 24px;
          font-family: 'Cinzel', serif;
          font-size: 90px;
          line-height: 1;
          font-weight: 800;
          color: var(--color-accent-gold);
          opacity: 0.12;
          pointer-events: none;
          user-select: none;
        }
        
        .quote-mark-right {
          position: absolute;
          bottom: -30px;
          right: 24px;
          font-family: 'Cinzel', serif;
          font-size: 120px;
          line-height: 1;
          font-weight: 800;
          color: var(--color-accent-gold);
          opacity: 0.04;
          pointer-events: none;
          user-select: none;
        }
        
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 48px 0 !important;
          }
          .testimonials-container {
            padding: 0 16px !important;
          }
          .testimonials-header {
            margin-bottom: 24px !important;
          }
          .testimonials-slider-wrapper {
            padding: 0 !important;
          }
          .testimonial-card {
            padding: 28px 20px 24px !important;
          }
          .hiw-slider-arrow {
            display: none !important; /* Hide arrows on mobile to focus on swipe/dots */
          }
          .quote-mark-left {
            top: 24px;
            left: 10px;
            font-size: 54px;
          }
          .quote-mark-right {
            bottom: -15px;
            right: 10px;
            font-size: 70px;
          }
          
          /* Inner elements adjustment for vertical space */
          .testimonial-card .badge-container {
            margin-bottom: 10px !important;
          }
          .testimonial-card .stars-container {
            margin-bottom: 12px !important;
          }
          .testimonial-card .quote-text {
            font-size: 1.05rem !important;
            line-height: 1.65 !important;
            margin-bottom: 16px !important;
          }
          .testimonial-card .divider-line {
            margin-bottom: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

