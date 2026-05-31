const grahas = [
  { name: "Surya", en: "Sun", deva: "सूर्य", color: "42 95% 60%", r: 0 },
  { name: "Chandra", en: "Moon", deva: "चन्द्र", color: "210 70% 80%", r: 110 },
  { name: "Mangala", en: "Mars", deva: "मङ्गल", color: "10 80% 55%", r: 160 },
  { name: "Budha", en: "Mercury", deva: "बुध", color: "140 60% 55%", r: 210 },
  { name: "Guru", en: "Jupiter", deva: "गुरु", color: "48 90% 60%", r: 260 },
  { name: "Shukra", en: "Venus", deva: "शुक्र", color: "320 60% 75%", r: 310 },
  { name: "Shani", en: "Saturn", deva: "शनि", color: "260 50% 50%", r: 360 },
  { name: "Rahu", en: "N. Node", deva: "राहु", color: "280 70% 50%", r: 0 },
  { name: "Ketu", en: "S. Node", deva: "केतु", color: "20 70% 45%", r: 0 },
];

const Navagraha = () => (
  <section id="navagraha" className="relative py-32 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="font-sanskrit text-primary/70 text-xl mb-3">नवग्रह</p>
        <h2 className="font-display text-4xl md:text-6xl text-gold mb-4">The Nine Planets</h2>
        <div className="mx-auto h-px w-32 bg-gradient-gold" />
        <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg">
          The Navagraha — celestial forces that weave the threads of karma through every life.
        </p>
      </div>

      {/* Orbit visualization */}
      <div className="relative mx-auto h-[520px] w-full max-w-[520px] my-16">
        {/* Concentric orbits */}
        {[140, 200, 260, 320, 380, 440].map((s) => (
          <div
            key={s}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 animate-spin-slow"
            style={{ width: s, height: s, animationDuration: `${s / 4}s` }}
          />
        ))}
        {/* Sun core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-glow-pulse"
              style={{ background: 'radial-gradient(circle, hsl(42 95% 60% / 0.7), transparent)', width: 180, height: 180, transform: 'translate(-50%,-50%)', left: '50%', top: '50%' }} />
            <div className="relative h-20 w-20 rounded-full bg-gradient-gold shadow-glow flex items-center justify-center font-sanskrit text-2xl text-primary-foreground">
              सूर्य
            </div>
          </div>
        </div>
        {/* Orbiting planets */}
        {grahas.slice(1, 7).map((g, i) => (
          <div
            key={g.name}
            className="absolute left-1/2 top-1/2"
            style={{
              animation: `orbit ${20 + i * 8}s linear infinite`,
              ['--r' as never]: `${80 + i * 30}px`,
            }}
          >
            <div
              className="h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-sm font-display"
              style={{
                background: `radial-gradient(circle, hsl(${g.color}), hsl(${g.color} / 0.4))`,
                boxShadow: `0 0 20px hsl(${g.color} / 0.7)`,
                color: 'hsl(var(--background))',
              }}
              title={g.en}
            >
              {g.en[0]}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4">
        {grahas.map((g, i) => (
          <div
            key={g.name}
            className="text-center p-4 rounded-xl gold-border bg-card/30 hover:bg-card/60 transition-all hover:-translate-y-1"
            style={{ animation: `rise 0.6s ease-out ${i * 0.06}s both` }}
          >
            <div
              className="mx-auto mb-3 h-10 w-10 rounded-full"
              style={{
                background: `radial-gradient(circle, hsl(${g.color}), hsl(${g.color} / 0.3))`,
                boxShadow: `0 0 18px hsl(${g.color} / 0.6)`,
              }}
            />
            <p className="font-sanskrit text-primary text-lg">{g.deva}</p>
            <p className="font-display text-sm text-foreground/90">{g.name}</p>
            <p className="text-sm text-muted-foreground">{g.en}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Navagraha;
