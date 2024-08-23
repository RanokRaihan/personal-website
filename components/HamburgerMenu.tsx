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
          className="dark:bg-transparent border dark:border-white md:hidden "
        >
          <HamburgerMenuIcon className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-lg">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ThemeToggleSubmenu />

        <DropdownMenuItem>
          <Link href="#" className="text-blue-500">
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="text-blue-500">
            Projects
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="text-blue-500">
            blogs
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="text-blue-500">
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="text-blue-500">
            contact
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
