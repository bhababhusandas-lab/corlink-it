import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  isThemeChoice,
  resolveTheme,
  type ThemeChoice,
} from "@/lib/themes";

function readChoice(): ThemeChoice {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemeChoice(stored)) return stored;
  } catch {
    // Private browsing or storage disabled — fall through to the default.
  }
  return DEFAULT_THEME;
}

function apply(choice: ThemeChoice) {
  // The attribute always carries a resolved theme, never "system": CSS reads it
  // directly, and leaving it unset would hand control back to the media query
  // mid-session.
  document.documentElement.setAttribute("data-theme", resolveTheme(choice));
  try {
    localStorage.setItem(THEME_STORAGE_KEY, choice);
  } catch {
    // The theme still applies for this visit, it just will not be remembered.
  }
}

/**
 * Light/dark toggle.
 *
 * `choice` starts null on the server and on the first client render so the
 * markup matches and hydration does not warn; a mount effect then fills it in.
 * Until then the button renders its icon slot empty rather than guessing, which
 * would flash the wrong icon.
 *
 * Clicking moves between light and dark explicitly. Someone who has never
 * chosen follows their system setting, and lands on the opposite of whatever
 * they are currently seeing.
 */
export function ThemeSwitch({ className }: { className?: string }) {
  const [choice, setChoice] = useState<ThemeChoice | null>(null);

  useEffect(() => {
    setChoice(readChoice());

    // Someone on "system" should follow the OS if it changes mid-visit.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (readChoice() === "system") {
        document.documentElement.setAttribute("data-theme", resolveTheme("system"));
      }
    };
    mq.addEventListener("change", onSystemChange);

    // Keep every instance of this control (navbar and mobile menu) in agreement
    // by reading the attribute rather than each holding its own copy.
    const observer = new MutationObserver(() => setChoice(readChoice()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      mq.removeEventListener("change", onSystemChange);
      observer.disconnect();
    };
  }, []);

  const resolved = choice === null ? null : resolveTheme(choice);
  const next = resolved === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => {
        const target: ThemeChoice = resolved === "dark" ? "light" : "dark";
        apply(target);
        setChoice(target);
      }}
      aria-label={resolved === null ? "Switch colour theme" : `Switch to ${next} theme`}
      title={resolved === null ? "Switch colour theme" : `Switch to ${next} theme`}
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius)]",
        "border border-[var(--line)] text-[var(--navy)] transition-colors",
        "hover:border-[color-mix(in_srgb,var(--blue)_45%,transparent)] hover:text-[var(--blue-ink)]",
        className,
      )}
    >
      {resolved === "dark" ? (
        <Sun size={19} strokeWidth={1.5} aria-hidden="true" />
      ) : resolved === "light" ? (
        <Moon size={19} strokeWidth={1.5} aria-hidden="true" />
      ) : null}
    </button>
  );
}
