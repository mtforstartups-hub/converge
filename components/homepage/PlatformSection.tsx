"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const items = [
  {
    id: "01",
    title: "Integration layer",
    desc: "Connects to your LOS, CRM, Google Drive, SharePoint. All loan documents into one system. No rip-and-replace.",
    image: "/images/info/1.png",
  },
  {
    id: "02",
    title: "Intelligence document review",
    desc: "Classifies, validates, extracts, and resolves conflicts across all documents. Understands — not just extracts.",
    image: "/images/info/3.png",
  },
  {
    id: "03",
    title: "Agentic reasoning",
    desc: "Performs the cognitive work of underwriting across 20–50 work streams per loan. Reasons — not automates.",
    image: "/images/info/2.png",
  },
  {
    id: "04",
    title: "Credit policy engine",
    desc: "Matches every deal against underwriting policies simultaneously. Applies policy — not checks boxes.",
    image: "/images/info/5.png",
  },
  {
    id: "05",
    title: "Real-time risk signals",
    desc: "Flags completeness gaps, exceptions, and fraud indicators before credit committee. Surfaces risk — not stores it.",
    image: "/images/info/4.png",
  },
];

const AUTOPLAY_DURATION = 4500;

export default function PlatformSection() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleSetActive = (index: number) => {
    if (index === active) return;
    setPrevActive(active);
    setActive(index);
  };

  // Fixed Timer Logic: Resets perfectly when active changes or unpauses
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setPrevActive(active);
      setActive((prev) => (prev + 1) % items.length);
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [paused, active]);

  return (
    <section className="w-full bg-parchment py-20 lg:py-32 overflow-hidden">
      {/* Inject custom animation for the progress bar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `,
        }}
      />

      <div className="max-w-[95%] md:max-w-[83.33%] mx-auto px-4 sm:px-6 lg:px-10">
        {/* HEADER AREA */}
        <div className="mb-10 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-charcoal/80 mb-4">
                Our platform
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide text-deep-slate leading-[1.1] mb-6">
                CreditOS — the intelligence engine.
              </h2>
              <p className="text-lg sm:text-xl text-deep-slate/70 leading-relaxed max-w-2xl">
                Not a workflow tool. Not a document parser. The system that
                thinks through every loan before your team opens it.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT AREA: GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: INTERACTIVE LIST */}
          <div className="flex flex-col gap-2 relative z-10">
            {items.map((item, index) => {
              const isActive = active === index;

              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => {
                    setPaused(true);
                    handleSetActive(index);
                  }}
                  onMouseLeave={() => setPaused(false)}
                  onClick={() => handleSetActive(index)}
                  className={`group text-left p-6 rounded-2xl transition-all duration-500 border-l-[3px] outline-none ${
                    isActive
                      ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-verified transform scale-[1.02]"
                      : "border-transparent hover:bg-black/3 focus-visible:bg-black/3"
                  }`}
                >
                  <div className="flex gap-6 items-start">
                    <div
                      className={`text-xl font-medium transition-colors duration-500 ${
                        isActive ? "text-verified" : "text-charcoal/30"
                      }`}
                    >
                      {item.id}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl sm:text-2xl font-semibold mb-2 transition-colors duration-500 ${
                          isActive ? "text-deep-slate" : "text-deep-slate/60"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Smooth accordion drop-down */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100 mt-3"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: IMAGE REVEAL AREA */}
          <div className="relative aspect-4/3 w-full rounded-3xl  overflow-hidden ">
            {items.map((item, index) => {
              const isActive = active === index;
              const isPrev = prevActive === index;

              // Only active and prev active items need to be rendered/animated
              // We assign stacking contexts intelligently
              const zIndex = isActive ? 20 : isPrev ? 10 : 0;
              const opacity = isActive || isPrev ? 1 : 0;

              // Incoming image wipes up, previous image stays but scales down slightly
              const clipPath = isActive
                ? "inset(0% 0% 0% 0%)"
                : isPrev
                  ? "inset(0% 0% 0% 0%)"
                  : "inset(100% 0% 0% 0%)";

              const transform = isActive
                ? "scale(1)"
                : isPrev
                  ? "scale(0.96)"
                  : "scale(1.05)";

              return (
                <div
                  key={item.id}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    zIndex,
                    opacity,
                    clipPath,
                    transform,
                    transition:
                      "clip-path 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  {/* Subtle overlay to darken the outgoing image slightly */}
                  <div
                    className="absolute inset-0 bg-black transition-opacity duration-1000 ease-out"
                    style={{ opacity: isActive ? 0 : 0.15 }}
                  />
                </div>
              );
            })}

            {/* PROGRESS INDICATOR - Native CSS Animation Implementation */}
            {/* <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black/10 z-30">
              <div
                key={active} // Changing the key automatically restarts the CSS animation
                className="h-full bg-verified"
                style={{
                  animation: `progress-fill ${AUTOPLAY_DURATION}ms linear forwards`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
