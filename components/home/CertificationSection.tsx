import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import CertificationContainer from "./CertificationContainer";

const CertificationSkeleton = () => (
  <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-4 top-1 bottom-1 w-px bg-slate-200 dark:bg-slate-700 sm:left-6 md:left-8"
      />
      <div className="space-y-10 sm:space-y-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="relative pl-12 sm:pl-16 md:pl-20">
            <Skeleton className="absolute left-4 top-1 h-8 w-8 -translate-x-1/2 rounded-full sm:left-6 md:left-8" />
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <Skeleton className="h-32 w-full max-w-[220px] rounded-lg" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-5 w-24 rounded-full" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-6">
      <Skeleton className="h-36 w-full rounded-2xl" />
      <Skeleton className="h-28 w-full rounded-2xl" />
    </div>
  </div>
);

const CertificationSection = () => {
  return (
    <section className="section-shell relative overflow-hidden">
      {/* Ambient glow — amber/gold to distinguish from Skills' emerald and Projects' blue/indigo */}
      <div className="pointer-events-none absolute top-0 -left-32 h-[420px] w-[420px] rounded-full bg-amber-400/8 dark:bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-orange-400/6 dark:bg-orange-500/8 blur-3xl" />

      <div className="section-container relative">
        <div className="mb-16">
          <p className="section-eyebrow mb-3">Credentials</p>
          <h2 className="section-heading">Certifications</h2>
          <div className="section-rule" />
          <p className="mt-6 max-w-xl text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Credentials that back up the skills above — earned through
            focused study and verified by the issuing organizations.
          </p>
        </div>

        <Suspense fallback={<CertificationSkeleton />}>
          <CertificationContainer />
        </Suspense>
      </div>
    </section>
  );
};

export default CertificationSection;
