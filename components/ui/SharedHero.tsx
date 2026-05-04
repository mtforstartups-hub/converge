import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

type SharedHeroProps = {
  title: string;
  description: string;
  breadcrumbLabel: string;
};

export default function SharedHero({
  title,
  description,
  breadcrumbLabel,
}: SharedHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-midnight">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        <div className="flex flex-col space-y-8 max-w-3xl">
          <Breadcrumbs items={[{ label: breadcrumbLabel }]} />

          <div className="space-y-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-parchment leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Button href="/live-deal" title="See it on a live deal &rarr;" />
          </div>
        </div>
      </div>
    </section>
  );
}
