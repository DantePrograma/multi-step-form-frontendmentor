import { z } from "zod";

export const useSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(15, { message: "Name must be less than 15 characters" }),
  email: z.string().email({ message: "Please provide a valid email" }),
  phone: z
    .string()
    .min(3, { message: "Minimum 3 characters required" })
    .max(15, { message: "Phone number must be less than 15 characters" }),
  plan: z.enum(["Arcade", "Advanced", "Pro"]).default("Arcade"),
  planLength: z.enum(["monthly", "yearly"]).default("yearly"),
  isLargerStorage: z.boolean(),
  isCustomizableProfile: z.boolean(),
  isOnlineService: z.boolean(),
});
