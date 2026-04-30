export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Documents arrive",
      desc: "Converge classifies every document, extracts structured data, and links each data point to its source — across the entire loan file.",
    },
    {
      id: "02",
      title: "Evidence is formed",
      desc: "Conflicting information is identified and resolved. Missing documents are flagged. Entity structures are reconstructed.",
    },
    {
      id: "03",
      title: "Facts are validated",
      desc: "Every fact is cross–referenced against the loan file. What changed, what conflicts, what is missing, what requires review.",
    },
    {
      id: "04",
      title: "Decisions are ready",
      desc: "The deal is matched against credit policy. Exceptions are surfaced. A credit-ready output is produced — fully auditable.",
    },
  ];

  return (
    <section className="w-full bg-primary text-font">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
        {/* TOP TEXT */}
        <div className="text-center mx-auto mb-14">
          <p className="text-base font-semibold tracking-widest uppercase text-font/80 mb-4">
            How it works
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            Documents → Evidence → Facts → Decisions
          </h2>

          <p className="text-base sm:text-lg text-font/60 leading-relaxed">
            Converge reads your loan files, extracts and validates key
            information, flags risks, compares the deal to your credit policy,
            and shows exactly where every conclusion comes from.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-font/10 rounded-xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="bg-[#0B1B2B] p-6 lg:p-7 flex flex-col gap-4 border-b sm:border-b-0 sm:border-r border-font/10 last:border-r-0"
            >
              {/* Number */}
              <span className="text-sm text-font/50">{step.id}</span>

              {/* Title */}
              <h3 className="text-base font-semibold text-font">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-font/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
