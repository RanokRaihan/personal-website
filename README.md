# Personal Website — Ranok Raihan

A personal portfolio site for Ranok Raihan (Full Stack Developer), built with the **Next.js 14 App Router**. It showcases projects, skills, and blog posts, all fetched from an external REST API — there is no local database or CMS.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS with dark mode (`class` strategy via `next-themes`)
- **UI components:** [shadcn/ui](https://ui.shadcn.com) (Radix primitives) in `components/ui/`
- **Forms:** react-hook-form + zod validation
- **Content:** react-markdown (with `remark-gfm`, `rehype-raw`, `rehype-highlight`) for blog and legal pages
- **Icons:** lucide-react, react-icons, tech-stack-icons
- **Notifications:** sonner

## Getting Started

### Prerequisites

- Node.js 18.17+ (Node 20+ recommended)
- npm

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file in the project root:

   ```bash
   BACKEND_URL=<backend API base URL>          # used by lib/config.ts (server-only)
   NEXT_PUBLIC_API_URL=<backend API base URL>  # used by legacy server actions (client-visible)
   ```

   Both variables currently point to the same backend API.

3. Start the development server:

   ```bash
   npm run dev
   ```

   The app runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

> There are no automated tests in this project.

## Project Structure

```
app/
  (public)/          Public routes sharing the Navbar + Footer layout
    page.tsx         Home — all sections stacked
    about/           About page
    projects/        Projects list + [id] detail
    blog/            Blog listing + detail
    contact/         Contact page
    terms/           Terms of Service
    privacy/         Privacy Policy
  layout.tsx         Root layout (theme provider, top loader)
components/
  home/              Home page sections (Hero, Projects, Skills, Blog, ...)
  ui/                shadcn/ui components — regenerate, don't hand-edit
  forms/             Form components (contact, etc.)
lib/
  api/               Typed HTTP client built on fetch (see below)
  actions/           Legacy server actions (raw fetch)
  config.ts          Validated environment config
  validation.ts      Zod schemas
constants/           Nav menu items and other static config
```

### Component Pattern

Each content section follows a three-layer pattern:

- **`*Section`** — layout shell with decorative background gradients and section header
- **`*Container`** — async server component that fetches data and renders the grid
- **`*Card`** — presentational component receiving a single item

`Suspense` boundaries with skeleton fallbacks wrap the containers.

## Routes

| Route | Page |
|---|---|
| `/` | Home — all sections stacked |
| `/projects` | Projects list with filters and pagination |
| `/projects/[id]` | Project detail |
| `/blog` | Blog listing |
| `/blog/[id]` | Blog detail |
| `/about` | About |
| `/contact` | Contact |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |

## Data Layer

Content (projects, skills, blogs) is fetched from an external REST API.

- **Legacy path:** Server Actions in `lib/actions/` fetch via raw `fetch` using `NEXT_PUBLIC_API_URL`.
- **New path:** A typed HTTP client in `lib/api/` (import from the barrel: `import { apiClient, ApiError } from "@/lib/api"`) built on native `fetch`, with support for query params, timeouts, retries, Next.js ISR cache control (`revalidate` / `tags`), and normalized error handling. All endpoints resolve against `BACKEND_URL` with an `api/v1` prefix.

Migration from the legacy server actions to the new client is in progress.

## Notes

- `next.config.mjs` sets `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` to `true`, so type and lint errors do not fail the build.
- Remote images are served from Cloudinary (`res.cloudinary.com`), whitelisted in `next.config.mjs`.
- Navigation items live in `constants/index.ts` (`menuItems`).
- Dark mode uses `dark:bg-slate-900` / `dark:text-slate-100` as the base, with gradient backgrounds defined per section.
