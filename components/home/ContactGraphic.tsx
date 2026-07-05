import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const ContactGraphic = () => {
  return (
    <div className="relative flex w-full max-w-md items-center justify-center">
      {/* Ambient emerald glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/15"
        aria-hidden="true"
      />

      <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur-sm md:p-10 dark:border-white/10 dark:bg-slate-900/60">
        {/* Decorative grid + floating nodes */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <span
          className="pointer-events-none absolute left-8 top-24 h-2 w-2 rounded-full bg-emerald-400/60"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute bottom-28 right-10 h-1.5 w-1.5 rounded-full bg-emerald-500/50"
          aria-hidden="true"
        />

        {/* Hero glyph */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            {/* pulse ring */}
            <span className="absolute inset-0 -z-10 animate-contact-ping rounded-3xl bg-emerald-400/20" />
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30">
              <Send className="h-11 w-11 -translate-x-0.5 translate-y-0.5 text-white" />
            </div>
          </div>

          <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Let&apos;s connect
          </h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            I usually reply within a day. Prefer email or socials? Reach me
            directly below.
          </p>
        </div>

        {/* Contact chips */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/60 px-4 py-3 dark:border-white/10 dark:bg-slate-950/40">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <MapPin className="h-4 w-4" />
            </span>
            <span className="font-mono text-sm text-slate-700 dark:text-slate-300">
              Havertown, PA · open to remote
            </span>
          </div>
        </div>

        {/* Social buttons */}
        <div className="mt-6 flex items-center justify-center gap-2">
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
    </div>
  );
};

export default ContactGraphic;
