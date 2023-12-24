import React from 'react'

import { useQuery } from "@apollo/client";

import { GET_BOOKS } from "../queries";

import Book from './Book';

function BooksForAdmin() {
    const { loading, error, data } = useQuery(GET_BOOKS, { fetchPolicy: 'network-only' });
  var output;
  if (loading) {
    output = "Loading . . .";
  }
  else if (error) {
    output = `Error : ${error.message}`;
  }
  else {
    output = data?.books?.map(book => <Book key={book.Id} book={book} />);
  }
  return (
      <div className="grid grid-cols-4 gap-4 p-5">{ output}</div>
  )
}

export default BooksForAdmin