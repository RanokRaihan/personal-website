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
import type { ISetting } from "@/types";

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
  { href: "/project", label: "Projects", icon: FolderOpen },
  { href: "/blog", label: "Blogs", icon: BookOpen },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];
