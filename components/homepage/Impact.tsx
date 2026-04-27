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
    <section className="w-full bg-[#16263A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        {/* Top label */}
        <p className="text-[10px] tracking-widest uppercase text-white/40 mb-10">
          Measurable impact
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-10 px-4 sm:px-6 flex flex-col gap-2 border-r md:border-r border-b md:border-b-0 border-white/10 max-md:even:border-r-0 md:last:border-r-0"
            >
              {/* Value */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-sm text-white/40">
          RCN Capital: entity review from 72 hours to 4 minutes. Full source
          citations on every output.
        </p>
      </div>
    </section>
  );
}
