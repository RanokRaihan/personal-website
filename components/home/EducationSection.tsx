import { ArrowRightLeft, GraduationCap } from "lucide-react";
import React from "react";

const EducationSection: React.FC = () => {
  return (
    <section className="section-shell bg-slate-50/60 dark:bg-white/[0.02]">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-14">
          <span className="section-eyebrow">{"// academics"}</span>
          <h2 className="section-heading mt-3">Formal Education</h2>
          <div className="section-rule" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/60">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <GraduationCap className="h-4 w-4" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em]">
                Degree
              </h3>
            </div>
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
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <ArrowRightLeft className="h-4 w-4" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em]">
                The pivot
              </h3>
            </div>
            <h4 className="mt-4 font-display text-lg font-semibold text-slate-900 dark:text-slate-50">
              From physics to programming
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              My academic background is in physics, but I found my craft in
              programming. The analytical thinking I built studying physics
              shapes how I approach engineering today — and I&apos;ve since gone
              all-in on web technologies through self-study and hands-on project
              work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
