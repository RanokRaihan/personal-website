"use client";

import { adminLogout } from "@/lib/actions/admin.actions";
import { LogOutIcon, User2Icon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const AdminDropdownMenu = () => {
  async function handleLogout() {
    await adminLogout();
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="border p-2 rounded-full bg-slate-100 dark:bg-slate-800 cursor-pointer">
          <User2Icon className="size-8 " />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon size={16} className="mr-2 rotate-180" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdminDropdownMenu;
