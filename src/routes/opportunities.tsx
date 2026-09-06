import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessRail } from "@/components/sections/Showcase";
import { CurrentOpportunities, CareersWhy, CareersCta } from "@/components/sections/CareerSections";
import { careersHero, hiringProcess, opportunitiesPage } from "@/content/site";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { Glyph } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const title = "Opportunities — Careers at CORLINK IT";
const description =
  "Join a team of passionate innovators shaping the future of technology and healthcare. Discover your next big opportunity at CORLINK IT.";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: OpportunitiesRoute,
});

/**
 * The invitation card. Floats on the photograph from lg up; below that the
 * photograph is a backdrop rather than a panel, so it sits in the copy flow.
 */
function InviteCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "card-base flex items-center gap-4 px-5 py-4 shadow-[var(--shadow-float)]",
        className,
      )}
    >
      <Glyph label="Collaborative Culture" size={26} className="text-[var(--blue)]" />
      <span className="min-w-0">
        {careersHero.card.lines.map((l) => (
          <span
            key={l}
            className="font-display block text-[1.02rem] leading-tight font-semibold text-[var(--navy)]"
          >
            {l}
          </span>
        ))}
        <span className="mt-0.5 block text-[0.75rem] text-[var(--ink-muted)]">
          {careersHero.card.note}
        </span>
      </span>
      <ArrowGlyph className="h-4 w-4 shrink-0 text-[var(--blue)]" />
    </div>
  );
}

/**
 * Opportunities page — section order follows the reference exactly:
 *
 *   hero → current opportunities → why work here → hiring process → CTA
 */
function OpportunitiesRoute() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={opportunitiesPage.hero.eyebrow}
        title={opportunitiesPage.hero.title}
        titleAccent={opportunitiesPage.hero.titleAccent}
        body={opportunitiesPage.hero.body}
        image="/assets/images/corl-careers-team.webp"
        imageAlt="Three CORLINK IT colleagues working together at a laptop"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Opportunities" }]}
        mobileBackdrop
        aside={<InviteCard className="absolute right-8 bottom-8" />}
      >
        {/* Divided reassurance row, as in the reference */}
        <ul className="mt-9 grid grid-cols-2 gap-y-6 sm:flex sm:flex-wrap sm:items-stretch">
          {careersHero.points.map((p, i) => (
            <li
              key={p}
              className={
                "flex flex-col gap-2 sm:min-w-[8.5rem] sm:pr-6 " +
                (i > 0
                  ? "sm:border-l sm:border-[color-mix(in_srgb,var(--blue)_20%,transparent)] sm:pl-6"
                  : "")
              }
            >
              <Glyph label={p} size={24} className="text-[var(--blue)]" />
              <span className="max-w-[7.5rem] text-[0.8rem] leading-snug font-semibold text-[var(--navy)]">
                {p}
              </span>
            </li>
          ))}
        </ul>

        <InviteCard className="mt-9 w-fit lg:hidden" />
      </PageHero>

      <CurrentOpportunities />

      <CareersWhy />

      <ProcessRail
        eyebrow={hiringProcess.eyebrow}
        title={hiringProcess.title}
        body={hiringProcess.body}
        steps={hiringProcess.steps}
        tone="white"
      />

      <CareersCta />
    </SiteLayout>
  );
}
