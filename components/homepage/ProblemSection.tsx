export default function ProblemSection() {
  const steps = [
    "Document arrives",
    "Conflicts with existing data",
    "Requires interpretation",
    "Updates cascade — silently",
  ];

  return (
    <section className="w-full bg-parchment">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-charcoal/80 mb-4">
            {/* The real bottleneck */}
            THE MARKET TRUTH
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-charcoal mb-6 ">
            {/* Your team doesn’t have a data entry problem. They have a fact
            maintenance problem. */}
            Lenders don&apos;t lack data. They lack clarity.
          </h2>

          <p className="text-lg text-charcoal/70 mb-5 max-w-xl">
            {/* Customers often describe their pain as &quot;too much time entering
            data into LOS systems.&quot; That framing leads to the wrong
            solution. */}
            A single commercial real estate loan touches twenty to fifty
            distinct work streams. Bank statements arrive in three formats.
            Entity structures span four affiliated LLCs and a holding company.
            Operating agreements contradict the rent roll. Borrower disclosures
            omit a guarantor obligation buried on page sixty-three.
          </p>

          <p className="text-lg text-charcoal/70 mb-6 max-w-xl">
            Every credit team in the country processes the same chaos by hand.
            Junior analysts spend hours assembling what the underwriter needs to
            see. Senior underwriters spend hours re-checking what the analyst
            missed. The loan that should have closed in ten days closes in
            thirty — or doesn&apos;t close at all.
          </p>

          <p className="text-lg font-medium text-deep-slate">
            Converge fixes the cognitive bottleneck. Documents in, structured
            decisions out, before the loan ever touches your LOS.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-charcoal text-white rounded-2xl p-5 sm:p-6 lg:p-8">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-white/80 mb-6">
            The compounding problem
          </p>

          <div className="divide-y divide-white/10">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-shadow-white">{step}</span>
                </div>

                <span className="text-white/40">↓</span>
              </div>
            ))}
          </div>

          {/* Bottom Highlight */}
          <div className="mt-6 bg-verified/40 border border-verified rounded-lg p-4 text-sm md:text-base font-medium text-white/80">
            Without a system that maintains truth across the loan file, cost
            increases, throughput slows, and risk accumulates — silently.
          </div>
        </div>
      </div>
    </section>
  );
}
