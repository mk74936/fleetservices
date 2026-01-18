import Link from "next/link";
import { site } from "../lib/site";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet Services" },
  { href: "/book", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 text-sm text-slate-600 md:grid-cols-[2fr,1fr,1fr]">
        <div className="space-y-3">
          <p className="text-base font-semibold text-slate-900">{site.name}</p>
          <p>{site.address}</p>
          <p>
            <a className="font-medium text-slate-900" href={`tel:${site.phone}`}>
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            <a className="font-medium text-slate-900" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <div className="space-y-1">
            {site.hours.map((item) => (
              <p key={item.day}>
                <span className="font-medium text-slate-700">{item.day}:</span>{" "}
                {item.hours}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-base font-semibold text-slate-900">Quick links</p>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-slate-900" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-base font-semibold text-slate-900">Legal</p>
          <ul className="space-y-1">
            <li>Services are subject to inspection and availability.</li>
            <li>Pricing may vary based on vehicle condition and parts availability.</li>
            <li>Appointment requests require confirmation.</li>
            <li>
              Third-party product and company names mentioned herein may be trademarks of
              their respective owners.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2024 {site.name}. All rights reserved.</span>
          <span>
            Privacy: We collect name, phone, and email to respond to inquiries. Contact{" "}
            {site.email} for data deletion requests.
          </span>
        </div>
      </div>
    </footer>
  );
}
