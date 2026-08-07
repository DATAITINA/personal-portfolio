import { PROFILE } from "@/data/portfolio";
import portrait from "@/assets/david-itina.jpg.asset.json";

export function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-[76rem] px-6 pt-40 sm:px-10 sm:pt-52">
      <div className="rise-in grid gap-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
        <div>
          <p className="eyebrow">{PROFILE.title}</p>
          <h1 className="mt-10 text-[3rem] leading-[0.98] sm:text-[5.5rem] lg:text-[6.5rem]">
            David Itina
          </h1>
          <p className="mt-10 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I build machine learning systems that run in production — not notebooks.
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-8">
            <a
              href="#projects"
              className="border-b border-foreground pb-1 text-sm tracking-wide transition-colors hover:border-signal hover:text-signal"
            >
              Selected work
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="border-b border-transparent pb-1 text-sm tracking-wide text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              Get in touch
            </a>
          </div>
        </div>

        <figure className="relative">
          <img
            src={portrait.url}
            alt="Portrait of David Itina, AI and machine learning engineer"
            width={1280}
            height={1920}
            className="aspect-[4/5] w-full rounded-sm object-cover object-top grayscale-[15%]"
            style={{ boxShadow: "var(--shadow-portrait)" }}
          />
          <figcaption className="eyebrow mt-5 block">
            {PROFILE.location}
          </figcaption>
        </figure>
      </div>

      <div className="mt-28 grid gap-10 border-t border-border pt-10 sm:mt-40 sm:grid-cols-3">
        {[
          ["Focus", "Computer vision, fraud risk, RAG systems"],
          ["Foundation", "Industrial mathematics, Covenant University"],
          ["Currently", "Founder, ITINA AI"],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="eyebrow">{k}</p>
            <p className="mt-3 text-base text-foreground/80">{v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
