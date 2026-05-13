import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Filter, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Proof | Customers | Converge Finance",
  description:
    "How lenders are originating differently with Converge. Named customers, specific outcomes, complete verifiability.",
};

const aggregateStats = [
  { metric: "2.3M+", label: "loans analyzed" },
  { metric: "$12B+", label: "capital enabled" },
  { metric: "98.7%", label: "extraction accuracy across the customer base" },
];

const caseStudies = [
  {
    slug: "summit-capital",
    name: "Summit Capital",
    logoText: "SC",
    vertical: "Private Lender",
    size: "Enterprise",
    layer: "Underwriter Intelligence",
    outcome: "How a $1.4B bridge lender cut credit memo turnaround by 73%.",
    headlineMetric: "73%",
    metricLabel: "Faster turnarounds",
  },
  {
    slug: "apex-cu",
    name: "Apex Credit Union",
    logoText: "ACU",
    vertical: "Credit Union",
    size: "Mid-market",
    layer: "Processor Intelligence",
    outcome:
      "Scaling commercial loan processing by 2.5× without expanding the credit team.",
    headlineMetric: "2.5×",
    metricLabel: "Capacity increase",
  },
  {
    slug: "horizon-debt",
    name: "Horizon Debt Fund",
    logoText: "HDF",
    vertical: "Real Estate Fund",
    size: "Enterprise",
    layer: "CreditOS Full Stack",
    outcome:
      "Automated sponsor concentration tracking across a complex $2B active portfolio.",
    headlineMetric: "100%",
    metricLabel: "Risk visibility",
  },
  {
    slug: "meridian-capital",
    name: "Meridian Capital",
    logoText: "MC",
    vertical: "Non-bank Lender",
    size: "Growth",
    layer: "Loan Officer Intelligence",
    outcome:
      "Achieving first-pass lender approvals on 90% of complex multi-family packages.",
    headlineMetric: "90%",
    metricLabel: "First-pass approvals",
  },
];

export default function ProofHubPage() {
  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5 relative">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-verified/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-4xl mx-auto text-center items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8">
              <span className="w-1.5 h-1.5 rounded-full bg-verified animate-pulse" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                Proof
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-wider text-parchment">
              How lenders are originating differently with Converge.
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light mt-4">
              Named customers. Specific outcomes. No &quot;a leading lender
              said.&quot; The whole point of credit intelligence is
              verifiability — and that starts with how we talk about results.
            </p>
          </div>
        </div>
      </section>

      {/* ─── AGGREGATE PROOF BAR ─── */}
      <section className="py-12 md:py-16 bg-parchment border-b border-charcoal/10 relative z-20">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-charcoal/10">
            {aggregateStats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center ${
                  i !== 0 ? "pt-8 md:pt-0 md:px-8" : "md:pr-8"
                }`}
              >
                <div className="font-display text-5xl md:text-6xl font-bold text-verified tracking-tight mb-2">
                  {stat.metric}
                </div>
                <div className="text-charcoal/70 font-sans text-sm md:text-base font-medium max-w-50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HUB STRUCTURE (FILTERS + GRID) ─── */}
      <section className="py-20 md:py-32 bg-deep-slate">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3 text-white/50 w-full md:w-auto">
              <Filter className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Filter Results
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {["Lending Vertical", "Company Size", "Intelligence Layer"].map(
                (filter, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-midnight/40 hover:bg-white/5 text-sm font-medium text-white/80 transition-colors"
                  >
                    {filter}
                    <ChevronDown className="w-4 h-4 opacity-50" />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((study, i) => (
              <Link
                key={i}
                href={`/proof/${study.slug}`}
                className="group relative flex flex-col justify-between p-8 md:p-10 rounded-2xl border border-white/5 bg-midnight/30 hover:bg-midnight/60 hover:border-verified/30 transition-all duration-500 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-verified/5 rounded-full blur-3xl -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    {/* Fake Logo Block */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-deep-slate border border-white/10 flex items-center justify-center font-display font-bold text-white/40 group-hover:border-verified/20 group-hover:text-verified transition-colors">
                        {study.logoText}
                      </div>
                      <span className="font-mono text-sm uppercase tracking-wider text-white/60">
                        {study.name}
                      </span>
                    </div>

                    {/* Tag */}
                    <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono uppercase tracking-widest text-white/60">
                      {study.vertical}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl font-medium text-parchment leading-tight mb-12 group-hover:text-white transition-colors">
                    {study.outcome}
                  </h3>
                </div>

                <div className="relative z-10 flex items-end justify-between border-t border-white/10 pt-6 mt-auto">
                  <div>
                    <div className="font-display text-4xl font-bold text-verified mb-1">
                      {study.headlineMetric}
                    </div>
                    <div className="text-sm text-white/40 font-mono uppercase tracking-wider">
                      {study.metricLabel}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-verified transition-colors">
                    Read story
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              href="/contact"
              title="Become a customer story"
              type="secondary"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
