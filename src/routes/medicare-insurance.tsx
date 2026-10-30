import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import medicareImg from "@/assets/medicare-insurance.jpg";

export const Route = createFileRoute("/medicare-insurance")({
  head: () => ({
    meta: [
      {
        title: "Medicare Insurance | Belinda Scott — Insurance Agent in Dalzell, SC",
      },
      {
        name: "description",
        content:
          "Medicare Advantage, Supplement (Medigap), and Part D prescription plans explained plainly by Belinda Scott in Dalzell, South Carolina. Call (762) 245-6959.",
      },
      {
        property: "og:title",
        content: "Medicare Insurance | Belinda Scott, Dalzell SC",
      },
      {
        property: "og:description",
        content:
          "Turning 65 or reviewing your plan? Medicare Advantage, Supplement, and drug coverage explained in plain English.",
      },
    ],
  }),
  component: function MedicareInsurancePage() {
    return (
      <ServicePage
        content={{
          name: "Medicare Insurance",
          eyebrow: "Medicare Insurance",
          headline: "Medicare, explained the way it should be.",
          intro:
            "Turning 65 comes with a stack of mail and more questions than answers. I'll walk you through your options step by step — what each part covers, what it costs, and which doctors and prescriptions are included — so you can enroll with confidence.",
          image: medicareImg,
          imageAlt: "Insurance agent walking a retired couple through Medicare plan options",
          coversTitle: "What we can look at together",
          covers: [
            "Medicare Advantage plans (Part C)",
            "Medicare Supplement plans (Medigap)",
            "Part D prescription drug coverage",
            "Enrollment timing — Initial Enrollment and Annual Enrollment (Oct 15 – Dec 7)",
            "Making sure your doctors and prescriptions are covered",
            "A free plan review every year so costs don't creep up",
          ],
          goodFor: [
            {
              title: "Turning 65",
              text: "Approaching your Initial Enrollment Period and unsure where to start.",
            },
            {
              title: "Newly retiring",
              text: "Leaving employer coverage and needing to transition onto Medicare smoothly.",
            },
            {
              title: "Paying too much",
              text: "Current enrollees who want their drug costs and premiums checked each year.",
            },
            {
              title: "Helping a parent",
              text: "Family members guiding a loved one through the Medicare maze.",
            },
          ],
          note: "Plan availability and benefits vary by location. We'll review the plans available in your area together so you can make an informed choice.",
        }}
      />
    );
  },
});
