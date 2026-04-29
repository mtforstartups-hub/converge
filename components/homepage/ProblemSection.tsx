export default function ProblemSection() {
  const steps = [
    "Document arrives",
    "Conflicts with existing data",
    "Requires interpretation",
    "Updates cascade — silently",
  ];

  return (
    <section className="w-full bg-[#E9E6E1]">
      <div className="max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[10px] tracking-widest uppercase text-[#8A94A6] mb-4">
            The real bottleneck
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1B2B]  mb-6 font-sans">
            Your team doesn’t have a data entry problem. They have a fact
            maintenance problem.
          </h2>

          <p className="text-base text-[#0B1B2B]/70 mb-5 max-w-xl">
            Customers often describe their pain as "too much time entering data
            into LOS systems." That framing leads to the wrong solution.
          </p>

          <p className="text-base text-[#0B1B2B]/70 mb-6 max-w-xl">
            The real problem: as documents arrive over days and weeks, your team
            must continuously interpret, compare, validate, reconcile, and
            update loan data. Every new document can change what was previously
            true.
          </p>

          <p className="text-base font-semibold text-[#0B1B2B]">
            Data entry is linear. Fact maintenance is compounding.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#2F4156] text-white rounded-2xl p-5 sm:p-6 lg:p-8">
          <p className="text-[10px] tracking-widest uppercase text-white/50 mb-6">
            The compounding problem
          </p>

          <div className="divide-y divide-white/10">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/90">{step}</span>
                </div>

                <span className="text-white/40">↓</span>
              </div>
            ))}
          </div>

          {/* Bottom Highlight */}
          <div className="mt-6 bg-[#2A5B6A]/40 border border-[#2A5B6A] rounded-lg p-4 text-sm text-white/80">
            Without a system that maintains truth across the loan file, cost
            increases, throughput slows, and risk accumulates — silently.
          </div>
        </div>
      </div>
    </section>
  );
}
