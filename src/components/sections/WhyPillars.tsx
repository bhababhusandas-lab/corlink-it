import { whyCorlink } from "@/content/site";
import { Container, Section } from "@/components/ui/section";
import { IconTile, Glyph } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";

/**
 * Why industry leaders choose CORLINK IT — the reference's "what makes our
 * process effective" card row, followed by the client banner and the full
 * service list as a bordered four-column index.
 */
export function WhyPillars({ tone = "tint" }: { tone?: "white" | "tint" }) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="h-section">{whyCorlink.title}</h2>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyCorlink.items.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 70} className="card-base card-lift min-w-0 p-6">
              <IconTile label={item} />
              <h3 className="h-card mt-4">{item}</h3>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex items-center gap-4">
          <span className="hidden h-px flex-1 bg-[var(--line)] sm:block" />
          <p className="text-center text-[0.78rem] font-semibold tracking-[0.14em] text-[var(--blue)] uppercase">
            {whyCorlink.banner}
          </p>
          <span className="hidden h-px flex-1 bg-[var(--line)] sm:block" />
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <h3 className="font-display text-[1.5rem] font-semibold text-[var(--navy)]">
              {whyCorlink.offerTitle}
            </h3>
          </Reveal>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyCorlink.offer.map((o, i) => (
              <Reveal
                as="li"
                key={o}
                delay={(i % 4) * 50}
                className="card-base card-lift flex min-w-0 items-center gap-3 px-4 py-3.5"
              >
                <Glyph label={o} size={19} className="shrink-0 text-[var(--blue)]" />
                <span className="text-[0.85rem] font-medium text-[var(--navy)]">{o}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
