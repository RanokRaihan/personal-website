"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { loginFormSchema } from "@/lib/validation";
import { LockIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const { email, password } = values;

    //perform login
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full text-left px-2 "
      >
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<MailIcon />}
          inputType="email"
          name="email"
          placeholder="Email"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<LockIcon />}
          inputType="password"
          name="password"
          placeholder="Password"
        />
        <SubmitButton isLoading={isLoading}>Log in</SubmitButton>
      </form>
    </Form>
  );
}
