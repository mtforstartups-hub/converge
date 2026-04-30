const brands = [
  "Goldman Sachs",
  "JP Morgan",
  "Wells Fargo",
  "Morgan Stanley",
  "Citibank",
  "PAN",
];

export default function BrandsMarquee() {
  // Multiply the list so that half of it spans wider than the container, enabling a seamless loop
  const duplicatedBrands = [
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
  ];

  return (
    <div className="relative z-10 w-full bg-[#121A2B] py-5 sm:py-6 overflow-hidden">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row md:items-center justify-center md:justify-between items-center gap-4">
        {/* Title */}
        <div className="uppercase text-sm md:text-base font-semibold text-font/80 whitespace-nowrap z-20 tracking-wide">
          Built by industry experts from
        </div>

        {/* Marquee container with fade edges */}
        <div className="relative flex overflow-hidden w-full md:w-2/3 group">
          {/* Edge fades using gradients for a subtle entry/exit effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-24 bg-linear-to-r from-[#121A2B] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-24 bg-linear-to-l from-[#121A2B] to-transparent z-10" />

          {/* Scrolling Content */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap w-max">
            {duplicatedBrands.map((brand, idx) => (
              <span
                key={idx}
                className="mx-5 sm:mx-8 text-font/70 hover:text-white transition-colors duration-300 font-semibold text-[11px] sm:text-sm tracking-widest cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
