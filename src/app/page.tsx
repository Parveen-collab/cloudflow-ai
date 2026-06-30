"use client";

import Section from "@/src/app/components/ui/Section";
import Heading from "@/src/app/components/ui/Heading";
import Stat from "@/src/app/components/ui/Stat";
import AnimatedCounter from "@/src/app/components/ui/AnimatedCounter";

import { Cpu } from "lucide-react";

import { useCloudMetrics } from "@/src/app/hooks/useCloudMetrics";

export default function Home() {
  const {
    data,
    isLoading,
    isError,
  } = useCloudMetrics();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong.</p>;
  }

  return (
    <Section>

      <Heading
        eyebrow="Live Metrics"
        title="Cloud Infrastructure"
        subtitle="Fetched from DummyJSON and mapped into cloud metrics."
        level="h1"
        align="center"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "24px",
          marginTop: "48px",
        }}
      >

        {data?.map((metric) => (
          <Stat
            key={metric.id}
            icon={<Cpu size={20} />}
            title={metric.provider}
            value={
              <AnimatedCounter
                value={metric.cpu}
                suffix="%"
              />
            }
            progress={metric.cpu}
            description={`${metric.clusters} Clusters`}
          />
        ))}

      </div>

    </Section>
  );
}