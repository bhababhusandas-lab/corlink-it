import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { TechRail } from "@/components/sections/TechRail";
import { HomeFeatures } from "@/components/sections/HomeFeatures";
import { WhyPillars } from "@/components/sections/WhyPillars";
import { MedicalTeaser } from "@/components/sections/MedicalTeaser";
import { WorkApproach, WorkCta } from "@/components/sections/WorkSections";
import { ProcessRail, TestimonialBlock } from "@/components/sections/Showcase";
import { aboutPage, howWeWork, workHero } from "@/content/site";
import { Container, Section } from "@/components/ui/section";
import { IconTile, Glyph } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";

const title = "Work & Company — CORLINK IT";
const description =
  "CORLINK IT isn't just an IT firm — we are a catalyst for digital evolution. Meet the mission, vision, capabilities and leadership behind our work.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

/**
 * Work page.
 *
 * The first five sections follow the reference exactly:
 *   hero → our approach → our process → what makes it effective → closing CTA
 *
 * The reference's Work page is a process-only page sitting under an About Us
 * menu. CORLINK IT's Work page is also its company page, so the capabilities,
 * leadership and catalogue sections continue below rather than being dropped —
 * there is no other route that carries them.
 */
function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        titleAccent={aboutPage.hero.titleAccent}
        body={aboutPage.hero.body}
        image={aboutPage.hero.image}
        imageAlt="The CORLINK IT delivery team at work"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Work" }]}
        mobileBackdrop
        backdropVeil="strong"
        aside={
          /*
           * Delivery flow, laid along the foot of the photograph.
           *
           * At the chips' natural size six of them need ~600px and the panel is
           * 46% of the viewport, so a single line only fits from about 1400px
           * up. They are a little more compact here, and allowed to wrap, so it
           * reads as one line on a normal desktop and folds to two rather than
           * overflowing on a narrow one.
           */
          <div className="pointer-events-none absolute inset-x-5 bottom-5 hidden flex-col items-center gap-2.5 lg:flex">
            <span className="block text-center text-[0.78rem] leading-snug font-semibold text-white [text-shadow:0_1px_8px_rgb(4_18_45_/_85%)]">
              {workHero.flowLabel}
            </span>

            {/* One line from xl, where the panel is wide enough for all six.
                Below that a 3x2 grid, which reads as deliberate — free wrapping
                left five on one line and "Support" stranded on its own. */}
            <ul className="grid grid-cols-3 justify-items-center gap-2 xl:flex xl:items-center xl:justify-center">
              {workHero.flow.map((step) => (
                <li
                  key={step}
                  className="card-base flex items-center gap-1.5 px-2.5 py-1.5 shadow-[var(--shadow-float)]"
                >
                  <Glyph label={step} size={13} className="shrink-0 text-[var(--blue)]" />
                  <span className="text-[0.68rem] font-semibold whitespace-nowrap text-[var(--navy)]">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
          {workHero.points.map((p) => (
            <li key={p} className="flex items-center gap-2.5">
              <Glyph label={p} size={19} className="text-[var(--blue)]" />
              <span className="text-[0.82rem] font-medium tracking-wide text-[var(--navy)]">
                {p}
              </span>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* ---- Reference sections ---- */}

      <WorkApproach />

      <ProcessRail
        eyebrow={howWeWork.eyebrow}
        title={howWeWork.title}
        body={howWeWork.body}
        steps={howWeWork.steps}
        tone="tint"
      />

      {/* What makes our process effective */}
      <HomeFeatures />

      <WorkCta />

      {/* ---- Company content, which the reference page has no slot for ---- */}

      <TechRail />

      <StatsBand tone="tint" />

      <Section tone="white">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{aboutPage.capabilitiesLabel}</p>
            <h2 className="h-section mt-3">{aboutPage.expertiseTitle}</h2>
          </Reveal>

          <ul className="mt-8 flex flex-wrap gap-3">
            {aboutPage.expertise.map((e) => (
              <li
                key={e}
                className="flex items-center gap-2.5 rounded-full border border-[var(--line)] bg-[var(--card-bg)] px-5 py-2.5 transition-colors hover:border-[color-mix(in_srgb,var(--blue)_45%,transparent)] hover:bg-[var(--tint)]"
              >
                <Glyph label={e} size={17} className="text-[var(--blue)]" />
                <span className="text-[0.85rem] font-medium text-[var(--navy)]">{e}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Core directives */}
      <Section tone="tint">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{aboutPage.dna.eyebrow}</p>
            <h2 className="h-section mt-3">{aboutPage.dna.title}</h2>
          </Reveal>

          <ul className="mt-9 grid gap-6 md:grid-cols-2">
            {aboutPage.dna.items.map((d, i) => (
              <Reveal
                as="li"
                key={d.title}
                delay={i * 80}
                className="card-base card-lift min-w-0 p-7"
              >
                <div className="flex items-center justify-between">
                  <IconTile label={d.title} />
                  <span className="font-display text-2xl font-semibold text-[var(--ink-soft)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="h-card mt-5 text-[1.125rem]">{d.title}</h3>
                <p className="body-copy mt-2.5 text-[0.875rem]">{d.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <WhyPillars tone="white" />

      {/* Leadership */}
      <Section tone="tint">
        <Container>
          <Reveal>
            <h2 className="h-section">{aboutPage.leadershipTitle}</h2>
          </Reveal>

          <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
            {aboutPage.leaders.map((l, i) => (
              <Reveal
                as="li"
                key={l.name}
                delay={i * 80}
                className="card-base card-lift min-w-0 overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[1.05rem] font-semibold tracking-wide text-[var(--navy)] uppercase">
                    {l.name}
                  </h3>
                  <p className="mt-1.5 text-[0.8rem] font-semibold tracking-[0.1em] text-[var(--blue-ink)] uppercase">
                    {l.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <TestimonialBlock tone="white" />

      <MedicalTeaser tone="white" />

      {/* Explore */}
      <Section tone="tint">
        <Container>
          <Reveal>
            <h2 className="h-section">{aboutPage.exploreTitle}</h2>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPage.explore.map((e, i) => (
              <Reveal
                as="li"
                key={e}
                delay={(i % 3) * 50}
                className="card-base card-lift flex min-w-0 items-center gap-3.5 px-4 py-3.5"
              >
                <Glyph label={e} size={19} className="shrink-0 text-[var(--blue)]" />
                <span className="min-w-0 text-[0.875rem] font-medium text-[var(--navy)]">{e}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </SiteLayout>
  );
}
