import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be a string",
    })
    .refine((value) => value.trim().length > 0, {
      message: "Name is required",
    })
    .refine((value) => /^[a-zA-Z\s]+$/.test(value), {
      message: "Invalid characters in the name",
    }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .refine((value) => value.trim().length > 0, {
      message: "Email is required",
    }),
  message: z
    .string({
      required_error: "A message is required",
    })
    .refine((value) => value.trim().length > 0, {
      message: "Message cannot be empty",
    }),
});

export type TContactFormSchema = z.infer<typeof contactFormSchema>;
