import Breadcrumbs from "@/components/ui/Breadcrumbs";
import IndustryTabs from "@/components/industries/IndustryTabs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Industries | Converge Finance",
  description:
    "Built for real estate credit. Configured for your vertical. Explore how Converge tailors AI for different lending sectors.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      {/* <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-verified/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-verified/5 rounded-full blur-[100px] -z-10" /> */}

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-deep-slate">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 max-w-4xl">
            <Breadcrumbs items={[{ label: "Industries" }]} />

            <div className="space-y-8">
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-parchment">
                Built for real estate credit.
                <br />
                <span className="text-white/30">
                  Configured for your vertical.
                </span>
              </h1>
              <p className="text-base md:text-xl text-white/60 max-w-2xl leading-relaxed font-light">
                Every lending vertical has different document types, entity
                complexity, regulatory requirements, and policy structures.
                Converge is configured for each — not generalised across all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-10 md:py-20 bg-midnight border-y border-white/5">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <IndustryTabs />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-10 md:py-20 bg-deep-slate">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-parchment tracking-tight">
                Which vertical are you in?
              </h2>
              <p className="text-lg md:text-xl text-white/50 font-light">
                See Converge configured for your origination workflow.
              </p>
            </div>
            <div className="flex justify-center pt-6">
              <Button href="/live-deal" title="See it on a live deal &rarr;" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
