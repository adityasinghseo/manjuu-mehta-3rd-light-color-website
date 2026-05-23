import { Compass, Sparkles, Hash, HeartHandshake, Briefcase, Gem } from "lucide-react";

const services = [
  {
    deva: "वास्तु शास्त्र",
    title: "Vastu Consultation",
    desc: "Harmonize homes and workplaces with the five elements and directional energies for prosperity and peace.",
    icon: Compass,
  },
  {
    deva: "ज्योतिष",
    title: "Vedic Astrology",
    desc: "Personalised birth chart readings, Mahadasha analysis and remedies aligned with your planetary blueprint.",
    icon: Sparkles,
  },
  {
    deva: "अंक शास्त्र",
    title: "Karmic Numerology",
    desc: "Decode the vibrations of your name and date of birth to unlock your soul's purpose and life path.",
    icon: Hash,
  },
  {
    deva: "विवाह मिलन",
    title: "Match Making",
    desc: "Ashta-Koota compatibility readings to bless unions with harmony, longevity and shared destiny.",
    icon: HeartHandshake,
  },
  {
    deva: "व्यापार परामर्श",
    title: "Business Guidance",
    desc: "Strategic Vastu and astrological counsel for entrepreneurs and enterprises seeking aligned growth.",
    icon: Briefcase,
  },
  {
    deva: "रत्न परामर्श",
    title: "Gemstone Counsel",
    desc: "Sacred stones recommended through precise planetary analysis to amplify benefic cosmic energies.",
    icon: Gem,
  },
];

interface ServicesProps {
  limit?: number;
}

const Services = ({ limit }: ServicesProps) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="relative py-32 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">Offerings</p>
          <h2 className="font-display text-4xl md:text-6xl text-gold">Sacred Services</h2>
          <div className="mx-auto h-px w-32 bg-gradient-gold mt-4" />
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg italic">
            Precision-crafted consultations rooted in ancient wisdom, delivered with modern clarity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((s, i) => (
            <article
              key={s.title}
              className="group relative p-10 rounded-2xl bg-card/40 backdrop-blur gold-border overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              style={{ animation: `rise 0.8s ease-out ${i * 0.1}s both` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute right-[-10%] top-[-10%] text-primary/5 group-hover:text-primary/20 transition-colors duration-700 pointer-events-none">
                <s.icon className="w-48 h-48 group-hover:animate-spin-slow" strokeWidth={1} />
              </div>

              <div className="relative">
                <div className="mb-4 text-gold/70 group-hover:scale-110 group-hover:text-gold transition-all duration-500 origin-left">
                  <s.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-gold mb-4">{s.title}</h3>
                <p className="text-foreground/75 leading-relaxed text-lg">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-display tracking-widest uppercase group-hover:gap-4 transition-all">
                  Enquire →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
