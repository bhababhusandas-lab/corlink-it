import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { BreadcrumbTrail, type Crumb } from "@/components/ui/breadcrumb-trail";

/**
 * Shared inner-page hero, matching the reference inner pages: breadcrumb,
 * eyebrow, serif title with its accent line in brand blue, body copy, and the
 * page photograph bleeding full-height to the right edge of the viewport.
 *
 * `children` renders under the body copy — used for the reassurance rows and
 * pill lists individual pages add.
 */
export function PageHero({
  eyebrow,
  title,
  titleAccent,
  body,
  image,
  imageAlt,
  children,
  aside,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  body: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  /** Optional card floated over the photograph. */
  aside?: ReactNode;
  breadcrumbs?: readonly Crumb[];
}) {
  return (
    <section className="hero-wash relative overflow-hidden">
      <div className="grid-mesh-soft pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <Reveal className={image ? "py-12 lg:w-[54%] lg:py-20" : "max-w-3xl py-12 lg:py-20"}>
          {breadcrumbs?.length ? <BreadcrumbTrail items={breadcrumbs} /> : null}

          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-[var(--navy)]">
            {title}
            {titleAccent ? (
              <>
                <br />
                <span className="text-[var(--blue)]">{titleAccent}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-muted)]">{body}</p>
          {children}
        </Reveal>
      </div>

      {image ? (
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[46%]">
          <img
            src={image}
            alt={imageAlt ?? ""}
            aria-hidden={imageAlt ? undefined : "true"}
            className="h-56 w-full object-cover sm:h-72 lg:h-full"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--blue)_10%,transparent)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[var(--tint)] to-transparent lg:block"
          />
          {aside}
        </div>
      ) : null}
    </section>
  );
}
