"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true });

export async function createSport(formData: FormData) {
  const { name, image } = CreateInvoice.parse({
    name: formData.get("name"),
    image: formData.get("image") as Blob,
  });
  await sql`
    INSERT INTO sports (name, image_url)
    VALUES (${name}, ${image})
  `;
}
