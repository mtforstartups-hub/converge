"use client";

import { useState } from "react";
import {
  GitCompareArrows,
  Network,
  Database,
  ClipboardCheck,
} from "lucide-react";

const capabilities = [
  {
    icon: GitCompareArrows,
    title: "Cross-document conflict resolution",
    description:
      "When the rent roll and the operating statement disagree, Processor Intelligence flags it, shows you both numbers, and surfaces the source pages side by side. You decide. The decision is logged.",
    accent: "Resolve",
  },
  {
    icon: Network,
    title: "Entity reconstruction",
    description:
      "Trace ownership and control across every LLC, holding company, trust, and individual on the file. The engine builds a visual entity map and flags gaps — missing operating agreements, unsigned amendments, ambiguous member structures — before underwriting hits the same wall.",
    accent: "Map",
  },
  {
    icon: Database,
    title: "Normalized data, one source of truth",
    description:
      "Every financial figure from every document gets normalized into a single structured view. Underwriting sees one number per field, with the source document one click away.",
    accent: "Normalize",
  },
  {
    icon: ClipboardCheck,
    title: "Pre-underwriting QC",
    description:
      "Processor Intelligence runs a final quality check before handing the file off: every required document present, every signature in place, every entity confirmed, every conflict resolved or flagged.",
    accent: "Verify",
  },
];

export default function ProcessorCapabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-28 bg-midnight">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: sticky title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
              Capabilities
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-parchment tracking-wide leading-tight mb-6">
              Reasoning, not templates.
            </h2>
            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              Each capability below represents cognitive work that previously
              required a senior processor and hours of manual cross-referencing.
            </p>
          </div>

          {/* Right: capability cards */}
          <div className="lg:col-span-8 space-y-4">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className={`group/cap relative p-6 lg:p-8 rounded-2xl border transition-all duration-500 ${
                    isHovered
                      ? "bg-deep-slate border-verified/25 shadow-[0_0_30px_rgba(11,107,96,0.1)]"
                      : "bg-midnight/40 border-white/5 hover:border-white/10"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "radial-gradient(ellipse at top right, rgba(11,107,96,0.06) 0%, transparent 60%)",
                    }}
                  />

                  <div className="relative z-10 flex flex-col sm:flex-row gap-5">
                    {/* Icon + Number */}
                    <div className="shrink-0 flex sm:flex-col items-center sm:items-start gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? "bg-verified/15 shadow-[0_0_12px_rgba(11,107,96,0.2)]"
                            : "bg-white/5"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 transition-colors duration-300 ${
                            isHovered ? "text-verified" : "text-steel"
                          }`}
                        />
                      </div>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                          isHovered ? "text-verified/60" : "text-steel/30"
                        }`}
                      >
                        {cap.accent}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 flex-1">
                      <h3
                        className={`font-display text-lg lg:text-xl font-medium transition-colors duration-300 ${
                          isHovered ? "text-parchment" : "text-parchment/80"
                        }`}
                      >
                        {cap.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/45 leading-relaxed font-sans">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
