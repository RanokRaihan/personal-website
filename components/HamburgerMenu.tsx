"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuItems } from "@/constants";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative md:hidden border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          <div className="relative w-6 h-6">
            <HamburgerMenuIcon
              className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                isOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
              }`}
            />
          </div>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-sm flex flex-col gap-0 p-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-l border-slate-200 dark:border-slate-700"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-emerald-50 dark:bg-emerald-900/20 border-b border-slate-200 dark:border-slate-700">
          <SheetTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Navigation
          </SheetTitle>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Explore my portfolio
          </p>
        </div>

        {/* Navigation Items */}
        <nav
          className="flex-1 overflow-y-auto py-3 px-3 space-y-1"
          aria-label="Mobile navigation"
        >
          {menuItems.map((item) => {
            const isActive = isActiveLink(item.href);
            const IconComponent = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 group ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-md transition-colors duration-200 ${
                    isActive
                      ? "bg-emerald-100 dark:bg-emerald-900/30"
                      : "bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30"
                  }`}
                >
                  <IconComponent className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="flex-1">{item.label}</span>
                {isActive && (
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="px-4 pb-4">
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
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
            Let&apos;s talk
          </Link>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            Ranok Raihan Portfolio
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
