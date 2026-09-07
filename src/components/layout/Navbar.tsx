import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { brand, navCta, navLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/layout/ThemeSwitch";
import { CtaLink } from "@/components/ui/cta";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_95%,transparent)] backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center" aria-label={`${brand.name} home`}>
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="brand-mark h-9 w-auto shrink-0 lg:h-11"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const active = pathname === l.path;
            return (
              <Link
                key={l.path}
                to={l.path}
                className={cn(
                  "relative px-3.5 py-2 text-[0.9rem] font-medium transition-colors",
                  active
                    ? "text-[var(--blue-ink)]"
                    : "text-[var(--ink)] hover:text-[var(--blue-ink)]",
                )}
              >
                {l.name}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-[1.5px] h-0.5 origin-left rounded-full bg-[var(--blue)] transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeSwitch className="hidden lg:flex" />

          <CtaLink to={navCta.path} label={navCta.label} className="hidden sm:inline-flex" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius)] border border-[var(--line)] text-[var(--navy)] transition-colors hover:border-[var(--blue)] hover:text-[var(--blue)] lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile panel — nothing is hidden from mobile, the full nav is here. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto border-b border-[var(--line)] bg-[var(--paper)] shadow-[var(--shadow-float)] lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-4 sm:px-6">
          {navLinks.map((l) => {
            const active = pathname === l.path;
            return (
              <Link
                key={l.path}
                to={l.path}
                className={cn(
                  "border-b border-[var(--line-soft)] py-3.5 text-base font-medium transition-colors last:border-b-0",
                  active
                    ? "text-[var(--blue-ink)]"
                    : "text-[var(--ink)] hover:text-[var(--blue-ink)]",
                )}
              >
                {l.name}
              </Link>
            );
          })}
          <div className="mt-5 mb-2 flex items-center gap-3">
            <CtaLink to={navCta.path} label={navCta.label} className="flex-1 justify-center" />
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
}
