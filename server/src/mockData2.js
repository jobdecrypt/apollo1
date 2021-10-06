const mocks = {
  Query: () => ({
    //   This will show "HOW MANY TIMES" of arrays in the query result
    //  The default result is going to have 2 result in an Array. EX result: "spaceCats": [{"age:25"}, {"age":25}]
    spaceCats: () => [...new Array(1)],
  }),
  SpaceCat: () => ({
    id: () => "spacecat_01",
    name: () => "spacecat pioneer 3",
    //  This will yield just one result of each queries
    missions: () => [...new Array(1)],
  }),
  Mission: () => ({
    id: () => "asdfasdfasdfasdf",
    name: () => "the MISSIONS name",
    description: () => "Let's rock!",
  }),
};
() => console.log("hello");

module.exports = mocks;
