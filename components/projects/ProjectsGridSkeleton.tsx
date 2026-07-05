import { Skeleton } from "@/components/ui/skeleton";

interface ProjectsGridSkeletonProps {
  count?: number;
}

const ProjectsGridSkeleton = ({ count = 9 }: ProjectsGridSkeletonProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
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

export default ProjectsGridSkeleton;
