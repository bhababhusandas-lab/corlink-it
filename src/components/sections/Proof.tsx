import { useState } from "react";
import { Quote } from "lucide-react";
import { keyBenefits, caseStudy, faqs, offices } from "@/content/site";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { IconTile } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Key benefits — a row of bordered cards, each an icon over a short figure. */
export function KeyBenefits({ tone = "tint", id }: { tone?: "white" | "tint"; id?: string }) {
  return (
    <Section tone={tone} {...(id ? { id } : {})}>
      <Container>
        <SectionHeading eyebrow={keyBenefits.eyebrow} title={keyBenefits.title} />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {keyBenefits.items.map((b, i) => (
            <Reveal as="li" key={b.stat} delay={i * 60} className="card-base card-lift min-w-0 p-6">
              <IconTile label={b.label} />
              <p className="font-display mt-5 text-[1.5rem] leading-none font-semibold text-[var(--navy)]">
                {b.stat}
              </p>
              <p className="mt-2 text-[0.82rem] text-[var(--ink-muted)]">{b.label}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/**
 * Case study — the reference's three-panel band: a navy-scrimmed photograph
 * carrying the headline figure, the challenge/approach/result narrative, and a
 * pull quote on the right.
 */
export function CaseStudyBlock({ tone = "white", id }: { tone?: "white" | "tint"; id?: string }) {
  return (
    <Section tone={tone} {...(id ? { id } : {})}>
      <Container>
        <SectionHeading eyebrow={caseStudy.eyebrow} title={caseStudy.title} />

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.25fr_0.85fr]">
          <Reveal className="min-w-0">
            <div className="media-frame relative h-full min-h-[240px]">
              <img
                src={caseStudy.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--navy)_88%,transparent),color-mix(in_srgb,var(--navy-deep)_62%,transparent))]"
              />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="font-display text-[2.5rem] leading-none font-semibold text-white">
                  {caseStudy.headline}
                </span>
                <span className="font-display mt-1 block text-[1.15rem] font-semibold text-white">
                  {caseStudy.headlineLabel}
                </span>
                <span className="mt-3 block text-[0.8rem] text-[var(--on-navy-muted)]">
                  {caseStudy.org}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className="section-blue min-w-0 rounded-[var(--radius)] p-6 lg:p-7" delay={80}>
            <dl className="space-y-5">
              {caseStudy.blocks.map((b) => (
                <div key={b.heading}>
                  <dt className="font-display text-[1rem] font-semibold text-[var(--navy)]">
                    {b.heading}
                  </dt>
                  <dd className="mt-1.5 text-[0.875rem] leading-relaxed text-[var(--ink-muted)]">
                    {b.body}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="card-base min-w-0 p-6" delay={140}>
            <Quote
              size={28}
              strokeWidth={1.5}
              aria-hidden="true"
              className="text-[color-mix(in_srgb,var(--blue)_55%,transparent)]"
            />
            <p className="font-display mt-3 text-[0.98rem] leading-relaxed text-[var(--navy)] italic">
              “Replace with a quote from the client on this engagement.”
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** FAQ — two-column accordion with the reference's plus/minus affordance. */
export function FaqAccordion({ tone = "white", id }: { tone?: "white" | "tint"; id?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section tone={tone} {...(id ? { id } : {})}>
      <Container>
        <SectionHeading
          eyebrow={faqs.eyebrow}
          title={faqs.title}
          link={{ label: faqs.link.label, to: faqs.link.path }}
        />

        <ul className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className={cn(
                  "card-base h-max overflow-hidden transition-colors",
                  isOpen && "border-[color-mix(in_srgb,var(--blue)_45%,transparent)]",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[0.92rem] font-medium text-[var(--navy)]">{f.q}</span>
                  <span aria-hidden="true" className="relative h-4 w-4 shrink-0 text-[var(--blue)]">
                    <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 rounded-full bg-current" />
                    <span
                      className={cn(
                        "absolute top-0 left-1/2 h-4 w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform duration-300",
                        isOpen ? "scale-y-0" : "scale-y-100",
                      )}
                    />
                  </span>
                </button>

                {isOpen ? (
                  <p className="border-t border-[var(--line)] px-5 pt-4 pb-5 text-[0.875rem] leading-relaxed text-[var(--ink-muted)]">
                    {f.a}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

/** Office locations — photograph, name and address per card. */
export function OfficeCards({ tone = "white", id }: { tone?: "white" | "tint"; id?: string }) {
  return (
    <Section tone={tone} {...(id ? { id } : {})}>
      <Container>
        <SectionHeading
          title={offices.title}
          aside={offices.body}
          link={{ label: offices.link.label, to: offices.link.path }}
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offices.items.map((o, i) => (
            <Reveal
              as="li"
              key={o.name}
              delay={i * 70}
              className="card-base card-lift flex min-w-0 gap-4 overflow-hidden"
            >
              <span className="relative block w-[38%] shrink-0 overflow-hidden">
                <img
                  src={o.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </span>
              <span className="min-w-0 flex-1 py-5 pr-5">
                <span className="font-display block text-[1rem] font-semibold text-[var(--navy)]">
                  {o.name}
                </span>
                <span className="mt-2 block text-[0.85rem] leading-relaxed whitespace-pre-line text-[var(--ink-muted)]">
                  {o.address}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
