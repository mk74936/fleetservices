import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Fleet Services",
  description: "Priority scheduling and multi-vehicle support for fleet customers.",
};

const fleetBenefits = [
  "Priority scheduling for commercial vehicles",
  "Multi-vehicle support with a single point of contact",
  "Business invoicing (future availability)",
  "Preventive maintenance plans (coming soon)",
];

const fleetUseCases = [
  "Delivery vans and box trucks",
  "Company cars and sales fleets",
  "Taxis, rideshare, and shuttle vehicles",
  "Contractor trucks and utility vehicles",
];

export default function FleetPage() {
  return (
    <section className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Fleet services built for uptime.
          </h1>
          <p className="text-base text-slate-600">
            Get priority scheduling, streamlined communication, and reliable repairs that
            keep your business moving.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/Images/fleet-bay.svg"
            alt="Illustration of fleet vehicles in a service bay"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Who fleet service is for</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {fleetUseCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Fleet benefits</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {fleetBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/Images/technician-tools.svg"
            alt="Technician planning fleet maintenance"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-3 text-sm text-slate-600">
          <h2 className="text-xl font-semibold text-slate-900">
            Proactive maintenance for every vehicle.
          </h2>
          <p>
            We track inspection notes, maintenance windows, and fleet history so your
            drivers are never surprised by downtime.
          </p>
          <ul className="space-y-2 font-medium text-slate-700">
            <li>Digital service records for every unit</li>
            <li>Maintenance cadence reminders</li>
            <li>Fast approval workflows</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <p className="font-semibold text-slate-900">Need fleet support today?</p>
        <p className="mt-2">
          Call our fleet desk at{" "}
          <a className="font-semibold text-slate-900" href={`tel:${site.phone}`}>
            {site.phoneDisplay}
          </a>{" "}
          or submit a fleet booking request in minutes.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            href="/book?type=fleet"
          >
            Fleet Booking
          </Link>
          <a
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
            href={`tel:${site.phone}`}
          >
            Call for Fleet Support
          </a>
        </div>
      </div>
    </section>
  );
}
