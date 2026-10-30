import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, MapPin, MessagesSquare, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTABand, Eyebrow } from "@/components/ServicePage";
import { site } from "@/lib/site";
import portrait from "@/assets/belinda-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Belinda Scott | Insurance Agent in Dalzell, South Carolina",
      },
      {
        name: "description",
        content:
          "Meet Belinda Scott, an independent insurance agent based in Dalzell, SC, helping individuals, families, and seniors with health, life, and Medicare coverage.",
      },
      {
        property: "og:title",
        content: "About Belinda Scott | Insurance Agent in Dalzell, SC",
      },
      {
        property: "og:description",
        content:
          "Personal, one-on-one insurance guidance from a neighbor you can reach — health, life, and Medicare coverage explained in plain language.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <Eyebrow>About me</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Hi, I'm Belinda — your neighbor in insurance.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              I'm an independent insurance agent based right here in Dalzell, South
              Carolina. I got into this business for a simple reason: too many people
              in my community were paying for coverage they didn't understand — or
              going without protection they truly needed.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              As an independent agent, I'm not tied to a single company. That means I
              can shop multiple options on your behalf and give you an honest picture
              of what's available. My promise is straightforward: clear answers, honest
              recommendations, and no pressure — ever.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground">
              <MapPin className="size-4 text-gold-ink" />
              {site.location}
            </p>
          </Reveal>

          <Reveal direction="right" className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-2 translate-x-5 translate-y-5 rounded-[2rem] border border-gold/50"
            />
            <img
              src={portrait}
              alt="Belinda Scott, insurance agent in Dalzell, South Carolina"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="left">
            <Eyebrow>How I work</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              What you can always expect from me
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                title: "Personal attention",
                text: "You'll never be handed off to a stranger. I learn your story — your family, your health, your budget — before I recommend anything.",
              },
              {
                icon: MessagesSquare,
                title: "Plain talk, no jargon",
                text: "Deductibles, networks, riders — I translate the fine print into everyday language so you can make a confident decision.",
              },
              {
                icon: Phone,
                title: "A real person to call",
                text: "Questions after you enroll? Claim trouble? Rate change? You call my number and reach me, not an overseas call center.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} direction="left" delay={i * 120}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <item.icon className="size-6" />
                  </span>
                  <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal direction="left">
            <Eyebrow>My promise</Eyebrow>
            <p className="mt-6 font-display text-3xl leading-snug text-foreground sm:text-4xl">
              "I treat every client the way I'd want my own family treated — with
              patience, honesty, and care."
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold-ink">
              — Belinda Scott
            </p>
          </Reveal>
          <Reveal direction="left" delay={150}>
            <div className="mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                See how I can help
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        heading="Let's start with a conversation."
        sub="Call me and tell me what you're looking for. If I can help, I will — and if another option fits you better, I'll tell you that too."
      />
    </>
  );
}
