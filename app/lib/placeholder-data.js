const { v4: uuidv4 } = require("uuid");

const sports = [
  {
    id: "1e56d9f7-97ef-4bb1-bbb7-5cc04dc8be76", // Football ID
    name: "Football",
  },
];

const sport_images = [
  {
    id: uuidv4(), // Generate a UUID
    sport_id: "1e56d9f7-97ef-4bb1-bbb7-5cc04dc8be76", // Football ID
    image_url: "/sports/football.jpg",
  },
];

module.exports = {
  sports,
  sport_images,
};
