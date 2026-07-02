import StackIcon from "tech-stack-icons";
import type { IconName } from "tech-stack-icons";
import type { ISkill } from "@/types";

const SkillCard = ({ skill }: { skill: ISkill }) => {
  const { name, iconName } = skill;

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 h-[88px] rounded-xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center shrink-0">
        <span className="block dark:hidden w-10 h-10">
          <StackIcon name={iconName as IconName} variant="light" className="w-10 h-10" />
        </span>
        <span className="hidden dark:block w-10 h-10">
          <StackIcon name={iconName as IconName} variant="dark" className="w-10 h-10" />
        </span>
      </div>
      <span className="font-display text-[11px] font-semibold text-slate-700 dark:text-slate-200 text-center leading-tight line-clamp-2">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
