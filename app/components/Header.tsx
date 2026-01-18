import Link from "next/link";
import { site } from "../lib/site";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            {site.name}
          </Link>
          <span className="hidden rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 sm:inline-flex">
            Open Now
          </span>
        </div>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            href={`tel:${site.phone}`}
          >
            Call Now
          </a>
          <span className="text-xs font-medium text-slate-600 sm:hidden">
            {site.phoneDisplay}
          </span>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-white md:hidden">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 text-xs font-medium text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
