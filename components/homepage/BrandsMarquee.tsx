import Image from "next/image";

const brands = [
  { src: "/images/brands/brand-1.svg", alt: "Brand 1", width: 103, height: 36 },
  { src: "/images/brands/brand-2.svg", alt: "Brand 2", width: 113, height: 38 },
  { src: "/images/brands/brand-3.svg", alt: "Brand 3", width: 161, height: 40 },
  { src: "/images/brands/brand-4.svg", alt: "Brand 4", width: 180, height: 90 },
  { src: "/images/brands/brand-5.svg", alt: "Brand 5", width: 161, height: 26 },
  { src: "/images/brands/brand-6.svg", alt: "Brand 6", width: 76, height: 44 },
  { src: "/images/brands/brand-7.svg", alt: "Brand 7", width: 148, height: 44 },
  { src: "/images/brands/brand-8.svg", alt: "Brand 8", width: 161, height: 58 },
  { src: "/images/brands/brand-9.svg", alt: "Brand 9", width: 348, height: 65 },
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
    ...brands,
    ...brands,
    ...brands,
  ];

  return (
    <div className="relative z-10 w-full bg-midnight py-5 sm:py-6 overflow-hidden">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row md:items-center justify-center md:justify-between items-center gap-4">
        {/* Title */}
        <div className="uppercase text-sm md:text-base font-semibold text-parchment/80 whitespace-nowrap z-20 tracking-wide shrink-0">
          Built by industry experts from
        </div>

        {/* Marquee container with fade edges */}
        <div className="relative flex overflow-hidden w-full md:w-2/3 group">
          {/* Edge fades using gradients for a subtle entry/exit effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-24 bg-linear-to-r from-midnight to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-24 bg-linear-to-l from-midnight to-transparent z-10" />

          {/* Scrolling Content */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap w-max items-center">
            {duplicatedBrands.map((brand, idx) => (
              <div
                key={idx}
                className="mx-5 sm:mx-8 flex items-center justify-center shrink-0 cursor-default"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className="h-6 sm:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 brightness-0 invert-100"
                />
              </div>
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
