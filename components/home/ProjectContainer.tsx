import { getFeaturedProjectsAction } from "@/lib/actions/projectAction";
import { IProject } from "@/types";
import ProjectCard from "./ProjectCard";

const ProjectContainer = async () => {
  const result = await getFeaturedProjectsAction();
  const projects: IProject[] = result.data || [];

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          No Featured Projects
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Check back soon for exciting new projects!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project._id || index}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProjectContainer;
