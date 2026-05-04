import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

type AgentDetailHeroProps = {
  badge: string;
  title: string;
  description: string;
};

export default function AgentDetailHero({
  badge,
  title,
  description,
}: AgentDetailHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-midnight">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <div className="flex flex-col space-y-8 max-w-3xl">
          <Breadcrumbs
            items={[{ label: "Platform", href: "/platform" }, { label: title }]}
          />

          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-verified uppercase">
              <span className="w-1.5 h-1.5 inline-block rounded-full bg-verified mr-2 mb-px"></span>
              {badge}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-parchment leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Button href="/live-deal" title="See it on a live deal &rarr;" />
            <Button
              href="/platform"
              title="Back to Platform"
              type="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
