"use client";

import {
  Cpu,
  Database,
  HardDrive,
} from "lucide-react";

import Stat from "@/src/app/components/ui/Stat";
import AnimatedCounter from "@/src/app/components/ui/AnimatedCounter";

const metrics = [
  {
    title: "CPU",
    value: 72,
    progress: 72,
    icon: <Cpu size={18} />,
  },
  {
    title: "GPU",
    value: 41,
    progress: 41,
    icon: <Database size={18} />,
  },
  {
    title: "RAM",
    value: 68,
    progress: 68,
    icon: <HardDrive size={18} />,
  },
];

export default function MetricsPanel() {
  return (
    <>
      {metrics.map((metric) => (
        <Stat
          key={metric.title}
          icon={metric.icon}
          title={metric.title}
          value={
            <AnimatedCounter
              value={metric.value}
              suffix="%"
            />
          }
          progress={metric.progress}
        />
      ))}
    </>
  );
}