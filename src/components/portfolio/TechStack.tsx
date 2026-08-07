import { TECH_STACK } from "@/data/portfolio";

export function TechStack() {
  return (
    <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:gap-x-16">
      {TECH_STACK.map((g) => (
        <div
          key={g.category}
          className="group rounded-lg border border-border bg-surface/30 p-5 transition-colors hover:border-border-strong hover:bg-surface/60 sm:p-6"
        >
          <dt className="eyebrow">{g.category}</dt>
          <dd className="mt-4 flex flex-wrap gap-1.5">
            {g.items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-md border border-border bg-background/60 px-2.5 py-1 text-[0.8125rem] text-foreground/80 transition-colors group-hover:border-border-strong"
              >
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
