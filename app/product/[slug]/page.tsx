import { getProduct } from "@/lib/products";
import BottomCta from "@/components/ui/BottomCta";
import SharedHero from "@/components/ui/SharedHero";
import { notFound } from "next/navigation";

export default async function IndividualProducts({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen">
      <SharedHero
        title={product.hero.title}
        description={product.hero.description}
        breadcrumbLabel={product.hero.breadcrumbLabel}
      />

      <section className="bg-parchment text-charcoal py-10 md:py-20">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {product.sectionOneItems.map((item, index) => (
              <div
                key={index}
                className={`space-y-4 py-6 border-t-2 ${index == 0 ? "border-t-verified" : "border-t-steel"}`}
              >
                <h3 className="text-2xl md:text-3xl font-semibold font-display">
                  {item.heading}
                </h3>
                <p className="font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-parchment py-10 md:py-20">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            {product.sectionTwoItems.map((item, index) => (
              <div
                key={index}
                className={`space-y-4 py-6 px-2 md:px-4 ${index == product.sectionTwoItems.length - 1 ? "border-r-none" : "border-b md:border-b-0 md:border-r border-r-steel"}`}
              >
                <h3 className="text-2xl md:text-3xl font-semibold font-display">
                  {item.heading}
                </h3>
                <p className="font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCta messages={product.bottomCtaMessages} type="secondary" />
    </div>
  );
}
