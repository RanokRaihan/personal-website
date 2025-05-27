import BlogGrid from "@/components/blogDetails/BlogGrid";
import CardSkeletonContainer from "@/components/skeletons/CardSkeletonContainer";
import { Suspense } from "react";

export default function BlogsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="home-heading">My Blogs</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest blogs where I share insights, tutorials, and
            thoughts on various topics. Whether you&apos;re looking for tech
            tips or personal reflections, there&apos;s something for everyone.
          </p>
        </div>

        <Suspense fallback={<CardSkeletonContainer count={6} />}>
          <BlogGrid />
        </Suspense>
      </div>
    </main>
  );
}
