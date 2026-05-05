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
import { X } from "lucide-react";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen pt-24">

      {/* ── Hero Banner ── */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full animate-glow-pulse opacity-20"
            style={{ background: "var(--gradient-aura)", filter: "blur(80px)" }} />
        </div>
        <div className="relative max-w-3xl mx-auto animate-rise">
          <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-4">Moments of Glory</p>
          <h1 className="font-display text-5xl md:text-7xl text-gold mb-6 leading-tight">Gallery</h1>
          <div className="mx-auto h-px w-32 bg-gradient-gold mb-8" />
          <p className="text-foreground/75 text-xl italic leading-relaxed max-w-2xl mx-auto">
            A glimpse into the awards, recognitions and moments that define Manjuu Mehta's journey.
          </p>
        </div>
      </section>

      {/* ── Image Grid ── */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl gold-border cursor-pointer hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              style={{ animation: `rise 0.6s ease-out ${idx * 0.06}s both` }}
              onClick={() => setLightbox(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-gold/0 group-hover:text-gold/90 font-display tracking-widest text-xs uppercase transition-all duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "transparent",
              border: "none",
              color: "hsl(42 88% 62%)",
              cursor: "pointer",
            }}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery full view"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-deep object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </main>
  );
};

export default GalleryPage;
