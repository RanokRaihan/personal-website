import { FileX } from "lucide-react";

import {
  getAllBlogsAction,
  type BlogListParams,
} from "@/actions/blogAction";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

interface BlogResultsProps {
  params: BlogListParams;
}

const EmptyState = ({ title, message }: { title: string; message: string }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/30 py-20 text-center">
    <FileX className="mb-4 h-10 w-10 text-slate-400 dark:text-slate-500" />
    <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
      {title}
    </p>
    <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
      {message}
    </p>
  </div>
);

const BlogResults = async ({ params }: BlogResultsProps) => {
  const result = await getAllBlogsAction(params);

  if ("success" in result) {
    return (
      <EmptyState
        title="Couldn't load posts"
        message={
          result.message ||
          "Something went wrong reaching the server. Please try again in a moment."
        }
      />
    );
  }

  const { blogs, meta } = result;

  if (blogs.length === 0) {
    return (
      <EmptyState
        title="No posts found"
        message="No posts match your search. Try a different keyword or clear the search."
      />
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <div
            key={blog._id}
            className="animate-fade-in"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
          >
            <BlogCard blog={blog} index={i} />
          </div>
        ))}
      </div>

      <BlogPagination meta={meta} />
    </div>
  );
};

export default BlogResults;
