import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { ServiceCatalogue, ServiceOverview } from "@/components/sections/ServiceCatalogue";
import { ProcessRail } from "@/components/sections/Showcase";
import { KeyBenefits, CaseStudyBlock, FaqAccordion } from "@/components/sections/Proof";
import { servicesPage, servicesHero, serviceProcess, stats } from "@/content/site";
import { Container, Section } from "@/components/ui/section";
import { IconTile } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";
import { Glyph } from "@/components/ui/icons";

const title = "Services — CORLINK IT";
const description =
  "From visionary application development to specialized healthcare technology. High-impact engineering that drives business value and operational efficiency.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

/** Headline figure floated over the hero photograph, as in the reference. */
const HERO_STAT = stats[2];

/**
 * Services page — section order follows the reference exactly:
 *
 *   hero → category cards → selected-service detail → tab bar → overview
 *        → process → benefits → case study → FAQs → CTA
 */
function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={servicesPage.hero.eyebrow}
        title={servicesPage.hero.title}
        titleAccent={servicesPage.hero.titleAccent}
        body={servicesPage.hero.body}
        image="/assets/images/corl-coding-office.webp"
        imageAlt="A medical coder working at a workstation in the CORLINK IT office"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        aside={
          <>
            {HERO_STAT ? (
              <div className="card-base absolute right-4 bottom-4 flex items-center gap-3.5 px-5 py-4 shadow-[var(--shadow-float)] lg:right-8 lg:bottom-8">
                <Glyph label={HERO_STAT.label} size={26} className="text-[var(--blue)]" />
                <span className="min-w-0">
                  <span className="font-display block text-[1.5rem] leading-none font-semibold text-[var(--navy)]">
                    {HERO_STAT.value}
                    {HERO_STAT.suffix}
                  </span>
                  <span className="mt-1 block text-[0.72rem] font-medium tracking-[0.08em] text-[var(--ink-muted)] uppercase">
                    {HERO_STAT.label}
                  </span>
                </span>
              </div>
            ) : null}
          </>
        }
      >
        <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
          {servicesHero.points.map((p) => (
            <li key={p} className="flex items-center gap-2.5">
              <Glyph label={p} size={19} className="text-[var(--blue)]" />
              <span className="text-[0.82rem] font-medium tracking-wide text-[var(--navy)]">
                {p}
              </span>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Category cards → detail band → section tab bar */}
      <ServiceCatalogue />

      <ServiceOverview />

      <ProcessRail
        eyebrow={serviceProcess.eyebrow}
        title={serviceProcess.title}
        steps={serviceProcess.steps}
        tone="tint"
        id="our-process"
      />

      <KeyBenefits tone="white" id="benefits" />

      <CaseStudyBlock tone="tint" id="case-study" />

      {/* Our values */}
      <Section tone="white">
        <Container>
          <Reveal>
            <p className="eyebrow">Our Values</p>
          </Reveal>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {servicesPage.values.map((v, i) => (
              <Reveal
                as="li"
                key={v.title}
                delay={i * 80}
                className="card-base card-lift min-w-0 p-7"
              >
                <div className="flex items-center justify-between">
                  <IconTile label={v.title} />
                  <span className="font-display text-2xl font-semibold text-[color-mix(in_srgb,var(--blue)_30%,transparent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="h-card mt-5 text-[1.125rem]">{v.title}</h3>
                <p className="body-copy mt-2.5 text-[0.875rem]">{v.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <FaqAccordion tone="tint" id="faqs" />

      <FinalCta />
    </SiteLayout>
  );
}
