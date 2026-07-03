import { getAllSkills } from "@/actions/skillAction";
import SkillDisplay from "./SkillDisplay";

const SkillContainer = async () => {
  const result = await getAllSkills();

  if (!Array.isArray(result)) {
    return (
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        Skills could not be loaded. Please try again later.
      </p>
    );
  }

  return <SkillDisplay skills={result} />;
};

export default SkillContainer;
