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
import { BLOG_SORT_OPTIONS } from "@/constants";

// Matches a stored sortBy/sortOrder pair back to a named sort option.
const matchSortValue = (sortBy: string | null, sortOrder: string | null) => {
  const found = BLOG_SORT_OPTIONS.find(
    (o) => o.sortBy === sortBy && o.sortOrder === sortOrder,
  );
  return found?.value ?? BLOG_SORT_OPTIONS[0].value;
};

const BlogFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sortValue = matchSortValue(
    searchParams.get("sortBy"),
    searchParams.get("sortOrder"),
  );

  // Apply param updates; any filter change resets pagination to page 1.
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
    const option = BLOG_SORT_OPTIONS.find((o) => o.value === value);
    if (option)
      applyParams({ sortBy: option.sortBy, sortOrder: option.sortOrder });
  };

  // ── Debounced search ──────────────────────────────────────────────────
  const urlSearch = searchParams.get("search") ?? "";
  const [searchInput, setSearchInput] = useState(urlSearch);
  const isFirstRender = useRef(true);

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
    !!urlSearch || sortValue !== BLOG_SORT_OPTIONS[0].value;

  const clearAll = () => {
    setSearchInput("");
    router.replace(pathname, { scroll: false });
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Search — always visible, grows to fill the row */}
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
          <Input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search posts…"
            aria-label="Search posts"
            className="pl-9"
          />
        </div>

        <div className="flex items-center gap-3">
          <Select value={sortValue} onValueChange={onSortChange}>
            <SelectTrigger
              className="w-[150px]"
              aria-label="Sort posts"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {BLOG_SORT_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

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
      </div>
    </div>
  );
};

export default BlogFilters;
