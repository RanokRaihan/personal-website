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
