"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import {
  fadeRight,
  reducedMotionVariants,
  scrollReveal,
  transitions,
  viewport,
} from "@/src/lib/motion";

import AnimatedCounter from "@/src/app/components/ui/AnimatedCounter";

import styles from "./MetricCard.module.css";

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  progress: number;
  delay?: number;
}

export default function MetricCard({
  icon,
  label,
  value,
  prefix,
  suffix = "",
  progress,
  delay = 0,
}: MetricCardProps) {
  const reduced = useReducedMotion();
  const reveal = scrollReveal(reduced, delay);
  const variants = reduced
    ? reducedMotionVariants
    : fadeRight;

  const labelId = `metric-${label.toLowerCase()}-label`;
  const progressLabel = `${label} utilization: ${value}${suffix}`;

  return (
    <motion.article
      className={styles.card}
      aria-labelledby={labelId}
      variants={variants}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={viewport}
      transition={{
        ...transitions.fade,
        delay,
      }}
    >
      <header className={styles.header}>
        <div className={styles.label}>
          <span aria-hidden="true">{icon}</span>
          <span id={labelId}>{label}</span>
        </div>

        <div className={styles.value}>
          <AnimatedCounter
            value={value}
            prefix={prefix}
            suffix={suffix}
          />
        </div>
      </header>

      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={progressLabel}
      >
        <motion.div
          className={styles.fill}
          aria-hidden="true"
          initial={{ width: reduced ? `${progress}%` : 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={viewport}
          transition={{
            duration: reduced ? 0 : transitions.line.duration,
            delay: reduced ? 0 : delay + 0.2,
            ease: transitions.line.ease,
          }}
        />
      </div>
    </motion.article>
  );
}
