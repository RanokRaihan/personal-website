import type { Metadata } from "next";
import { Suspense } from "react";

import type { BlogListParams } from "@/actions/blogAction";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogResults from "@/components/blog/BlogResults";
import BlogsGridSkeleton from "@/components/blog/BlogsGridSkeleton";
import { BLOG_SORT_OPTIONS, BLOGS_PER_PAGE } from "@/constants";

export const metadata: Metadata = {
  title: "Blog · Ranok Raihan",
  description:
    "Articles and notes by Ranok Raihan on full-stack development, TypeScript, React, Node.js, and the craft of building for the web.",
};

// Reads searchParams, so this route renders dynamically per request.
export const dynamic = "force-dynamic";

type PageSearchParams = {
  [key: string]: string | string[] | undefined;
};

const first = (value: string | string[] | undefined): string | undefined =>
  Array.isArray(value) ? value[0] : value;

const parseParams = (searchParams: PageSearchParams): BlogListParams => {
  const sortBy = first(searchParams.sortBy);
  const sortOrder = first(searchParams.sortOrder) as
    | "asc"
    | "desc"
    | undefined;

  const pageNum = Number(first(searchParams.page));

  return {
    search: first(searchParams.search),
    sortBy: sortBy ?? BLOG_SORT_OPTIONS[0].sortBy,
    sortOrder: sortOrder ?? BLOG_SORT_OPTIONS[0].sortOrder,
    page: Number.isFinite(pageNum) && pageNum > 0 ? pageNum : 1,
    limit: BLOGS_PER_PAGE,
  };
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const params = parseParams(searchParams);

  return (
    <section className="section-shell relative overflow-hidden">
      {/* Ambient glow — blue/indigo, matching the site accent */}
      <div className="pointer-events-none absolute -top-20 -right-32 h-[520px] w-[520px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-indigo-400/6 dark:bg-indigo-500/8 blur-3xl" />

      <div className="section-container relative">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="section-eyebrow text-blue-600 dark:text-blue-400">
            {"// writing"}
          </span>
          <h2 className="section-heading mt-3">Blog</h2>
          <div className="section-rule mx-auto bg-blue-500/70 md:mx-0" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
            Articles and notes on full-stack development, TypeScript, and the
            craft of building for the web. Search for a topic or sort by what&apos;s
            newest and most read.
          </p>
        </div>

        <Suspense fallback={null}>
          <BlogFilters />
        </Suspense>

        {/* key on the params so navigation re-triggers the skeleton fallback */}
        <Suspense
          key={JSON.stringify(params)}
          fallback={<BlogsGridSkeleton count={BLOGS_PER_PAGE} />}
        >
          <BlogResults params={params} />
        </Suspense>
      </div>
    </section>
  );
}
