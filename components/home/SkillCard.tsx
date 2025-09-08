import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ISkill } from "@/types";
import { Code2, Sparkles } from "lucide-react";
import Image from "next/image";

interface skillProps {
  skill: string;
  icon: string;
  backgroundColor?: string;
}

const SkillCard = ({ skillData }: { skillData: ISkill }) => {
  const { name, image } = skillData;
  console.log(name, image);

  return (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white via-gray-50/80 to-white dark:from-gray-900 dark:via-gray-800/80 dark:to-gray-900 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 w-full h-full">
      {/* Decorative Background Elements */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-100/60 dark:from-emerald-900/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating Sparkle Icon */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-all duration-500 transform scale-0 group-hover:scale-100">
        <Sparkles className="h-3 w-3 text-amber-400 dark:text-amber-300" />
      </div>

      <CardContent className="relative p-6 flex flex-col items-center justify-center space-y-4 min-h-[160px]">
        {/* Skill Icon Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-emerald-400/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-emerald-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
          <div className="relative p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">
            <Image
              src={image}
              width={48}
              height={48}
              alt={`${name} technology icon`}
              className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Skill Name with Badge */}
        <div className="flex flex-col items-center space-y-2">
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 border-0 shadow-sm group-hover:shadow-md group-hover:from-emerald-100 group-hover:to-blue-100 dark:group-hover:from-emerald-900/50 dark:group-hover:to-blue-900/50 group-hover:text-emerald-800 dark:group-hover:text-emerald-200 transition-all duration-300 px-3 py-1 text-xs font-semibold tracking-wide"
          >
            <Code2 className="h-3 w-3 mr-1.5" />
            {name}
          </Badge>
        </div>

        {/* Hover Effect Accent Line */}
        <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-t-full" />
      </CardContent>
    </Card>
  );
};

export default SkillCard;
