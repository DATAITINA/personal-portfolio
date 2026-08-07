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
      className={`mx-auto w-full max-w-[76rem] px-6 py-20 sm:px-10 sm:py-28 lg:py-36 ${className}`}
    >
      {(eyebrow || title) && (
        <header className="grid gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-12">
          {eyebrow && <p className="eyebrow pt-2.5">{eyebrow}</p>}
          {title && (
            <h2 className="max-w-2xl text-[1.85rem] tracking-tight sm:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h2>
          )}
        </header>
      )}
      <div className={eyebrow || title ? "mt-12 sm:mt-16 lg:mt-20" : ""}>
        {children}
      </div>
    </section>
  );
}
