import { brand, homeAbout } from "@/content/site";
import { CtaLink } from "@/components/ui/cta";
import { Glyph } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";

/**
 * "A Partner You Can Trust" band. Three panels edge to edge, exactly as the
 * reference: the photograph bleeding off the left of the viewport under a navy
 * wash carrying the strapline, the about copy in the middle, and the supporting
 * points as a light blue panel bleeding off the right.
 */
export function AboutSplit() {
  return (
    <section id="about" className="relative bg-[var(--paper)]">
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.25fr)_minmax(0,0.8fr)]">
        {/* Photograph — bleeds to the left edge on desktop */}
        <Reveal className="relative min-h-[220px] overflow-hidden lg:min-h-[380px]">
          <img
            src={homeAbout.image}
            alt="CORLINK IT office"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,color-mix(in_srgb,var(--navy)_62%,transparent),color-mix(in_srgb,var(--navy-deep)_44%,transparent))]"
          />
          <div className="relative flex h-full flex-col justify-center py-10 pl-6 sm:pl-10 lg:pl-12">
            {brand.tagline.map((word) => (
              <span
                key={word}
                className="font-display text-[clamp(1.35rem,2.2vw,1.9rem)] leading-tight font-semibold text-white"
              >
                {word}
              </span>
            ))}
            <span aria-hidden="true" className="mt-4 h-px w-10 bg-white/70" />
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal className="min-w-0 px-5 py-12 sm:px-8 lg:px-10 lg:py-14" delay={80}>
          <p className="eyebrow">{homeAbout.eyebrow}</p>
          <h2 className="h-section mt-3">{homeAbout.title}</h2>
          <p className="body-copy mt-5 max-w-xl">{homeAbout.body}</p>
          <CtaLink to={homeAbout.cta.path} label={homeAbout.cta.label} className="mt-7" />
        </Reveal>

        {/* Supporting points — bleeds to the right edge on desktop */}
        <Reveal className="section-blue min-w-0 px-5 py-12 sm:px-8 lg:px-10 lg:py-16" delay={140}>
          <ul className="space-y-5">
            {homeAbout.points.map((p) => (
              <li key={p} className="flex gap-3.5">
                <span className="icon-tile h-9 w-9 shrink-0 bg-[var(--card-bg)]">
                  <Glyph label={p} size={17} />
                </span>
                <span className="pt-1.5 text-[0.85rem] leading-snug font-medium text-[var(--navy)]">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
