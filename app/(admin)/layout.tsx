import Sidebar from "@/components/admin/Sidebar";
import TopMenu from "@/components/admin/TopMenu";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-8 w-full h-screen overflow-hidden bg-slate-100 dark:bg-slate-800/50 p-4">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-6">
        <TopMenu />
        <ScrollArea className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
}
