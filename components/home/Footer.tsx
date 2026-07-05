import { getSiteSettings } from "@/actions/settingAction";
import { DEFAULT_SETTINGS } from "@/constants";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

const Footer = async () => {
  const result = await getSiteSettings();
  const s = "name" in result ? result : DEFAULT_SETTINGS;

  const socials = [
    s.socials.github && {
      href: s.socials.github,
      label: "GitHub",
      Icon: FaGithub,
    },
    s.socials.linkedin && {
      href: s.socials.linkedin,
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    s.socials.email && {
      href: `mailto:${s.socials.email}`,
      label: "Email",
      Icon: FaEnvelope,
    },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof FaGithub }[];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-[#0B0F14] dark:text-slate-400">
      <div className="section-container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* About */}
          <div className="max-w-sm">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50">
              {s.name}
              <span className="text-emerald-500">.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              {s.footerText || DEFAULT_SETTINGS.footerText}
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} {s.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legalLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
