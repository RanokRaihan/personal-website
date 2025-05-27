import ProjectsGrid from "@/components/projectDetails/ProjectGrid";
import CardSkeletonContainer from "@/components/skeletons/CardSkeletonContainer";
import { Suspense } from "react";

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="home-heading">My Projects</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of projects showcasing my skills and experience
            as a developer. Each project represents a unique challenge and
            solution.
          </p>
        </div>

        <Suspense fallback={<CardSkeletonContainer count={6} />}>
          <ProjectsGrid />
        </Suspense>
      </div>
    </main>
  );
}
