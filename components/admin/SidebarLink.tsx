import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
interface CustomLinkProps {
  icon: React.ReactNode;
  href: string;
  children: React.ReactNode;
}
const SidebarLink = ({ icon, href, children }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-between text-xl  p-2 hover:bg-slate-100 hover:dark:bg-slate-700 rounded-lg"
    >
      <div className="flex items-center gap-4">
        {icon}
        <span> {children}</span>
      </div>
      <ChevronRightIcon className="size-8" />
    </Link>
  );
};

export default SidebarLink;
