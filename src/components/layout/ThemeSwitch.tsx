import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DEFAULT_THEME, THEME_STORAGE_KEY, isThemeId, themes, type ThemeId } from "@/lib/themes";

function apply(theme: ThemeId) {
  // Always write the attribute rather than removing it for the default theme:
  // toggling html[data-theme] on and off at runtime leaves descendant styles
  // stale in some engines, so the :not([data-theme]) rule in styles.css is only
  // ever the no-JS fallback and never flips while the page is live.
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Private browsing or storage disabled — the theme still applies for this visit.
  }
}

/**
 * Theme control, one swatch per entry in `themes`. `active` starts null on both
 * the server and the first client render so hydration matches, then a mount
 * effect fills it in from the attribute on <html>.
 */
export function ThemeSwitch({ className }: { className?: string }) {
  const [active, setActive] = useState<ThemeId | null>(null);

  useEffect(() => {
    const read = () => {
      const current = document.documentElement.getAttribute("data-theme");
      setActive(isThemeId(current) ? current : DEFAULT_THEME);
    };
    read();
    // The attribute on <html> is the single source of truth — CSS reads it too.
    // Observing it keeps every instance of this control (navbar and mobile menu)
    // in agreement instead of each holding its own copy of the selection.
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={cn(
        "flex items-center gap-1.5 rounded-full border border-[var(--line)] px-2 py-1.5",
        className,
      )}
    >
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          data-theme-option={t.id}
          aria-label={t.label}
          aria-pressed={active === t.id}
          onClick={() => apply(t.id)}
          className={cn("theme-dot", active === t.id && "theme-dot-active")}
        />
      ))}
    </div>
  );
}
