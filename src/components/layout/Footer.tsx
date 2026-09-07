import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { brand, footer, navLinks } from "@/content/site";
import { Glyph } from "@/components/ui/icons";
import type { LucideIcon } from "@/components/ui/icons";

const SOCIAL_ICONS: Readonly<Record<string, LucideIcon>> = {
  LinkedIn: Linkedin,
  X: Twitter,
  Instagram: Instagram,
};

export function Footer() {
  // Only profiles with a real URL are rendered — see footer.social in site.ts.
  const socialProfiles = footer.social.filter((s) => s.url);

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.9fr_1.3fr_0.8fr] lg:gap-10">
          <div className="min-w-0">
            <img src={brand.logo} alt={`${brand.footerName} logo`} className="h-11 w-auto" />
            <p className="body-copy mt-5 max-w-xs">{footer.tagline}</p>

            {socialProfiles.length ? (
              <div className="mt-6 flex gap-2.5">
                {socialProfiles.map((s) => {
                  const Icon = SOCIAL_ICONS[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-[var(--radius)] bg-[var(--tint)] text-[var(--blue)] transition-colors hover:bg-[var(--blue)] hover:text-white"
                      aria-label={`${brand.footerName} on ${s.label}`}
                    >
                      {Icon ? (
                        <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
                      ) : (
                        <span className="text-[0.65rem] font-semibold">{s.short}</span>
                      )}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading} className="min-w-0">
              <h3 className="font-sans text-[0.72rem] font-semibold tracking-[0.12em] text-[var(--navy)] uppercase">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.path}
                      className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--blue-ink)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="min-w-0">
            <h3 className="font-sans text-[0.72rem] font-semibold tracking-[0.12em] text-[var(--navy)] uppercase">
              {footer.contactHeading}
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-[var(--ink-muted)]">
              <li className="flex gap-3">
                <Glyph label="Electronic" className="mt-0.5 shrink-0 text-[var(--blue)]" />
                <a
                  className="min-w-0 transition-colors hover:text-[var(--blue-ink)]"
                  href={`mailto:${footer.contact.email}`}
                >
                  {footer.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Glyph label="Voice" className="mt-0.5 shrink-0 text-[var(--blue)]" />
                <a
                  className="min-w-0 transition-colors hover:text-[var(--blue-ink)]"
                  href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                >
                  {footer.contact.phone}
                </a>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <Glyph label="Physical" className="mt-0.5 shrink-0 text-[var(--blue)]" />
                <span className="min-w-0">{footer.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Glyph label="Web Development" className="mt-0.5 shrink-0 text-[var(--blue)]" />
                <a
                  className="min-w-0 transition-colors hover:text-[var(--blue-ink)]"
                  href={`https://${footer.contact.website}`}
                >
                  {footer.contact.website}
                </a>
              </li>
              <li className="pl-[30px] text-[0.78rem] text-[var(--ink-soft)]">
                {footer.contact.gst}
              </li>
            </ul>
          </div>

          {/* Legal — its own column, as in the reference footer. */}
          <div className="min-w-0">
            <h3 className="font-sans text-[0.72rem] font-semibold tracking-[0.12em] text-[var(--navy)] uppercase">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--blue-ink)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--blue-ink)]"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hair-line mt-12" />

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="text-[0.8rem] text-[var(--ink-muted)] transition-colors hover:text-[var(--blue-ink)]"
              >
                {l.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-1 text-[0.8rem] text-[var(--ink-soft)] sm:flex-row sm:items-center sm:gap-4">
            <span>{footer.copyright}</span>
            <span aria-hidden="true" className="hidden h-3 w-px bg-[var(--line)] sm:block" />
            <span>
              {footer.credit.prefix}{" "}
              <a
                href={footer.credit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--blue-ink)] transition-colors hover:text-[var(--blue-ink-hover)]"
              >
                {footer.credit.label}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
