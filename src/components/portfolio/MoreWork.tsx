import { ArrowUpRight } from "lucide-react";
import { MORE_WORK } from "@/data/portfolio";

export function MoreWork() {
  return (
    <div>
      <h3 className="eyebrow">More work</h3>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {MORE_WORK.map((w) => (
          <li key={w.title} className="flex flex-col rounded-xl border border-border bg-card p-5">
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-base font-semibold">{w.title}</h4>
              {w.tag && (
                <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[0.7rem] text-muted-foreground">
                  {w.tag}
                </span>
              )}
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs text-muted-foreground">{w.stack.join(" · ")}</p>
              {w.href && (
                <a
                  href={w.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${w.title}: ${w.linkLabel ?? "Open"} (opens in a new tab)`}
                  className="inline-flex items-center gap-1 text-sm font-medium link-underline"
                >
                  {w.linkLabel ?? "Open"}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
