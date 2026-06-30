import Section from "@/src/app/components/ui/Section";

import CloudProviders from "@/src/app/components/feature/CloudProviders";
import Infrastructure from "@/src/app/components/feature/Infrastructure";
import Optimization from "@/src/app/components/feature/Optimization";

export default function Home() {
  return (
    <>
      <Section>
        <CloudProviders />
      </Section>

      <Section>
        <Infrastructure />
      </Section>

      <Section>
        <Optimization />
      </Section>
    </>
  );
}