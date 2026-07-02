import { Suspense } from "react";
import SkillContainer from "./SkillContainer";

const SkillSkeleton = () => (
  <div className="space-y-10">
    {[6, 5, 4].map((count, gi) => (
      <div key={gi}>
        <div className="h-3 w-20 rounded bg-slate-100 dark:bg-slate-800 animate-pulse mb-4" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const SkillSection = () => {
  return (
    <section className="section-shell relative overflow-hidden">
      {/* Single emerald ambient glow — mirrors HeroSection */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-emerald-400/10 dark:bg-emerald-500/10 blur-3xl" />

      <div className="section-container relative">
        <div className="mb-16">
          <p className="section-eyebrow mb-3">Technical Skills</p>
          <h2 className="section-heading">My Tech Stack</h2>
          <div className="section-rule" />
          <p className="mt-6 max-w-xl text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A curated set of tools and technologies I&apos;ve built real projects
            with — spanning languages, frameworks, databases, and DevOps.
          </p>
        </div>

        <Suspense fallback={<SkillSkeleton />}>
          <SkillContainer />
        </Suspense>
      </div>
    </section>
  );
};

export default SkillSection;
