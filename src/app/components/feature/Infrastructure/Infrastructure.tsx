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
    <>
      <Heading
        id="infrastructure-heading"
        eyebrow="Infrastructure Analysis"
        title="AI analyzes every connected workload"
        subtitle="Connections are mapped in real time before generating optimization recommendations."
        align="center"
      />

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
            {providers.map((provider) => (
              <li key={provider}>{provider}</li>
            ))}
          </ul>
        </ScrollReveal>

        <ScaleReveal className={styles.engine}>
          <Sparkles size={42} aria-hidden="true" />
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
    </>
  );
}
