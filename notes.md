# What is a Schema?

    - (SDL) Schema Definition Language -> A collection of "OBJECT TYPES and FIELDS" (ex: Int, String, Boolean, etc)
        -   ex:

        type SpaceCat{
            name: String
            age: Int
            missions: [missions]
        }

    -   NOTE!!! -> inside the FIELD it is not separated by a comma unlike JSON.
    -   It's a very good practice to document your schema


    - "SCALAR" means like an Ints or Strings or it can be another object type. For Example: the Track object type in our schema will have an author field of type Author.

    -   We declare a type using the type keyword, followed by the name of the type ("PascalCase" is best practice), then opening brackets to hold its contained fields:
    -   Ex:
            type SpaceCat{
                # Fields go here
            }

    -   Fields are declared by their name ("camelCase"), a colon, and then the type of the field ("scalar or object"). A field can also contain a list, indicated by square brackets:
    -   Ex:
            type SpaceCat {
                age: Int
                missions: [Mission]
            }

    -   Unlike Javascript objects (which look very similar), fields are not separated by commas. In addition, we can indicate whether each field value is nullable or non-nullable.
    -   IMPORTANT!!! -> If a field should never be null, we add an exclamation mark after its type:
            -   Ex:
                        type SpaceCat{
                            <!-- the "name" here is "Non-nullable" -->
                            name:String!
                            age:Int
                            missions:[Mission]
                        }

=== Define a SpaceCat type with the following fields: name of type String (non null), age of type Int, and missions of type List of Mission ===

    const typeDefs = gql`
        # we write our types here
        type SpaceCat {
        name:String!
        age:Int
        missiongs: [Mission]`
        }


    - NOTE!!! -> use DOUBLE QOUTES for writting comments and TRIPPLE DOUBLE QOUTES for the legnthier comments
        -   Ex:
                "single comment"

                -   Ex2:
                        """
                        I'm  a lengthier
                        comment. I'm a block description
                        with a line break
                        """

====== FOLLOW ALONG ON THIS WEBSITE -> "The Author type" - https://odyssey.apollographql.com/lift-off-part1/building-our-schema ======

    -   "A track is a group of Modules that teaches about a specific topic"
    -    Ex:
            type Track {
                #   Fields go here
            }


    -   Now for the track's fields, we'll have:

        id of type ID!
        title of type String!
        author of type Author! (we'll define the Author type when we're done with Track)
        thumbnail of type String (a URL to the image for the track's card)
        length of type Int
        modulesCount of type Int

    -   Here's our complete "Track" type:
    -   Ex:
            "A track is a group of Modules that teaches about a specific topic"
                type Track {
                    id: ID!
                    title: String!
                    author: Author!
                    thumbnail: String
                    length: Int
                    modulesCount: Int
                }

    -   The "Author" type contains only three fields:

        id of type ID!
        name of type String!
        photo of type String

    -   Here's the complete type:
    -   Ex:
            type Author {
                id: ID!
                name: String!
                photo: String
            }

    -   Excellent, our first feature is now fully represented in our schema. These are the data types we'll be able to retrieve.

        We're still missing one piece though: how to tell the GraphQL server what to retrieve when we query it. Remember, we don't have multiple specific endpoints to target different types like a REST API does.
        Instead, we define a special Query type.

    -   The "Query" type

    -   The Query type is defined like any other object type:
    -   Ex:
            type Query {
                # Fields go here
            }

    -   The fields of this type are entry points into the rest of our schema. These are the top-level fields that our client can query for.

    -    For now, we're only interested in "FETCHING" the track list for our homepage. Let's name that specific query "tracksForHome" to make it as descriptive as possible.
    -    We want this query to return a non-null list of non-null Tracks. We'll also add a nice description:
    -       Ex:
                type Query {
                    "Get tracks array for homepage grid"
                    tracksForHome: [Track!]!
                }

    -   Our "SCHEMA" is now fully defined to support our first feature! Here's how the whole schema looks:

    ===>    type Query {
            "Get tracks array for homepage grid"
            tracksForHome: [Track!]!
    }
        " A track is a group of Modules that teaches about a specific topic"

            type Track {
                id: ID!
                    "The track's title"
                title: String!
                    "The track"s main author"
                author: Author!
                    "The track main illustration to display in track card or track page detail"
                thumbnail: String
                    "The track's approximate length to complete , in minutes"
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

======== CODE CHALLENGE =========

    -   Create a full schema with: a type Query containing a field spaceCats to fetch a List of SpaceCat. A type SpaceCat with its subfields: id of type ID!, name of type String!, age of type Int and missions of type List of Mission.
        Finally define the Mission type with its subfields: id of type ID!, name of type String!, and description of type String!.

    -       My Code:

                    const typeDefs = gql`

                   # write your schema definitions here

                    type Query {
                        spaceCats: [SpaceCat]
                    }

                    type SpaceCat {
                        id: ID!
                        name: String!
                        age: Int
                        missions: [Mission]
                    }

                    type Mission {
                        id: ID!
                        name: String!
                        description: String!
                    }
                `

====== Continue to notes2.md ======
