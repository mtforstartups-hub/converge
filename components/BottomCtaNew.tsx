import Button from "./ui/Button";

export default function BottomCtaNew({
  title,
  para,
}: {
  title: string;
  para: string;
}) {
  return (
    <section className="py-10 md:py-20 bg-deep-slate">
      <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10 text-center">
        <div className="max-w-7xl mx-auto space-y-5">
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-parchment tracking-wide">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-steel font-light">{para}</p>
          </div>
          <div className="flex justify-center pt-6 gap-4">
            <Button href="/live-deal" title="See it on a live deal &rarr;" />
            <Button
              type="secondary"
              href="/live-deal"
              title="Watch the 2-minute platform overview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
