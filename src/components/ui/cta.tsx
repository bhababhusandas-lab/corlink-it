import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ArrowGlyph } from "@/components/ui/eyebrow";

/**
 * Buttons for the healthcare system: rectangular with a moderate radius, set in
 * the body sans at the case the content author wrote them in — no uppercasing.
 */

type Variant = "primary" | "secondary" | "onNavy" | "link";

const base =
  "group inline-flex items-center justify-center gap-2.5 text-sm font-semibold transition-all duration-200";

const variants: Record<Variant, string> = {
  primary:
    "rounded-[var(--radius)] bg-[var(--blue-fill)] px-6 py-3 text-[var(--on-blue-fill)] shadow-[var(--shadow-card)] hover:bg-[var(--blue-fill-hover)]",
  secondary:
    "rounded-[var(--radius)] border border-[color-mix(in_srgb,var(--blue)_40%,transparent)] bg-[var(--card-bg)] px-6 py-3 text-[var(--blue-ink)] hover:border-[var(--blue)] hover:bg-[var(--tint)]",
  onNavy:
    "rounded-[var(--radius)] bg-[var(--card-bg)] px-6 py-3 text-[var(--blue-strong)] hover:bg-[var(--tint)]",
  link: "text-[var(--blue-ink)] hover:text-[var(--blue-ink-hover)]",
};

export function CtaLink({
  to,
  label,
  variant = "primary",
  className,
  arrow = true,
}: {
  to: string;
  label: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {label}
      {arrow ? (
        <ArrowGlyph className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}

/** Same treatment for a real <button>, e.g. the contact form submit. */
export function CtaButton({
  label,
  variant = "primary",
  className,
  type = "button",
  arrow = true,
}: {
  label: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  arrow?: boolean;
}) {
  return (
    <button type={type} className={cn(base, variants[variant], className)}>
      {label}
      {arrow ? (
        <ArrowGlyph className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </button>
  );
}

/** Inline "Learn More →" style link used at the foot of cards. */
export function CardLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue-ink)] transition-colors hover:text-[var(--blue-ink-hover)]"
    >
      {label}
      <ArrowGlyph className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
    </Link>
  );
}
