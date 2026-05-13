import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import BottomCtaNew from "@/components/BottomCtaNew";
import LoanOfficerCapabilities from "@/components/intelligence/LoanOfficerCapabilities";
import LoanOfficerFAQ from "@/components/intelligence/LoanOfficerFAQ";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Loan Officer Intelligence | Converge Finance",
  description:
    "Win more by packaging stronger, credit-ready deals. Loan Officer Intelligence reads borrower documents the moment they arrive, flags what's missing, and assembles a deal package your credit team will respect.",
};

const relatedLayers = [
  {
    title: "Processor Intelligence",
    description:
      "After Loan Officer Intelligence packages the deal, it flows to Processor Intelligence for normalization.",
    href: "/intelligence/processor",
    icon: Cpu,
  },
  {
    title: "Underwriter Intelligence",
    description:
      "Then to Underwriter Intelligence for credit decisioning. All three share the same CreditOS engine.",
    href: "/intelligence/underwriter",
    icon: ShieldCheck,
  },
];

export default function LoanOfficerPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-midnight border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Intelligence", href: "/intelligence" },
                { label: "Loan Officer" },
              ]}
            />

            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wider text-parchment">
                Win more by packaging stronger, credit-ready deals.
              </h1>

              <p className="text-base md:text-lg text-white/60 max-w-3xl leading-relaxed font-light">
                Loan Officer Intelligence reads the borrower&apos;s documents
                the moment they arrive, flags what&apos;s missing, and assembles
                a deal package your credit team will respect — before
                submission.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button href="/live-deal" title="See it on a live deal &rarr;" />
              <Button
                type="secondary"
                href="/product"
                title="Back to CreditOS"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE ORIGINATOR'S PROBLEM ─── */}
      <section className="py-16 md:py-28 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Title & emphasis */}
            <div className="space-y-6">
              <div className="text-verified font-mono text-sm uppercase tracking-widest">
                The Originator&apos;s Problem
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                You&apos;re competing on speed.{" "}
                <span className="text-verified">
                  Your deal package is slowing you down.
                </span>
              </h2>

              {/* Animated SVG: speed / document flow */}
              <div className="pt-4">
                <svg
                  viewBox="0 0 400 120"
                  className="w-full max-w-md"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Document icons flowing into a funnel */}
                  <rect
                    x="10"
                    y="30"
                    width="40"
                    height="50"
                    rx="4"
                    stroke="#8A9BAE"
                    strokeWidth="1.5"
                    fill="#F4F1EB"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <line
                    x1="15"
                    y1="45"
                    x2="45"
                    y2="45"
                    stroke="#8A9BAE"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <line
                    x1="15"
                    y1="52"
                    x2="40"
                    y2="52"
                    stroke="#8A9BAE"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <line
                    x1="15"
                    y1="59"
                    x2="43"
                    y2="59"
                    stroke="#8A9BAE"
                    strokeWidth="1"
                    opacity="0.5"
                  />

                  <rect
                    x="65"
                    y="20"
                    width="40"
                    height="50"
                    rx="4"
                    stroke="#8A9BAE"
                    strokeWidth="1.5"
                    fill="#F4F1EB"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="3s"
                      begin="0.5s"
                      repeatCount="indefinite"
                    />
                  </rect>

                  <rect
                    x="65"
                    y="45"
                    width="40"
                    height="50"
                    rx="4"
                    stroke="#2D3D4F"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4 3"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.2;0.7;0.2"
                      dur="3s"
                      begin="1s"
                      repeatCount="indefinite"
                    />
                  </rect>

                  {/* Arrow */}
                  <line
                    x1="120"
                    y1="55"
                    x2="180"
                    y2="55"
                    stroke="#0B6B60"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-20"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </line>
                  <polygon
                    points="178,48 192,55 178,62"
                    fill="#0B6B60"
                    opacity="0.8"
                  />

                  {/* Converge processing box */}
                  <rect
                    x="200"
                    y="25"
                    width="80"
                    height="60"
                    rx="8"
                    fill="#0B6B60"
                    opacity="0.12"
                    stroke="#0B6B60"
                    strokeWidth="1.5"
                  />
                  <text
                    x="240"
                    y="52"
                    textAnchor="middle"
                    fill="#0B6B60"
                    fontSize="9"
                    fontWeight="600"
                  >
                    LOAN OFFICER
                  </text>
                  <text
                    x="240"
                    y="64"
                    textAnchor="middle"
                    fill="#0B6B60"
                    fontSize="9"
                    fontWeight="600"
                  >
                    INTELLIGENCE
                  </text>
                  {/* Pulse ring */}
                  <circle cx="240" cy="55" r="35" fill="none" stroke="#0B6B60">
                    <animate
                      attributeName="r"
                      values="30;42"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Arrow out */}
                  <line
                    x1="290"
                    y1="55"
                    x2="330"
                    y2="55"
                    stroke="#0B6B60"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-20"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </line>
                  <polygon
                    points="328,48 342,55 328,62"
                    fill="#0B6B60"
                    opacity="0.8"
                  />

                  {/* Output: clean package */}
                  <rect
                    x="348"
                    y="25"
                    width="45"
                    height="60"
                    rx="6"
                    fill="#0B6B60"
                    opacity="0.08"
                    stroke="#0B6B60"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="356"
                    y1="40"
                    x2="385"
                    y2="40"
                    stroke="#0B6B60"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="356"
                    y1="48"
                    x2="380"
                    y2="48"
                    stroke="#0B6B60"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="356"
                    y1="56"
                    x2="383"
                    y2="56"
                    stroke="#0B6B60"
                    strokeWidth="1.5"
                  />
                  {/* Checkmark */}
                  <circle cx="370" cy="72" r="6" fill="#0B6B60" opacity="0.2" />
                  <polyline
                    points="366,72 369,75 375,69"
                    stroke="#0B6B60"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Right: narrative */}
            <div className="space-y-6 text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed">
              <p>
                Every loan officer knows the pattern. The borrower sends
                documents in twelve emails over four days. Half are wrong
                format, half are missing entities, the rent roll is from 2023.
                You spend Tuesday and Wednesday chasing items. By the time the
                file reaches credit, the broker has already shopped the deal to
                two competitors.
              </p>
              <p className="text-charcoal font-semibold text-lg lg:text-xl">
                Loan Officer Intelligence cuts the chase.
              </p>
              <p>
                The moment documents arrive, the system reads them, identifies
                what&apos;s missing, and lays out exactly what you need from the
                borrower to make the deal credit-ready. One request, sent once,
                with the right list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <LoanOfficerCapabilities />

      {/* ─── WHAT CHANGES ─── */}
      <section className="py-16 md:py-28 bg-parchment relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-verified/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-verified/3 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
              What Changes
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-8 leading-tight">
              Less chasing.{" "}
              <span className="text-verified italic">More closing.</span>
            </h2>

            <div className="bg-white p-8 lg:p-12 rounded-2xl border border-charcoal/5 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              <p className="text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed">
                Loan officers using Loan Officer Intelligence move from reactive
                (&lsquo;chase the borrower&rsquo;) to proactive
                (&lsquo;here&apos;s exactly what we need, by Friday&rsquo;). The
                deal-to-close timeline tightens. The credit team stops sending
                files back. The broker keeps sending you deals because you
                respond fast and your team doesn&apos;t fumble the package.
              </p>

              {/* Before / After visual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="p-6 rounded-xl bg-charcoal/5 border border-charcoal/5">
                  <div className="text-xs uppercase tracking-widest text-steel font-mono mb-3">
                    Before
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Chase borrower across 12 emails",
                      "Generic checklists with wrong items",
                      "Files sent back by credit team",
                      "Deals lost to faster competitors",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-charcoal/60"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-steel/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-verified/5 border border-verified/15">
                  <div className="text-xs uppercase tracking-widest text-verified font-mono mb-3">
                    After
                  </div>
                  <ul className="space-y-3">
                    {[
                      "One precise request, sent once",
                      "Deal-specific missing item lists",
                      "Pre-credit red flags caught early",
                      "Broker sends you more deals",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-charcoal/90 font-medium"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-verified shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <LoanOfficerFAQ />

      {/* ─── RELATED LAYERS ─── */}
      <section className="py-8 md:py-16 bg-parchment border-t border-charcoal/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
              Related Layers
            </div>
            <p className="font-serif text-base lg:text-lg text-charcoal/70 mb-10 leading-relaxed max-w-2xl">
              After Loan Officer Intelligence packages the deal, it flows to
              Processor Intelligence for normalization, then to Underwriter
              Intelligence for credit decisioning. All three share the same
              CreditOS engine.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedLayers.map((layer, index) => (
                <Link
                  key={index}
                  href={layer.href}
                  className="group/layer flex gap-5 p-6 lg:p-8 rounded-2xl border border-charcoal/8 bg-white hover:border-verified/30 hover:shadow-[0_10px_40px_rgba(11,107,96,0.08)] transition-all duration-300"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-verified/10 flex items-center justify-center group-hover/layer:bg-verified/15 transition-colors duration-300">
                      <layer.icon className="w-5 h-5 text-verified" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-medium text-charcoal group-hover/layer:text-verified transition-colors duration-200 flex items-center gap-2">
                      {layer.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/layer:opacity-100 group-hover/layer:translate-x-0 transition-all duration-200" />
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}

      <section className=" bg-parchment pb-10">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-7xl mx-auto ">
            <div className="flex justify-center pt-6 gap-4">
              <Button href="/live-deal" title="See it on a live deal" />

              <Link
                href="/intelligence/processor"
                className={`max-w-fit py-2.25 px-4.5 rounded-lg text-sm text-charcoal border border-steel/60 hover:border-steel duration-300 ease-linear`}
              >
                Read about Processor Intelligence
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
