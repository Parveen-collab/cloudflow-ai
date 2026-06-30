"use client";

import Card from "@/src/app/components/ui/Card";
import Badge from "@/src/app/components/ui/Badge";
import {
  HoverLift,
  ScrollReveal,
} from "@/src/app/components/ui/motion";

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
  const titleId = `provider-${provider.toLowerCase().replace(/\s+/g, "-")}-title`;

  return (
    <ScrollReveal delay={index * 0.12}>
      <HoverLift>
        <Card
          hover
          className={styles.card}
          aria-labelledby={titleId}
        >
          <div className={styles.icon} aria-hidden="true">
            ☁
          </div>

          <h3 id={titleId}>{provider}</h3>

          <p>{clusters} Active Clusters</p>

          <Badge variant="success">
            Connected
          </Badge>
        </Card>
      </HoverLift>
    </ScrollReveal>
  );
}
