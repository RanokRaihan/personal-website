import Image from "next/image";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { ModeToggle } from "./ThemeToggleButton";

const Navbar: React.FC = () => {
  return (
    <header className=" p-4 fixed top-0 left-0 w-full z-10 backdrop-blur-md dark:bg-slate-900/5 bg-white/5">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/">
          <Image
            src="/assets/images/main-logo.svg"
            width={300}
            height={100}
            alt="Logo"
            className="cursor-pointer md:block hidden"
          />
          <Image
            src="/assets/images/logo-small.png"
            width={300}
            height={100}
            alt="Logo"
            className="cursor-pointer md:hidden block w-14"
          />
        </Link>

        <nav className="md:flex hidden items-center justify-center flex-grow text-lg gap-4">
          {/* Navbar items */}
          <Link href="#" className="text-blue-500">
            Home
          </Link>
          <Link href="#">Projects</Link>
          <Link href="#">Blogs</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </nav>

        <ModeToggle />
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
