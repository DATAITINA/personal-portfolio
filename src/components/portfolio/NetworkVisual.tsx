const LAYERS = [4, 5, 5, 3];
const WIDTH = 420;
const HEIGHT = 340;

function nodes() {
  return LAYERS.flatMap((count, li) =>
    Array.from({ length: count }, (_, ni) => ({
      x: 50 + (li * (WIDTH - 100)) / (LAYERS.length - 1),
      y: HEIGHT / 2 + (ni - (count - 1) / 2) * 52,
      layer: li,
      i: ni,
    })),
  );
}

/** Abstract neural-network / data-flow visual. Decorative, CSS-animated, no JS loop. */
export function NetworkVisual() {
  const pts = nodes();
  const edges = pts.flatMap((a) =>
    pts.filter((b) => b.layer === a.layer + 1).map((b) => ({ a, b })),
  );

  return (
    <div className="surface-panel relative overflow-hidden rounded-2xl p-4">
      <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>inference graph</span>
        <span className="text-primary">live</span>
      </div>
      <svg
        role="img"
        aria-label="Abstract visualization of a neural network with connected layers of nodes"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full"
      >
        <g className="stroke-primary/25" strokeWidth="1">
          {edges.map(({ a, b }, i) => (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className={i % 5 === 0 ? "flow-path stroke-primary/50" : undefined}
              style={{ animationDelay: `${(i % 7) * 0.18}s` }}
            />
          ))}
        </g>
        {pts.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r="12"
              className={p.layer === LAYERS.length - 1 ? "fill-signal/10" : "fill-primary/10"}
            />
            <circle
              cx={p.x}
              cy={p.y}
              r="4.5"
              className={p.layer === LAYERS.length - 1 ? "fill-signal" : "fill-primary"}
            />
          </g>
        ))}
      </svg>
      <div className="mt-2 grid grid-cols-4 gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        <span>input</span>
        <span className="text-center">features</span>
        <span className="text-center">model</span>
        <span className="text-right">decision</span>
      </div>
    </div>
  );
}
