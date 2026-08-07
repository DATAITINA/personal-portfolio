import { PROFILE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[76rem] px-6 pb-12 sm:px-10 sm:pb-16">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
        <p className="text-[0.75rem] text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p className="text-[0.75rem] text-muted-foreground">Lagos, Nigeria</p>
      </div>
    </footer>
  );
}
