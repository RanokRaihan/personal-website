import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Figma,
  FileText,
  Github,
  Globe,
  Lightbulb,
  Package,
  PenTool,
  Server,
  Star,
  UserRound,
  Users,
} from "lucide-react";

import { getProjectBySlugAction } from "@/actions/projectAction";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CATEGORY_LABELS,
  COMPLEXITY_COLORS,
  COMPLEXITY_LABELS,
  TYPE_LABELS,
} from "@/constants";
import type { IProject } from "@/types";

interface ProjectDetailPageProps {
  params: { slug: string };
}

const isError = (
  result: IProject | { success: false },
): result is { success: false } => "success" in result;

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : null;

const titleCase = (s: string) =>
  s.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

// Highlights arrive as an array whose items may themselves be comma-separated.
const parseHighlights = (highlights?: string[]): string[] =>
  (highlights ?? [])
    .flatMap((h) => h.split(","))
    .map((h) => h.trim())
    .filter(Boolean);

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const result = await getProjectBySlugAction(params.slug);
  if (isError(result)) {
    return { title: "Project · Ranok Raihan" };
  }
  return {
    title: `${result.title} · Ranok Raihan`,
    description: result.summary || result.tagline,
    openGraph: result.coverImage
      ? { images: [{ url: result.coverImage }] }
      : undefined,
  };
}

// ── Sidebar building blocks ───────────────────────────────────────────────
const SidebarCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 dark:border-slate-700/60 dark:bg-slate-800/40">
    <h3 className="mb-4 text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
      {title}
    </h3>
    {children}
  </div>
);

