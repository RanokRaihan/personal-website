import { getFeaturedProjectsAction } from "@/lib/actions/projectAction";
import { IProject } from "@/types";
import ProjectCard from "./ProjectCard";

const ProjectContainer = async () => {
  const result = await getFeaturedProjectsAction();
  const projects = result.data || [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects?.length > 0 ? (
        projects
          .slice() // create a shallow copy to avoid mutating original
          .sort(
            (a: IProject, b: IProject) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          )
          .slice(0, 3)
          .map((project: IProject) => (
            <ProjectCard project={project} key={project._id} />
          ))
      ) : (
        <p className="text-center text-gray-500">
          No featured projects available.
        </p>
      )}
    </div>
  );
};

export default ProjectContainer;
