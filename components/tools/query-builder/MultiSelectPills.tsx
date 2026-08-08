"use client";

import { cn } from "@/lib/utils";
import type { QueryBuilderOption } from "@/lib/linkedinQueryBuilder";

interface MultiSelectPillsProps {
  options: QueryBuilderOption[];
  selected: string[];
  onChange: (values: string[]) => void;
}

const MultiSelectPills = ({ options, selected, onChange }: MultiSelectPillsProps) => {
  const toggle = (value: string) => {
    onChange(selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = selected.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => toggle(option.value)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950",
              active
                ? "border-transparent bg-emerald-500 text-white hover:bg-emerald-500/90"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default MultiSelectPills;
