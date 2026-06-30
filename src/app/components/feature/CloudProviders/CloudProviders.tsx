"use client";

import styles from "./CloudProviders.module.css";

import Heading from "@/src/app/components/ui/Heading";

import ProviderCard from "./ProviderCard";

import { useCloudMetrics } from "@/src/hooks/useCloudMetrics";

export default function CloudProviders() {
  const {
    data,
    isLoading,
    isError,
  } = useCloudMetrics();

  if (isLoading) {
    return (
      <p role="status" aria-live="polite" aria-busy="true">
        Loading cloud providers…
      </p>
    );
  }

  if (isError) {
    return (
      <p role="alert">
        Error loading providers.
      </p>
    );
  }

  return (
    <>
      <Heading
        id="cloud-providers-heading"
        eyebrow="Cloud Providers"
        title="Connect Every Infrastructure"
        subtitle="Monitor and optimize workloads across multiple cloud platforms."
        align="center"
      />

      <ul className={styles.grid}>
        {data?.map((provider, index) => (
          <li key={provider.id}>
            <ProviderCard
              provider={provider.provider}
              clusters={provider.clusters}
              index={index}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
