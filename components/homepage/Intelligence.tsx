export default function IntelligenceSection() {
  const cards = [
    {
      title: "Loan Officer Intelligence",
      desc: "Borrower coordination and file completeness — intelligently.",
      points: [
        "Tracks required documents across the loan lifecycle",
        "Identifies what is uploaded, what is valid, what is missing",
        "Reduces borrower back-and-forth by surfacing gaps early",
      ],
    },
    {
      title: "Processor Intelligence",
      desc: "Loan file prep without the manual drag — or the errors.",
      points: [
        "Classifies and validates every document in the file",
        "Resolves data conflicts before they become exceptions",
        "Produces structured outputs your LOS can consume",
      ],
    },
    {
      title: "Underwriter Intelligence",
      desc: "Faster, safer credit decisions with every conclusion traced.",
      points: [
        "Reconstructs entity structures in minutes, not days",
        "Matches deals against credit policy automatically",
        "Every output is traceable to a source document",
      ],
    },
  ];

  return (
    <section className="w-full bg-parchment">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
        {/* TOP */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-charcoal/80 mb-4">
            Intelligence at every step
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-deep-slate mb-6 leading-tight">
            Loan origination, intelligently.
          </h2>

          <p className="text-base sm:text-lg text-deep-slate/70 leading-relaxed">
            Three intelligence layers — each built for a specific role in the
            origination process. Not general-purpose. Not a chatbot.
            Purpose-built credit intelligence.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-6 lg:p-7 border border-l-[3px] border-l-verified border-black/5 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-charcoal/70 mb-5 leading-relaxed">
                {card.desc}
              </p>

              {/* Points */}
              <ul className="flex flex-col gap-3 mb-6">
                {card.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm md:text-lg text-charcoal/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-verified" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <span className="text-sm text-verified inline-flex items-center gap-1 cursor-pointer">
                Learn more →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
