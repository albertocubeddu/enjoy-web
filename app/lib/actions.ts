import { sql } from "@vercel/postgres";
const { db } = require("@vercel/postgres");

interface SportData {
  name: string;
  image: string;
}

export async function createSport(data: SportData) {
  const client = await db.connect();
  const { name, image } = data;

  try {
    // Begin transaction
    await client.query("BEGIN");

    // Insert data into the "sports" table
    const sportInsertion = await client.query(
      sql`
        INSERT INTO sports (name)
        VALUES (${name})
        RETURNING id
      `
    );

    const sportId = sportInsertion.rows[0].id;

    // Insert data into the "images" table
    await client.query(
      sql`
        INSERT INTO images (sport_id, image_url)
        VALUES (${sportId}, ${image})
      `
    );

    // Commit transaction
    await client.query("COMMIT");

    console.log("Sport created successfully.");
  } catch (error) {
    // Rollback transaction in case of error
    await client.query("ROLLBACK");

    console.error("Error creating sport:", error);
    throw error;
  } finally {
    // Release the client
    client.release();
  }
}
