import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export type ServiceContent = {
  name: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  coversTitle: string;
  covers: string[];
  goodFor: { title: string; text: string }[];
  note?: string;
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-ink">
      {children}
    </p>
  );
}

export function CTABand({ heading, sub }: { heading: string; sub: string }) {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-4xl bg-navy-deep px-6 py-14 text-center text-cream sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gold/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-gold/10 blur-3xl"
          />
          <h2 className="font-display text-3xl sm:text-4xl">{heading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream/75">
            {sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Phone className="size-4" />
              Call {site.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Contact Belinda
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ServicePage({ content }: { content: ServiceContent }) {
  return (
    <>
      {/* Hero: text from the left, image from the right */}
      <section className="overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              {content.headline}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              {content.intro}
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
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Plan a conversation
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" className="relative">
            <div
              aria-hidden
              className="absolute -inset-2 translate-x-5 translate-y-5 rounded-[2rem] border border-gold/50"
            />
            <img
              src={content.image}
              alt={content.imageAlt}
              width={1280}
              height={960}
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* What it covers */}
      <section className="bg-secondary/40 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="left">
            <Eyebrow>What we can look at together</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              {content.coversTitle}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.covers.map((item, i) => (
              <Reveal key={item} direction="left" delay={i * 90}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="left">
            <Eyebrow>Who I help</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              Is this you?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.goodFor.map((item, i) => (
              <Reveal key={item.title} direction="left" delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <p className="font-display text-xl text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {content.note && (
        <section className="px-4 pb-4 sm:px-6">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            {content.note}
          </p>
        </section>
      )}

      <div className="pt-10">
        <CTABand
          heading="Let's find the right fit — together."
          sub="A short phone call is all it takes to get started. There's never any pressure, and the conversation is always free."
        />
      </div>
    </>
  );
}
