import { describe } from "node:test";
import { z } from "zod";

export const interestInfoSchema = z.object({
  description: z.string().min(10).max(250),
  travelPreference: z.string().array().min(1, { message: "Required" }),
});

export type TInterestInfo = z.infer<typeof interestInfoSchema>;
