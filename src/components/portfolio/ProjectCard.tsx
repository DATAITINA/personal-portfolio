import type { Project } from "@/data/portfolio";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group grid gap-8 border-t border-border py-14 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-12 sm:py-20">
      <div>
        <p className="eyebrow">{String(index).padStart(2, "0")}</p>
        <p className="mt-3 text-sm text-muted-foreground">{project.category}</p>
      </div>

      <div className="max-w-2xl">
        <h3 className="text-3xl sm:text-[2.6rem]">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors group-hover:text-signal"
          >
            {project.title}
          </a>
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.highlight && (
          <p className="mt-6 border-l border-signal pl-5 text-base leading-relaxed text-foreground/80">
            {project.highlight}
          </p>
        )}

        <div className="mt-10">
          <ArchitectureDiagram steps={project.pipeline} />
        </div>

        <p className="mt-8 font-mono text-xs leading-6 text-muted-foreground">
          {project.technologies.join("  ·  ")}
        </p>

        {project.note && (
          <p className="mt-6 text-xs text-muted-foreground/80">{project.note}</p>
        )}

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-block border-b border-border-strong pb-1 text-sm transition-colors hover:border-signal hover:text-signal"
        >
          View source ↗
        </a>
      </div>
    </article>
  );
}
