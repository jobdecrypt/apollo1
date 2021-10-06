## Back-end first steps

- On the back-end side, our first goal is to create a GraphQL server that can:

- Receive an incoming GraphQL query from our client
- Validate that query against our newly created schema
- Populate the queried schema fields with mocked data
- Return the populated fields as a response
- The Apollo Server library helps us implement this server quickly, painlessly, and in a production-ready way.

- In the server/src/ folder, open index.js.

- To create our server, we'll use the apollo-server package that we installed previously. From that package, we'll only need the named export ApolloServer, so we'll declare that constant between curly braces. Just below, we'll import our typeDefs from our schema.js file:
