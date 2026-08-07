import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <article
      className={`surface-panel group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-border-strong ${
        featured ? "p-6 sm:p-9" : "p-6 sm:p-7"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hero-glow"
      />
      <div className="relative">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              {String(index).padStart(2, "0")} — {project.category}
            </p>
            <h3
              className={`mt-2 font-semibold ${featured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"}`}
            >
              {project.title}
            </h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`View ${project.title} source on GitHub`}
            className="inline-grid size-11 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-border-strong hover:bg-secondary hover:text-foreground"
          >
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
        </div>

        <p
          className={`mt-4 max-w-3xl text-muted-foreground ${featured ? "text-base sm:text-lg" : "text-sm sm:text-base"}`}
        >
          {project.description}
        </p>

        {project.highlight && (
          <p className="mt-4 flex gap-3 rounded-xl border border-border bg-background/40 p-4 text-sm text-foreground/90">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden="true" />
            <span>{project.highlight}</span>
          </p>
        )}

        <div className="mt-5">
          <ArchitectureDiagram steps={project.pipeline} />
        </div>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        {project.note && (
          <p className="mt-4 text-xs text-muted-foreground">{project.note}</p>
        )}

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          <Github className="size-4" aria-hidden="true" />
          View source
        </a>
      </div>
    </article>
  );
}
