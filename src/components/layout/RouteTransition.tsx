import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reveal";

/** Must outlast the bar's own animation (see route-bar in styles.css). */
const BAR_MS = 620;

/**
 * Slim blue progress bar across the top of the viewport on route change.
 *
 * This replaces the previous full-viewport liquid wash: the healthcare design
 * calls for restrained motion, and a loading bar gives the same navigation
 * feedback without repainting the whole screen.
 */
export function RouteTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reducedMotion = useReducedMotion();
  const previousPath = useRef(pathname);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    // Bumping the counter both starts the bar and re-keys it, so a second
    // navigation mid-run restarts the animation instead of ignoring it.
    setRun((n) => n + 1);
    const done = setTimeout(() => setRun(0), BAR_MS);
    return () => clearTimeout(done);
  }, [pathname]);

  // `run` is 0 for the server render and the first client render alike, so
  // there is nothing here to mismatch during hydration.
  if (!run || reducedMotion) return null;

  return (
    <div
      key={run}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 overflow-hidden"
    >
      <span className="animate-route-bar block h-full w-full bg-gradient-to-r from-[var(--blue)] to-[var(--blue-strong)]" />
    </div>
  );
}
