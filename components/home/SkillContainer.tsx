import { getAllSkillsAction } from "@/lib/actions/skillAction";
import { ISkill } from "@/types";
import SkillCard from "./SkillCard";

const SkillContainer = async () => {
  const result = await getAllSkillsAction();
  const skills = result.data || [];
  return (
    <div className="flex flex-wrap justify-center lg:w-1/2 ">
      {skills.map((skill: ISkill) => (
        <SkillCard key={skill.name} skillData={skill} />
      ))}
    </div>
  );
};

export default SkillContainer;
