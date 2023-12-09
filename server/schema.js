import { gql } from "apollo-server";
export default gql`

input UserSignInInput{
emailId: String!
password: String!
}
type UserSignInOutput{
token: String
}

type Mutation{
    userSignIn(input: UserSignInInput): UserSignInOutput
}
type Query{
    greet:String
}
`;