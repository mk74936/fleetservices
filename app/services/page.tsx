import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBadgeCheck,
  IconCalendarCheck,
  IconClipboardCheck,
  IconGauge,
  IconShieldCheck,
  IconTruck,
  IconWrench,
} from "../components/icons";

export const metadata: Metadata = {
  title: "Services",
  description: "Personal and fleet vehicle services with quick booking options.",
};

const personalServices = [
  {
    title: "Maintenance & Oil Changes",
    description: "Quick, routine service to keep your vehicle running smoothly.",
    icon: IconWrench,
  },
  {
    title: "Brake Service",
    description: "Inspection, pad replacement, and brake system repairs.",
    icon: IconShieldCheck,
  },
  {
    title: "Engine Diagnostics",
    description: "Check engine light scans and accurate issue reporting.",
    icon: IconGauge,
  },
  {
    title: "Tire Service",
    description: "Rotations, balancing, and flat repair for safer driving.",
    icon: IconBadgeCheck,
  },
];

const fleetServices = [
  {
    title: "Priority Scheduling",
    description: "Fast turnaround for commercial vehicles with clear updates.",
    icon: IconTruck,
  },
  {
    title: "Multi-Vehicle Support",
    description: "Coordinated appointments for multiple vehicles at once.",
    icon: IconClipboardCheck,
  },
  {
    title: "Fleet Inspections",
    description: "DOT inspections and preventive maintenance planning.",
    icon: IconBadgeCheck,
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
  {
    title: "Contact",
    description: "Call or submit a booking request in minutes.",
    icon: IconCalendarCheck,
  },
  {
    title: "Diagnose",
    description: "We inspect and confirm the needed repairs.",
    icon: IconGauge,
  },
  {
    title: "Repair & Deliver",
    description: "Work is completed and ready for pickup.",
    icon: IconWrench,
  },
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
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                <service.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <Link
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
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
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                <service.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <Link
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
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
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
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
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-500">Step {index + 1}</p>
                <step.icon className="h-5 w-5 text-emerald-500" aria-hidden />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
