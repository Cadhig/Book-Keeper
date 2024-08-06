const typeDefs = `
type RootQuery {
test: String!
}

type Query {
test: String!
}

type User {
_id: ID!
username: String!
email: String!
bookCount: Int!
savedBooks: [Book]!
}

type Book {
bookId: ID!
authors: [String!]
description: String!
title: String!
image: String!
link: String!
}

type Auth {
token: String!
user: User
}
`

module.exports = typeDefs