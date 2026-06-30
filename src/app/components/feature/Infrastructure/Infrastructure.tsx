"use client";

import { Sparkles } from "lucide-react";

import Heading from "@/src/app/components/ui/Heading";
import {
  ScaleReveal,
  ScrollReveal,
} from "@/src/app/components/ui/motion";

import styles from "./Infrastructure.module.css";
import MetricsPanel from "@/src/app/components/feature/Infrastructure/MetricsPanel";
import ConnectionLine from "@/src/app/components/feature/Infrastructure/ConnectionLine";

const providers = ["AWS", "Azure", "Google", "On-Prem"];

export default function Infrastructure() {
  return (
    <section
      className={styles.section}
      aria-labelledby="cloud-providers-heading"
    >
      <Heading
        eyebrow="Infrastructure Analysis"
        title="AI analyzes every connected workload"
        subtitle="Connections are mapped in real time before generating optimization recommendations."
        align="center"
      />

      <div className={styles.visualization}>
        <ScrollReveal
          className={styles.providers}
          direction="left"
        >
          {providers.map((provider, index) => (
            <ScrollReveal
              key={provider}
              delay={index * 0.08}
              direction="left"
            >
              <div>{provider}</div>
            </ScrollReveal>
          ))}
        </ScrollReveal>

        <ScaleReveal className={styles.engine}>
          <Sparkles size={42} />
          <span>AI Engine</span>
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
    </section>
  );
}
