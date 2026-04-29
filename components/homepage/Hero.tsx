import Image from "next/image";
import Button from "../ui/Button";
import HeroCard from "./HeroCard";

const brands = [
  "Goldman Sachs",
  "JP Morgan",
  "Wells Fargo",
  "Morgan Stanley",
  "Citibank",
  "PAN",
];

export default function Hero() {
  return (
    <section className="w-full bg-primary flex flex-col">
      <div className="relative w-full">
        {/* Background Image (Mobile Fallback & Placeholder) */}
        <Image
          src="/images/hero-bg.png"
          alt="Background Placeholder"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Background Video (Desktop only) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block z-0"
          poster="/images/hero-bg.png"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/70 z-0" />

        <div className="relative z-10 max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 grid gap-10 md:grid-cols-2 md:gap-16 items-center text-font min-h-[60vh] md:min-h-[80vh]">
          {/* LEFT */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-5 leading-tight font-sans text-center md:text-left">
              Credit intelligence for lenders who originate at scale.
            </h1>

            <p className="text-base sm:text-lg text-font/60 mb-6 max-w-xl text-center md:text-left">
              We turn messy loan files into structured, traceable, credit-ready
              decisions — before your LOS opens.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <Button
                href="/live-deal"
                title="See it on a live deal"
                type="primary"
              />
              <span className="hidden md:flex">
                <Button
                  href="/platform"
                  title="Watch a 2-minute Overview"
                  type="secondary"
                />
              </span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <HeroCard />
        </div>
      </div>

      {/* BRANDS */}
      <div className="relative z-10 w-full bg-[#121A2B]">
        <div className="max-w-5/6 mx-auto py-5 sm:py-6 px-4 sm:px-6 lg:px-10 text-xs">
          {/* Stack on mobile, row on desktop */}
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-font">
            <div className="uppercase text-[10px] sm:text-xs">
              Built by industry experts from
            </div>

            {/* Wrap instead of overflow */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="text-font/30 hover:text-font duration-200 ease-linear cursor-default text-[11px] sm:text-xs"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
