import { medWhy } from "@/content/site";
import {
  coderDuties,
  advantages,
  medHero,
  medSectionTitles,
  specializations,
} from "@/content/medical";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CtaLink, CardLink } from "@/components/ui/cta";
import { CheckCircle2, Glyph, IconTile } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";

/**
 * Capabilities row — the reference's six service cards: thin blue icon in a
 * tinted tile, the capability, then a Learn More link.
 */
export function MedCapabilities() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow={medSectionTitles.daily.eyebrow}
          title={medSectionTitles.daily.title}
          link={{ label: "View All Services", to: "/services" }}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {coderDuties.map((d, i) => (
            <Reveal
              as="li"
              key={d}
              delay={(i % 6) * 60}
              className="card-base card-lift flex min-w-0 flex-col p-5"
            >
              <IconTile label={d} />
              <h3 className="h-card mt-4 text-[0.92rem]">{d}</h3>
              <div className="mt-auto pt-4">
                <CardLink to="/contact" label="Learn More" />
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/**
 * "Why it matters" band — photograph bleeding off the left, the copy in the
 * middle, and the benefits as a light blue panel bleeding off the right.
 */
export function MedWhy() {
  return (
    <section className="section-tint">
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.2fr)_minmax(0,0.85fr)]">
        <Reveal className="relative min-h-[240px] overflow-hidden">
          <img
            src={medHero.image}
            alt={medHero.caption}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </Reveal>

        <Reveal className="min-w-0 px-5 py-12 sm:px-8 lg:px-10 lg:py-14" delay={80}>
          <p className="eyebrow">{medWhy.eyebrow}</p>
          <h2 className="h-section mt-3">{medWhy.title}</h2>
          <p className="body-copy mt-5 max-w-xl">{medWhy.body}</p>
          <CtaLink to={medWhy.cta.path} label={medWhy.cta.label} className="mt-7" />
        </Reveal>

        <Reveal className="section-blue min-w-0 px-5 py-12 sm:px-8 lg:px-10 lg:py-16" delay={140}>
          <ul className="space-y-4">
            {advantages.map((a) => (
              <li key={a} className="flex gap-3.5">
                <span className="icon-tile h-9 w-9 shrink-0 bg-white">
                  <CheckCircle2 size={17} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="pt-1.5 text-[0.85rem] leading-snug font-medium text-[var(--navy)]">
                  {a}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** Specialties — the reference's chip row of coverage areas. */
export function MedSpecialties() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHeading
          eyebrow={medSectionTitles.specializations.eyebrow}
          title={medSectionTitles.specializations.title}
          link={{ label: "View All Specialties", to: "/contact" }}
        />

        <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 70}
              className="card-base card-lift flex min-w-0 flex-col items-center p-6 text-center"
            >
              <IconTile label={s.title} />
              <span className="mt-4 block text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--blue)] uppercase">
                {s.badge}
              </span>
              <h3 className="h-card mt-1.5 text-[1.05rem]">{s.title}</h3>
              <p className="body-copy mt-2.5 text-[0.85rem]">{s.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
