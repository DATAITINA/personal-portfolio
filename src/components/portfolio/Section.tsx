import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[76rem] px-6 py-24 sm:px-10 sm:py-36 lg:py-44 ${className}`}
    >
      {(eyebrow || title) && (
        <header className="grid gap-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-12">
          {eyebrow && <p className="eyebrow pt-3">{eyebrow}</p>}
          {title && (
            <h2 className="max-w-2xl text-[2.25rem] sm:text-6xl">{title}</h2>
          )}
        </header>
      )}
      <div className={eyebrow || title ? "mt-16 sm:mt-24" : ""}>{children}</div>
    </section>
  );
}
