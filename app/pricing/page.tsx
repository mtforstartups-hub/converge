"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { Check, ChevronDown } from "lucide-react";

const tiers = [
  {
    name: "Foundation",
    subtitle: "For lenders starting with a single Intelligence Layer.",
    features: [
      "One Intelligence Layer of your choice (Loan Officer, Processor, or Underwriter)",
      "Up to 200 deals per year",
      "Standard implementation (4–6 weeks)",
      "Email and shared-channel support",
      "Standard SOC 2 audit access",
    ],
    pricing: "Talk to sales for tier pricing.",
  },
  {
    name: "Growth",
    subtitle:
      "For lenders deploying two or three Intelligence Layers across the originations pipeline.",
    features: [
      "Two or three Intelligence Layers",
      "Up to 1,000 deals per year",
      "Standard implementation with dedicated implementation engineer",
      "Priority support with named customer success manager",
      "Quarterly business reviews",
    ],
    pricing: "Talk to sales for tier pricing.",
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle:
      "For institutions with custom compliance, deployment, or volume needs.",
    features: [
      "Full CreditOS deployment, all three Intelligence Layers",
      "Unlimited deal volume",
      "Single-tenant deployment available",
      "Custom integration and policy encoding",
      "Dedicated technical account team",
      "SLA-backed support",
    ],
    pricing:
      "Custom quote based on volume, integration scope, and compliance requirements.",
  },
];

const faqs = [
  {
    question: "How does pricing scale with volume?",
    answer:
      "Per-deal pricing tiers down as volume increases. Annual contracts include a volume commitment with overage pricing pre-agreed.",
  },
  {
    question: "Are there setup fees?",
    answer:
      "Standard implementations have a one-time implementation fee that covers integration with your LOS and credit policy encoding. Enterprise deployments are scoped individually.",
  },
  {
    question: "What's the contract term?",
    answer:
      "Annual contracts are standard. Multi-year terms are available with pricing benefits.",
  },
  {
    question: "Can we start with one Intelligence Layer?",
    answer:
      "Yes. The Foundation tier supports a single-layer deployment. Most teams expand to additional layers within the first two quarters.",
  },
  {
    question: "Do you charge per document or per page?",
    answer:
      "No. Pricing is per deal, regardless of document count or page count.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-charcoal/10">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal group-hover:text-verified transition-colors pr-8">
          {question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 text-charcoal/40 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-lg text-charcoal/70 font-sans leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen relative bg-midnight text-white overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5 relative">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-verified/5 rounded-full blur-[120px] pointer-events-none -mt-40" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col space-y-6 max-w-4xl text-center mx-auto items-center">
            <Breadcrumbs items={[{ label: "Pricing" }]} />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-verified/30 bg-verified/8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-verified animate-pulse" />
              <span className="font-mono text-xs text-verified uppercase tracking-widest">
                Pricing
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
              Pricing that scales with how you originate.
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed font-light mt-4">
              Three tiers — Foundation, Growth, Enterprise — built around the
              Intelligence Layers you deploy and the volume you originate.
              Custom pricing for institutions with specific compliance or
              deployment needs.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRICING PHILOSOPHY ─── */}
      <section className="py-16 md:py-24 bg-deep-slate border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-medium text-parchment mb-6">
              Our Pricing Philosophy
            </h2>
            <p className="text-xl text-white/70 leading-relaxed font-serif">
              Converge prices on a per-deal basis with platform licenses for
              larger deployments. The intent is to align Converge&apos;s
              incentives with yours: we make more when you originate more. There
              are no per-seat fees. There is no document-page metering.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TIERS GRID ─── */}
      <section className="py-20 md:py-32 bg-midnight relative z-10">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-8 md:p-10 rounded-2xl border ${
                  tier.highlighted
                    ? "border-verified/40 bg-white/[0.03] shadow-2xl shadow-verified/5"
                    : "border-white/10 bg-midnight/40"
                } transition-all duration-300`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3.5">
                    <span className="bg-verified text-midnight font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-display text-3xl font-bold text-parchment mb-4">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed min-h-[40px]">
                    {tier.subtitle}
                  </p>
                </div>

                <div className="mb-10 pb-8 border-b border-white/10">
                  <div className="text-sm font-medium text-white/80 italic mb-1">
                    Pricing structure:
                  </div>
                  <div className="text-lg font-display font-medium text-verified">
                    {tier.pricing}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">
                    What&apos;s included
                  </div>
                  <ul className="flex flex-col gap-4">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-verified/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-verified" />
                        </div>
                        <span className="text-sm text-white/70 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-6">
                  <Button
                    title="Get a custom quote"
                    href="/contact"
                    // className="w-full justify-center"
                    type={tier.highlighted ? "primary" : "secondary"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="py-20 md:py-32 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs uppercase tracking-widest text-verified mb-4">
                Common Questions
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
                Pricing FAQ
              </h2>
              <p className="text-lg text-charcoal/60 font-sans mb-8">
                Everything you need to know about how Converge prices its
                intelligence layers and platform licenses.
              </p>
              <div className="hidden lg:block">
                <Button
                  title="Talk to sales"
                  href="/contact"
                  type="secondary-light"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="flex flex-col border-t border-charcoal/10">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  />
                ))}
              </div>
              <div className="mt-10 lg:hidden">
                <Button
                  title="Talk to sales"
                  href="/contact"
                  type="secondary-light"
                  // className="w-full justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-20 md:py-32 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-verified/10 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-parchment mb-6 leading-tight">
            Ready to scale your originations?
          </h2>
          <p className="text-xl text-white/60 mb-12 font-sans max-w-2xl mx-auto">
            Get a precise quote based on your loan volume, integration scope,
            and specific compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" title="Get a custom quote" />
            <Button type="secondary" href="/contact" title="Talk to sales" />
          </div>
        </div>
      </section>
    </div>
  );
}
