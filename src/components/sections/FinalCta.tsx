import { finalCta } from "@/content/site";
import { CtaLink } from "@/components/ui/cta";
import { Reveal } from "@/components/Reveal";

/**
 * Closing call to action — the deep navy band that sits above the footer on
 * every page, with the boardroom photograph held far back behind the gradient.
 */
export function FinalCta() {
  return (
    <section id="contact" className="surface-cta relative isolate overflow-hidden">
      <img
        src={finalCta.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.10]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,var(--blue-strong)_0%,var(--blue)_58%,color-mix(in_srgb,var(--blue)_82%,white)_130%)]"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="min-w-0 lg:max-w-2xl">
            <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.15] font-semibold text-white">
              {finalCta.title}
            </h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[var(--on-navy-muted)]">
              {finalCta.body}
            </p>
          </div>

          <CtaLink
            to={finalCta.cta.path}
            label={finalCta.cta.label}
            variant="onNavy"
            className="shrink-0 self-start lg:self-auto"
          />
        </Reveal>
      </div>
    </section>
  );
}
