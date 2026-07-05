import type { Metadata } from "next";

import Markdown from "@/components/blog/Markdown";
import { loadDoc } from "@/lib/loadDoc";

export const metadata: Metadata = {
  title: "Terms of Service · Ranok Raihan",
  description: "Terms of Service for the Ranok Raihan portfolio website.",
};

export default async function TermsPage() {
  const content = await loadDoc("terms-of-service.md");

  return (
    <section className="section-shell">
      <div className="section-container max-w-3xl py-16">
        <Markdown content={content} />
      </div>
    </section>
  );
}
