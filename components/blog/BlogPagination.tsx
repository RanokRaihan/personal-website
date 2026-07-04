"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { BlogListMeta } from "@/actions/blogAction";

interface BlogPaginationProps {
  meta: BlogListMeta;
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

const BlogPagination = ({ meta }: BlogPaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { page, totalPage } = meta;

  const hrefFor = useCallback(
    (target: number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (target <= 1) params.delete("page");
      else params.set("page", String(target));
      const query = params.toString();
      return query ? `${pathname}?${query}` : pathname;
    },
    [pathname, searchParams],
  );

  const goToPage = useCallback(
    (target: number) => router.push(hrefFor(target), { scroll: true }),
    [hrefFor, router],
  );

  if (totalPage <= 1) return null;

  const pages = buildPageList(page, totalPage);
  const isFirst = page <= 1;
  const isLast = page >= totalPage;

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={hrefFor(page - 1)}
            aria-disabled={isFirst}
            className={
              isFirst ? "pointer-events-none opacity-50" : "cursor-pointer"
            }
            onClick={(e) => {
              e.preventDefault();
              if (!isFirst) goToPage(page - 1);
            }}
          />
        </PaginationItem>

        {pages.map((p, i) =>
          p === "…" ? (
            <PaginationItem key={`gap-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href={hrefFor(p)}
                isActive={p === page}
                className={
                  p === page
                    ? "cursor-pointer border-blue-500/70 bg-blue-600 text-white hover:bg-blue-600 hover:text-white dark:bg-blue-600 dark:text-white dark:hover:bg-blue-600"
                    : "cursor-pointer"
                }
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            href={hrefFor(page + 1)}
            aria-disabled={isLast}
            className={
              isLast ? "pointer-events-none opacity-50" : "cursor-pointer"
            }
            onClick={(e) => {
              e.preventDefault();
              if (!isLast) goToPage(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
