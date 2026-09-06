import { useEffect, useState } from "react";
import { railSections } from "@/content/site";
import { cn } from "@/lib/utils";

/** Thin vertical rail (desktop only) tracking the active homepage section. */
export function VerticalNav() {
  const [active, setActive] = useState<string>(railSections[0].id);

  useEffect(() => {
    const els = railSections
      .map((s) => document.getElementById(s.id))
      .filter((e): e is HTMLElement => Boolean(e));
    if (!els.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -30% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-5">
        {railSections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center gap-3"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={cn(
                    "block h-px transition-all duration-500",
                    isActive
                      ? "w-8 bg-[var(--electric)] shadow-[0_0_12px_var(--brand-glow)]"
                      : "w-4 bg-[var(--line-strong)] group-hover:w-6",
                  )}
                />
                <span
                  className={cn(
                    "font-mono text-[0.65rem] tracking-[0.2em] uppercase transition-colors",
                    isActive
                      ? "text-[var(--on-dark)]"
                      : "text-[var(--on-dark-muted)] group-hover:text-[var(--on-dark)]",
                  )}
                >
                  {s.num} {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
