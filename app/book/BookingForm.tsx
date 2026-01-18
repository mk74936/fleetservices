"use client";

import { useMemo, useState } from "react";
import { serviceOptions, site } from "../lib/site";

type BookingFormProps = {
  initialService?: string;
  initialType?: "personal" | "fleet";
};

const timeOptions = ["Morning", "Afternoon", "Evening"];
const dateOptions = ["Today", "Tomorrow", "This Week"];

export default function BookingForm({ initialService, initialType }: BookingFormProps) {
  const normalizedService = useMemo(() => {
    if (!initialService) return "";
    return serviceOptions.includes(initialService) ? initialService : "Other";
  }, [initialService]);

  const [customerType, setCustomerType] = useState<"personal" | "fleet">(
    initialType ?? "personal"
  );
  const [service, setService] = useState(normalizedService);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName.trim() || !phone.trim() || !service || !customerType) {
      setError("Please complete all required fields before submitting.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-800">
        <p className="text-base font-semibold text-emerald-900">
          Thanks! We received your request. We&apos;ll confirm shortly.
        </p>
        <p className="mt-2">
          Need faster help? Call us at{" "}
          <a className="font-semibold" href={`tel:${site.phone}`}>
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Customer Type *
          <select
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900"
            onChange={(event) =>
              setCustomerType(event.target.value as "personal" | "fleet")
            }
            value={customerType}
            required
          >
            <option value="personal">Personal</option>
            <option value="fleet">Fleet</option>
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Service Needed *
          <select
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900"
            onChange={(event) => setService(event.target.value)}
            value={service}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Preferred Date
          <select
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900"
            onChange={(event) => setPreferredDate(event.target.value)}
            value={preferredDate}
          >
            <option value="">Select</option>
            {dateOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Preferred Time
          <select
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900"
            onChange={(event) => setPreferredTime(event.target.value)}
            value={preferredTime}
          >
            <option value="">Select</option>
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Full Name *
          <input
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900"
            onChange={(event) => setFullName(event.target.value)}
            required
            type="text"
            value={fullName}
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Phone Number *
          <input
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900"
            onChange={(event) => setPhone(event.target.value)}
            required
            type="tel"
            value={phone}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Email
          <input
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            value={email}
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Message / Notes
          <input
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900"
            onChange={(event) => setMessage(event.target.value)}
            type="text"
            value={message}
          />
        </label>
      </div>

      {customerType === "fleet" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Company Name
            <input
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900"
              onChange={(event) => setCompanyName(event.target.value)}
              type="text"
              value={companyName}
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Vehicle Unit / Plate
            <input
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900"
              onChange={(event) => setUnitNumber(event.target.value)}
              type="text"
              value={unitNumber}
            />
          </label>
        </div>
      ) : null}

      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-xs text-slate-600">
        Spam protection: Cloudflare Turnstile placeholder (add site key in production).
      </div>

      {error ? <p className="text-sm text-rose-600">{error}</p> : null}

      <div className="flex flex-wrap gap-3">
        <button
          className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          type="submit"
        >
          Submit Request
        </button>
        <a
          className="rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          href={`tel:${site.phone}`}
        >
          Call Instead
        </a>
      </div>

      <div className="text-xs text-slate-500">
        By submitting, you agree that appointment requests require confirmation and pricing
        may vary based on inspection.
      </div>
    </form>
  );
}
