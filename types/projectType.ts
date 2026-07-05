export type Filter = {
  name: string;
  value: string;
};

export interface IProject {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  summary: string;
  description: string;
  category:
    | "FULL_STACK"
    | "FRONTEND"
    | "BACKEND"
    | "MOBILE"
    | "CLI_TOOL"
    | "LIBRARY"
    | "API"
    | "PACKAGE"
    | "OTHER";
  type:
    | "PERSONAL"
    | "FREELANCE"
    | "OPEN_SOURCE"
    | "CLIENT"
    | "HACKATHON"
    | "OTHER";
  status: "PUBLISHED";
  complexity: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  myRole: string;

  // Media
  coverImage: string;
  images?: string[];
  videoUrl?: string;
  demoGifUrl?: string;

  // Content
  highlights: string[];
  challenges?: string;
  lessons?: string;
  techStack: Record<string, string[]>;
  tags: string[];

  // Links
  frontendLiveUrl?: string;
  backendLiveUrl?: string;
  frontendRepoUrl?: string;
  backendRepoUrl?: string;
  caseStudyUrl?: string;
  npmUrl?: string;
  devToUrl?: string;
  figmaUrl?: string;

  // Stats
  linesOfCode?: number;
  githubStars?: number;
  npmDownloads?: number;
  activeUsers?: number;

  // Team
  teamSize?: number;
  contributors?: string[];

  // Flags & dates
  featured: boolean;
  isFeaturedOnHome: boolean;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}
