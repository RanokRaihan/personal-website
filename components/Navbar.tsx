"use client";

import { menuItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { ModeToggle } from "./ThemeToggleButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollY / documentHeight) * 100, 100);

      setIsScrolled(scrollY > 20);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm"
          : "py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
      }`}
      role="banner"
    >
      <div className="flex items-center justify-between container mx-auto px-4">
        {/* Logo */}
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-lg transition-transform hover:scale-105"
          aria-label="Ranok Raihan - Home"
        >
          <Image
            src="/assets/images/logo-main.svg"
            width={300}
            height={100}
            alt="Ranok Raihan Logo"
            className={`cursor-pointer transition-all duration-300 ${
              isScrolled ? "w-[120px] md:w-[160px]" : "w-[150px] md:w-[200px]"
            }`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center justify-center flex-grow"
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = isActiveLink(item.href);
              const IconComponent = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <IconComponent className="h-4 w-4" aria-hidden="true" />
                    <span>{item.label}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* CTA Button - Desktop only */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            aria-label="Get in touch - Contact me"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Lets Talk
          </Link>

          {/* Theme Toggle */}
          <ModeToggle border={true} />

          {/* Mobile Menu */}
          <HamburgerMenu />
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
        }}
        aria-hidden="true"
      />
    </header>
  );
};

export default Navbar;
