import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Brain, Code, Rocket, Zap } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import SkillContainer from "./SkillContainer";

const SkillSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:from-gray-950/50 dark:via-gray-900 dark:to-blue-950/20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 dark:from-emerald-800/10 dark:to-cyan-800/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 px-4 py-2"
            >
              <Brain className="h-4 w-4 mr-2" />
              Technical Expertise
            </Badge>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              My Skills & Technologies
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I have a diverse skill set that spans across modern web
              development technologies, design principles, and cutting-edge
              tools. Here&apos;s my technical arsenal:
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full shadow-sm">
              <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Stack
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full shadow-sm">
              <Rocket className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Modern Tools
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full shadow-sm">
              <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Best Practices
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Skills Container */}
          <Suspense
            fallback={
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10 rounded-lg" />
                    <div className="space-y-2">
                      <Skeleton className="w-24 h-4" />
                      <Skeleton className="w-16 h-3" />
                    </div>
                  </div>
                  <Skeleton className="w-28 h-6 rounded-full" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Card key={i} className="p-4">
                      <CardContent className="flex flex-col items-center space-y-4 p-0">
                        <Skeleton className="w-16 h-16 rounded-2xl" />
                        <Skeleton className="w-20 h-6 rounded-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            }
          >
            <SkillContainer />
          </Suspense>

          {/* Enhanced Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/80 dark:from-gray-900/80 dark:via-blue-950/50 dark:to-purple-950/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-700 group">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200/40 dark:from-emerald-800/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

              <CardContent className="relative p-8 md:p-12">
                <div className="relative">
                  {/* Glowing Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-emerald-400/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-emerald-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110" />

                  <div className="relative transform group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src="/assets/images/skill-graphic.svg"
                      width={500}
                      height={500}
                      alt="Skills and technologies illustration"
                      className="w-full h-auto drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-80 transition-all duration-700 transform -translate-y-2 group-hover:translate-y-0">
                  <div className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl">
                    <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-80 transition-all duration-700 delay-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl">
                    <Rocket className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
