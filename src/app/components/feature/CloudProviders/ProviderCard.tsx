"use client";

import Image from "next/image";

import Card from "@/src/app/components/ui/Card";
import Badge from "@/src/app/components/ui/Badge";
import { HoverLift } from "@/src/app/components/ui/motion";

import styles from "./ProviderCard.module.css";

export interface ProviderCardProps {
  provider: string;
  clusters: number;
}

const providerLogos: Record<string, string> = {
  AWS: "/providers/aws.webp",
  Azure: "/providers/azure.webp",
  "Google Cloud": "/providers/google-cloud.png",
  Oracle: "/providers/oracle.webp",
  IBM: "/providers/ibm.webp",
  "On-Prem": "/providers/on-prem.svg",
  Huawei: "/providers/huawei.svg",
  Tencent: "/providers/tencent.svg",
};

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
          <Image
            src={providerLogos[provider] ?? "/providers/default.webp"}
            alt=""
            width={40}
            height={40}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        <h3 id={titleId}>{provider}</h3>

        <p>{clusters} Active Clusters</p>

        <Badge variant="success">Connected</Badge>
      </Card>
    </HoverLift>
  );
}