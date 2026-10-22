import { Link } from "@tanstack/react-router";
import { PRINCIPLES } from "@/data/portfolio";

export function HowIBuild() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {PRINCIPLES.map((p, i) => (
        <li key={p.title} className="flex flex-col bg-card p-6">
          <span className="font-mono text-xs text-signal-ink">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {p.body}
          </p>
          <p className="mt-4 text-sm">
            <span className="text-muted-foreground">Proof: </span>
            {p.proof.slug ? (
              <Link to="/work/$slug" params={{ slug: p.proof.slug }} className="link-underline">
                {p.proof.label}
              </Link>
            ) : (
              <span>{p.proof.label}</span>
            )}
          </p>
        </li>
      ))}
    </ol>
  );
}
