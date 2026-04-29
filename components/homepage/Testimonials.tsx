export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I'm sure you see me beaming but this is gonna save days of my life. This is so cool. I'm really kind of blown away.",
      role: "Head of Credit",
      sub: "$500M+ annual origination",
    },
    {
      quote:
        "I cannot possibly overstate my excitement for this product. Its utility today alone would be a vast improvement.",
      role: "Lead Underwriter",
      sub: "NYC-based credit originator",
    },
  ];

  return (
    <section className="w-full bg-font">
      <div className="max-w-5/6 mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        {/* Label */}
        <p className="text-[10px] tracking-widest uppercase text-[#8A94A6] mb-10">
          Trusted by credit professionals
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur rounded-xl p-6 sm:p-7 border border-black/5 relative overflow-hidden border-l-[3px] border-l-accent"
            >
              {/* Left accent line */}
              {/* <div className="absolute left-0 top-0 h-full w-0.75 bg-accent" /> */}

              {/* Content */}
              <div className="pl-3">
                <p className="text-base sm:text-lg text-[#0B1B2B] italic leading-relaxed mb-6">
                  “{item.quote}”
                </p>

                <div>
                  <p className="text-sm font-semibold text-[#0B1B2B]">
                    {item.role}
                  </p>
                  <p className="text-sm text-[#0B1B2B]/60">{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
