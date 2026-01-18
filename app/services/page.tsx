const services = [
  {
    title: "Routine Maintenance",
    description: "Oil changes, inspections, and scheduled upkeep.",
  },
  {
    title: "Roadside Assistance",
    description: "Rapid response for breakdowns and urgent repairs.",
  },
  {
    title: "Telematics Reporting",
    description: "Real-time visibility into vehicle health and usage.",
  },
];

export default function ServicesPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Services</h1>
        <p className="text-base text-slate-600">
          Explore the full suite of fleet services available to your organization.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-lg font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
