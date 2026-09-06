import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";

/**
 * Shared page shell for the healthcare design system.
 *
 * Every section on every page is built from these three pieces, which is what
 * keeps the five redesigned pages on one grid, one rhythm and one type scale.
 */

const CONTAINER = "mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(CONTAINER, className)}>{children}</div>;
}

type Tone = "white" | "tint" | "blue" | "navy";

const toneClass: Record<Tone, string> = {
  white: "bg-white",
  tint: "section-tint",
  blue: "section-blue",
  navy: "surface-navy",
};

export function Section({
  children,
  tone = "white",
  className,
  id,
  label,
  size = "default",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  label?: string;
  /** `tight` for banded strips, `default` for standard sections. */
  size?: "tight" | "default";
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "relative",
        toneClass[tone],
        size === "tight" ? "py-12 lg:py-16" : "py-16 lg:py-24",
        className,
      )}
    >
      {children}
    </section>
  );
}

/**
 * Section header. Mirrors the reference layout: eyebrow + serif title on the
 * left, optional supporting paragraph and "view all" link on the right.
 */
export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  aside,
  link,
  align = "split",
  onNavy = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  titleAccent?: string;
  aside?: string;
  link?: { label: string; to: string };
  /** `split` puts the aside beside the title; `stacked` puts it underneath. */
  align?: "split" | "stacked";
  onNavy?: boolean;
  className?: string;
}) {
  const hasSide = Boolean(aside || link);

  return (
    <Reveal
      className={cn(
        align === "split" && hasSide
          ? "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
          : "max-w-3xl",
        className,
      )}
    >
      <div className="min-w-0 lg:max-w-2xl">
        {eyebrow ? (
          <p className={cn("eyebrow", onNavy && "text-[var(--on-navy-muted)]")}>{eyebrow}</p>
        ) : null}
        <h2 className={cn("h-section mt-3", onNavy && "on-navy-heading")}>
          {title}
          {titleAccent ? (
            <>
              {" "}
              <span className={onNavy ? "text-[var(--on-navy-muted)]" : "text-[var(--blue)]"}>
                {titleAccent}
              </span>
            </>
          ) : null}
        </h2>
      </div>

      {hasSide ? (
        <div
          className={cn(
            "min-w-0 shrink-0",
            align === "split" ? "lg:max-w-sm lg:text-right" : "mt-5",
          )}
        >
          {aside ? (
            <p className={cn("body-copy", onNavy && "text-[var(--on-navy-muted)]")}>{aside}</p>
          ) : null}
          {link ? (
            <Link
              to={link.to}
              className={cn(
                "group mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-colors",
                onNavy
                  ? "text-[var(--on-navy)] hover:text-[var(--on-navy-muted)]"
                  : "text-[var(--blue)] hover:text-[var(--blue-strong)]",
              )}
            >
              {link.label}
              <ArrowGlyph className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ) : null}
        </div>
      ) : null}
    </Reveal>
  );
}
