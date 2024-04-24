import { z } from "zod";

export const PersonalInfoSchema = z.object({
  DOB: z.string().min(1, { message: "Date of birth is required" }),
  relationshipStatus: z
    .string()
    .min(1, { message: "Please select the relationship status." }),
  countryOfOrigin: z
    .string()
    .min(1, { message: "Please select the country of origin" })
    .refine((val) => val !== "DEFAULT", {
      message: "Please select the country of origin",
    }),
});

export type TPersonalInfo = z.infer<typeof PersonalInfoSchema>;
