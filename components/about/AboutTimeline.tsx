// Section 3 — the story, not a resume. A single emerald line with dot markers
// down the left; each entry is a year + one or two lines. Rewards the curious
// visitor and gives recruiters a narrative to follow.
const TIMELINE = [
  {
    year: "2021",
    body: "Started building seriously. First full-stack projects. Fell into the ecosystem and didn't look back.",
  },
  {
    year: "2022",
    body: "Built Moto Vibe — a full-stack e-commerce bike store. First time shipping something that actually worked end to end.",
  },
  {
    year: "2023–24",
    body: 'Deepened the stack. Learned PostgreSQL, Prisma, TypeScript. Started caring about architecture, not just "making it work."',
  },
  {
    year: "2025",
    body: "Shipped Doable — a two-sided local task marketplace. Stripe, Mapbox, JWT auth, VPS deployment. ~58,000 lines across frontend and backend.",
  },
  {
    year: "2025",
    body: "Designed ShelfWatch — a barcode-driven expiration tracker built for pharmacy workflows. Solving a real problem I see every day at work.",
  },
  {
    year: "2026",
    body: "Built this portfolio from scratch — Next.js frontend, custom Express/MongoDB CMS backend, admin dashboard, VPS deployed. Actively looking for full-time roles.",
  },
];

const AboutTimeline = () => {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
        How I got here
      </h2>

      <ol className="mt-8 space-y-8 border-l border-slate-200 pl-8 dark:border-white/10">
        {TIMELINE.map(({ year, body }, index) => (
          <li
            key={`${year}-${index}`}
            className="animate-fade-in relative"
            style={{
              animationDelay: `${index * 80}ms`,
              animationFillMode: "both",
            }}
          >
            {/* Dot marker sitting on the line */}
            <span
              aria-hidden
              className="absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-900"
            />
            <span className="font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {year}
            </span>
            <p className="mt-1.5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default AboutTimeline;
