import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import BrokersFAQ from "@/components/solutions/BrokersFAQ";
import { ArrowRight, FileSearch } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Brokers & Loan Officers | Solutions | Converge Finance",
  description:
    "Credit-ready deal packages, every time. Package deals your lenders accept on the first pass — winning more, closing faster, building stronger lender relationships.",
};

const outcomes = [
  {
    stat: "First-pass approval",
    label: "lenders accept your files without rework",
  },
  {
    stat: "Hours saved",
    label: "per deal on document chase and packaging",
  },
  {
    stat: "Stronger lender relationships",
    label: "you're the broker that always sends clean files",
  },
];

const otherSolutions = [
  { title: "Private Lenders", href: "/solutions/private-lenders" },
  { title: "Credit Unions", href: "/solutions/credit-unions" },
  { title: "Real Estate Funds", href: "/solutions/real-estate-funds" },
  { title: "Non-bank Lenders", href: "/solutions/non-bank-lenders" },
];

export default function BrokersPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-midnight border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "Brokers & Loan Officers" },
              ]}
            />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8">
                <span className="w-1.5 h-1.5 rounded-full bg-verified" />
                <span className="font-mono text-xs text-verified uppercase tracking-widest">
                  Brokers & Loan Officers
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wider text-parchment">
                Credit-ready deal packages, every time.
              </h1>

              <p className="text-base md:text-lg text-white/60 max-w-3xl leading-relaxed font-light">
                Brokerage shops and loan officer teams use Converge to package
                deals their lenders accept on the first pass — winning more,
                closing faster, building stronger lender relationships.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button href="/live-deal" title="See it on a live deal &rarr;" />
              <Button
                type="secondary"
                href="/contact"
                title="Talk to a deal engineer"
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
                  Your lender relationships are only as good as your{" "}
                  <span className="text-verified">
                    deal packages.
                  </span>
                </h2>
              </div>

              {/* Animated SVG: Messy documents to clean package */}
              <svg
                viewBox="0 0 320 200"
                className="w-full max-w-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* --- Input Side (Messy Documents) --- */}
                {/* Floating messy documents */}
                <g fill="#F4F1EB" stroke="#8A9BAE" strokeWidth="1">
                  <rect x="20" y="40" width="30" height="40" rx="3" transform="rotate(-15, 35, 60)">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <rect x="40" y="20" width="30" height="40" rx="3" transform="rotate(5, 55, 40)">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="15" y="90" width="30" height="40" rx="3" transform="rotate(10, 30, 110)">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" begin="1s" repeatCount="indefinite" />
                  </rect>
                  <rect x="50" y="110" width="30" height="40" rx="3" transform="rotate(-8, 65, 130)">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" begin="0.2s" repeatCount="indefinite" />
                  </rect>
                </g>
                <text x="45" y="180" textAnchor="middle" fill="#8A9BAE" fontSize="8" fontWeight="600">MESSY FILES</text>

                {/* --- Converge Engine --- */}
                {/* Arrows connecting input to engine */}
                <path d="M 85 60 Q 120 70 140 100" fill="none" stroke="#0B6B60" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <path d="M 90 120 Q 120 110 140 100" fill="none" stroke="#0B6B60" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                
                {/* Engine Block */}
                <rect x="130" y="60" width="60" height="80" rx="8" fill="#0B6B60" opacity="0.1" stroke="#0B6B60" strokeWidth="1.5" />
                <text x="160" y="95" textAnchor="middle" fill="#0B6B60" fontSize="7" fontWeight="600">LOAN OFFICER</text>
                <text x="160" y="105" textAnchor="middle" fill="#0B6B60" fontSize="7" fontWeight="600">INTELLIGENCE</text>
                
                {/* Scanning line animation inside engine */}
                <line x1="135" y1="70" x2="185" y2="70" stroke="#0B6B60" strokeWidth="2" opacity="0.6">
                  <animate attributeName="y1" values="70;130;70" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="70;130;70" dur="2.5s" repeatCount="indefinite" />
                </line>

                {/* --- Output Side (Clean Package) --- */}
                {/* Arrow from engine to output */}
                <line x1="200" y1="100" x2="240" y2="100" stroke="#0B6B60" strokeWidth="1.5" markerEnd="url(#arrow-green)" />
                
                {/* Clean organized folder/package */}
                <g transform="translate(245, 65)">
                  {/* Back of folder */}
                  <path d="M 0 10 L 15 10 L 20 15 L 45 15 L 45 65 L 0 65 Z" fill="#0B6B60" opacity="0.1" stroke="#0B6B60" strokeWidth="1.5" strokeLinejoin="round" />
                  {/* Documents neatly inside */}
                  <rect x="5" y="20" width="35" height="40" fill="#F4F1EB" stroke="#0B6B60" strokeWidth="1" />
                  <line x1="10" y1="28" x2="35" y2="28" stroke="#0B6B60" strokeWidth="1" opacity="0.4" />
                  <line x1="10" y1="36" x2="30" y2="36" stroke="#0B6B60" strokeWidth="1" opacity="0.4" />
                  {/* Front of folder */}
                  <path d="M 0 25 L 45 25 L 45 65 L 0 65 Z" fill="#F4F1EB" stroke="#0B6B60" strokeWidth="1.5" strokeLinejoin="round" />
                  {/* Success checkmark floating */}
                  <circle cx="40" cy="55" r="8" fill="#0B6B60" />
                  <path d="M 37 55 L 39 57 L 43 52" fill="none" stroke="#F4F1EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <text x="267" y="150" textAnchor="middle" fill="#0B6B60" fontSize="8" fontWeight="600">CREDIT-READY</text>
                <text x="267" y="160" textAnchor="middle" fill="#0B6B60" fontSize="8" fontWeight="600">PACKAGE</text>

                <defs>
                  <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#0B6B60" />
                  </marker>
                </defs>
              </svg>
            </div>

            {/* Right: narrative */}
            <div className="space-y-6 text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed">
              <p>
                Brokers and loan officers know the truth: lenders don&apos;t
                fall in love with brokers, they fall in love with files. Send a
                clean, credit-ready package and you build a relationship that
                lasts. Send a messy package and your next deal goes to the back
                of the queue. The problem is that producing a credit-ready
                package is hours of work per deal — and the work is the same
                boring chase every time.
              </p>
              <p className="text-charcoal font-semibold text-lg lg:text-xl">
                Loan Officer Intelligence does the chase.
              </p>
              <p>
                Your borrower&apos;s documents get read the moment they arrive.
                Missing items are surfaced immediately. The package that lands
                with your lender is the package they hoped you&apos;d send.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY LOAN OFFICER INTELLIGENCE FIRST ─── */}
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
                    Why Loan Officer Intelligence first?
                  </h2>
                  <p className="text-white/60 font-sans text-base leading-relaxed">
                    For brokers and loan officer teams, the entire value of
                    CreditOS surfaces in Loan Officer Intelligence. The
                    downstream layers are valuable to your lender partners —
                    and most brokers find their lender relationships strengthen
                    materially when the lender starts seeing better files coming
                    in.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4">
                  <Link
                    href="/intelligence/loan-officer"
                    className="group/link flex items-center justify-between p-4 rounded-xl border border-verified/20 bg-midnight/40 hover:border-verified/40 hover:bg-midnight/60 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FileSearch className="w-3 h-3 text-verified" />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-verified">
                          Your Layer
                        </span>
                      </div>
                      <div className="text-sm font-medium text-parchment">
                        Loan Officer Intelligence
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-verified opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
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
      <BrokersFAQ />

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
