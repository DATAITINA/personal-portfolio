import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "h-14" : "h-20"
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-lg border border-border-strong bg-surface-raised font-mono text-sm font-semibold text-primary"
          >
            DI
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-semibold">
              {PROFILE.name}
            </span>
            <span className="block truncate font-mono text-[11px] tracking-wider text-muted-foreground">
              AI Engineer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            <Github className="size-4" aria-hidden="true" />
            GitHub
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-grid size-11 place-items-center rounded-lg border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
          >
            <Github className="size-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
