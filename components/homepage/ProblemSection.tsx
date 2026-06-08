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
            The case
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal  mb-6 ">
            Forming credit understanding by hand is expensive, risky, and <span className="text-verified font-medium italic">impossible to scale.</span>
          </h2>

          <p className="text-lg text-charcoal/70 mb-5 max-w-xl">
            The systems you already run weren't built to change that. Converge was.
          </p>

          {/* <p className="text-lg text-charcoal/70 mb-6 max-w-xl">
            The real problem: as documents arrive over days and weeks, your team
            must continuously interpret, compare, validate, reconcile, and
            update loan data. Every new document can change what was previously
            true.
          </p>

          <p className="text-lg font-semibold text-deep-slate">
            Data entry is linear. Fact maintenance is compounding.
          </p> */}
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
          <div className="mt-6 bg-verified/40 border border-verified rounded-lg p-4 text-sm md:text-base font-semibold text-white/80">
            Without a system that maintains truth across the loan file, cost
            increases, throughput slows, and risk accumulates — silently.
          </div>
        </div>
      </div>
    </section>
  );
}
