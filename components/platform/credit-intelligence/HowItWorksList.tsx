export default function HowItWorksList() {
  const steps = [
    {
      title: "Document ingestion",
      description:
        "All loan documents — regardless of format — are ingested from your LOS or document management system. No manual upload required.",
    },
    {
      title: "Structured data extraction",
      description:
        "Triage extracts and structures every relevant data point. Credit Intelligence receives a clean, structured dataset — not raw documents.",
    },
    {
      title: "Cross-document analysis",
      description:
        "The agent cross-references data across all documents simultaneously, surfacing conflicts, gaps, and risk signals that would take hours to find manually.",
    },
    {
      title: "Risk synthesis",
      description:
        "Findings are synthesised into a structured risk summary with priority-ranked flags, each linked back to its source document and page.",
    },
    {
      title: "Credit memo output",
      description:
        "A structured credit intelligence report is delivered — formatted to your institution's template, audit-ready, and fully traceable.",
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-white/5 bg-[#0f172b]">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-font mb-16">
          How it works
        </h2>

        <div className="max-w-3xl space-y-12 relative">
          {/* Vertical connecting line */}
          <div className="absolute top-4 bottom-8 left-4 w-px bg-white/10 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-row gap-6 sm:gap-8 relative z-10"
            >
              <div className="flex-none">
                <div className="w-8 h-8 rounded-full border border-white/20 bg-primary flex items-center justify-center text-xs font-semibold text-accent">
                  {index + 1}
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-base font-semibold text-font mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
