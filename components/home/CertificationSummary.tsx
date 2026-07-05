import { Award, Building2, Infinity as InfinityIcon } from "lucide-react";

interface CertificationSummaryProps {
  total: number;
  issuers: number;
  lifetime: number;
}

const QUOTES = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    text: "Persistence is very important. You should not give up unless you are forced to give up.",
    author: "Elon Musk",
  },
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    text: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
  },
];

const stats = (props: CertificationSummaryProps) => [
  {
    icon: Award,
    value: props.total,
    label: "Certifications earned",
  },
  {
    icon: Building2,
    value: props.issuers,
    label: props.issuers === 1 ? "Issuing organization" : "Issuing organizations",
  },
  {
    icon: InfinityIcon,
    value: props.lifetime,
    label: "Lifetime credentials",
  },
];

const CertificationSummary = (props: CertificationSummaryProps) => {
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
      {/* Stats card */}
      <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-7 shadow-sm backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/40">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
          At a glance
        </p>

        <div className="space-y-5">
          {stats(props).map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 dark:from-amber-500/15 dark:to-orange-500/10 dark:text-amber-400">
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-3xl font-bold leading-none text-slate-900 dark:text-slate-50">
                  {value}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <figure className="rounded-2xl border-l-2 border-amber-400/80 bg-gradient-to-br from-amber-50/70 to-transparent py-5 pl-6 pr-5 dark:border-amber-500/50 dark:from-amber-500/[0.06]">
        <span
          aria-hidden
          className="font-display text-4xl leading-none text-amber-400/70 dark:text-amber-500/60"
        >
          &ldquo;
        </span>
        <blockquote className="mt-1 font-display text-base italic leading-relaxed text-slate-700 dark:text-slate-200">
          {quote.text}
        </blockquote>
        <figcaption className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
          — {quote.author}
        </figcaption>
      </figure>
    </aside>
  );
};

export default CertificationSummary;
