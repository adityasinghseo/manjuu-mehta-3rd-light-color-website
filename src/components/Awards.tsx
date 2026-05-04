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

const Awards = () => (
  <section id="awards" className="relative py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <p className="font-sanskrit text-primary/70 text-xl mb-3">सम्मान</p>
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
    </div>
  </section>
);

export default Awards;
