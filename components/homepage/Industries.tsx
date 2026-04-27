export default function Industries() {
  const items = [
    {
      title: "Private Lenders",
      desc: "Speed to decision at high deal cadence. Converge handles document volume so your team focuses on credit judgment.",
      entry: "Entry: Processor Intelligence + Agentic Reasoning",
    },
    {
      title: "Credit Unions",
      desc: "Policy consistency across loan officers. Member loan quality maintained even as origination volume scales.",
      entry: "Entry: Credit Policy Engine + Intelligence Document Review",
    },
    {
      title: "Real Estate Funds",
      desc: "Entity complexity on multi–borrower structures. Put-back risk eliminated through automated entity reconstruction.",
      entry: "Entry: Agentic Reasoning + Entity Review",
    },
    {
      title: "Non-bank Lenders",
      desc: "Scale origination volume without proportional headcount growth. The full CreditOS platform — all five intelligence layers.",
      entry: "Entry: Full CreditOS platform",
    },
    {
      title: "Brokers & Loan Officers",
      desc: "File completeness before submission. Error-free initial packages that move faster through the lender’s pipeline.",
      entry: "Entry: Loan Officer Intelligence",
    },
  ];

  return (
    <section className="w-full bg-primary text-font">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
        {/* HEADER */}
        <div className="max-w-2xl mb-14">
          <p className="text-[10px] tracking-widest uppercase text-white/40 mb-4">
            Industries
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Built for real estate credit and asset-backed lending.
          </h2>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Laser-focused on originators where document volume, entity
            complexity, time sensitivity, and policy variability make cognitive
            work the bottleneck.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-[#0B1B2B] border border-white/10 rounded-xl p-6 lg:p-7 flex flex-col justify-between min-h-50 transition-all duration-300 ease-out hover:bg-[#11243A] hover:-translate-y-1 hover:shadow-lg hover:border-white/20"
            >
              <div>
                {/* Title */}
                <h3 className="text-base font-semibold mb-3">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  {item.desc}
                </p>
              </div>

              {/* Footer */}
              <p className="text-xs text-[#10a393]">{item.entry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
