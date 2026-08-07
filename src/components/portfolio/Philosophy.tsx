import { PRINCIPLES } from "@/data/portfolio";

export function Philosophy() {
  return (
    <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2">
      {PRINCIPLES.map((p) => (
        <div key={p.n} className="border-t border-border pt-6">
          <p className="eyebrow">{p.n}</p>
          <h3 className="mt-5 max-w-sm text-2xl">{p.title}</h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
            {p.body}
          </p>
        </div>
      ))}
    </div>
  );
}
