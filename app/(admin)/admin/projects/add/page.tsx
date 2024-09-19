import ProjectForm from "@/components/forms/ProjectForm";
import { Separator } from "@/components/ui/separator";

const AddProjectPage = () => {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl text-emerald-500 "> Add a project</h1>
        <Separator className="my-2" />
      </div>
      <div className="w-full">
        <ProjectForm />
      </div>
    </div>
  );
};

export default AddProjectPage;
