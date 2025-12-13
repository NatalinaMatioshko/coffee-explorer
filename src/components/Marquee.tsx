const Marquee = () => {
  return (
    <div className="relative w-full bg-[#4f2d20] py-6 overflow-hidden">
      <div className="flex w-max animate-marquee2 whitespace-nowrap items-center">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="mx-8 text-lg font-light tracking-wide text-neutral-100"
          >
            Where beans become experiences
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
