import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Fleet Services | Local Fleet Maintenance",
    template: "%s | Fleet Services",
  },
  description:
    "Fleet Services delivers local fleet maintenance, inspections, and repair scheduling for neighborhood operators.",
  keywords: [
    "fleet services",
    "local fleet maintenance",
    "neighborhood fleet repair",
    "vehicle inspections",
    "fleet scheduling",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
