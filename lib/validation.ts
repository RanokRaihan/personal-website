import { z } from "zod";
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name can't be longer than 100 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(2, { message: "Message should be at least 2 characters long" })
    .max(500, { message: "Message can't be longer than 500 characters" }),
});

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters long" }),
});

export const ProjectFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title can't be longer than 100 characters" }),
  description: z
    .string()
    .min(10, { message: "Description should be at least 10 characters long" })
    .max(500, { message: "Description can't be longer than 500 characters" }),
  thumbnail: z.custom<File[]>().optional(),
  tags: z.string().optional(),
  technologies: z
    .string()
    .min(1, { message: "At least one technology is required" }),
  publishedAt: z.coerce.date().optional(),
  liveLink: z
    .string()
    .refine((val) => val === "" || z.string().url().safeParse(val).success, {
      message: "Invalid video URL",
    }),
  clientCode: z
    .string()
    .refine((val) => val === "" || z.string().url().safeParse(val).success, {
      message: "Invalid video URL",
    }),
  serverCode: z
    .string()
    .refine((val) => val === "" || z.string().url().safeParse(val).success, {
      message: "Invalid video URL",
    }),
  videoLink: z
    .string()
    .refine((val) => val === "" || z.string().url().safeParse(val).success, {
      message: "Invalid video URL",
    })
    .optional(),
  category: z.string(),
  status: z.enum(["draft", "published"]),
});
