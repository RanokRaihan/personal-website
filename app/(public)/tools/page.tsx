import type { Metadata } from "next";

import ToolCard from "@/components/tools/ToolCard";
import { tools } from "@/constants/tools";

export const metadata: Metadata = {
  title: "Tools · Ranok Raihan",
  description:
    "Internal tools and utilities built by Ranok Raihan — small apps that speed up everyday development workflows.",
};

export default function ToolsPage() {
  return (
    <section className="flex min-h-[calc(100dvh-5rem)] flex-col pt-28 pb-14 md:pt-32 md:pb-16">
      <div className="section-container">
        <div className="mb-8 flex flex-col items-start gap-1.5 text-left">
          <span className="section-eyebrow">{"// tools"}</span>
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Tools
          </h2>
          <div className="section-rule mt-0.5 mb-0.5" />
          <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">
            Small internal utilities I&apos;ve built to speed up my own workflow.
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {tools.map((tool, i) => (
              <div
                key={tool.href}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
