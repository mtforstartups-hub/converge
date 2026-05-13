"use client";

import { useState } from "react";
import {
  Network,
  Scale,
  AlertTriangle,
  FileText,
} from "lucide-react";

const capabilities = [
  {
    icon: Network,
    title: "Entity structure, reconstructed and verified",
    description:
      "Open any deal and see the full entity tree on one screen — every LLC, every holding company, every guarantor, every percentage. Gaps are flagged. Conflicts with prior deals from the same sponsor are surfaced. Hover any node, see the source document.",
  },
  {
    icon: Scale,
    title: "Policy match, with full reasoning",
    description:
      "Your credit policy is encoded in CreditOS. Every deal gets matched clause by clause, with the policy text on one side and the deal evidence on the other. Exceptions are flagged. Approvals already on file are linked. Committee memos write themselves.",
  },
  {
    icon: AlertTriangle,
    title: "Risk signals across the file",
    description:
      "Sponsor concentration. Submarket exposure. Construction-completion risk. Tenant covenant gaps. The engine surfaces every signal it can compute against your portfolio and your policy — and explains why each one matters for this specific deal.",
  },
  {
    icon: FileText,
    title: "Credit memo on demand",
    description:
      "When you're ready to write the credit memo, the file is already structured for it. Sponsor section, deal section, property section, risk section, policy section — all populated, all sourced, all editable. The memo is your judgment expressed on top of pre-built scaffolding.",
  },
];

export default function UnderwriterCapabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-28 bg-midnight">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
            Capabilities
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-parchment tracking-wide leading-tight">
            The credit decision, fully supported.
          </h2>
        </div>

        {/* Single-column numbered cards with left accent */}
        <div className="max-w-4xl space-y-5">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`group/cap relative rounded-2xl transition-all duration-500 cursor-default ${
                  isActive
                    ? "shadow-[0_0_40px_rgba(11,107,96,0.1)]"
                    : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Left border accent */}
                <div
                  className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-full transition-all duration-500 ${
                    isActive ? "bg-verified" : "bg-white/8"
                  }`}
                />

                <div
                  className={`ml-0 p-6 lg:p-8 pl-8 lg:pl-10 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "bg-deep-slate border-verified/20"
                      : "bg-midnight/40 border-white/5 hover:border-white/8"
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
                    {/* Number + Icon cluster */}
                    <div className="flex items-center gap-4 shrink-0">
                      <span
                        className={`font-mono text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                          isActive ? "text-verified" : "text-white/10"
                        }`}
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-verified/15 shadow-[0_0_12px_rgba(11,107,96,0.2)]"
                            : "bg-white/5"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 transition-colors duration-300 ${
                            isActive ? "text-verified" : "text-steel"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 flex-1">
                      <h3
                        className={`font-display text-lg lg:text-xl font-medium transition-colors duration-300 ${
                          isActive ? "text-parchment" : "text-parchment/80"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
