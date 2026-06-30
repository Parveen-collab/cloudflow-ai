"use client";

import { motion } from "framer-motion";
import Card from "@/src/app/components/ui/Card";
import Badge from "@/src/app/components/ui/Badge";
import styles from "@/src/app/components/feature/CloudProviders/CloudProviders.module.css";

export interface ProviderCardProps {
  provider: string;
  clusters: number;
  index: number;
}

export default function ProviderCard({
  provider,
  clusters,
  index,
}: ProviderCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
      }}
    >
      <Card hover className={styles.card}>
        <div className={styles.icon}>
          ☁
        </div>

        <h3>{provider}</h3>

        <p>{clusters} Active Clusters</p>

        <Badge variant="success">
          Connected
        </Badge>
      </Card>
    </motion.div>
  );
}