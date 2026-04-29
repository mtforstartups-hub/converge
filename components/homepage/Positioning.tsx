export default function Positioning() {
  const items = [
    {
      title: "Not just extraction.",
      desc: "We do not just extract fields. We determine what is correct, what changed, what conflicts, what is missing, and what requires review. The difference between reading a document and understanding a loan file.",
    },
    {
      title: "Not just workflow.",
      desc: "We are not a task management system. We maintain truth across the loan file — continuously updating understanding as documents arrive, facts change, and signals emerge.",
    },
    {
      title: "Not just AI.",
      desc: "We are built specifically for credit underwriting, document-heavy workflows, policy-based decisioning, and auditability. Uploading a loan file to a general-purpose LLM is not credit intelligence.",
    },
  ];

  return (
    <section className="w-full bg-[#16263A] text-white">
      <div className="max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
        {/* HEADER */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Not extraction. Not workflow. Not generic AI.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              {/* Top divider */}
              <div className="h-px w-full bg-white/10 mb-4" />

              {/* Title */}
              <h3 className="text-base font-semibold">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
