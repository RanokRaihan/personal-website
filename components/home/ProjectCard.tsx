import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IProject } from "@/types/projectType";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: IProject;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
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

  // Status colors
  const statusColors = {
    completed:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    "in-progress":
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    planned: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  };

  // Gradient colors for cards
  const gradients = [
    "from-blue-500/10 to-purple-500/10",
    "from-purple-500/10 to-pink-500/10",
    "from-pink-500/10 to-red-500/10",
    "from-green-500/10 to-blue-500/10",
    "from-yellow-500/10 to-orange-500/10",
    "from-indigo-500/10 to-purple-500/10",
  ];

  const cardGradient = gradients[index % gradients.length];

  return (
    <Link href={`/projects/${_id}`} className="group">
      <Card
        className={`h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 border-0 bg-gradient-to-br ${cardGradient} backdrop-blur-sm`}
      >
        {/* Image container */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={thumbnail || "/assets/images/placeholder-project.jpg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Overlay with status badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <Badge
              variant="secondary"
              className={`${statusColors[status]} border-0 font-medium capitalize`}
            >
              {status.replace("-", " ")}
            </Badge>
          </div>

          {/* Featured badge */}
          {isFeatured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 font-medium">
                ⭐ Featured
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
              {title}
            </h3>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {formattedDate}
          </p>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
            {summary}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies?.slice(0, 3).map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="outline"
                className="text-xs bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                {tech}
              </Badge>
            ))}
            {technologies && technologies.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400"
              >
                +{technologies.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
            View Project
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
