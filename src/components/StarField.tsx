const StarField = () => {
  const stars = Array.from({ length: 60 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 star-field opacity-70 animate-pan-stars" />
      {stars.map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const delay = Math.random() * 4;
        const dur = 2 + Math.random() * 4;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-primary animate-twinkle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
              boxShadow: `0 0 ${size * 4}px hsl(var(--gold))`,
            }}
          />
        );
      })}
    </div>
  );
};

export default StarField;
