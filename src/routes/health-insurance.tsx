import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import healthImg from "@/assets/health-insurance.jpg";

export const Route = createFileRoute("/health-insurance")({
  head: () => ({
    meta: [
      {
        title: "Health Insurance | Belinda Scott — Insurance Agent in Dalzell, SC",
      },
      {
        name: "description",
        content:
          "Individual and family health insurance, marketplace guidance, and dental & vision options — explained plainly by Belinda Scott in Dalzell, South Carolina. Call (762) 245-6959.",
      },
      {
        property: "og:title",
        content: "Health Insurance | Belinda Scott, Dalzell SC",
      },
      {
        property: "og:description",
        content:
          "Individual and family health coverage compared side by side, with honest guidance at every renewal.",
      },
    ],
  }),
  component: function HealthInsurancePage() {
    return (
      <ServicePage
        content={{
          name: "Health Insurance",
          eyebrow: "Health Insurance",
          headline: "Health coverage that fits your family and your budget.",
          intro:
            "Whether you're self-employed, between jobs, or your employer plan no longer makes sense, we'll sit down together and compare your real options — premiums, networks, and deductibles — until you find the one that fits.",
          image: healthImg,
          imageAlt: "Insurance agent reviewing health coverage options with a young family",
          coversTitle: "What we can look at together",
          covers: [
            "Individual & family health plans",
            "Marketplace (ACA) plan guidance and enrollment help",
            "Dental & vision coverage options",
            "Coverage for gaps between jobs or early retirement",
            "Prescription drug cost considerations",
            "Yearly plan reviews so you never overpay at renewal",
          ],
          goodFor: [
            {
              title: "Self-employed",
              text: "Business owners and contractors who don't have an employer plan to fall back on.",
            },
            {
              title: "Growing families",
              text: "Parents who want dependable coverage for checkups, emergencies, and everything between.",
            },
            {
              title: "Between plans",
              text: "Anyone in a coverage gap after a job change, graduation, or divorce.",
            },
            {
              title: "Early retirees",
              text: "Retiring before 65 and needing solid coverage until Medicare begins.",
            },
          ],
        }}
      />
    );
  },
});
