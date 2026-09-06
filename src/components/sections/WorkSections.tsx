import { Quote } from "lucide-react";
import { aboutPage, brand, finalCta, workApproach, workCta } from "@/content/site";
import { Container, Section } from "@/components/ui/section";
import { CtaLink } from "@/components/ui/cta";
import { Glyph } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/**
 * "Our Approach" — the reference's three-panel band: copy and a call to action
 * on the left, the photograph in the middle, and a light blue pull-quote panel
 * on the right. Rendered once per mission/vision entry, alternating sides.
 */
export function WorkApproach() {
  return (
    <Section tone="white">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{workApproach.eyebrow}</p>
        </Reveal>

        <ul className="mt-8 space-y-8 lg:space-y-12">
          {aboutPage.mv.map((m, i) => (
            <Reveal as="li" key={m.label} className="min-w-0">
              <div
                className={cn(
                  "grid items-stretch gap-6 lg:grid-cols-[1.1fr_1.05fr_0.85fr]",
                  // Alternate which side the photograph sits on, as the reference does.
                  i % 2 === 1 && "lg:[&>*:nth-child(1)]:order-2 lg:[&>*:nth-child(2)]:order-1",
                )}
              >
                <div className="min-w-0 lg:py-2">
                  <h2 className="h-section">{m.label}</h2>
                  <p className="body-copy mt-4 max-w-xl">{m.body}</p>
                  {i === 0 ? (
                    <CtaLink
                      to={workApproach.cta.path}
                      label={workApproach.cta.label}
                      className="mt-7"
                    />
                  ) : null}
                </div>

                <div className="media-frame relative min-h-[240px]">
                  <img
                    src={m.image}
                    alt={m.label}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="section-blue flex min-w-0 flex-col justify-center rounded-[var(--radius)] p-6 lg:p-7">
                  <Quote
                    size={30}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-[color-mix(in_srgb,var(--blue)_55%,transparent)]"
                  />
                  <p className="font-display mt-4 text-[1.1rem] leading-relaxed font-semibold text-[var(--navy)]">
                    &ldquo;{workApproach.quote}&rdquo;
                  </p>
                  <span aria-hidden="true" className="mt-4 block h-px w-9 bg-[var(--blue)]" />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/**
 * Closing band for the work page — the reference's wider CTA: copy and button
 * on the left, the strapline in the middle, and a checklist down the right.
 */
export function WorkCta() {
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
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--navy)_18%,color-mix(in_srgb,var(--navy-deep)_84%,transparent)_60%,color-mix(in_srgb,var(--blue-strong)_52%,transparent)_125%)]"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal className="grid gap-10 lg:grid-cols-[1.25fr_0.6fr_0.9fr] lg:items-center lg:gap-12">
          <div className="min-w-0">
            <p className="eyebrow text-[var(--on-navy-muted)]">{workCta.eyebrow}</p>
            <h2 className="font-display mt-3 text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15] font-semibold text-white">
              {finalCta.title}
            </h2>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-[var(--on-navy-muted)]">
              {finalCta.body}
            </p>
            <CtaLink
              to={finalCta.cta.path}
              label={finalCta.cta.label}
              variant="onNavy"
              className="mt-7"
            />
          </div>

          {/* Strapline, as painted on the wall in the reference */}
          <div className="min-w-0">
            {brand.tagline.map((word) => (
              <span
                key={word}
                className="font-display block text-[clamp(1.15rem,1.8vw,1.5rem)] leading-tight font-semibold text-white"
              >
                {word}
              </span>
            ))}
            <span aria-hidden="true" className="mt-3 block h-px w-10 bg-white/70" />
          </div>

          <ul className="min-w-0 space-y-4">
            {workCta.points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <Glyph label={p} size={19} className="shrink-0 text-white" />
                <span className="text-[0.85rem] font-medium text-[var(--on-navy)]">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
