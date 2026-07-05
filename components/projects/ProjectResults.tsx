import { FolderX } from "lucide-react";

import {
  getAllProjectsAction,
  type ProjectListParams,
} from "@/actions/projectAction";
import ProjectCard from "@/components/home/ProjectCard";
import ProjectPagination from "./ProjectPagination";

interface ProjectResultsProps {
  params: ProjectListParams;
}

const EmptyState = ({ title, message }: { title: string; message: string }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/30 py-20 text-center">
    <FolderX className="mb-4 h-10 w-10 text-slate-400 dark:text-slate-500" />
    <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
      {title}
    </p>
    <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
      {message}
    </p>
  </div>
);

const ProjectResults = async ({ params }: ProjectResultsProps) => {
  const result = await getAllProjectsAction(params);

  if ("success" in result) {
    return (
      <EmptyState
        title="Couldn't load projects"
        message={
          result.message ||
          "Something went wrong reaching the server. Please try again in a moment."
        }
      />
    );
  }

  const { projects, meta } = result;

  if (projects.length === 0) {
    return (
      <EmptyState
        title="No projects found"
        message="No projects match your current filters. Try clearing a filter or adjusting your search."
      />
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="animate-fade-in"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
          >
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>

      <ProjectPagination meta={meta} />
    </div>
  );
};

export default ProjectResults;
