import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/Reveal";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { Container, Section } from "@/components/ui/section";
import { Glyph, IconRing, IconTile } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { MedCapabilities, MedWhy, MedSpecialties } from "@/components/sections/MedicalSections";
import { KeyBenefits, CaseStudyBlock, FaqAccordion } from "@/components/sections/Proof";
import {
  advantages,
  beginnerMistakes,
  careerPath,
  certifications,
  codeSystems,
  coderDuties,
  challenges,
  criticalNote,
  medHero,
  medSectionTitles,
  mistakesNote,
  quizQuestions,
  quizResults,
  requirements,
  roadmap,
  salaryBands,
  specializations,
  workflowSteps,
  workplaces,
  type CertKey,
  type CodeSystemKey,
} from "@/content/medical";

const title = "Medical Coding — CORLINK IT Career Guide";
const description =
  "What is medical coding? A complete guide to ICD-10, CPT and HCPCS code systems, certifications, salary bands, career path and a step-by-step roadmap.";

export const Route = createFileRoute("/medical-coding")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MedicalCodingRoute,
});

/** Section header: blue eyebrow, serif title, optional hint line. */
function Heading({
  eyebrow,
  title: t,
  hint,
  onNavy = false,
}: {
  eyebrow: string;
  title: string;
  hint?: string;
  onNavy?: boolean;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className={cn("eyebrow", onNavy && "text-[var(--on-navy-muted)]")}>{eyebrow}</p>
      <h2 className={cn("h-section mt-3", onNavy && "on-navy-heading")}>{t}</h2>
      {hint ? (
        <p
          className={cn(
            "mt-3 text-[0.9rem]",
            onNavy ? "text-[var(--on-navy-muted)]" : "text-[var(--ink-muted)]",
          )}
        >
          {hint}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Shared list-row treatment: hairline separated, small blue index. */
function IndexRow({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <span className="flex items-baseline gap-4">
      <span className="shrink-0 font-mono text-[0.72rem] font-semibold text-[var(--blue)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="min-w-0 text-[0.9rem] leading-relaxed text-[var(--ink)]">{children}</span>
    </span>
  );
}

function MedicalCodingRoute() {
  const [codeTab, setCodeTab] = useState<CodeSystemKey>("icd");
  const [certTab, setCertTab] = useState<CertKey>("cpc");
  const [step, setStep] = useState<number | null>(0);
  const [role, setRole] = useState(0);
  const [openStep, setOpenStep] = useState<number | null>(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  // Both lists are non-empty tuples, so the index-0 fallback is always defined —
  // this keeps the lookups typed under noUncheckedIndexedAccess without assertions.
  const activeStep = workflowSteps[step ?? 0] ?? workflowSteps[0];
  const activeBand = salaryBands[role] ?? salaryBands[0];

  const cs = codeSystems[codeTab];
  const cert = certifications[certTab];
  const yes = answers.filter(Boolean).length;
  const done = answers.length === quizQuestions.length;
  const result = done
    ? yes >= 5
      ? quizResults.strong(yes)
      : yes >= 3
        ? quizResults.medium(yes)
        : quizResults.low(yes)
    : null;

  return (
    <SiteLayout>
      <PageHero
        eyebrow={medHero.eyebrow}
        title={medHero.title}
        titleAccent={medHero.titleAccent}
        body={medHero.body}
        image={medHero.image}
        imageAlt={medHero.caption}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Medical" }]}
        mobileBackdrop
      >
        <ul className="mt-7 flex flex-wrap gap-2.5">
          {medHero.pills.map((p) => (
            <li
              key={p}
              className="flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--blue)_28%,transparent)] bg-white px-3.5 py-1.5"
            >
              <Glyph label={p} size={15} className="text-[var(--blue)]" />
              <span className="text-[0.78rem] font-medium text-[var(--navy)]">{p}</span>
            </li>
          ))}
        </ul>
      </PageHero>

      <MedCapabilities />

      <MedWhy />

      {/* WORKFLOW */}
      <Section tone="white">
        <Container>
          <Heading {...medSectionTitles.workflow} />

          {/* Horizontal step rail, as in the reference "Our Process" band:
              outlined circular icon, number, title, connected by arrows. */}
          <ol className="mt-10 grid gap-x-2 gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
            {workflowSteps.map((s, i) => {
              const isActive = step === i;
              return (
                <li key={s.n} className="relative flex flex-col items-center text-center">
                  {/* Connector to the next step — desktop only, never after the last. */}
                  {i < workflowSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-7 left-[calc(50%+2.25rem)] hidden h-px w-[calc(100%-4.5rem)] bg-[color-mix(in_srgb,var(--blue)_28%,transparent)] lg:block"
                    />
                  ) : null}

                  <button
                    type="button"
                    onClick={() => setStep(i)}
                    aria-pressed={isActive}
                    className="group flex w-full flex-col items-center px-2"
                  >
                    <span
                      className={cn(
                        "relative z-10 flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-200",
                        isActive
                          ? "border-[var(--blue)] bg-[var(--blue)] text-white shadow-[var(--shadow-card-hover)]"
                          : "border-[color-mix(in_srgb,var(--blue)_32%,transparent)] bg-white text-[var(--blue)] group-hover:border-[var(--blue)]",
                      )}
                    >
                      <Glyph label={s.t} size={22} />
                    </span>

                    <span
                      className={cn(
                        "mt-4 font-mono text-[0.72rem] font-semibold transition-colors",
                        isActive ? "text-[var(--blue)]" : "text-[var(--ink-soft)]",
                      )}
                    >
                      {s.n}
                    </span>
                    <span className="font-display mt-1 text-[0.98rem] leading-snug font-semibold text-[var(--navy)]">
                      {s.t}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <Reveal className="card-base mt-10 p-6 lg:p-8">
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-[var(--blue)] uppercase">
              STEP {activeStep.n}
            </p>
            <h3 className="font-display mt-3 text-[1.5rem] font-semibold text-[var(--navy)]">
              {activeStep.t}
            </h3>
            <p className="body-copy mt-4 max-w-3xl">{activeStep.d}</p>

            <p className="mt-7 max-w-3xl rounded-[var(--radius)] border-l-[3px] border-[var(--blue)] bg-[var(--tint)] p-5 text-[0.875rem] leading-relaxed text-[var(--navy)]">
              {criticalNote}
            </p>
          </Reveal>
        </Container>
      </Section>

      <MedSpecialties />

      {/* CERTIFICATIONS — navy band */}
      <section className="surface-navy relative isolate overflow-hidden py-16 lg:py-24">
        <img
          src="/assets/images/corl-med-datacenter.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,var(--navy)_12%,color-mix(in_srgb,var(--navy-deep)_88%,transparent)_62%,color-mix(in_srgb,var(--blue-strong)_50%,transparent)_120%)]"
        />

        <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
          <Heading
            eyebrow={medSectionTitles.certifications.eyebrow}
            title={medSectionTitles.certifications.title}
            onNavy
          />

          <div role="tablist" aria-label="Certifications" className="mt-8 flex flex-wrap gap-2.5">
            {(Object.keys(certifications) as CertKey[]).map((k) => (
              <button
                key={k}
                role="tab"
                type="button"
                aria-selected={certTab === k}
                onClick={() => setCertTab(k)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-[0.8rem] font-semibold transition-colors",
                  certTab === k
                    ? "border-white bg-white text-[var(--blue-strong)]"
                    : "border-[color-mix(in_srgb,var(--on-navy)_34%,transparent)] text-[var(--on-navy-muted)] hover:border-white hover:text-white",
                )}
              >
                {certifications[k].tab}
              </button>
            ))}
          </div>

          <div className="mt-9 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[var(--radius)] border border-[color-mix(in_srgb,var(--on-navy)_22%,transparent)] bg-[color-mix(in_srgb,var(--on-navy)_8%,transparent)] p-6 backdrop-blur-sm lg:p-8">
              <h3 className="font-display text-[1.75rem] font-semibold text-white">{cert.name}</h3>
              <p className="mt-1.5 text-[0.875rem] text-[var(--on-navy-muted)]">{cert.full}</p>
              <p className="mt-2 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase">
                {cert.by} · {cert.level}
              </p>

              <ul className="mt-7 grid grid-cols-2 gap-3">
                {cert.stats.map(([k, v]) => (
                  <li
                    key={k}
                    className="rounded-[calc(var(--radius)-2px)] border border-[color-mix(in_srgb,var(--on-navy)_20%,transparent)] p-4"
                  >
                    <span className="block text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--on-navy-muted)] uppercase">
                      {k}
                    </span>
                    <span className="mt-1 block text-[1.05rem] font-semibold text-white">{v}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[0.875rem] leading-relaxed text-[var(--on-navy-muted)]">
                {cert.focus}
              </p>
            </div>

            <ol className="space-y-3">
              {cert.steps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline gap-4 border-b border-[color-mix(in_srgb,var(--on-navy)_18%,transparent)] pb-3.5 text-[0.9rem] text-[var(--on-navy-muted)] last:border-b-0"
                >
                  <span className="shrink-0 font-mono text-[0.72rem] font-semibold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <KeyBenefits tone="tint" />

      <CaseStudyBlock tone="white" />

      {/* ---- Career-guide content, which the reference page has no slot for ---- */}

      {/* CODE SYSTEMS */}
      <Section tone="tint">
        <Container>
          <Heading {...medSectionTitles.codes} />

          <div
            role="tablist"
            aria-label="Code systems"
            className="mt-8 flex flex-wrap gap-1 border-b border-[var(--line)]"
          >
            {(Object.keys(codeSystems) as CodeSystemKey[]).map((k) => (
              <button
                key={k}
                role="tab"
                type="button"
                aria-selected={codeTab === k}
                onClick={() => setCodeTab(k)}
                className={cn(
                  "-mb-px border-b-2 px-4 py-3 text-[0.85rem] font-semibold transition-colors",
                  codeTab === k
                    ? "border-[var(--blue)] text-[var(--blue)]"
                    : "border-transparent text-[var(--ink-muted)] hover:text-[var(--navy)]",
                )}
              >
                {codeSystems[k].tab}
              </button>
            ))}
          </div>

          <div className="mt-9 grid gap-8 lg:grid-cols-2">
            <div className="min-w-0">
              <div className="flex items-center gap-4">
                <IconTile label="Medical Coding" />
                <div className="min-w-0">
                  <h3 className="font-display text-[1.75rem] font-semibold text-[var(--navy)]">
                    {cs.name}
                  </h3>
                  <p className="text-[0.85rem] text-[var(--ink-muted)]">{cs.full}</p>
                </div>
              </div>

              <p className="mt-5 text-[0.95rem] leading-relaxed text-[var(--ink)]">{cs.purpose}</p>

              <ul className="mt-6 space-y-2.5">
                {cs.examples.map(([code, desc]) => (
                  <li
                    key={code}
                    className="card-base flex flex-col gap-1.5 p-4 sm:flex-row sm:items-center sm:gap-5"
                  >
                    <span className="w-24 shrink-0 font-mono text-[0.85rem] font-semibold text-[var(--blue)]">
                      {code}
                    </span>
                    <span className="text-[0.875rem] text-[var(--ink-muted)]">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <ul className="space-y-3">
                {cs.struct.map(([k, label, meaning]) => (
                  <li
                    key={k + label}
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4 border-b border-[var(--line)] pb-3"
                  >
                    <span className="flex h-8 w-10 shrink-0 items-center justify-center rounded-[calc(var(--radius)-2px)] bg-[var(--tint)] font-mono text-[0.8rem] font-semibold text-[var(--blue)]">
                      {k}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.9rem] font-semibold text-[var(--navy)]">
                        {label}
                      </span>
                      <span className="block text-[0.875rem] text-[var(--ink-muted)]">
                        {meaning}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 rounded-[var(--radius)] border-l-[3px] border-[var(--blue)] bg-[var(--tint)] p-5 text-[0.875rem] leading-relaxed text-[var(--navy)]">
                {cs.tip}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* WORKPLACES */}
      <Section tone="white">
        <Container>
          <Reveal className="max-w-3xl">
            <h2 className="h-section">{medSectionTitles.workplaces}</h2>
          </Reveal>

          <div className="mt-9 grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
            <ul className="grid grid-cols-2 gap-2.5">
              {workplaces.map((w) => (
                <li
                  key={w}
                  className="card-base card-lift px-3.5 py-3 text-[0.82rem] font-medium text-[var(--navy)]"
                >
                  {w}
                </li>
              ))}
            </ul>

            <div className="media-frame">
              <img
                src="/assets/images/med-grid-doctor.jpg"
                alt="Healthcare professionals reviewing records"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* REQUIREMENTS */}
      <Section tone="tint">
        <Container>
          <Heading {...medSectionTitles.requirements} />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Reveal className="card-base min-w-0 p-6 lg:p-7">
              <IconTile label="Eligibility" />
              <h3 className="font-display mt-5 text-[1.25rem] font-semibold text-[var(--navy)]">
                Eligibility
              </h3>

              <p className="mt-4">
                <span className="block text-[0.7rem] font-semibold tracking-[0.14em] text-[var(--blue)] uppercase">
                  Minimum
                </span>
                <span className="mt-1 block text-[0.875rem] text-[var(--ink-muted)]">
                  {requirements.eligibility.minimum}
                </span>
              </p>
              <p className="mt-4">
                <span className="block text-[0.7rem] font-semibold tracking-[0.14em] text-[var(--blue)] uppercase">
                  Preferred
                </span>
                <span className="mt-1 block text-[0.875rem] text-[var(--ink-muted)]">
                  {requirements.eligibility.preferred}
                </span>
              </p>

              <ul className="mt-6 space-y-2.5">
                {requirements.eligibility.skills.map((s) => (
                  <li key={s} className="flex gap-2.5">
                    <Glyph
                      label="checklist"
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--blue)]"
                    />
                    <span className="text-[0.875rem] text-[var(--ink-muted)]">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="card-base min-w-0 p-6 lg:p-7" delay={80}>
              <IconTile label="Syllabus" />
              <h3 className="font-display mt-5 text-[1.25rem] font-semibold text-[var(--navy)]">
                Syllabus
              </h3>

              <ul className="mt-5 space-y-3">
                {requirements.syllabus.map(([t, d]) => (
                  <li key={t} className="border-b border-[var(--line)] pb-3 last:border-b-0">
                    <span className="block text-[0.9rem] font-semibold text-[var(--navy)]">
                      {t}
                    </span>
                    <span className="mt-0.5 block text-[0.875rem] text-[var(--ink-muted)]">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 inline-flex rounded-full bg-[var(--tint)] px-3.5 py-1.5 text-[0.75rem] font-semibold text-[var(--blue)]">
                {requirements.duration}
              </p>
            </Reveal>

            <Reveal className="card-base min-w-0 p-6 lg:p-7" delay={160}>
              <IconTile label="Tools" />
              <h3 className="font-display mt-5 text-[1.25rem] font-semibold text-[var(--navy)]">
                Tools
              </h3>
              <p className="body-copy mt-3 text-[0.875rem]">{requirements.toolsIntro}</p>

              <ul className="mt-5 space-y-3">
                {requirements.tools.map(([t, d]) => (
                  <li key={t} className="border-b border-[var(--line)] pb-3 last:border-b-0">
                    <span className="block text-[0.9rem] font-semibold text-[var(--navy)]">
                      {t}
                    </span>
                    <span className="mt-0.5 block text-[0.875rem] text-[var(--ink-muted)]">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* SALARY */}
      <Section tone="white">
        <Container>
          <Heading {...medSectionTitles.salary} />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div className="card-base min-w-0 p-6 lg:p-7">
              <label
                htmlFor="salary-profile"
                className="block text-[0.72rem] font-semibold tracking-[0.14em] text-[var(--blue)] uppercase"
              >
                Your profile
              </label>
              <select
                id="salary-profile"
                value={role}
                onChange={(e) => setRole(Number(e.target.value))}
                className="mt-3 w-full rounded-[var(--radius)] border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--blue)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--blue)_18%,transparent)]"
              >
                {salaryBands.map((b, i) => (
                  <option key={b.label} value={i}>
                    {b.label}
                  </option>
                ))}
              </select>

              <p className="font-display mt-8 text-[clamp(2rem,4.4vw,3rem)] leading-none font-semibold text-[var(--blue)]">
                {activeBand.range}
              </p>
              <p className="mt-3 text-[0.875rem] text-[var(--ink-muted)]">{activeBand.label}</p>
            </div>

            <ul className="space-y-5">
              {salaryBands.map((b, i) => (
                <li key={b.label}>
                  <div className="flex items-baseline justify-between gap-4 text-[0.9rem]">
                    <span
                      className={cn(
                        i === role ? "font-semibold text-[var(--blue)]" : "text-[var(--ink-muted)]",
                      )}
                    >
                      {b.label}
                    </span>
                    <span className="font-mono text-[0.78rem] text-[var(--navy)]">{b.range}</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[var(--tint)]">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-700",
                        i === role ? "bg-[var(--blue)]" : "bg-[var(--on-navy-muted)]",
                      )}
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* CAREER PATH */}
      <Section tone="tint">
        <Container>
          <Heading {...medSectionTitles.career} />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {careerPath.map((c, i) => (
              <Reveal
                as="li"
                key={c.role}
                delay={(i % 5) * 60}
                className="card-base card-lift flex min-w-0 flex-col p-6"
              >
                <span className="inline-flex self-start rounded-full bg-[var(--tint)] px-3 py-1 text-[0.7rem] font-semibold tracking-[0.1em] text-[var(--blue)] uppercase">
                  {c.yr}
                </span>
                <h3 className="h-card mt-4">{c.role}</h3>
                <p className="mt-2 font-mono text-[0.9rem] font-semibold text-[var(--navy)]">
                  {c.sal}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {c.skills.map((s) => (
                    <li key={s} className="text-[0.78rem] text-[var(--ink-muted)]">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* HONEST ASSESSMENT */}
      <Section tone="white">
        <Container>
          <Heading {...medSectionTitles.honest} />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="card-base min-w-0 p-6 lg:p-7">
              <h3 className="font-display flex items-center gap-3 text-[1.25rem] font-semibold text-[var(--blue)]">
                <IconTile label="Proven Track Record of Success" />
                Advantages
              </h3>
              <ul className="mt-5 space-y-3">
                {advantages.map((a) => (
                  <li
                    key={a}
                    className="flex gap-3 border-b border-[var(--line)] pb-3 last:border-b-0"
                  >
                    <Glyph
                      label="advantage"
                      size={17}
                      className="mt-0.5 shrink-0 text-[var(--blue)]"
                    />
                    <span className="text-[0.875rem] text-[var(--ink)]">{a}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="card-base min-w-0 p-6 lg:p-7" delay={80}>
              <h3 className="font-display flex items-center gap-3 text-[1.25rem] font-semibold text-[var(--navy)]">
                <IconTile label="Challenges" />
                Challenges
              </h3>
              <ul className="mt-5 space-y-3">
                {challenges.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 border-b border-[var(--line)] pb-3 last:border-b-0"
                  >
                    <Glyph
                      label="challenge"
                      size={17}
                      className="mt-0.5 shrink-0 text-[var(--ink-soft)]"
                    />
                    <span className="text-[0.875rem] text-[var(--ink-muted)]">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="section-blue mt-8 rounded-[var(--radius)] p-6 lg:p-7">
            <h3 className="font-display text-[1.125rem] font-semibold text-[var(--navy)]">
              Beginner Mistakes
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {beginnerMistakes.map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-[color-mix(in_srgb,var(--blue)_24%,transparent)] bg-white px-3.5 py-2 text-[0.82rem] text-[var(--navy)]"
                >
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.9rem] font-semibold text-[var(--blue-strong)]">
              {mistakesNote}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ROADMAP */}
      <Section tone="tint">
        <Container>
          <Heading {...medSectionTitles.roadmapT} />

          <ol className="mt-10 space-y-3">
            {roadmap.map((r, i) => {
              const open = openStep === i;
              return (
                <li
                  key={r.num}
                  className={cn(
                    "card-base overflow-hidden transition-colors",
                    open && "border-[color-mix(in_srgb,var(--blue)_45%,transparent)]",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenStep(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start gap-4 p-5 text-left lg:gap-5"
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-[0.72rem] font-semibold transition-colors",
                        open
                          ? "bg-[var(--blue)] text-white"
                          : "bg-[var(--tint)] text-[var(--blue)]",
                      )}
                    >
                      {r.num}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="font-display block text-[1.05rem] font-semibold text-[var(--navy)] lg:text-[1.2rem]">
                        {r.title}
                      </span>
                      <span className="mt-1.5 block text-[0.875rem] text-[var(--ink-muted)]">
                        {r.summary}
                      </span>
                    </span>

                    <span className="hidden shrink-0 rounded-full bg-[var(--tint)] px-3 py-1.5 text-[0.72rem] font-semibold text-[var(--blue)] sm:inline-block">
                      {r.dur}
                    </span>

                    <span
                      aria-hidden="true"
                      className="relative mt-1 h-4 w-4 shrink-0 text-[var(--blue)]"
                    >
                      <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 rounded-full bg-current" />
                      <span
                        className={cn(
                          "absolute top-0 left-1/2 h-4 w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform duration-300",
                          open ? "scale-y-0" : "scale-y-100",
                        )}
                      />
                    </span>
                  </button>

                  {open ? (
                    <div className="border-t border-[var(--line)] px-5 pt-5 pb-6 sm:pl-[4.25rem]">
                      <p className="body-copy max-w-2xl">{r.detail}</p>
                      <ul className="mt-5 space-y-2.5">
                        {r.checklist.map((c) => (
                          <li key={c} className="flex items-baseline gap-3">
                            <span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--blue)]"
                            />
                            <span className="text-[0.875rem] text-[var(--ink)]">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* QUIZ */}
      <Section tone="white">
        <Container>
          <Heading {...medSectionTitles.quiz} />

          <ol className="mt-10 max-w-3xl space-y-3">
            {quizQuestions.map((q, i) => (
              <li
                key={q}
                className="card-base flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <span className="text-[0.9rem] text-[var(--ink)]">{q}</span>
                <span className="flex shrink-0 gap-2">
                  {[true, false].map((v) => (
                    <button
                      key={String(v)}
                      type="button"
                      aria-pressed={answers[i] === v}
                      onClick={() =>
                        setAnswers((prev) => {
                          const next = [...prev];
                          next[i] = v;
                          return next;
                        })
                      }
                      className={cn(
                        "min-w-[4.25rem] rounded-full border px-5 py-2 text-[0.8rem] font-semibold transition-colors",
                        answers[i] === v
                          ? "border-[var(--blue)] bg-[var(--blue)] text-white"
                          : "border-[var(--line)] text-[var(--ink-muted)] hover:border-[var(--blue)] hover:text-[var(--blue)]",
                      )}
                    >
                      {v ? "Yes" : "No"}
                    </button>
                  ))}
                </span>
              </li>
            ))}
          </ol>

          <div aria-live="polite" className="mt-8 max-w-3xl">
            {result ? (
              <div className="section-blue rounded-[var(--radius)] border-l-[3px] border-[var(--blue)] p-6">
                <div className="flex items-center gap-3">
                  <IconRing label="Self Assessment" className="h-11 w-11" size={20} />
                  <h3 className="font-display text-[1.25rem] font-semibold text-[var(--navy)]">
                    {result.t}
                  </h3>
                </div>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
                  {result.b}
                </p>
                <button
                  type="button"
                  onClick={() => setAnswers([])}
                  className="group mt-5 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-[var(--blue)] transition-colors hover:text-[var(--blue-strong)]"
                >
                  Reset
                  <ArrowGlyph className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            ) : (
              <p className="text-[0.8rem] font-medium tracking-[0.08em] text-[var(--ink-soft)] uppercase">
                {answers.filter((a) => a !== undefined).length}/{quizQuestions.length} answered
              </p>
            )}
          </div>
        </Container>
      </Section>

      <FaqAccordion tone="tint" />
      <FinalCta />
    </SiteLayout>
  );
}
