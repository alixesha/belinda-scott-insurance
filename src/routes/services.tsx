import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTABand, Eyebrow } from "@/components/ServicePage";
import healthImg from "@/assets/health-insurance.jpg";
import lifeImg from "@/assets/life-insurance.jpg";
import medicareImg from "@/assets/medicare-insurance.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Insurance Services | Health, Life & Medicare — Belinda Scott, Dalzell SC",
      },
      {
        name: "description",
        content:
          "Explore health insurance, life insurance, and Medicare options from Belinda Scott, an independent insurance agent serving Dalzell, South Carolina.",
      },
      {
        property: "og:title",
        content: "Insurance Services | Belinda Scott, Dalzell SC",
      },
      {
        property: "og:description",
        content:
          "Health, life, and Medicare insurance — compared, explained, and tailored to you by an independent local agent.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    to: "/health-insurance",
    eyebrow: "01 · Health",
    title: "Health Insurance",
    text: "Individual and family coverage, marketplace guidance, dental and vision, and help at every renewal — so your plan keeps pace with your life.",
    image: healthImg,
    alt: "Agent reviewing health coverage options with a family",
  },
  {
    to: "/life-insurance",
    eyebrow: "02 · Life",
    title: "Life Insurance",
    text: "Term life, whole life, and final expense coverage that protects the people who count on you — matched to your budget and your goals.",
    image: lifeImg,
    alt: "A multigenerational family together on their porch",
  },
  {
    to: "/medicare-insurance",
    eyebrow: "03 · Medicare",
    title: "Medicare Insurance",
    text: "Medicare Advantage, Supplement, and prescription drug plans — explained clearly, with yearly reviews so you're never overpaying.",
    image: medicareImg,
    alt: "Agent walking a retired couple through Medicare plan options",
  },
] as const;

function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="left">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Coverage for every stage of life.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              From your first policy to your Medicare years, I compare real options
              from multiple carriers and explain them in plain language — so you can
              choose what fits, not what someone else wants to sell you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Alternating rows: text always enters from the left, images from the right */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          {services.map((service, i) => (
            <div
              key={service.to}
              className="grid items-center gap-10 md:grid-cols-2"
            >
              <Reveal direction="left" className={i % 2 === 1 ? "md:order-2" : undefined}>
                <Eyebrow>{service.eyebrow}</Eyebrow>
                <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
                <Link
                  to={service.to}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Explore {service.title.toLowerCase()}
                  <ArrowRight className="size-4" />
                </Link>
              </Reveal>

              <Reveal
                direction="right"
                className={`relative ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div
                  aria-hidden
                  className="absolute -inset-2 translate-x-5 translate-y-5 rounded-[2rem] border border-gold/50"
                />
                <img
                  src={service.image}
                  alt={service.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
                />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        heading="Not sure which one you need?"
        sub="That's exactly what the first call is for. Tell me where you are in life, and I'll point you in the right direction — free of charge."
      />
    </>
  );
}
