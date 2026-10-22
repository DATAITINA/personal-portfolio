import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function Contact() {
  const links = [
    { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: "LinkedIn", value: PROFILE.linkedinHandle, href: PROFILE.linkedin },
    { label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
    { label: "X", value: PROFILE.xHandle, href: PROFILE.x },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-12">
      <p className="eyebrow">Contact</p>
      <h2 id="contact-title" className="mt-3 max-w-2xl text-[2.1rem] sm:text-5xl">
        Hiring for AI, ML or LLM work? <em className="text-signal-ink">Let&apos;s talk.</em>
      </h2>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Open to {PROFILE.openTo} roles, {PROFILE.workMode.toLowerCase()}. Email is the fastest way
        to reach me.
      </p>

      <a
        href={`mailto:${PROFILE.email}`}
        className="mt-8 inline-flex max-w-full items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium break-all text-primary-foreground transition-opacity hover:opacity-90"
      >
        {PROFILE.email}
      </a>

      <ul className="mt-10 grid gap-3 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((l) => {
          const external = l.href.startsWith("http");
          return (
            <li key={l.label}>
              <a
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer noopener" : undefined}
                className="group flex items-center justify-between gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:border-signal"
              >
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{l.label}</span>
                  <span className="block truncate text-sm font-medium">{l.value}</span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-signal-ink"
                  aria-hidden="true"
                />
                {external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
