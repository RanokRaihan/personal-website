import { Skeleton } from "@/components/ui/skeleton";

interface BlogsGridSkeletonProps {
  count?: number;
}

const BlogsGridSkeleton = ({ count = 9 }: BlogsGridSkeletonProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 rounded-xl overflow-hidden flex flex-col"
      >
        <Skeleton className="h-48 w-full rounded-none" />
        <div className="p-5 flex flex-col gap-3 flex-1">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-14 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default BlogsGridSkeleton;
