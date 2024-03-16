const sports = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Football",
    image_url: "/customers/delba-de-oliveira.png",
    centers: "all",
  },
];

const centers = [
  {
    sport_id: sports[0].id,
    name: "Stronghold London Fileds",
    tags: ["Bouldering", "Climbing"],
    date: "2022-12-06",
  },
];

module.exports = {
  sports,
  centers,
};
