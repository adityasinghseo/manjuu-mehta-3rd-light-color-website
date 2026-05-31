const rashis = [
  { name: "Mesha", en: "Aries", sym: "♈", deva: "मेष", element: "Fire" },
  { name: "Vrishabha", en: "Taurus", sym: "♉", deva: "वृषभ", element: "Earth" },
  { name: "Mithuna", en: "Gemini", sym: "♊", deva: "मिथुन", element: "Air" },
  { name: "Karka", en: "Cancer", sym: "♋", deva: "कर्क", element: "Water" },
  { name: "Simha", en: "Leo", sym: "♌", deva: "सिंह", element: "Fire" },
  { name: "Kanya", en: "Virgo", sym: "♍", deva: "कन्या", element: "Earth" },
  { name: "Tula", en: "Libra", sym: "♎", deva: "तुला", element: "Air" },
  { name: "Vrishchika", en: "Scorpio", sym: "♏", deva: "वृश्चिक", element: "Water" },
  { name: "Dhanu", en: "Sagittarius", sym: "♐", deva: "धनु", element: "Fire" },
  { name: "Makara", en: "Capricorn", sym: "♑", deva: "मकर", element: "Earth" },
  { name: "Kumbha", en: "Aquarius", sym: "♒", deva: "कुम्भ", element: "Air" },
  { name: "Meena", en: "Pisces", sym: "♓", deva: "मीन", element: "Water" },
];

const Rashis = () => (
  <section id="rashis" className="relative py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="font-sanskrit text-primary/70 text-xl mb-3">द्वादश राशयः</p>
        <h2 className="font-display text-4xl md:text-6xl text-gold mb-4">The Twelve Rashis</h2>
        <div className="mx-auto h-px w-32 bg-gradient-gold" />
        <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg">
          Each soul is born under a celestial sign — a sacred imprint of the moon's path among the stars.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rashis.map((r, i) => (
          <div
            key={r.name}
            className="group relative p-8 rounded-2xl gold-border bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            style={{ animation: `rise 0.8s cubic-bezier(.2,.7,.2,1) ${i * 0.05}s both` }}
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
            <div className="relative">
              <div className="text-6xl text-gold mb-4 font-display group-hover:scale-110 transition-transform duration-500 inline-block">
                {r.sym}
              </div>
              <p className="font-sanskrit text-2xl text-primary/90">{r.deva}</p>
              <h3 className="font-display text-xl mt-2 text-foreground">{r.name}</h3>
              <p className="text-base text-muted-foreground">{r.en}</p>
              <div className="mt-4 inline-block px-3 py-1 rounded-full text-sm md:text-base tracking-widest font-display uppercase border border-primary/30 text-primary/80">
                {r.element}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Rashis;
