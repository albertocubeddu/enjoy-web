const { db } = require("@vercel/postgres");
const bcrypt = require("bcrypt");

// Define your placeholder data for Sports, Centers, Tags, and Groups
const {
  sports,
  centers,
  tags,
  groups,
} = require("../app/lib/placeholder-data.js");

async function seedSports(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "sports" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sports (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL,
      );
    `;

    console.log(`Created "sports" table`);

    // Insert data into the "sports" table
    const insertedSports = await Promise.all(
      sports.map(async (sport) => {
        return client.sql`
          INSERT INTO sports (id, name, image_url, date_edited, tags, center_id)
          VALUES (${sport.id}, ${sport.name}, ${sport.image_url}, ${sport.date_edited}, ${sport.tags}, ${sport.center_id})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedSports.length} sports`);

    return {
      createTable,
      sports: insertedSports,
    };
  } catch (error) {
    console.error("Error seeding sports:", error);
    throw error;
  }
}

// Implement similar functions for seeding Centers, Tags, and Groups...

async function main() {
  const client = await db.connect();

  await seedSports(client);
  // Add calls to seedCenters, seedTags, and seedGroups functions here...

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
