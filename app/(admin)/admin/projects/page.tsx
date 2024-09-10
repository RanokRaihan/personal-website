import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

const AdminProjectPage = () => {
  return (
    <main className="p-4">
      <div className="flex items-end justify-between">
        <h1 className="text-3xl text-emerald-500">Manage Projects</h1>
        <Button asChild variant="green">
          <Link href="/admin/projects/add" className="">
            <PlusIcon />
            Add a project
          </Link>
        </Button>
      </div>
      <Separator className="my-4" />
    </main>
  );
};

export default AdminProjectPage;
