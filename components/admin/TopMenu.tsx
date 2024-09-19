import { getLoggedInUser } from "@/lib/actions/admin.actions";
import { GearIcon } from "@radix-ui/react-icons";
import { BellIcon, MailIcon, SearchIcon } from "lucide-react";
import { ModeToggle } from "../ThemeToggleButton";
import { Separator } from "../ui/separator";
import AdminDropdownMenu from "./AdminDropdownMenu";

const TopMenu = async () => {
  const user = await getLoggedInUser();
  console.log(user);
  return (
    <div className="w-full flex items-center justify-between bg-white dark:bg-slate-900 rounded-lg shadow-md p-4">
      <div className="flex gap-2 items-center">
        <SearchIcon className="size-5" />
        <input
          placeholder="search here..."
          className="bg-slate-50/0 focus:ring-0 focus:outline-none placeholder:italic placeholder:font-light !important"
        />
      </div>
      <div className="flex  gap-4 items-center">
        <BellIcon className="size-6" />
        <MailIcon className="size-6" />
        <ModeToggle />
        <GearIcon className="size-6" />
        <Separator orientation="vertical" className="h-10" />
        <div className="flex flex-col items-end">
          <span className="text-emerald-500 text-lg">{user?.name}</span>
          <span className="text-sm">{user?.labels[0]}</span>
        </div>
        <AdminDropdownMenu />
      </div>
    </div>
  );
};

export default TopMenu;
