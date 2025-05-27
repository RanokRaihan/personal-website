import React from "react";

const EducationSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="home-heading mb-10">Education & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formal Education */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Formal Education
            </h3>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Bachelor of Science in Physics
                </h4>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
                  Graduated
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                National University, Bangladesh
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Studied fundamental and advanced concepts in physics while
                developing strong analytical and problem-solving skills.
              </p>
            </div>
          </div>

          {/* Certifications & Additional Education */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Certifications
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Web Development Certification
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  Full-Stack Web Development
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Comprehensive training in MERN stack development, including
                  React, Node.js, Express, and MongoDB.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  JavaScript & TypeScript Mastery
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  Advanced Programming Concepts
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Deep dive into modern JavaScript, TypeScript, and related
                  frameworks.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Frontend Development Specialization
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  React & Next.js
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Building responsive, accessible, and performant user
                  interfaces with modern tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Transition Statement */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            My Journey from Physics to Programming
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            While my academic background is in Physics, I discovered a profound
            interest in programming and web development. The analytical thinking
            and problem-solving skills I developed during my physics studies
            have proven invaluable in my journey as a developer. I&apos;ve
            dedicated myself to mastering web technologies through self-study,
            certifications, and hands-on project work, allowing me to build
            robust, user-centric applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
