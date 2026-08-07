import { PROFILE } from "@/data/portfolio";

export function Contact() {
  const links = [
    { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: "GitHub", value: "DATAITINA", href: PROFILE.github },
    { label: "LinkedIn", value: "david-itina", href: PROFILE.linkedin },
  ];

  return (
    <div>
      <p className="eyebrow">Contact</p>
      <h2 className="mt-10 max-w-3xl text-[2.5rem] leading-[1.05] sm:text-7xl">
        Let&apos;s build something that ships.
      </h2>

      <div className="mt-20 grid gap-x-16 gap-y-10 sm:grid-cols-3">
        {links.map((l) => (
          <div key={l.label} className="border-t border-border pt-6">
            <p className="eyebrow">{l.label}</p>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="mt-4 inline-block break-all text-lg transition-colors hover:text-signal"
            >
              {l.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
