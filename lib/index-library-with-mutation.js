const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String,
    books: [Book]
  }

  type Query {
    authors: [Author]
    books: [Book]
  }

  type Mutation {
    addBook(title: String, authorName: String): Book
  }
`

const authors = [{ name: 'J.K. Rowling' }, { name: 'Michael Crichton' }]

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: { name: 'J.K. Rowling' }
  }, {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: { name: 'J.K. Rowling' }
  }, {
    title: 'Jurassic Park',
    author: { name: 'Michael Crichton' }
  }
]

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
  Author: {
    books: (author, args, context, info) => {
      return books.filter(book => book.author.name === author.name)
    }
  },
  Mutation: {
    addBook: (root, args, context, info) => {
      const author = { name: args.authorName }

      authors.push(author)

      const book = {
        title: args.title,
        author
      }

      books.push(book)

      return book
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
