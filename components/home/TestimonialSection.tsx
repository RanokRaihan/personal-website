import { Suspense } from "react";
import TestimonialContainer from "./TestimonialContainer";
import WriteTestimonialDialog from "./WriteTestimonialDialog";

const TestimonialSkeleton = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 3 }).map((_, i) => (
      <div
        key={i}
        className="h-56 animate-pulse rounded-2xl border border-slate-100 bg-slate-100 dark:border-white/5 dark:bg-slate-800"
      />
    ))}
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 right-0 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/10" />

      <div className="section-container relative">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-eyebrow">{"// testimonials"}</span>
            <h2 className="section-heading mt-3">Words from others</h2>
            <div className="section-rule" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
              Kind words from people I&apos;ve worked, studied, and built things
              with.
            </p>
          </div>
          <WriteTestimonialDialog />
        </div>

        <Suspense fallback={<TestimonialSkeleton />}>
          <TestimonialContainer />
        </Suspense>
      </div>
    </section>
  );
};

export default TestimonialSection;
