import React from "react";
import {useNavigate} from 'react-router-dom'
function BookForAdmin({ book }) {
  const navigate = useNavigate();
  return (
    <div className="p-5 bg-yellow-50/75 border-green-500 border-2 rounded-md">
      Name : {book.name} <br />
      Author : {book.author} <br />
      Copies : {book.copies} <br />
      <div className="space-x-2 space-y-2"><button onClick={()=>{navigate(`/edit/${book.Id}`)}}>Edit</button><button className="w-8 h-8 rounded-full">+</button></div>
    </div>
  );
}

export default BookForAdmin;
