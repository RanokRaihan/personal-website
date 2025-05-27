import { getAllBlogAction } from "@/lib/actions/blogAction";
import { IBlog } from "@/types";
import BlogCard from "./BlogCard";

const BlogContainer = async () => {
  const result = await getAllBlogAction();
  const blogs = result.data || [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {blogs?.length > 0 ? (
        blogs
          ?.slice(0, 3)
          .map((blog: IBlog) => <BlogCard blog={blog} key={blog._id} />)
      ) : (
        <p className="text-center text-gray-500">
          No featured blogs available.
        </p>
      )}
    </div>
  );
};

export default BlogContainer;
