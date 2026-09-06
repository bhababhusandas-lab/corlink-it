import { PageHero } from "@/components/sections/PageHero";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/Reveal";

type LegalSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type LegalPageContent = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  body: string;
  updated: string;
  sections: readonly LegalSection[];
};

/** Shared long-form layout for the Privacy Policy and Terms & Conditions pages. */
export function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        titleAccent={page.titleAccent}
        body={page.body}
      />

      <Section tone="white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[0.8rem] font-medium tracking-[0.08em] text-[var(--ink-soft)] uppercase">
              {page.updated}
            </p>

            <div className="hair-line mt-5" />

            <ol className="mt-10 space-y-10">
              {page.sections.map((section, i) => (
                <Reveal as="li" key={section.heading}>
                  <div className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 font-mono text-[0.78rem] font-semibold text-[var(--blue)]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[1.375rem] font-semibold text-[var(--navy)]">
                        {section.heading}
                      </h2>

                      <div className="mt-4 space-y-4">
                        {section.body.map((p) => (
                          <p key={p} className="body-copy">
                            {p}
                          </p>
                        ))}

                        {section.list ? (
                          <ul className="mt-3 space-y-2.5">
                            {section.list.map((item) => (
                              <li
                                key={item}
                                className="border-l-2 border-[color-mix(in_srgb,var(--blue)_30%,transparent)] pl-4 text-[0.9rem] leading-relaxed text-[var(--ink-muted)]"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
    </>
  );
}
