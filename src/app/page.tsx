import Card from "@/src/app/components/ui/Card";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "4rem",
        background: "var(--color-background)",
        display: "grid",
        gap: "2rem",
      }}
    >
      <Card hover>
        <h2>AWS</h2>
        <p>12 Clusters</p>
      </Card>

      <Card variant="elevated" hover>
        <h2>Azure</h2>
        <p>8 Subscriptions</p>
      </Card>

      <Card variant="outline">
        <h2>Google Cloud</h2>
        <p>24 Projects</p>
      </Card>

      <Card variant="glass" hover>
        <h2>On-Prem</h2>
        <p>6 Nodes</p>
      </Card>
    </main>
  );
}