import { liveCodes } from "@/content/site";
import { medHero } from "@/content/medical";
import { Container, Section } from "@/components/ui/section";
import { CtaLink } from "@/components/ui/cta";
import { Glyph } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";

/**
 * Medical coding band, laid out like the reference's "foundation of a healthy
 * revenue cycle": photograph, then the copy and its pills, then a light blue
 * panel carrying the live code samples.
 */
export function MedicalTeaser({ tone = "white" }: { tone?: "white" | "tint" }) {
  return (
    <Section id="medical" tone={tone}>
      <Container>
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.25fr_0.85fr] lg:gap-10">
          <Reveal className="min-w-0">
            <div className="media-frame relative h-full min-h-[280px]">
              <img
                src={medHero.image}
                alt={medHero.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--blue)_12%,transparent)]" />
            </div>
            <p className="mt-3 text-[0.75rem] font-medium tracking-[0.08em] text-[var(--ink-soft)] uppercase">
              {medHero.caption}
            </p>
          </Reveal>

          <Reveal className="min-w-0" delay={80}>
            <p className="eyebrow">{medHero.eyebrow}</p>
            <h2 className="h-section mt-3">
              {medHero.title} <span className="text-[var(--blue)]">{medHero.titleAccent}</span>
            </h2>
            <p className="body-copy mt-5">{medHero.body}</p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {medHero.pills.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--blue)_28%,transparent)] bg-[var(--tint)] px-3.5 py-1.5"
                >
                  <Glyph label={p} size={15} className="text-[var(--blue)]" />
                  <span className="text-[0.78rem] font-medium text-[var(--navy)]">{p}</span>
                </li>
              ))}
            </ul>

            <CtaLink to="/medical-coding" label="Medical Coding" className="mt-8" />
          </Reveal>

          <Reveal className="min-w-0" delay={140}>
            <div className="section-blue h-full rounded-[var(--radius)] p-6">
              <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-[var(--blue-ink)] uppercase">
                {liveCodes.title}
              </p>
              <ul className="mt-5 space-y-3">
                {liveCodes.items.map((c) => (
                  <li
                    key={c.code}
                    className="rounded-[calc(var(--radius)-2px)] border border-[color-mix(in_srgb,var(--blue)_18%,transparent)] bg-white px-4 py-3"
                  >
                    <span className="block text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--ink-soft)] uppercase">
                      {c.system}
                    </span>
                    <span className="mt-1 block font-mono text-[0.95rem] font-semibold text-[var(--navy)]">
                      {c.code}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
