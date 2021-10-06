/* 
-   To obain the "gql" Template Literal we need to install -> npm install apollo-server graphql
-   and inside this file (schema.js) let's obtain the gql template literal form the installled apollo-server
*/

const { gql } = require("apollo-server");

/* 
-   NOTES!!! -> What is this gql thing we're importing? It's a tagged template literal, used for wrapping GraphQL strings like the schema definition we're about to write.

This converts GraphQL strings into the format that Apollo libraries expect when working with operations and schemas, and it also enables syntax highlighting.

Next, let's declare a typeDefs (short for "type definitions") constant, assigning the gql template where our definitions will go. While we're at it, let's "EXPORT typeDefs now", because we'll need it for our server file later on.
*/

const typeDefs = gql`
  # Job's code

  # type Query {
  #   spaceCats: [SpaceCat]
  # }
  # type SpaceCat {
  #   id: ID!
  #   name: String!
  #   age: Int
  #   missions: [Mission]
  # }
  # type Mission {
  #   id: ID!
  #   name: String!
  #   description: String!
  # }

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }
  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

// let's export our typeDefs
module.exports = typeDefs;
