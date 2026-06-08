import Image from "next/image";
import Button from "../ui/Button";
import HeroCard from "./HeroCard";
import BrandsMarquee from "./BrandsMarquee";
import HowItWorksDemo from "./HowItWorksDemo";
import Link from "next/link";

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
              The intelligence infrastructure for <span className="italic font-medium text-verified">institutional{"\u00A0"}</span> lending.
            </h1>

            <p className="text-base sm:text-lg text-parchment/60 mb-6 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Each loan requires 30–50 different risk assessments — read, reconciled, and judged by hand, on every loan, every time. <span className="font-bold text-parchment">Converge does that work for you</span>, sourced, structured, and ready to review.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {/* <Button
                href="/live-deal"
                title="See it on a live deal"
                type="primary"
              /> */}
              <Link
                href="/live-deal"
                className={`max-w-fit py-2.25 px-4.5 rounded-lg text-sm text-parchment bg-terracotta transform hover:shadow-lg hover:bg-terracotta/90 hover:-translate-y-1 duration-300 ease-linear`}
              >
                Talk To Us
              </Link>
              <span className="hidden md:flex">
                <Button
                  href="/platform"
                  title="Read Our Thinking"
                  type="secondary"
                />
              </span>
            </div>
          </div>

          {/* RIGHT CARD */}
          {/* <HeroCard /> */}
          <HowItWorksDemo />
        </div>
      </div>

      {/* BRANDS */}
      <BrandsMarquee />
    </section>
  );
}
