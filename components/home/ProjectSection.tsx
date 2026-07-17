import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import ProjectContainer from "./ProjectContainer";

const ProjectSkeleton = () => (
  <div className="flex flex-col gap-20 md:gap-28">
    {Array.from({ length: 3 }).map((_, i) => {
      const imageFirst = i % 2 === 0;
      return (
        <div
          key={i}
          className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center"
        >
          <Skeleton
            className={`aspect-[4/3] md:aspect-[16/11] w-full md:w-1/2 rounded-2xl ${
              imageFirst ? "md:order-1" : "md:order-2"
            }`}
          />
          <div
            className={`w-full md:w-1/2 flex flex-col gap-3 ${
              imageFirst ? "md:order-2" : "md:order-1"
            }`}
          >
            <div className="flex gap-2">
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-5 w-20 rounded-full" />
            </div>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-5 w-1/2" />
            <div className="flex flex-col gap-2 mt-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <Skeleton key={j} className="h-6 w-16 rounded-full" />
              ))}
            </div>
            <div className="flex gap-3 mt-2">
              <Skeleton className="h-10 w-32 rounded-md" />
              <Skeleton className="h-10 w-32 rounded-md" />
            </div>
          </div>
        </div>
      );
    })}
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
