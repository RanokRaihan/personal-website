import { Suspense } from "react";
import SkillContainer from "./SkillContainer";

const SkillSkeleton = () => (
  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
    {/* Left: tab pills + grid */}
    <div className="w-full lg:w-[58%]">
      <div className="flex gap-2 mb-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-7 w-16 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-[88px] rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse"
          />
        ))}
      </div>
    </div>
    {/* Right: constellation placeholder */}
    <div className="hidden lg:flex lg:w-[42%] items-center justify-center">
      <div className="w-[320px] h-[320px] rounded-full border border-slate-100 dark:border-slate-800 animate-pulse" />
    </div>
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
