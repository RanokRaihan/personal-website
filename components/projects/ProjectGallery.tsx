"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images: string[];
  title: string;
  featured?: boolean;
}

const ProjectGallery = ({ images, title, featured }: ProjectGalleryProps) => {
  const [active, setActive] = useState(0);

  // Guard against an out-of-range index if the list somehow changes.
  const total = images.length;
  const index = Math.min(active, total - 1);
  const hasMultiple = total > 1;

  const goTo = (next: number) => setActive(((next % total) + total) % total);

  const go = (delta: 1 | -1) => goTo(index + delta);

  return (
    <div className="flex flex-col gap-3">
      {/* Main stage */}
      <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 dark:border-slate-700/60 dark:bg-slate-800">
        <Image
          src={images[index]}
          alt={`${title} — screenshot ${index + 1}`}
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
        />

        {featured && (
          <div className="absolute left-4 top-4">
            <span className="rounded-full border-0 bg-amber-400 px-2.5 py-1 text-xs font-semibold text-amber-950">
              ✦ Featured
            </span>
          </div>
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-sm backdrop-blur transition hover:bg-white dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-sm backdrop-blur transition hover:bg-white dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
              {index + 1} / {total}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {hasMultiple && (
        <div className="slim-scrollbar flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`View image ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={cn(
                "relative aspect-video h-16 shrink-0 overflow-hidden rounded-lg border-2 transition",
                i === index
                  ? "border-blue-500"
                  : "border-transparent opacity-60 hover:opacity-100",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
