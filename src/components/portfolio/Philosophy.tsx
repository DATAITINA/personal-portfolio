import { PRINCIPLES } from "@/data/portfolio";

export function Philosophy() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
      {PRINCIPLES.map((p) => (
        <div
          key={p.n}
          className="bg-surface p-7 transition-colors hover:bg-surface-raised sm:p-9"
        >
          <p className="font-mono text-sm text-primary">{p.n}</p>
          <h3 className="mt-3 text-lg font-semibold sm:text-xl">{p.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{p.body}</p>
        </div>
      ))}
    </div>
  );
}
