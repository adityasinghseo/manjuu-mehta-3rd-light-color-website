import img1 from "@/assets/WhatsApp Image 2026-04-30 at 1.17.02 PM.jpeg";
import img3 from "@/assets/WhatsApp Image 2026-05-29 at 7.00.09 PM (1).jpeg";

const images = [
  {
    src: img1,
    alt: "CM Uttarakhand Pushkar Singh Dhami ji and Pujya Swami Chidanand Saraswati ji with Manjuu Mehta",
    title: "C M Uttarakhand Pushkar Singh Dhami ji and Pujya Swami Chidanand Saraswati ji",
  },
  {
    src: img3,
    alt: "Recognised at Spiritual Kumbh by Param Pujya Gurudev",
    title: "Recognised at Spiritual Kumbh by परम पूज्य गुरुदेव अनंत श्री विभूषित श्री श्री 1008 महामंडलेश्वर डॉ. राजेश्वर दास जी महाराज",
  },
];

const FeaturedRecognitions = () => {
  return (
    <section className="py-20 relative" style={{ backgroundColor: "#F7F0E4" }}>
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

      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-poppins font-semibold text-[13px] tracking-[0.18em] uppercase text-[var(--color-accent-gold)] mb-3">
            Honoured For Excellence
          </p>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-[var(--color-text-heading)]">
            Featured Recognitions
          </h2>
        </div>

        {/* Two-image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {images.map(({ src, alt, title }, i) => (
            <div key={i} className="flex flex-col items-center group">

              {/* Image card */}
              <div className="relative w-full aspect-[4/5] max-w-[440px] mx-auto rounded-2xl overflow-hidden shadow-xl shadow-[var(--color-text-heading)]/10 border border-[var(--color-accent-gold)]/20 transition-all duration-700 hover:-translate-y-2">
                {/* Gold hover glow */}
                <div className="absolute inset-0 bg-[var(--color-accent-gold)] blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 z-0" />

                <img
                  src={src}
                  alt={alt}
                  className="relative w-full h-full object-cover object-top z-10 transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Gold accent line on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent group-hover:w-full transition-all duration-700 z-20" />
              </div>

              {/* Caption */}
              <div
                style={{
                  marginTop: 16,
                  maxWidth: 440,
                  width: "100%",
                  minHeight: 130,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "20px 22px 20px 26px",
                  background: "#FFFFFF",
                  borderLeft: "4px solid #8A6200",
                  borderRadius: "0 12px 12px 0",
                  boxShadow: "0 4px 18px -4px rgba(61,43,0,0.09)",
                }}
              >
                {/* Small gold label */}
                <p style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  color: "#8A6200",
                  marginBottom: 8,
                }}>
                  ✦ Recognition
                </p>

                {/* Main title */}
                <p style={{
                  fontFamily: "Cinzel, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
                  lineHeight: 1.7,
                  color: "var(--color-text-heading)",
                  letterSpacing: "0.01em",
                }}>
                  {title}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedRecognitions;
