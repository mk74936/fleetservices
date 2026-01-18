import type { Metadata } from "next";
import Link from "next/link";
import { quickIssues, site } from "./lib/site";

const trustSignals = [
  "Certified technicians",
  "Transparent pricing",
  "Fast turnaround",
  "Warranty on parts & labor",
];

const featuredServices = [
  "Oil Change",
  "Brake Service",
  "Tire Service",
  "Engine Diagnostics",
  "Suspension",
  "Battery Service",
  "AC Service",
  "Safety Inspection",
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
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Personal + Fleet Service
            </p>
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
                className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                href={`tel:${site.phone}`}
              >
                Call Now
              </a>
              <Link
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                href="/book"
              >
                Book Appointment
              </Link>
              <a
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                href={site.directionsUrl}
                rel="noreferrer"
                target="_blank"
              >
                Get Directions
              </a>
              <a
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                href={site.whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp / Text Us
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-300 hover:bg-white"
                  href={`/book?service=${encodeURIComponent(issue)}`}
                >
                  {issue}
                </Link>
              ))}
            </div>
          </div>
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
            className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            href="/book?type=personal"
          >
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
            className="mt-4 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            href="/book?type=fleet"
          >
            Book Fleet Service
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Why drivers trust us</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <div
              key={signal}
              className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
            >
              {signal}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Featured services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <Link
              key={service}
              href="/services"
              className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300"
            >
              {service}
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
