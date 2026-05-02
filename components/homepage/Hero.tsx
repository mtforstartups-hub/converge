import Image from "next/image";
import Button from "../ui/Button";
import HeroCard from "./HeroCard";
import BrandsMarquee from "./BrandsMarquee";

export default function Hero() {
  return (
    <section className="w-full bg-midnight flex flex-col">
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
        <div className="absolute inset-0 bg-midnight/70 z-0" />

        <div className="relative z-10 max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center text-parchment min-h-[60vh] lg:min-h-[80vh]">
          {/* LEFT */}
          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-5 leading-tight  text-center lg:text-left">
              Credit intelligence for lenders who originate at scale.
            </h1>

            <p className="text-base sm:text-lg text-parchment/60 mb-6 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              We turn messy loan files into structured, traceable, credit-ready
              decisions — before your LOS opens.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 justify-center lg:justify-start">
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
      <BrandsMarquee />
    </section>
  );
}
