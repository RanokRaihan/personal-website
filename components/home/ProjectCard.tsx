import { Badge } from "@/components/ui/badge";
import { IProject } from "@/types/projectType";
import { ArrowRightIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    _id,
    title,
    summary,
    technologies,
    thumbnail,
    isFeatured,
    status,
    createdAt,
  } = project;

  // Format the date - fallback to current date if createdAt is undefined
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : new Date().toLocaleDateString();

  return (
    <div className="bg-white dark:bg-slate-800/80 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      {/* Image Container with Featured Badge */}
      <div className="relative">
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-amber-500 dark:bg-amber-200 hover:bg-amber-600 text-amber-950 dark:text-amber-900 flex items-center gap-1 px-2">
              <StarFilledIcon className="h-3 w-3" />
              Featured
            </Badge>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-10">
          <Badge
            variant="outline"
            className={`border ${
              status === "completed"
                ? "border-emerald-500 dark:border-emerald-600 bg-emerald-100 text-emerald-700 dark:bg-emerald-100 dark:text-emerald-700"
                : status === "in-progress"
                ? "border-blue-500 dark:border-blue-600 bg-blue-100 text-blue-700 dark:bg-blue-100 dark:text-blue-700"
                : "border-purple-500 dark:border-purple-600 bg-purple-100 text-purple-700 dark:bg-purple-100 dark:text-purple-700"
            } capitalize`}
          >
            {status}
          </Badge>
        </div>

        {/* Image */}
        <div className="overflow-hidden h-60">
          <Image
            src={thumbnail || "/assets/images/og-image.png"}
            width={500}
            height={300}
            alt={title}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {summary}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="capitalize text-xs bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 text-indigo-700 dark:text-indigo-400"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Footer with Date and Link */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            {formattedDate}
          </div>

          <Link
            href={`/projects/${_id}`}
            className="text-sm font-medium text-emerald-600 dark:text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center gap-1 duration-200 group"
          >
            View Details
            <ArrowRightIcon className="size-3.5 transform transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
