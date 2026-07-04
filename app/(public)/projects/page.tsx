import type { Metadata } from "next";
import { Suspense } from "react";

import type { ProjectListParams } from "@/actions/projectAction";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectResults from "@/components/projects/ProjectResults";
import ProjectsGridSkeleton from "@/components/projects/ProjectsGridSkeleton";
import { PROJECT_SORT_OPTIONS, PROJECTS_PER_PAGE } from "@/constants";

export const metadata: Metadata = {
  title: "Projects · Ranok Raihan",
  description:
    "Projects built by Ranok Raihan — full-stack applications, APIs, and open-source tools across the MERN and TypeScript ecosystem.",
};

// Reads searchParams, so this route renders dynamically per request.
export const dynamic = "force-dynamic";

type PageSearchParams = {
  [key: string]: string | string[] | undefined;
};

const first = (value: string | string[] | undefined): string | undefined =>
  Array.isArray(value) ? value[0] : value;

const parseParams = (searchParams: PageSearchParams): ProjectListParams => {
  // sortBy/sortOrder are stored directly in the URL by the filters component.
  const sortBy = first(searchParams.sortBy);
  const sortOrder = first(searchParams.sortOrder) as
    | "asc"
    | "desc"
    | undefined;

  const pageNum = Number(first(searchParams.page));

  return {
    search: first(searchParams.search),
    category: first(searchParams.category),
    type: first(searchParams.type),
    complexity: first(searchParams.complexity),
    sortBy: sortBy ?? PROJECT_SORT_OPTIONS[0].sortBy,
    sortOrder: sortOrder ?? PROJECT_SORT_OPTIONS[0].sortOrder,
    page: Number.isFinite(pageNum) && pageNum > 0 ? pageNum : 1,
    limit: PROJECTS_PER_PAGE,
  };
};

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const params = parseParams(searchParams);

  return (
    <section className="section-shell relative overflow-hidden">
      {/* Ambient glow — blue/indigo, matching the home ProjectSection accent */}
      <div className="pointer-events-none absolute -top-20 -right-32 h-[520px] w-[520px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-indigo-400/6 dark:bg-indigo-500/8 blur-3xl" />

      <div className="section-container relative">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="section-eyebrow text-blue-600 dark:text-blue-400">
            {"// work"}
          </span>
          <h2 className="section-heading mt-3">Projects</h2>
          <div className="section-rule mx-auto bg-blue-500/70 md:mx-0" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
            A complete catalog of things I&apos;ve built — full-stack
            applications, APIs, and open-source tools. Filter by category, type,
            or complexity, or search for something specific.
          </p>
        </div>

        <Suspense fallback={null}>
          <ProjectFilters />
        </Suspense>

        {/* key on the params so navigation re-triggers the skeleton fallback */}
        <Suspense
          key={JSON.stringify(params)}
          fallback={<ProjectsGridSkeleton count={PROJECTS_PER_PAGE} />}
        >
          <ProjectResults params={params} />
        </Suspense>
      </div>
    </section>
  );
}
