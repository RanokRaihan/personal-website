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
import Link from "next/link";
import ThemeToggleSubmenu from "./ThemeToggleSubmenu";

export default function HamburgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="dark:bg-transparent border dark:border-slate-500 md:hidden "
        >
          <HamburgerMenuIcon className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-lg">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ThemeToggleSubmenu />

        <DropdownMenuItem>
          <Link href="/" className="nav-link-mobile">
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/projects" className="nav-link-mobile">
            Projects
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/blogs" className="nav-link-mobile">
            blogs
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about" className="nav-link-mobile">
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/contact" className="nav-link-mobile">
            contact
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
