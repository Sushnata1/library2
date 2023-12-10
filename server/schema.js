import { gql } from "apollo-server";
export default gql`
  input UserSignInInput {
    emailId: String!
    password: String!
  }
  type UserSignInOutput {
    token: String
  }

  input UserInput {
    name: String
    emailId: ID!
    password: String!
    type: String!
  }
  type User {
    name: String
    emailId: ID!
    password: String!
    type: String!
  }

  type Book{
    Id: ID!
    name: String!
    author: String!
    added_by: String!
    copies: Int!
  }
  input BookInput{
    name: String!
    author: String!
  }

  type Mutation {
    userSignIn(input: UserSignInInput): UserSignInOutput
    userSignUp(input: UserInput): String
    addBook(input: BookInput,copies:Int): String
    editBook(input: BookInput, Id: Int): String
    addCopies(Id:Int,copies:Int): String
  }
  type Query {
    greet: String
    users: [User]
    books: [Book]
    book(Id:Int): Book
  }
`;
