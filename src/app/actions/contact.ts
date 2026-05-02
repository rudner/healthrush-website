"use server";

import { supabase } from "@/lib/supabase";

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const organization = formData.get("organization") as string;
  const type = formData.get("type") as string;
  const message = formData.get("message") as string;

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    phone: phone || null,
    organization: organization || null,
    type: type || null,
    message,
  });

  if (error) return { success: false, error: error.message };
  return { success: true };
}
