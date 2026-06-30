"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import Card from "@/src/app/components/ui/Card";
import Badge from "@/src/app/components/ui/Badge";
import Heading from "@/src/app/components/ui/Heading";
import AnimatedCounter from "@/src/app/components/ui/AnimatedCounter";
import {
  HoverLift,
  ScaleReveal,
} from "@/src/app/components/ui/motion";

import { useReducedMotion } from "@/src/hooks/useReducedMotion";

import styles from "./Optimization.module.css";

export default function Optimization() {
  const reduced = useReducedMotion();

  return (
    <section className={styles.section}>
      <Heading
        eyebrow="Optimization Complete"
        title="Your infrastructure is now AI optimized"
        subtitle="The optimization engine analyzed every workload and generated cost-saving recommendations."
        align="center"
      />

        <HoverLift>
          <Card className={styles.card} hover>
            {!reduced && (
              <motion.div
                className={styles.glow}
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.45, 0.85, 0.45],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  ease: "easeInOut",
                }}
              />
            )}

            <div className={styles.icon}>
              <CheckCircle2 size={46} />
            </div>

            <Badge variant="success">
              <Sparkles size={14} />
              AI Optimized
            </Badge>

            <div className={styles.savings}>
              <AnimatedCounter
                value={68}
                suffix="%"
              />
            </div>

            <h3>Monthly Cost Reduction</h3>

            <p>
              Estimated Monthly Savings
            </p>

            <div className={styles.money}>
              <AnimatedCounter
                value={2874}
                prefix="$"
              />
            </div>

            <div className={styles.footer}>
              Optimization completed in 2.4s
            </div>
          </Card>
        </HoverLift>
    </section>
  );
}
