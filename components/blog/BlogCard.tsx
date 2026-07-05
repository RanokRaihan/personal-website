import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, Eye, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { IBlog } from "@/types";

interface BlogCardProps {
  blog: IBlog;
  index?: number;
}

const CARD_GLOWS = [
  "from-blue-500/[0.07] to-indigo-500/[0.07]",
  "from-violet-500/[0.07] to-purple-500/[0.07]",
  "from-indigo-500/[0.07] to-sky-500/[0.07]",
  "from-sky-500/[0.07] to-cyan-500/[0.07]",
  "from-purple-500/[0.07] to-pink-500/[0.07]",
  "from-cyan-500/[0.07] to-blue-500/[0.07]",
];

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

const BlogCard = ({ blog, index = 0 }: BlogCardProps) => {
  const {
    slug,
    title,
    summary,
    coverImage,
    tags,
    readTime,
    views,
    featured,
    publishedAt,
    createdAt,
  } = blog;

  const displayTags = tags.slice(0, 3);
  const overflowTags = tags.length - displayTags.length;
  const published = formatDate(publishedAt ?? createdAt);
  const cardGlow = CARD_GLOWS[index % CARD_GLOWS.length];

  return (
    /* Stretch-link card — the Link covers the whole card (z-0) while any
       interactive children sit in a relative z-10 layer. */
    <div className="group relative h-full">
      <Link
        href={`/blog/${slug}`}
        className="absolute inset-0 z-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        aria-label={`Read ${title}`}
      />

      <Card
        className={`h-full flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-700/60 bg-gradient-to-br ${cardGlow} bg-white dark:bg-slate-800/60 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/10 group-hover:-translate-y-1.5 pointer-events-none`}
      >
        {/* Cover image */}
        <div className="relative h-48 overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600">
              <FileText className="w-12 h-12" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-amber-400 hover:bg-amber-400 text-amber-950 border-0 text-xs font-semibold">
                ✦ Featured
              </Badge>
            </div>
          )}

          {typeof readTime === "number" && readTime > 0 && (
            <div className="absolute bottom-3 left-3">
              <Badge
                variant="outline"
                className="border-white/30 bg-black/40 text-white text-xs backdrop-blur-sm inline-flex items-center gap-1"
              >
                <Clock className="h-3 w-3" />
                {readTime} min read
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-2 pt-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="flex-1 pb-3">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
            {summary}
          </p>

          {displayTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {displayTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-400 dark:text-slate-500 font-mono"
                >
                  #{tag}
                </span>
              ))}
              {overflowTags > 0 && (
                <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                  +{overflowTags}
                </span>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="pt-0 pb-4 border-t border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center justify-between w-full pt-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              {published && (
                <>
                  <CalendarDays className="h-3.5 w-3.5" />
                  {published}
                </>
              )}
            </span>
            {typeof views === "number" && (
              <span className="inline-flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5" />
                {views.toLocaleString("en-US")}
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
