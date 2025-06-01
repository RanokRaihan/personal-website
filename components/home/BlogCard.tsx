import { IBlog } from "@/types/blogType";
import { ArrowRightIcon, ClockIcon } from "@radix-ui/react-icons";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface BlogCardProps {
  blog: IBlog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const {
    _id,
    title,
    summary,
    thumbnail,
    category,
    tags,
    author,
    readTime,
    isFeatured,
    status,
    createdAt,
  } = blog;

  // Format the date
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white dark:bg-slate-800/80 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      {/* Image Container with Featured Badge and Status */}
      <div className="relative">
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-amber-500 dark:bg-amber-200 hover:bg-amber-600 text-amber-950 dark:text-amber-900 flex items-center gap-1 px-2">
              <span className="sr-only">Featured</span>✦ Featured
            </Badge>
          </div>
        )}

        {/* Status Badge */}
        {status && (
          <div className="absolute top-3 right-3 z-10">
            <Badge
              variant="outline"
              className={`border ${
                status === "published"
                  ? "border-emerald-500 dark:border-emerald-600 bg-emerald-100 text-emerald-700 dark:bg-emerald-100 dark:text-emerald-700"
                  : "border-purple-500 dark:border-purple-600 bg-purple-100 text-purple-700 dark:bg-purple-100 dark:text-purple-700"
              } capitalize`}
            >
              {status}
            </Badge>
          </div>
        )}

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
        {/* Category */}
        <div className="mb-2">
          <Badge
            variant="secondary"
            className="capitalize text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400"
          >
            {category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100 line-clamp-2">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
          {summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs capitalize text-gray-600 dark:text-gray-300"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs text-gray-600 dark:text-gray-300"
            >
              +{tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Footer with metadata and link */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              {formattedDate}
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
              <ClockIcon className="h-3.5 w-3.5 mr-1" />
              {readTime} min read
            </div>
          </div>

          <Link
            href={`/blogs/${_id}`}
            className="text-sm font-medium text-emerald-600 dark:text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center gap-1 duration-200 group"
          >
            Read More
            <ArrowRightIcon className="h-3.5 w-3.5 transform transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
