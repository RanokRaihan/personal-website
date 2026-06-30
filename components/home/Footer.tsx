import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    href: "https://github.com/RanokRaihan",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/ranok-raihan/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "mailto:ranokraihan@gmail.com",
    label: "Email",
    Icon: FaEnvelope,
  },
];

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-[#0B0F14] dark:text-slate-400">
      <div className="section-container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* About */}
          <div className="max-w-sm">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50">
              Ranok Raihan<span className="text-emerald-500">.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Building beautiful, performant, and accessible web experiences.
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
        <div className="mt-12 border-t border-slate-200 pt-6 dark:border-white/10">
          <p className="text-sm">
            © {new Date().getFullYear()} Ranok Raihan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
