import ProjectContainer from "./ProjectContainer";

const ProjectSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900/50 dark:via-purple-900/20 dark:to-blue-900/30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore my latest work and creative solutions. Each project
            represents a unique challenge and showcases different aspects of
            modern web development.
          </p>
        </div>

        {/* Projects container */}
        <ProjectContainer />
      </div>
    </section>
  );
};

export default ProjectSection;
