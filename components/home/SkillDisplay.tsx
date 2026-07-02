"use client";

import { useState } from "react";
import type { ISkill } from "@/types";
import SkillCard from "./SkillCard";
import SkillGraphic from "./SkillGraphic";

const TABS = [
  { key: "ALL", label: "All" },
  { key: "LANGUAGE", label: "Languages" },
  { key: "FRONTEND", label: "Frontend" },
  { key: "BACKEND", label: "Backend" },
  { key: "DATABASE", label: "Database" },
  { key: "DEVOPS", label: "DevOps" },
  { key: "TOOL", label: "Tools" },
  { key: "OTHER", label: "Other" },
];

interface SkillDisplayProps {
  skills: ISkill[];
}

const SkillDisplay = ({ skills }: SkillDisplayProps) => {
  const [activeTab, setActiveTab] = useState("ALL");

  const visibleTabs = TABS.filter(
    (t) => t.key === "ALL" || skills.some((s) => s.category === t.key)
  );

  const filtered =
    activeTab === "ALL" ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
      {/* Left: tabs + grid */}
      <div className="w-full lg:w-[58%]">
        {/* Tab pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {visibleTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={
                activeTab === tab.key
                  ? "px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-emerald-500 text-white shadow-sm shadow-emerald-500/20 transition-all duration-200"
                  : "px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-emerald-400/40 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-200"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid — key re-mounts on tab change to re-trigger animate-fade-in */}
        <div
          key={activeTab}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-3"
        >
          {filtered.map((skill, i) => (
            <div
              key={skill._id}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Right: radar chart — desktop only, stays mounted so chart updates in place */}
      <div className="hidden lg:flex lg:w-[42%] items-center justify-center sticky top-24">
        <SkillGraphic skills={skills} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default SkillDisplay;
