import { useEffect, useState } from "react";
import { stats } from "@/content/site";
import { Glyph } from "@/components/ui/icons";
import { useReducedMotion, useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, visible } = useReveal<HTMLSpanElement>(0.4);
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (reduced) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

/**
 * Statistics panel — a light blue card with a thin icon, the counted figure and
 * its label per column, hairline dividers between them on desktop.
 */
export function StatsBand({ tone = "white" }: { tone?: "white" | "tint" }) {
  return (
    <section
      aria-label="Company statistics"
      className={cn("py-12 lg:py-16", tone === "tint" ? "section-tint" : "bg-[var(--paper)]")}
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="section-blue rounded-[calc(var(--radius)+2px)] px-4 py-10 sm:px-8 lg:py-12">
          <ul className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <li
                key={s.label}
                className={
                  "flex flex-col items-center px-4 text-center " +
                  (i > 0
                    ? "lg:border-l lg:border-[color-mix(in_srgb,var(--blue)_18%,transparent)]"
                    : "")
                }
              >
                <Glyph label={s.label} size={28} className="text-[var(--blue)]" />
                <p className="mt-4 font-display text-[clamp(2rem,3.4vw,2.75rem)] leading-none font-semibold text-[var(--navy)]">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2.5 text-[0.78rem] font-medium tracking-[0.08em] text-[var(--ink-muted)] uppercase">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
