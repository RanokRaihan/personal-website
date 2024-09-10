import { DashboardIcon } from "@radix-ui/react-icons";
import { FolderOpen, NotebookPenIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <aside className="w-[300px] h-full  bg-white dark:bg-slate-900 shadow-md dark:shadow-none rounded-lg p-4">
      <div className="px-2">
        <Link href="/">
          <Image
            src="/assets/images/logo-main.svg"
            width={300}
            height={100}
            alt="Logo"
            className="cursor-pointer w-[150px] md:w-[150px]"
          />
        </Link>
      </div>
      <Separator className="my-4" />
      <nav className="h-full">
        <ul>
          <li>
            <SidebarLink
              href="/admin"
              icon={<DashboardIcon className="size-5" />}
            >
              Dashboard
            </SidebarLink>
          </li>
          <li>
            <SidebarLink
              href="/admin/projects"
              icon={<FolderOpen className="size-5" />}
            >
              Projects
            </SidebarLink>
          </li>
          <li>
            <SidebarLink
              href="/admin/blogs"
              icon={<NotebookPenIcon className="size-5" />}
            >
              Blogs
            </SidebarLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
