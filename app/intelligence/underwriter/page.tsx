import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import UnderwriterCapabilities from "@/components/intelligence/UnderwriterCapabilities";
import UnderwriterFAQ from "@/components/intelligence/UnderwriterFAQ";
import Link from "next/link";
import {
  ArrowRight,
  FileSearch,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "Underwriter Intelligence | Converge Finance",
  description:
    "Decide with clarity, speed, and confidence. Underwriter Intelligence reconstructs entity structures, matches deals to your credit policy, and shows the reasoning behind every signal.",
};

const relatedLayers = [
  {
    title: "Loan Officer Intelligence",
    description:
      "Packages the deal before it reaches processing.",
    href: "/intelligence/loan-officer",
    icon: FileSearch,
  },
  {
    title: "Processor Intelligence",
    description:
      "Normalizes the file and resolves conflicts before underwriting.",
    href: "/intelligence/processor",
    icon: Cpu,
  },
];

export default function UnderwriterPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-midnight border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Intelligence", href: "/intelligence" },
                { label: "Underwriter" },
              ]}
            />

            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wider text-parchment">
                Decide with clarity, speed, and confidence.
              </h1>

              <p className="text-base md:text-lg text-white/60 max-w-3xl leading-relaxed font-light">
                Underwriter Intelligence reconstructs entity structures, matches
                the deal to your credit policy, and shows you the reasoning
                behind every signal — auditable, traceable, ready for committee.
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

      {/* ─── THE UNDERWRITER'S PROBLEM ─── */}
      <section className="py-16 md:py-28 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl">
            <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
              The Underwriter&apos;s Problem
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-10">
              The hardest part of underwriting isn&apos;t the math.{" "}
              <span className="text-verified">
                It&apos;s the reconstruction.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: narrative */}
            <div className="space-y-6 text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed">
              <p>
                Senior underwriters don&apos;t get paid for spreadsheets. They
                get paid for judgment — the ability to look at a deal, see the
                structure, see the risk, and price it. But most of an
                underwriter&apos;s day isn&apos;t judgment. It&apos;s
                reconstruction: re-reading the documents the processor already
                read, re-mapping the entity tree, re-running the policy match
                against what the credit committee actually approved last quarter.
              </p>
              <p className="text-charcoal font-semibold text-lg lg:text-xl">
                Underwriter Intelligence does the reconstruction. The judgment
                stays with you.
              </p>
            </div>

            {/* Right: animated SVG — judgment vs reconstruction */}
            <div className="flex justify-center lg:justify-end">
              <svg
                viewBox="0 0 340 240"
                className="w-full max-w-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* "Today" side — mostly reconstruction */}
                <text
                  x="85"
                  y="18"
                  textAnchor="middle"
                  fill="#2D3D4F"
                  fontSize="9"
                  fontWeight="600"
                >
                  TODAY
                </text>
                <rect
                  x="30"
                  y="25"
                  width="110"
                  height="200"
                  rx="8"
                  fill="none"
                  stroke="#8A9BAE"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                />
                {/* Reconstruction block — large */}
                <rect
                  x="40"
                  y="35"
                  width="90"
                  height="140"
                  rx="6"
                  fill="#8A9BAE"
                  opacity="0.15"
                  stroke="#8A9BAE"
                  strokeWidth="1"
                />
                <text
                  x="85"
                  y="100"
                  textAnchor="middle"
                  fill="#8A9BAE"
                  fontSize="8"
                  fontWeight="500"
                >
                  RECONSTRUCTION
                </text>
                <text
                  x="85"
                  y="115"
                  textAnchor="middle"
                  fill="#8A9BAE"
                  fontSize="7"
                  opacity="0.7"
                >
                  re-read · re-map · re-run
                </text>
                {/* Judgment block — small */}
                <rect
                  x="40"
                  y="183"
                  width="90"
                  height="35"
                  rx="6"
                  fill="#0B6B60"
                  opacity="0.12"
                  stroke="#0B6B60"
                  strokeWidth="1"
                />
                <text
                  x="85"
                  y="205"
                  textAnchor="middle"
                  fill="#0B6B60"
                  fontSize="8"
                  fontWeight="600"
                >
                  JUDGMENT
                </text>

                {/* Arrow */}
                <line
                  x1="160"
                  y1="125"
                  x2="190"
                  y2="125"
                  stroke="#0B6B60"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-14"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </line>
                <polygon
                  points="188,120 198,125 188,130"
                  fill="#0B6B60"
                  opacity="0.8"
                />

                {/* "With Converge" side — mostly judgment */}
                <text
                  x="260"
                  y="18"
                  textAnchor="middle"
                  fill="#0B6B60"
                  fontSize="9"
                  fontWeight="600"
                >
                  WITH CONVERGE
                </text>
                <rect
                  x="205"
                  y="25"
                  width="110"
                  height="200"
                  rx="8"
                  fill="none"
                  stroke="#0B6B60"
                  strokeWidth="1"
                  opacity="0.4"
                />
                {/* Reconstruction block — small (handled by engine) */}
                <rect
                  x="215"
                  y="35"
                  width="90"
                  height="40"
                  rx="6"
                  fill="#8A9BAE"
                  opacity="0.08"
                  stroke="#8A9BAE"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                />
                <text
                  x="260"
                  y="57"
                  textAnchor="middle"
                  fill="#8A9BAE"
                  fontSize="7"
                  opacity="0.6"
                >
                  AUTOMATED
                </text>
                {/* Judgment block — large */}
                <rect
                  x="215"
                  y="83"
                  width="90"
                  height="135"
                  rx="6"
                  fill="#0B6B60"
                  opacity="0.12"
                  stroke="#0B6B60"
                  strokeWidth="1.5"
                />
                <text
                  x="260"
                  y="140"
                  textAnchor="middle"
                  fill="#0B6B60"
                  fontSize="9"
                  fontWeight="600"
                >
                  JUDGMENT
                </text>
                <text
                  x="260"
                  y="155"
                  textAnchor="middle"
                  fill="#0B6B60"
                  fontSize="7"
                  opacity="0.8"
                >
                  more time · more deals
                </text>

                {/* Pulse on judgment block */}
                <rect
                  x="215"
                  y="83"
                  width="90"
                  height="135"
                  rx="6"
                  fill="none"
                  stroke="#0B6B60"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;0;0.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="rx"
                    values="6;10;6"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <UnderwriterCapabilities />

      {/* ─── WHAT CHANGES ─── */}
      <section className="py-16 md:py-28 bg-parchment relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-verified/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
              What Changes
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-8 leading-tight">
              More deals reviewed. Lower variance.{" "}
              <span className="text-verified italic">Better outcomes.</span>
            </h2>

            <div className="bg-white p-8 lg:p-12 rounded-2xl border border-charcoal/5 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              <p className="text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed mb-10">
                Underwriters using Underwriter Intelligence don&apos;t
                underwrite faster by skipping work. They underwrite faster
                because the reconstruction work is gone. The judgment work —
                which is what actually drives credit quality — gets more time,
                not less. Variance drops because the same policy logic runs on
                every deal. Throughput rises because the same team handles more
                files.
              </p>

              {/* Three outcome pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    label: "Throughput",
                    detail: "Same team, more files",
                    sublabel:
                      "Reconstruction is automated. Judgment time expands.",
                  },
                  {
                    label: "Consistency",
                    detail: "Same policy, every deal",
                    sublabel:
                      "Policy logic runs identically on every file. Variance drops.",
                  },
                  {
                    label: "Quality",
                    detail: "More time on what matters",
                    sublabel:
                      "Underwriters spend time on judgment, not data assembly.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-verified/5 border border-verified/10 text-center"
                  >
                    <div className="font-mono text-xs uppercase tracking-widest text-verified mb-3">
                      {item.label}
                    </div>
                    <div className="font-display text-lg font-medium text-charcoal mb-2">
                      {item.detail}
                    </div>
                    <p className="text-sm text-charcoal/50 leading-relaxed">
                      {item.sublabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <UnderwriterFAQ />

      {/* ─── RELATED LAYERS ─── */}
      <section className="py-16 md:py-24 bg-parchment border-t border-charcoal/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
              Related Layers
            </div>
            <p className="font-serif text-base lg:text-lg text-charcoal/70 mb-10 leading-relaxed max-w-2xl">
              Underwriter Intelligence is the apex layer of CreditOS, but it
              inherits everything Processor Intelligence and Loan Officer
              Intelligence have already prepared. The same engine, surfaced for
              the credit decision.
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

            {/* ─── INLINE CTA ─── */}
            <div className="mt-16 pt-12 border-t border-charcoal/5 flex flex-wrap justify-center gap-4">
              <Button
                href="/live-deal"
                title="See it on a live deal &rarr;"
              />
              <Button
                type="secondary-light"
                href="/product"
                title="See the full CreditOS architecture"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
