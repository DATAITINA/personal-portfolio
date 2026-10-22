import { useId } from "react";
import type { Diagram as DiagramData, DiagramNode, DiagramNodeKind } from "@/data/portfolio";

/*
 * One diagram style for every project. Data-driven: stages flow left to right
 * on wide screens and top to bottom on phones, so labels stay readable.
 */

const KIND_LABEL: Record<DiagramNodeKind, string> = {
  actor: "input",
  app: "app",
  service: "service",
  ai: "model",
  data: "data",
  guard: "check",
  external: "person",
};

const NODE_W = 156;
const NODE_H = 66;
const PAD = 12;

type Box = { x: number; y: number };

function layout(d: DiagramData, vertical: boolean) {
  const mainGap = vertical ? 34 : 40; // between stages
  const crossGap = vertical ? 14 : 18; // between nodes in one stage
  const maxInStage = Math.max(...d.stages.map((s) => s.length));
  const crossSize = (vertical ? NODE_W : NODE_H) * maxInStage + crossGap * (maxInStage - 1);
  const mainStep = (vertical ? NODE_H : NODE_W) + mainGap;
  const boxes = new Map<string, Box>();

  d.stages.forEach((stage, i) => {
    const size = (vertical ? NODE_W : NODE_H) * stage.length + crossGap * (stage.length - 1);
    const start = (crossSize - size) / 2;
    stage.forEach((id, j) => {
      const cross = start + j * ((vertical ? NODE_W : NODE_H) + crossGap);
      const main = i * mainStep;
      boxes.set(
        id,
        vertical ? { x: PAD + cross, y: PAD + main } : { x: PAD + main, y: PAD + cross },
      );
    });
  });

  const mainSize = d.stages.length * mainStep - mainGap;
  const width = (vertical ? crossSize : mainSize) + PAD * 2;
  const height = (vertical ? mainSize : crossSize) + PAD * 2;
  return { boxes, width, height };
}

function edgePath(a: Box, b: Box, vertical: boolean) {
  if (vertical) {
    const x1 = a.x + NODE_W / 2;
    const y1 = a.y + NODE_H;
    const x2 = b.x + NODE_W / 2;
    const y2 = b.y - 4;
    const my = (y1 + y2) / 2;
    return `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`;
  }
  const x1 = a.x + NODE_W;
  const y1 = a.y + NODE_H / 2;
  const x2 = b.x - 4;
  const y2 = b.y + NODE_H / 2;
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

function Node({ node, box }: { node: DiagramNode; box: Box }) {
  const ai = node.kind === "ai";
  const guard = node.kind === "guard";
  const person = node.kind === "actor" || node.kind === "external";
  return (
    <g transform={`translate(${box.x},${box.y})`}>
      <rect
        width={NODE_W}
        height={NODE_H}
        rx={person ? NODE_H / 2 : 8}
        className={ai ? "fill-signal-soft stroke-signal" : "fill-surface stroke-border-strong"}
        strokeWidth={ai ? 1.5 : 1}
        strokeDasharray={guard ? "4 3" : undefined}
      />
      <text
        x={NODE_W / 2}
        y={19}
        textAnchor="middle"
        className={`font-mono uppercase ${ai ? "fill-signal-ink" : "fill-muted-foreground"}`}
        style={{ fontSize: 9, letterSpacing: "0.12em" }}
      >
        {KIND_LABEL[node.kind]}
      </text>
      <text
        x={NODE_W / 2}
        y={38}
        textAnchor="middle"
        className="fill-foreground"
        style={{ fontSize: 13, fontWeight: 600 }}
      >
        {node.label}
      </text>
      {node.sub && (
        <text
          x={NODE_W / 2}
          y={54}
          textAnchor="middle"
          className="fill-muted-foreground"
          style={{ fontSize: 10.5 }}
        >
          {node.sub}
        </text>
      )}
    </g>
  );
}

function DiagramSvg({
  data,
  vertical,
  title,
  className,
}: {
  data: DiagramData;
  vertical: boolean;
  title: string;
  className: string;
}) {
  const uid = useId().replace(/:/g, "");
  const { boxes, width, height } = layout(data, vertical);
  const byId = new Map(data.nodes.map((n) => [n.id, n]));
  const arrow = `arrow-${uid}-${vertical ? "v" : "h"}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label={title}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <defs>
        <marker
          id={arrow}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" className="fill-muted-foreground" />
        </marker>
      </defs>
      <g fill="none">
        {data.edges.map((e) => {
          const a = boxes.get(e.from);
          const b = boxes.get(e.to);
          if (!a || !b) return null;
          return (
            <path
              key={`${e.from}-${e.to}`}
              d={edgePath(a, b, vertical)}
              className="stroke-muted-foreground"
              strokeOpacity={0.7}
              strokeWidth={1.25}
              strokeDasharray={e.dashed ? "4 4" : undefined}
              markerEnd={`url(#${arrow})`}
            />
          );
        })}
      </g>
      {[...boxes.entries()].map(([id, box]) => {
        const node = byId.get(id);
        return node ? <Node key={id} node={node} box={box} /> : null;
      })}
    </svg>
  );
}

export function Diagram({ data, title }: { data: DiagramData; title: string }) {
  const steps = data.stages.flat().map((id) => data.nodes.find((n) => n.id === id));
  return (
    <figure className="rounded-xl border border-border bg-surface-raised/60 p-4 sm:p-6">
      <div className="flex justify-center">
        <DiagramSvg
          data={data}
          vertical={false}
          title={title}
          className="hidden h-auto w-full max-w-full md:block"
        />
        <DiagramSvg
          data={data}
          vertical
          title={title}
          className="h-auto w-full max-w-[22rem] md:hidden"
        />
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {data.caption}
        <span className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="inline-block size-2.5 rounded-sm border border-signal bg-signal-soft"
            />
            model
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="inline-block size-2.5 rounded-sm border border-dashed border-foreground/50"
            />
            check or guard
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="inline-block w-4 border-t border-dashed border-foreground/60"
            />
            fallback or escalation
          </span>
        </span>
      </figcaption>
      <ol className="sr-only">
        {steps.map((n) => n && <li key={n.id}>{`${n.label}${n.sub ? `: ${n.sub}` : ""}`}</li>)}
      </ol>
    </figure>
  );
}
