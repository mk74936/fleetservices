import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet Services | Book",
  description: "Request service appointments and quotes for your fleet.",
};

export default function BookPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Book</h1>
        <p className="text-base text-slate-600">
          Schedule service appointments and request quotes for your fleet.
        </p>
      </div>
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6">
        <p className="text-sm text-slate-600">
          Booking tools will appear here. In the meantime, email
          <span className="font-medium text-slate-900"> bookings@fleetservices.com</span>
          .
        </p>
      </div>
    </section>
  );
}
