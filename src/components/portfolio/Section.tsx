import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      {(eyebrow || title) && (
        <header className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          )}
        </header>
      )}
      <div className={eyebrow || title ? "mt-12" : ""}>{children}</div>
    </section>
  );
}
