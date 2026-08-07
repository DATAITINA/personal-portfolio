export function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-3">
          <span>{s}</span>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="text-signal">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
