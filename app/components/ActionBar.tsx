import Link from "next/link";
import { site } from "../lib/site";
import {
  IconCalendarCheck,
  IconMapPin,
  IconMessage,
  IconPhone,
} from "./icons";

export default function ActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-lg sm:hidden">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-4 text-xs font-semibold text-slate-700">
        <a
          className="flex flex-col items-center gap-1 px-2 py-3 transition hover:bg-slate-50"
          href={`tel:${site.phone}`}
        >
          <IconPhone className="h-4 w-4 text-slate-600" aria-hidden />
          <span>Call</span>
          <span className="text-[10px] text-slate-500">Now</span>
        </a>
        <a
          className="flex flex-col items-center gap-1 px-2 py-3 transition hover:bg-slate-50"
          href={site.directionsUrl}
          rel="noreferrer"
          target="_blank"
        >
          <IconMapPin className="h-4 w-4 text-slate-600" aria-hidden />
          <span>Directions</span>
          <span className="text-[10px] text-slate-500">Map</span>
        </a>
        <Link
          className="flex flex-col items-center gap-1 px-2 py-3 transition hover:bg-slate-50"
          href="/book"
        >
          <IconCalendarCheck className="h-4 w-4 text-slate-600" aria-hidden />
          <span>Book</span>
          <span className="text-[10px] text-slate-500">Appointment</span>
        </Link>
        <a
          className="flex flex-col items-center gap-1 px-2 py-3 transition hover:bg-slate-50"
          href={site.whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          <IconMessage className="h-4 w-4 text-slate-600" aria-hidden />
          <span>WhatsApp</span>
          <span className="text-[10px] text-slate-500">Text</span>
        </a>
      </div>
    </div>
  );
}
