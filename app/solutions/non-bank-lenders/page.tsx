import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import NonBankLendersFAQ from "@/components/solutions/NonBankLendersFAQ";
import { ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Non-bank Lenders | Solutions | Converge Finance",
  description:
    "Originate complex loans at volume — without your credit team becoming the bottleneck. All three Intelligence Layers, working together.",
};

const outcomes = [
  {
    stat: "2–3x",
    label: "originations volume per credit FTE",
  },
  {
    stat: "Same loss rate",
    label: "consistency preserved as you scale",
  },
  {
    stat: "Warehouse-ready",
    label: "audit trail satisfies institutional capital partners",
  },
];

const otherSolutions = [
  { title: "Private Lenders", href: "/solutions/private-lenders" },
  { title: "Credit Unions", href: "/solutions/credit-unions" },
  { title: "Real Estate Funds", href: "/solutions/real-estate-funds" },
  { title: "Brokers & Loan Officers", href: "/solutions/brokers" },
];

export default function NonBankLendersPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-midnight border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "Non-bank Lenders" },
              ]}
            />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8">
                <span className="w-1.5 h-1.5 rounded-full bg-verified" />
                <span className="font-mono text-xs text-verified uppercase tracking-widest">
                  Non-bank Lenders
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wider text-parchment">
                Credit intelligence for non-bank real estate lenders at scale.
              </h1>

              <p className="text-base md:text-lg text-white/60 max-w-3xl leading-relaxed font-light">
                Originate complex loans at volume — without your credit team
                becoming the bottleneck. All three Intelligence Layers, working
                together, end to end.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button href="/live-deal" title="See it on a live deal &rarr;" />
              <Button
                type="secondary"
                href="/contact"
                title="Talk to a credit engineer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PAIN ─── */}
      <section className="py-16 md:py-28 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: heading + animated SVG */}
            <div className="space-y-8">
              <div>
                <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
                  The Pain
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  You&apos;re scaling faster than your credit infrastructure can
                  support.
                </h2>
              </div>

              {/* Animated SVG: Pipeline bottleneck vs full-stack throughput */}
              <svg
                viewBox="0 0 320 200"
                className="w-full max-w-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* --- TOP: Manual Bottleneck --- */}
                <text x="10" y="20" fill="#8A9BAE" fontSize="8" fontWeight="600">WITHOUT CONVERGE</text>
                
                {/* Wide intake */}
                <path d="M 10 35 L 70 35 L 100 55 L 70 75 L 10 75 Z" fill="#8A9BAE" opacity="0.1" />
                
                {/* Constricted pipeline */}
                <rect x="100" y="47" width="120" height="16" fill="#8A9BAE" opacity="0.2" />
                
                {/* Output */}
                <path d="M 220 47 L 250 47 L 270 35 L 310 35 L 310 75 L 270 75 L 250 63 L 220 63 Z" fill="#8A9BAE" opacity="0.1" />

                {/* Animated deals piling up */}
                <g fill="#8A9BAE">
                  {[...Array(8)].map((_, i) => (
                    <circle key={`in-${i}`} cx={25 + i*8} cy={45 + (i%3)*8} r="2.5" opacity="0.6">
                      <animate attributeName="cx" values={`${20 + i*8};${85 + (i%2)*5};${20 + i*8}`} dur="4s" repeatCount="indefinite" />
                    </circle>
                  ))}
                  <text x="90" y="90" textAnchor="middle" fill="#8A9BAE" fontSize="7" opacity="0.8">BOTTLENECK</text>
                  <path d="M 90 78 L 90 68" stroke="#8A9BAE" strokeWidth="1" markerEnd="url(#arrow)" opacity="0.8" />
                  
                  {/* Few deals making it through */}
                  <circle cx="120" cy="55" r="2.5" opacity="0.6">
                    <animate attributeName="cx" values="100;240" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="180" cy="55" r="2.5" opacity="0.6">
                    <animate attributeName="cx" values="160;300" dur="3s" repeatCount="indefinite" />
                  </circle>
                </g>

                <line x1="10" y1="105" x2="310" y2="105" stroke="#8A9BAE" strokeWidth="0.5" opacity="0.2" />

                {/* --- BOTTOM: Converge Full-Stack --- */}
                <text x="10" y="125" fill="#0B6B60" fontSize="8" fontWeight="600">WITH FULL CREDITOS ENGINE</text>
                
                {/* Consistent wide pipeline */}
                <rect x="10" y="140" width="300" height="40" rx="4" fill="#0B6B60" opacity="0.05" stroke="#0B6B60" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Three Intelligence Layers */}
                {[
                  { x: 60, label: "LOAN OFFICER" },
                  { x: 140, label: "PROCESSOR" },
                  { x: 220, label: "UNDERWRITER" }
                ].map((layer, i) => (
                  <g key={i}>
                    <rect x={layer.x} y="135" width="40" height="50" rx="6" fill="#0B6B60" opacity="0.15" stroke="#0B6B60" strokeWidth="1.5" />
                    <text x={layer.x + 20} y="195" textAnchor="middle" fill="#0B6B60" fontSize="6.5" fontWeight="600">{layer.label}</text>
                    {/* Processing pulse */}
                    <rect x={layer.x} y="135" width="40" height="50" rx="6" fill="none" stroke="#0B6B60">
                      <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                      <animate attributeName="stroke-width" values="1;3;1" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                    </rect>
                  </g>
                ))}

                {/* Smooth flowing deals */}
                <g fill="#0B6B60">
                  {[...Array(6)].map((_, i) => (
                    <g key={`flow-${i}`}>
                      <circle cx="0" cy={150} r="3">
                        <animate attributeName="cx" values="10;310" dur="4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy={160} r="3">
                        <animate attributeName="cx" values="10;310" dur="4s" begin={`${i * 0.6 + 0.3}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy={170} r="3">
                        <animate attributeName="cx" values="10;310" dur="4s" begin={`${i * 0.6 + 0.15}s`} repeatCount="indefinite" />
                      </circle>
                    </g>
                  ))}
                </g>

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#8A9BAE" opacity="0.8" />
                  </marker>
                </defs>
              </svg>
            </div>

            {/* Right: narrative */}
            <div className="space-y-6 text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed">
              <p>
                Non-bank lenders compete by combining institutional underwriting
                rigour with specialty-lender speed. The problem is that as
                origination scales, the credit team becomes the constraint. You
                can hire — but senior underwriters are slow to find and slower
                to ramp. You can outsource — but loss of consistency is the
                predictable result. You can lower the bar — but your warehouse
                partners are watching.
              </p>
              <p className="text-charcoal font-semibold text-lg lg:text-xl">
                Converge multiplies the capacity of the credit team you already have.
              </p>
              <p>
                The full CreditOS engine — Loan Officer, Processor, and
                Underwriter Intelligence — works across the originations
                pipeline. The team you have today handles two to three times the
                volume at the same loss rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY ALL THREE LAYERS ─── */}
      <section className="py-16 md:py-24 bg-midnight">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-verified/20 bg-deep-slate p-8 lg:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-verified/8 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-verified font-mono text-xs uppercase tracking-widest">
                    Deployment Strategy
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-parchment leading-tight">
                    Why all three layers?
                  </h2>
                  <p className="text-white/60 font-sans text-base leading-relaxed">
                    Non-bank lenders are the rare segment that benefits from
                    deploying all three Intelligence Layers from the start. The
                    pipeline is the product. Bottlenecks anywhere — at intake,
                    at processing, or at underwriting — become the binding
                    constraint. Converge addresses all three at once.
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-3">
                  {[
                    { name: "Loan Officer Intelligence", phase: "Intake" },
                    { name: "Processor Intelligence", phase: "Preparation" },
                    { name: "Underwriter Intelligence", phase: "Decisioning" }
                  ].map((layer, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between p-4 rounded-xl border border-verified/20 bg-verified/5 hover:bg-verified/10 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <Layers className="w-4 h-4 text-verified" />
                        <span className="text-sm font-medium text-parchment">{layer.name}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-verified/60">
                        {layer.phase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT CHANGES ─── */}
      <section className="py-16 md:py-24 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
              What Changes
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-10 leading-tight">
              The numbers that shift.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outcomes.map((item, i) => (
                <div
                  key={i}
                  className="group/stat p-8 rounded-2xl border border-charcoal/8 bg-white hover:border-verified/20 hover:shadow-[0_10px_40px_rgba(11,107,96,0.06)] transition-all duration-300"
                >
                  <div className="w-8 h-[3px] bg-verified/30 rounded-full mb-6 group-hover/stat:w-16 group-hover/stat:bg-verified transition-all duration-500" />
                  <div className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-charcoal mb-3 tracking-tight">
                    {item.stat}
                  </div>
                  <p className="text-sm text-charcoal/60 leading-relaxed font-sans">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <NonBankLendersFAQ />

      {/* ─── BOTTOM: CTA + OTHER SOLUTIONS ─── */}
      <section className="py-16 md:py-24 bg-parchment border-t border-charcoal/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">

            <div className="flex flex-wrap gap-4 mb-16">
              <Button href="/live-deal" title="See it on a live deal &rarr;" />
              <Button
                type="secondary-light"
                href="/solutions"
                title="Compare all solutions"
              />
            </div>

            <div className="pt-12 border-t border-charcoal/5">
              <div className="text-charcoal/40 font-mono text-xs uppercase tracking-widest mb-6">
                Other solutions
              </div>
              <div className="flex flex-wrap gap-3">
                {otherSolutions.map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    className="group/tag flex items-center gap-2 px-4 py-2 rounded-full border border-charcoal/10 text-sm text-charcoal/60 hover:border-verified/30 hover:text-verified hover:bg-verified/5 transition-all duration-200"
                  >
                    {s.title}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/tag:opacity-100 group-hover/tag:translate-x-0 transition-all duration-200" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
