import { homeServices, servicesPage } from "@/content/site";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardLink } from "@/components/ui/cta";
import { IconTile } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";

/**
 * "Solutions that drive better outcomes" — the reference's six-card service row:
 * thin blue icon in a tinted tile, title, a short description, then Learn More.
 *
 * The six shown are the first six of the full catalogue, so their descriptions
 * come straight from the services content rather than being written twice.
 */
const FEATURED = servicesPage.items.slice(0, 6);

export function ServiceCorridor() {
  return (
    <Section id="services" tone="tint">
      <Container>
        <SectionHeading
          eyebrow={homeServices.eyebrow}
          title={homeServices.title}
          aside={homeServices.body}
          link={{ label: homeServices.cta.label, to: homeServices.cta.path }}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {FEATURED.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 6) * 60}
              className="card-base card-lift flex min-w-0 flex-col p-5"
            >
              <IconTile label={s.title} />
              <h3 className="h-card mt-4 text-[0.98rem]">{s.title}</h3>
              <p className="mt-2.5 line-clamp-4 text-[0.8rem] leading-relaxed text-[var(--ink-muted)]">
                {s.body}
              </p>
              <div className="mt-auto pt-4">
                <CardLink to="/services" label={servicesPage.readMore} />
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
