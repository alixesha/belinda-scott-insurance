import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, HeartPulse, Phone, Quote, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTABand, Eyebrow } from "@/components/ServicePage";
import { site } from "@/lib/site";
import portrait from "@/assets/belinda-portrait.jpg";
import medicareImg from "@/assets/medicare-insurance.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Belinda Scott | Insurance Agent in Dalzell, SC — Health, Life & Medicare",
      },
      {
        name: "description",
        content:
          "Independent insurance agent in Dalzell, South Carolina offering health, life, and Medicare insurance with personal one-on-one guidance. Call (762) 245-6959.",
      },
      {
        property: "og:title",
        content: "Belinda Scott | Insurance Agent in Dalzell, SC",
      },
      {
        property: "og:description",
        content:
          "Health, life, and Medicare insurance with personal, one-on-one guidance for individuals and families across South Carolina.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero — text enters from the left, portrait enters from the right */}
      <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-gold-soft/50 blur-3xl"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <Eyebrow>Licensed Insurance Agent · Dalzell, SC</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl">
              Coverage that cares for what matters most.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm Belinda Scott, and I help individuals, families, and seniors across
              South Carolina find health, life, and Medicare coverage that actually
              fits — explained in plain language, with no pressure and no jargon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="size-4" />
                Call {site.phoneDisplay}
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Explore my services
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-2 translate-x-5 translate-y-5 rounded-[2rem] border border-gold/50"
            />
            <img
              src={portrait}
              alt="Belinda Scott, independent insurance agent"
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="left">
            <Eyebrow>What I offer</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              Three ways I can help you
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal direction="left">
              <Link
                to="/health-insurance"
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <HeartPulse className="size-6" />
                </span>
                <h3 className="font-display text-2xl text-foreground">Health Insurance</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Individual and family plans, marketplace guidance, and dental &amp;
                  vision options — compared side by side so you can choose with confidence.
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Link>
            </Reveal>
            <Reveal direction="left" delay={120}>
              <Link
                to="/life-insurance"
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <ShieldCheck className="size-6" />
                </span>
                <h3 className="font-display text-2xl text-foreground">Life Insurance</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Term, whole life, and final expense coverage that protects the people
                  who depend on you — sized to your budget and your goals.
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Link>
            </Reveal>
            <Reveal direction="left" delay={240}>
              <Link
                to="/medicare-insurance"
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Stethoscope className="size-6" />
                </span>
                <h3 className="font-display text-2xl text-foreground">Medicare Insurance</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Turning 65 or reviewing your plan? I'll walk you through Advantage,
                  Supplement, and prescription drug options in plain English.
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why work with me — text left, image right */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <Eyebrow>Why work with me</Eyebrow>
            <h2 className="mt-3 font-display text-3xl leading-snug text-foreground sm:text-4xl">
              A person, not a call center.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              When you call my number, you reach me. I take the time to understand your
              situation, compare your real options, and stay in your corner long after
              the paperwork is signed — especially at renewal time, when plans and
              prices change.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                {
                  icon: HeartHandshake,
                  title: "One-on-one guidance",
                  text: "Every recommendation is based on your needs, your doctors, and your budget.",
                },
                {
                  icon: Quote,
                  title: "Plain-language explanations",
                  text: "No confusing fine print — you'll know exactly what a plan covers before you enroll.",
                },
                {
                  icon: Users,
                  title: "Here for the long run",
                  text: "Free yearly plan reviews so your coverage keeps up with your life.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" className="relative">
            <div
              aria-hidden
              className="absolute -inset-2 -translate-x-5 translate-y-5 rounded-[2rem] border border-gold/50"
            />
            <img
              src={medicareImg}
              alt="Belinda Scott explaining Medicare plan options to a couple"
              width={1280}
              height={960}
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Service area */}
      <section className="px-4 pb-20 sm:px-6">
        <Reveal className="mx-auto max-w-6xl" direction="left">
          <div className="rounded-3xl border border-border bg-card px-8 py-10 text-center sm:px-12">
            <Eyebrow>Proudly serving</Eyebrow>
            <p className="mx-auto mt-4 max-w-2xl font-display text-2xl leading-snug text-foreground sm:text-3xl">
              {site.serviceArea}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Based in Dalzell, South Carolina — available by phone wherever you are.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABand
        heading="Ready to talk about your coverage?"
        sub="One short call is all it takes. I'll answer your questions and, if you'd like, set up a free, no-obligation plan review."
      />
    </>
  );
}
