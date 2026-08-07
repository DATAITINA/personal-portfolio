import { PROFILE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:flex sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold">{PROFILE.name}</p>
          <p className="font-mono text-xs tracking-wider text-muted-foreground">
            AI / Machine Learning Engineer
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 {PROFILE.name}. Built with intention.
        </p>
      </div>
    </footer>
  );
}
