"use client";

import { useState } from "react";
import {
  FileSearch,
  ClipboardList,
  Eye,
  Send,
} from "lucide-react";

const capabilities = [
  {
    icon: FileSearch,
    title: "Document triage in seconds",
    description:
      "Every file that hits your intake gets classified, parsed, and checked against the deal type. Operating agreement? Verified. Personal financial statement? Verified. Schedule E for the right property? Flagged if not.",
  },
  {
    icon: ClipboardList,
    title: "Borrower request lists that actually close gaps",
    description:
      "Instead of a generic checklist, Loan Officer Intelligence generates a request list specific to the deal — the actual missing entity, the actual missing year, the actual missing signature page. Borrowers respond faster because the ask is precise.",
  },
  {
    icon: Eye,
    title: "Pre-credit packaging",
    description:
      "Before the file moves to processing, you see a preview of what the credit team will see. Red flags surface early. Deals that won't pass policy don't get submitted — they get restructured, or they get killed, before you've burned three weeks.",
  },
  {
    icon: Send,
    title: "Broker-ready output",
    description:
      "For broker channels: a clean, credit-ready package that travels with the deal. Brokers send better files when the intake is precise. Better files convert at higher rates.",
  },
];

export default function LoanOfficerCapabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-28 bg-midnight">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
            Capabilities
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-parchment tracking-wide leading-tight">
            Everything your intake needs — nothing it doesn&apos;t.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`group/cap relative p-8 lg:p-10 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "bg-deep-slate border-verified/30 shadow-[0_0_30px_rgba(11,107,96,0.12)]"
                    : "bg-midnight/40 border-white/5 hover:border-white/10 hover:bg-deep-slate/50"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "radial-gradient(ellipse at top left, rgba(11,107,96,0.08) 0%, transparent 60%)",
                  }}
                />

                <div className="relative z-10 space-y-5">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-verified/15 shadow-[0_0_15px_rgba(11,107,96,0.25)]"
                        : "bg-white/5 group-hover/cap:bg-white/8"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? "text-verified" : "text-steel group-hover/cap:text-verified/70"
                      }`}
                    />
                  </div>

                  {/* Number tag */}
                  <div className="font-mono text-xs text-steel/50 tracking-widest">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display text-xl lg:text-2xl font-medium transition-colors duration-300 ${
                      isActive ? "text-parchment" : "text-parchment/80"
                    }`}
                  >
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/50 leading-relaxed font-sans">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
