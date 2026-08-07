import { MATH_FOUNDATION } from "@/data/portfolio";

export function MathFoundation() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 sm:p-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none font-mono text-6xl leading-[1.6] text-foreground/[0.03] sm:text-8xl"
      >
        ∇θ ∑ σ(Wx+b) ‖·‖₂ argmin E[X] ∂L/∂w λ ‖θ‖₁ P(y|x) det(A) Σ eᶦ
      </div>
      <div className="relative">
        <p className="eyebrow">Mathematical Foundation</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
          Where Mathematics Meets AI
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          An industrial mathematics background gives the models underneath these systems a
          first-principles foundation — not just library calls.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {MATH_FOUNDATION.map((m) => (
            <div
              key={m.title}
              className="surface-panel rounded-2xl p-6 transition-colors hover:border-border-strong"
            >
              <p className="font-mono text-sm text-primary">{m.notation}</p>
              <h3 className="mt-3 text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
