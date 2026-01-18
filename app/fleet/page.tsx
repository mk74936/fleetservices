const fleetHighlights = [
  {
    label: "Active Vehicles",
    value: "128",
  },
  {
    label: "On-time Service Rate",
    value: "98%",
  },
  {
    label: "Average Downtime",
    value: "2.4 hrs",
  },
];

export default function FleetPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Fleet</h1>
        <p className="text-base text-slate-600">
          Keep tabs on performance benchmarks and vehicle readiness.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {fleetHighlights.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-200 bg-white p-5 text-center"
          >
            <p className="text-sm font-medium text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
