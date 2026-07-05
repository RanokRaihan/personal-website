import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, Eye } from "lucide-react";

import { getBlogBySlugAction } from "@/actions/blogAction";
import Markdown from "@/components/blog/Markdown";
import type { IBlog } from "@/types";

interface BlogDetailPageProps {
  params: { slug: string };
}

const isError = (
  result: IBlog | { success: false },
): result is { success: false } => "success" in result;

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const result = await getBlogBySlugAction(params.slug);
  if (isError(result)) {
    return { title: "Blog · Ranok Raihan" };
  }
  const ogImage = result.ogImage || result.coverImage;
  return {
    title: result.metaTitle || `${result.title} · Ranok Raihan`,
    description: result.metaDescription || result.summary,
    openGraph: ogImage ? { images: [{ url: ogImage }] } : undefined,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const result = await getBlogBySlugAction(params.slug);

  if (isError(result)) {
    notFound();
  }

  const blog = result as IBlog;
  const {
    title,
    summary,
    content,
    coverImage,
    tags,
    readTime,
    views,
    publishedAt,
    createdAt,
  } = blog;

  const published = formatDate(publishedAt ?? createdAt);

  return (
    <section className="section-shell relative overflow-hidden">
      {/* Ambient glow — blue/indigo site accent */}
      <div className="pointer-events-none absolute -top-20 -right-32 h-[520px] w-[520px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-3xl" />

      <div className="section-container relative">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4" />
          All posts
        </Link>

        <article className="mx-auto mt-8 max-w-3xl">
          {/* Title + meta */}
          <header>
            {tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-sm text-blue-600 dark:text-blue-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="section-heading">{title}</h1>

            {summary && (
              <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {summary}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
              {published && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {published}
                </span>
              )}
              {typeof readTime === "number" && readTime > 0 && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {readTime} min read
                </span>
              )}
              {typeof views === "number" && (
                <span className="inline-flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  {views.toLocaleString("en-US")} views
                </span>
              )}
            </div>
          </header>

          {/* Cover image */}
          {coverImage && (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 dark:border-slate-700/60 dark:bg-slate-800">
              <Image
                src={coverImage}
                alt={title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="mt-10">
            <Markdown content={content} />
          </div>
        </article>
      </div>
    </section>
  );
}
