import { GraduationCap, MapPin } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function About() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>
          <span className="text-foreground">David Itina</span> is an AI/ML Engineer with an
          applied mathematics background. He builds production-oriented machine learning
          systems spanning data pipelines, model training, backend APIs, and deployment.
        </p>
        <p>
          His experience includes computer vision, classical machine learning,
          retrieval-augmented generation, and AI systems.
        </p>
        <p>He holds a B.Sc. in Industrial Mathematics from Covenant University.</p>
      </div>
      <dl className="surface-panel space-y-5 rounded-2xl p-6">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Education
          </dt>
          <dd className="mt-2 flex gap-3 text-sm">
            <GraduationCap className="size-4 shrink-0 text-primary" aria-hidden="true" />
            B.Sc. Industrial Mathematics, Covenant University
          </dd>
        </div>
        <div aria-hidden="true" className="rule-line" />
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Based in
          </dt>
          <dd className="mt-2 flex gap-3 text-sm">
            <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
            {PROFILE.location}
          </dd>
        </div>
        <div aria-hidden="true" className="rule-line" />
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Focus
          </dt>
          <dd className="mt-2 text-sm">
            Computer vision · Classical ML · RAG &amp; LLM systems · Backend / APIs
          </dd>
        </div>
      </dl>
    </div>
  );
}
