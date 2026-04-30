export default function IntegrationArchitecture() {
  const integrations = [
    "Encompass",
    "BytePro",
    "SharePoint",
    "Salesforce",
    "HubSpot",
    "Custom LOS",
  ];

  const stats = [
    {
      label: "IMPLEMENTATION",
      value: "4-6 weeks",
      sub: "Standard deployment",
    },
    {
      label: "UPTIME SLA",
      value: "99.9%",
      sub: "Enterprise guaranteed",
    },
    {
      label: "DATA RESIDENCY",
      value: "US Only",
      sub: "No offshore processing",
    },
    {
      label: "SECURITY",
      value: "SOC 2 II",
      sub: "Type II certified",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <div className="bg-[#162032] border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
              <div className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">
                Integration Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-font mb-6 leading-tight">
                Connects to your existing stack. No rip-and-replace.
              </h2>
              <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
                Converge augments your workflow — it doesn&apos;t replace it.
                Standard connectors for major LOS platforms, document management
                systems, and CRM tools. API-first architecture for custom
                integrations.
              </p>

              <div className="flex flex-wrap gap-3">
                {integrations.map((item, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#111e2a] hover:bg-[#152536] transition-colors duration-300 border border-white/5 hover:border-white/10 rounded-xl p-6 flex flex-col justify-center cursor-default"
                >
                  <div className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-3">
                    {stat.label}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-font mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
