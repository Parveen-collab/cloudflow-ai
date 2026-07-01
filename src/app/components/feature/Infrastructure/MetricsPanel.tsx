"use client";

import {
  Cpu,
  Database,
  DollarSign,
  HardDrive,
} from "lucide-react";

import { useCloudMetrics } from "@/src/hooks/useCloudMetrics";
import { aggregateCloudMetrics } from "@/src/lib/cloud.mapper";

import MetricCard from "./MetricCard";

export default function MetricsPanel() {
  const { data } = useCloudMetrics();

  if (!data) {
    return null;
  }

  const aggregated = aggregateCloudMetrics(data);

  const metrics = [
    {
      icon: <Cpu size={18} />,
      label: "CPU",
      value: aggregated.cpu,
      suffix: "%",
      progress: aggregated.cpu,
    },
    {
      icon: <Database size={18} />,
      label: "GPU",
      value: aggregated.gpu,
      suffix: "%",
      progress: aggregated.gpu,
    },
    {
      icon: <HardDrive size={18} />,
      label: "RAM",
      value: aggregated.ram,
      suffix: "%",
      progress: aggregated.ram,
    },
    {
      icon: <DollarSign size={18} />,
      label: "Savings",
      value: aggregated.totalSavings,
      prefix: "$",
      progress: aggregated.savingsPercent,
    },
  ];

  return (
    <section aria-label="Infrastructure metrics">
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.label}
          icon={metric.icon}
          label={metric.label}
          value={metric.value}
          prefix={metric.prefix}
          suffix={metric.suffix}
          progress={metric.progress}
          delay={index * 0.12}
        />
      ))}
    </section>
  );
}
