import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Intelligence | Converge Finance",
  description:
    "Credit intelligence is not a feature. It is a category. Discover how Converge performs the cognitive work of credit decisioning.",
};

const comparisons = [
  {
    title: "Your LOS",
    features: [
      "Stores answers.",
      "Records decisions after they are made.",
      "Organises data that humans entered.",
    ],
    highlight: false,
  },
  {
    title: "Workflow automation",
    features: [
      "Connects systems.",
      "Moves data between applications.",
      "Automates the sequence, not the reasoning.",
    ],
    highlight: false,
  },
  {
    title: "Credit intelligence",
    features: [
      "Produces answers.",
      "Reconstructs entities, resolves conflicts, matches policy, detects fraud signals.",
      "Performs the cognitive work.",
    ],
    highlight: true,
  },
];

const workStreams = [
  "Document classification",
  "Entity ownership mapping",
  "Guarantor identification",
  "Signer authority validation",
  "Document conflict resolution",
  "Missing document detection",
  "Credit policy matching",
  "Exception identification",
  "Put-back risk assessment",
  "Fraud signal detection",
];

export default function IntelligencePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-midnight border-b border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Intelligence" }]} />

            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
                Credit intelligence is not a feature.
                <br />
                <span className="text-white/30 text-3xl md:text-5xl lg:text-6xl">
                  It is a category.
                </span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                    For decades, loan origination technology has focused on
                    storage: where to put data, how to move it between systems,
                    how to automate the entry of fields into forms.
                  </p>
                  <p className="text-base md:text-lg text-parchment font-semibold">
                    None of that solves the actual problem.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                    The cognitive work of credit decisioning — entity
                    reconstruction, document conflict resolution, policy
                    matching, fraud signal detection — has remained manual.
                    Performed by experienced professionals. Constrained by their
                    capacity.
                  </p>
                  <p className="text-sm md:text-base text-verified font-medium italic">
                    Credit intelligence is the system that performs that
                    cognitive work. Not faster data entry. Not better workflows.
                    The intelligence itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-10 md:py-20 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="space-y-8 md:space-y-12">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-charcoal tracking-tight">
                What credit intelligence is — and what it is not
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-all duration-500 flex flex-col justify-between h-full ${
                    item.highlight
                      ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-verified/20 z-10  border-t-verified border-t-[3px]"
                      : "bg-deep-slate border border-charcoal/5 hover:bg-deep-slate/90"
                  }`}
                >
                  <div className="space-y-6">
                    <h3
                      className={`text-xl font-bold ${item.highlight ? "text-verified" : "text-parchment"}`}
                    >
                      {item.title}
                    </h3>
                    <ul className="space-y-4">
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex gap-3">
                          <div
                            className={`mt-1.5 size-1.5 rounded-full shrink-0 ${item.highlight ? "bg-verified" : "bg-parchment/20"}`}
                          />
                          <span
                            className={`text-sm md:text-base leading-relaxed ${item.highlight ? "text-charcoal/90 font-medium" : "text-parchment/60"}`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* {item.highlight && (
                    <div className="pt-6 mt-6 border-t border-verified/10">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-verified">
                        The Core Value
                      </p>
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Streams Section */}
      <section className="py-10 md:py-20 bg-deep-slate">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-parchment tracking-tight leading-tight">
                The 20–50 cognitive work streams behind every loan
              </h2>
              <p className="text-sm md:text-lg text-white/60 leading-relaxed font-light">
                A commercial real estate loan is not a form to be filled. It is
                a web of interconnected facts that must be continuously
                maintained as documents arrive. entities are identified,
                conflicts emerge, and policies are applied.{" "}
                <span className="text-verified font-medium">
                  Converge performs it.
                </span>
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {workStreams.map((stream, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-4 border-b border-white/5 group hover:border-verified/30 transition-colors"
                >
                  <span className="text-sm md:text-base font-mono text-verified/70 group-hover:text-verified">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-sm md:text-base text-white/80 font-medium group-hover:text-parchment transition-colors">
                    {stream}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-10 md:py-20 bg-parchment relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-verified/5 rounded-full blur-3xl -mr-32 -mt-32" />

        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-xl md:font-display text-3xl lg:text-4xl text-charcoal font-bold leading-tight">
              The transformation of loan origination will look completely
              different in 24 months.
              <br />
              <span className="text-verified italic">
                Converge is already operating there.
              </span>
            </h2>
            <div className="flex justify-center">
              <Button href="/demo" title="See it on a live deal &rarr;" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
