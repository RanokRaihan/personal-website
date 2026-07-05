import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters"),
  email: z.string().email("Invalid email address"),
  subject: z
    .string()
    .max(200, "Subject must be at most 200 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

export const testimonialFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters"),
  email: z.string().email("Invalid email address"),
  role: z
    .string()
    .min(1, "Role is required")
    .max(150, "Role must be at most 150 characters"),
  company: z
    .string()
    .max(150, "Company must be at most 150 characters")
    .optional()
    .or(z.literal("")),
  linkedIn: z
    .string()
    .url("Enter a valid URL")
    .optional()
    .or(z.literal("")),
  quote: z
    .string()
    .min(10, "Testimonial must be at least 10 characters")
    .max(1000, "Testimonial must be at most 1000 characters"),
  relation: z.enum(["MENTOR", "PEER", "CLIENT", "INSTRUCTOR", "OTHER"], {
    required_error: "Please select how you know me",
  }),
});
