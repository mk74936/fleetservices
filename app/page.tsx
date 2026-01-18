import type { Metadata } from "next";
import Link from "next/link";

const highlights = [
  {
    title: "24/7 Service Coordination",
    description: "Always-on dispatch support for urgent fleet needs.",
  },
  {
    title: "Preventative Maintenance",
    description: "Track inspections and keep vehicles compliant.",
  },
];

export const metadata: Metadata = {
  title: "Fleet Services | Home",
  description:
    "Reliable fleet support with service coordination, preventative maintenance, and easy booking.",
};

export default function HomePage() {
  return (
    <section className="space-y-8" aria-labelledby="homepage-heading">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Fleet Services
        </p>
        <h1
          id="homepage-heading"
          className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Reliable fleet support for every mile.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Manage maintenance, schedule bookings, and keep your vehicles on the road with
          our streamlined service platform.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          href="/book"
        >
          Book service
        </Link>
        <Link
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          href="/contact"
        >
          Contact support
        </Link>
      </div>
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Key capabilities</h2>
        <ul className="grid gap-4 sm:grid-cols-2" role="list">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
