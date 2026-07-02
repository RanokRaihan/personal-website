import { getAllSkills } from "@/lib/actions/skillAction";
import type { ISkill } from "@/types";
import SkillCard from "./SkillCard";

const CATEGORY_LABELS: Record<string, string> = {
  LANGUAGE: "Languages",
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATABASE: "Database",
  DEVOPS: "DevOps",
  TOOL: "Tools",
  OTHER: "Other",
};

const CATEGORY_ORDER = [
  "LANGUAGE",
  "FRONTEND",
  "BACKEND",
  "DATABASE",
  "DEVOPS",
  "TOOL",
  "OTHER",
];

const SkillContainer = async () => {
  const result = await getAllSkills();

  if (!Array.isArray(result)) {
    return (
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        Skills could not be loaded. Please try again later.
      </p>
    );
  }

  const grouped = CATEGORY_ORDER.reduce<Record<string, ISkill[]>>((acc, cat) => {
    const catSkills = result.filter((s) => s.category === cat);
    if (catSkills.length > 0) acc[cat] = catSkills;
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(grouped).map(([cat, catSkills]) => (
        <div key={cat}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4">
            {CATEGORY_LABELS[cat]}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {catSkills.map((skill, i) => (
              <div
                key={skill._id}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillContainer;
