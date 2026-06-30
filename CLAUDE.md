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
BACKEND_URL=<backend API base URL>          # used by lib/config.ts (server-only)
NEXT_PUBLIC_API_URL=<backend API base URL>  # used by legacy server actions (client-visible)
```

The two variables currently point to the same backend. The existing server actions in `lib/actions/` still read `NEXT_PUBLIC_API_URL` directly; migration to the new `lib/api/` client (which reads `BACKEND_URL` via `lib/config.ts`) is in progress.

All data (projects, skills, blogs) is fetched from this external REST API — there is no local database or CMS.

## Architecture

This is a **Next.js 14 App Router** personal portfolio site (Ranok Raihan — Full Stack Developer). All routes live under `app/(public)/` with a shared `Navbar` + `Footer` layout applied in `app/(public)/layout.tsx`.

### Data Flow

Server Actions in `lib/actions/` (`projectAction.ts`, `skillAction.ts`, `blogAction.tsx`) fetch data from `NEXT_PUBLIC_API_URL` using raw `fetch` with `cache: "no-store"`. The home page renders data server-side via async container components — `ProjectContainer`, `SkillContainer`, `BlogContainer` — which fetch and pass data down to card components.

A new typed HTTP client layer lives in `lib/api/` (see below). The existing actions have not yet been migrated to use it.

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

### API Client (`lib/api/`)

A typed HTTP client built on top of the native `fetch` API. Import from the barrel: `import { apiClient, ApiError } from "@/lib/api"`.

**`apiClient`** exposes `.get`, `.post`, `.put`, `.patch`, `.delete` — all generic over the response type `T`. Every method accepts an optional `RequestConfig`:

| Option | Default | Purpose |
|---|---|---|
| `params` | — | Query string key/value pairs |
| `timeout` | 30 000 ms | Aborts slow requests |
| `retries` | 0 | Retries on 5xx / 429 / network errors |
| `revalidate` / `tags` | — | Next.js ISR cache control |
| `skipAuth` | `false` | Skip attaching the Bearer token |
| `cache` | — | Native `fetch` cache mode |

All URLs are constructed by `buildUrl` in `lib/api/utils.ts`, which prepends `api/v1` to every endpoint and resolves against `BACKEND_URL`.

**Auth** — `client.ts` imports `getAuthToken` from `./tokens`, which does not exist yet and must be created before the client can be used for authenticated routes.

**Error handling** — non-ok responses throw either a backend-shaped `BackendError` (passed through as-is) or an `ApiError` (with `.statusCode`). Use `ApiError.isApiError(e)` and `ApiError.isUnauthorized(e)` to distinguish them.

**`actionHandler`** (`lib/api/actionHandler.ts`) — a thin `"use server"` wrapper for Server Actions. Catches thrown errors and normalizes them to `BackendError` so callers never need to handle raw exceptions:

```ts
const result = await actionHandler(() => apiClient.get<ApiResponse<IProject[]>>("/project"));
if (!result.success) { /* result is BackendError */ }
```

**`lib/config.ts`** — exports a validated `env` object (`env.backendUrl`, `env.nodeEnv`, `env.isProduction`). Throws at startup if `BACKEND_URL` is missing. Use this instead of reading `process.env` directly.

### Key Decisions

- `next.config.mjs` has `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true` — TypeScript and lint errors won't fail the build
- Remote images are served from Cloudinary (`res.cloudinary.com`) — this hostname is whitelisted in `next.config.mjs`
- Navigation items are defined in `constants/index.ts` — update `menuItems` there to add/remove nav links
- `react-typed` (aliased as `react-typed`) drives the `TypeAnimation` component in the hero
