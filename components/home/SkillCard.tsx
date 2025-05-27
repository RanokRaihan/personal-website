import { ISkill } from "@/types";
import Image from "next/image";

interface skillProps {
  skill: string;
  icon: string;
  backgroundColor?: string;
}

const SkillCard = ({ skillData }: { skillData: ISkill }) => {
  const { name, image } = skillData;
  return (
    <div className=" w-1/3 lg:w-1/4 p-6 lg:p-2  flex flex-col items-center my-3 gap-2">
      <Image
        src={image}
        width={100}
        height={100}
        alt={name}
        className="rounded-md p-2 bg-slate-100"
      />
      <p className="text-center">{name}</p>
    </div>
  );
};

export default SkillCard;
