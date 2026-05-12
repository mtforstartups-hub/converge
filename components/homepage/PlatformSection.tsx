"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

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

export default function PlatformSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-20 lg:py-25 overflow-hidden">
      <div className="max-w-[95%] md:max-w-[83.33%] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-5">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm md:text-base font-semibold tracking-widest uppercase text-deep-slate/80">
                Our Platform
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-wide text-deep-slate leading-[1.1]">
              CreditOS — the intelligence engine.
            </h2>
            <p className="text-lg sm:text-xl text-deep-slate/70 leading-relaxed max-w-2xl mt-6">
              Not a workflow tool. Not a document parser. The system that thinks
              through every loan before your team opens it.
            </p>
          </div>

          <Button href="/contact" title="Book a Demo" />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Clickable Accordion Menu */}
          <div className="space-y-0">
            {/* <div className="border-t border-deep-slate/10"></div> */}
            {items.map((item, index) => {
              const isActive = active === index;

              return (
                <div
                  key={item.id}
                  className="border-b border-deep-slate/10 cursor-pointer group"
                  onClick={() => setActive(index)}
                >
                  <div className="py-6 pr-4">
                    <h3
                      className={`text-xl sm:text-2xl transition-colors duration-300 ${
                        isActive
                          ? "text-deep-slate font-medium"
                          : "text-deep-slate/40 group-hover:text-deep-slate/60"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Transition for description - fixed height to prevent layout shift */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isActive ? "h-24 opacity-100" : "h-0 opacity-0"
                      }`}
                    >
                      <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed pr-8 pt-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Image Crossfade Container */}
          <div className="relative aspect-square w-full overflow-hidden ">
            {items.map((item, index) => (
              <div
                key={`image-${item.id}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  active === index
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1024}
                  height={1024}
                  // fill
                  // className="object-cover"
                  // sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
