"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { contactFormSchema } from "@/lib/validation";
import { MailIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

export default function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full text-left  lg:px-8 px-2 max-w-[600px]"
      >
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<UserIcon />}
          name="name"
          label="Your Name"
          placeholder="John Doe"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<MailIcon />}
          inputType="email"
          name="email"
          label="Your Email"
          placeholder="john@gmail.com"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="message"
          label="Your Message"
          placeholder="Your message here"
        />
        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
}