const InfoRow = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-center justify-between gap-4 py-2 text-sm">
    <span className="text-slate-500 dark:text-slate-400">{label}</span>
    <span className="text-right font-medium text-slate-800 dark:text-slate-200">
      {children}
    </span>
  </div>
);

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const result = await getProjectBySlugAction(params.slug);

  if (isError(result)) {
    notFound();
  }

  const project = result as IProject;
  const {
    title,
    tagline,
    summary,
    description,
    coverImage,
    images,
    category,
    type,
    complexity,
    myRole,
    teamSize,
    contributors,
    highlights,
    challenges,
    lessons,
    techStack,
    tags,
    featured,
    frontendLiveUrl,
    backendLiveUrl,
    frontendRepoUrl,
    backendRepoUrl,
    caseStudyUrl,
    npmUrl,
    devToUrl,
    figmaUrl,
    linesOfCode,
    githubStars,
    npmDownloads,
    activeUsers,
    startedAt,
    completedAt,
  } = project;

  // Cover first, then any additional screenshots (deduped) — the gallery slides.
  const galleryImages = Array.from(
    new Set([coverImage, ...(images ?? [])].filter(Boolean)),
  );

  const primaryLive = frontendLiveUrl || backendLiveUrl;
  const primaryRepo = frontendRepoUrl || backendRepoUrl;

  const started = formatDate(startedAt);
  const completed = formatDate(completedAt);

  const highlightList = parseHighlights(highlights);

  const techGroups = Object.entries(techStack || {}).filter(
    ([, list]) => Array.isArray(list) && list.length > 0,
  );

  const links = [
    { label: "Live Site", href: frontendLiveUrl, icon: Globe },
    { label: "Frontend Repo", href: frontendRepoUrl, icon: Github },
    { label: "Backend API", href: backendLiveUrl, icon: Server },
    { label: "Backend Repo", href: backendRepoUrl, icon: Github },
    { label: "Case Study", href: caseStudyUrl, icon: FileText },
    { label: "npm Package", href: npmUrl, icon: Package },
    { label: "Dev.to Article", href: devToUrl, icon: PenTool },
    { label: "Figma Design", href: figmaUrl, icon: Figma },
  ].filter((l): l is { label: string; href: string; icon: typeof Globe } =>
    Boolean(l.href),
  );

  const stats = [
    {
      label: "Lines of Code",
      value: linesOfCode,
      icon: Code2,
    },
    { label: "GitHub Stars", value: githubStars, icon: Star },
    { label: "npm Downloads", value: npmDownloads, icon: Download },
    { label: "Active Users", value: activeUsers, icon: Activity },
  ].filter(
    (s): s is { label: string; value: number; icon: typeof Code2 } =>
      typeof s.value === "number",
  );

  const teamLabel =
    typeof teamSize === "number"
      ? teamSize <= 1
        ? "Solo"
        : `${teamSize} people`
      : null;

  return (
    <section className="section-shell relative overflow-hidden">
      {/* Ambient glow — blue/indigo project accent */}
      <div className="pointer-events-none absolute -top-20 -right-32 h-[520px] w-[520px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-3xl" />

      <div className="section-container relative">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
          {/* ── Main column ─────────────────────────────────────────── */}
          <div className="min-w-0">
            {galleryImages.length > 0 && (
              <ProjectGallery
                images={galleryImages}
                title={title}
                featured={featured}
              />
            )}

            {/* Title + tagline + summary */}
            <div className="mt-8">
              <h1 className="section-heading">{title}</h1>
              {tagline && (
                <p className="mt-3 text-lg font-medium text-blue-600 dark:text-blue-400">
                  {tagline}
                </p>
              )}
              {summary && (
                <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {summary}
                </p>
              )}
            </div>

            {/* Primary actions */}
            {(primaryLive || primaryRepo) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {primaryLive && (
                  <Button asChild variant="primary">
                    <a
                      href={primaryLive}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {primaryRepo && (
                  <Button asChild variant="outline">
                    <a
                      href={primaryRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            )}

            {/* About */}
            {description && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                  About this project
                </h2>
                <div className="mt-4 h-px w-12 bg-blue-500/70" />
                <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {description}
                </p>
              </div>
            )}

            {/* Highlights */}
            {highlightList.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                  Highlights
                </h2>
                <div className="mt-4 h-px w-12 bg-blue-500/70" />
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlightList.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500 dark:text-blue-400" />
                      <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {challenges && (
              <div className="mt-12">
                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-50">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Challenges
                </h2>
                <div className="mt-4 h-px w-12 bg-blue-500/70" />
                <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {challenges}
                </p>
              </div>
            )}

            {/* Lessons */}
            {lessons && (
              <div className="mt-12">
                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-50">
                  <Lightbulb className="h-5 w-5 text-blue-500" />
                  What I Learned
                </h2>
                <div className="mt-4 h-px w-12 bg-blue-500/70" />
                <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {lessons}
                </p>
              </div>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-3 border-t border-slate-100 pt-8 dark:border-slate-700/50">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-sm text-slate-400 dark:text-slate-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ── Sidebar ─────────────────────────────────────────────── */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:h-fit">
            {/* Details */}
            <SidebarCard title="Details">
              <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
                <InfoRow label="Category">
                  {CATEGORY_LABELS[category]}
                </InfoRow>
                <InfoRow label="Type">{TYPE_LABELS[type]}</InfoRow>
                <InfoRow label="Complexity">
                  <Badge
                    variant="secondary"
                    className={`${COMPLEXITY_COLORS[complexity]} border-0`}
                  >
                    {COMPLEXITY_LABELS[complexity]}
                  </Badge>
                </InfoRow>
                {myRole && (
                  <InfoRow label="Role">
                    <span className="inline-flex items-center gap-1.5">
                      <UserRound className="h-3.5 w-3.5 text-slate-400" />
                      {myRole}
                    </span>
                  </InfoRow>
                )}
                {teamLabel && (
                  <InfoRow label="Team">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-slate-400" />
                      {teamLabel}
                    </span>
                  </InfoRow>
                )}
                {(started || completed) && (
                  <InfoRow label="Timeline">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                      {started ?? "—"}
                      {completed ? ` – ${completed}` : " – Present"}
                    </span>
                  </InfoRow>
                )}
              </div>
            </SidebarCard>

            {/* Stats */}
            {stats.length > 0 && (
              <SidebarCard title="By the Numbers">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex flex-col gap-1">
                      <Icon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                      <span className="text-lg font-bold text-slate-900 dark:text-slate-50">
                        {value.toLocaleString("en-US")}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </SidebarCard>
            )}

            {/* Tech stack */}
            {techGroups.length > 0 && (
              <SidebarCard title="Tech Stack">
                <div className="flex flex-col gap-4">
                  {techGroups.map(([group, techs]) => (
                    <div key={group}>
                      <p className="mb-2 text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {titleCase(group)}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {techs.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SidebarCard>
            )}

            {/* Links */}
            {links.length > 0 && (
              <SidebarCard title="Links">
                <div className="flex flex-col gap-1">
                  {links.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-blue-400"
                    >
                      <span className="inline-flex items-center gap-2.5">
                        <Icon className="h-4 w-4 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                        {label}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </SidebarCard>
            )}

            {/* Contributors */}
            {contributors && contributors.length > 0 && (
              <SidebarCard title="Contributors">
                <div className="flex flex-wrap gap-2">
                  {contributors.map((name) => (
                    <Badge
                      key={name}
                      variant="outline"
                      className="border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {name}
                    </Badge>
                  ))}
                </div>
              </SidebarCard>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
