import Button from "../ui/Button";

export default function PlatformSection() {
  const items = [
    {
      id: "01",
      title: "Integration layer",
      desc: "Connects to your LOS, CRM, Google Drive, SharePoint. All loan documents into one system. No rip-and-replace.",
    },
    {
      id: "02",
      title: "Intelligence document review",
      desc: "Classifies, validates, extracts, and resolves conflicts across all documents. Understands — not just extracts.",
    },
    {
      id: "03",
      title: "Agentic reasoning",
      desc: "Performs the cognitive work of underwriting across 20–50 work streams per loan. Reasons — not automates.",
    },
    {
      id: "04",
      title: "Credit policy engine",
      desc: "Matches every deal against underwriting policies simultaneously. Applies policy — not checks boxes.",
    },
    {
      id: "05",
      title: "Real-time risk signals",
      desc: "Flags completeness gaps, exceptions, and fraud indicators before credit committee. Surfaces risk — not stores it.",
    },
  ];

  return (
    <section className="w-full bg-font">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* LEFT */}
        <div>
          <p className="text-base font-semibold tracking-widest uppercase text-primary/80 mb-4">
            Our platform
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1B2B] leading-tight mb-6">
            CreditOS — the intelligence engine.
          </h2>

          <p className="text-base sm:text-lg text-[#0B1B2B]/70 leading-relaxed mb-8 max-w-xl">
            Not a workflow tool. Not a document parser. The system that thinks
            through every loan before your team opens it.
          </p>

          <Button
            href="/live-deal"
            title="See it on a live deal"
            type="primary"
          />
        </div>

        {/* RIGHT LIST */}
        <div className="flex flex-col divide-y divide-black/10">
          {items.map((item) => (
            <div key={item.id} className="py-5 flex gap-4">
              {/* Number */}
              <div className="text-lg text-accent mt-1 min-w-6">{item.id}</div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-base text-primary/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
