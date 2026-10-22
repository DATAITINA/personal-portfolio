import { ArrowUpRight, BookOpen, Code2, ExternalLink, FileText } from "lucide-react";
import type { ProjectLink } from "@/data/portfolio";

const ICONS = { live: ExternalLink, code: Code2, docs: FileText, notebook: BookOpen } as const;

export function ProjectLinks({
  links,
  projectTitle,
}: {
  links: ProjectLink[];
  projectTitle: string;
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((l) => {
        const Icon = ICONS[l.kind];
        return (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${projectTitle}: ${l.label} (opens in a new tab)`}
              className="inline-flex items-center gap-1.5 rounded-md border border-border-strong bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-signal hover:text-signal-ink"
            >
              <Icon className="size-3.5" aria-hidden="true" />
              {l.label}
              <ArrowUpRight className="size-3.5 opacity-60" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {stack.map((s) => (
        <li
          key={s}
          className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[0.75rem] text-muted-foreground"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}
