import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Personal and fleet vehicle services with quick booking options.",
};

const personalServices = [
  {
    title: "Maintenance & Oil Changes",
    description: "Quick, routine service to keep your vehicle running smoothly.",
  },
  {
    title: "Brake Service",
    description: "Inspection, pad replacement, and brake system repairs.",
  },
  {
    title: "Engine Diagnostics",
    description: "Check engine light scans and accurate issue reporting.",
  },
  {
    title: "Tire Service",
    description: "Rotations, balancing, and flat repair for safer driving.",
  },
];

const fleetServices = [
  {
    title: "Priority Scheduling",
    description: "Fast turnaround for commercial vehicles with clear updates.",
  },
  {
    title: "Multi-Vehicle Support",
    description: "Coordinated appointments for multiple vehicles at once.",
  },
  {
    title: "Fleet Inspections",
    description: "DOT inspections and preventive maintenance planning.",
  },
];

const commonIssues = [
  "Warning lights & diagnostics",
  "No-start / battery failures",
  "Brake squeal or vibration",
  "AC not cooling",
  "Suspension noise",
  "Tire wear or damage",
];

const steps = [
  { title: "Contact", description: "Call or submit a booking request in minutes." },
  { title: "Diagnose", description: "We inspect and confirm the needed repairs." },
  { title: "Repair & Deliver", description: "Work is completed and ready for pickup." },
];

export default function ServicesPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Services</h1>
        <p className="text-base text-slate-600">
          Clear service options for personal vehicles and fleets — with quick booking
          available.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Personal Vehicle Services</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {personalServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <Link
                className="mt-4 inline-flex text-sm font-semibold text-slate-900"
                href="/book?type=personal"
              >
                Book Appointment →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Fleet Services</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {fleetServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <Link
                className="mt-4 inline-flex text-sm font-semibold text-slate-900"
                href="/book?type=fleet"
              >
                Book Appointment →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Common issues we fix</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {commonIssues.map((issue) => (
            <div
              key={issue}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
            >
              {issue}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">How our service works</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-500">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
