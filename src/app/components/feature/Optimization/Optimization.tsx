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

import styles from "./Optimization.module.css";

export default function Optimization() {
  return (
    <section className={styles.section}>

      <Heading
        eyebrow="Optimization Complete"
        title="Your infrastructure is now AI optimized"
        subtitle="The optimization engine analyzed every workload and generated cost-saving recommendations."
        align="center"
      />

      <motion.div
        className={styles.wrapper}
        initial={{
          opacity: 0,
          scale: .9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .7,
        }}
      >
        <Card
          className={styles.card}
          hover
        >

          <motion.div
            className={styles.glow}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [.5, 1, .5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          />

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
      </motion.div>

    </section>
  );
}