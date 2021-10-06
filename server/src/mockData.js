// NOTE: Job's values was commented out

// const mocks = {
//   Query: () => ({
//     //   This will show "HOW MANY TIMES" of arrays in the query result
//     //  The default result is going to have 2 result in an Array. EX result: "spaceCats": [{"age:25"}, {"age":25}]
//     spaceCats: () => [...new Array(1)],
//   }),
//   SpaceCat: () => ({
//     id: () => "spacecat_01",
//     name: () => "spacecat pioneer 3",
//     //  This will yield just one result of each queries
//     missions: () => [...new Array(1)],
//   }),
//   Mission: () => ({
//     id: () => "asdfasdfasdfasdf",
//     name: () => "the MISSIONS name",
//     description: () => "Let's rock!",
//   }),
// };

//  TRACK values
const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

module.exports = mocks;
