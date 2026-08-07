import { ArrowDown, Github, MapPin } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { NetworkVisual } from "./NetworkVisual";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden="true" className="absolute inset-0 hero-glow" />
      <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div className="rise-in">
          <p className="eyebrow">AI / Machine Learning Engineer</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-[4.2rem]">
            Building AI systems that move from{" "}
            <span className="text-primary">models to production</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            AI/ML Engineer with an applied mathematics background, building
            production-oriented machine learning systems across computer vision, classical
            ML, RAG, and backend infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:brightness-110"
            >
              View Projects
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5">
              <span aria-hidden="true" className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-signal" />
              </span>
              Open to AI/ML Engineering Opportunities
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              {PROFILE.location}
            </span>
          </div>
        </div>

        <div className="rise-in [animation-delay:120ms]">
          <NetworkVisual />
        </div>
      </div>
      <div aria-hidden="true" className="rule-line mx-auto max-w-7xl" />
    </section>
  );
}
