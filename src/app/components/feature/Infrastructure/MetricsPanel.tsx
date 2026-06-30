"use client";

import {
  Cpu,
  Database,
  HardDrive,
  DollarSign,
} from "lucide-react";

import MetricCard from "./MetricCard";

const metrics = [
  {
    icon: <Cpu size={18} />,
    label: "CPU",
    value: 72,
    suffix: "%",
    progress: 72,
  },
  {
    icon: <Database size={18} />,
    label: "GPU",
    value: 41,
    suffix: "%",
    progress: 41,
  },
  {
    icon: <HardDrive size={18} />,
    label: "RAM",
    value: 68,
    suffix: "%",
    progress: 68,
  },
  {
    icon: <DollarSign size={18} />,
    label: "Savings",
    value: 2874,
    prefix: "$",
    progress: 68,
  },
];

export default function MetricsPanel() {
  return (
    <>
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
    </>
  );
}
