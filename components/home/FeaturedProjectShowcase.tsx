import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IProject } from "@/types/projectType";
import { ArrowRightIcon, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORY_LABELS, COMPLEXITY_COLORS } from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

interface FeaturedProjectShowcaseProps {
  project: IProject;
  index: number;
}

const FeaturedProjectShowcase = ({ project, index }: FeaturedProjectShowcaseProps) => {
  const {
    slug,
    title,
    tagline,
    summary,
    coverImage,
    category,
    complexity,
    techStack,
    frontendLiveUrl,
    backendLiveUrl,
  } = project;

  const imageFirst = index % 2 === 0;

  const allTechs = Object.values(techStack).flat();
  const displayTechs = allTechs.slice(0, 3);
  const overflowCount = allTechs.length - displayTechs.length;

  const liveUrl = frontendLiveUrl || backendLiveUrl;

  return (
    <ScrollReveal direction={imageFirst ? "left" : "right"}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Image panel — always first in DOM so mobile always stacks image above details */}
        <div
          className={`w-full md:w-1/2 ${imageFirst ? "md:order-1" : "md:order-2"}`}
        >
          <div className="relative aspect-[4/3] md:aspect-[16/11] w-full overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-slate-900/5 dark:shadow-black/20">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600">
                <Globe className="w-16 h-16" />
              </div>
            )}
          </div>
        </div>

        {/* Details panel */}
        <div
          className={`w-full md:w-1/2 ${imageFirst ? "md:order-2" : "md:order-1"}`}
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge
              variant="outline"
              className="border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/30"
            >
              {CATEGORY_LABELS[category]}
            </Badge>
            <Badge
              variant="secondary"
              className={`${COMPLEXITY_COLORS[complexity]} border-0 text-xs font-medium`}
            >
              {complexity.charAt(0) + complexity.slice(1).toLowerCase()}
            </Badge>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            {title}
          </h3>

          {tagline && (
            <p className="mt-1 text-base md:text-lg font-medium text-blue-600 dark:text-blue-400">
              {tagline}
            </p>
          )}

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            {summary}
          </p>

          {displayTechs.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {displayTechs.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs px-2 py-0.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </Badge>
              ))}
              {overflowCount > 0 && (
                <Badge
                  variant="outline"
                  className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400"
                >
                  +{overflowCount}
                </Badge>
              )}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 mt-7">
            {liveUrl && (
              <Button asChild variant="primary" className="rounded-full">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Link
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
            <Button asChild variant="outline" className="rounded-full">
              <Link href={`/projects/${slug}`}>
                Explore More
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default FeaturedProjectShowcase;
