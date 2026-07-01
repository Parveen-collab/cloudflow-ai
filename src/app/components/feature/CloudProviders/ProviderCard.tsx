"use client";

import Card from "@/src/app/components/ui/Card";
import Badge from "@/src/app/components/ui/Badge";
import { HoverLift } from "@/src/app/components/ui/motion";

import styles from "./ProviderCard.module.css";

export interface ProviderCardProps {
  provider: string;
  clusters: number;
}

export default function ProviderCard({
  provider,
  clusters,
}: ProviderCardProps) {
  const titleId = `provider-${provider.toLowerCase().replace(/\s+/g, "-")}-title`;

  return (
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

        <Badge variant="success">Connected</Badge>
      </Card>
    </HoverLift>
  );
}
