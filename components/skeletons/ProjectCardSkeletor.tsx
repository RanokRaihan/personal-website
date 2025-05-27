import { Skeleton } from "../ui/skeleton";

const ProjectCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-slate-800/80 shadow-lg rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      <div className="relative">
        <Skeleton className="h-48 w-full" />
      </div>
      <div className="p-5 flex flex-col flex-grow space-y-4">
        <Skeleton className="h-7 w-3/4" />
        <Skeleton className="h-20 w-full" />
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
