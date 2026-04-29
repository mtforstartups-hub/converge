"use client";

import { useState, useEffect } from "react";

const steps = [
  {
    id: "docs",
    num: "01",
    label: "Documents arrive",
    detail: "Every document classified, structured, source-linked",
  },
  {
    id: "evidence",
    num: "02",
    label: "Evidence is formed",
    detail: "Conflicts identified, entities reconstructed, gaps flagged",
  },
  {
    id: "facts",
    num: "03",
    label: "Facts are validated",
    detail: "Cross-referenced across the full loan file",
  },
  {
    id: "decision",
    num: "04",
    label: "Decisions are ready",
    detail: "Policy-matched, auditable, credit-ready output",
  },
];

export default function HeroCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="bg-[#0f1623] border border-white/5 p-6 sm:p-8 rounded-[14px] w-full hidden md:flex flex-col shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-font/40 mb-8 font-medium">
        CreditOS <span className="mx-2">·</span> Live Processing
      </p>

      <div className="flex flex-col relative mb-6 pl-2">
        {/* Vertical line spanning the steps */}
        <div className="absolute left-[1.65rem] top-[2rem] bottom-[2rem] w-[1px] bg-white/5 z-0"></div>

        {steps.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={step.id}
              className={`relative z-10 flex gap-5 cursor-pointer py-4 px-4 -mx-4 rounded-[12px] transition-all duration-500 ease-in-out ${
                isActive
                  ? "bg-[#141f30] border border-white/10"
                  : "hover:bg-white/[0.02] border border-transparent"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Number Circle */}
              <div
                className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-xs font-medium border transition-colors duration-500 bg-[#0f1623] ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-white/10 text-font/40"
                }`}
              >
                {step.num}
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-center h-9">
                  <div
                    className={`text-sm sm:text-[15px] font-medium transition-colors duration-500 ${
                      isActive ? "text-white" : "text-font/50"
                    }`}
                  >
                    {step.label}
                  </div>
                  {/* Indicator Dot */}
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-accent shadow-[0_0_8px_rgba(13,125,113,0.8)]"
                        : "bg-white/10"
                    }`}
                  ></div>
                </div>

                {/* Detail text wrapped for smooth animation */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13px] text-font/50 pt-1 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-auto border-t border-white/5 pt-5 flex justify-between items-center text-xs text-font/40">
        <span>Every output auditable</span>
        <span className="text-accent flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-accent shadow-[0_0_8px_rgba(13,125,113,0.8)]"></span>
          Source-backed
        </span>
      </div>
    </div>
  );
}
