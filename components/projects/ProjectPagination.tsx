"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ProjectListMeta } from "@/actions/projectAction";

interface ProjectPaginationProps {
  meta: ProjectListMeta;
}

// Builds a compact page list with "…" gaps, e.g. [1, "…", 4, 5, 6, "…", 12].
const buildPageList = (current: number, total: number): (number | "…")[] => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: (number | "…")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push("…");
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < total - 1) pages.push("…");
  pages.push(total);
  return pages;
};

const ProjectPagination = ({ meta }: ProjectPaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { page, totalPage } = meta;

  const goToPage = useCallback(
    (target: number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (target <= 1) {
        params.delete("page");
      } else {
        params.set("page", String(target));
      }
      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: true });
    },
    [pathname, router, searchParams],
  );

  if (totalPage <= 1) return null;

  const pages = buildPageList(page, totalPage);

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex items-center justify-center gap-1.5"
    >
      <Button
        variant="outline"
        size="icon"
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => goToPage(page - 1)}
        className="h-9 w-9"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {pages.map((p, i) =>
        p === "…" ? (
          <span
            key={`gap-${i}`}
            className="px-2 text-sm text-slate-400 dark:text-slate-500 select-none"
          >
            …
          </span>
        ) : (
          <Button
            key={p}
            variant={p === page ? "default" : "outline"}
            size="icon"
            aria-label={`Page ${p}`}
            aria-current={p === page ? "page" : undefined}
            onClick={() => goToPage(p)}
            className={
              p === page
                ? "h-9 w-9 bg-blue-600 hover:bg-blue-600 text-white"
                : "h-9 w-9"
            }
          >
            {p}
          </Button>
        ),
      )}

      <Button
        variant="outline"
        size="icon"
        aria-label="Next page"
        disabled={page >= totalPage}
        onClick={() => goToPage(page + 1)}
        className="h-9 w-9"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
};

export default ProjectPagination;
