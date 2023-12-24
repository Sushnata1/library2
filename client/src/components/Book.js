import React from "react";

function Book({ book }) {
  return (
    <div className="p-5 bg-yellow-50/75 border-green-500 border-2 rounded-md">
      Name : {book.name} <br />
      Author : {book.author} <br />
    </div>
  );
}

export default Book;
