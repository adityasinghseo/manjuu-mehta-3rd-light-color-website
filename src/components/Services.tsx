const services = [
  {
    deva: "जन्म कुण्डली",
    title: "Janma Kundli",
    desc: "A precise birth chart revealing the celestial alignment at the moment of your soul's arrival.",
  },
  {
    deva: "विवाह मिलन",
    title: "Kundli Milan",
    desc: "Ashta-Koota matchmaking to harmonize two souls through the eight sacred compatibilities.",
  },
  {
    deva: "महादशा",
    title: "Mahadasha Reading",
    desc: "Decode the planetary periods that govern the chapters of your unfolding life journey.",
  },
  {
    deva: "मुहूर्त",
    title: "Muhurta Selection",
    desc: "Auspicious timings chosen with Vedic precision for ceremonies, ventures and beginnings.",
  },
  {
    deva: "रत्न परामर्श",
    title: "Gemstone Counsel",
    desc: "Sacred stones aligned with your planetary lords to amplify benefic cosmic energies.",
  },
  {
    deva: "वास्तु शास्त्र",
    title: "Vastu Shastra",
    desc: "Harmonize your dwelling with the five elements and the eight directional deities.",
  },
];

const Services = () => (
  <section id="services" className="relative py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="font-sanskrit text-primary/70 text-xl mb-3">सेवाएं</p>
        <h2 className="font-display text-4xl md:text-6xl text-gold">Sacred Services</h2>
        <div className="mx-auto h-px w-32 bg-gradient-gold mt-4" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="group relative p-10 rounded-2xl bg-card/40 backdrop-blur gold-border overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            style={{ animation: `rise 0.8s ease-out ${i * 0.1}s both` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <p className="font-sanskrit text-3xl text-primary mb-4">{s.deva}</p>
              <h3 className="font-display text-2xl text-gold mb-4">{s.title}</h3>
              <p className="text-foreground/75 leading-relaxed text-lg">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-display tracking-widest uppercase group-hover:gap-4 transition-all">
                Discover →
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
