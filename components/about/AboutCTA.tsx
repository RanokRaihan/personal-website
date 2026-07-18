import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";

// Section 6 — the close. Restates availability and points to work + contact.
const AboutCTA = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/60 p-8 md:p-10 dark:border-white/10 dark:bg-slate-900/40">
      <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
        Let&apos;s work together
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
        I&apos;m actively looking for full-stack roles. If something I&apos;ve
        built or said here resonates, I&apos;d love to hear from you.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" variant="green" className="gap-2">
          <Link href="/projects">
            View my work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="gap-2">
          <Link href="/contact">
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default AboutCTA;
