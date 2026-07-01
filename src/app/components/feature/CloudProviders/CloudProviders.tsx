"use client";

import styles from "./CloudProviders.module.css";

import Heading from "@/src/app/components/ui/Heading";
import DataState from "@/src/app/components/ui/DataState";
import {
  StaggerItem,
  StaggerReveal,
} from "@/src/app/components/ui/motion";

import ProviderCard from "./ProviderCard";

import { useCloudMetrics } from "@/src/hooks/useCloudMetrics";

export default function CloudProviders() {
  const { data, isLoading, isError } = useCloudMetrics();

  return (
    <>
      <Heading
        id="cloud-providers-heading"
        eyebrow="Cloud Providers"
        title="Connect Every Infrastructure"
        subtitle="Monitor and optimize workloads across multiple cloud platforms."
        align="center"
      />

      <DataState
        isLoading={isLoading}
        isError={isError}
        loadingLabel="Loading cloud providers…"
        errorLabel="Error loading providers."
      >
        <StaggerReveal className={styles.grid}>
          {data?.map((provider) => (
            <StaggerItem key={provider.id}>
              <ProviderCard
                provider={provider.provider}
                clusters={provider.clusters}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </DataState>
    </>
  );
}
