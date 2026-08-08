import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import QueryBuilderClient from "@/components/tools/query-builder/QueryBuilderClient";

export const metadata: Metadata = {
  title: "LinkedIn Job Search Query Builder · Ranok Raihan",
  description:
    "Build filtered LinkedIn job search URLs from a form and keep a local history of your saved searches.",
};

export default function QueryBuilderPage() {
  return (
    <section className="flex min-h-[calc(100dvh-5rem)] flex-col pt-28 pb-14 md:pt-32 md:pb-16">
      <div className="section-container">
        <div className="mb-8 flex flex-col items-start gap-1.5 text-left">
          <Link
            href="/tools"
            className="mb-2 inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Back to tools
          </Link>
          <span className="section-eyebrow">{"// tools / query-builder"}</span>
          <h1 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            LinkedIn Job Search Query Builder
          </h1>
          <div className="section-rule mt-0.5 mb-0.5" />
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">
            Fill out the filters below to generate a LinkedIn job search URL. Everything runs locally in
            your browser — searches you save are kept only on this device.
          </p>
        </div>

        <QueryBuilderClient />
      </div>
    </section>
  );
}
