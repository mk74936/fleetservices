import Link from "next/link";

const actions = [
  { label: "Call", href: "tel:+18005551234" },
  { label: "Book", href: "/book" },
  { label: "Directions", href: "https://maps.google.com/?q=Fleet+Services" },
  { label: "WhatsApp", href: "https://wa.me/18005551234" },
];

export default function StickyActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex-1 rounded-full bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white"
          >
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
