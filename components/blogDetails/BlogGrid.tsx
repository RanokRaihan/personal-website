import { getAllBlogAction } from "@/lib/actions/blogAction";
import { IBlog } from "@/types";
import BlogCard from "../home/BlogCard";

// Async component to fetch and display blogs
const BlogGrid = async () => {
  const result = await getAllBlogAction();
  const blogs: IBlog[] = result.data || [];

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300">
          No blogs found
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Check back soon for new blogs!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog: IBlog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogGrid;
