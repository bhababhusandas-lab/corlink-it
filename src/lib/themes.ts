/**
 * Colour themes. Single source of truth: the switch renders from this list, the
 * pre-paint script in __root.tsx validates against it, and "dark" has a
 * matching :root[data-theme="dark"] token block in styles.css.
 *
 * "system" is stored but never written to the attribute — it means "no explicit
 * choice", which is exactly the state the prefers-color-scheme rule in
 * styles.css already handles.
 */
export const themes = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "system", label: "System" },
] as const;

export type ThemeChoice = (typeof themes)[number]["id"];

/** What actually ends up on <html data-theme>. */
export type ResolvedTheme = "light" | "dark";

export const themeIds: readonly string[] = themes.map((t) => t.id);
export const DEFAULT_THEME: ThemeChoice = "system";
export const THEME_STORAGE_KEY = "corlink-theme";

export function isThemeChoice(value: string | null): value is ThemeChoice {
  return value !== null && themeIds.includes(value);
}

/** Resolve a choice to the theme that should be painted right now. */
export function resolveTheme(choice: ThemeChoice): ResolvedTheme {
  if (choice !== "system") return choice;
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Runs before first paint, inlined into <head>. Written as a string because it
 * has to execute ahead of the bundle — otherwise a dark-theme visitor gets a
 * white flash on every navigation.
 *
 * Kept deliberately small and defensive: any failure leaves the attribute
 * unset, which falls through to the prefers-color-scheme rule in styles.css.
 */
export const THEME_INIT_SCRIPT = `(function(){try{
var k=${JSON.stringify(THEME_STORAGE_KEY)};
var c=localStorage.getItem(k);
if(c!=="light"&&c!=="dark"&&c!=="system")c="system";
var t=c==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):c;
document.documentElement.setAttribute("data-theme",t);
}catch(e){}})();`;
