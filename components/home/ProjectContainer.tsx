import { getFeaturedProjectsAction } from "@/actions/projectAction";
import ProjectCard from "./ProjectCard";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {result.map((project, index) => (
        <ProjectCard key={project._id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectContainer;
