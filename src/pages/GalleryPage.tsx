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
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { OrnDivider } from "@/components/SiteNav";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const GalleryPage = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    setZoomed(false);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
    setZoomed(false);
    document.body.style.overflow = "";
  };

  const goPrev = useCallback(() => {
    if (lightboxIdx === null) return;
    setZoomed(false);
    setLightboxIdx((lightboxIdx - 1 + images.length) % images.length);
  }, [lightboxIdx]);

  const goNext = useCallback(() => {
    if (lightboxIdx === null) return;
    setZoomed(false);
    setLightboxIdx((lightboxIdx + 1) % images.length);
  }, [lightboxIdx]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, goPrev, goNext]);

  return (
    <main
      className="relative min-h-screen pt-24"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAF6F0 50%, #FFFFFF 100%)" }}
    >
      {/* Background Sparkle */}
      <div className="pointer-events-none absolute inset-0 opacity-25 star-field" />

      {/* ── Hero Banner ── */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        {/* Radial aura glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(142,109,61,0.16) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        {/* Spinning watermark mandala */}
        <div
          className="anim-spinrev"
          style={{
            position: "absolute",
            top: "-15%",
            right: "-10%",
            width: "42%",
            maxWidth: 420,
            aspectRatio: "1",
            opacity: 0.025,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="#8E6D3D" strokeWidth="0.6">
            <circle cx="50" cy="50" r="48" />
            <circle cx="50" cy="50" r="34" strokeDasharray="2 2" />
            <polygon points="50,2 98,50 50,98 2,50" />
            <polygon points="50,2 98,50 50,98 2,50" transform="rotate(45 50 50)" />
          </svg>
        </div>

        <div className="relative max-w-3xl mx-auto anim-fadeup" style={{ zIndex: 1 }}>
          <p
            className="font-cinzel tracking-[0.28em] text-[10px] font-bold uppercase mb-4"
            style={{ color: "#8E6D3D" }}
          >
            ✦ Moments of Honor ✦
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-cinzel"
            style={{ color: "#8E6D3D" }}
          >
            Prestige Gallery
          </h1>
          <OrnDivider style={{ margin: "0 auto 28px" } as React.CSSProperties} />
          <p
            className="text-foreground/80 text-[15.5px] font-poppins leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(58,32,16,0.80)" }}
          >
            A visual testament to prestigious awards, public recognitions, and a decade of
            sacred cosmic guidance.
          </p>
        </div>
      </section>

      {/* ── Masonry Gallery Grid ── */}
      <section className="px-4 md:px-8 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto gallery-masonry">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="gallery-masonry-item"
              style={{ animationDelay: `${idx * 0.07}s` }}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`View recognition image ${idx + 1}`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
            >
              {/* Gold expanding top line */}
              <div className="gallery-top-line" />

              {/* Image — full visible, no crop */}
              <div className="gallery-img-wrap">
                <img
                  src={src}
                  alt={`Award & Recognition ${idx + 1}`}
                  loading="lazy"
                  className="gallery-img"
                />

                {/* Hover overlay */}
                <div className="gallery-overlay">
                  <div className="gallery-overlay-icon">
                    <ZoomIn size={18} strokeWidth={1.5} style={{ color: "#8E6D3D" }} />
                  </div>
                  <span className="gallery-overlay-label">View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Premium Lightbox ── */}
      {lightboxIdx !== null && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            className="lightbox-btn lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          {/* Counter */}
          <div className="lightbox-counter">
            <span className="font-cinzel" style={{ color: "#8E6D3D", fontSize: "clamp(0.85rem, 1.2vw, 1rem)", letterSpacing: "0.2em" }}>
              {String(lightboxIdx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>

          {/* Zoom toggle */}
          <button
            className="lightbox-btn lightbox-zoom"
            onClick={(e) => { e.stopPropagation(); setZoomed((z) => !z); }}
            aria-label={zoomed ? "Zoom out" : "Zoom in"}
          >
            {zoomed ? <ZoomOut size={18} strokeWidth={1.5} /> : <ZoomIn size={18} strokeWidth={1.5} />}
          </button>

          {/* Prev */}
          <button
            className="lightbox-btn lightbox-prev"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          {/* Image frame */}
          <div
            className={`lightbox-frame ${zoomed ? "zoomed" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightboxIdx}
              src={images[lightboxIdx]}
              alt={`Recognition ${lightboxIdx + 1}`}
              className="lightbox-img"
            />
            {/* Subtle caption */}
            <div className="lightbox-caption">
              <p
                className="font-cinzel uppercase"
                style={{ fontSize: 9, letterSpacing: "0.22em", color: "rgba(142,109,61,0.80)" }}
              >
                ✦ Award & Recognition ✦
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="lightbox-btn lightbox-next"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>

          {/* Thumbnail strip */}
          <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
            {images.map((src, i) => (
              <button
                key={i}
                className={`lightbox-thumb ${i === lightboxIdx ? "active" : ""}`}
                onClick={() => { setLightboxIdx(i); setZoomed(false); }}
                aria-label={`Go to image ${i + 1}`}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── All Styles ── */}
      <style>{`
        /* ══ MASONRY LAYOUT ══════════════════════════════════════ */
        .gallery-masonry {
          columns: 4;
          column-gap: 20px;
        }
        @media (max-width: 1100px) { .gallery-masonry { columns: 3; } }
        @media (max-width: 720px)  { .gallery-masonry { columns: 2; column-gap: 14px; } }
        @media (max-width: 480px)  { .gallery-masonry { columns: 1; } }

        /* ══ MASONRY ITEM ════════════════════════════════════════ */
        .gallery-masonry-item {
          break-inside: avoid;
          margin-bottom: 20px;
          display: block;
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          background: rgba(255,255,255,0.80);
          border: 1px solid rgba(142,109,61,0.18);
          box-shadow: 0 6px 22px -8px rgba(68,65,54,0.08);
          cursor: pointer;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.45s cubic-bezier(0.16,1,0.3,1),
                      border-color 0.3s ease;
          animation: fadeUp 0.8s ease both;
        }
        @media (max-width: 720px) {
          .gallery-masonry-item { margin-bottom: 14px; border-radius: 14px; }
        }
        .gallery-masonry-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 52px -12px rgba(68,65,54,0.16),
                      0 0 16px rgba(142,109,61,0.12);
          border-color: rgba(142,109,61,0.50);
          background: #ffffff;
        }
        .gallery-masonry-item:focus-visible {
          outline: 2px solid #8E6D3D;
          outline-offset: 3px;
        }

        /* ══ GOLD TOP LINE (hover expand) ════════════════════════ */
        .gallery-top-line {
          position: absolute;
          top: 0; left: 50%;
          width: 100%; height: 3px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          background: linear-gradient(90deg, #A58352, #8E6D3D, #70542C);
          border-radius: 0 0 3px 3px;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
          z-index: 2;
        }
        .gallery-masonry-item:hover .gallery-top-line {
          transform: translateX(-50%) scaleX(1);
        }

        /* ══ IMAGE WRAPPER — no forced crop ═════════════════════ */
        .gallery-img-wrap {
          position: relative;
          width: 100%;
          padding: 8px;         /* minimal, elegant padding */
          box-sizing: border-box;
        }

        /* ══ IMAGE — full visibility, no cropping ════════════════ */
        .gallery-img {
          display: block;
          width: 100%;
          height: auto;          /* natural height — no forced aspect ratio */
          object-fit: contain;   /* NEVER crop */
          border-radius: 12px;
          background: #FFFFFF;   /* cream bg for transparent/portrait images */
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1),
                      filter 0.4s ease;
          filter: brightness(1) saturate(1);
        }
        .gallery-masonry-item:hover .gallery-img {
          transform: scale(1.03);
          filter: brightness(1.02) saturate(1.05);
        }

        /* ══ HOVER OVERLAY ═══════════════════════════════════════ */
        .gallery-overlay {
          position: absolute;
          inset: 8px;
          border-radius: 12px;
          background: rgba(142,109,61,0);
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          opacity: 0;
          transition: all 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .gallery-masonry-item:hover .gallery-overlay {
          background: rgba(142,109,61,0.18);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          opacity: 1;
        }
        .gallery-overlay-icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: rgba(253,246,238,0.92);
          border: 1px solid rgba(142,109,61,0.35);
          display: flex; align-items: center; justify-content: center;
          transform: scale(0.8);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .gallery-masonry-item:hover .gallery-overlay-icon {
          transform: scale(1);
        }
        .gallery-overlay-label {
          font-family: 'Cinzel', serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #FFFFFF;
          text-shadow: 0 2px 8px rgba(0,0,0,0.55);
          opacity: 0;
          transform: translateY(4px);
          transition: all 0.4s ease 0.05s;
        }
        .gallery-masonry-item:hover .gallery-overlay-label {
          opacity: 1;
          transform: translateY(0);
        }

        /* ══ LIGHTBOX BACKDROP ═══════════════════════════════════ */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(8, 4, 6, 0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: lbFadeIn 0.35s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ══ LIGHTBOX CONTROL BUTTONS ════════════════════════════ */
        .lightbox-btn {
          position: absolute;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(142,109,61,0.35);
          background: rgba(255,255,255,0.07);
          color: #8E6D3D;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          backdrop-filter: blur(6px);
        }
        .lightbox-btn:hover {
          background: #8E6D3D;
          border-color: #8E6D3D;
          color: #FFFFFF;
          transform: scale(1.08);
        }
        .lightbox-close {
          top: 20px; right: 20px;
          width: 44px; height: 44px;
        }
        .lightbox-close:hover {
          transform: rotate(90deg) scale(1.08);
        }
        .lightbox-zoom {
          top: 20px; right: 76px;
          width: 44px; height: 44px;
        }
        .lightbox-prev {
          left: 16px; top: 50%;
          transform: translateY(-50%);
          width: 52px; height: 52px;
        }
        .lightbox-prev:hover {
          transform: translateY(-50%) scale(1.08);
        }
        .lightbox-next {
          right: 16px; top: 50%;
          transform: translateY(-50%);
          width: 52px; height: 52px;
        }
        .lightbox-next:hover {
          transform: translateY(-50%) scale(1.08);
        }
        @media (max-width: 640px) {
          .lightbox-prev { left: 6px; width: 40px; height: 40px; }
          .lightbox-next { right: 6px; width: 40px; height: 40px; }
        }

        /* ══ COUNTER ═════════════════════════════════════════════ */
        .lightbox-counter {
          position: absolute;
          top: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          padding: 5px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(142,109,61,0.22);
          backdrop-filter: blur(6px);
        }

        /* ══ IMAGE FRAME ═════════════════════════════════════════ */
        .lightbox-frame {
          position: relative;
          max-width: min(88vw, 860px);
          max-height: 80vh;
          padding: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(142,109,61,0.28);
          border-radius: 24px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.55),
                      0 0 0 1px rgba(142,109,61,0.10);
          animation: lbScaleIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
          transition: max-width 0.5s cubic-bezier(0.16,1,0.3,1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .lightbox-frame.zoomed {
          max-width: min(96vw, 1100px);
          max-height: 90vh;
        }
        @keyframes lbScaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* ══ LIGHTBOX IMAGE ══════════════════════════════════════ */
        .lightbox-img {
          display: block;
          max-width: 100%;
          max-height: calc(80vh - 60px);
          width: auto;
          height: auto;
          object-fit: contain;   /* full image always visible */
          border-radius: 16px;
          background: #1a0a10;
          animation: lbScaleIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .lightbox-frame.zoomed .lightbox-img {
          max-height: calc(90vh - 60px);
        }

        /* ══ CAPTION ═════════════════════════════════════════════ */
        .lightbox-caption {
          text-align: center;
          padding: 10px 0 2px;
        }

        /* ══ THUMBNAIL STRIP ════════════════════════════════════ */
        .lightbox-thumbs {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(142,109,61,0.18);
          border-radius: 999px;
          backdrop-filter: blur(10px);
          z-index: 10;
          overflow-x: auto;
          max-width: 90vw;
          scrollbar-width: none;
        }
        .lightbox-thumbs::-webkit-scrollbar { display: none; }

        .lightbox-thumb {
          flex-shrink: 0;
          width: 44px;
          height: 32px;
          border-radius: 8px;
          overflow: hidden;
          border: 1.5px solid rgba(142,109,61,0.20);
          background: rgba(255,255,255,0.08);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .lightbox-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0.55;
          transition: opacity 0.3s ease;
        }
        .lightbox-thumb:hover img,
        .lightbox-thumb.active img {
          opacity: 1;
        }
        .lightbox-thumb.active {
          border-color: #8E6D3D;
          box-shadow: 0 0 0 2px rgba(142,109,61,0.35);
          transform: scale(1.08);
        }

        @media (max-width: 480px) {
          .lightbox-thumbs { display: none; }
          .lightbox-frame {
            max-width: 96vw;
            padding: 6px;
            border-radius: 16px;
          }
          .lightbox-img { border-radius: 10px; }
        }
      `}</style>
    </main>
  );
};

export default GalleryPage;
