import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Section } from "@/components/portfolio/Section";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { MoreWork } from "@/components/portfolio/MoreWork";
import { HowIBuild } from "@/components/portfolio/HowIBuild";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CASE_STUDIES, EDUCATION, PROFILE, SITE_URL } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

const TITLE = `${PROFILE.name} · AI Engineer`;

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({ title: TITLE, description: PROFILE.description, path: "/", type: "profile" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: PROFILE.name,
          url: SITE_URL,
          image: `${SITE_URL}/images/david-itina-800.jpg`,
          jobTitle: PROFILE.title,
          email: `mailto:${PROFILE.email}`,
          address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
          alumniOf: { "@type": "CollegeOrUniversity", name: EDUCATION.school },
          worksFor: { "@type": "Organization", name: "ITINA AI" },
          sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.x],
          knowsAbout: [
            "Large language models",
            "Retrieval-augmented generation",
            "Machine learning",
            "Computer vision",
            "FastAPI",
            "PyTorch",
            "TensorFlow",
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />

        <Section
          id="work"
          eyebrow="Selected work"
          title="Proof, not promises."
          intro="Four projects, from a live health app to a fraud scoring service. Each one has a full case study: the problem, what I built, the architecture and the trade-offs."
        >
          <div className="space-y-6">
            {CASE_STUDIES.map((s, i) => (
              <CaseStudyCard key={s.slug} study={s} index={i + 1} />
            ))}
          </div>
          <div className="mt-14">
            <MoreWork />
          </div>
        </Section>

        <Section
          id="how-i-build"
          eyebrow="How I build"
          title="Habits from shipping real products."
          intro="AI features fail in new ways. These are the rules I follow so users do not pay for it, and where you can see each one in my code."
        >
          <HowIBuild />
        </Section>

        <Section id="experience" eyebrow="Experience" title="Where I've done the work.">
          <ExperienceTimeline />
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Tools I've shipped with."
          intro="Only tools I have used in real work. Each one links to where you can see it."
        >
          <Skills />
        </Section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="container-page py-16 sm:py-24"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
