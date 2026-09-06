import { opportunitiesPage } from "@/content/site";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { OpportunityRows } from "@/components/sections/OpportunityRows";

export function OpportunitiesTeaser() {
  return (
    <Section id="opportunities" tone="tint">
      <Container>
        <SectionHeading
          eyebrow={opportunitiesPage.hero.eyebrow}
          title={opportunitiesPage.openTitle}
          aside={opportunitiesPage.openBody}
          link={{ label: "Opportunities", to: "/opportunities" }}
        />

        <div className="mt-10 lg:mt-12">
          <OpportunityRows jobs={opportunitiesPage.jobs.slice(0, 3)} />
        </div>
      </Container>
    </Section>
  );
}
