import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { IProject } from "@/types/projectType";
import { ExternalLink, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: IProject;
  index?: number;
}

const CATEGORY_LABELS: Record<IProject["category"], string> = {
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

const COMPLEXITY_COLORS: Record<IProject["complexity"], string> = {
  BEGINNER:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  INTERMEDIATE:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  ADVANCED:
    "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

const CARD_GLOWS = [
  "from-blue-500/[0.07] to-indigo-500/[0.07]",
  "from-violet-500/[0.07] to-purple-500/[0.07]",
  "from-indigo-500/[0.07] to-sky-500/[0.07]",
  "from-sky-500/[0.07] to-cyan-500/[0.07]",
  "from-purple-500/[0.07] to-pink-500/[0.07]",
  "from-cyan-500/[0.07] to-blue-500/[0.07]",
];

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const {
    slug,
    title,
    tagline,
    summary,
    coverImage,
    category,
    complexity,
    techStack,
    tags,
    featured,
    frontendLiveUrl,
    backendLiveUrl,
    frontendRepoUrl,
    backendRepoUrl,
  } = project;

  const allTechs = Object.values(techStack).flat();
  const displayTechs = allTechs.slice(0, 4);
  const overflowCount = allTechs.length - displayTechs.length;

  const liveUrl = frontendLiveUrl || backendLiveUrl;
  const repoUrl = frontendRepoUrl || backendRepoUrl;

  const cardGlow = CARD_GLOWS[index % CARD_GLOWS.length];

  return (
    /* Stretch-link card: the outer div is position:relative, the Link covers it with
       inset-0 (z-0), and action buttons sit in a relative z-10 layer so they stay
       clickable without nesting <a> inside <a>. */
    <div className="group relative h-full">
      {/* Stretch link — covers the entire card */}
      <Link
        href={`/projects/${slug}`}
        className="absolute inset-0 z-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        aria-label={`View ${title}`}
      />

      <Card
        className={`h-full flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-700/60 bg-gradient-to-br ${cardGlow} bg-white dark:bg-slate-800/60 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/10 group-hover:-translate-y-1.5 pointer-events-none`}
      >
        {/* Cover image */}
        <div className="relative h-48 overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600">
              <Globe className="w-12 h-12" />
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Featured badge */}
          {featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-amber-400 hover:bg-amber-400 text-amber-950 border-0 text-xs font-semibold">
                ✦ Featured
              </Badge>
            </div>
          )}

          {/* Complexity badge */}
          <div className="absolute top-3 right-3">
            <Badge
              variant="secondary"
              className={`${COMPLEXITY_COLORS[complexity]} border-0 text-xs font-medium`}
            >
              {complexity.charAt(0) + complexity.slice(1).toLowerCase()}
            </Badge>
          </div>

          {/* Category chip */}
          <div className="absolute bottom-3 left-3">
            <Badge
              variant="outline"
              className="border-white/30 bg-black/40 text-white text-xs backdrop-blur-sm"
            >
              {CATEGORY_LABELS[category]}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-2 pt-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
          {tagline && (
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium line-clamp-1">
              {tagline}
            </p>
          )}
        </CardHeader>

        <CardContent className="flex-1 pb-3">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
            {summary}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5">
            {displayTechs.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs px-2 py-0.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"
              >
                {tech}
              </Badge>
            ))}
            {overflowCount > 0 && (
              <Badge
                variant="outline"
                className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400"
              >
                +{overflowCount}
              </Badge>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-400 dark:text-slate-500 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="pt-0 pb-4 border-t border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center justify-between w-full pt-3">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center gap-1">
              View Details
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            {/* Action buttons — pointer-events-auto and relative z-10 to sit above the stretch link */}
            <div className="relative z-10 flex items-center gap-1 pointer-events-auto">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} source code`}
                  className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} live demo`}
                  className="p-1.5 rounded-md text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
