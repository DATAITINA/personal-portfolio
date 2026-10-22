import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`container-page py-16 sm:py-24 ${className}`}
    >
      {(eyebrow || title) && (
        <header className="max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 id={headingId} className="mt-3 text-[2.1rem] sm:text-5xl">
              {title}
            </h2>
          )}
          {intro && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
        </header>
      )}
      <div className={eyebrow || title ? "mt-10 sm:mt-14" : ""}>{children}</div>
    </section>
  );
}
