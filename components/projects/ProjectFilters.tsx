"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  PROJECT_CATEGORIES,
  PROJECT_COMPLEXITIES,
  PROJECT_SORT_OPTIONS,
  PROJECT_TYPES,
  type FilterOption,
} from "@/constants";

// Radix Select forbids empty-string values, so the "All" option uses a sentinel.
const ALL = "__all__";

// Matches a stored sortBy/sortOrder pair back to a named sort option.
const matchSortValue = (sortBy: string | null, sortOrder: string | null) => {
  const found = PROJECT_SORT_OPTIONS.find(
    (o) => o.sortBy === sortBy && o.sortOrder === sortOrder,
  );
  return found?.value ?? PROJECT_SORT_OPTIONS[0].value;
};

// ── Reusable labelled dropdown ────────────────────────────────────────────
const FilterSelect = ({
  label,
  options,
  value,
  onChange,
  className,
}: {
  label: string;
  options: FilterOption[];
  value: string | null;
  onChange: (value: string | undefined) => void;
  className?: string;
}) => (
  <Select
    value={value ?? ALL}
    onValueChange={(v) => onChange(v === ALL ? undefined : v)}
  >
    <SelectTrigger className={className} aria-label={label}>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value={ALL}>All {label}</SelectItem>
      {options.map((opt) => (
        <SelectItem key={opt.value} value={opt.value}>
          {opt.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

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

  const activeFilterCount =
    (activeCategory ? 1 : 0) +
    (activeType ? 1 : 0) +
    (activeComplexity ? 1 : 0);

  const hasActiveFilters =
    activeFilterCount > 0 ||
    !!urlSearch ||
    sortValue !== PROJECT_SORT_OPTIONS[0].value;

  const clearAll = () => {
    setSearchInput("");
    router.replace(pathname, { scroll: false });
  };

  // The three category/type/level dropdowns — shared by desktop row & mobile sheet.
  const filterSelects = (fullWidth = false) => {
    const width = fullWidth ? "w-full" : "w-[150px]";
    return (
      <>
        <FilterSelect
          label="Categories"
          options={PROJECT_CATEGORIES}
          value={activeCategory}
          onChange={(v) => applyParams({ category: v })}
          className={width}
        />
        <FilterSelect
          label="Types"
          options={PROJECT_TYPES}
          value={activeType}
          onChange={(v) => applyParams({ type: v })}
          className={width}
        />
        <FilterSelect
          label="Levels"
          options={PROJECT_COMPLEXITIES}
          value={activeComplexity}
          onChange={(v) => applyParams({ complexity: v })}
          className={width}
        />
      </>
    );
  };

  const sortSelect = (fullWidth = false) => (
    <Select value={sortValue} onValueChange={onSortChange}>
      <SelectTrigger
        className={fullWidth ? "w-full" : "w-[140px]"}
        aria-label="Sort projects"
      >
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
  );

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3">
        {/* Search — always visible, grows to fill the row */}
        <div className="relative flex-1">
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

        {/* Desktop — all filters inline on one row */}
        <div className="hidden items-center gap-3 lg:flex">
          {filterSelects()}
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />
          {sortSelect()}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-mono uppercase tracking-wider text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <X className="h-3.5 w-3.5" />
              Clear
            </button>
          )}
        </div>

        {/* Mobile / tablet — filters live in a slide-out sheet */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="relative gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden sm:inline">Filters</span>
                {activeFilterCount > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[11px] font-semibold text-white">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full flex-col gap-0 sm:max-w-sm"
            >
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>

              <div className="flex flex-1 flex-col gap-6 overflow-y-auto py-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Category
                  </span>
                  <FilterSelect
                    label="Categories"
                    options={PROJECT_CATEGORIES}
                    value={activeCategory}
                    onChange={(v) => applyParams({ category: v })}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Type
                  </span>
                  <FilterSelect
                    label="Types"
                    options={PROJECT_TYPES}
                    value={activeType}
                    onChange={(v) => applyParams({ type: v })}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Level
                  </span>
                  <FilterSelect
                    label="Levels"
                    options={PROJECT_COMPLEXITIES}
                    value={activeComplexity}
                    onChange={(v) => applyParams({ complexity: v })}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Sort by
                  </span>
                  {sortSelect(true)}
                </div>
              </div>

              <SheetFooter className="flex-row gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={clearAll}
                  disabled={!hasActiveFilters}
                >
                  Clear all
                </Button>
                <SheetClose asChild>
                  <Button variant="primary" className="flex-1">
                    Show results
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;
