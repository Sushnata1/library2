import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query books {
    books {
      Id
      name
      author
      copies
      added_by
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation userSignUp($input: UserInput) {
    userSignUp(input: $input)
  }
`;

export const LOGIN_USER = gql`
  mutation userSignIn($input: UserSignInInput) {
    userSignIn(input: $input) {
      token
    }
  }
`;
export const GREET = gql`
  query {
    greet
  }
`;
