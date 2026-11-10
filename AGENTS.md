<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfoliooo

Personal portfolio site for Mehedi Hasan. Single-page App Router app with a
navbar and hero section; new sections are expected to be added incrementally.

## Stack

- Next.js 16.4 (App Router, Turbopack) + React 19.3
- TypeScript (strict) with `@/*` → `src/*`
- Tailwind CSS v4 (no `tailwind.config`; theme lives in `src/app/globals.css`)
- shadcn/ui, style `base-nova`, built on `@base-ui/react` (not Radix)
- `cn` package for class merging (not `clsx` + `tailwind-merge`)
- React Compiler enabled

## Commands

```bash
npm run dev     # start dev server (writes/refreshes the managed block above)
npm run build   # production build
npm run lint    # ESLint (flat config)
npx tsc --noEmit  # type check
```

There is no test suite yet.

## Structure

```
src/
  app/
    layout.tsx        # root layout: fonts, global CSS, page shell/container
    page.tsx          # composes the portfolio sections
    globals.css       # Tailwind import + shadcn theme tokens (dark-only palette)
    jinishpati/       # section components; not a route
      Navbar.tsx      # sticky nav + mobile menu (client component)
      Hero.tsx        # headline, CTAs, tech icons, portrait + code card
      About.tsx       # bio + 2x2 stat cards
      Skills.tsx      # 9 skill rows with progress bars
      Projects.tsx    # 3 project cards with CSS/SVG thumbnails
      Contact.tsx     # CTA + testimonial + social/contact details
      Footer.tsx      # copyright line
  components/
    ui/               # shadcn components (button.tsx)
    brand-icon.tsx    # simple-icons wrapper + dark-safe brand colors
    action-link.tsx   # anchor styled with shadcn buttonVariants
    section-heading.tsx
  lib/utils.ts        # re-exports cn from "cn"
public/
  Toufique.jpg        # hero portrait
  toufique-cv.pdf     # "Download CV" target
```

`src/app/jinishpati/` has no `page.tsx`, so it is a plain component folder, not a
route segment. Put new page sections there as `PascalCase.tsx` default exports
and compose them in `src/app/page.tsx`.

## Conventions

- Components are arrow functions with a default export; section files import
  `React` explicitly. Match the quote/semicolon style of the file you edit
  (app components use double quotes + semicolons; shadcn files do not).
- Prefer adding shadcn components over hand-rolling UI:
  `npx shadcn@latest add <component>` (aliases come from `components.json`).
- Icons: `lucide-react` for UI icons; brand/tech logos come from
  `simple-icons` and are rendered through `src/components/brand-icon.tsx`
  (lucide no longer ships brand marks). Do not add another icon set.
- Use `ActionLink` (`src/components/action-link.tsx`) for CTA anchors so button
  styling stays consistent.
- Import `cn` from `@/lib/utils` (or `"cn"`) — do not reintroduce
  `clsx`/`tailwind-merge`.
- Style with Tailwind utility classes. Theme tokens (`bg-background`,
  `text-foreground`, `bg-primary`, `text-muted-foreground`, `rounded-lg`, ...)
  are the default for shadcn components; the existing navbar/hero use palette
  classes such as `bg-gray-900` and `text-orange-500`. Keep new work visually
  consistent with the section it belongs to.
- Add theme changes as CSS variables + `@theme inline` mappings in
  `globals.css`; there is no JS Tailwind config to edit.

## Next.js specifics for this repo

- `cacheComponents: true` and `partialPrefetching: true` are on. Any uncached
  data access (`fetch`, `cookies()`, `headers()`, `connection()`) outside
  `<Suspense>` blocks prerendering. Fix with `<Suspense fallback={...}>`,
  `"use cache"`, or `export const instant = false` — see
  `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md`.
- `PageProps<'/route'>` and `LayoutProps<'/route'>` are global generated types;
  do not hand-write `params`/`children` prop types.
- `next.config.ts` registers `@tailwindcss/turbopack` for `.css` files; keep it
  when editing config.
- `next-env.d.ts` is gitignored, and the docs under `node_modules/next/dist/docs/`
  are the source of truth over model knowledge.
