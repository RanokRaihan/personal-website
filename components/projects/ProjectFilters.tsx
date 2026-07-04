"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  PROJECT_CATEGORIES,
  PROJECT_COMPLEXITIES,
  PROJECT_SORT_OPTIONS,
  PROJECT_TYPES,
  type FilterOption,
} from "@/constants";

const pillBase =
  "px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200";
const pillActive = "bg-blue-600 text-white shadow-sm shadow-blue-500/20";
const pillIdle =
  "bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-400/40 hover:text-slate-800 dark:hover:text-slate-200";

// Matches a stored sortBy/sortOrder pair back to a named sort option.
const matchSortValue = (sortBy: string | null, sortOrder: string | null) => {
  const found = PROJECT_SORT_OPTIONS.find(
    (o) => o.sortBy === sortBy && o.sortOrder === sortOrder,
  );
  return found?.value ?? PROJECT_SORT_OPTIONS[0].value;
};

const ProjectFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category");
  const activeType = searchParams.get("type");
  const activeComplexity = searchParams.get("complexity");
  const sortValue = matchSortValue(
    searchParams.get("sortBy"),
    searchParams.get("sortOrder"),
  );

  // Apply a set of param updates; any filter change resets pagination to page 1.
  const applyParams = useCallback(
    (updates: Record<string, string | undefined>) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(updates)) {
        if (value) params.set(key, value);
        else params.delete(key);
      }
      params.delete("page");
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  // Toggle a single-select filter group (clicking the active value clears it).
  const toggleFilter = (key: string, value: string, current: string | null) =>
    applyParams({ [key]: current === value ? undefined : value });

  const onSortChange = (value: string) => {
    const option = PROJECT_SORT_OPTIONS.find((o) => o.value === value);
    if (option)
      applyParams({ sortBy: option.sortBy, sortOrder: option.sortOrder });
  };

  // ── Debounced search ──────────────────────────────────────────────────
  const urlSearch = searchParams.get("search") ?? "";
  const [searchInput, setSearchInput] = useState(urlSearch);
  const isFirstRender = useRef(true);

  // Keep the input in sync when the URL changes externally (e.g. back button).
  useEffect(() => {
    setSearchInput(urlSearch);
  }, [urlSearch]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const trimmed = searchInput.trim();
    if (trimmed === urlSearch) return;
    const timer = setTimeout(() => {
      applyParams({ search: trimmed || undefined });
    }, 350);
    return () => clearTimeout(timer);
    // applyParams/urlSearch are intentionally excluded to debounce only on input
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const hasActiveFilters =
    !!activeCategory ||
    !!activeType ||
    !!activeComplexity ||
    !!urlSearch ||
    sortValue !== PROJECT_SORT_OPTIONS[0].value;

  const clearAll = () => {
    setSearchInput("");
    router.replace(pathname, { scroll: false });
  };

  const renderGroup = (
    label: string,
    key: string,
    options: FilterOption[],
    current: string | null,
  ) => (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {label}
      </span>
      <button
        type="button"
        onClick={() => applyParams({ [key]: undefined })}
        className={`${pillBase} ${!current ? pillActive : pillIdle}`}
      >
        All
      </button>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => toggleFilter(key, opt.value, current)}
          className={`${pillBase} ${
            current === opt.value ? pillActive : pillIdle
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="mb-12 flex flex-col gap-5">
      {/* Search + sort row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
          <Input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects"
            className="pl-9"
          />
        </div>

        <div className="flex items-center gap-3">
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
              Clear
            </button>
          )}
          <Select value={sortValue} onValueChange={onSortChange}>
            <SelectTrigger className="w-[140px]" aria-label="Sort projects">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PROJECT_SORT_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Filter groups */}
      <div className="flex flex-col gap-3">
        {renderGroup(
          "Category",
          "category",
          PROJECT_CATEGORIES,
          activeCategory,
        )}
        {renderGroup("Type", "type", PROJECT_TYPES, activeType)}
        {renderGroup(
          "Level",
          "complexity",
          PROJECT_COMPLEXITIES,
          activeComplexity,
        )}
      </div>
    </div>
  );
};

export default ProjectFilters;
