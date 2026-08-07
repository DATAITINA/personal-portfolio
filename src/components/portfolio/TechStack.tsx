import { TECH_STACK } from "@/data/portfolio";

export function TechStack() {
  return (
    <dl className="grid gap-x-16 gap-y-14 sm:grid-cols-2">
      {TECH_STACK.map((g) => (
        <div key={g.category} className="border-t border-border pt-6">
          <dt className="eyebrow">{g.category}</dt>
          <dd className="mt-4 text-lg leading-relaxed text-foreground/80">
            {g.items.join(", ")}
          </dd>
        </div>
      ))}
    </dl>
  );
}
