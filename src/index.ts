import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'
import { typeDefs } from "./schema.js"
import {resolvers} from './resolvers.js'

//setup server 
const server = new ApolloServer({
  typeDefs,
  resolvers
})

//setup server port
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log('Server started on port', 4000)

