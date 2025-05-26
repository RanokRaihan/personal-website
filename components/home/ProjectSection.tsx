import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section className="bg-emerald-100/25 dark:bg-slate-950/25 py-4 mt-8">
      <div className="container mx-auto p-4 text-center space-y-6 ">
        <h2 className="mb-4">
          <span className="home-heading">Featured Projects</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Here are some of my featured projects that showcase my skills and
          creativity. Each project reflects my dedication to building
          user-friendly and efficient applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <Button asChild size="lg" className="rounded-full" variant="green">
          <Link href="/projects">
            View All Projects <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ProjectSection;
