import ProjectCard from "@/components/home/ProjectCard";

const ProjectPage = () => {
  return (
    <main className="pt-16">
      <h1 className="text-3xl font-bold text-center mt-10 py-10">
        <span className="home-heading">Projects</span>
      </h1>
      <div className="container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
};

export default ProjectPage;
