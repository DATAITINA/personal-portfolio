# David Itina · Portfolio

Personal portfolio of David Itina, AI Engineer.

**Live:** https://david-itina-portfolio.vercel.app

## Update the content

All copy lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).

- `PROFILE`: name, headline, links, resume path.
- `CASE_STUDIES`: the featured projects. Each one gets its own page at `/work/<slug>`, and its
  architecture diagram is drawn from the `diagram` field.
- `MORE_WORK`, `PRINCIPLES` ("How I build"), `EXPERIENCE`, `EDUCATION`, `SKILLS`.

Search the repo for `TODO(david)` to find facts that still need filling in. Only add numbers
you can back up.

When you add a case study, also add its URL to [`public/sitemap.xml`](public/sitemap.xml).

### Resume

Put the PDF at `public/David_Itina_Resume.pdf`, then set `PROFILE.resumeUrl` to
`"/David_Itina_Resume.pdf"`. Until then the hero shows a "Request resume" email link.

## Develop

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

Built with TanStack Start, React 19, Tailwind CSS 4 and TypeScript. Fonts are self-hosted with
Fontsource. Deployed on Vercel, with Vercel Web Analytics.
