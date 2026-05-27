import img1 from "@/assets/WhatsApp Image 2026-04-30 at 1.13.50 PM (1).jpeg";
import img2 from "@/assets/WhatsApp Image 2026-04-30 at 1.13.50 PM (2).jpeg";
import img3 from "@/assets/WhatsApp Image 2026-04-30 at 1.13.50 PM (3).jpeg";
import img4 from "@/assets/WhatsApp Image 2026-04-30 at 1.13.50 PM (4).jpeg";
import img5 from "@/assets/WhatsApp Image 2026-04-30 at 1.13.50 PM (5).jpeg";
import img6 from "@/assets/WhatsApp Image 2026-04-30 at 1.13.50 PM (6).jpeg";
import img7 from "@/assets/WhatsApp Image 2026-04-30 at 1.13.50 PM (7).jpeg";
import img8 from "@/assets/WhatsApp Image 2026-04-30 at 1.13.50 PM.jpeg";
import img9 from "@/assets/WhatsApp Image 2026-04-30 at 1.17.02 PM.jpeg";
import img10 from "@/assets/WhatsApp Image 2026-04-30 at 2.17.04 PM.jpeg";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { OrnDivider } from "@/components/SiteNav";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen pt-24" style={{ background: "linear-gradient(180deg, #FAF0E4 0%, #F5E6D2 50%, #FAF0E4 100%)" }}>
      {/* Background Star Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-30 star-field" />

      {/* ── Hero Banner ── */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        {/* Background radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full opacity-20 animate-glow-pulse"
            style={{ background: "radial-gradient(circle, rgba(197,146,42,0.14) 0%, transparent 70%)", filter: "blur(80px)" }} />
        </div>

        {/* Faint spinning mandala watermark */}
        <div className="anim-spinrev" style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: "45%",
          maxWidth: 450,
          aspectRatio: "1",
          opacity: 0.02,
          pointerEvents: "none",
          zIndex: 0,
        }}>
          <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.6">
            <circle cx="50" cy="50" r="48" />
            <polygon points="50,2 98,50 50,98 2,50" />
          </svg>
        </div>

        <div className="relative max-w-3xl mx-auto anim-fadeup" style={{ zIndex: 1 }}>
          <p className="font-display tracking-[0.26em] text-[10px] font-bold uppercase mb-4" style={{ color: "#C5922A" }}>
            ✦ Moments of Honor ✦
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-cinzel" style={{ color: "#7B1034" }}>
            Prestige Gallery
          </h1>
          <OrnDivider style={{ margin: "0 auto 28px" } as React.CSSProperties} />
          <p className="text-foreground/75 text-xl font-garamond italic leading-relaxed max-w-2xl mx-auto">
            A visual testament to prestigious awards, public recognitions, and a decade of sacred guidance.
          </p>
        </div>
      </section>

      {/* ── Image Grid ── */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden cursor-pointer p-3 gallery-editorial-card transition-all duration-500"
              style={{
                background: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(197,146,42,0.18)",
                boxShadow: "0 6px 20px -8px rgba(91,10,36,0.06)",
                borderRadius: 20,
                animation: `fadeUp 0.8s ease ${idx * 0.06}s both`,
                aspectRatio: "4/3",
              }}
              onClick={() => setLightbox(src)}
            >
              {/* Horizontal Hover gold line */}
              <div className="card-top-line" style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%) scaleX(0)",
                width: "100%",
                height: 3,
                background: "var(--grad-gold)",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transformOrigin: "center",
              }} />

              {/* Inner picture container with offset borders */}
              <div className="w-full h-full rounded-[1.1rem] overflow-hidden bg-background relative"
                style={{ border: "1px solid rgba(123,16,52,0.12)" }}
              >
                <img
                  src={src}
                  alt={`Honor & Recognition ${idx + 1}`}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
                  className="gallery-main-img"
                />
                
                {/* Elegant Glassmorphic Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 transition-all duration-500 gallery-hover-overlay"
                  style={{
                    background: "rgba(123,16,52,0)",
                    backdropFilter: "blur(0px)",
                    WebkitBackdropFilter: "blur(0px)",
                    opacity: 0,
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#FDF6EE] border border-gold flex items-center justify-center text-primary transition-transform duration-500 scale-badge"
                    style={{ transform: "scale(0.85)" }}
                  >
                    <ZoomIn className="w-4 h-4" strokeWidth={1.5} style={{ color: "#7B1034" }} />
                  </div>
                  <span className="font-cinzel tracking-[0.20em] text-[10px] uppercase font-bold text-white text-glow">
                    Expand Honor
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6 animate-fade-in"
          style={{ background: "rgba(10, 5, 8, 0.95)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
          onClick={() => setLightbox(null)}
        >
          {/* Close button badge */}
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="lightbox-close-btn"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(197,146,42,0.40)",
              color: "#C5922A",
              cursor: "pointer",
              width: 44,
              height: 44,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
          >
            <X size={20} strokeWidth={1.5} />
          </button>
          
          {/* Framed Image Container */}
          <div 
            style={{
              padding: 8,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(197,146,42,0.30)",
              borderRadius: 24,
              boxShadow: "0 32px 72px -12px rgba(0,0,0,0.50)",
              maxWidth: "92vw",
              maxHeight: "85vh",
            }}
            onClick={(e) => e.stopPropagation()}
            className="animate-scale-in"
          >
            <img
              src={lightbox}
              alt="Gallery honor full view"
              style={{ display: "block", width: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: 16 }}
            />
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        .gallery-editorial-card:hover {
          transform: translateY(-5px);
          background: #ffffff !important;
          border-color: rgba(197, 146, 42, 0.48) !important;
          box-shadow: 0 20px 48px -12px rgba(91,10,36,0.12), 0 0 10px rgba(197,146,42,0.08) !important;
        }
        .gallery-editorial-card:hover .card-top-line {
          transform: translateX(-50%) scaleX(1);
        }
        .gallery-editorial-card:hover .gallery-main-img {
          transform: scale(1.05);
        }
        .gallery-editorial-card:hover .gallery-hover-overlay {
          background: rgba(123, 16, 52, 0.22) !important;
          backdrop-filter: blur(4px) !important;
          -webkit-backdrop-filter: blur(4px) !important;
          opacity: 1 !important;
        }
        .gallery-editorial-card:hover .scale-badge {
          transform: scale(1) !important;
        }
        .lightbox-close-btn:hover {
          background: #7B1034 !important;
          color: #FAF0E4 !important;
          border-color: #7B1034 !important;
          transform: rotate(90deg) scale(1.08);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-scale-in {
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        
        .text-glow {
          text-shadow: 0 2px 8px rgba(0,0,0,0.50);
        }
      `}</style>
    </main>
  );
};

export default GalleryPage;
