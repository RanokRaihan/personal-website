import { getAllProjectsAction } from "@/lib/actions/projectAction";
import { IProject } from "@/types";
import ProjectCard from "../home/ProjectCard";

// Async component to fetch and display projects
const ProjectsGrid = async () => {
  const result = await getAllProjectsAction();
  const projects: IProject[] = result.data || [];

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300">
          No projects found
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Check back soon for new projects!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project: IProject, index: number) => (
        <ProjectCard key={project._id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
