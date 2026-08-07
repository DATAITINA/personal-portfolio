import { EXPERIENCE } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <div>
      {EXPERIENCE.map((e) => (
        <article
          key={e.org}
          className="grid gap-6 border-t border-border py-12 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-12 sm:py-16"
        >
          <p className="eyebrow pt-2">{e.period}</p>
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl">{e.org}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{e.role}</p>
            <ul className="mt-8 space-y-5">
              {e.points.map((p) => (
                <li key={p} className="text-base leading-relaxed text-foreground/80">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
