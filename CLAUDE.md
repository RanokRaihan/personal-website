# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no tests in this project.

## Environment

Requires a `.env.local` file with:
```
NEXT_PUBLIC_API_URL=<backend API base URL>
```

All data (projects, skills, blogs) is fetched from this external REST API — there is no local database or CMS.

## Architecture

This is a **Next.js 14 App Router** personal portfolio site (Ranok Raihan — Full Stack Developer). All routes live under `app/(public)/` with a shared `Navbar` + `Footer` layout applied in `app/(public)/layout.tsx`.

### Data Flow

Server Actions in `lib/actions/` (`projectAction.ts`, `skillAction.ts`, `blogAction.tsx`) fetch data from `NEXT_PUBLIC_API_URL`. All fetches use `cache: "no-store"` (no caching). The home page renders data server-side via async container components — `ProjectContainer`, `SkillContainer`, `BlogContainer` — which fetch and pass data down to card components.

### Component Pattern

Each content section follows a three-layer pattern:
- **`*Section`** — layout shell with decorative background gradients and section header
- **`*Container`** — async server component that fetches data and renders the grid
- **`*Card`** — presentational component receiving a single item as a prop

`Suspense` boundaries with skeleton fallbacks wrap containers in `*Section` components (see `SkillSection.tsx`).

### UI Layer

- **shadcn/ui** components live in `components/ui/` — do not edit these directly, regenerate via `npx shadcn-ui@latest add <component>`
- **Tailwind** with dark mode via `class` strategy (`next-themes` provider in root layout)
- Dark mode uses `dark:bg-slate-900` / `dark:text-slate-100` as base; sections use gradient backgrounds defined inline
- Framer-style animations via CSS `animationDelay` on grid items (index-based staggering)

### Forms

Contact form uses `react-hook-form` + `zod` (schema in `lib/validation.ts`) + `CustomFormField.tsx` (a wrapper that renders INPUT or TEXTAREA based on a `FormFieldType` enum). The submit handler in `ContactForm.tsx` currently only logs values — API integration is not yet wired up.

### Routes

| Route | Page |
|---|---|
| `/` | Home — all sections stacked |
| `/projects` | Full projects list with filters |
| `/projects/[id]` | Project detail |
| `/blogs` | Blog listing |
| `/blogs/[id]` | Blog detail |
| `/about` | About page |
| `/contact` | Contact page |

### Key Decisions

- `next.config.mjs` has `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true` — TypeScript and lint errors won't fail the build
- Remote images are served from Cloudinary (`res.cloudinary.com`) — this hostname is whitelisted in `next.config.mjs`
- Navigation items are defined in `constants/index.ts` — update `menuItems` there to add/remove nav links
- `react-typed` (aliased as `react-typed`) drives the `TypeAnimation` component in the hero
