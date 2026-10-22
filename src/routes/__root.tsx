import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import serifFont from "@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2?url";
import serifItalicFont from "@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2?url";
import sansFont from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { THEME_INIT_SCRIPT } from "../hooks/use-theme";

function NotFoundComponent() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-5xl text-foreground">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error: raw, reset }: ErrorComponentProps) {
  console.error(raw);
  const router = useRouter();
  useEffect(() => {
    const error = raw instanceof Error ? raw : new Error(String(raw));
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [raw]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl text-foreground">This page didn&apos;t load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "David Itina · AI Engineer" },
      { name: "author", content: "David Itina" },
      { property: "og:site_name", content: "David Itina" },
      { property: "og:locale", content: "en_NG" },
      { name: "theme-color", media: "(prefers-color-scheme: light)", content: "#fbfbf9" },
      { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#16181d" },
    ],
    links: [
      // Preload the fonts the hero uses, so the headline does not shift when they arrive.
      ...[serifFont, serifItalicFont, sansFont].map((href) => ({
        rel: "preload",
        href,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous" as const,
      })),
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      // Credentials let the manifest load on password-protected preview deploys too.
      { rel: "manifest", href: "/site.webmanifest", crossOrigin: "use-credentials" as const },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    // The theme script sets the class before React hydrates, so the mismatch is expected.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
