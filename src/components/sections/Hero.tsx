import { ecosystemStages, hero } from "@/content/site";
import { CtaLink } from "@/components/ui/cta";
import { Glyph } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";

/**
 * Homepage hero, laid out like the reference: copy on a soft blue wash at the
 * left, the photograph bleeding full-height to the right edge of the viewport,
 * and the years-of-experience figure floating on the seam between them.
 */
export function Hero() {
  return (
    <section id="home" className="hero-wash relative overflow-hidden">
      <div className="grid-mesh-soft pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <Reveal className="py-12 lg:w-[54%] lg:py-24">
          <p className="eyebrow">{hero.badge}</p>

          <h1 className="mt-4 font-display text-[clamp(2.25rem,4.6vw,3.6rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-[var(--navy)]">
            {hero.headline}
            <br />
            <span className="text-[var(--blue)]">{hero.headlineAccent}</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--ink-muted)]">
            {hero.subheading}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <CtaLink to={hero.primaryCta.path} label={hero.primaryCta.label} />
            <CtaLink
              to={hero.secondaryCta.path}
              label={hero.secondaryCta.label}
              variant="secondary"
            />
          </div>

          <div className="mt-10 h-px w-14 bg-[color-mix(in_srgb,var(--blue)_45%,transparent)]" />

          <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-4">
            {ecosystemStages.map((label) => (
              <li key={label} className="flex items-center gap-2.5">
                <Glyph label={label} size={19} className="text-[var(--blue)]" />
                <span className="text-[0.82rem] font-medium tracking-wide text-[var(--navy)]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Photograph — full-bleed to the right edge from lg up, stacked below on small screens. */}
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[46%]">
        <img
          src={hero.image}
          alt="A medical coder reviewing patient records, ICD-10, CPT, claims and compliance at a workstation"
          className="h-64 w-full object-cover sm:h-80 lg:h-full"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--blue)_10%,transparent)]"
        />
        {/* Blend the photograph's left edge into the wash rather than cutting it hard. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[var(--tint)] to-transparent lg:block"
        />

        <div className="card-base absolute bottom-5 left-5 flex items-center gap-4 px-5 py-4 shadow-[var(--shadow-float)] lg:bottom-8 lg:left-8">
          <span className="font-display text-3xl font-semibold text-[var(--blue)]">
            {hero.badgeStat.value}
          </span>
          <span className="max-w-[7rem] text-[0.7rem] leading-snug font-semibold tracking-[0.1em] text-[var(--ink-muted)] uppercase">
            {hero.badgeStat.label}
          </span>
        </div>
      </div>
    </section>
  );
}
