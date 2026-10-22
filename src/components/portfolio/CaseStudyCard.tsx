import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { CaseStudy } from "@/data/portfolio";
import { ProjectLinks, StackList } from "./ProjectLinks";

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article
      aria-labelledby={`cs-${study.slug}`}
      className="group grid gap-8 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-12"
    >
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index).padStart(2, "0")}
          </span>
          <span className="eyebrow">{study.kicker}</span>
          <span className="rounded-full bg-signal-soft px-2 py-0.5 text-xs font-medium text-signal-ink">
            {study.status}
          </span>
        </div>

        <h3
          id={`cs-${study.slug}`}
          className="mt-4 font-display text-3xl leading-tight sm:text-4xl"
        >
          <Link to="/work/$slug" params={{ slug: study.slug }} className="hover:text-signal-ink">
            {study.title}
          </Link>
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {study.oneLiner}
        </p>

        <div className="mt-6">
          <StackList stack={study.stack} />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
          <Link
            to="/work/$slug"
            params={{ slug: study.slug }}
            aria-label={`Read the ${study.title} case study`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Read case study
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
              aria-hidden="true"
            />
          </Link>
          <ProjectLinks links={study.links} projectTitle={study.title} />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface-raised/60 p-5">
        <p className="eyebrow">Results</p>
        <ul className="mt-4 space-y-3">
          {study.results.map((r) => (
            <li key={r} className="flex gap-3 text-[0.9375rem] leading-snug text-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden="true" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        {study.note && (
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{study.note}</p>
        )}
      </div>
    </article>
  );
}
