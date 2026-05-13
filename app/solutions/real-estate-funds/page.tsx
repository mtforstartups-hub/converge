import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import RealEstateFundsFAQ from "@/components/solutions/RealEstateFundsFAQ";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Real Estate Funds | Solutions | Converge Finance",
  description:
    "Underwrite complex sponsor structures, value-add business plans, and ground-up construction with risk visibility that holds up to your LP reporting standards.",
};

const outcomes = [
  {
    stat: "Portfolio-wide",
    label: "Sponsor and submarket concentration visible on every new deal",
  },
  {
    stat: "Real-time",
    label: "Risk signal monitoring across the active portfolio",
  },
  {
    stat: "LP-ready",
    label: "Quarterly reporting with full audit trail",
  },
];

const otherSolutions = [
  { title: "Private Lenders", href: "/solutions/private-lenders" },
  { title: "Credit Unions", href: "/solutions/credit-unions" },
  { title: "Non-bank Lenders", href: "/solutions/non-bank-lenders" },
  { title: "Brokers & Loan Officers", href: "/solutions/brokers" },
];

export default function RealEstateFundsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-midnight border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "Real Estate Funds" },
              ]}
            />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8">
                <span className="w-1.5 h-1.5 rounded-full bg-verified" />
                <span className="font-mono text-xs text-verified uppercase tracking-widest">
                  Real Estate Funds
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wider text-parchment">
                Credit intelligence for real estate debt funds.
              </h1>

              <p className="text-base md:text-lg text-white/60 max-w-3xl leading-relaxed font-light">
                Underwrite complex sponsor structures, value-add business plans,
                and ground-up construction — with risk visibility that holds up
                to your LP reporting standards.
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
                  Your deals are getting more complex.{" "}
                  <span className="text-verified">
                    Your risk visibility isn&apos;t keeping up.
                  </span>
                </h2>
              </div>

              {/* Animated SVG: Complex entity map revealing sponsor concentration */}
              <svg
                viewBox="0 0 320 200"
                className="w-full max-w-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Grid */}
                <line x1="20" y1="40" x2="300" y2="40" stroke="#8A9BAE" strokeWidth="0.5" opacity="0.1" />
                <line x1="20" y1="100" x2="300" y2="100" stroke="#8A9BAE" strokeWidth="0.5" opacity="0.1" />
                <line x1="20" y1="160" x2="300" y2="160" stroke="#8A9BAE" strokeWidth="0.5" opacity="0.1" />

                {/* Portfolio Deals (Background, fading) */}
                <g opacity="0.4">
                  {/* Deal 1 */}
                  <line x1="60" y1="40" x2="40" y2="100" stroke="#8A9BAE" strokeWidth="1.5" />
                  <line x1="40" y1="100" x2="40" y2="160" stroke="#8A9BAE" strokeWidth="1.5" />
                  <circle cx="60" cy="40" r="16" fill="#F4F1EB" stroke="#8A9BAE" strokeWidth="1.5" />
                  <circle cx="40" cy="100" r="12" fill="#F4F1EB" stroke="#8A9BAE" strokeWidth="1.5" />
                  <rect x="30" y="152" width="20" height="16" rx="2" fill="#8A9BAE" opacity="0.2" />

                  {/* Deal 2 */}
                  <line x1="140" y1="40" x2="160" y2="100" stroke="#8A9BAE" strokeWidth="1.5" />
                  <line x1="160" y1="100" x2="160" y2="160" stroke="#8A9BAE" strokeWidth="1.5" />
                  <circle cx="140" cy="40" r="16" fill="#F4F1EB" stroke="#8A9BAE" strokeWidth="1.5" />
                  <circle cx="160" cy="100" r="12" fill="#F4F1EB" stroke="#8A9BAE" strokeWidth="1.5" />
                  <rect x="150" y="152" width="20" height="16" rx="2" fill="#8A9BAE" opacity="0.2" />
                </g>

                {/* New Deal (Foreground) */}
                {/* Connections to New Deal */}
                <line x1="240" y1="40" x2="260" y2="100" stroke="#0B6B60" strokeWidth="1.5" />
                <line x1="260" y1="100" x2="260" y2="160" stroke="#0B6B60" strokeWidth="1.5" />
                <line x1="260" y1="100" x2="210" y2="160" stroke="#0B6B60" strokeWidth="1.5" />
                
                {/* New Sponsor Node */}
                <circle cx="240" cy="40" r="16" fill="#F4F1EB" stroke="#0B6B60" strokeWidth="2" />
                <text x="240" y="43" textAnchor="middle" fill="#0B6B60" fontSize="8" fontWeight="600">NEW</text>
                
                {/* New LLC/Holding Nodes */}
                <circle cx="260" cy="100" r="12" fill="#F4F1EB" stroke="#0B6B60" strokeWidth="1.5" />
                
                {/* New Property Nodes */}
                <rect x="250" y="152" width="20" height="16" rx="2" fill="#0B6B60" opacity="0.2" />
                <rect x="200" y="152" width="20" height="16" rx="2" fill="#0B6B60" opacity="0.2" />

                {/* --- CONVERGE INTELLIGENCE REVEAL --- */}
                {/* Animated Connection showing Sponsor Concentration (linking New Sponsor to Deal 1 Sponsor) */}
                <path
                  d="M 224 40 Q 150 10 76 40"
                  fill="none"
                  stroke="#C4432B"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-16"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Risk Signal Alert on the hidden connection */}
                <g>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <circle cx="150" cy="22" r="12" fill="#C4432B" opacity="0.1" />
                  <circle cx="150" cy="22" r="4" fill="#C4432B" />
                  <circle cx="150" cy="22" r="12" fill="none" stroke="#C4432B">
                    <animate
                      attributeName="r"
                      values="4;16"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.8;0"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <text x="150" y="12" textAnchor="middle" fill="#C4432B" fontSize="7" fontWeight="bold">CONCENTRATION</text>
                  <text x="150" y="38" textAnchor="middle" fill="#C4432B" fontSize="6">SAME SPONSOR</text>
                </g>

                {/* Levels Labels */}
                <text x="10" y="43" fill="#8A9BAE" fontSize="7" opacity="0.6">SPONSORS</text>
                <text x="10" y="103" fill="#8A9BAE" fontSize="7" opacity="0.6">ENTITIES</text>
                <text x="10" y="163" fill="#8A9BAE" fontSize="7" opacity="0.6">PROPERTIES</text>
              </svg>
            </div>

            {/* Right: narrative */}
            <div className="space-y-6 text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed">
              <p>
                Real estate debt funds operate at the intersection of complex
                sponsor structures and demanding LP reporting. The sponsor on
                this deal owns four other properties in three other funds
                you&apos;ve already lent into. The borrower entity is a
                special-purpose LLC with a holding company two levels up that
                you&apos;ve never seen. The business plan assumes a lease-up
                over fourteen months — but the submarket absorption rate
                suggests eighteen.
              </p>
              <p className="text-charcoal font-semibold text-lg lg:text-xl">
                Converge surfaces this complexity instead of hiding it.
              </p>
              <p>
                Sponsor concentration across your portfolio is visible on every
                new deal. Entity gaps are flagged before commitment. Submarket
                signals are tracked after closing. Your LPs see the same picture
                you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY UNDERWRITER INTELLIGENCE FIRST ─── */}
      <section className="py-16 md:py-24 bg-midnight">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-verified/20 bg-deep-slate p-8 lg:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-verified/8 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="text-verified font-mono text-xs uppercase tracking-widest">
                    Where to start
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-parchment leading-tight">
                    Why Underwriter Intelligence first?
                  </h2>
                  <p className="text-white/60 font-sans text-base leading-relaxed">
                    Debt funds typically lead with Underwriter Intelligence
                    because the value is in the credit decision and the
                    post-close risk visibility. Both live in the underwriting
                    layer. Most funds add Processor Intelligence once volume
                    passes a threshold where manual file preparation becomes the
                    bottleneck.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <Link
                    href="/intelligence/underwriter"
                    className="group/link flex items-center justify-between p-4 rounded-xl border border-verified/20 bg-midnight/40 hover:border-verified/40 hover:bg-midnight/60 transition-all duration-300"
                  >
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-steel mb-1">
                        Start here
                      </div>
                      <div className="text-sm font-medium text-parchment">
                        Underwriter Intelligence
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-verified opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/intelligence/processor"
                    className="group/link flex items-center justify-between p-4 rounded-xl border border-white/5 bg-midnight/20 hover:border-white/10 transition-all duration-300"
                  >
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-steel mb-1">
                        Then add
                      </div>
                      <div className="text-sm font-medium text-parchment/70">
                        Processor Intelligence
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-steel opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                  </Link>
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
                  <div className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-3 tracking-tight">
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
      <RealEstateFundsFAQ />

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
