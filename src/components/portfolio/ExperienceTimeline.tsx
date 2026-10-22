import { EDUCATION, EXPERIENCE } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <ol className="relative space-y-12 border-l border-border pl-6 sm:pl-10">
      {EXPERIENCE.map((e) => (
        <li key={e.org} className="relative">
          <span
            aria-hidden="true"
            className="absolute top-2 -left-[calc(1.5rem+4.5px)] size-2.5 rounded-full border-2 border-background bg-signal sm:-left-[calc(2.5rem+4.5px)]"
          />
          <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">
            {e.role} <span className="font-normal text-muted-foreground">· {e.org}</span>
          </h3>
          <p className="text-sm text-muted-foreground">{e.place}</p>
          <ul className="mt-4 max-w-3xl space-y-2.5">
            {e.points.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed text-foreground/90">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
      <li className="relative">
        <span
          aria-hidden="true"
          className="absolute top-2 -left-[calc(1.5rem+4.5px)] size-2.5 rounded-full border-2 border-background bg-muted-foreground sm:-left-[calc(2.5rem+4.5px)]"
        />
        <p className="font-mono text-xs text-muted-foreground">{EDUCATION.period}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          {EDUCATION.degree}{" "}
          <span className="font-normal text-muted-foreground">· {EDUCATION.school}</span>
        </h3>
        <p className="mt-2 max-w-3xl leading-relaxed text-foreground/90">{EDUCATION.note}</p>
      </li>
    </ol>
  );
}
