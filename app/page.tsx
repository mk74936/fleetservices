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
  {
    title: "Compliance Tracking",
    description: "Automated reminders for inspections and documentation.",
  },
];

const quickIssues = [
  {
    title: "Breakdown assistance",
    description: "Get immediate help for roadside issues.",
    href: "/contact",
  },
  {
    title: "Maintenance request",
    description: "Schedule urgent shop time for repairs.",
    href: "/book",
  },
  {
    title: "Parts availability",
    description: "Confirm parts and ETAs with our team.",
    href: "/contact",
  },
  {
    title: "New fleet onboarding",
    description: "Set up new vehicles and service plans.",
    href: "/book",
  },
];

const nextSteps = [
  "Share the vehicle details and current issue.",
  "We match you with the closest approved provider.",
  "Track updates and approvals from your dashboard.",
];

export const metadata: Metadata = {
  title: "Fleet Services | Home",
  description:
    "Reliable fleet support with service coordination, preventative maintenance, and easy booking.",
};

export default function HomePage() {
  return (
    <section className="space-y-10 pb-16 sm:pb-0" aria-labelledby="homepage-heading">
      <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-sm sm:px-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Fleet Services
          </p>
          <h1 id="homepage-heading" className="text-3xl font-semibold sm:text-4xl">
            Reliable fleet support for every mile.
          </h1>
          <p className="max-w-2xl text-base text-slate-200">
            Manage maintenance, schedule bookings, and keep your vehicles on the road with
            real-time updates and approved service partners.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="/book"
            >
              Book service
            </Link>
            <Link
              className="rounded-full border border-slate-500 px-5 py-2 text-sm font-semibold text-white transition hover:border-slate-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="/contact"
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Quick issue links</h2>
            <p className="text-sm text-slate-600">
              Choose an option and we will route your request to the right dispatch team.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickIssues.map((issue) => (
              <Link
                key={issue.title}
                href={issue.href}
                className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                <h3 className="text-base font-semibold text-slate-900">{issue.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{issue.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">What happens next</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-600">
            {nextSteps.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" aria-hidden />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Key capabilities</h2>
        <ul className="grid gap-4 sm:grid-cols-3" role="list">
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

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 px-6 py-3 backdrop-blur sm:hidden">
        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm"
          >
            Book service
          </Link>
          <Link
            href="/contact"
            className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-900"
          >
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
