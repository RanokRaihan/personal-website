// Section 4 — how I work. Three real statements, each on a subtle emerald
// left-border accent instead of a bullet. Says something; not buzzwords.
const VALUES = [
  {
    title: "I own the full feature.",
    body: "I don't stop at the frontend or hand off when the API gets complicated. I follow a feature from the data model to the UI and back.",
  },
  {
    title: "I build for real users.",
    body: "ShelfWatch exists because I watched colleagues manually track expiry dates on paper. Doable exists because finding reliable local help is still unnecessarily hard. I like solving problems that are actually annoying someone.",
  },
  {
    title: "I'm self-taught and I know it.",
    body: "No CS degree means I've had to be deliberate about what I learn and why. I read documentation, not just tutorials. I know what I don't know — and I look it up.",
  },
];

const AboutValues = () => {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
        How I work
      </h2>

      <div className="mt-8 space-y-8">
        {VALUES.map(({ title, body }) => (
          <div key={title} className="border-l-2 border-emerald-500/70 pl-5">
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-50">
              {title}
            </h3>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutValues;
