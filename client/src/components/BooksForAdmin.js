import React from 'react'

import { useQuery } from "@apollo/client";

import { GET_BOOKS } from "../queries";

import BookForAdmin from './BookForAdmin';

function BooksForAdmin() {
    const { loading, error, data } = useQuery(GET_BOOKS, { fetchPolicy: 'network-only' });
  var output;
  if (loading) {
    output = "Loading . . .";
  }
  if (error) {
    output = `Error : ${error.message}`;
  }
  if (data) {
    output = data?.books?.map(book => <BookForAdmin key={book.Id} book={book} />);
  }
  return (
      <div className="grid grid-cols-4 gap-4 p-5">{ output}</div>
  )
}

export default BooksForAdmin