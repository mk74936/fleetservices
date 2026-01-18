"use client";

import { useState } from "react";
import { site } from "../lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName.trim() || !phone.trim()) {
      setError("Please provide your name and phone number.");
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
          Thanks! We&apos;ll respond shortly.
        </p>
        <p className="mt-2">
          For urgent needs, call{" "}
          <a className="font-semibold" href={`tel:${site.phone}`}>
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Name *
          <input
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            onChange={(event) => setFullName(event.target.value)}
            required
            type="text"
            value={fullName}
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Phone *
          <input
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
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
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            value={email}
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Message
          <input
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            onChange={(event) => setMessage(event.target.value)}
            type="text"
            value={message}
          />
        </label>
      </div>

      {error ? <p className="text-sm text-rose-600">{error}</p> : null}

      <button
        className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        type="submit"
      >
        Send Message
      </button>
      <p className="text-xs text-slate-500">
        We collect name, phone, and email to respond to your inquiry.
      </p>
    </form>
  );
}
