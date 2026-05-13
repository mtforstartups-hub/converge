import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import ProcessorCapabilities from "@/components/intelligence/ProcessorCapabilities";
import ProcessorFAQ from "@/components/intelligence/ProcessorFAQ";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  FileSearch,
} from "lucide-react";

export const metadata = {
  title: "Processor Intelligence | Converge Finance",
  description:
    "Move faster with fewer handoffs and cleaner files. Processor Intelligence normalizes data, resolves conflicts, and produces a file your credit team doesn't have to rebuild.",
};

const relatedLayers = [
  {
    title: "Loan Officer Intelligence",
    description:
      "Loan Officer Intelligence packages the deal before it reaches processing.",
    href: "/intelligence/loan-officer",
    icon: FileSearch,
  },
  {
    title: "Underwriter Intelligence",
    description:
      "Files cleaned by Processor Intelligence flow directly to Underwriter Intelligence for credit decisioning.",
    href: "/intelligence/underwriter",
    icon: ShieldCheck,
  },
];

export default function ProcessorPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-midnight border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Intelligence", href: "/intelligence" },
                { label: "Processor" },
              ]}
            />

            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wider text-parchment">
                Move faster with fewer handoffs and cleaner files.
              </h1>

              <p className="text-base md:text-lg text-white/60 max-w-3xl leading-relaxed font-light">
                Processor Intelligence normalizes data across every document,
                resolves the conflicts before they reach the underwriter, and
                produces a file your credit team doesn&apos;t have to rebuild.
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

      {/* ─── THE PROCESSOR'S PROBLEM ─── */}
      <section className="py-16 md:py-28 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left: Title */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-verified font-mono text-sm uppercase tracking-widest">
                The Processor&apos;s Problem
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                You&apos;re the glue between two teams.{" "}
                <span className="text-verified">
                  The job is mostly translation.
                </span>
              </h2>

              {/* Animated SVG: data conflict resolution flow */}
              <div className="pt-6">
                <svg
                  viewBox="0 0 360 200"
                  className="w-full max-w-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Source documents with conflicting numbers */}
                  <rect
                    x="10"
                    y="10"
                    width="90"
                    height="55"
                    rx="6"
                    fill="#F4F1EB"
                    stroke="#8A9BAE"
                    strokeWidth="1.2"
                  />
                  <text x="55" y="30" textAnchor="middle" fill="#2D3D4F" fontSize="7" fontWeight="600">
                    RENT ROLL
                  </text>
                  <text x="55" y="48" textAnchor="middle" fill="#0B6B60" fontSize="10" fontWeight="700">
                    $48,000/mo
                  </text>
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="4s"
                    repeatCount="indefinite"
                  />

                  <rect
                    x="10"
                    y="75"
                    width="90"
                    height="55"
                    rx="6"
                    fill="#F4F1EB"
                    stroke="#8A9BAE"
                    strokeWidth="1.2"
                  />
                  <text x="55" y="95" textAnchor="middle" fill="#2D3D4F" fontSize="7" fontWeight="600">
                    OP STATEMENT
                  </text>
                  <text x="55" y="113" textAnchor="middle" fill="#C4432B" fontSize="10" fontWeight="700">
                    $51,200/mo
                  </text>

                  <rect
                    x="10"
                    y="140"
                    width="90"
                    height="55"
                    rx="6"
                    fill="#F4F1EB"
                    stroke="#8A9BAE"
                    strokeWidth="1.2"
                  />
                  <text x="55" y="160" textAnchor="middle" fill="#2D3D4F" fontSize="7" fontWeight="600">
                    TAX RETURN
                  </text>
                  <text x="55" y="178" textAnchor="middle" fill="#8A9BAE" fontSize="10" fontWeight="700">
                    $574K/yr
                  </text>

                  {/* Converging arrows */}
                  {[37, 102, 167].map((y, i) => (
                    <line
                      key={i}
                      x1="105"
                      y1={y}
                      x2="150"
                      y2="100"
                      stroke="#0B6B60"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;-14"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </line>
                  ))}

                  {/* Processor Intelligence box */}
                  <rect
                    x="155"
                    y="65"
                    width="90"
                    height="70"
                    rx="10"
                    fill="#0B6B60"
                    opacity="0.1"
                    stroke="#0B6B60"
                    strokeWidth="1.5"
                  />
                  <text x="200" y="95" textAnchor="middle" fill="#0B6B60" fontSize="7.5" fontWeight="600">
                    PROCESSOR
                  </text>
                  <text x="200" y="108" textAnchor="middle" fill="#0B6B60" fontSize="7.5" fontWeight="600">
                    INTELLIGENCE
                  </text>

                  {/* Pulse rings */}
                  <circle cx="200" cy="100" r="40" fill="none" stroke="#0B6B60">
                    <animate attributeName="r" values="38;52" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0" dur="2.5s" repeatCount="indefinite" />
                  </circle>

                  {/* Arrow out */}
                  <line
                    x1="250"
                    y1="100"
                    x2="295"
                    y2="100"
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
                  <polygon points="293,93 307,100 293,107" fill="#0B6B60" opacity="0.8" />

                  {/* Output: single source */}
                  <rect
                    x="310"
                    y="70"
                    width="45"
                    height="60"
                    rx="6"
                    fill="#0B6B60"
                    opacity="0.08"
                    stroke="#0B6B60"
                    strokeWidth="1.5"
                  />
                  <text x="332" y="93" textAnchor="middle" fill="#0B6B60" fontSize="7" fontWeight="600">
                    SINGLE
                  </text>
                  <text x="332" y="105" textAnchor="middle" fill="#0B6B60" fontSize="7" fontWeight="600">
                    SOURCE
                  </text>
                  {/* Checkmark */}
                  <circle cx="332" cy="118" r="6" fill="#0B6B60" opacity="0.2" />
                  <polyline
                    points="328,118 331,121 337,115"
                    stroke="#0B6B60"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Right: narrative */}
            <div className="lg:col-span-7 space-y-6 text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed">
              <p>
                Processing real estate-backed loans means reconciling a rent
                roll that says $48,000 monthly with an operating statement that
                says $51,200 monthly with a tax return that says $574,000
                annual. It means tracing a guarantor&apos;s interest through
                three LLCs and confirming the personal financial statement
                actually nets out. It means catching that the appraisal says
                &ldquo;multifamily&rdquo; but the deal sheet says
                &ldquo;mixed-use.&rdquo;
              </p>
              <p className="text-charcoal font-semibold text-lg lg:text-xl">
                None of that is automatable by template. It requires reasoning.
              </p>
              <p>
                Processor Intelligence is the reasoning layer that does the
                translation before it reaches the underwriter — and shows the
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <ProcessorCapabilities />

      {/* ─── WHAT CHANGES ─── */}
      <section className="py-16 md:py-28 bg-parchment relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-verified/5 rounded-full blur-3xl -ml-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-verified/3 rounded-full blur-3xl -mr-32 -mb-32 pointer-events-none" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
              What Changes
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-8 leading-tight">
              The handoff to underwriting stops being{" "}
              <span className="text-verified italic">a re-do.</span>
            </h2>

            <div className="bg-white p-8 lg:p-12 rounded-2xl border border-charcoal/5 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              <p className="text-charcoal/80 font-serif text-base lg:text-lg leading-relaxed mb-10">
                Today, underwriters open processor-prepared files and start over
                — re-reading the documents, re-checking the numbers, rebuilding
                the entity tree from scratch. With Processor Intelligence, the
                file underwriting receives is structured, normalized, and
                conflict-free. They start from the credit decision, not the
                re-do.
              </p>

              {/* Before / After flow */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
                {/* Before */}
                <div className="p-6 rounded-xl bg-charcoal/5 border border-charcoal/5">
                  <div className="text-xs uppercase tracking-widest text-steel font-mono mb-4">
                    Without Processor Intelligence
                  </div>
                  <div className="space-y-3">
                    {[
                      "Rent roll ≠ Op statement ≠ Tax return",
                      "Entity tree rebuilt from scratch",
                      "Underwriter re-reads every document",
                      "Handoff = restart",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-charcoal/60"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-steel/40 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow divider */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-verified" />
                  </div>
                </div>

                {/* After */}
                <div className="p-6 rounded-xl bg-verified/5 border border-verified/15">
                  <div className="text-xs uppercase tracking-widest text-verified font-mono mb-4">
                    With Processor Intelligence
                  </div>
                  <div className="space-y-3">
                    {[
                      "One number per field, source linked",
                      "Entity map built and verified",
                      "Pre-underwriting QC complete",
                      "Handoff = credit decision",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-charcoal/90 font-medium"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-verified shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <ProcessorFAQ />

      {/* ─── RELATED LAYERS ─── */}
      <section className="py-16 md:py-24 bg-parchment border-t border-charcoal/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-verified font-mono text-sm uppercase tracking-widest mb-4">
              Related Layers
            </div>
            <p className="font-serif text-base lg:text-lg text-charcoal/70 mb-10 leading-relaxed max-w-2xl">
              Files cleaned by Processor Intelligence flow directly to
              Underwriter Intelligence for credit decisioning. Both share the
              same CreditOS engine — there&apos;s no re-extraction at the
              underwriting step.
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
                href="/intelligence/underwriter"
                title="Read about Underwriter Intelligence"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
