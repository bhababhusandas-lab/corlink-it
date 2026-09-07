import { serviceTicker } from "@/content/site";

/**
 * Thin service rail beneath the hero — the light equivalent of the reference's
 * partner strip: a bordered white band with the service labels moving slowly
 * across it, separated by small blue dots.
 */
export function TechRail() {
  const items = [...serviceTicker, ...serviceTicker];

  return (
    <section
      aria-label="Our services"
      className="relative overflow-hidden border-y border-[var(--line)] bg-[var(--paper)] py-6"
    >
      <div className="relative flex overflow-hidden">
        <ul className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
          {items.map((t, i) => (
            <li key={`${t}-${i}`} className="flex shrink-0 items-center gap-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]" aria-hidden="true" />
              <span className="text-[0.72rem] font-semibold tracking-[0.14em] whitespace-nowrap text-[var(--ink-muted)] uppercase">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Fade the band into the page edges instead of cutting the labels off. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--paper)] to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--paper)] to-transparent"
      />
    </section>
  );
}
