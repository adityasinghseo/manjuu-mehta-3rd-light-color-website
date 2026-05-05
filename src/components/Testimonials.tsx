import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    role: "Business Owner",
    rating: 5,
    text: "Manjuu ji's Vastu consultation completely transformed my boutique. Within three months of implementing her recommendations, my revenue doubled. Her insights are precise, practical, and deeply rooted in authentic knowledge.",
    initial: "P",
  },
  {
    name: "Rajesh Agarwal",
    location: "Mumbai",
    role: "IT Professional",
    rating: 5,
    text: "I was sceptical about astrology until I had a session with Manjuu ji. Her birth chart reading was so accurate it gave me chills. She predicted my career shift to the month — and it happened exactly as she said.",
    initial: "R",
  },
  {
    name: "Sunita Kapoor",
    location: "Pune",
    role: "Homemaker",
    rating: 5,
    text: "After years of family discord, Manjuu ji's numerology consultation brought harmony back into our home. She guided us on name corrections and directional remedies that made a visible difference within weeks.",
    initial: "S",
  },
  {
    name: "Vikram Mehrotra",
    location: "Chandigarh",
    role: "Entrepreneur",
    rating: 5,
    text: "The business Vastu audit Manjuu ji performed for my office was a game-changer. She identified key energy blocks that had been stalling my growth for years. Her prescriptions are simple yet incredibly powerful.",
    initial: "V",
  },
  {
    name: "Ananya Joshi",
    location: "Bangalore",
    role: "Software Engineer",
    rating: 5,
    text: "I reached out for match-making guidance and Manjuu ji's analysis was extraordinarily detailed and compassionate. She helped us understand our compatibility at a soul level — truly a gifted astrologer.",
    initial: "A",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-32 px-6 overflow-hidden">
      {/* Decorative aura blobs */}
      <div className="pointer-events-none absolute left-[-10%] top-1/4 w-72 h-72 rounded-full animate-glow-pulse"
        style={{ background: "var(--gradient-aura)", filter: "blur(60px)", opacity: 0.4 }} />
      <div className="pointer-events-none absolute right-[-10%] bottom-1/4 w-72 h-72 rounded-full animate-glow-pulse"
        style={{ background: "var(--gradient-aura)", filter: "blur(60px)", opacity: 0.4 }} />

      <div className="max-w-5xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">
            Voices of Trust
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold">Client Testimonials</h2>
          <div className="mx-auto h-px w-32 bg-gradient-gold mt-4" />
          <p className="mt-6 text-foreground/70 max-w-xl mx-auto text-lg italic">
            Real stories from lives touched by the ancient sciences.
          </p>
        </div>

        {/* Card */}
        <div className="relative">
          <div
            key={current}
            className="gold-border rounded-3xl bg-card/50 backdrop-blur-md p-10 md:p-14 text-center shadow-deep animate-rise"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-foreground/90 text-xl md:text-2xl leading-relaxed italic font-body mb-10">
              "{t.text}"
            </blockquote>

            {/* Divider */}
            <div className="mx-auto h-px w-16 bg-gradient-gold mb-8" />

            {/* Author */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-display font-bold bg-gradient-gold shadow-glow"
                style={{ color: "hsl(250 45% 6%)" }}
              >
                {t.initial}
              </div>
              <p className="font-display tracking-widest text-gold text-base uppercase">{t.name}</p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase font-display">
                {t.role} · {t.location}
              </p>
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 flex items-center justify-center w-11 h-11 rounded-full gold-border bg-card/60 text-primary hover:bg-primary/20 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 flex items-center justify-center w-11 h-11 rounded-full gold-border bg-card/60 text-primary hover:bg-primary/20 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-primary/30 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
