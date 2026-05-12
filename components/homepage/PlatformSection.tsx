"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const items = [
  {
    id: "01",
    title: "Integration",
    whatItDoes: "Connects to every system and source across the credit stack.",
    howItShowsUp: "Ingests everything. Structures nothing.",
    image: "/images/info/1.png",
  },
  {
    id: "02",
    title: "Intelligence Document Review",
    whatItDoes: "Extracts meaning, normalizes data, and flags what matters.",
    howItShowsUp: "Reads like an expert. Never just OCR.",
    image: "/images/info/3.png",
  },
  {
    id: "03",
    title: "Agentic Reasoning",
    whatItDoes:
      "Interprets context, resolves ambiguity, and connects the dots across documents.",
    howItShowsUp: "Thinks through the file like a credit expert.",
    image: "/images/info/2.png",
  },
  {
    id: "04",
    title: "Credit Policy Engine",
    whatItDoes:
      "Applies your credit policy, exception rules, and scenario logic.",
    howItShowsUp: "Enforces your policy. Consistently.",
    image: "/images/info/5.png",
  },
  {
    id: "05",
    title: "Real-Time Risk Signals",
    whatItDoes:
      "Surfaces risk shifts and triggers actions as the deal evolves.",
    howItShowsUp: "Keeps risk visible. As things change.",
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
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-deep-slate leading-[1.1]">
              CreditOS — the intelligence engine.
            </h2>
            <p className="text-lg sm:text-xl text-deep-slate/70 leading-relaxed max-w-2xl mt-6">
              CreditOS sits before your LOS. It ingests the file, reads it like
              an expert, reasons through the deal, applies your credit policy,
              and surfaces risk in real time. The output is a credit-ready
              package your team can act on.
            </p>
          </div>

          <Button href="/contact" title="Book a Demo" />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Clickable Accordion Menu */}
          <div className="space-y-0">
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
                      className={`font-display text-xl sm:text-2xl transition-colors duration-300 ${
                        isActive
                          ? "text-deep-slate font-medium"
                          : "text-deep-slate/40 group-hover:text-deep-slate/60"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Transition for description - using max-h instead of fixed h-24 to accommodate the two fields */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isActive ? "h-30 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-charcoal/70 text-base sm:text-lg leading-relaxed pr-8 pt-4 space-y-3">
                        <p>
                          <strong className="text-deep-slate font-medium">
                            What it does:
                          </strong>{" "}
                          {item.whatItDoes}
                        </p>
                        <p>
                          <strong className="text-deep-slate font-medium">
                            How it shows up:
                          </strong>{" "}
                          {item.howItShowsUp}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Image Crossfade Container */}
          <div className="relative aspect-square w-9/10 overflow-hidden ">
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
