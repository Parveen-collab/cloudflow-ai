import { CloudMetric } from "@/src/types/cloud";
import { DummyProduct } from "@/src/types/api";

const providers = [
  "AWS",
  "Azure",
  "Google Cloud",
  "Oracle",
  "IBM",
  "On-Prem",
  "Huawei",
  "Tencent",
];

export interface AggregatedCloudMetrics {
  cpu: number;
  gpu: number;
  ram: number;
  totalSavings: number;
  savingsPercent: number;
  connectedProviders: string[];
  optimizationTimeSeconds: number;
}

export function mapProductsToCloudMetrics(
  products: DummyProduct[]
): CloudMetric[] {
  return products.map((product, index) => ({
    id: product.id,

    provider: providers[index % providers.length],

    clusters: Math.floor(product.stock / 4),

    cpu: Math.min(100, product.stock),

    gpu: Math.round(product.rating * 20),

    ram: Math.min(95, product.stock + 20),

    savings: Math.round(product.price * 42),

    health: Math.round(product.rating * 20),
  }));
}

export function aggregateCloudMetrics(
  metrics: CloudMetric[]
): AggregatedCloudMetrics {
  if (metrics.length === 0) {
    return {
      cpu: 0,
      gpu: 0,
      ram: 0,
      totalSavings: 0,
      savingsPercent: 0,
      connectedProviders: [],
      optimizationTimeSeconds: 0,
    };
  }

  const count = metrics.length;

  const cpu = Math.round(
    metrics.reduce((sum, metric) => sum + metric.cpu, 0) / count
  );

  const gpu = Math.round(
    metrics.reduce((sum, metric) => sum + metric.gpu, 0) / count
  );

  const ram = Math.round(
    metrics.reduce((sum, metric) => sum + metric.ram, 0) / count
  );

  const totalSavings = metrics.reduce(
    (sum, metric) => sum + metric.savings,
    0
  );

  const avgHealth = Math.round(
    metrics.reduce((sum, metric) => sum + metric.health, 0) / count
  );

  const savingsPercent = Math.min(
    99,
    Math.round(avgHealth * 0.85)
  );

  return {
    cpu,
    gpu,
    ram,
    totalSavings,
    savingsPercent,
    connectedProviders: metrics
      .slice(0, 8)
      .map((metric) => metric.provider),
    optimizationTimeSeconds: Number(
      (1.8 + count * 0.1).toFixed(1)
    ),
  };
}