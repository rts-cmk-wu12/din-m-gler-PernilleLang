"use server";
 
import { z } from "zod";
 
const agentFormSchema = z.object({
  name: z.string().min(1, { message: "Dette felt skal udfyldes" }),
  email: z
    .string()
    .min(1, { message: "Dette felt skal udfyldes" })
    .email({ message: "Forkert email addresse" }),
  subject: z.
    string()
    .min(1, { message: "Dette felt skal udfyldes" }),
 text: z.
    string()
    .min(1, { message: "Dette felt skal udfyldes" }),
  newsletter: z.boolean().optional(),
});
 
export async function contactForm(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const text = formData.get("text");
  const newsletter = formData.has("newsletter");
 
  const validated = agentFormSchema.safeParse({
    name,
    email,
    subject,
    text,
    newsletter,
  });

  if (!validated.success) {
    return validated.error.format();
  }
  return validated;
}