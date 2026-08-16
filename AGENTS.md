# AGENTS.md

Etereo: React 19 + TypeScript (Vite) SPA for an artisan candle brand ("Velas artesanales"). All UI copy is Spanish — keep it that way.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (typecheck happens here; there is no separate typecheck script)
- `npm run lint` — `eslint .`
- No test suite or test runner exists.

## Stack gotchas

- **Tailwind v4 — no `tailwind.config.js`.** Theme (custom colors `cream`/`ink`/`brand`, fonts `font-display`/`font-sans`) is defined in the `@theme` block in `src/index.css:3`. Add colors/fonts there, never create a config file. Use `bg-cream-50`, `text-ink-900`, `text-brand-600`, etc.
- **Strict TS** (`tsconfig.app.json`): `verbatimModuleSyntax` → type-only imports must use `import type`; `erasableSyntaxOnly` → no enums/namespaces/class parameter properties; `noUnusedLocals`/`noUnusedParameters` are errors.
- **Firebase**: `src/config/firebase.ts` initializes the app eagerly on import and exports `db`, `storage`, `auth`. It reads all `VITE_*` vars from `.env` (gitignored; copy `.env.example`). The app will error/behave unexpectedly without them.

## Architecture

- Routes in `src/App.tsx`: `/` → Home, `/admin` → Admin. `vercel.json` rewrites all paths to `/` (SPA fallback).
- Home (`src/pages/home.tsx`) is a scroll-snap single-page layout: the `<main>` element is the scroll container (`snap-y snap-mandatory`). Sections carry ids (`inicio`, `producto`, `carrusel`, `contacto`) and `snap-start h-screen`. NavBar (`src/components/home/navBar.tsx`) is fixed and tracks the active section via IntersectionObserver against that container. New sections must follow this id + snap pattern to work with nav/anchors.
- Framer-motion is used for animations; `swiper` is installed for the gallery ("carrusel") section (not yet wired up).
- Pages and components use lowercase/mixed-case filenames with default exports (`pages/home.tsx`, `components/home/hero.tsx`, `navBar.tsx`) — match that style.
