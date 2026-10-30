import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ServicePage";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Belinda Scott | Insurance Agent in Dalzell, SC — (762) 245-6959",
      },
      {
        name: "description",
        content:
          "Call Belinda Scott at (762) 245-6959 for health, life, and Medicare insurance guidance in Dalzell, South Carolina. Free, no-obligation plan reviews.",
      },
      {
        property: "og:title",
        content: "Contact Belinda Scott | Dalzell, SC Insurance Agent",
      },
      {
        property: "og:description",
        content:
          "Call (762) 245-6959 for a free, no-obligation conversation about your health, life, or Medicare coverage.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Let's talk about your coverage.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              The easiest way to reach me is by phone. Tell me what you're looking
              for — a new plan, a review of what you have, or just answers to a few
              questions — and we'll take it from there. No pressure, no obligation.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={site.phoneHref}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Call or text
                  </p>
                  <p className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {site.phoneDisplay}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Based in
                  </p>
                  <p className="text-lg font-semibold text-foreground">{site.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Appointments
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    By phone — at a time that suits you
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="relative">
            <div
              aria-hidden
              className="absolute -inset-2 translate-x-5 translate-y-5 rounded-[2rem] border border-gold/50"
            />
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <iframe
                title="Map of Dalzell, South Carolina"
                src="https://www.google.com/maps?q=Dalzell%2C%20South%20Carolina&output=embed"
                loading="lazy"
                className="h-[26rem] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Serving {site.serviceArea}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
