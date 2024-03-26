import { sql } from "@vercel/postgres";

import { Sport } from "./definitions";

import { unstable_noStore as noStore } from "next/cache";

export async function fetchSports() {
  noStore();

  try {
    const data = await sql<Sport>`
      SELECT id, name, image_url
      FROM sports;
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch sports data.");
  }
}
