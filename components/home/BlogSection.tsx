import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className=" py-4 mt-8">
      <div className="container mx-auto p-4 text-center space-y-6 ">
        <h2 className="mb-4">
          <span className="home-heading">Blogs</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Explore my latest blogs where I share insights, tutorials, and
          thoughts on various topics. Whether you&apos;re looking for tech tips
          or personal reflections, there&apos;s something for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <Button asChild size="lg" className="rounded-full" variant="green">
          <Link href="/blogs">
            Read All Blogs <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default BlogSection;
