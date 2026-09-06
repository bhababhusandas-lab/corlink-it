import { Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { industries, testimonial, insights, trustStrip } from "@/content/site";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { CardLink } from "@/components/ui/cta";
import { Glyph } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";

/**
 * Industries — the reference's image-tile row: a photograph per sector under a
 * navy scrim, with the name and an arrow on the lower edge.
 */
export function IndustryTiles() {
  return (
    <Section tone="tint">
      <Container>
        <SectionHeading
          eyebrow={industries.eyebrow}
          title={industries.title}
          link={{ label: industries.link.label, to: industries.link.path }}
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {industries.items.map((it, i) => (
            <Reveal as="li" key={it.name} delay={(i % 6) * 60} className="min-w-0">
              <Link
                to="/services"
                aria-label={it.name}
                className="media-frame group relative block h-full min-h-[200px] border border-[var(--line)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] lg:min-h-[236px]"
              >
                <img
                  src={it.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="media-scrim pointer-events-none absolute inset-0" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                  <span className="font-display text-[0.92rem] leading-snug font-semibold text-white">
                    {it.name}
                  </span>
                  <ArrowGlyph className="h-4 w-4 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export type Step = { num: string; title: string; body: string };

/**
 * Numbered process rail — outlined circular icon, number, title and body, with
 * hairline arrows between steps on desktop. Shared by the pages that show a
 * process, so they stay identical.
 */
export function ProcessRail({
  eyebrow,
  title,
  body,
  steps,
  tone = "tint",
  id,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  steps: readonly Step[];
  tone?: "white" | "tint";
  id?: string;
}) {
  return (
    <Section tone={tone} {...(id ? { id } : {})}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} {...(body ? { aside: body } : {})} />

        <ol
          className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2"
          style={{ ["--cols" as string]: String(steps.length) }}
        >
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.num}
              delay={i * 70}
              className="relative min-w-0 lg:[grid-column:span_1] lg:[grid-row:1]"
            >
              {/* Connector to the next step — desktop only, never after the last. */}
              {i < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-7 left-[4.5rem] hidden h-px w-[calc(100%-4.5rem+1.5rem)] bg-[color-mix(in_srgb,var(--blue)_30%,transparent)] lg:block"
                />
              ) : null}

              <div className="flex items-start gap-4">
                <span className="icon-ring">
                  <Glyph label={s.title} size={24} />
                </span>
                <div className="min-w-0 pt-1">
                  <span className="font-display block text-[1.35rem] leading-none font-semibold text-[var(--navy)]">
                    {s.num}
                  </span>
                  <span className="font-display mt-1 block text-[1.02rem] font-semibold text-[var(--navy)]">
                    {s.title}
                  </span>
                </div>
              </div>
              <p className="body-copy mt-3 text-[0.85rem] lg:pr-8">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/** Client testimonial — oversized quote mark, serif quote, attribution, photo. */
export function TestimonialBlock({ tone = "tint" }: { tone?: "white" | "tint" }) {
  return (
    <Section tone={tone}>
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.4fr_0.75fr] lg:gap-10">
          <Reveal className="min-w-0">
            <p className="eyebrow">{testimonial.eyebrow}</p>
            <h2 className="h-section mt-3">{testimonial.title}</h2>
          </Reveal>

          <Reveal className="min-w-0 lg:border-l lg:border-[var(--line)] lg:pl-10" delay={80}>
            <Quote
              size={34}
              strokeWidth={1.5}
              aria-hidden="true"
              className="text-[color-mix(in_srgb,var(--blue)_55%,transparent)]"
            />
            <blockquote className="font-display mt-4 text-[clamp(1.1rem,1.9vw,1.45rem)] leading-relaxed text-[var(--navy)] italic">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-5">
              <span className="block text-[0.9rem] font-semibold text-[var(--navy)]">
                {testimonial.name}
              </span>
              <span className="block text-[0.85rem] text-[var(--ink-muted)]">
                {testimonial.role}
              </span>
            </figcaption>
          </Reveal>

          <Reveal className="min-w-0" delay={140}>
            <div className="media-frame">
              <img
                src={testimonial.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** Insights — three article cards with category, date and serif title. */
export function InsightCards() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow={insights.eyebrow}
          title={insights.title}
          link={{ label: insights.link.label, to: insights.link.path }}
        />

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {insights.items.map((a, i) => (
            <Reveal
              as="li"
              key={a.title}
              delay={i * 70}
              className="card-base card-lift flex min-w-0 flex-col p-6"
            >
              <span className="flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase">
                <span className="text-[var(--blue)]">{a.category}</span>
                <span aria-hidden="true" className="text-[var(--line)]">
                  |
                </span>
                <span className="text-[var(--ink-soft)]">{a.date}</span>
              </span>
              <h3 className="h-card mt-3.5 text-[1.05rem]">{a.title}</h3>
              <div className="mt-auto pt-5">
                <CardLink to={insights.link.path} label={insights.readMore} />
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/**
 * Partner strip beneath the hero, as in the reference.
 *
 * Real partner marks have not been supplied, so the slots render as neutral
 * placeholders — the layout is correct and no organisation is named or implied
 * as a client. Fill `trustStrip.partners` in content and the names replace them.
 */
export function TrustStrip() {
  // Nothing to show until real partner names are supplied — seven empty slots
  // read as a broken or half-loaded page, which is worse than no strip at all.
  if (!trustStrip.partners.length) return null;

  return (
    <section aria-label={trustStrip.label} className="border-y border-[var(--line)] bg-white py-7">
      <Container>
        <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-[var(--ink-soft)] uppercase">
          {trustStrip.label}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-5">
          {trustStrip.partners.map((name) => (
            <span key={name} className="font-display text-[1rem] font-semibold text-[var(--navy)]">
              {name}
            </span>
          ))}
          <span className="ml-auto text-[0.75rem] leading-tight text-[var(--ink-soft)]">
            {trustStrip.note}
          </span>
        </div>
      </Container>
    </section>
  );
}
