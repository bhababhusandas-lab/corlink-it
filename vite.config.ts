// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  /*
   * Pin the nitro preset.
   *
   * The wrapper only sets `cloudflare-module` as nitro's *default* preset, and
   * a default loses to auto-detection. On Cloudflare Pages' builder CF_PAGES is
   * set, so nitro picked `cloudflare-pages` instead and emitted the server to
   * dist/_worker.js rather than .output/server. Prerendering then could not
   * find the server entry, fell back to SSR against a server that was not
   * there, and every Git-triggered build failed with "Failed to fetch /:
   * Internal Server Error" — while local builds, where nothing triggers the
   * auto-detection, worked fine.
   *
   * Naming the preset explicitly makes the two environments agree, and matches
   * the project's configured build output directory of .output/public.
   */
  nitro: { preset: "cloudflare-module" },

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },

    /*
     * Every page renders from static content imports — there are no server
     * functions, loaders or API routes — so the whole site can be prerendered
     * to HTML at build time and served as static files from Cloudflare Pages.
     * crawlLinks follows the nav and footer to reach every route from "/".
     */
    prerender: { enabled: true, crawlLinks: true },
  },
});
