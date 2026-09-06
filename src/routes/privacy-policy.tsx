import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegalPage } from "@/components/sections/LegalPage";
import { legalPages } from "@/content/site";

const title = "Privacy Policy — CORLINK IT";
const description =
  "How Corlink IT collects, uses, and protects the information you share with us.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyPolicyRoute,
});

function PrivacyPolicyRoute() {
  return (
    <SiteLayout>
      <LegalPage page={legalPages.privacy} />
    </SiteLayout>
  );
}
