export default function ImpactSection() {
  const stats = [
    {
      value: "200%",
      label: "Faster deal processing",
    },
    {
      value: "90%",
      label: "Reduction in manual tasks",
    },
    {
      value: "5×",
      label: "More deals closed per person",
    },
    {
      value: "4 min",
      label: "Entity review — was 72 hours",
    },
  ];

  return (
    <section className="w-full bg-deep-slate text-white">
      <div className="max-w-95/100 md:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        {/* Top label */}
        <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-white/80 mb-10">
          Measurable impact
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative py-10 px-4 sm:px-6 flex flex-col gap-2"
            >
              {/* Vertical Separator */}
              <div className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-transparent via-parchment to-transparent">
                {/* Accent Line */}
                {/* <div className="absolute top-1/2 -translate-y-1/2 -left-px w-0.75 h-10 bg-parchment"></div> */}
              </div>

              {/* Value */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm md:text-base text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-base text-white/80">
          RCN Capital: entity review from 72 hours to 4 minutes. Full source
          citations on every output.
        </p>
      </div>
    </section>
  );
}
