const { db } = require("@vercel/postgres");
const { sports, sport_images } = require("../app/lib/placeholder-data.js");

async function seedSports(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "sports" table if it doesn't exist
    const createSportsTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sports (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    // Create the "images" table if it doesn't exist
    const createImagesTable = await client.sql`
      CREATE TABLE IF NOT EXISTS images (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        sport_id UUID REFERENCES sports(id),
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "sports" and "images" tables`);

    // Insert data into the "sports" table
    const insertedSports = await Promise.all(
      sports.map(async (sport) => {
        return client.sql`
          INSERT INTO sports (id, name)
          VALUES (${sport.id}, ${sport.name})
          ON CONFLICT (id) DO NOTHING
        `;
      })
    );

    console.log(`Seeded ${insertedSports.length} sports`);

    // Insert data into the "images" table
    const insertedImages = await Promise.all(
      sport_images.map(async (image) => {
        return client.sql`
          INSERT INTO images (id, sport_id, image_url)
          VALUES (${image.id}, ${image.sport_id}, ${image.image_url})
          ON CONFLICT (id) DO NOTHING
        `;
      })
    );

    console.log(`Seeded ${insertedImages.length} images`);

    return {
      createSportsTable,
      createImagesTable,
      sports: insertedSports,
      images: insertedImages,
    };
  } catch (error) {
    console.error("Error seeding sports:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  try {
    await seedSports(client);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
