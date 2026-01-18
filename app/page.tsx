export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Fleet Services
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Reliable fleet support for every mile.
        </h1>
      </div>
      <p className="max-w-2xl text-base text-slate-600">
        Manage maintenance, schedule bookings, and keep your vehicles on the road with
        our streamlined service platform.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "24/7 Service Coordination",
            description: "Always-on dispatch support for urgent fleet needs.",
          },
          {
            title: "Preventative Maintenance",
            description: "Track inspections and keep vehicles compliant.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
