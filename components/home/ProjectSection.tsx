import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import ProjectContainer from "./ProjectContainer";

const ProjectSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 3 }).map((_, i) => (
      <div
        key={i}
        className="bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 rounded-xl overflow-hidden flex flex-col"
      >
        <Skeleton className="h-48 w-full rounded-none" />
        <div className="p-5 flex flex-col gap-3 flex-1">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-14 w-full" />
          <div className="flex gap-1.5">
            <Skeleton className="h-5 w-14 rounded-full" />
            <Skeleton className="h-5 w-18 rounded-full" />
            <Skeleton className="h-5 w-12 rounded-full" />
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
            <Skeleton className="h-4 w-20" />
            <div className="flex gap-2">
              <Skeleton className="h-7 w-7 rounded-md" />
              <Skeleton className="h-7 w-7 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ProjectSection = () => {
  return (
    <section className="section-shell relative overflow-hidden">
      {/* Ambient glow — blue/indigo to distinguish from SkillSection's emerald */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-32 h-[520px] w-[520px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-indigo-400/6 dark:bg-indigo-500/8 blur-3xl" />

      <div className="section-container relative">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="section-eyebrow mb-3">Work</p>
            <h2 className="section-heading">Featured Projects</h2>
            <div className="section-rule" />
            <p className="mt-6 max-w-xl text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              A selection of projects I&apos;ve built — spanning full-stack
              applications, APIs, and open-source tools. Each one reflects
              real-world requirements and deliberate technical decisions.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="shrink-0 self-start sm:self-auto border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <Suspense fallback={<ProjectSkeleton />}>
          <ProjectContainer />
        </Suspense>
      </div>
    </section>
  );
};

export default ProjectSection;
