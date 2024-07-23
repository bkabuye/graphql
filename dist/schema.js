export const typeDefs = `#graphql

# Game type defines Game ID, title and Platforms
type Game {
   id: ID!
   title: String!
   platform: [String!]!
   reviews: [Review!]
}

# Review type defines Ratings and Content 
type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}

# Review type defines Authors and thier Verification
type Author {
    id: ID!
    name: String!
    verified: String!
    reviews: [Review!]
}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "reviews, games & authors" query returns an array of zero or more reviews (defined above).

type Query {
    reviews: [Review]
    review(id:ID!): Review # filter by argument or parameter and return single item
    games: [Game]
    game(id:ID!): Game
    authors: [Author]
    author(id:ID!): Author
}

  # Mutation to delete Game from db
type Mutation {
  addGame(game: AddGameInput!): Game  
  deleteGame(id: ID!): [Game]
  updateGame(id: ID!, edits: EditGameInput!): Game
}

 # add object with these properties
input AddGameInput {
    title: String!,
    platform: [String!]!
}

# update object with inputs
input EditGameInput {
    title: String,
    platform: [String!]
}
`;
