import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#how-i-build", label: "How I build" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      {/* Same size before and after mount, so there is no layout shift. */}
      {mounted && theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open
          ? "border-border bg-background/85 backdrop-blur-lg"
          : "border-transparent bg-background/0"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between gap-4"
      >
        <a
          href="/"
          className="flex min-w-0 items-center gap-2.5 font-medium tracking-tight text-foreground"
          aria-label={`${PROFILE.name}, home`}
        >
          <span
            aria-hidden="true"
            className="grid size-8 shrink-0 place-items-center rounded-md bg-foreground font-mono text-[0.7rem] font-semibold text-background"
          >
            DI
          </span>
          <span className="truncate">{PROFILE.name}</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href="/#contact"
            className="ml-1 hidden items-center rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <ul className="container-page flex flex-col py-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
