"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { sendContactMessageAction } from "@/actions/messageAction";
import { Form } from "@/components/ui/form";
import { contactFormSchema } from "@/lib/validation";
import { MessageSquareIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsLoading(true);
    try {
      const result = await sendContactMessageAction({
        name: values.name,
        email: values.email,
        subject: values.subject?.trim() ? values.subject.trim() : undefined,
        message: values.message,
      });

      if ("success" in result && result.success === false) {
        if (result.statusCode === 429) {
          toast.error(
            "You've sent a few messages already — please try again in a little while."
          );
        } else {
          toast.error(
            result.message || "Something went wrong. Please try again."
          );
        }
        return;
      }

      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[600px] space-y-6 px-2 text-left lg:px-8"
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
          fieldType={FormFieldType.EMAIL}
          name="email"
          label="Your Email"
          placeholder="john@gmail.com"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          icon={<MessageSquareIcon />}
          name="subject"
          label="Subject (optional)"
          placeholder="What's this about?"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="message"
          label="Your Message"
          placeholder="Tell me a bit about your project or question..."
        />

        <SubmitButton isLoading={isLoading}>Send message</SubmitButton>
      </form>
    </Form>
  );
}
