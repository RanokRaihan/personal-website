import StackIcon from "tech-stack-icons";
import type { IconName } from "tech-stack-icons";
import type { ISkill } from "@/types";

const levelColor: Record<ISkill["level"], string> = {
  BEGINNER: "text-slate-400 dark:text-slate-500",
  INTERMEDIATE: "text-emerald-500 dark:text-emerald-400",
  ADVANCED: "text-emerald-600 dark:text-emerald-400",
  EXPERT: "text-emerald-700 dark:text-emerald-300",
};

const levelLabel: Record<ISkill["level"], string> = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Mid",
  ADVANCED: "Advanced",
  EXPERT: "Expert",
};

const SkillCard = ({ skill }: { skill: ISkill }) => {
  const { name, iconName, level } = skill;

  return (
    <div className="flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center">
        <span className="block dark:hidden w-10 h-10">
          <StackIcon name={iconName as IconName} variant="light" className="w-10 h-10" />
        </span>
        <span className="hidden dark:block w-10 h-10">
          <StackIcon name={iconName as IconName} variant="dark" className="w-10 h-10" />
        </span>
      </div>
      <span className="font-display text-[11px] font-semibold text-slate-700 dark:text-slate-200 text-center leading-tight">
        {name}
      </span>
      <span className={`font-mono text-[9px] uppercase tracking-wider ${levelColor[level]}`}>
        {levelLabel[level]}
      </span>
    </div>
  );
};

export default SkillCard;
