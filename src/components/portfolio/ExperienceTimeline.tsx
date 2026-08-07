import { EXPERIENCE } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <ol className="relative border-l border-border pl-6 sm:pl-10">
      {EXPERIENCE.map((job) => (
        <li key={job.org} className="relative pb-12 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[calc(1.5rem+5px)] top-2 size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[calc(2.5rem+5px)]"
          />
          <div className="surface-panel rounded-2xl p-6 sm:p-7">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold sm:text-2xl">{job.org}</h3>
                <p className="mt-1 text-sm text-primary">{job.role}</p>
              </div>
              <p className="whitespace-nowrap font-mono text-[11px] text-muted-foreground">
                {job.period}
              </p>
            </div>
            <ul className="mt-5 space-y-3">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground sm:text-base">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
