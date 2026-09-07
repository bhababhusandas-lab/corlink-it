import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

/**
 * Breadcrumb row shown above the page title, as in the reference inner pages
 * ("Home > Services"). Labels come from the existing nav, so no new copy is
 * introduced — the trail is navigation, not content.
 */
export function BreadcrumbTrail({ items }: { items: readonly Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-1.5">
              {c.to && !last ? (
                <Link
                  to={c.to}
                  className="text-[0.78rem] text-[var(--ink-muted)] transition-colors hover:text-[var(--blue-ink)]"
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className="text-[0.78rem] font-medium text-[var(--navy)]"
                >
                  {c.label}
                </span>
              )}
              {last ? null : (
                <ChevronRight
                  size={13}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="text-[var(--ink-soft)]"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
