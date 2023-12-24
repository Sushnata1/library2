import React from "react";
import BooksForAdmin from "../components/BooksForAdmin";

var greeting = "Hello World";

function Dashboard() {
  return (
    <>
      <div className="container bg-secondary-400/75">
        <h1 className="p-y-2">Dashboard</h1>
        {greeting}
        <BooksForAdmin/>
      </div>
    </>
  );
}

export default Dashboard;
