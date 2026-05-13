import LeftBorderedCard from "@/components/ui/LeftBorderedCard";

const points = [
  {
    point:
      "Send us a deal file you're underwriting today. Documents redacted as you prefer. We'll run it through CreditOS before we meet.",
    description:
      "Send us a sample deal before the call and we'll run it live through CreditOS.",
  },
  {
    point:
      "On the call, we walk through what the engine extracted, what it flagged, and how it matched the deal to your credit policy. You ask the hard questions. We answer them on the file.",
    description:
      "Documents in. Intelligence out. Every layer, every output, fully traced.",
  },
  {
    point:
      "If it's a fit, we scope a pilot — typically a parallel run against your last quarter's volume to confirm accuracy on your portfolio.",
    description:
      "Security, pricing, implementation timeline — nothing is off the table.",
  },
];

export default function LiveDeal() {
  return (
    <div className="min-h-screen bg-parchment">
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-parchment text-charcoal">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 tracking-wider">
                See Converge on a real loan file.
              </h2>
              <p className="font-sans text-lg md:text-xl">
                Bring a deal you&apos;re working. We&apos;ll run it through
                CreditOS live and show you what the intelligence layer surfaces
                — risk flags, entity gaps, policy matches, the lot. Twenty
                minutes.
              </p>
              <p className="font-sans text-lg md:text-xl">
                Three things, in order
              </p>
              <div className="space-y-6 mt-10">
                {points.map((point, idx) => (
                  <div className="flex items-start gap-4 md:gap-5" key={idx}>
                    <div className="text-base md:text-lg font-semibold text-verified">
                      {idx + 1}.
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-semibold">
                        {point.point}
                      </div>
                      {/* <div className="text-sm md:text-base">
                        {point.description}
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
              <LeftBorderedCard type="secondary" className="bg-white mt-10">
                <h3 className="font-semibold mb-4">
                  We bring a deal that&apos;s been giving us trouble for two
                  weeks. Twenty minutes later we know whether Converge changes
                  our underwriting or not.
                </h3>
                — VP of Credit Operations, regional bridge lender
              </LeftBorderedCard>
            </div>

            {/* form section */}
            <div>
              <div className="rounded-xl bg-deep-slate p-8 md:p-10 text-parchment shadow-5xl">
                <h3 className="font-display font-medium text-2xl md:text-3xl mb-4 tracking-wide">
                  Request a session
                </h3>
                <form action="" className="space-y-8">
                  <div className="mb-5">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full border border-charcoal rounded-sm outline-none focus:border-verified px-3.5 py-2.5 transition-colors mt-2"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full border border-charcoal rounded-sm outline-none focus:border-verified px-3.5 py-2.5 transition-colors mt-2"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="w-full border border-charcoal rounded-sm outline-none focus:border-verified px-3.5 py-2.5 transition-colors mt-2"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="w-full border border-charcoal rounded-sm outline-none focus:border-verified px-3.5 py-2.5 transition-colors mt-2"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="volume">Organization Volume (annual)</label>
                    <select
                      name="volume"
                      id="volume"
                      className="w-full border border-charcoal rounded-sm outline-none focus:border-verified px-3.5 py-2.5 transition-colors mt-2 [&>option]:bg-deep-slate [&>option]:text-parchment"
                    >
                      <option value="">Select Volume</option>
                      <option value="50">Under $50M</option>
                      <option value="50-250">$50M - $250M</option>
                      <option value="250-1000">$250M - $1B</option>
                      <option value="1000">Over $1B</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="interest">Primary Interest</label>
                    <select
                      name="interest"
                      id="interest"
                      className="w-full border border-charcoal rounded-sm outline-none focus:border-verified px-3.5 py-2.5 transition-colors mt-2 [&>option]:bg-deep-slate [&>option]:text-parchment"
                    >
                      <option value="">Select Volume</option>
                      <option value="loan-officer">
                        Loan Officer Intelligence
                      </option>
                      <option value="processor">Processor Intelligence</option>
                      <option value="underwriter">
                        Underwriter Intelligence
                      </option>
                      <option value="platform">Full CreditOS Platform</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="message">
                      Anything specific you want to see in the session?
                      (optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="w-full border border-charcoal rounded-sm outline-none focus:border-verified px-3.5 py-2.5 transition-colors mt-2"
                    />
                  </div>

                  <button className="w-full text-center py-3 px-4 bg-verified text-parchment hover:bg-verified/90 rounded-md hover:-translate-y-0.5 transition-all duration-400">
                    Request a Session
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
