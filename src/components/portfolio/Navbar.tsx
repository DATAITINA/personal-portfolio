import { useEffect, useState } from "react";
import { Menu, X, Github, Sun, Moon } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";

const LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "border-b border-border bg-background/80 shadow-[var(--shadow-nav)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-[76rem] items-center justify-between gap-6 px-6 transition-all duration-300 sm:px-10 ${
          scrolled ? "h-14" : "h-[4.5rem]"
        }`}
      >
        <a
          href="#home"
          className="min-w-0 truncate font-display text-[1.05rem] tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          {PROFILE.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          )}

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-2 rounded-md border border-border-strong bg-surface px-3 py-1.5 text-[0.8125rem] font-medium text-foreground shadow-[var(--shadow-xs)] transition-all hover:border-foreground/30 hover:bg-surface-raised sm:inline-flex"
          >
            <Github className="size-3.5 opacity-80" />
            <span>GitHub</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-border bg-background transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-0.5 px-6 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-3 py-3 text-base font-medium text-foreground"
          >
            <Github className="size-4 opacity-80" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
