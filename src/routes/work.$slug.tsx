import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { Diagram } from "@/components/portfolio/Diagram";
import { ProjectLinks, StackList } from "@/components/portfolio/ProjectLinks";
import { CASE_STUDIES, PROFILE, SITE_URL } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const index = CASE_STUDIES.findIndex((s) => s.slug === params.slug);
    const study = CASE_STUDIES[index];
    if (!study) throw notFound();
    const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];
    return { study, next: next ?? study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { study } = loaderData;
    const path = `/work/${study.slug}`;
    return {
      ...pageHead({
        title: `${study.title} · Case study · ${PROFILE.name}`,
        description: study.oneLiner,
        path,
        type: "article",
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: study.title,
            description: study.oneLiner,
            url: `${SITE_URL}${path}`,
            author: { "@type": "Person", name: PROFILE.name, url: SITE_URL },
            keywords: study.stack.join(", "),
          }),
        },
      ],
    };
  },
  component: CaseStudyPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-border py-10 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10">
      <h2 className="eyebrow pt-1 font-mono">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 leading-relaxed">
          <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function CaseStudyPage() {
  const { study, next } = Route.useLoaderData();

  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="container-page pt-24 pb-16 sm:pt-32">
        <a
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All work
        </a>

        <header className="rise-in mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">{study.kicker}</span>
            <span className="rounded-full bg-signal-soft px-2 py-0.5 text-xs font-medium text-signal-ink">
              {study.status}
            </span>
          </div>
          <h1 className="mt-4 text-[2.5rem] sm:text-6xl">{study.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {study.oneLiner}
          </p>
          <div className="mt-6">
            <ProjectLinks links={study.links} projectTitle={study.title} />
          </div>
        </header>

        <div className="mt-12">
          <Diagram data={study.diagram} title={`${study.title} architecture`} />
        </div>

        <div className="mt-12 text-[1.0625rem] text-foreground/90">
          <Block title="Problem">
            <p className="max-w-3xl leading-relaxed">{study.problem}</p>
          </Block>
          <Block title="My role">
            <p className="max-w-3xl leading-relaxed">{study.role}</p>
          </Block>
          <Block title="What I built">
            <List items={study.built} />
          </Block>
          <Block title="Key decisions">
            <div className="grid gap-4 sm:grid-cols-2">
              {study.decisions.map((d) => (
                <div key={d.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </Block>
          <Block title="Results">
            <List items={study.results} />
            {study.note && <p className="mt-5 text-sm text-muted-foreground">{study.note}</p>}
          </Block>
          <Block title="Tech stack">
            <StackList stack={study.stack} />
          </Block>
          <Block title="What I'd improve">
            <List items={study.improveNext} />
          </Block>
        </div>

        <nav
          aria-label="More case studies"
          className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8"
        >
          <a href="/#work" className="text-sm link-underline">
            Back to all work
          </a>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Next: {next.title}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
