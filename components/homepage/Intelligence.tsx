export default function IntelligenceSection() {
  const cards = [
    {
      title: "Loan Officer Intelligence",
      sub: "For loan officers, originators, and broker partners.",
      desc: "Win more by packaging stronger, credit-ready deals. Loan Officer Intelligence reads the borrower's documents the moment they arrive, flags missing items, and assembles a deal package that meets your credit team's standards before submission.",
    },
    {
      title: "Processor Intelligence",
      sub: "For processors and credit coordinators.",
      desc: "Move faster with fewer handoffs and cleaner files. Processor Intelligence normalizes data across every document, resolves conflicts, and produces a file the underwriter doesn't have to rebuild.",
    },
    {
      title: "Underwriter Intelligence",
      sub: "For underwriters and credit approvers.",
      desc: "Decide with clarity, speed, and confidence. Underwriter Intelligence reconstructs entity structures, matches the deal to your credit policy, and shows you the reasoning behind every signal — auditable, traceable, ready for committee.",
    },
  ];

  return (
    <section className="w-full bg-midnight">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
        {/* TOP */}
        <div className="max-w-7xl mb-12 lg:mb-16">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-steel mb-4">
            Intelligence at every step
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-parchment mb-6 leading-tight">
            Three layers of intelligence. One credit decision.
          </h2>

          <p className="text-base sm:text-lg text-steel leading-relaxed">
            {/* Three intelligence layers — each built for a specific role in the
            origination process. Not general-purpose. Not a chatbot.
            Purpose-built credit intelligence. */}
            CreditOS surfaces in your workflow as three intelligence layers —
            one for each role in the credit chain. Each layer is purpose-built
            for what that role actually does.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-deep-slate rounded-xl p-6 lg:p-7 border border-l-[3px] border-l-verified border-deep-slate/5 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-parchment mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-steel mb-5 leading-relaxed">
                {card.sub}
              </p>

              <p className="text-sm md:text-base text-parchment mb-5 leading-relaxed">
                {card.desc}
              </p>

              {/* Points */}
              {/* <ul className="flex flex-col gap-3 mb-6">
                {card.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm md:text-lg text-charcoal/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-verified" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul> */}

              {/* Link */}
              <span className="text-sm text-verified inline-flex items-center gap-1 cursor-pointer">
                Learn more →
              </span>
            </div>
          ))}
        </div>

        <div className="text-base md:text-xl text-steel">
          Each layer carries the same intelligence engine. The difference is
          what gets surfaced, and to whom.
        </div>
      </div>
    </section>
  );
}
