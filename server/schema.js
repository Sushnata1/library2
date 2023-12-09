import { gql } from "apollo-server";
export default gql`

input UserSignInInput{
emailId: String!
password: String!
}
type UserSignInOutput{
token: String
}
input UserInput{
name:String
emailId:ID!
password:String!
}

type User{
name:String
emailId:ID!
password:String!
}

type Mutation{
    userSignIn(input: UserSignInInput): UserSignInOutput
    userSignUp(input: UserInput): String
}
type Query{
    greet:String
    users:[User]
}
`;