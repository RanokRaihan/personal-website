import type { Metadata } from "next";

import Markdown from "@/components/blog/Markdown";
import { loadDoc } from "@/lib/loadDoc";

export const metadata: Metadata = {
  title: "Privacy Policy · Ranok Raihan",
  description: "Privacy Policy for the Ranok Raihan portfolio website.",
};

export default async function PrivacyPage() {
  const content = await loadDoc("privacy-policy.md");

  return (
    <section className="section-shell">
      <div className="section-container max-w-3xl py-16">
        <Markdown content={content} />
      </div>
    </section>
  );
}
