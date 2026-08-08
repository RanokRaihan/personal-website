import Link from "next/link";

import type { ITool } from "@/constants/tools";

const ToolCard = ({ tool }: { tool: ITool }) => {
  const Icon = tool.icon;

  return (
    <div className="group relative">
      <Link
        href={tool.href}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        aria-label={tool.title}
      />
      <div className="flex flex-col items-center justify-center gap-4 aspect-square rounded-2xl border border-slate-200/80 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-6 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-emerald-500/10 group-hover:-translate-y-1.5 group-hover:border-emerald-500/30 dark:group-hover:border-emerald-500/30">
        <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30 transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
        </div>
        <span className="font-display text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 text-center leading-tight">
          {tool.title}
        </span>
      </div>
    </div>
  );
};

export default ToolCard;
