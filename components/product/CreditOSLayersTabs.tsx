"use client";

import React, { useState } from "react";
import {
  Network,
  FileText,
  BrainCircuit,
  ShieldCheck,
  Activity,
} from "lucide-react";

const LAYERS = [
  {
    id: "01",
    title: "Integration Layer",
    icon: Network,
    whatItDoes:
      "Connects to every system and source across the credit stack — your LOS, document management, borrower portals, public records, third-party data providers.",
    positioning:
      "Ingests everything. Structures nothing. Integration is plumbing. The intelligence lives in the layers above.",
  },
  {
    id: "02",
    title: "Intelligence Document Review",
    icon: FileText,
    whatItDoes:
      "Extracts meaning from every document — bank statements, rent rolls, operating agreements, K-1s, appraisals, title work. Normalizes data across formats. Flags what matters for credit.",
    positioning:
      "Reads like an expert. Never just OCR. Most document tools tell you what the file says. We tell you what it means.",
  },
  {
    id: "03",
    title: "Agentic Reasoning",
    icon: BrainCircuit,
    whatItDoes:
      "Interprets context across documents. Resolves conflicts when the rent roll says one thing and the operating statement says another. Reconstructs entity structures across affiliated LLCs, holding companies, and individual guarantors.",
    positioning:
      "Thinks through the file like a credit expert. This is the layer that makes the difference between automation and intelligence.",
  },
  {
    id: "04",
    title: "Credit Policy Engine",
    icon: ShieldCheck,
    whatItDoes:
      "Encodes your credit policy as logic — exception rules, concentration limits, DSCR thresholds, LTV bands, sponsor experience requirements. Matches every deal to policy in real time, with a documented match trail.",
    positioning:
      "Enforces your policy. Consistently. Different underwriters apply the same policy differently. CreditOS applies it the same way, every time.",
  },
  {
    id: "05",
    title: "Real-Time Risk Signals",
    icon: Activity,
    whatItDoes:
      "Watches the portfolio after close. Flags when a borrower's bank balance shifts materially, when a tenant covenant gets breached, when a market signal changes the risk profile of a property type. Triggers action.",
    positioning:
      "Keeps risk visible. As things change. Credit decisions don't end at closing. CreditOS doesn't either.",
  },
];

export default function CreditOSLayersTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-deep-slate py-20 lg:py-32">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-parchment">
            The Five CreditOS Layers, in Depth
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Tab Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-4 relative">
            {/* Connecting line */}
            <div className="absolute left-6.75 top-8 bottom-8 w-px bg-white/5 hidden lg:block" />

            {LAYERS.map((layer, idx) => {
              const isActive = activeTab === idx;
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex items-center gap-6 p-4 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? "bg-midnight/60 shadow-[0_0_20px_rgba(11,107,96,0.15)] border border-verified/30"
                      : "hover:bg-midnight/30 border border-transparent hover:border-white/5"
                  }`}
                >
                  <div
                    className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center border transition-colors duration-300 relative z-10 ${
                      isActive
                        ? "bg-verified text-midnight border-verified shadow-[0_0_15px_rgba(11,107,96,0.4)]"
                        : "bg-charcoal text-steel border-white/10 group-hover:border-white/20"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div
                      className={`font-mono text-xs mb-1 transition-colors duration-300 tracking-wider ${
                        isActive ? "text-verified" : "text-steel"
                      }`}
                    >
                      LAYER {layer.id}
                    </div>
                    <div
                      className={`font-display text-lg sm:text-xl font-bold transition-colors duration-300 ${
                        isActive ? "text-parchment" : "text-parchment/60"
                      }`}
                    >
                      {layer.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3 flex flex-col justify-center">
            {LAYERS.map((layer, idx) => {
              if (activeTab !== idx) return null;
              const Icon = layer.icon;

              return (
                <div
                  key={layer.id}
                  className="bg-midnight/40 border border-white/5 rounded-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden"
                >
                  {/* Decorative background element */}
                  <Icon className="absolute -bottom-10 -right-10 w-64 h-64 text-verified/3 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mb-8 pb-8 border-b border-white/10">
                      <div className="w-16 h-16 shrink-0 rounded-full bg-charcoal flex items-center justify-center font-mono text-xl text-verified font-bold shadow-[0_0_15px_rgba(11,107,96,0.2)]">
                        {layer.id}
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-parchment">
                        {layer.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                      <div>
                        <div className="flex items-center gap-2 font-mono text-xs text-steel uppercase tracking-widest mb-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-verified shadow-[0_0_8px_rgba(11,107,96,0.6)]" />
                          What it does
                        </div>
                        <p className="font-sans text-parchment/80 leading-relaxed text-base sm:text-lg">
                          {layer.whatItDoes}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 font-mono text-xs text-steel uppercase tracking-widest mb-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-verified shadow-[0_0_8px_rgba(11,107,96,0.6)]" />
                          Positioning
                        </div>
                        <p className="font-sans text-parchment/80 leading-relaxed text-base sm:text-lg">
                          {layer.positioning}
                        </p>
                      </div>
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
