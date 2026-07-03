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
  coverImage: string;
  highlights: string[];
  techStack: Record<string, string[]>;
  tags: string[];
  featured: boolean;
  isFeaturedOnHome: boolean;
  frontendLiveUrl?: string;
  backendLiveUrl?: string;
  frontendRepoUrl?: string;
  backendRepoUrl?: string;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}
