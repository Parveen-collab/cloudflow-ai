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
import DataState from "@/src/app/components/ui/DataState";
import { HoverLift } from "@/src/app/components/ui/motion";
import { useCloudMetrics } from "@/src/hooks/useCloudMetrics";
import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import { aggregateCloudMetrics } from "@/src/lib/cloud.mapper";

import styles from "./Optimization.module.css";

export default function Optimization() {
  const reduced = useReducedMotion();
  const { data, isLoading, isError } = useCloudMetrics();

  const aggregated = data
    ? aggregateCloudMetrics(data)
    : null;

  return (
    <>
      <Heading
        id="optimization-heading"
        eyebrow="Optimization Complete"
        title="Your infrastructure is now AI optimized"
        subtitle="The optimization engine analyzed every workload and generated cost-saving recommendations."
        align="center"
      />

      <DataState
        isLoading={isLoading}
        isError={isError}
        loadingLabel="Calculating optimization results…"
        errorLabel="Unable to load optimization results."
      >
        {aggregated && (
          <div className={styles.wrapper}>
            <HoverLift className={styles.cardOuter}>
              <Card
                className={styles.card}
                hover
                aria-labelledby="optimization-result-heading"
              >
                {!reduced && (
                  <motion.div
                    className={styles.glow}
                    aria-hidden="true"
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

                <div className={styles.icon} aria-hidden="true">
                  <CheckCircle2 size={46} />
                </div>

                <Badge variant="success">
                  <Sparkles size={14} aria-hidden="true" />
                  AI Optimized
                </Badge>

                <div className={styles.savings}>
                  <AnimatedCounter
                    value={aggregated.savingsPercent}
                    suffix="%"
                  />
                </div>

                <h3 id="optimization-result-heading">
                  Monthly Cost Reduction
                </h3>

                <p>Estimated Monthly Savings</p>

                <div className={styles.money}>
                  <AnimatedCounter
                    value={aggregated.totalSavings}
                    prefix="$"
                  />
                </div>

                <p className={styles.footer}>
                  Optimization completed in{" "}
                  {aggregated.optimizationTimeSeconds}s
                </p>
              </Card>
            </HoverLift>
          </div>
        )}
      </DataState>
    </>
  );
}
