import {
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import HeroImage from "./HeroImage";
import TypeAnimation from "./TypeAnimation";
import { introStrings } from "@/constants";

const RESUME_URL =
  "https://drive.usercontent.google.com/download?id=1lEx5YGciXzGNWiaD_YvzWYxMVZ1QyGDU&export=download&authuser=0&confirm=t&uuid=e8998cd1-6860-4031-88cb-286c389cf6ae&at=ALoNOgm1fFI0q-yOvy-5Q8nKzj0O:1748285210785";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Single, quiet ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/10"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 flex flex-col items-center gap-12 md:flex-row md:justify-between">
        {/* Left content */}
        <div className="w-full space-y-8 text-center md:w-1/2 md:text-left">
          {/* Availability eyebrow */}
          <div className="flex justify-center md:justify-start">
            <span className="section-eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              available for work
            </span>
          </div>

          {/* Name + role */}
          <div className="space-y-4">
            <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
              Hi there, I&apos;m
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-7xl dark:text-slate-50">
              Ranok Raihan<span className="text-emerald-500">.</span>
            </h1>
            <TypeAnimation strings={introStrings} />
          </div>

          {/* Description */}
          <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 md:mx-0 md:text-lg dark:text-slate-300">
            Full-stack developer specializing in the MERN stack, building
            accessible, robust, and user-centric applications that make a
            difference.
          </p>

          {/* Actions */}
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button
              size="lg"
              variant="green"
              className="rounded-full px-7 font-semibold"
              asChild
            >
              <Link href={RESUME_URL}>
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download résumé
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                asChild
              >
                <Link
                  href="https://github.com/RanokRaihan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                asChild
              >
                <Link
                  href="https://linkedin.com/in/ranok-raihan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInLogoIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                asChild
              >
                <Link href="mailto:ranokraihan@gmail.com" aria-label="Send email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-slate-500 md:justify-start dark:text-slate-400">
            <MapPin className="h-3.5 w-3.5" />
            <span>Havertown, PA · open to remote</span>
          </div>
        </div>

        {/* Right image */}
        <div className="flex w-full justify-center md:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
