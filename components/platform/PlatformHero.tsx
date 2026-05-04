import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

export default function PlatformHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-midnight">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <div className="flex flex-col space-y-8 max-w-3xl">
          <Breadcrumbs items={[{ label: "Platform" }]} />

          <div className="space-y-6">
            <div className="text-xs font-semibold tracking-widest text-white/60 uppercase">
              Platform Overview
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-parchment">One platform. Six agents.</span>
              <br />
              <span className="text-white/40">
                The complete lending workflow.
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              Converge integrates six AI agents into a single workflow — from
              document intake through to credit memo output. Not six point
              solutions. One system.
            </p>
          </div>

          <div className="pt-2">
            <Button href="/live-deal" title="Book a Platform Demo &rarr;" />
          </div>
        </div>
      </div>
    </section>
  );
}
