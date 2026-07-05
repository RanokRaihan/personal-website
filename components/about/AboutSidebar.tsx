import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Download, Globe, Mail, MapPin, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { RESUME_URL } from "@/constants";
import type { ISetting } from "@/types";
import { Button } from "../ui/button";

// The identity anchor for the About page. On desktop this stays pinned
// (sticky) while the narrative scrolls beside it, so the photo, availability,
// and quick facts are always in view. Data comes from the resolved site
// settings so it stays in sync with the hero/footer.
const AboutSidebar = ({ settings }: { settings: ISetting }) => {
  const { socials, openToWork } = settings;
  const resumeUrl = settings.resumeUrl || RESUME_URL;

  const pills = [
    { icon: MapPin, label: "Havertown, PA" },
    { icon: Globe, label: "Open to remote" },
    { icon: Zap, label: "~5 years building" },
  ];

  return (
    <aside className="flex flex-col gap-6">
      {/* Photo */}
      <div className="relative w-full max-w-xs">
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-emerald-400/15 blur-2xl dark:bg-emerald-500/15"
          aria-hidden="true"
        />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm dark:border-white/10 dark:bg-slate-900/60">
          <Image
            src="/assets/images/profile-photo.jpg"
            width={640}
            height={640}
            alt="Ranok Raihan"
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Name + title */}
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {settings.name}
        </h1>
        <p className="mt-1 font-mono text-sm text-slate-500 dark:text-slate-400">
          Full-Stack Developer
        </p>
      </div>

      {/* Availability badge */}
      {openToWork && (
        <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-2 dark:border-emerald-400/20 dark:bg-emerald-400/[0.06]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            Open to full-time roles
          </span>
        </div>
      )}

      {/* Quick-stat pills */}
      <div className="flex flex-wrap gap-2">
        {pills.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-300"
          >
            <Icon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            {label}
          </span>
        ))}
      </div>

      {/* Resume */}
      <Button
        asChild
        className="w-full gap-2 bg-emerald-600 text-white hover:bg-emerald-700"
      >
        <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <Download className="h-4 w-4" />
          Download Résumé (PDF)
        </Link>
      </Button>

      {/* Social links */}
      <div className="flex items-center gap-2">
        {socials.github && (
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            asChild
          >
            <Link
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </Link>
          </Button>
        )}
        {socials.linkedin && (
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            asChild
          >
            <Link
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInLogoIcon className="h-5 w-5" />
            </Link>
          </Button>
        )}
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
          asChild
        >
          <Link href="/contact" aria-label="Get in touch">
            <Mail className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </aside>
  );
};

export default AboutSidebar;
