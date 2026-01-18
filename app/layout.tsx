import type { Metadata } from "next";
import type React from "react";
import StickyActionBar from "../components/StickyActionBar";

export const metadata: Metadata = {
  title: "Fleet Services",
  description: "Mobile repair service booking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
        <StickyActionBar />
      </body>
    </html>
  );
}
