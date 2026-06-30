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

  if (isLoading)
    return <p>Loading...</p>;

  if (isError)
    return <p>Error loading providers.</p>;

  return (
    <section>

      <Heading
        eyebrow="Cloud Providers"
        title="Connect Every Infrastructure"
        subtitle="Monitor and optimize workloads across multiple cloud platforms."
        align="center"
      />

      <div className={styles.grid}>

        {data?.map((provider, index) => (
          <ProviderCard
            key={provider.id}
            provider={provider.provider}
            clusters={provider.clusters}
            index={index}
          />
        ))}

      </div>

    </section>
  );
}