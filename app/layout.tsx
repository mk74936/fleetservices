import type { Metadata } from "next";
import "./globals.css";
import ActionBar from "./components/ActionBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { site } from "./lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Auto & Fleet Service`,
    template: `%s | ${site.name}`,
  },
  description:
    "Fast, reliable auto service for personal vehicles and fleets. Call, book, or get directions in seconds.",
  openGraph: {
    title: `${site.name} | Auto & Fleet Service`,
    description:
      "Personal and fleet repair with same-day options, clear pricing, and fast turnaround.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-gradient-to-b from-slate-50 via-white to-slate-100 pb-20 sm:pb-0">
          <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-12">
            {children}
          </div>
        </main>
        <ActionBar />
        <Footer />
      </body>
    </html>
  );
}
