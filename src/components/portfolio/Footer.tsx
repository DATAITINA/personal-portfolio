import { PROFILE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="container-page pb-10">
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}
        </p>
        <p>
          <a href="/#top" className="link-underline">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
