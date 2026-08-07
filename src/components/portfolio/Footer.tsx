import { PROFILE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[76rem] px-6 pb-16 sm:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
        <p className="eyebrow">© {new Date().getFullYear()} {PROFILE.name}</p>
        <p className="eyebrow">Lagos, Nigeria</p>
      </div>
    </footer>
  );
}
