"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { submitTestimonialAction } from "@/actions/testimonialAction";
import { Form } from "@/components/ui/form";
import { SelectItem } from "@/components/ui/select";
import { testimonialFormSchema } from "@/lib/validation";
import type { ITestimonialPayload } from "@/types";
import { BuildingIcon, LinkedinIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

const relations = [
  { value: "PEER", label: "Colleague / Peer" },
  { value: "MENTOR", label: "Mentor" },
  { value: "CLIENT", label: "Client" },
  { value: "INSTRUCTOR", label: "Instructor" },
  { value: "OTHER", label: "Other" },
];

export default function TestimonialForm({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof testimonialFormSchema>>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      company: "",
      linkedIn: "",
      quote: "",
      relation: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof testimonialFormSchema>) {
    setIsLoading(true);
    try {
      const payload: ITestimonialPayload = {
        name: values.name,
        email: values.email,
        role: values.role,
        company: values.company?.trim() ? values.company.trim() : undefined,
        linkedIn: values.linkedIn?.trim() ? values.linkedIn.trim() : undefined,
        quote: values.quote,
        relation: values.relation,
      };

      const result = await submitTestimonialAction(payload);

      if ("success" in result && result.success === false) {
        toast.error(
          result.message || "Something went wrong. Please try again."
        );
        return;
      }

      toast.success(
        "Thanks! Your testimonial was submitted and will appear once approved."
      );
      form.reset();
      onSuccess?.();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            icon={<UserIcon />}
            name="name"
            label="Your Name"
            placeholder="Jane Smith"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.EMAIL}
            name="email"
            label="Your Email"
            placeholder="jane@company.com"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            icon={<UserIcon />}
            name="role"
            label="Your Role"
            placeholder="Senior Engineer"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            icon={<BuildingIcon />}
            name="company"
            label="Company (optional)"
            placeholder="Acme Inc."
          />
        </div>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<LinkedinIcon />}
          name="linkedIn"
          label="LinkedIn URL (optional)"
          placeholder="https://linkedin.com/in/janesmith"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SELECT}
          name="relation"
          label="How do you know me?"
          placeholder="Select a relationship"
        >
          {relations.map((r) => (
            <SelectItem key={r.value} value={r.value}>
              {r.label}
            </SelectItem>
          ))}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="quote"
          label="Your Testimonial"
          placeholder="Share a few words about working with me..."
        />

        <SubmitButton isLoading={isLoading}>Submit testimonial</SubmitButton>
      </form>
    </Form>
  );
}
