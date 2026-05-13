import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import CreditUnionsFAQ from "@/components/solutions/CreditUnionsFAQ";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Credit Unions | Solutions | Converge Finance",
  description:
    "Underwrite member real estate loans with the speed of a specialty lender and the rigour your examiners expect — without expanding your credit team.",
};

const outcomes = [
  {
    stat: "2–3×",
    label: "Increase in commercial files processed per underwriter",
  },
  {
    stat: "100%",
    label: "Audit trail coverage for every credit decision",
  },
  {
    stat: "Same FTE",
    label: "More volume without examiner concern",
  },
];

const otherSolutions = [
  { title: "Private Lenders", href: "/solutions/private-lenders" },
  { title: "Real Estate Funds", href: "/solutions/real-estate-funds" },
  { title: "Non-bank Lenders", href: "/solutions/non-bank-lenders" },
  { title: "Brokers & Loan Officers", href: "/solutions/brokers" },
];

export default function CreditUnionsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-midnight border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "Credit Unions" },
              ]}
            />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8">
                <span className="w-1.5 h-1.5 rounded-full bg-verified" />
                <span className="font-mono text-xs text-verified uppercase tracking-widest">
                  Credit Unions
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wider text-parchment">
                Credit intelligence for credit unions in commercial real estate.
              </h1>

              <p className="text-base md:text-lg text-white/60 max-w-3xl leading-relaxed font-light">
                Underwrite member real estate loans with the speed of a
                specialty lender and the rigour your examiners expect —
                without expanding your credit team.
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
                  CRE volume is growing.{" "}
                  <span className="text-verified">
                    Your credit team isn&apos;t.
                  </span>
                </h2>
              </div>

              {/* Animated SVG: capacity crunch — growing bar vs flat team line */}
              <svg
                viewBox="0 0 320 180"
                className="w-full max-w-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Baseline */}
                <line x1="40" y1="148" x2="300" y2="148" stroke="#8A9BAE" strokeWidth="0.5" opacity="0.4" />

                {/* X axis labels */}
                {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
                  <text
                    key={q}
                    x={75 + i * 65}
                    y="162"
                    textAnchor="middle"
                    fill="#8A9BAE"
                    fontSize="8"
                    opacity="0.6"
                  >
                    {q}
                  </text>
                ))}

                {/* Growing volume bars */}
                {[
                  { x: 55,  h: 40, delay: "0s"    },
                  { x: 120, h: 70, delay: "0.15s"  },
                  { x: 185, h: 105, delay: "0.3s"  },
                  { x: 250, h: 140, delay: "0.45s" },
                ].map((bar, i) => (
                  <g key={i}>
                    <rect
                      x={bar.x - 18}
                      y={148 - bar.h}
                      width={36}
                      height={bar.h}
                      rx="4"
                      fill="#8A9BAE"
                      opacity="0.18"
                    />
                    {/* Animated fill */}
                    <rect
                      x={bar.x - 18}
                      y={148 - bar.h}
                      width={36}
                      height={bar.h}
                      rx="4"
                      fill="#8A9BAE"
                      opacity="0.1"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.1;0.25;0.1"
                        dur="3s"
                        begin={bar.delay}
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                ))}

                {/* "Volume" label */}
                <text x="255" y="148 " dy="-145" textAnchor="middle" fill="#8A9BAE" fontSize="7.5" opacity="0.7">CRE Volume</text>

                {/* Flat team capacity line */}
                <line
                  x1="40"
                  y1="110"
                  x2="295"
                  y2="110"
                  stroke="#0B6B60"
                  strokeWidth="2.5"
                  strokeDasharray="0"
                />
                {/* Animated pulse dot on team line */}
                <circle cx="40" cy="110" r="4" fill="#0B6B60">
                  <animate
                    attributeName="cx"
                    values="40;295;40"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;0.4;1"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* "Credit Team Capacity" label */}
                <text x="168" y="104" textAnchor="middle" fill="#0B6B60" fontSize="7.5" fontWeight="600">
                  Credit team capacity
                </text>

                {/* Gap indicator — the space between Q3/Q4 bar top and the team line */}
                <line
                  x1="296"
                  y1="8"
                  x2="296"
                  y2="110"
                  stroke="#0B6B60"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                  opacity="0.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </line>
                <text x="302" y="60" fill="#0B6B60" fontSize="7" fontWeight="600" opacity="0.8">GAP</text>

                {/* Legend */}
                <rect x="40" y="170" width="12" height="8" rx="2" fill="#8A9BAE" opacity="0.4" />
                <text x="56" y="178" fill="#8A9BAE" fontSize="7.5" opacity="0.7">CRE volume</text>
                <line x1="140" y1="174" x2="155" y2="174" stroke="#0B6B60" strokeWidth="2.5" />
                <text x="160" y="178" fill="#0B6B60" fontSize="7.5" fontWeight="600">Team capacity</text>
              </svg>
            </div>

            {/* Right: narrative */}
            <div className="space-y-6 text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed">
              <p>
                Most credit unions building a commercial real estate book are
                running it through a credit team that was built for member auto
                loans and small-business lending. Manual review is the default.
                Every file gets the same line-by-line treatment, which means
                small deals consume the same hours as large deals. Cost-to-originate
                is high. Examiner expectations are higher.
              </p>
              <p className="text-charcoal font-semibold text-lg lg:text-xl">
                Converge handles the manual review work.
              </p>
              <p>
                Document extraction, entity reconstruction, policy match — so
                your credit team can focus on the deals and exceptions that
                actually need their judgment. The audit trail satisfies
                examiners by design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY PROCESSOR INTELLIGENCE FIRST ─── */}
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
                    Why Processor Intelligence first?
                  </h2>
                  <p className="text-white/60 font-sans text-base leading-relaxed">
                    Credit unions typically start with Processor Intelligence
                    because the bottleneck is rarely the credit decision itself
                    — it&apos;s the manual file preparation in front of it.
                    Processor Intelligence cuts the preparation work and routes
                    a clean file to whichever underwriter is on rotation.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <Link
                    href="/intelligence/processor"
                    className="group/link flex items-center justify-between p-4 rounded-xl border border-verified/20 bg-midnight/40 hover:border-verified/40 hover:bg-midnight/60 transition-all duration-300"
                  >
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-steel mb-1">
                        Start here
                      </div>
                      <div className="text-sm font-medium text-parchment">
                        Processor Intelligence
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-verified opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/intelligence/underwriter"
                    className="group/link flex items-center justify-between p-4 rounded-xl border border-white/5 bg-midnight/20 hover:border-white/10 transition-all duration-300"
                  >
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-steel mb-1">
                        Then add
                      </div>
                      <div className="text-sm font-medium text-parchment/70">
                        Underwriter Intelligence
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
                  <div className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-3 tracking-tight">
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
      <CreditUnionsFAQ />

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
