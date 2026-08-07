import { TECH_STACK } from "@/data/portfolio";

export function TechStack() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {TECH_STACK.map((group, i) => (
        <div
          key={group.category}
          className={`surface-panel rounded-2xl p-6 transition-colors hover:border-border-strong ${
            group.category === "LLM / AI Systems" ? "md:col-span-2" : ""
          }`}
        >
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold">{group.category}</h3>
            <span className="font-mono text-[11px] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div aria-hidden="true" className="rule-line my-4" />
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-background/40 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
