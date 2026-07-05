import {
  BookOpen,
  Code2,
  FolderOpen,
  Home,
  Layers,
  Mail,
  Server,
  User,
} from "lucide-react";
import type { IProject, ISetting } from "@/types";

export const RESUME_URL =
  "https://drive.usercontent.google.com/download?id=1lEx5YGciXzGNWiaD_YvzWYxMVZ1QyGDU&export=download&authuser=0&confirm=t&uuid=e8998cd1-6860-4031-88cb-286c389cf6ae&at=ALoNOgm1fFI0q-yOvy-5Q8nKzj0O:1748285210785";

// Fallback used when the /setting API is unconfigured (404) or unreachable —
// keeps Hero/Footer rendering the same content they had before the API wiring.
export const DEFAULT_SETTINGS: ISetting = {
  name: "Ranok Raihan",
  title: "Full Stack Developer",
  bio: "Full-stack developer specializing in the MERN stack, building accessible, robust, and user-centric applications that make a difference.",
  resumeUrl: RESUME_URL,
  openToWork: true,
  socials: {
    github: "https://github.com/RanokRaihan",
    linkedin: "https://www.linkedin.com/in/ranok-raihan/",
    email: "ranokraihan@gmail.com",
  },
  footerText: "Building beautiful, performant, and accessible web experiences.",
};

// "What I do" — presentational only.
export const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Accessible, responsive interfaces with React, Next.js, and TypeScript — pixel-accurate and fast.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Scalable REST APIs and services with Node.js, Express, and MongoDB/PostgreSQL — secure by default.",
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description:
      "End-to-end products, from database schema to deployment, shipped with clean, maintainable code.",
  },
];

// Curated fallbacks for the stats band (technologies & certifications are
// counted live from the API; these two are curated).
export const CURATED_STATS = {
  yearsExperience: 3,
  projectsShipped: 20,
};

export const introStrings = [
  "Crafting Modern Web Experiences",
  "Building Scalable Full-Stack Solutions",
  "React Enthusiast and UI Innovator",
  "Next.js for Lightning-Fast Apps",
  "Node.js Backend Specialist",
  "PostgreSQL and MongoDB Expert",
  "TypeScript for Robust Code",
];
export const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/blog", label: "Blogs", icon: BookOpen },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

// ── Project filter options ────────────────────────────────────────────────
// Shared by the projects listing filters and the project detail meta badges.
// Values mirror the IProject enum unions from the public API contract.

export const CATEGORY_LABELS: Record<IProject["category"], string> = {
  FULL_STACK: "Full Stack",
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  MOBILE: "Mobile",
  CLI_TOOL: "CLI Tool",
  LIBRARY: "Library",
  API: "API",
  PACKAGE: "Package",
  OTHER: "Other",
};

export const TYPE_LABELS: Record<IProject["type"], string> = {
  PERSONAL: "Personal",
  FREELANCE: "Freelance",
  OPEN_SOURCE: "Open Source",
  CLIENT: "Client",
  HACKATHON: "Hackathon",
  OTHER: "Other",
};

export const COMPLEXITY_LABELS: Record<IProject["complexity"], string> = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
};

export const COMPLEXITY_COLORS: Record<IProject["complexity"], string> = {
  BEGINNER:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  INTERMEDIATE:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  ADVANCED:
    "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

export type FilterOption = { value: string; label: string };

export const PROJECT_CATEGORIES: FilterOption[] = (
  Object.keys(CATEGORY_LABELS) as IProject["category"][]
).map((value) => ({ value, label: CATEGORY_LABELS[value] }));

export const PROJECT_TYPES: FilterOption[] = (
  Object.keys(TYPE_LABELS) as IProject["type"][]
).map((value) => ({ value, label: TYPE_LABELS[value] }));

export const PROJECT_COMPLEXITIES: FilterOption[] = (
  Object.keys(COMPLEXITY_LABELS) as IProject["complexity"][]
).map((value) => ({ value, label: COMPLEXITY_LABELS[value] }));

export type SortOption = {
  value: string;
  label: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
};

export const PROJECT_SORT_OPTIONS: SortOption[] = [
  { value: "newest", label: "Newest", sortBy: "createdAt", sortOrder: "desc" },
  { value: "oldest", label: "Oldest", sortBy: "createdAt", sortOrder: "asc" },
  { value: "az", label: "A–Z", sortBy: "title", sortOrder: "asc" },
  { value: "za", label: "Z–A", sortBy: "title", sortOrder: "desc" },
];

export const PROJECTS_PER_PAGE = 9;

// ── Blog filter options ───────────────────────────────────────────────────
// The public blog API only supports search + sort (see api-contract-public/blog.md).

export const BLOG_SORT_OPTIONS: SortOption[] = [
  { value: "newest", label: "Newest", sortBy: "publishedAt", sortOrder: "desc" },
  { value: "oldest", label: "Oldest", sortBy: "publishedAt", sortOrder: "asc" },
  { value: "popular", label: "Most read", sortBy: "views", sortOrder: "desc" },
  { value: "az", label: "A–Z", sortBy: "title", sortOrder: "asc" },
];

export const BLOGS_PER_PAGE = 9;
