import type { ITestimonial, TestimonialRelation } from "@/types";
import { LinkedinIcon, QuoteIcon } from "lucide-react";
import Link from "next/link";

const relationLabels: Record<TestimonialRelation, string> = {
  MENTOR: "Mentor",
  PEER: "Colleague",
  CLIENT: "Client",
  INSTRUCTOR: "Instructor",
  OTHER: "Connection",
};

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

const TestimonialCard = ({ testimonial }: { testimonial: ITestimonial }) => {
  const { name, role, company, quote, relation, linkedIn } = testimonial;

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-slate-900/60">
      <QuoteIcon
        className="h-8 w-8 flex-none text-emerald-500/30"
        aria-hidden="true"
      />

      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/5">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 font-display text-sm font-bold text-white">
          {initials(name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="truncate font-display font-semibold text-slate-900 dark:text-slate-50">
              {name}
            </p>
            {linkedIn && (
              <Link
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on LinkedIn`}
                className="flex-none text-slate-400 transition-colors hover:text-emerald-500"
              >
                <LinkedinIcon className="h-4 w-4" />
              </Link>
            )}
          </div>
          <p className="truncate text-sm text-slate-500 dark:text-slate-400">
            {role}
            {company ? ` · ${company}` : ""}
          </p>
        </div>
        <span className="flex-none rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
          {relationLabels[relation]}
        </span>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
