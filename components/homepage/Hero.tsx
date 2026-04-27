import Button from "../ui/Button";

const steps = [
  { id: "01", title: "Documents Arrive" },
  { id: "02", title: "Evidence is formed" },
  { id: "03", title: "Facts are validated" },
  { id: "04", title: "Decisions are ready" },
];

const brands = [
  "Goldman Sachs",
  "JP Morgan",
  "Wells Fargo",
  "Morgan Stanley",
  "Citibank",
  "PAN",
];

export default function Hero() {
  return (
    <section className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 grid gap-10 md:grid-cols-2 md:gap-16 items-center text-font min-h-[80vh]">
        {/* LEFT */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Credit intelligence for lenders who originate at scale.
          </h1>

          <p className="text-base sm:text-lg text-font/60 mb-6 max-w-xl">
            We turn messy loan files into structured, traceable, credit-ready
            decisions — before your LOS opens.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              href="/live-deal"
              title="See it on a live deal"
              type="primary"
            />
            <Button
              href="/platform"
              title="Watch a 2-minute Overview"
              type="secondary"
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#121A2B] p-5 sm:p-6 lg:p-8 rounded-[14px]">
          <p className="text-[10px] sm:text-xs uppercase mb-6 sm:mb-8">
            CreditOS · Live Processing
          </p>

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div className="flex items-center gap-3 sm:gap-4" key={step.id}>
                <div className="size-7 sm:size-8 rounded-full border border-font/20 text-font/50 text-[10px] sm:text-xs flex items-center justify-center">
                  {step.id}
                </div>
                <div className="text-xs sm:text-sm text-font/50">
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-font/10 pt-4 flex justify-between items-center text-[10px] sm:text-xs">
            <span>Every output auditable</span>
            <span className="text-accent">● Source-backed</span>
          </div>
        </div>
      </div>

      {/* BRANDS */}
      <div className="w-full bg-[#121A2B]">
        <div className="max-w-7xl mx-auto py-5 sm:py-6 px-4 sm:px-6 lg:px-10 text-xs">
          {/* Stack on mobile, row on desktop */}
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-font">
            <div className="uppercase text-[10px] sm:text-xs">
              Built by industry experts from
            </div>

            {/* Wrap instead of overflow */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="text-font/30 hover:text-font duration-200 ease-linear cursor-default text-[11px] sm:text-xs"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
