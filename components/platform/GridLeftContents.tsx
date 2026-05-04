export default function GridLeftContents({
  title,
  paras,
  stats,
}: {
  title: string;
  paras: string[];
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="space-y-4 md:space-y-8">
      <h2 className="font-display text-4xl md:text-5xl font-bold ">{title}</h2>
      {paras.map((para, index) => (
        <p key={index} className="font-sans text-sm md:text-lg">
          {para}
        </p>
      ))}

      <div className="grid grid-cols-2 gap-4 md:gap-8 py-4 md:py-8 border-y border-steel">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl md:text-4xl text-verified mb-2">
              {stat.value}
            </p>
            <p className="uppercase text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
