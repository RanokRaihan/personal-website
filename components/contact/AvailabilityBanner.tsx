import { Clock, MapPin } from "lucide-react";

// Quiet status line that answers a recruiter's two silent questions
// ("is he available?" / "will he reply?") before they open the form.
const AvailabilityBanner = () => {
  return (
    <div className="flex flex-col items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] px-5 py-4 sm:flex-row sm:items-center sm:gap-6 dark:border-emerald-400/20 dark:bg-emerald-400/[0.06]">
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          Actively open to full-time roles
        </span>
      </div>

      <span className="hidden h-4 w-px bg-emerald-500/20 sm:block" />

      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-slate-600 dark:text-slate-300">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          Responds within 24 hours
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          Havertown, PA · open to remote &amp; Philadelphia-area hybrid
        </span>
      </div>
    </div>
  );
};

export default AvailabilityBanner;
