import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z.string().trim().min(1, { message: "Required" }),
    email: z.string().min(1, {message: "Required"}).email(),
    number: z
      .string()
      .trim()
      .min(1, { message: "Required" })
      .regex(/^[0-9]*$/, { message: "Phone must be digits" })
      .length(10, {
        message: "Number should be exactly 10 digits.",
      }),
    address: z.string().trim().min(1, { message: "Required" }).max(260),
    password: z.string().trim().min(1, { message: "Required" }).max(8),
    cPassword: z.string().trim().min(1, { message: "Required" }),
  })
  .refine((data) => data.password === data.cPassword, {
    message: "Confirm password does not match!",
    path: ["cPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
