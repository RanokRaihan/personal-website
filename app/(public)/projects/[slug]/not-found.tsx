import Link from "next/link";
import { ArrowLeft, FolderX } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <section className="section-shell">
      <div className="section-container flex flex-col items-center justify-center text-center">
        <FolderX className="mb-6 h-14 w-14 text-slate-300 dark:text-slate-600" />
        <h1 className="section-heading">Project not found</h1>
        <div className="section-rule mx-auto bg-blue-500/70" />
        <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-300">
          The project you&apos;re looking for doesn&apos;t exist, was
          unpublished, or the link is out of date.
        </p>
        <Button asChild variant="primary" className="mt-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Browse all projects
          </Link>
        </Button>
      </div>
    </section>
  );
}
