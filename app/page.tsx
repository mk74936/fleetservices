import Link from "next/link";

const quickIssues = [
  "Dead Battery",
  "Brake Service",
  "Oil Change",
  "No Start",
  "AC Repair",
  "Tire Swap",
];

const ctas = [
  { label: "Call Now", href: "tel:+18005551234", variant: "primary" },
  { label: "Book Service", href: "/book", variant: "secondary" },
  { label: "Directions", href: "https://maps.google.com/?q=Fleet+Services", variant: "ghost" },
  { label: "WhatsApp", href: "https://wa.me/18005551234", variant: "ghost" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
              FS
            </div>
            <div>
              <p className="text-base font-semibold">Fleet Services</p>
              <p className="text-xs text-slate-500">Mobile Auto Repair</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <Link href="/services" className="hover:text-slate-900">
              Services
            </Link>
            <Link href="/book" className="hover:text-slate-900">
              Book
            </Link>
            <Link href="/reviews" className="hover:text-slate-900">
              Reviews
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 md:hidden">
              Menu
            </button>
            <Link
              href="tel:+18005551234"
              className="hidden rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 md:inline-flex"
            >
              Call Now
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                On-demand mobile mechanics
              </p>
              <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
                Fleet repairs delivered to your driveway in under 90 minutes.
              </h1>
              <p className="text-base text-slate-600 md:text-lg">
                From quick diagnostics to full-service repairs, our certified techs show up
                with the tools, parts, and updates you need to keep your fleet running.
              </p>
              <div className="flex flex-wrap gap-3">
                {ctas.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={
                      cta.variant === "primary"
                        ? "rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
                        : cta.variant === "secondary"
                          ? "rounded-full border border-slate-900 px-5 py-3 text-sm font-semibold text-slate-900"
                          : "rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600"
                    }
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Quick Issue Selector</p>
                <p className="mt-2 text-sm text-slate-500">
                  Tap a service to jump straight into booking.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {quickIssues.map((issue) => (
                    <Link
                      key={issue}
                      href={`/book?service=${encodeURIComponent(issue)}`}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300"
                    >
                      {issue}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Live dispatch coverage
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">48 active techs</p>
                  <p className="mt-1 text-sm text-slate-500">
                    On call across Metro Atlanta and surrounding suburbs.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold text-slate-900">Next availability</p>
                  <p className="mt-2 text-3xl font-semibold text-emerald-600">Today, 4:30 PM</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Book now to lock in same-day service.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold text-slate-900">Trusted by fleets</p>
                  <p className="mt-2 text-sm text-slate-500">
                    "They cut our downtime by 40% in the first month."
                  </p>
                  <p className="mt-3 text-xs font-semibold text-slate-400">— Atlas Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
