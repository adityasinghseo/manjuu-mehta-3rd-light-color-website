import img1 from "@/assets/WhatsApp Image 2026-04-30 at 1.17.02 PM.jpeg";
import img2 from "@/assets/WhatsApp Image 2026-04-30 at 1.13.50 PM (6).jpeg";
import img3 from "@/assets/WhatsApp Image 2026-05-29 at 7.00.09 PM (1).jpeg";

const FeaturedRecognitions = () => {
  return (
    <section className="py-20 relative bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-poppins font-semibold text-[13px] tracking-[0.18em] uppercase text-[#8E6D3D] mb-3">
            Honoured For Excellence
          </p>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-[#8E6D3D]">
            Featured Recognitions
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
          {[img1, img2, img3].map((src, i) => (
            <div 
              key={i} 
              className="group relative w-full aspect-[4/5] max-w-[360px] mx-auto transition-all duration-700 hover:-translate-y-2 rounded-2xl overflow-hidden shadow-xl shadow-[#3A2010]/10 border border-[#8E6D3D]/20"
            >
              {/* Elegant Gold Glow Behind Image */}
              <div className="absolute inset-0 bg-[#8E6D3D] blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 z-0" />
              
              <img 
                src={src} 
                alt={`Featured Recognition ${i + 1}`}
                className="relative w-full h-full object-cover object-top z-10 transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Subtle gold accent line at the bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-transparent via-[#8E6D3D] to-transparent group-hover:w-full transition-all duration-700 z-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecognitions;
