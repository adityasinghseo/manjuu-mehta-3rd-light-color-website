import { useState } from "react";
import { X } from "lucide-react";
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

const awards = [
  { year: "2025", title: "Jyotish Mahakumbh Award", note: "Presented by Hon'ble CM of Uttarakhand, Shri Pushkar Singh Dhami" },
  { year: "2025", title: "Nakshatra Alankar Award", note: "Honouring distinguished contribution to Vedic sciences" },
  { year: "2024", title: "Super Woman Award", note: "For Inspiring Women" },
  { year: "2024", title: "City Excellence Award", note: "By India News Index" },
  { year: "2024", title: "Bharat Good Times — Rising Excellence", note: "Recognising transformative impact" },
  { year: "2024", title: "Her Story Times Award", note: "Best Vastu Expert" },
  { year: "2023", title: "Sahika India International Award", note: "Best Numerologist" },
  { year: "—", title: "Forever Star India Award", note: "Best Astro Numerologist, Haridwar, Uttarakhand" },
];

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Awards = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="awards" className="relative py-32 px-6 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">Recognition</p>
          <h2 className="font-display text-4xl md:text-6xl text-gold">Honours & Accolades</h2>
          <div className="mx-auto h-px w-32 bg-gradient-gold mt-4" />
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg italic">
            Recognised across India for excellence in Vastu, Astrology and Karmic Numerology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className="group relative flex gap-6 p-6 rounded-2xl gold-border bg-card/40 backdrop-blur hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
              style={{ animation: `rise 0.7s ease-out ${i * 0.06}s both` }}
            >
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-full bg-gradient-gold text-primary-foreground font-display shadow-glow">
                <span className="text-2xl leading-none">★</span>
                <span className="text-[11px] tracking-widest mt-1">{a.year}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg text-gold leading-snug">{a.title}</h3>
                <p className="text-sm text-foreground/70 italic mt-2 leading-relaxed">{a.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
             <h3 className="font-display text-3xl md:text-4xl text-gold">Moments of Glory</h3>
             <div className="mx-auto h-px w-24 bg-gradient-gold mt-4" />
          </div>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-4">
             {galleryImages.map((src, idx) => (
                <div 
                  key={idx} 
                  className="relative group overflow-hidden rounded-xl gold-border hover:shadow-glow transition-all duration-300 cursor-pointer break-inside-avoid inline-block w-full mb-4"
                  onClick={() => setSelectedImg(src)}
                >
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <span className="text-primary-foreground font-display tracking-widest uppercase text-xs">View</span>
                  </div>
                  <img src={src} alt={`Award moment ${idx + 1}`} loading="lazy" className="w-full h-auto block group-hover:scale-110 transition-transform duration-500" />
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 animate-in fade-in duration-300 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[60] bg-black/50 p-2 rounded-full"
            onClick={() => setSelectedImg(null)}
            aria-label="Close fullscreen"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImg} 
            alt="Fullscreen award" 
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Awards;
