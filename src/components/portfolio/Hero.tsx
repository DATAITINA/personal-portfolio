import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

/* Facts only. Each number here is verified in data/portfolio.ts. */
const PROOF = [
  { value: "5", unit: "countries", label: "where parents use Kids Health Hub Africa" },
  { value: "5", unit: "hours", label: "to build and deploy Customa, live" },
  { value: "150+", unit: "students", label: "taught at a tech camp I led" },
];

/* Matches the figure's max widths below, so phones fetch the 320w or 480w file, not 800w. */
const PORTRAIT_SIZES = "(min-width: 1024px) 20rem, (min-width: 640px) 18rem, 16rem";

function ResumeButton() {
  const base =
    "inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-foreground shadow-[var(--shadow-sm)] transition-colors hover:border-foreground/40";
  if (PROFILE.resumeUrl) {
    return (
      <a href={PROFILE.resumeUrl} download className={base}>
        <Download className="size-4" aria-hidden="true" />
        Download resume
      </a>
    );
  }
  return (
    <a href={`mailto:${PROFILE.email}?subject=Resume%20request`} className={base}>
      <Mail className="size-4" aria-hidden="true" />
      Request resume
    </a>
  );
}

export function Hero() {
  return (
    <section id="top" className="container-page pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <div className="rise-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground shadow-[var(--shadow-sm)]">
            {/* A static dot: a looping pulse keeps the page "changing" and hurts Speed Index. */}
            <span
              className="inline-flex size-2 rounded-full bg-signal ring-4 ring-signal-soft"
              aria-hidden="true"
            />
            Open to opportunities · {PROFILE.workMode}
          </p>

          <h1 className="mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.75rem]">
            {PROFILE.headline.lead} <em className="text-signal-ink">{PROFILE.headline.emphasis}</em>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m <strong className="font-medium text-foreground">{PROFILE.name}</strong>,{" "}
            {PROFILE.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-sm)] transition-opacity hover:opacity-90"
            >
              View work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <ResumeButton />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-sm font-medium text-foreground link-underline"
            >
              Contact
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-none">
          <picture>
            <source
              type="image/avif"
              srcSet="/images/david-itina-320.avif 320w, /images/david-itina-480.avif 480w, /images/david-itina-800.avif 800w"
              sizes={PORTRAIT_SIZES}
            />
            <source
              type="image/webp"
              srcSet="/images/david-itina-320.webp 320w, /images/david-itina-480.webp 480w, /images/david-itina-800.webp 800w"
              sizes={PORTRAIT_SIZES}
            />
            <img
              src="/images/david-itina-800.jpg"
              alt="David Itina, standing outside a campus building"
              width={800}
              height={1000}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-xl border border-border object-cover object-top shadow-[var(--shadow-card)]"
            />
          </picture>
          <figcaption className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>{PROFILE.title}</span>
            <span>{PROFILE.location}</span>
          </figcaption>
        </figure>
      </div>

      <dl className="mt-14 grid gap-6 border-t border-border pt-8 sm:mt-20 sm:grid-cols-3 sm:gap-8">
        {PROOF.map((p) => (
          <div key={p.label}>
            <dt className="sr-only">{`${p.value} ${p.unit}`}</dt>
            <dd>
              <span aria-hidden="true" className="font-display text-4xl text-foreground">
                {p.value}
                <span className="ml-1.5 font-sans text-base text-muted-foreground">{p.unit}</span>
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">{p.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
