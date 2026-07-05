// Section 2 — grouped stack with context, not a logo cloud (that lives on the
// homepage). Each row shows a category and the tools, so it reads as
// understanding rather than a checklist.
const STACK = [
  { label: "Languages", value: "TypeScript, JavaScript" },
  { label: "Frontend", value: "Next.js, React, CSS" },
  { label: "Backend", value: "Node.js, Express" },
  {
    label: "Databases",
    value: "PostgreSQL (Prisma), MongoDB (Mongoose)",
  },
  {
    label: "Infrastructure",
    value: "VPS (Ubuntu, Nginx, PM2), Vercel, Cloudflare",
  },
];

const AboutStack = () => {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
        What I work with
      </h2>

      <dl className="mt-8 divide-y divide-slate-200 dark:divide-white/10">
        {STACK.map(({ label, value }) => (
          <div
            key={label}
            className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <dt className="font-mono text-sm uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              {label}
            </dt>
            <dd className="text-base text-slate-700 dark:text-slate-200">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
        I&apos;m comfortable across the full stack and have shipped production
        apps at every layer.
      </p>
    </section>
  );
};

export default AboutStack;
