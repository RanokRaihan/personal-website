import { Badge } from "@/components/ui/badge";
import { getAllSkillsAction } from "@/lib/actions/skillAction";
import { ISkill } from "@/types";
import { Code, Layers, Star } from "lucide-react";
import SkillCard from "./SkillCard";

const SkillContainer = async () => {
  const result = await getAllSkillsAction();
  const skills = result.data || [];

  return (
    <div className="w-full lg:w-1/2 space-y-6">
      {/* Skills Header with Stats */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
            <Layers className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Tech Stack
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {skills.length} technologies
            </p>
          </div>
        </div>

        <Badge
          variant="outline"
          className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/50 dark:to-blue-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700 px-3 py-1"
        >
          <Star className="h-3 w-3 mr-1" />
          Professional Level
        </Badge>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 items-stretch sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill: ISkill, index: number) => (
          <div
            key={skill.name}
            className="animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            <SkillCard skillData={skill} />
          </div>
        ))}
      </div>

      {/* Skills Footer Info */}
      <div className="flex items-center justify-center pt-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Code className="h-4 w-4" />
          <span>Constantly learning and expanding my toolkit</span>
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
