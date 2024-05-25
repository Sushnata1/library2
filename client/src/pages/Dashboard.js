import React from "react";
import BooksForAdmin from "../components/BooksForAdmin";
import { useQuery } from "@apollo/client";
import { GREET } from "../queries";

function Dashboard() {
  const { loading, error, data } = useQuery(GREET);
  if (loading) return <h1>Loading . . .</h1>
  return (
    <>
      {
        error && <div className="bg-red-500 text-gray-50"></div>
      }
      <div className="container bg-secondary-400/75">
        <h1 className="p-y-2">Dashboard</h1>
        {data?.greet}
        <BooksForAdmin/>
      </div>
    </>
  );
}

export default Dashboard;
