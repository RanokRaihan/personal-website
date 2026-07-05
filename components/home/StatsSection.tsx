import { getAllCertifications } from "@/actions/certificationAction";
import { getAllSkills } from "@/actions/skillAction";
import { CURATED_STATS } from "@/constants";

const StatsSection = async () => {
  const [skills, certifications] = await Promise.all([
    getAllSkills(),
    getAllCertifications(),
  ]);

  const technologies = Array.isArray(skills) ? skills.length : null;
  const certCount = Array.isArray(certifications)
    ? certifications.length
    : null;

  const stats = [
    { value: `${CURATED_STATS.yearsExperience}+`, label: "Years experience" },
    { value: `${CURATED_STATS.projectsShipped}+`, label: "Projects shipped" },
    {
      value: technologies !== null ? `${technologies}+` : "—",
      label: "Technologies",
    },
    {
      value: certCount !== null ? `${certCount}` : "—",
      label: "Certifications",
    },
  ];

  return (
    <section className="section-shell relative border-y border-slate-200 bg-slate-50/60 dark:border-white/10 dark:bg-slate-900/30">
      <div className="section-container">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-slate-50">
                {stat.value}
              </dt>
              <dd className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default StatsSection;
