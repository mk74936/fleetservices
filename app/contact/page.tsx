import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet Services | Contact",
  description: "Reach the Fleet Services team for support or partnership requests.",
};

const contactDetails = [
  { label: "Phone", value: "+1 (555) 012-4410" },
  { label: "Email", value: "contact@fleetservices.com" },
  { label: "Office", value: "2480 Logistics Way, Austin, TX" },
];

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Contact</h1>
        <p className="text-base text-slate-600">
          Reach our team for support, partnerships, or service coordination.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {contactDetails.map((detail) => (
          <div
            key={detail.label}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <p className="text-sm font-medium text-slate-500">{detail.label}</p>
            <p className="mt-2 text-base font-semibold text-slate-900">{detail.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
