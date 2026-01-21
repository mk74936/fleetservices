import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconBadgeCheck,
  IconBattery,
  IconCalendarCheck,
  IconClock,
  IconDroplet,
  IconGauge,
  IconMapPin,
  IconMessage,
  IconPhone,
  IconShieldCheck,
  IconSnowflake,
  IconSparkles,
  IconWrench,
} from "./components/icons";
import { quickIssues, site } from "./lib/site";

const trustSignals = [
  { label: "Certified technicians", icon: IconBadgeCheck },
  { label: "Transparent pricing", icon: IconShieldCheck },
  { label: "Fast turnaround", icon: IconClock },
  { label: "Warranty on parts & labor", icon: IconSparkles },
];

const featuredServices = [
  { label: "Oil Change", icon: IconDroplet },
  { label: "Brake Service", icon: IconWrench },
  { label: "Tire Service", icon: IconGauge },
  { label: "Engine Diagnostics", icon: IconGauge },
  { label: "Suspension", icon: IconWrench },
  { label: "Battery Service", icon: IconBattery },
  { label: "AC Service", icon: IconSnowflake },
  { label: "Safety Inspection", icon: IconBadgeCheck },
];

const testimonials = [
  {
    name: "Luis R.",
    quote: "In and out same day. They explained everything clearly and called when it was ready.",
  },
  {
    name: "Kara M.",
    quote: "Booked from my phone, got a fast confirmation, and the repair was smooth.",
  },
  {
    name: "BlueWave Logistics",
    quote: "Fleet scheduling is easy and they keep our vans on the road.",
  },
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Truck & auto repair for personal and fleet vehicles. Call, book, or get directions in seconds.",
};

export default function HomePage() {
  return (
    <div className="space-y-16" aria-labelledby="homepage-heading">
      <section className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 shadow-sm">
              <IconSparkles className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
              Personal + Fleet Service
            </div>
            <h1
              id="homepage-heading"
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Fast, reliable auto service — personal + fleet support.
            </h1>
            <p className="max-w-2xl text-base text-slate-600">
              Same-day service options available. Call now or request an appointment in
              under 60 seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                href={`tel:${site.phone}`}
              >
                <IconPhone className="h-4 w-4" aria-hidden />
                Call Now
              </a>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                href="/book"
              >
                <IconCalendarCheck className="h-4 w-4" aria-hidden />
                Book Appointment
              </Link>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                href={site.directionsUrl}
                rel="noreferrer"
                target="_blank"
              >
                <IconMapPin className="h-4 w-4" aria-hidden />
                Get Directions
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                href={site.whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                <IconMessage className="h-4 w-4" aria-hidden />
                WhatsApp / Text Us
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold text-slate-900">
              What do you need help with today?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Tap a service to pre-fill your booking request.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {quickIssues.map((issue) => (
                <Link
                  key={issue}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-900 transition hover:border-emerald-200 hover:bg-white hover:shadow-sm"
                  href={`/book?service=${encodeURIComponent(issue)}`}
                >
                  {issue}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-sm font-semibold text-emerald-900">
            <IconBadgeCheck className="h-5 w-5" aria-hidden />
            ASE-certified technicians on staff.
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 shadow-sm">
            <IconClock className="h-5 w-5 text-slate-700" aria-hidden />
            Same-day slots for urgent repairs.
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 shadow-sm">
            <IconSparkles className="h-5 w-5 text-slate-700" aria-hidden />
            Digital updates sent to your phone.
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">
            AI-guided service planning, delivered locally.
          </h2>
          <p className="text-sm text-slate-600">
            We map every visit with clear visuals and easy-to-follow recommendations so
            you know what your vehicle needs before work begins.
          </p>
          <ul className="text-sm font-medium text-slate-700">
            <li>Clear status updates</li>
            <li>Photos and notes from technicians</li>
            <li>Priority scheduling for urgent repairs</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/Images/hero-vehicle-service.svg"
            alt="Illustration of a vehicle service visit"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Personal Vehicle Service
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Maintenance</li>
            <li>Repairs</li>
            <li>Inspections</li>
          </ul>
          <Link
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            href="/book?type=personal"
          >
            <IconCalendarCheck className="h-4 w-4" aria-hidden />
            Book Personal Service
          </Link>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Fleet Service</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Priority scheduling</li>
            <li>Multi-vehicle support</li>
            <li>Fleet billing available</li>
          </ul>
          <Link
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            href="/book?type=fleet"
          >
            <IconCalendarCheck className="h-4 w-4" aria-hidden />
            Book Fleet Service
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Why drivers trust us</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <div
              key={signal.label}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
            >
              <signal.icon className="h-4 w-4 text-emerald-500" aria-hidden />
              {signal.label}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Featured services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <Link
              key={service.label}
              href="/services"
              className="group rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition group-hover:bg-emerald-500">
                  <service.icon className="h-4 w-4" aria-hidden />
                </span>
                {service.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Reviews</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
        <Link className="text-sm font-semibold text-slate-900" href="/contact">
          Read more reviews →
        </Link>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Visit us in {site.city}</h2>
          <p className="text-sm text-slate-600">{site.address}</p>
          <div className="space-y-1 text-sm text-slate-600">
            {site.hours.map((item) => (
              <p key={item.day}>
                <span className="font-semibold text-slate-700">{item.day}:</span>{" "}
                {item.hours}
              </p>
            ))}
          </div>
          <a
            className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            href={site.directionsUrl}
            rel="noreferrer"
            target="_blank"
          >
            Get Directions
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <iframe
            className="h-64 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={site.mapEmbedUrl}
            title="FleetCare Auto Service map"
          />
        </div>
      </section>
    </div>
  );
}
