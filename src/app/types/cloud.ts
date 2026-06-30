export interface CloudMetric {
  id: number;
  provider: string;
  clusters: number;
  cpu: number;
  gpu: number;
  ram: number;
  savings: number;
  health: number;
}