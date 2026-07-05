import StackIcon from "tech-stack-icons";
import type { IconName } from "tech-stack-icons";
import type { ISkill } from "@/types";

const SkillCard = ({ skill }: { skill: ISkill }) => {
  const { name, iconName } = skill;

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 aspect-square rounded-xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300">
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
        <span className="block dark:hidden w-full h-full">
          <StackIcon name={iconName as IconName} variant="light" className="w-full h-full" />
        </span>
        <span className="hidden dark:block w-full h-full">
          <StackIcon name={iconName as IconName} variant="dark" className="w-full h-full" />
        </span>
      </div>
      <span className="font-display text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 text-center leading-tight line-clamp-2">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
