import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section className="bg-emerald-100/25 dark:bg-slate-950/25 py-4">
      <div className="container mx-auto p-4 text-center space-y-14 ">
        <h2 className="mb-4">
          <span className="home-heading">Featured Projects</span>
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <ProjectCard />
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
