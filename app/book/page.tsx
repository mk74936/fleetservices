import type { Metadata } from "next";
import BookingForm from "./BookingForm";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Request auto service appointments in under 60 seconds.",
};

type BookPageProps = {
  searchParams?: { service?: string; type?: string };
};

export default function BookPage({ searchParams }: BookPageProps) {
  const initialType =
    searchParams?.type === "fleet" || searchParams?.type === "personal"
      ? searchParams.type
      : undefined;

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Book an appointment
        </h1>
        <p className="text-base text-slate-600">
          Request service in minutes. We will confirm the appointment by phone or
          email.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <BookingForm
            initialService={searchParams?.service}
            initialType={initialType}
          />
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
          <h2 className="text-lg font-semibold text-slate-900">What happens next?</h2>
          <ul className="space-y-2">
            <li>We review your request and confirm availability.</li>
            <li>Our team calls you to verify details.</li>
            <li>Fleet customers can add company billing notes.</li>
          </ul>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">Need immediate help?</p>
            <p className="mt-2 text-sm text-slate-600">
              Call us now at{" "}
              <a className="font-semibold text-slate-900" href={`tel:${site.phone}`}>
                {site.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
