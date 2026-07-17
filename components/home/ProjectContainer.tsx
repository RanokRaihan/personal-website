import { getFeaturedProjectsAction } from "@/actions/projectAction";
import FeaturedProjectShowcase from "./FeaturedProjectShowcase";

const ProjectContainer = async () => {
  const result = await getFeaturedProjectsAction();

  if (!Array.isArray(result)) {
    return (
      <p className="text-center text-slate-500 dark:text-slate-400 text-sm">
        Projects could not be loaded. Please try again later.
      </p>
    );
  }

  if (result.length === 0) {
    return (
      <p className="text-center text-slate-500 dark:text-slate-400">
        No featured projects available yet. Check back soon!
      </p>
    );
  }

  const featured = result.slice(0, 3);

  return (
    <div className="flex flex-col gap-20 md:gap-28">
      {featured.map((project, index) => (
        <FeaturedProjectShowcase key={project._id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectContainer;
