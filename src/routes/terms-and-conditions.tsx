import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegalPage } from "@/components/sections/LegalPage";
import { legalPages } from "@/content/site";

const title = "Terms & Conditions — CORLINK IT";
const description =
  "The terms that apply when you use the Corlink IT website and engage our services.";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TermsAndConditionsRoute,
});

function TermsAndConditionsRoute() {
  return (
    <SiteLayout>
      <LegalPage page={legalPages.terms} />
    </SiteLayout>
  );
}
