import { ecosystemStages, hero } from "@/content/site";
import { CtaLink } from "@/components/ui/cta";
import { Glyph } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Years-of-experience figure. Floats on the photograph, split by a hairline. */
function BadgeStat({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "card-base flex items-center gap-4 px-5 py-4 shadow-[var(--shadow-float)]",
        className,
      )}
    >
      <span className="font-display text-3xl font-semibold text-[var(--blue)]">
        {hero.badgeStat.value}
      </span>
      <span aria-hidden="true" className="h-9 w-px bg-[var(--line)]" />
      <span className="max-w-[7rem] text-[0.7rem] leading-snug font-semibold tracking-[0.1em] text-[var(--ink-muted)] uppercase">
        {hero.badgeStat.label}
      </span>
    </div>
  );
}

/**
 * Homepage hero.
 *
 * Two arrangements of the same content:
 * - below lg the photograph is a faded backdrop filling the whole band, with
 *   the copy sitting on top of it and the stat card at the foot;
 * - from lg up it moves to a full-height panel bleeding off the right edge,
 *   with the copy beside it and the stat card floating on the seam.
 */
export function Hero() {
  return (
    <section id="home" className="hero-wash relative overflow-hidden">
      {/*
       * Backdrop photograph — small screens only.
       *
       * The veil is two layers rather than one flat wash. A flat wash heavy
       * enough for the copy (82%) turned the photograph to haze; this keeps a
       * light 55% base so the photograph reads, and adds a left-weighted scrim
       * only where the copy actually sits. Measured against the text: every
       * line clears WCAG AA at these values, and the right-hand half of the
       * frame — the coder and her screen — stays at roughly the same density
       * as the design reference.
       */}
      <div aria-hidden="true" className="absolute inset-0 lg:hidden">
        <img src={hero.image} alt="" className="h-full w-full object-cover" />
        <span className="absolute inset-0 bg-white/55" />
        <span className="absolute inset-0 bg-gradient-to-r from-white/45 via-white/20 to-transparent" />
        <span className="absolute inset-0 bg-gradient-to-b from-[var(--tint)]/50 via-transparent to-white/55" />
      </div>

      <div className="grid-mesh-soft pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <Reveal className="pt-20 pb-14 [&_.eyebrow]:text-[var(--navy)] sm:pt-28 lg:w-[54%] lg:py-24 lg:[&_.eyebrow]:text-[var(--blue-strong)]">
          <p className="eyebrow">{hero.badge}</p>

          <h1 className="mt-4 font-display text-[clamp(2.25rem,4.6vw,3.6rem)] leading-[1.1] font-semibold tracking-[-0.015em] text-[var(--navy)]">
            {hero.headline}
            <br />
            <span className="text-[var(--blue-strong)] lg:text-[var(--blue)]">
              {hero.headlineAccent}
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--navy)] lg:text-[var(--ink-muted)]">
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

          {/* Two columns on the narrowest screens, one divided row from sm up. */}
          <ul className="mt-6 grid grid-cols-2 gap-y-5 sm:flex sm:flex-wrap">
            {ecosystemStages.map((label, i) => (
              <li
                key={label}
                className={cn(
                  "flex items-center gap-2.5",
                  "sm:border-l sm:border-[color-mix(in_srgb,var(--blue)_22%,transparent)] sm:px-5",
                  i === 0 && "sm:border-l-0 sm:pl-0",
                  "lg:border-l-0 lg:px-0 lg:pr-7",
                )}
              >
                <Glyph label={label} size={19} className="shrink-0 text-[var(--blue)]" />
                <span className="text-[0.82rem] font-medium tracking-wide text-[var(--navy)]">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <BadgeStat className="mt-10 w-fit lg:hidden" />
        </Reveal>
      </div>

      {/* Photograph as a full-height panel from lg up. */}
      <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-[46%]">
        <img
          src={hero.image}
          alt="A medical coder reviewing patient records, ICD-10, CPT, claims and compliance at a workstation"
          className="h-full w-full object-cover"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--blue)_10%,transparent)]"
        />
        {/* Blend the photograph's left edge into the wash rather than cutting it hard. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--tint)] to-transparent"
        />

        <BadgeStat className="absolute bottom-8 left-8" />
      </div>
    </section>
  );
}
