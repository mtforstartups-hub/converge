export default function FAQ() {
  const faqs = [
    {
      q: "What makes Converge different from generic automation tools?",
      a: "Converge is built specifically for credit underwriting — not general-purpose. We understand entity structures, credit policy requirements, put-back exposure, and document conflicts out of the box. A general-purpose AI tool requires months of prompt engineering to approximate what Converge does on day one.",
    },
    {
      q: "Do we need to replace our existing LOS or CRM?",
      a: "No. Converge integrates into your current systems via API. No rip-and-replace. Your team keeps working as they do today — but with structured, validated outputs flowing into your LOS instead of manually entered data.",
    },
    {
      q: "How do you ensure data security and compliance?",
      a: "We offer fully private deployments — your data never leaves your environment. Built to meet SOC 2, GDPR, and enterprise security standards. Every output is auditable and traceable.",
    },
    {
      q: "Can Converge handle complex or non-standard loans?",
      a: "Yes. CreditOS is configurable to your credit box, document types, and underwriting policies — including asset-backed, bridge, construction, and custom origination workflows.",
    },
    {
      q: "How fast can we see results?",
      a: "Most clients see measurable time savings and increased throughput within the first two to three weeks, even during pilot.",
    },
    {
      q: 'What does "every output is auditable" actually mean?',
      a: 'Every data point Converge produces is linked to the source document that generated it. Every entity map, every conflict resolution, every policy match — traceable. If your credit committee or a regulator asks "where did this come from?", the answer is one click away.',
    },
  ];

  return (
    <section className="w-full bg-[#E9E6E1]">
      <div className="max-w-95/100 md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#0B1B2B] mb-10">
          Frequently asked questions
        </h2>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-black/10">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group py-4"
              open={i === 0} // first one open like your design
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                {/* Question */}
                <span className="text-sm font-medium text-[#0B1B2B]">
                  {faq.q}
                </span>

                {/* Icon */}
                <span className="ml-4 text-lg text-[#1F7A63] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>

              {/* Answer placeholder */}
              <div className="mt-3 text-sm text-[#0B1B2B]/70 leading-relaxed max-w-2xl">
                {/* You’ll replace this */}
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
