import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Github,
  Globe,
  UserRound,
} from "lucide-react";

import { getProjectBySlugAction } from "@/actions/projectAction";
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
    category,
    type,
    complexity,
    myRole,
    highlights,
    techStack,
    tags,
    featured,
    frontendLiveUrl,
    backendLiveUrl,
    frontendRepoUrl,
    backendRepoUrl,
    startedAt,
    completedAt,
  } = project;

  const liveUrl = frontendLiveUrl || backendLiveUrl;
  const repoUrl = frontendRepoUrl || backendRepoUrl;
  const started = formatDate(startedAt);
  const completed = formatDate(completedAt);
  const techGroups = Object.entries(techStack || {}).filter(
    ([, list]) => Array.isArray(list) && list.length > 0,
  );

  return (
    <section className="section-shell relative overflow-hidden">
      {/* Ambient glow — blue/indigo project accent */}
      <div className="pointer-events-none absolute -top-20 -right-32 h-[520px] w-[520px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-3xl" />

      <div className="section-container relative max-w-4xl">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>

        {/* Cover image */}
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 dark:border-slate-700/60 dark:bg-slate-800">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600">
              <Globe className="h-16 w-16" />
            </div>
          )}
          {featured && (
            <div className="absolute left-4 top-4">
              <Badge className="border-0 bg-amber-400 text-amber-950 hover:bg-amber-400 text-xs font-semibold">
                ✦ Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Title + tagline */}
        <div className="mt-8">
          <h1 className="section-heading">{title}</h1>
          {tagline && (
            <p className="mt-3 text-lg font-medium text-blue-600 dark:text-blue-400">
              {tagline}
            </p>
          )}
          {summary && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {summary}
            </p>
          )}
        </div>

        {/* Action buttons */}
        {(liveUrl || repoUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {liveUrl && (
              <Button
                asChild
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {repoUrl && (
              <Button asChild variant="outline">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        )}

        {/* Meta row */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className="border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            {CATEGORY_LABELS[category]}
          </Badge>
          <Badge
            variant="outline"
            className="border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            {TYPE_LABELS[type]}
          </Badge>
          <Badge
            variant="secondary"
            className={`${COMPLEXITY_COLORS[complexity]} border-0`}
          >
            {COMPLEXITY_LABELS[complexity]}
          </Badge>
          {myRole && (
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <UserRound className="h-4 w-4" />
              {myRole}
            </span>
          )}
          {(started || completed) && (
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <CalendarDays className="h-4 w-4" />
              {started ?? "—"}
              {completed ? ` – ${completed}` : " – Present"}
            </span>
          )}
        </div>

        {/* Description */}
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
        {highlights && highlights.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
              Highlights
            </h2>
            <div className="mt-4 h-px w-12 bg-blue-500/70" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
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

        {/* Tech stack */}
        {techGroups.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
              Tech Stack
            </h2>
            <div className="mt-4 h-px w-12 bg-blue-500/70" />
            <div className="mt-6 flex flex-col gap-5">
              {techGroups.map(([group, techs]) => (
                <div key={group}>
                  <p className="mb-2 text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {titleCase(group)}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
          </div>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-3 border-t border-slate-100 pt-8 dark:border-slate-700/50">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-mono text-slate-400 dark:text-slate-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
