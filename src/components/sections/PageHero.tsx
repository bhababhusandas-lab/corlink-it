import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { BreadcrumbTrail, type Crumb } from "@/components/ui/breadcrumb-trail";
import { cn } from "@/lib/utils";

/**
 * Shared inner-page hero, matching the reference inner pages: breadcrumb,
 * eyebrow, serif title with its accent line in brand blue, body copy, and the
 * page photograph bleeding full-height to the right edge of the viewport.
 *
 * `children` renders under the body copy — used for the reassurance rows and
 * pill lists individual pages add.
 *
 * `mobileBackdrop` switches the small-screen arrangement from "photograph
 * stacked under the copy" to "photograph behind the copy", the way the home
 * hero reads. It is opt-in per page because the veil below is calibrated
 * against the photograph's own darkness — see the note on the veil itself.
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
  mobileBackdrop = false,
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
  mobileBackdrop?: boolean;
}) {
  return (
    <section className="hero-wash relative overflow-hidden">
      {/*
       * Backdrop photograph — small screens only.
       *
       * Two layers rather than one flat wash. A wash heavy enough for the copy
       * turns the photograph to haze, so this keeps a light 55% base and adds a
       * left-weighted scrim only where the copy sits. The copy carries darker
       * colours below lg to make up the rest; measured against the composited
       * backdrop, every line clears WCAG AA.
       */}
      {image && mobileBackdrop ? (
        <div aria-hidden="true" className="absolute inset-0 lg:hidden">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <span className="absolute inset-0 bg-white/55" />
          <span className="absolute inset-0 bg-gradient-to-r from-white/45 via-white/20 to-transparent" />
          <span className="absolute inset-0 bg-gradient-to-b from-[var(--tint)]/50 via-transparent to-white/55" />
        </div>
      ) : null}

      <div className="grid-mesh-soft pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <Reveal
          className={cn(
            image ? "py-12 lg:w-[54%] lg:py-20" : "max-w-3xl py-12 lg:py-20",
            // Over the photograph the copy needs to carry its own contrast.
            mobileBackdrop && [
              "pt-16 pb-14 sm:pt-20",
              "[&_.eyebrow]:text-[var(--navy)] lg:[&_.eyebrow]:text-[var(--blue-strong)]",
              // The breadcrumb link is muted grey, which lands just under AA
              // over the photograph.
              "[&_nav_a]:text-[var(--navy)] lg:[&_nav_a]:text-[var(--ink-muted)]",
            ],
          )}
        >
          {breadcrumbs?.length ? <BreadcrumbTrail items={breadcrumbs} /> : null}

          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-[var(--navy)]">
            {title}
            {titleAccent ? (
              <>
                <br />
                <span
                  className={cn(
                    mobileBackdrop
                      ? "text-[var(--blue-strong)] lg:text-[var(--blue)]"
                      : "text-[var(--blue)]",
                  )}
                >
                  {titleAccent}
                </span>
              </>
            ) : null}
          </h1>
          <p
            className={cn(
              "mt-5 max-w-xl text-base leading-relaxed",
              mobileBackdrop
                ? "text-[var(--navy)] lg:text-[var(--ink-muted)]"
                : "text-[var(--ink-muted)]",
            )}
          >
            {body}
          </p>
          {children}
        </Reveal>
      </div>

      {image ? (
        <div
          className={cn(
            "lg:absolute lg:inset-y-0 lg:right-0 lg:w-[46%]",
            // With a backdrop the photograph is already on screen below lg, so
            // the stacked copy of it would be the same picture twice.
            mobileBackdrop ? "hidden lg:block" : "relative",
          )}
        >
          <img
            src={image}
            alt={imageAlt ?? ""}
            aria-hidden={imageAlt ? undefined : "true"}
            className={cn(
              "w-full object-cover lg:h-full",
              mobileBackdrop ? "h-full" : "h-56 sm:h-72",
            )}
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
