"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

import Heading from "@/src/app/components/ui/Heading";
import DataState from "@/src/app/components/ui/DataState";
import {
  ScaleReveal,
  ScrollReveal,
} from "@/src/app/components/ui/motion";
import { useCloudMetrics } from "@/src/hooks/useCloudMetrics";
import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import { aggregateCloudMetrics } from "@/src/lib/cloud.mapper";
import { transitions, viewport } from "@/src/lib/motion";

import styles from "./Infrastructure.module.css";
import MetricsPanel from "@/src/app/components/feature/Infrastructure/MetricsPanel";
import ConnectionLine from "@/src/app/components/feature/Infrastructure/ConnectionLine";

export default function Infrastructure() {
  const engineRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const engineInView = useInView(engineRef, viewport);
  const { data, isLoading, isError } = useCloudMetrics();

  const connectedProviders = data
    ? aggregateCloudMetrics(data).connectedProviders
    : [];

  return (
    <>
      <Heading
        id="infrastructure-heading"
        eyebrow="Infrastructure Analysis"
        title="AI analyzes every connected workload"
        subtitle="Connections are mapped in real time before generating optimization recommendations."
        align="center"
      />

      <DataState
        isLoading={isLoading}
        isError={isError}
        loadingLabel="Mapping cloud connections…"
        errorLabel="Unable to load infrastructure analysis."
      >
        <div
          className={styles.visualization}
          role="img"
          aria-label="Diagram showing cloud providers connected to an AI engine, with infrastructure metrics on the right"
        >
          <ScrollReveal
            className={styles.providers}
            direction="left"
          >
            <ul aria-label="Connected cloud providers">
              {connectedProviders.map((provider, index) => (
                <motion.li
                  key={provider}
                  initial={reduced ? false : { opacity: 0, x: -20 }}
                  whileInView={
                    reduced ? undefined : { opacity: 1, x: 0 }
                  }
                  viewport={viewport}
                  transition={{
                    ...transitions.fade,
                    delay: index * 0.1,
                  }}
                >
                  {provider}
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          <ScaleReveal className={styles.engine}>
            <motion.div
              ref={engineRef}
              className={styles.engineInner}
              animate={
                reduced || !engineInView
                  ? undefined
                  : { scale: [1, 1.04, 1] }
              }
              transition={{
                repeat: Infinity,
                duration: 2.8,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={42} aria-hidden="true" />
              <span>AI Engine</span>
            </motion.div>
          </ScaleReveal>

          <ScrollReveal
            className={styles.metrics}
            direction="right"
            delay={0.15}
          >
            <MetricsPanel />
          </ScrollReveal>

          <ConnectionLine className={styles.connectionLines} />
        </div>
      </DataState>
    </>
  );
}
