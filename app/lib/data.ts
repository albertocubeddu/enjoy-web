import { sql } from "@vercel/postgres";
import { Sport } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchSports() {
  noStore();

  try {
    const data = await sql<Sport>`
      SELECT s.id, s.name, i.image_url
      FROM sports s
      JOIN images i ON s.id = i.sport_id;
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch sports data.");
  }
}
