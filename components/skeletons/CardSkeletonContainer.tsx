import ProjectCardSkeleton from "./ProjectCardSkeletor";

const CardSkeletonContainer = ({ count }: { count: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default CardSkeletonContainer;
