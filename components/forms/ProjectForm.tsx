"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";
import { projectCategories, projectDefaultValues, Status } from "@/constants";
import { addProject } from "@/lib/actions/project.action";
import { ProjectFormSchema } from "@/lib/validation";
import {
  GlobeIcon,
  Lightbulb,
  MonitorIcon,
  PencilIcon,
  PlayCircleIcon,
  ServerIcon,
  Tags,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import FileUploader from "../FileUploader";
import SubmitButton from "../SubmitButton";
import { SelectItem } from "../ui/select";

export default function ProjectForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // define form.
  const form = useForm<z.infer<typeof ProjectFormSchema>>({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      ...projectDefaultValues,
    },
  });

  // submit handler.
  async function onSubmit(values: z.infer<typeof ProjectFormSchema>) {
    setIsLoading(true);
    setServerError(null);
    let formData;
    if (values.thumbnail && values.thumbnail.length > 0) {
      const blobFile = new Blob([values.thumbnail[0]], {
        type: values.thumbnail[0].type,
      });
      formData = new FormData();
      formData.append("blobFile", blobFile);
      formData.append("fileName", values.thumbnail[0].name);
    }
    try {
      const projectData = {
        ...values,
        thumbnail: formData,
        publishedAt: values.publishedAt
          ? new Date(values?.publishedAt)
          : values.publishedAt,
      };
      const response = await addProject(projectData);
      if (response.error) {
        setServerError(response.error);
        return;
      }
      console.log(response);
      toast.success("Project added successfully");
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full text-left  lg:px-8 px-2 max-w-[768px]"
      >
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<PencilIcon />}
          name="title"
          label="Project Title"
          placeholder="Blood Donation App"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="description"
          label="Project Description"
          placeholder="This is a project description"
        />
        <div className="flex items-center justify-center gap-4">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.DATE_PICKER}
            name="publishedAt"
            label="Publication Date"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.SELECT}
            name="category"
            label="Project Category"
            placeholder="Select a Project Category"
          >
            {projectCategories.map((category) => (
              <SelectItem value={category} key={category}>
                <p className="cursor-pointer">{category}</p>
              </SelectItem>
            ))}
          </CustomFormField>
        </div>
        <div className="flex items-center justify-center gap-4">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            icon={<Tags />}
            name="tags"
            label="Tags"
            placeholder="React, Node.js, MongoDB"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.SELECT}
            name="status"
            label="Project status"
            placeholder="Select Project status"
          >
            {Status.map((status) => (
              <SelectItem value={status} key={status}>
                <p className="cursor-pointer">{status}</p>
              </SelectItem>
            ))}
          </CustomFormField>
        </div>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<Lightbulb />}
          name="technologies"
          label="Technology Used"
          placeholder="React, Node.js, MongoDB"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<MonitorIcon />}
          name="clientCode"
          label="Client Side Code Link"
          placeholder="https://github.com/username/project"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<ServerIcon />}
          name="serverCode"
          label="Server Side Code Link"
          placeholder="https://github.com/username/project"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<GlobeIcon />}
          name="liveLink"
          label="Live Website Link"
          placeholder="https://demo.com"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<PlayCircleIcon />}
          name="videoLink"
          label="Presentation video Link"
          placeholder="https://youtube.com/video"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SKELETON}
          name="thumbnail"
          label="Upload a Thumbnail"
          renderSkeleton={(field) => (
            <FormControl>
              <FileUploader files={field.value} onChange={field.onChange} />
            </FormControl>
          )}
        />
        {serverError && <p className="text-red-500 text-sm">{serverError}</p>}
        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
}
