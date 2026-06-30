"use client";

import { motion } from "framer-motion";
import styles from "./MetricCard.module.css";

import AnimatedCounter from "@/src/app/components/ui/AnimatedCounter";

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  progress: number;
  delay?: number;
}

export default function MetricCard({
  icon,
  label,
  value,
  suffix = "",
  progress,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.5,
      }}
    >
      <div className={styles.header}>
        <div className={styles.label}>
          {icon}
          <span>{label}</span>
        </div>

        <div className={styles.value}>
          <AnimatedCounter
            value={value}
            suffix={suffix}
          />
        </div>
      </div>

      <div className={styles.track}>
        <motion.div
          className={styles.fill}
          initial={{ width: 0 }}
          whileInView={{
            width: `${progress}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay,
          }}
        />
      </div>
    </motion.div>
  );
}