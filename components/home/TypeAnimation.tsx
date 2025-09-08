"use client";
import { Code, Sparkles } from "lucide-react";
import { ReactTyped } from "react-typed";

const TypeAnimation = ({ strings = ["Here goes strings"] }) => {
  return (
    <div className="flex items-center gap-3 text-2xl md:text-3xl font-semibold">
      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
        <div className="relative">
          <Code className="h-6 w-6 md:h-7 md:w-7" />
          <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-emerald-500 dark:text-emerald-400 animate-pulse" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
        <ReactTyped
          strings={strings}
          typeSpeed={50}
          backSpeed={30}
          backDelay={2000}
          loop
          showCursor={true}
          cursorChar="|"
          className="font-bold tracking-tight"
        />
      </div>
    </div>
  );
};

export default TypeAnimation;
