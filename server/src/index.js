//TODO

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const mocks = require("./mockData");

// Next, we'll create an instance of the ApolloServer class and pass it our typeDefs in its options object:

/* const server = new ApolloServer({ typeDefs, Mok }); */

// NOTE!!!! --> We're using shorthand property notation with implied keys, because we've named our constant with the matching key (typeDefs).

// Finally, to start it up, we'll call the "ASYNC Listen method". When it resolves, it logs a nice little message letting us know that our server is indeed up and running:

/* server.listen().then(() => {
  console.log(`
        Server is running!
        Listening on port 4000
        Query at https://studio.apollographql.com/dev
    `);
}); */

// Save our changes and then run the server and check!

/* 
    We create a mocking data
*/

/* const server = new ApolloServer({
  typeDefs,
  mocks,
});

 const mocks = {
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
}; */

// const mocks = {
//   // Query: () => ({
//   //   SpaceCa
//   // })
//   SpaceCat: () => ({
//     id: () => "spacecat_01",
//     name: () => "spacecat pioneer",
//   }),
//   Mission: () => ({
//     id: () => "asdfasdfasdfasdf",
//     name: () => "the MISSIONS name",
//     description: () => "Let's rock!",
//   }),
// };

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
  console.log(`
        Server is running!
        Listening on port 4000
        Query at https://studio.apollographql.com/dev
    `);
});
