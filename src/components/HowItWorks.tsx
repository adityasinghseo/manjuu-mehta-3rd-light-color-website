import { Phone, FileText, Star, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Book a Session",
    desc: "Schedule your personal consultation via call, WhatsApp, or email at a time that suits you.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Share Your Details",
    desc: "Provide your birth date, time, and place for Vedic readings — or property details for Vastu analysis.",
  },
  {
    number: "03",
    icon: Star,
    title: "Receive Deep Insights",
    desc: "Manjuu ji prepares a thorough, personalised report with precise remedies and actionable guidance.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Transform Your Life",
    desc: "Implement the cosmic prescriptions and witness powerful shifts in health, wealth, and relationships.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="relative py-32 px-6">
    {/* Background glow */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="w-[600px] h-[600px] rounded-full animate-glow-pulse opacity-20"
        style={{ background: "var(--gradient-aura)", filter: "blur(80px)" }} />
    </div>

    <div className="max-w-6xl mx-auto relative">
      {/* Section header */}
      <div className="text-center mb-20">
        <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">
          Your Journey
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-gold">How It Works</h2>
        <div className="mx-auto h-px w-32 bg-gradient-gold mt-4" />
        <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg italic">
          A simple, sacred process to begin your transformation.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="group relative p-8 rounded-2xl bg-card/40 backdrop-blur gold-border text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            style={{ animation: `rise 0.8s ease-out ${i * 0.15}s both` }}
          >
            {/* Step number watermark */}
            <div className="absolute top-4 right-5 font-display text-5xl font-bold text-primary/8 group-hover:text-primary/15 transition-colors select-none">
              {step.number}
            </div>

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 gold-border mb-6 group-hover:bg-primary/20 transition-colors">
              <step.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>

            <h3 className="font-display text-xl text-gold mb-3">{step.title}</h3>
            <p className="text-foreground/70 leading-relaxed text-base">{step.desc}</p>

            {/* Connector arrow (hidden on last) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-primary/30 text-2xl z-10">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
