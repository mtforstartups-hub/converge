import { products } from "@/data/products";

export async function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
