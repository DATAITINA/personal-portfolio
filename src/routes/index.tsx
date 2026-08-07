import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Section } from "@/components/portfolio/Section";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { TechStack } from "@/components/portfolio/TechStack";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { MathFoundation } from "@/components/portfolio/MathFoundation";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { PROFILE, PROJECTS } from "@/data/portfolio";

const TITLE = "David Itina — AI / Machine Learning Engineer";
const DESCRIPTION =
  "Portfolio of David Itina, AI/ML Engineer in Lagos building production-oriented ML systems across computer vision, fraud intelligence, document AI and RAG.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: PROFILE.name,
          jobTitle: PROFILE.title,
          email: `mailto:${PROFILE.email}`,
          address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Covenant University" },
          sameAs: [PROFILE.github, PROFILE.linkedin],
          knowsAbout: [
            "Machine Learning",
            "Computer Vision",
            "Retrieval-Augmented Generation",
            "FastAPI",
            "PyTorch",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />

        <Section id="projects" eyebrow="Selected work" title="Five systems, built end to end.">
          <div>
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i + 1} />
            ))}
          </div>
        </Section>

        <Section eyebrow="Stack" title="Tools I reach for.">
          <TechStack />
        </Section>

        <Section id="experience" eyebrow="Experience" title="Where the work happened.">
          <ExperienceTimeline />
        </Section>

        <Section eyebrow="Foundation" title="The mathematics underneath.">
          <MathFoundation />
        </Section>

        <Section eyebrow="Principles" title="How I build.">
          <Philosophy />
        </Section>

        <Section id="about" eyebrow="About" title="Applied mathematics, shipped as software.">
          <About />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

