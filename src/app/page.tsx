import Section from "@/src/app/components/ui/Section";

import CloudProviders from "@/src/app/components/feature/CloudProviders";
import Infrastructure from "@/src/app/components/feature/Infrastructure";
import Optimization from "@/src/app/components/feature/Optimization";

export default function Home() {
  return (
    <main id="main-content">
      <Section
        id="cloud-providers"
        aria-labelledby="cloud-providers-heading"
      >
        <CloudProviders />
      </Section>

      <Section
        id="infrastructure"
        aria-labelledby="infrastructure-heading"
      >
        <Infrastructure />
      </Section>

      <Section
        id="optimization"
        aria-labelledby="optimization-heading"
      >
        <Optimization />
      </Section>
    </main>
  );
}
