import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { OfficeCards, FaqAccordion } from "@/components/sections/Proof";
import { CareersCta } from "@/components/sections/CareerSections";
import { brand, contactExtras, contactHero, contactPage, footer } from "@/content/site";
import { Container, Section } from "@/components/ui/section";
import { CtaButton } from "@/components/ui/cta";
import { Glyph, IconTile } from "@/components/ui/icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const title = "Contact CORLINK IT — Let's build something extraordinary";
const description =
  "Have a project in mind or want to explore possibilities? Our team of experts is ready to help you navigate your digital transformation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactRoute,
});

const fieldClass =
  "mt-2 w-full rounded-[var(--radius)] border border-[var(--line)] bg-white px-3.5 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--blue)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--blue)_18%,transparent)]";

/**
 * Contact page — section order follows the reference exactly:
 *
 *   hero → form + contact information + map → offices → FAQs → CTA
 */
function ContactRoute() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        titleAccent={contactPage.hero.titleAccent}
        body={contactPage.hero.body}
        image="/assets/images/contact-hero.jpg"
        imageAlt="A CORLINK IT client meeting"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        mobileBackdrop
        aside={
          <div className="pointer-events-none absolute top-6 right-6 hidden text-right lg:block">
            {brand.tagline.map((word) => (
              <span
                key={word}
                className="block text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase [text-shadow:0_1px_6px_rgb(6_43_92_/_55%)]"
              >
                {word}
              </span>
            ))}
            <span aria-hidden="true" className="mt-2 ml-auto block h-px w-8 bg-white/80" />
          </div>
        }
      >
        <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
          {contactHero.points.map((p) => (
            <li key={p} className="flex items-center gap-2.5">
              <Glyph label={p} size={19} className="text-[var(--blue)]" />
              <span className="text-[0.82rem] font-medium tracking-wide text-[var(--navy)]">
                {p}
              </span>
            </li>
          ))}
        </ul>
      </PageHero>

      <Section tone="tint">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* Enquiry form */}
            <Reveal className="min-w-0">
              <div className="card-base p-6 lg:p-8">
                <p className="eyebrow">{contactExtras.formEyebrow}</p>
                <h2 className="font-display mt-3 text-[1.5rem] font-semibold text-[var(--navy)]">
                  {contactPage.form.title}
                </h2>
                <p className="body-copy mt-2 text-[0.875rem]">{contactPage.form.subtitle}</p>

                <form
                  className="mt-7"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    {contactPage.form.fields.map((f) => (
                      <div
                        key={f.name}
                        className={cn("min-w-0", f.type === "textarea" && "sm:col-span-2")}
                      >
                        <label
                          htmlFor={f.name}
                          className="block text-[0.8rem] font-semibold text-[var(--navy)]"
                        >
                          {f.label}
                          {f.required ? (
                            <span className="text-[var(--blue)]" aria-hidden="true">
                              {" "}
                              *
                            </span>
                          ) : null}
                        </label>

                        {f.type === "textarea" ? (
                          <textarea
                            id={f.name}
                            name={f.name}
                            required={f.required}
                            rows={5}
                            className={cn(fieldClass, "resize-y")}
                          />
                        ) : (
                          <input
                            id={f.name}
                            name={f.name}
                            type={f.type}
                            required={f.required}
                            className={fieldClass}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Consent — required, as on the reference form */}
                  <div className="mt-6 flex items-start gap-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 rounded-[3px] border border-[var(--line)] accent-[var(--blue)]"
                    />
                    <label
                      htmlFor="consent"
                      className="text-[0.8rem] leading-relaxed text-[var(--ink-muted)]"
                    >
                      {contactExtras.consent.before}{" "}
                      <Link
                        to="/privacy-policy"
                        className="font-medium text-[var(--blue)] underline underline-offset-2"
                      >
                        {contactExtras.consent.linkLabel}
                      </Link>{" "}
                      {contactExtras.consent.after}
                    </label>
                  </div>

                  <CtaButton
                    type="submit"
                    label={contactPage.form.submit}
                    className="mt-6 w-full sm:w-auto"
                  />

                  <p
                    aria-live="polite"
                    className="mt-4 min-h-5 text-sm font-medium text-[var(--blue-strong)]"
                  >
                    {sent ? contactPage.form.success : ""}
                  </p>
                </form>
              </div>
            </Reveal>

            {/* Contact information + map */}
            <Reveal className="min-w-0" delay={100}>
              <h2 className="font-display text-[1.5rem] font-semibold text-[var(--navy)]">
                {contactPage.info.title}
              </h2>

              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {contactPage.info.items.map((it) => (
                  <li key={it.label} className="card-base card-lift flex gap-4 p-5">
                    <IconTile label={it.label} className="rounded-full" />
                    <div className="min-w-0">
                      <span className="block text-[0.72rem] font-semibold tracking-[0.12em] text-[var(--blue)] uppercase">
                        {it.label}
                      </span>
                      <span className="mt-1.5 block text-[0.9rem] leading-relaxed whitespace-pre-line text-[var(--navy)]">
                        {it.value}
                      </span>
                    </div>
                  </li>
                ))}

                <li className="card-base flex gap-4 p-5">
                  <IconTile label="Legal Compliance" className="rounded-full" />
                  <div className="min-w-0">
                    <span className="block text-[0.72rem] font-semibold tracking-[0.12em] text-[var(--blue)] uppercase">
                      GST
                    </span>
                    <span className="mt-1.5 block text-[0.9rem] text-[var(--navy)]">
                      {footer.contact.gst}
                    </span>
                  </div>
                </li>
              </ul>

              {/*
               * Map panel. The query is built from the address already in content,
               * so nothing new is asserted about where the office is. Note this
               * embeds Google Maps — visitors' IP reaches Google when it loads.
               */}
              <div className="section-blue mt-4 rounded-[var(--radius)] p-5">
                <h3 className="font-display text-[1.1rem] font-semibold text-[var(--navy)]">
                  {contactExtras.map.title}
                </h3>
                <p className="mt-1 text-[0.82rem] text-[var(--ink-muted)]">
                  {contactExtras.map.body}
                </p>
                <div className="media-frame mt-4 border border-[color-mix(in_srgb,var(--blue)_18%,transparent)]">
                  <iframe
                    title={`Map showing ${footer.contact.address}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(footer.contact.address)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-[280px] w-full border-0"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <OfficeCards tone="white" />

      <FaqAccordion tone="tint" />

      <CareersCta eyebrow={contactExtras.ctaEyebrow} />
    </SiteLayout>
  );
}
