import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import LeftBorderedCard from "@/components/ui/LeftBorderedCard";

export const metadata = {
  title: "Proof | Converge Finance",
  description:
    "Real customer results from production deployments. See how Converge delivers 2-3x throughput and 90% reduction in manual tasks.",
};

const stats = [
  {
    value: "2-3x",
    label: "Faster underwriting team throughput",
  },
  {
    value: "72 hrs → 4 min",
    label: "Entity review turnaround",
  },
  {
    value: "90%",
    label: "Reduction in manual review tasks",
  },
  {
    value: "$0",
    label: "Attorney cost for routine entity work",
  },
];

const testimonials = [
  {
    quote:
      "I'm sure you see me beaming, but this is gonna save days of my life. This is so cool. I'm really kind of blown away.",
    author: "Head of Credit",
    company: "$500M+ annual origination",
  },
  {
    quote:
      "I cannot possibly overstate my excitement for this product. Its utility today alone would be a vast improvement.",
    author: "Lead Underwriter",
    company: "NYC-based credit originator",
  },
];

export default function ProofPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-10 md:pt-30 md:pb-16 bg-deep-slate">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 max-w-4xl">
            <Breadcrumbs items={[{ label: "Proof" }]} />

            <div className="space-y-8">
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
                Proof, not promises.
              </h1>
              <p className="text-base md:text-xl text-parchment/60 max-w-2xl leading-relaxed font-light">
                Every number on this page comes from a production deployment.
                Every claim is demonstrable in a live session. Every customer
                result is specific, quantified, and traceable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Stats Section */}
      <section className="py-10 md:py-20 bg-parchment">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="space-y-2 md:space-y-4">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-charcoal/80 mb-2">
                Results from production deployments
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-6 group">
                  <div className="w-full h-px bg-midnight/10 group-hover:bg-verified/40 transition-colors duration-500" />
                  <div className="space-y-3">
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
                      {stat.value}
                    </h2>
                    <p className="text-sm md:text-base text-charcoal/60 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 md:py-20 bg-midnight">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="space-y-4 md:space-y-8">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-verified mb-2">
                Trusted by credit professionals
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {testimonials.map((t, i) => (
                <LeftBorderedCard key={i} type="primary" className="">
                  <div className="flex flex-col h-full justify-between gap-4 md:gap-8">
                    <p className="text-base md:text-lg text-parchment italic leading-relaxed font-serif">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm md:text-base text-parchment/80">
                        {t.author}
                      </p>
                      <p className="text-xs md:text-sm text-parchment/40">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </LeftBorderedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-10 md:py-20 bg-deep-slate">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-xl md:text-3xl text-parchment/90 font-light leading-relaxed">
              These results came from production deployments, not
              proof-of-concept exercises.
              <br />
              <span className="text-parchment font-medium">
                See it on a deal from your current pipeline.
              </span>
            </p>
            <div className="flex justify-center pt-4">
              <Button href="/demo" title="See it on a live deal &rarr;" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
