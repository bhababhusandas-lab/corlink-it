import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { ServiceCorridor } from "@/components/sections/ServiceCorridor";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { FinalCta } from "@/components/sections/FinalCta";
import {
  TrustStrip,
  IndustryTiles,
  ProcessRail,
  TestimonialBlock,
  InsightCards,
} from "@/components/sections/Showcase";
import { howWeWork } from "@/content/site";

const title = "CORLINK IT — Transform Your Digital Future";
const description =
  "Where Innovation Drives Excellence, and Your Success Is Our Mission. Mobile app development, AI, cloud and medical coding services from CORLINK IT.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

/**
 * Homepage — section order follows the approved reference exactly:
 *
 *   hero → partner strip → statistics → services → about → industries
 *        → how we work → testimonial → insights → closing CTA
 *
 * Nothing else belongs on this page. The features, why-us, medical and
 * opportunities blocks that used to sit here have their own pages.
 */
function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <StatsBand />
      <ServiceCorridor />
      <AboutSplit />
      <IndustryTiles />
      <ProcessRail
        eyebrow={howWeWork.eyebrow}
        title={howWeWork.title}
        body={howWeWork.body}
        steps={howWeWork.steps}
        tone="white"
      />
      <TestimonialBlock />
      <InsightCards tone="tint" />
      <FinalCta />
    </SiteLayout>
  );
}
