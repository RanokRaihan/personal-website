"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Sparkles, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroImage = () => {
  const { theme } = useTheme();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      setImageSrc("/assets/images/hero-dark.svg");
    } else if (theme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setImageSrc("/assets/images/hero-dark.svg");
      } else {
        setImageSrc("/assets/images/hero.svg");
      }
    } else {
      setImageSrc("/assets/images/hero.svg");
    }
  }, [theme]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-emerald-200/30 to-cyan-200/30 dark:from-emerald-800/20 dark:to-cyan-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Image Card */}
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/90 dark:from-gray-900/90 dark:via-blue-950/50 dark:to-purple-950/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-700 group max-w-lg">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-200/40 dark:from-emerald-800/20 to-transparent rounded-bl-full opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

        {/* Floating Status Badges */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-2 group-hover:translate-y-0">
          <Badge
            variant="outline"
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 shadow-lg px-3 py-1"
          >
            <Code className="h-3 w-3 mr-1" />
            Developer
          </Badge>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform -translate-y-2 group-hover:translate-y-0">
          <Badge
            variant="outline"
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 shadow-lg px-3 py-1"
          >
            <Zap className="h-3 w-3 mr-1" />
            MERN
          </Badge>
        </div>

        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400 transform translate-y-2 group-hover:translate-y-0">
          <Badge
            variant="outline"
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 shadow-lg px-3 py-1"
          >
            <Sparkles className="h-3 w-3 mr-1" />
            Creative
          </Badge>
        </div>

        <CardContent className="relative p-8 md:p-12">
          {/* Main Hero Image */}
          {imageSrc ? (
            <div className="relative transform group-hover:scale-105 transition-transform duration-700">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-emerald-400/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-emerald-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110" />

              <div className="relative">
                <Image
                  src={imageSrc}
                  width={500}
                  height={500}
                  alt="Ranok Raihan - Full Stack Developer Hero Image"
                  className="w-full h-auto drop-shadow-2xl transition-all duration-700"
                  priority
                />
              </div>
            </div>
          ) : (
            /* Loading State */
            <div className="w-full aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl animate-pulse flex items-center justify-center">
              <Sparkles className="h-12 w-12 text-gray-400 dark:text-gray-500 animate-spin" />
            </div>
          )}

          {/* Floating Geometric Shapes */}
          <div className="absolute top-1/4 left-8 opacity-0 group-hover:opacity-60 transition-all duration-700 delay-300 transform -rotate-12 group-hover:rotate-0">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg animate-bounce" />
          </div>

          <div className="absolute bottom-1/3 right-8 opacity-0 group-hover:opacity-60 transition-all duration-700 delay-500 transform rotate-12 group-hover:rotate-0">
            <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg shadow-lg animate-bounce delay-300" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroImage;
