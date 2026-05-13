import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import PrivateLendersFAQ from "@/components/solutions/PrivateLendersFAQ";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Private Lenders | Solutions | Converge Finance",
  description:
    "Credit intelligence for private real estate lenders. Decide faster and more consistently across bridge, value-add, and ground-up deals without growing your credit team.",
};

const outcomes = [
  {
    stat: "3 days",
    label: "Average credit turn-time on bridge deals (target)",
  },
  {
    stat: "70%+",
    label: "Reduction in credit memo assembly time",
  },
  {
    stat: "Same team",
    label: "More deals reviewed at the same loss rate",
  },
];

const otherSolutions = [
  { title: "Credit Unions", href: "/solutions/credit-unions" },
  { title: "Real Estate Funds", href: "/solutions/real-estate-funds" },
  { title: "Non-bank Lenders", href: "/solutions/non-bank-lenders" },
  { title: "Brokers & Loan Officers", href: "/solutions/brokers" },
];

export default function PrivateLendersPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-midnight border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "Private Lenders" },
              ]}
            />

            <div className="space-y-6">
              {/* Vertical tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8">
                <span className="w-1.5 h-1.5 rounded-full bg-verified" />
                <span className="font-mono text-xs text-verified uppercase tracking-widest">
                  Private Lenders
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wider text-parchment">
                Credit intelligence for private real estate lenders.
              </h1>

              <p className="text-base md:text-lg text-white/60 max-w-3xl leading-relaxed font-light">
                Decide faster and more consistently across bridge, value-add,
                and ground-up deals — without growing your credit team in
                lock-step with your originations.
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
                  Private lending wins on speed and judgment.{" "}
                  <span className="text-verified">
                    Inconsistency kills both.
                  </span>
                </h2>
              </div>

              {/* Animated SVG: variance in credit decisions */}
              <svg
                viewBox="0 0 320 160"
                className="w-full max-w-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid baseline */}
                <line x1="30" y1="130" x2="300" y2="130" stroke="#8A9BAE" strokeWidth="0.5" opacity="0.4" />
                <line x1="30" y1="100" x2="300" y2="100" stroke="#8A9BAE" strokeWidth="0.5" opacity="0.2" />
                <line x1="30" y1="70"  x2="300" y2="70"  stroke="#8A9BAE" strokeWidth="0.5" opacity="0.2" />
                <line x1="30" y1="40"  x2="300" y2="40"  stroke="#8A9BAE" strokeWidth="0.5" opacity="0.2" />

                {/* Without Converge — erratic line */}
                <polyline
                  points="30,90 75,55 120,110 165,45 210,100 255,60 300,95"
                  stroke="#8A9BAE"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;0.9;0.4"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </polyline>
                {/* Dots on erratic line */}
                {[
                  [30, 90], [75, 55], [120, 110], [165, 45], [210, 100], [255, 60], [300, 95]
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3" fill="#8A9BAE" opacity="0.5">
                    <animate
                      attributeName="r"
                      values="3;4.5;3"
                      dur="4s"
                      begin={`${i * 0.3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}

                {/* With Converge — smooth consistent line */}
                <polyline
                  points="30,85 75,82 120,80 165,83 210,81 255,80 300,82"
                  stroke="#0B6B60"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {[
                  [30, 85], [75, 82], [120, 80], [165, 83], [210, 81], [255, 80], [300, 82]
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3.5" fill="#0B6B60">
                    <animate
                      attributeName="r"
                      values="3.5;5;3.5"
                      dur="3s"
                      begin={`${i * 0.25}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}

                {/* Legend */}
                <line x1="30" y1="148" x2="50" y2="148" stroke="#8A9BAE" strokeWidth="2" />
                <text x="55" y="152" fill="#8A9BAE" fontSize="8" opacity="0.7">Without Converge</text>
                <line x1="160" y1="148" x2="180" y2="148" stroke="#0B6B60" strokeWidth="2.5" />
                <text x="185" y="152" fill="#0B6B60" fontSize="8" fontWeight="600">With Converge</text>

                {/* Y axis label */}
                <text
                  x="14"
                  y="90"
                  fill="#8A9BAE"
                  fontSize="7"
                  textAnchor="middle"
                  transform="rotate(-90, 14, 90)"
                  opacity="0.6"
                >
                  Credit consistency
                </text>
              </svg>
            </div>

            {/* Right: narrative */}
            <div className="space-y-6 text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed">
              <p>
                Private lenders compete on turn times and the ability to
                underwrite deals that banks won&apos;t touch. The problem is
                that judgment-led credit is also variance-led credit. Two
                underwriters reviewing the same sponsor on a Tuesday and a
                Thursday can land in different places. That variance shows up
                in your portfolio loss rates two years later.
              </p>
              <p className="text-charcoal font-semibold text-lg lg:text-xl">
                Converge brings consistency to judgment work.
              </p>
              <p>
                The same policy applies to every deal. The same risk signals
                get surfaced every time. Your team still decides — but they
                decide from the same starting line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY UNDERWRITER INTELLIGENCE FIRST ─── */}
      <section className="py-16 md:py-24 bg-midnight">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            {/* Callout card */}
            <div className="relative rounded-2xl border border-verified/20 bg-deep-slate p-8 lg:p-12 overflow-hidden">
              {/* Glow */}
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
                    Private lenders typically start with Underwriter
                    Intelligence. The credit decision is where private lending
                    wins or loses, and it&apos;s where consistency matters most.
                    Once Underwriter Intelligence is live, most teams add
                    Processor Intelligence within the same quarter.
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
                  {/* Animated accent bar */}
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
      <PrivateLendersFAQ />

      {/* ─── BOTTOM: CTA + OTHER SOLUTIONS ─── */}
      <section className="py-16 md:py-24 bg-parchment border-t border-charcoal/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">

            {/* Inline CTA */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Button href="/live-deal" title="See it on a live deal &rarr;" />
              <Button
                type="secondary-light"
                href="/solutions"
                title="Compare all solutions"
              />
            </div>

            {/* Other verticals */}
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
