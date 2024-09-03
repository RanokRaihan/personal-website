import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className=" py-4">
      <div className="container mx-auto p-4 text-center space-y-14 ">
        <h2 className="mb-4">
          <span className="home-heading">Blogs</span>
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <BlogCard />
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
