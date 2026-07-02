import StackIcon from "tech-stack-icons";
import type { IconName } from "tech-stack-icons";
import type { ISkill } from "@/types";

const CATEGORY_LABELS: Record<string, string> = {
  ALL: "All Skills",
  LANGUAGE: "Languages",
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATABASE: "Database",
  DEVOPS: "DevOps",
  TOOL: "Tools",
  OTHER: "Other",
};

const POSITIONS = [
  { top: "43%", left: "43%", size: 56, delay: 0, dur: 3.2 },
  { top: "5%", left: "40%", size: 36, delay: 0.5, dur: 3.5 },
  { top: "22%", left: "73%", size: 40, delay: 1.0, dur: 2.8 },
  { top: "58%", left: "76%", size: 34, delay: 0.3, dur: 3.0 },
  { top: "78%", left: "54%", size: 38, delay: 0.8, dur: 2.6 },
  { top: "70%", left: "15%", size: 36, delay: 1.2, dur: 3.8 },
  { top: "28%", left: "7%", size: 40, delay: 0.6, dur: 3.1 },
];

interface SkillGraphicProps {
  skills: ISkill[];
  activeTab: string;
}

const SkillGraphic = ({ skills, activeTab }: SkillGraphicProps) => {
  const displaySkills = skills.slice(0, POSITIONS.length);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-[320px] h-[320px]">
        {/* Concentric decorative rings */}
        <div className="absolute inset-0 rounded-full border border-emerald-500/10" />
        <div className="absolute inset-[14%] rounded-full border border-emerald-500/15" />
        <div className="absolute inset-[30%] rounded-full border border-emerald-500/20" />

        {/* Center glow */}
        <div className="absolute inset-[30%] rounded-full bg-emerald-500/5 blur-xl" />

        {/* Floating icon tiles */}
        {displaySkills.map((skill, i) => {
          const pos = POSITIONS[i];
          return (
            <div
              key={skill._id}
              className="absolute flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 shadow-md"
              style={{
                top: pos.top,
                left: pos.left,
                width: pos.size,
                height: pos.size,
                animation: `float ${pos.dur}s ease-in-out ${pos.delay}s infinite`,
              }}
            >
              <span
                className="block dark:hidden"
                style={{ width: pos.size * 0.58, height: pos.size * 0.58 }}
              >
                <StackIcon
                  name={skill.iconName as IconName}
                  variant="light"
                  className="w-full h-full"
                />
              </span>
              <span
                className="hidden dark:block"
                style={{ width: pos.size * 0.58, height: pos.size * 0.58 }}
              >
                <StackIcon
                  name={skill.iconName as IconName}
                  variant="dark"
                  className="w-full h-full"
                />
              </span>
            </div>
          );
        })}
      </div>

      {/* Category label */}
      <span className="font-mono text-xs uppercase tracking-widest text-emerald-500/60 dark:text-emerald-400/50">
        {CATEGORY_LABELS[activeTab] ?? activeTab}
      </span>
    </div>
  );
};

export default SkillGraphic;
