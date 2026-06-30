import { CloudMetric } from "@/src/app/types/cloud";
import { DummyProduct } from "@/src/app/types/api";

const providers = [
  "AWS",
  "Azure",
  "Google Cloud",
  "Oracle",
  "IBM",
  "On-Prem",
];

export function mapProductsToCloudMetrics(
  products: DummyProduct[]
): CloudMetric[] {
  return products.map((product, index) => ({
    id: product.id,

    provider: providers[index % providers.length],

    clusters: Math.floor(product.stock / 4),

    cpu: product.stock,

    gpu: Math.round(product.rating * 20),

    ram: Math.min(95, product.stock + 20),

    savings: Math.round(product.price * 42),

    health: Math.round(product.rating * 20),
  }));
}