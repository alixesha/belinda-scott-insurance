import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import lifeImg from "@/assets/life-insurance.jpg";

export const Route = createFileRoute("/life-insurance")({
  head: () => ({
    meta: [
      {
        title: "Life Insurance | Belinda Scott — Insurance Agent in Dalzell, SC",
      },
      {
        name: "description",
        content:
          "Term life, whole life, and final expense insurance explained plainly by Belinda Scott, an independent agent in Dalzell, South Carolina. Call (762) 245-6959.",
      },
      {
        property: "og:title",
        content: "Life Insurance | Belinda Scott, Dalzell SC",
      },
      {
        property: "og:description",
        content:
          "Protect the people who count on you with term, whole life, or final expense coverage matched to your budget.",
      },
    ],
  }),
  component: function LifeInsurancePage() {
    return (
      <ServicePage
        content={{
          name: "Life Insurance",
          eyebrow: "Life Insurance",
          headline: "Protect the people who count on you.",
          intro:
            "Life insurance isn't about expecting the worst — it's about making sure the people you love can stay in their home, stay in school, and keep their footing no matter what. I'll help you figure out how much coverage makes sense and what it should cost.",
          image: lifeImg,
          imageAlt: "A multigenerational family laughing together on their porch",
          coversTitle: "What we can look at together",
          covers: [
            "Term life insurance for set periods of protection",
            "Whole life & permanent coverage that builds value",
            "Final expense & burial plans",
            "Options that require no medical exam",
            "How much coverage you actually need (income replacement)",
            "Beneficiary reviews to keep policies up to date",
          ],
          goodFor: [
            {
              title: "New parents",
              text: "Families whose income, mortgage, or childcare depends on one or both earners.",
            },
            {
              title: "Homeowners",
              text: "Anyone who wants the family home protected if a paycheck suddenly stops.",
            },
            {
              title: "Planning ahead",
              text: "Adults who want final expenses covered so their family isn't left with the bill.",
            },
            {
              title: "Leaving a legacy",
              text: "People who want to leave something meaningful behind for children or grandchildren.",
            },
          ],
        }}
      />
    );
  },
});
