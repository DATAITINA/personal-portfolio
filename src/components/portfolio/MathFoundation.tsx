import { MATH_FOUNDATION } from "@/data/portfolio";

export function MathFoundation() {
  return (
    <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2">
      {MATH_FOUNDATION.map((m) => (
        <div key={m.title} className="border-t border-border pt-6">
          <p className="font-display text-4xl text-signal">{m.notation}</p>
          <h3 className="mt-6 text-xl">{m.title}</h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
            {m.body}
          </p>
        </div>
      ))}
    </div>
  );
}
