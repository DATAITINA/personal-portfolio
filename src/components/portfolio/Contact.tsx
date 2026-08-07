import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function Contact() {
  return (
    <div className="surface-panel relative overflow-hidden rounded-3xl p-8 sm:p-14">
      <div aria-hidden="true" className="absolute inset-0 hero-glow" />
      <div className="relative max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
          Let&apos;s build something intelligent.
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Open to AI/ML engineering roles and collaborations. The fastest way to reach me
          is email.
        </p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="mt-6 inline-block font-mono text-base text-primary underline-offset-4 hover:underline sm:text-lg"
        >
          {PROFILE.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email Me
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Github className="size-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
