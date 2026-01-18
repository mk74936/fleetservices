import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, email, or visit our auto service center in Austin, TX.",
};

export default function ContactPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Contact</h1>
        <p className="text-base text-slate-600">
          Call, message, or send a quick inquiry. We respond fast.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-medium text-slate-500">Phone</p>
          <a
            className="mt-2 block text-base font-semibold text-slate-900"
            href={`tel:${site.phone}`}
          >
            {site.phoneDisplay}
          </a>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-medium text-slate-500">Email</p>
          <a
            className="mt-2 block text-base font-semibold text-slate-900"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <p className="text-sm font-medium text-slate-500">Address</p>
          <p className="mt-2 text-base font-semibold text-slate-900">
            {site.address}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Send a message</h2>
          <p className="mt-2 text-sm text-slate-600">
            For booking requests, use the appointment form to save time.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Hours</h2>
            <div className="mt-3 space-y-1 text-sm text-slate-600">
              {site.hours.map((item) => (
                <p key={item.day}>
                  <span className="font-semibold text-slate-700">{item.day}:</span>{" "}
                  {item.hours}
                </p>
              ))}
            </div>
            <a
              className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
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
        </div>
      </div>
    </section>
  );
}
