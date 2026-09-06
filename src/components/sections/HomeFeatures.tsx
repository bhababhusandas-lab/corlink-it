import { homeServices } from "@/content/site";
import { Container, Section } from "@/components/ui/section";
import { IconTile } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";

/**
 * The four differentiators, as white cards with the photograph banded across
 * the top, a thin blue icon overlapping it, then the serif title and body.
 */
export function HomeFeatures() {
  return (
    <Section tone="white">
      <Container>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.features.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              delay={i * 70}
              className="card-base card-lift flex min-w-0 flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={f.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--navy)_14%,transparent)]" />
              </div>

              <div className="relative flex flex-1 flex-col p-5">
                <IconTile
                  label={f.title}
                  className="absolute -top-[1.375rem] left-5 border border-white bg-white shadow-[var(--shadow-card-hover)]"
                />
                <h3 className="h-card mt-6">{f.title}</h3>
                <p className="body-copy mt-2.5 text-[0.875rem]">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
