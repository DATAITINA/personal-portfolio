import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

/**
 * Runs before first paint (inlined in the document head) so the page never
 * flashes the wrong theme. A saved choice wins; otherwise follow the system.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})();`;

function readStored(): Theme | null {
  try {
    const t = localStorage.getItem(STORAGE_KEY);
    return t === "dark" || t === "light" ? t : null;
  } catch {
    return null;
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(document.documentElement.classList.contains("dark") ? "dark" : "light");
    setMounted(true);

    // Follow the system setting until the visitor picks a theme themselves.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (readStored()) return;
      document.documentElement.classList.toggle("dark", e.matches);
      setThemeState(e.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage can be blocked; the toggle still works for this visit.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme, mounted };
}
