export default function KeyCapabilitiesAndOutput() {
  const capabilities = [
    {
      title: "Cross-document risk synthesis",
      description:
        "Analyses data from all documents simultaneously — appraisals, T12s, rent rolls, entity docs — and surfaces conflicts and risk signals across the full file.",
    },
    {
      title: "Conflict detection and flagging",
      description:
        "When data in one document contradicts another, Credit Intelligence flags the discrepancy with source attribution and a severity rating.",
    },
    {
      title: "Risk signal prioritisation",
      description:
        "Findings are ranked by materiality. The most deal-critical risks surface first, with supporting evidence and the relevant policy clause attached.",
    },
    {
      title: "Structured credit memo output",
      description:
        "Output is delivered in a structured format aligned to your institution's credit memo template — not a black-box summary.",
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-white/5 bg-font">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Key capabilities */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-10">
              Key capabilities
            </h2>
            <div className="space-y-8">
              {capabilities.map((item, index) => (
                <div key={index}>
                  <h3 className="text-base font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-primary/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Example output */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-10">
              Example output
            </h2>
            <div className="bg-primary/90 border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col">
              <div className="flex items-center space-x-3 border-b border-white/5 pb-4 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <div className="text-xs font-bold tracking-widest text-white/50 uppercase">
                  Credit Intelligence Report - Synthetic Data
                </div>
              </div>

              <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4">
                Risk Summary
              </div>

              <div className="space-y-3 flex-1">
                {/* HIGH Risk Item */}
                <div className="bg-red-900/10 border border-white/5 rounded-lg p-4 flex items-start space-x-4 border-l-2 border-l-red-900">
                  <div className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold mt-0.5">
                    HIGH
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">
                      NOI variance vs. appraisal
                    </div>
                    <div className="text-xs text-white/50 leading-relaxed">
                      T12 NOI of $284,000 vs. appraisal NOI of $312,000 — 9%
                      gap. Source: Appraisal p.14, T12 Financials p.3.
                    </div>
                  </div>
                </div>

                {/* MED Risk Item */}
                <div className="bg-yellow-900/10 border border-white/5 rounded-lg p-4 flex items-start space-x-4 border-l-2 border-l-yellow-900">
                  <div className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-xs font-bold mt-0.5">
                    MED
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">
                      Entity structure depth
                    </div>
                    <div className="text-xs text-white/50 leading-relaxed">
                      4-layer LLC structure. Ultimate beneficial owner not
                      confirmed in file. Entity Review flagged for follow up.
                    </div>
                  </div>
                </div>

                {/* LOW Risk Item */}
                <div className="bg-[#111e2a] border border-white/5 rounded-lg p-4 flex items-start space-x-4 border-l-2 border-l-white/20">
                  <div className="px-2 py-1 rounded bg-white/10 text-white/60 text-xs font-bold mt-0.5">
                    LOW
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">
                      Occupancy trend
                    </div>
                    <div className="text-xs text-white/50 leading-relaxed">
                      Occupancy 91% (current) vs. 94% (prior year). Within
                      policy tolerance. Monitor on next reporting date.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 mt-6 text-xs text-white/30 font-mono">
                Analysed 847 pages - 8 documents - Generated in 4 min 12 sec -
                Synthetic data only
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
