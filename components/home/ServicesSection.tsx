import { services } from "@/constants";

const ServicesSection = () => {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/10" />

      <div className="section-container relative">
        <div className="mb-14">
          <span className="section-eyebrow">{"// what i do"}</span>
          <h2 className="section-heading mt-3">How I can help</h2>
          <div className="section-rule" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
            From polished front-ends to robust back-ends, I build complete,
            production-ready web products.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
