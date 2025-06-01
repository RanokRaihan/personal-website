"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { menuItems } from "@/constants";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ThemeToggleSubmenu from "./ThemeToggleSubmenu";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative md:hidden border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
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
      </DropdownMenuTrigger>

      <DropdownMenuContent
        id="mobile-menu"
        className="w-64 mt-2 mr-4 shadow-xl border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl overflow-hidden"
        align="end"
        sideOffset={8}
      >
        {/* Header */}
        <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <DropdownMenuLabel className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Navigation
          </DropdownMenuLabel>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Explore my portfolio
          </p>
        </div>

        <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-700" />

        {/* Theme Toggle */}
        <div className="px-2 py-1">
          <ThemeToggleSubmenu />
        </div>

        <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-700" />

        {/* Navigation Items */}
        <div className="py-2 space-y-1">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <DropdownMenuItem
                key={item.href}
                asChild
                className="mx-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800 transition-all duration-200"
              >
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
                  onClick={handleMenuClick}
                  role="menuitem"
                  tabIndex={0}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-200 mr-3">
                    <IconComponent className="h-4 w-4 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                  </div>
                  <span className="flex-1">{item.label}</span>
                  <div className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </DropdownMenuItem>
            );
          })}
        </div>

        {/* Footer */}
        <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-700" />
        <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/50">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            Ranok Raihan Portfolio
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
