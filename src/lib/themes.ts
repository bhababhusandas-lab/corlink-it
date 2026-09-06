/**
 * The site's colour themes. Single source of truth: the switch renders from
 * this list, the pre-paint script in __root.tsx validates against it, and each
 * id has a matching [data-theme="…"] token block in styles.css.
 */
export const themes = [
  { id: "ecosystem", label: "Ecosystem" },
  { id: "mono", label: "Black and white" },
  { id: "dark", label: "True black" },
  { id: "medical", label: "Medical blue" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const themeIds: readonly string[] = themes.map((t) => t.id);
export const DEFAULT_THEME: ThemeId = "ecosystem";
export const THEME_STORAGE_KEY = "corlink-theme";

export function isThemeId(value: string | null): value is ThemeId {
  return value !== null && themeIds.includes(value);
}
