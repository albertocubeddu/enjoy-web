const { v4: uuidv4 } = require("uuid");

const sports = [
  {
    id: uuidv4(), // Generate a UUID
    name: "Football",
    image_url: "/sports/football.jpg",
  },
];

module.exports = {
  sports,
};
