import React from "react";

const certifications = [
  {
    title: "Full-Stack Web Development",
    subtitle: "MERN Stack Certification",
    description:
      "Comprehensive training in React, Node.js, Express, and MongoDB.",
  },
  {
    title: "JavaScript & TypeScript Mastery",
    subtitle: "Advanced Programming Concepts",
    description:
      "Deep dive into modern JavaScript, TypeScript, and related frameworks.",
  },
  {
    title: "Frontend Development Specialization",
    subtitle: "React & Next.js",
    description:
      "Building responsive, accessible, and performant user interfaces.",
  },
];

const EducationSection: React.FC = () => {
  return (
    <section className="section-shell bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-14">
          <span className="section-eyebrow">// background</span>
          <h2 className="section-heading mt-3">Education &amp; Certifications</h2>
          <div className="section-rule" />
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Formal education + journey (left) */}
          <div className="space-y-8 md:col-span-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/60">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                Formal education
              </h3>
              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-50">
                    BSc in Physics
                  </h4>
                  <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    Graduated
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  National University, Bangladesh
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Studied fundamental and advanced concepts in physics while
                  building strong analytical and problem-solving skills.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/60">
              <h3 className="font-display text-base font-semibold text-slate-900 dark:text-slate-50">
                From physics to programming
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                My academic background is in physics, but I found my craft in
                programming. The analytical thinking I built studying physics
                shapes how I approach engineering today — and I&apos;ve since
                gone all-in on web technologies through self-study,
                certifications, and hands-on project work.
              </p>
            </div>
          </div>

          {/* Certifications timeline (right) */}
          <div className="md:col-span-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 dark:border-white/10 dark:bg-slate-900/60">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                Certifications
              </h3>
              <ol className="mt-6 space-y-6 border-l border-slate-200 dark:border-white/10">
                {certifications.map((cert) => (
                  <li key={cert.title} className="relative pl-6">
                    <span
                      className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />
                    <h4 className="font-display text-base font-semibold text-slate-900 dark:text-slate-50">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {cert.subtitle}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {cert.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
