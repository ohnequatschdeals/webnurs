export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="glass-card p-6">KPI 1</div>
        <div className="glass-card p-6">KPI 2</div>
        <div className="glass-card p-6">KPI 3</div>
      </div>
    </main>
  );
}
