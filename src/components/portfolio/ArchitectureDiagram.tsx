import { ChevronRight } from "lucide-react";

type Props = {
  steps: string[];
  label?: string;
};

/** Lightweight, responsive pipeline visualization built from DOM nodes + one SVG connector. */
export function ArchitectureDiagram({ steps, label = "System pipeline" }: Props) {
  return (
    <figure className="relative overflow-hidden rounded-xl border border-border bg-background/40 p-4 sm:p-5">
      <figcaption className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </figcaption>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px w-full lg:block"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          className="flow-path stroke-primary/40"
          strokeWidth="1"
        />
      </svg>
      <ol className="relative flex flex-wrap items-stretch gap-2">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-raised px-3 py-2 font-mono text-[11px] leading-tight text-foreground/90 sm:text-xs">
              <span
                aria-hidden="true"
                className={`size-1.5 rounded-full ${
                  i === 0 ? "bg-signal" : i === steps.length - 1 ? "bg-primary" : "bg-muted-foreground/60"
                }`}
              />
              {step}
            </span>
            {i < steps.length - 1 && (
              <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-primary/60" />
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
