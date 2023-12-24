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
