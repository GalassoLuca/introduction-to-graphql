const { ApolloServer, gql } = require('apollo-server')
const request = require('./request')

const typeDefs = gql`
  type Person {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    homeworld: String
    films: String
    species: String
    vehicles: String
    starships: String
    url: String
    created: String
    edited: String
  }

  type Query {
    people: [Person]
  }
`

const resolvers = {
  Query: {
    people: async () => request('https://swapi.co/api/people')
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
