"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    id: "private-lenders",
    name: "Private Lenders",
    entry: "Processor Intelligence + Agentic Reasoning",
    challenge:
      "Speed to decision at high deal cadence with heavy document volume. Your competitive advantage is speed. Manual review is the constraint.",
    help: "Processor Intelligence handles document classification and conflict resolution. Agentic Reasoning reconstructs entity structures. Your team reviews outputs — not raw files.",
    result:
      "More deals processed per team. Faster time to close. Risk caught earlier.",
  },
  {
    id: "credit-unions",
    name: "Credit Unions",
    entry: "Credit Policy Engine + Intelligence Document Review",
    challenge:
      "Maintaining policy consistency across loan officers. Ensuring member loan quality as origination volume grows. Regulatory scrutiny on every decision.",
    help: "The Credit Policy Engine matches every deal against your underwriting criteria automatically. Intelligence Document Review catches errors before they reach underwriting.",
    result:
      "Consistent policy application. Fewer exceptions. Auditable decisions.",
  },
  {
    id: "real-estate-funds",
    name: "Real Estate Funds",
    entry: "Agentic Reasoning + Entity Review",
    challenge:
      "Entity complexity on multi-borrower structures. Put-back risk from documentation errors on securitised loans. Attorney costs for entity review.",
    help: "Agentic Reasoning reconstructs entity structures — ownership, guarantors, signer authority — in minutes. Full source citations on every conclusion.",
    result:
      "Entity review from days to minutes. Put-back exposure reduced. Attorney costs eliminated on routine reviews.",
  },
  {
    id: "non-bank-lenders",
    name: "Non-bank Lenders",
    entry: "Full CreditOS platform",
    challenge:
      "Scaling origination volume without proportional headcount growth. An LOS-based team of 100 needs 300 to triple volume. That ratio breaks the economics.",
    help: "The full CreditOS platform — all five intelligence layers. Document review, entity reconstruction, policy matching, risk detection, and auditability.",
    result:
      "2-3x throughput with the same team. Scale without scaling headcount.",
  },
  {
    id: "brokers-loan-officers",
    name: "Brokers & Loan Officers",
    entry: "Loan Officer Intelligence",
    challenge:
      "File completeness before submission to lenders. Packages with errors or gaps slow the process and damage relationships.",
    help: "Loan Officer Intelligence tracks what is required, what is uploaded, what is valid, and what is missing. Gaps are surfaced in a single pass.",
    result:
      "Cleaner initial packages. Faster lender review. Fewer resubmissions.",
  },
];

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const activeIndustry = industries.find((ind) => ind.id === activeTab)!;

  return (
    <div className="w-full">
      {/* Tabs List */}
      <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 md:gap-4 mb-16 border-b border-white/10 pb-0 items-end">
        {industries.map((industry) => (
          <button
            key={industry.id}
            onClick={() => setActiveTab(industry.id)}
            className={`relative py-4 px-4 text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
              activeTab === industry.id
                ? "text-font"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {industry.name}
            {activeTab === industry.id && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent shadow-[0_0_15px_rgba(45,212,191,0.8)] z-10" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[300px]">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className={`transition-all duration-500 ease-in-out ${
              activeTab === industry.id
                ? "opacity-100 translate-y-0 relative z-10"
                : "opacity-0 translate-y-4 absolute inset-0 z-0 pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Header Info */}
              <div className="lg:col-span-4 space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-font tracking-tight">
                  {industry.name}
                </h2>
                <div className="group flex items-center gap-2 text-accent cursor-pointer w-fit">
                  <span className="text-sm md:text-base font-medium border-b border-accent/20 group-hover:border-accent transition-all duration-300">
                    {industry.entry}
                  </span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Details Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent/80">
                      01
                    </span>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                      The Challenge
                    </h3>
                  </div>
                  <p className="text-base text-white/70 leading-relaxed font-light">
                    {industry.challenge}
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent/80">
                      02
                    </span>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                      How Converge Helps
                    </h3>
                  </div>
                  <p className="text-base text-white/70 leading-relaxed font-light">
                    {industry.help}
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent/80">
                      03
                    </span>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                      Result
                    </h3>
                  </div>
                  <p className="text-base text-white/70 leading-relaxed font-light">
                    {industry.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
