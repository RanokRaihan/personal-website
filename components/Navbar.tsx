import Image from "next/image";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { ModeToggle } from "./ThemeToggleButton";

const Navbar: React.FC = () => {
  return (
    <header className=" p-4  fixed top-0 left-0 w-full z-10 backdrop-blur-md dark:bg-slate-900/5 bg-white/5">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/">
          <Image
            src="/assets/images/logo-main.svg"
            width={300}
            height={100}
            alt="Logo"
            className="cursor-pointer w-[150px] md:w-[200px]"
          />
          {/* <Image
            src="/assets/images/logo-small.png"
              width={300}
            height={100}
            alt="Logo"
            className="cursor-pointer md:hidden block w-14"
          /> */}
        </Link>

        <nav className="md:flex gap-6 hidden items-center justify-center flex-grow text-lg ">
          {/* Navbar items */}
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <Link href="/blogs" className="nav-link">
            Blogs
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <ModeToggle />
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
