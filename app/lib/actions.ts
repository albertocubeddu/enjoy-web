"use server";

import { db } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

interface SportData {
  name?: string;
  image: string;
}

export async function createSport(data: SportData) {
  const client = await db.connect();

  try {
    await client.query("BEGIN");

    // Insert data into the "sports" table
    const insertedSport = await client.query({
      text: `
        INSERT INTO sports (name)
        VALUES ($1)
        RETURNING id
      `,
      values: [data.name],
    });

    const sportId = insertedSport.rows[0].id;

    // Insert data into the "images" table
    await client.query({
      text: `
        INSERT INTO images (sport_id, image_url)
        VALUES ($1, $2)
      `,
      values: [sportId, data.image],
    });

    await client.query("COMMIT");

    console.log("Sport created successfully.");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error creating sport:", error);
    throw error;
  } finally {
    client.release();
  }
}

//Delete Sport

export async function deleteSport(sportId: string | number) {
  console.log('here')
  const client = await db.connect();

  try {
    await client.query("BEGIN");

    // We need to invert this two queries to enable the delete of the sport and the images.
    // This is befcause you DB is structured with FK and you need to follow the order; 
    // Even better you should use ONDELETE (Cascade) to delete the images when the sport is deleted.
      // Delete the associated images from the "images" table
      await client.query({
        text: `
          DELETE FROM images
          WHERE sport_id = $1
        `,
        values: [sportId],
      });

    // Delete the sport record from the "sports" table
    await client.query({
      text: `
        DELETE FROM sports
        WHERE id = $1
      `,
      values: [sportId],
    });

  

    await client.query("COMMIT");

    // Following the new pattern we going to revalidate the path to reload the information from serverside.
    revalidatePath('/sports')

    console.log("Sport and associated images deleted successfully.");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error deleting sport and associated images:", error);
    throw error;
  } finally {
    client.release();
  }
}
