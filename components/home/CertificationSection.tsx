import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import CertificationContainer from "./CertificationContainer";

const CertificationSkeleton = () => (
  <div className="flex gap-6 overflow-hidden pb-4 -mx-4 px-4">
    {Array.from({ length: 3 }).map((_, i) => (
      <div
        key={i}
        className="w-[300px] sm:w-[340px] shrink-0 rounded-xl border border-slate-200/80 bg-white p-6 dark:border-slate-700/60 dark:bg-slate-800/60"
      >
        <div className="flex items-start gap-3">
          <Skeleton className="h-11 w-11 shrink-0 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-3 w-16" />
        </div>
        <div className="mt-4 flex gap-3 border-t border-slate-100 pt-3 dark:border-slate-700/50">
          <Skeleton className="h-4 w-14" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    ))}
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
