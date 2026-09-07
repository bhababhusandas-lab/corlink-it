import { useState } from "react";
import {
  servicesPage,
  serviceDetail,
  serviceTabs,
  serviceOverview,
  caseStudy,
} from "@/content/site";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CtaLink } from "@/components/ui/cta";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { Glyph, IconTile } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/**
 * Services page core, following the reference: a grid of service category
 * cards where the selected one fills blue, then a full-bleed detail band that
 * shows whatever is selected, then the section tab bar.
 *
 * The reference shows one row of six because that business has six services.
 * CORLINK IT has the full catalogue, so the same card runs to three rows —
 * every service is present, in the reference's card treatment.
 */
export function ServiceCatalogue() {
  const [active, setActive] = useState(0);
  const selected = servicesPage.items[active] ?? servicesPage.items[0];
  if (!selected) return null;

  // The case study is hidden while it is still an outline, so drop its tab
  // rather than leave a link that scrolls nowhere.
  const tabs = serviceTabs.filter((t) => !(t.id === "case-study" && caseStudy.draft));

  return (
    <>
      {/* Category cards */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow={servicesPage.hero.eyebrow}
            title="Solutions across our practice"
          />

          {/* Touch users tap these cards, so the hover hint is pointer-only. */}
          <p className="pointer-only body-copy mt-3">{servicesPage.hoverHint}</p>

          <ul className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {servicesPage.items.map((s, i) => {
              const isActive = active === i;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-pressed={isActive}
                    className={cn(
                      "group flex h-full w-full flex-col rounded-[var(--radius)] border p-4 text-left transition-all duration-200",
                      isActive
                        ? "border-[var(--blue-fill)] bg-[var(--blue-fill)] shadow-[var(--shadow-card-hover)]"
                        : "card-base card-lift",
                    )}
                  >
                    <span
                      className={cn("icon-tile h-10 w-10", isActive && "bg-white/20 text-white")}
                    >
                      <Glyph label={s.title} size={20} />
                    </span>

                    <span
                      className={cn(
                        "font-display mt-4 block text-[0.9rem] leading-snug font-semibold",
                        isActive ? "text-white" : "text-[var(--navy)]",
                      )}
                    >
                      {s.title}
                    </span>

                    <span
                      className={cn(
                        "mt-auto flex h-7 w-7 items-center justify-center self-end rounded-full border transition-colors",
                        isActive
                          ? "border-white/50 text-white"
                          : "border-[color-mix(in_srgb,var(--blue)_35%,transparent)] text-[var(--blue-ink)]",
                      )}
                    >
                      <ArrowGlyph className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Detail band for the selected service — full-bleed, as in the reference */}
      <section className="section-blue relative overflow-hidden">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="min-w-0 px-5 py-12 sm:px-6 lg:py-16 lg:pr-10 lg:pl-[max(2rem,calc((min(100vw,var(--shell))-1280px)/2+2rem))]">
            <p className="eyebrow">
              {String(active + 1).padStart(2, "0")}. {selected.title.toUpperCase()}
            </p>
            <h2 className="h-section mt-3 max-w-xl">{selected.title}</h2>
            <p className="body-copy mt-5 max-w-xl">{selected.body}</p>
            <CtaLink to={serviceDetail.cta.path} label={serviceDetail.cta.label} className="mt-7" />
          </div>

          <div className="relative min-h-[240px] lg:min-h-[400px]">
            <img
              key={selected.image}
              src={selected.image}
              alt={selected.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[var(--tint)] to-transparent lg:block"
            />

            {/* Pull quote card floating over the photograph */}
            <div className="card-base absolute right-4 bottom-4 max-w-[15rem] p-5 shadow-[var(--shadow-float)] lg:right-8 lg:bottom-8">
              <span
                aria-hidden="true"
                className="font-display block text-2xl leading-none text-[color-mix(in_srgb,var(--blue)_55%,transparent)]"
              >
                &ldquo;
              </span>
              <p className="font-display mt-2 text-[1.02rem] leading-snug font-semibold text-[var(--navy)]">
                {serviceDetail.quote}
              </p>
              <span aria-hidden="true" className="mt-3 block h-px w-8 bg-[var(--blue)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section tab bar — a tab whose section is not rendered would scroll nowhere. */}
      <nav
        aria-label="Sections on this page"
        className="sticky top-[72px] z-30 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_95%,transparent)] backdrop-blur-sm lg:top-20"
      >
        <Container>
          <ul className="-mb-px flex gap-1 overflow-x-auto">
            {tabs.map((t, i) => (
              <li key={t.id} className="shrink-0">
                <a
                  href={`#${t.id}`}
                  className={cn(
                    "block border-b-2 px-4 py-3.5 text-[0.85rem] font-semibold whitespace-nowrap transition-colors",
                    i === 0
                      ? "border-[var(--blue)] text-[var(--blue-ink)]"
                      : "border-transparent text-[var(--ink-muted)] hover:text-[var(--navy)]",
                  )}
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  );
}

/** Service overview — copy on the left, capability panel on the right. */
export function ServiceOverview() {
  return (
    <Section id="overview" tone="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal className="min-w-0">
            <p className="eyebrow">{serviceOverview.eyebrow}</p>
            <h2 className="h-section mt-3">{serviceOverview.title}</h2>
            {serviceOverview.body.map((p) => (
              <p key={p} className="body-copy mt-4 max-w-xl">
                {p}
              </p>
            ))}
            <CtaLink
              to={serviceOverview.cta.path}
              label={serviceOverview.cta.label}
              className="mt-7"
            />
          </Reveal>

          <Reveal
            id="key-features"
            className="section-blue min-w-0 rounded-[var(--radius)] p-6 lg:p-8"
            delay={100}
          >
            <ul className="space-y-5">
              {serviceOverview.capabilities.map((c) => (
                <li key={c.title} className="flex gap-4">
                  <IconTile label={c.title} className="h-10 w-10 bg-[var(--card-bg)]" size={20} />
                  <div className="min-w-0 pt-0.5">
                    <span className="block text-[0.92rem] font-semibold text-[var(--navy)]">
                      {c.title}
                    </span>
                    <span className="mt-0.5 block text-[0.82rem] text-[var(--ink-muted)]">
                      {c.body}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
