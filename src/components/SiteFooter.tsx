import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

const serviceLinks = [
  { to: "/health-insurance", label: "Health Insurance" },
  { to: "/life-insurance", label: "Life Insurance" },
  { to: "/medicare-insurance", label: "Medicare Insurance" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">Belinda Scott</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Insurance Agent
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
            Personal, one-on-one guidance for health, life, and Medicare coverage —
            explained in plain language.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Services
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-cream/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-cream/80 transition-colors hover:text-gold">
                All Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-cream/80 transition-colors hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Get in Touch
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cream transition-colors hover:text-gold"
          >
            <Phone className="size-4" />
            {site.phoneDisplay}
          </a>
          <p className="mt-3 flex items-start gap-2 text-sm text-cream/75">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {site.location}
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <p className="text-xs leading-relaxed text-cream/50">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            This site is for general information and is not affiliated with or
            endorsed by the U.S. government or the federal Medicare program.
          </p>
        </div>
      </div>
    </footer>
  );
}
