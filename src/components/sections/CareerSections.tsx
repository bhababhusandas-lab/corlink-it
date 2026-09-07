import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { brand, careersCta, careersWhy, finalCta, opportunitiesPage } from "@/content/site";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CtaLink, CardLink } from "@/components/ui/cta";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { Glyph, IconTile, MapPin } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";

const ALL = "All Departments";

/**
 * Current opportunities — the reference's card grid with a department filter.
 * Each card is an icon tile beside the role, its location and type, and a link.
 *
 * The "don't see a fit" note rides in the grid as a final tinted card, which is
 * where the reference's sixth slot sits.
 */
export function CurrentOpportunities() {
  const [dept, setDept] = useState(ALL);

  const departments = useMemo(
    () => [ALL, ...new Set(opportunitiesPage.jobs.map((j) => j.dept))],
    [],
  );
  const shown = opportunitiesPage.jobs.filter((j) => dept === ALL || j.dept === dept);

  return (
    <Section tone="white">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="min-w-0">
            <p className="eyebrow">{opportunitiesPage.hero.eyebrow}</p>
            <h2 className="h-section mt-3">{opportunitiesPage.openTitle}</h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
            <p className="body-copy max-w-sm lg:text-right">{opportunitiesPage.openBody}</p>

            <div className="shrink-0">
              <label htmlFor="dept-filter" className="sr-only">
                Filter by department
              </label>
              <select
                id="dept-filter"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="w-full rounded-[var(--radius)] border border-[var(--line)] bg-[var(--card-bg)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--blue)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--blue)_18%,transparent)] sm:w-auto"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((job, i) => (
            <Reveal
              as="li"
              key={job.title}
              delay={(i % 3) * 60}
              className="card-base card-lift min-w-0 p-5"
            >
              <div className="flex gap-4">
                <IconTile label={job.dept} />
                <div className="min-w-0">
                  <h3 className="h-card text-[1.02rem]">{job.title}</h3>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8rem] text-[var(--ink-muted)]">
                    <MapPin size={14} strokeWidth={1.5} aria-hidden="true" className="shrink-0" />
                    {job.location}
                    <span aria-hidden="true" className="text-[var(--line)]">
                      |
                    </span>
                    {job.type}
                    <span aria-hidden="true" className="text-[var(--line)]">
                      |
                    </span>
                    {job.exp}
                  </p>
                  <div className="mt-4">
                    <CardLink to="/contact" label={job.cta} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Open application, styled as the final card in the grid */}
          <Reveal
            as="li"
            className="section-blue flex min-w-0 flex-col rounded-[var(--radius)] border border-[color-mix(in_srgb,var(--blue)_22%,transparent)] p-5"
          >
            <h3 className="h-card text-[1.02rem]">{opportunitiesPage.noFit.title}</h3>
            <p className="body-copy mt-2 text-[0.82rem]">{opportunitiesPage.noFit.body}</p>
            <div className="mt-auto pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue-ink)] transition-colors hover:text-[var(--blue-ink-hover)]"
              >
                {opportunitiesPage.noFit.cta}
                <ArrowGlyph className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </ul>
      </Container>
    </Section>
  );
}

/** "A workplace where you belong" — copy, benefit list and photograph. */
export function CareersWhy() {
  return (
    <Section tone="tint">
      <Container>
        <div className="section-blue overflow-hidden rounded-[calc(var(--radius)+2px)]">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.7fr_1fr]">
            <div className="min-w-0 p-7 lg:p-10">
              <p className="eyebrow">{careersWhy.eyebrow}</p>
              <h2 className="h-section mt-3">
                {careersWhy.title}
                <br />
                <span className="text-[var(--blue)]">{careersWhy.titleAccent}</span>
              </h2>
              <p className="body-copy mt-5 max-w-md">{careersWhy.body}</p>
              <CtaLink to={careersWhy.cta.path} label={careersWhy.cta.label} className="mt-7" />
            </div>

            <ul className="min-w-0 space-y-6 p-7 lg:py-10">
              {careersWhy.points.map((p) => (
                <li key={p} className="flex items-center gap-3.5">
                  <Glyph label={p} size={22} className="shrink-0 text-[var(--blue)]" />
                  <span className="text-[0.88rem] leading-snug font-semibold text-[var(--navy)]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative min-h-[240px]">
              <img
                src={careersWhy.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * Closing band with the strapline — eyebrow, headline, button, and the brand
 * words set down the right. Shared by the careers and contact pages.
 */
export function CareersCta({ eyebrow }: { eyebrow?: string }) {
  return (
    <section className="surface-navy relative isolate overflow-hidden">
      <img
        src={finalCta.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--navy)_16%,color-mix(in_srgb,var(--navy-deep)_84%,transparent)_62%,color-mix(in_srgb,var(--blue-strong)_50%,transparent)_125%)]"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="min-w-0">
            <p className="eyebrow text-[var(--on-navy-muted)]">{eyebrow ?? careersCta.eyebrow}</p>
            <h2 className="font-display mt-3 max-w-2xl text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15] font-semibold text-white">
              {finalCta.title}
            </h2>
            <CtaLink
              to={finalCta.cta.path}
              label={finalCta.cta.label}
              variant="onNavy"
              className="mt-7"
            />
          </div>

          <div className="min-w-0 shrink-0">
            {brand.tagline.map((word) => (
              <span
                key={word}
                className="font-display block text-[clamp(1.1rem,1.7vw,1.4rem)] leading-tight font-semibold text-white italic"
              >
                {word}
              </span>
            ))}
            <span aria-hidden="true" className="mt-3 block h-px w-10 bg-white/70" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
