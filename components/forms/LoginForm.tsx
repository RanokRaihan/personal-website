"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { adminLogin } from "@/lib/actions/admin.actions";

import { loginFormSchema } from "@/lib/validation";
import { LockIcon, MailIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const router = useRouter();
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
    try {
      setIsLoading(true);
      const session = await adminLogin({ email, password });
      toast.success("Logged in successfully");
      router.push("/admin");
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message);
      } else {
        setServerError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
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
        {serverError && <div className="shad-error">{serverError}</div>}
        <SubmitButton isLoading={isLoading}>Log in</SubmitButton>
      </form>
    </Form>
  );
}
