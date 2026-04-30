"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type AgentData = {
  id: string;
  number: string;
  name: string;
  title: string;
  description: string;
  status: string;
  capabilities: string[];
  docLink: string;
};

const agentsData: AgentData[] = [
  {
    id: "triage",
    number: "01",
    name: "Triage",
    title: "Triage",
    description:
      "Classifies every document type — appraisals, T12s, entity docs, phase I reports — and extracts structured data automatically. Eliminates manual indexing. Every page accounted for, every field extracted.",
    status: "Available Now",
    capabilities: [
      "Multi-format document parsing",
      "Automated classification engine",
      "Structured data extraction",
      "Confidence scoring per field",
    ],
    docLink: "/docs/triage",
  },
  {
    id: "credit-intelligence",
    number: "02",
    name: "Credit Intelligence",
    title: "Credit Intelligence",
    description:
      "Cross-references extracted data across all documents. Surfaces data conflicts, highlights risk signals, and synthesises a structured credit summary. The equivalent of a senior analyst reviewing every line — in 4 minutes.",
    status: "Available Now",
    capabilities: [
      "Cross-document risk synthesis",
      "Conflict detection and flagging",
      "Risk signal prioritisation",
      "Structured credit memo output",
    ],
    docLink: "/docs/credit-intelligence",
  },
  {
    id: "policy-match",
    number: "03",
    name: "Policy Match",
    title: "Policy Match",
    description:
      "Maps every loan parameter against your institution's credit guidelines in real time. Every policy exception is flagged, documented, and traceable — with the specific policy clause attached.",
    status: "Available Now",
    capabilities: [
      "Real-time policy mapping",
      "Exception flagging with citations",
      "Multi-guideline support",
      "Audit-ready exception log",
    ],
    docLink: "/docs/policy-match",
  },
  {
    id: "entity-review",
    number: "04",
    name: "Entity Review",
    title: "Entity Review",
    description:
      "Deconstructs ownership structures of any complexity — LLCs, partnerships, trusts, nested entities. Surfaces beneficial owners, cross-collateral exposure, and guarantor relationships across the entire loan file.",
    status: "Available Now",
    capabilities: [
      "Beneficial ownership mapping",
      "Cross-collateral exposure analysis",
      "Guarantor relationship graph",
      "FINCEN compliance ready",
    ],
    docLink: "/docs/entity-review",
  },
  {
    id: "background-report",
    number: "05",
    name: "Background Report",
    title: "Background Report",
    description:
      "Analyses background reports for key risk signals: prior litigation, regulatory actions, previous defaults, and public record flags. Structured, comparative, and presented with full source provenance.",
    status: "Available Now",
    capabilities: [
      "Litigation history extraction",
      "Regulatory action identification",
      "Prior default analysis",
      "Source-attributed findings",
    ],
    docLink: "/docs/background-report",
  },
  {
    id: "comps",
    number: "06",
    name: "Comps",
    title: "Comps",
    description:
      "Sources and analyses property comparables from multiple data providers, benchmarks the subject property against market, and delivers a defensible valuation range with full data provenance and methodology.",
    status: "Available Now",
    capabilities: [
      "Multi-source comp aggregation",
      "Automated adjustment analysis",
      "Valuation range with methodology",
      "Market trend overlay",
    ],
    docLink: "/docs/comps",
  },
];

export default function SixAgentsTabs() {
  const [activeTab, setActiveTab] = useState<string>("comps");

  const activeAgent =
    agentsData.find((a) => a.id === activeTab) || agentsData[5];

  return (
    <div className="mt-12 flex flex-col lg:flex-row border border-white/10 rounded-2xl overflow-hidden bg-[#0c121e]">
      {/* Sidebar Tabs */}
      <div className="flex-none lg:w-72 flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-r border-white/10 hide-scrollbar p-4 lg:p-6 gap-2">
        {agentsData.map((agent) => {
          const isActive = activeTab === agent.id;
          return (
            <button
              key={agent.id}
              onClick={() => setActiveTab(agent.id)}
              className={`group flex items-start text-left gap-4 py-3 px-4 rounded-xl transition-all duration-300 min-w-[200px] lg:min-w-0 border ${
                isActive
                  ? "bg-white/5 border-white/10"
                  : "border-transparent hover:bg-white/5"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full mt-2 transition-colors duration-300 ${
                  isActive ? "bg-accent" : "bg-white/20 group-hover:bg-white/40"
                }`}
              />
              <div>
                <div
                  className={`text-sm md:text-base font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-font"
                      : "text-white/50 group-hover:text-white/80"
                  }`}
                >
                  {agent.name}
                </div>
                <div
                  className={`text-xs mt-0.5 transition-colors duration-300 ${
                    isActive
                      ? "text-white/60"
                      : "text-white/30 group-hover:text-white/50"
                  }`}
                >
                  {agent.number}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 md:p-10 lg:p-12 transition-all duration-500 min-h-[450px] flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-bold tracking-widest text-white/50 uppercase whitespace-nowrap">
              Agent {activeAgent.number}
            </span>
            <div className="flex-1 h-px bg-white/5"></div>
            <span className="text-xs font-semibold text-accent whitespace-nowrap">
              {activeAgent.status}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-font mb-6">
            {activeAgent.title}
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl leading-relaxed mb-12">
            {activeAgent.description}
          </p>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest text-white/50 uppercase">
              Key Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeAgent.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-[#111e2a] border border-white/5 rounded-lg py-3 px-4 flex items-center text-sm text-white/80"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <Link
            href={activeAgent.docLink}
            className="group inline-flex items-center text-sm font-medium text-accent hover:text-[#0f9d8e] transition-colors duration-300"
          >
            Full {activeAgent.name} documentation
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
