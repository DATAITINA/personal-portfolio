import { PROFILE } from "@/data/portfolio";

function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 shadow-[var(--shadow-xs)] backdrop-blur-sm">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-40" />
        <span className="relative inline-flex size-2 rounded-full bg-signal" />
      </span>
      <span className="text-[0.75rem] font-medium tracking-wide text-foreground/90">
        Open to AI/ML Engineering Opportunities
      </span>
    </div>
  );
}

function AbstractSystemGraphic() {
  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            opacity="0.5"
          />
        </pattern>
      </defs>
      <rect width="420" height="300" fill="url(#hero-grid)" className="text-border" />

      <g
        stroke="currentColor"
        strokeWidth="1"
        className="text-border-strong"
        opacity="0.7"
      >
        <line x1="48" y1="72" x2="130" y2="110" />
        <line x1="130" y1="110" x2="210" y2="58" />
        <line x1="130" y1="110" x2="190" y2="175" />
        <line x1="210" y1="58" x2="295" y2="95" />
        <line x1="190" y1="175" x2="270" y2="195" />
        <line x1="295" y1="95" x2="340" y2="150" />
        <line x1="270" y1="195" x2="340" y2="150" />
        <line x1="48" y1="72" x2="90" y2="190" />
        <line x1="90" y1="190" x2="190" y2="175" />
        <line x1="340" y1="150" x2="380" y2="80" />
      </g>

      <g fill="var(--signal)">
        <circle cx="48" cy="72" r="4.5" opacity="0.85" />
        <circle cx="130" cy="110" r="6.5" opacity="0.9" />
        <circle cx="210" cy="58" r="4.5" opacity="0.8" />
        <circle cx="190" cy="175" r="5.5" opacity="0.85" />
        <circle cx="295" cy="95" r="4.5" opacity="0.8" />
        <circle cx="270" cy="195" r="4.5" opacity="0.8" />
        <circle cx="340" cy="150" r="7.5" opacity="1" />
        <circle cx="90" cy="190" r="3.5" opacity="0.75" />
        <circle cx="380" cy="80" r="4" opacity="0.7" />
      </g>

      <circle cx="340" cy="150" r="22" fill="var(--signal)" opacity="0.07" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto w-full max-w-[76rem] overflow-hidden px-6 pt-24 sm:px-10 sm:pt-28"
    >
      <div
        className="pointer-events-none absolute -left-40 top-8 h-[28rem] w-[28rem] rounded-full opacity-[0.2] blur-3xl dark:opacity-[0.12]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--signal) 40%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="rise-in relative grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-end lg:gap-14">
        <div className="relative z-10">
          <StatusBadge />

          <p className="eyebrow mt-7">{PROFILE.title}</p>

          <h1 className="mt-4 text-[2.75rem] leading-[0.96] tracking-tight sm:text-[4.5rem] lg:text-[5.5rem]">
            David Itina
          </h1>

          <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-muted-foreground sm:text-lg">
            I build machine learning systems that run in production — not notebooks.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-sm)] transition-all hover:opacity-90 active:scale-[0.98]"
            >
              Selected work
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center justify-center rounded-md border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground shadow-[var(--shadow-xs)] transition-all hover:border-foreground/25 hover:bg-surface-raised"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 hidden max-w-sm opacity-50 dark:opacity-35 lg:block">
            <AbstractSystemGraphic />
          </div>
        </div>

        <figure className="relative z-10">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/david-itina.jpg"
              alt="Portrait of David Itina, AI and machine learning engineer"
              width={933}
              height={1400}
              className="aspect-[4/5] w-full object-cover object-top"
              style={{ boxShadow: "var(--shadow-portrait)" }}
            />
          </div>
          <figcaption className="eyebrow mt-4 block text-muted-foreground">
            {PROFILE.location}
          </figcaption>
        </figure>
      </div>

      <div className="mt-16 grid gap-8 border-t border-border pt-8 sm:mt-20 sm:grid-cols-3 sm:gap-10">
        {[
          ["Focus", "Computer vision, fraud risk, RAG systems"],
          ["Foundation", "Industrial mathematics, Covenant University"],
          ["Currently", "Founder, ITINA AI"],
        ].map(([k, v], i) => (
          <div
            key={k}
            className="fade-in"
            style={{ animationDelay: `${100 + i * 70}ms` }}
          >
            <p className="eyebrow">{k}</p>
            <p className="mt-2.5 text-[0.9375rem] leading-snug text-foreground/85">{v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
