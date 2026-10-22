import { Link } from "@tanstack/react-router";
import { SKILLS } from "@/data/portfolio";

export function Skills() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SKILLS.map((g) => (
        <section
          key={g.category}
          aria-label={g.category}
          className="rounded-xl border border-border bg-card p-5"
        >
          <h3 className="eyebrow">{g.category}</h3>
          <dl className="mt-4 space-y-2.5">
            {g.items.map((s) => (
              <div
                key={s.name}
                className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5"
              >
                <dt className="text-[0.9375rem] font-medium">{s.name}</dt>
                <dd className="text-xs text-muted-foreground">
                  {s.proof.map((p, i) => (
                    <span key={p.label}>
                      {i > 0 && ", "}
                      {p.slug ? (
                        <Link to="/work/$slug" params={{ slug: p.slug }} className="link-underline">
                          {p.label}
                        </Link>
                      ) : (
                        p.label
                      )}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
